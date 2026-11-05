/* ═══════════════════════════════════════════════════════════════
   교사용 메모 — 강의안 위에 띄우는 흰 판
   ───────────────────────────────────────────────────────────────
   수업 중에 교사가 손으로 무언가를 덧대고 싶을 때가 있다. 학생이
   물은 낱말을 적어 주고, 오늘의 어미에 형광펜을 긋고, 예문 옆에
   한 줄 더 써 준다. 그 자리를 만들어 주지 않으면 교사는 강의안을
   내리고 딴 창을 열게 되고, 그 순간 수업이 끊긴다.

   강의안 자체에는 손대지 않는다. 이 파일 하나가 제 모양(style)과
   제 화면(DOM)과 제 동작을 다 들고 있어서, index.html 에 줄 하나만
   더하면 붙고 그 줄을 지우면 흔적 없이 떨어진다. 급마다 style.css 와
   engine.js 가 따로 복제되어 있는 구조라, 손댈 곳을 한 파일로 묶어
   두는 편이 네 벌을 맞춰 고치기에 낫다.

   판 내용은 슬라이드를 넘겨도 지워지지 않는다. 한 과를 이어 설명하며
   앞 장으로 돌아갔다 오는 일이 흔해서다.
   TODO: 과를 옮길 때(loadLesson) 판을 비울지는 수업에서 써 보고 정한다.
   ═══════════════════════════════════════════════════════════════ */
(() => {
  'use strict';

  /* 판에 쓰는 색 여덟. 마지막(검정)이 기본이다. */
  const COLORS = [
    ['#e53935', '빨강'], ['#fb8c00', '주황'], ['#fdd835', '노랑'], ['#43a047', '초록'],
    ['#1e88e5', '파랑'], ['#3949ab', '남색'], ['#8e24aa', '보라'], ['#111111', '검정'],
  ];
  const PEN_W = 4;        /* 펜은 굵기를 고르지 않는다 — 고를 것이 많으면 수업이 멈춘다 */
  const ERASER_W = 20;
  const HL_STEPS = [[12, 4, '얇게'], [20, 8, '보통'], [32, 13, '굵게']];  /* [붓 굵기, 아이콘 막대 높이, 이름] */
  /*
   * 글자 크기 — 교실 빔으로 띄우면 24px 가 작고, 한 화면에 여러 줄을 적을
   * 때는 크다. 고정해 두었더니 「글자 크기를 조절할 수 있게」 요청이 왔다
   * (2026-09-16). 형광펜 굵기와 같은 자리·같은 모양으로 둔다.
   * [글자 크기(px), 단추에 보일 크기(px), 이름]
   */
  const TEXT_STEPS = [[18, 11, '작게'], [24, 14, '보통'], [36, 17, '크게'], [52, 20, '아주 크게']];
  const TEXT_DEFAULT = 24;
  const UNDO_MAX = 30;

  /*
   * 도구 커서. 판 위에서 십자가 보이면 지금 무엇을 들고 있는지가 안 보인다.
   * 이모지를 그대로 커서로 만든다. 핫스팟은 펜·형광펜이 펜촉(4,28),
   * 지우개는 한가운데(16,16)다.
   */
  const cursor = (emoji, hx, hy) => {
    const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='32' height='32'>` +
                `<text x='2' y='26' font-size='24'>${emoji}</text></svg>`;
    return `url("data:image/svg+xml;utf8,${encodeURIComponent(svg)}") ${hx} ${hy}, crosshair`;
  };
  const CURSOR = {
    pen:    cursor('🖊️', 4, 28),
    hl:     cursor('🖍️', 4, 28),
    eraser: cursor('🧽', 16, 16),
    text:   'text',
  };

  /* ══════════ 모양 ══════════ */
  const CSS = `
  .km-btn{
    display:inline-flex;align-items:center;gap:7px;height:34px;padding:0 14px;border-radius:999px;
    border:2px solid var(--foreground,#14213d);background:#fff;color:var(--foreground,#14213d);
    font-family:inherit;font-weight:700;font-size:13px;line-height:1;cursor:pointer;
    transition:background .15s,color .15s;
  }
  .km-btn:hover,.km-btn.on{background:var(--foreground,#14213d);color:#fff}
  .km-btn svg{width:16px;height:16px}
  .km-btn:focus-visible{outline:3px solid #e2553f;outline-offset:2px}

  /* 창. 슬라이드는 아래에서 계속 넘어가므로 화면에 고정해 띄운다. */
  .km{
    position:fixed;width:700px;height:420px;z-index:60;display:none;flex-direction:column;
    background:#fff;border:2px solid #14213d;border-radius:12px;overflow:hidden;
    box-shadow:0 14px 40px rgba(20,33,61,.25);
    resize:both;min-width:520px;min-height:260px;transition:width .15s,height .15s;
  }
  .km.on{display:flex}
  @media (prefers-reduced-motion:reduce){.km{transition:none}}

  .km-bar{
    min-height:44px;display:flex;flex-wrap:wrap;align-items:center;gap:6px;padding:5px 10px;
    background:#14213d;color:#fff;cursor:move;user-select:none;
  }
  .km-bar>*{flex-shrink:0}
  .km-title{font-family:'Do Hyeon',inherit;font-size:15px;margin-right:6px;white-space:nowrap;font-weight:400}
  .km-tool{
    height:30px;min-width:30px;padding:0 6px;border-radius:7px;border:1.5px solid rgba(255,255,255,.35);
    background:transparent;color:#fff;cursor:pointer;display:inline-flex;align-items:center;justify-content:center;
    font-family:inherit;font-size:16px;line-height:1;
  }
  .km-tool:hover{background:rgba(255,255,255,.12)}
  .km-tool.on{background:#fff;color:#14213d;border-color:#fff}
  .km-tool:focus-visible{outline:2px solid #e2553f;outline-offset:1px}
  .km-close{margin-left:auto;border-color:transparent}

  /* 형광펜 굵기 — 형광펜을 들었을 때만 나온다 */
  .km-hlsize{display:none;align-items:center;gap:3px;margin-left:2px;padding:2px 4px;border-radius:7px;background:rgba(255,255,255,.1)}
  .km-hlsize.show{display:inline-flex}
  .km-hs{width:26px;height:26px;border-radius:6px;border:1.5px solid transparent;background:transparent;cursor:pointer;display:grid;place-items:center;padding:0}
  .km-hs i{display:block;width:16px;border-radius:3px;background:#fff;opacity:.8}
  .km-hs.on{border-color:#fff;background:rgba(255,255,255,.18)}
  .km-hs.on i{opacity:1}
  .km-hs:focus-visible{outline:2px solid #e2553f;outline-offset:1px}

  /* 글자 크기 — 글자 도구를 들었을 때만 나온다 */
  .km-tsize{display:none;align-items:center;gap:3px;margin-left:2px;padding:2px 4px;border-radius:7px;background:rgba(255,255,255,.1)}
  .km-tsize.show{display:inline-flex}
  .km-ts{width:26px;height:26px;border-radius:6px;border:1.5px solid transparent;background:transparent;color:#fff;cursor:pointer;display:grid;place-items:center;padding:0;font-family:inherit;font-weight:700;line-height:1;opacity:.8}
  .km-ts.on{border-color:#fff;background:rgba(255,255,255,.18);opacity:1}
  .km-ts:focus-visible{outline:2px solid #e2553f;outline-offset:1px}

  .km-sep{width:1px;height:20px;background:rgba(255,255,255,.3);margin:0 3px}
  .km-sw{width:18px;height:18px;border-radius:50%;border:2px solid #fff;padding:0;cursor:pointer;opacity:.7}
  .km-sw.on{opacity:1;box-shadow:0 0 0 2px #14213d,0 0 0 4px #fff}
  .km-sw:focus-visible{outline:2px solid #e2553f;outline-offset:3px}

  /* 판. 연한 노트 줄을 깔아 글씨가 삐뚤어지지 않게 한다. */
  .km-board{
    flex:1;position:relative;overflow:hidden;touch-action:none;background:#fff;
    background-image:linear-gradient(#f1ece1 1px,transparent 1px);background-size:100% 32px;
  }
  .km-board canvas{position:absolute;inset:0;width:100%;height:100%}
  .km-board .km-tmp{pointer-events:none}
  /* 미리보기도 결과와 같은 합성으로 겹쳐야 그으면서 본 색이 그대로 남는다 */
  .km-board .km-tmp.hl{mix-blend-mode:multiply}

  /* 글상자 — PPT 방식. 편집 중에만 테두리와 손잡이가 보인다. */
  .km-tw{position:absolute;min-width:180px;padding:6px;border:1.5px dashed #e2553f;border-radius:3px;background:rgba(255,255,255,.7);cursor:move}
  .km-tw .km-grip{position:absolute;top:-24px;left:-1.5px;height:20px;padding:0 8px;background:#e2553f;color:#fff;font-size:11px;font-weight:700;border-radius:5px 5px 0 0;display:flex;align-items:center;gap:4px;cursor:move;user-select:none}
  /* 폭·높이를 손으로 잡았으면 그 크기를 지킨다. 상자 안쪽 글칸이 남은 자리를 다 쓴다. */
  .km-tw[style*="width"] .km-tbox{width:100%}
  .km-tw[style*="height"]{display:flex;flex-direction:column}
  .km-tw[style*="height"] .km-tbox{flex:1;min-height:0}
  .km-tw .km-hd{position:absolute;width:8px;height:8px;background:#fff;border:1.5px solid #e2553f;border-radius:2px}
  .km-tw .km-hd.tl{left:-5px;top:-5px}.km-tw .km-hd.tr{right:-5px;top:-5px}
  .km-tw .km-hd.bl{left:-5px;bottom:-5px}.km-tw .km-hd.br{right:-5px;bottom:-5px}
  .km-tw.moving{opacity:.85;box-shadow:0 6px 18px rgba(20,33,61,.25)}
  /* 확정된 글자는 캔버스에 굽지 않고 그대로 둔다 — 나중에 고쳐 쓸 수 있게 */
  .km-tw.done{border-color:transparent;background:transparent;cursor:pointer;pointer-events:none}
  .km-tw.done .km-grip,.km-tw.done .km-hd{display:none}
  /* 글자 도구를 들었을 때만 다시 잡힌다. 펜을 들었으면 글자 위에 그대로 그린다. */
  .km-board.text .km-tw.done{pointer-events:auto}
  .km-board.text .km-tw.done:hover{border-color:rgba(226,85,63,.45)}
  .km-tbox{outline:none;min-height:30px;font:500 24px 'Noto Sans KR',sans-serif;color:#14213d;white-space:pre-wrap;line-height:1.3;cursor:text;word-break:keep-all;overflow-wrap:anywhere}
  .km-tbox:empty::before{content:attr(data-ph);color:#b5b5b5}

  .km-hint{position:absolute;left:0;right:0;bottom:8px;text-align:center;font-size:12px;color:#aaa;pointer-events:none}

  /* ── 손안에서 ──────────────────────────────────────────────
     판은 큰 화면의 물건이지만, 휴대폰으로 강의안을 여는 사람도 있다.
     그 폭에서는 최소 520px 이 화면 밖으로 삐져나가 툴바 오른쪽 끝
     — 닫기 단추가 있는 자리 — 이 잘린다. 그래서 아래턱을 풀고,
     한 줄에 다 못 들어가는 것들을 줄인다.

     ➖ ➕ 는 지운다. 창이 이미 화면을 꽉 채우고 있어 더 키울 데가
     없고, 단추 하나가 색 두 개 자리를 먹는다. ⛶ 는 남긴다 —
     판을 잠깐 넓게 펴는 일은 좁은 화면에서 오히려 더 자주 쓴다. */
  @media (max-width:640px){
    .km{min-width:0;min-height:0}
    .km-bar{gap:4px;padding:5px 7px}
    .km-title{display:none}
    .km-tool{height:27px;min-width:27px;padding:0 4px;font-size:14px}
    .km-hs{width:23px;height:23px}
    .km-ts{width:23px;height:23px}
    .km-sw{width:16px;height:16px;border-width:1.5px}
    .km-sep{margin:0 1px}
    .km-zoom{display:none}
    .km-tbox{font-size:20px}
    .km-hint{font-size:11px;padding:0 10px}
  }
  `;
  document.head.insertAdjacentHTML('beforeend', `<style id="km-style">${CSS}</style>`);

  /* ══════════ 화면 ══════════ */
  const PEN_ICON = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"
    stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/>
    <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg>`;

  const btn = document.createElement('button');
  btn.type = 'button';
  btn.className = 'km-btn';
  btn.id = 'kmBtn';
  btn.setAttribute('aria-pressed', 'false');
  btn.setAttribute('aria-controls', 'km');
  btn.title = '교사용 메모 열기';
  btn.innerHTML = PEN_ICON + '메모';

  /* 진행 점 바로 왼쪽에 세운다. 점이 없으면 상단바 끝에 붙인다. */
  const dotsEl = document.getElementById('dots');
  if(dotsEl && dotsEl.parentNode) dotsEl.parentNode.insertBefore(btn, dotsEl);
  else (document.querySelector('.topbar') || document.body).appendChild(btn);

  const TOOLS = [
    ['pen',    '🖊️', '펜 (P)'],
    ['hl',     '🖍️', '형광펜 (H)'],
    ['text',   '🔤', '글자 (T)'],
    ['eraser', '🧽', '지우개 (E)'],
  ];
  const memo = document.createElement('section');
  memo.className = 'km';
  memo.id = 'km';
  memo.setAttribute('aria-label', '교사 메모');
  memo.innerHTML = `
    <div class="km-bar">
      <span class="km-title">메모</span>
      ${TOOLS.map(([t, e, n], i) =>
        `<button class="km-tool${i ? '' : ' on'}" type="button" data-tool="${t}" title="${n}" aria-label="${n}" aria-pressed="${i ? 'false' : 'true'}">${e}</button>`).join('')}
      <span class="km-hlsize" role="group" aria-label="형광펜 굵기">
        ${HL_STEPS.map(([w, h, n]) =>
          `<button class="km-hs${w === 20 ? ' on' : ''}" type="button" data-hw="${w}" title="형광펜 ${n}" aria-label="형광펜 ${n}" aria-pressed="${w === 20}"><i style="height:${h}px"></i></button>`).join('')}
      </span>
      <span class="km-tsize" role="group" aria-label="글자 크기">
        ${TEXT_STEPS.map(([px, icon, n]) =>
          `<button class="km-ts${px === TEXT_DEFAULT ? ' on' : ''}" type="button" data-fs="${px}" title="글자 ${n}" aria-label="글자 ${n}" aria-pressed="${px === TEXT_DEFAULT}" style="font-size:${icon}px">가</button>`).join('')}
      </span>
      <span class="km-sep"></span>
      ${COLORS.map(([c, n], i) =>
        `<button class="km-sw${i === COLORS.length - 1 ? ' on' : ''}" type="button" data-color="${c}" style="background:${c}" title="${n}" aria-label="${n}" aria-pressed="${i === COLORS.length - 1}"></button>`).join('')}
      <span class="km-sep"></span>
      <button class="km-tool" type="button" data-act="undo" title="되돌리기 (Ctrl+Z)" aria-label="되돌리기">↩️</button>
      <button class="km-tool" type="button" data-act="clear" title="전체 지우기" aria-label="전체 지우기">🗑️</button>
      <span class="km-sep"></span>
      <button class="km-tool km-zoom" type="button" data-act="out" title="축소" aria-label="축소">➖</button>
      <button class="km-tool km-zoom" type="button" data-act="in" title="확대" aria-label="확대">➕</button>
      <button class="km-tool" type="button" data-act="max" title="최대화 / 원래 크기" aria-label="최대화">⛶</button>
      <button class="km-tool km-close" type="button" data-act="close" title="닫기 (Esc)" aria-label="닫기">✕</button>
    </div>
    <div class="km-board pen">
      <canvas class="km-main"></canvas>
      <canvas class="km-tmp"></canvas>
      <p class="km-hint">펜으로 바로 그리거나, 🔤를 누르면 글상자가 나옵니다 (Enter로 줄바꿈 · 바깥을 클릭하면 확정)</p>
    </div>`;
  document.body.appendChild(memo);

  const bar    = memo.querySelector('.km-bar');
  const board  = memo.querySelector('.km-board');
  const cv     = memo.querySelector('.km-main'), ctx  = cv.getContext('2d');
  const tmp    = memo.querySelector('.km-tmp'),  tctx = tmp.getContext('2d');
  const hint   = memo.querySelector('.km-hint');
  const hlsize = memo.querySelector('.km-hlsize');
  const tsize  = memo.querySelector('.km-tsize');
  const swatches = [...memo.querySelectorAll('.km-sw')];

  let tool = 'pen', color = '#111111', HW = 20, FS = TEXT_DEFAULT;
  let drawing = false, last = null, pts = [], history = [];

  /*
   * 창이 놀 수 있는 자리. 상단바와 하단 내비는 화면에 붙박여 있으니
   * 그 사이가 슬라이드가 보이는 칸이다. 창을 여기에 가둬 둔다.
   */
  function frame(){
    const t = document.querySelector('.topbar'), n = document.querySelector('.nav');
    const top = t ? Math.max(0, t.getBoundingClientRect().bottom) : 0;
    const bot = n ? n.getBoundingClientRect().top : innerHeight;
    return {top, bottom:bot, w:innerWidth, h:Math.max(200, bot - top)};
  }

  /*
   * 창이 가질 수 있는 가장 작은 크기. 넓은 화면에서는 520×260 이지만
   * 화면이 그보다 좁으면 그 아래턱이 오히려 창을 밖으로 밀어낸다.
   * 화면이 좁으면 아래턱도 같이 내린다.
   */
  const MARGIN = 16;
  const minW = f => Math.min(520, f.w - MARGIN);
  const minH = f => Math.min(260, f.h - MARGIN);

  /* ══════════ 열고 닫기 ══════════ */
  let placed = false;
  function place(){
    const f = frame();
    /* 넓은 화면에서는 명세대로 700×420 을 오른쪽 위에. 좁으면 화면이
       내주는 만큼만 — 폭이 모자란데 700 을 고집하면 툴바 오른쪽 끝,
       하필 닫기 단추가 있는 자리가 화면 밖으로 잘려 나간다. */
    const w = Math.min(700, f.w - MARGIN);
    const h = Math.min(420, f.h - MARGIN);
    memo.style.width  = w + 'px';
    memo.style.height = h + 'px';
    /* 오른쪽에 40px 을 띄울 여유가 있을 때만 띄운다. */
    memo.style.left = Math.max(MARGIN / 2, Math.min(f.w - 40 - w, f.w - MARGIN / 2 - w)) + 'px';
    memo.style.top  = (f.top + 12) + 'px';   /* 넘치면 곧 이어지는 clampIntoFrame 이 끌어올린다 */
    placed = true;
  }
  function setOpen(o){
    memo.classList.toggle('on', o);
    btn.classList.toggle('on', o);
    btn.setAttribute('aria-pressed', String(o));
    btn.title = o ? '교사용 메모 닫기' : '교사용 메모 열기';
    if(o){ if(!placed) place(); clampIntoFrame(); fit(); }
    else {
      commitAll();
      /* 닫힌 창 안에 초점을 두고 가면 방향키가 계속 판 것으로 잡힌다 */
      if(memo.contains(document.activeElement)) document.activeElement.blur();
    }
  }
  btn.addEventListener('click', () => setOpen(!memo.classList.contains('on')));

  /*
   * 창이 화면 밖으로 나가 있으면 도로 끌어들인다 — 기기를 돌리거나 창을
   * 줄였을 때. 자리만 옮겨서는 모자란다. 폭 자체가 화면보다 넓어졌으면
   * 어디로 밀어도 한쪽이 잘리므로, 창도 같이 줄여 준다.
   */
  function clampIntoFrame(){
    const f = frame();
    /* 크기는 style 에 적힌 값으로 본다. 창이 커지는 동안에는 transition 이
       걸려 있어 offsetWidth 가 「지금 지나가는 중인 폭」을 돌려주는데,
       그걸 그대로 되받아 적으면 방금 누른 확대가 도로 접힌다. */
    const w = Math.max(minW(f), Math.min(parseFloat(memo.style.width)  || memo.offsetWidth,  f.w - MARGIN));
    const h = Math.max(minH(f), Math.min(parseFloat(memo.style.height) || memo.offsetHeight, f.h - MARGIN));
    memo.style.width = w + 'px';
    memo.style.height = h + 'px';
    memo.style.left = Math.min(Math.max(0, parseFloat(memo.style.left) || 0), Math.max(0, f.w - w)) + 'px';
    memo.style.top  = Math.min(Math.max(f.top, parseFloat(memo.style.top) || f.top), Math.max(f.top, f.bottom - h)) + 'px';
  }
  addEventListener('resize', () => { if(memo.classList.contains('on')) clampIntoFrame(); });

  /* ══════════ 캔버스 크기 ══════════
     창을 키우고 줄여도 그린 것이 지워지면 안 된다. 픽셀 수를 바꾸기 전에
     그림을 떠 두었다가 다시 얹는다. 화면 배율(devicePixelRatio)도 따른다. */
  function fit(){
    const r = board.getBoundingClientRect();
    if(!r.width || !r.height) return;
    const dpr = devicePixelRatio || 1;
    const w = Math.round(r.width * dpr), h = Math.round(r.height * dpr);
    if(cv.width === w && cv.height === h) return;
    const snap = cv.width && cv.height ? ctx.getImageData(0, 0, cv.width, cv.height) : null;
    cv.width = w; cv.height = h; ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    tmp.width = w; tmp.height = h; tctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    if(snap){ ctx.save(); ctx.setTransform(1, 0, 0, 1, 0, 0); ctx.putImageData(snap, 0, 0); ctx.restore(); }
  }
  new ResizeObserver(fit).observe(board);

  /* ══════════ 도구 고르기 ══════════ */
  function pick(t, quiet){
    if(tool === 'text' && t !== 'text') commitAll();
    tool = t;
    board.className = 'km-board ' + t;
    board.style.cursor = CURSOR[t] || 'default';
    memo.querySelectorAll('[data-tool]').forEach(b => {
      const on = b.dataset.tool === t;
      b.classList.toggle('on', on); b.setAttribute('aria-pressed', String(on));
    });
    hlsize.classList.toggle('show', t === 'hl');
    tsize.classList.toggle('show', t === 'text');
    /* 형광펜을 들면 색 동그라미도 마커 톤으로 바뀐다 — 어떤 색이 나올지 미리 보인다 */
    swatches.forEach(s => s.style.background = t === 'hl' ? hlColor(s.dataset.color) : s.dataset.color);
    if(t === 'text' && !quiet && !board.querySelector('.km-tw:not(.done)')){
      const r = board.getBoundingClientRect();
      placeText({x:r.width * .3, y:r.height * .35}, true);
    }
  }
  memo.querySelectorAll('[data-tool]').forEach(b => b.addEventListener('click', () => pick(b.dataset.tool)));
  memo.querySelectorAll('.km-hs').forEach(b => b.addEventListener('click', () => {
    HW = +b.dataset.hw;
    memo.querySelectorAll('.km-hs').forEach(x => {
      x.classList.toggle('on', x === b); x.setAttribute('aria-pressed', String(x === b));
    });
  }));
  memo.querySelectorAll('.km-ts').forEach(b => b.addEventListener('click', () => {
    FS = +b.dataset.fs;
    memo.querySelectorAll('.km-ts').forEach(x => {
      x.classList.toggle('on', x === b); x.setAttribute('aria-pressed', String(x === b));
    });
    /*
     * 글자 크기도 <b>고른 자리에만</b> 준다 — 색과 같은 자리다.
     *
     * 예전에는 상자 전체(style.fontSize)를 키웠다. 그래서 한 줄만 크게 하고
     * 싶어도 온 글자가 같이 커졌다.
     *
     *  · 글자를 끌어 골라 두고 크기를 고르면 → <b>그 자리만</b> 바뀐다
     *  · 고른 것 없이 크기만 고르면 → <b>이제부터 치는 글자</b>가 그 크기다
     */
    const t = board.querySelector('.km-tw:not(.done) .km-tbox');
    if(!t) return;
    const sel = getSelection();
    const inBox = sel && sel.rangeCount && t.contains(sel.anchorNode);
    t.focus();
    if(inBox && !sel.isCollapsed) wrapSelection(t, 'fontSize', FS + 'px');
    else if(!t.textContent) t.style.fontSize = FS + 'px';   /* 빈 상자는 상자째 */
    else caretSpan(t, 'fontSize', FS + 'px');
  }));
  swatches.forEach(s => s.addEventListener('click', () => {
    color = s.dataset.color;
    swatches.forEach(x => {
      x.classList.toggle('on', x === s); x.setAttribute('aria-pressed', String(x === s));
    });
    /*
     * 글상자의 색은 <b>고른 자리에만</b> 준다.
     *
     * 예전에는 상자 전체(style.color)를 물들였다. 그래서 「가나다라」를 쓰고
     * 빨강을 고르면 넉 자가 다 빨개졌다 — 선생님이 강조하려던 것은 「다라」
     * 두 자뿐인데. 파워포인트와 같은 손놀림으로 맞춘다.
     *
     *  · 글자를 끌어 골라 두고 색을 고르면 → <b>그 자리만</b> 물든다
     *  · 고른 것 없이 색만 고르면 → <b>이제부터 치는 글자</b>가 그 색이다
     *
     * 이미 칠해 둔 앞 글자는 어느 쪽에서도 건드리지 않는다.
     */
    const t = board.querySelector('.km-tw:not(.done) .km-tbox');
    if(!t) return;
    const sel = getSelection();
    const inBox = sel && sel.rangeCount && t.contains(sel.anchorNode);
    t.focus();
    if(inBox && !sel.isCollapsed) wrapSelection(t, 'color', color);
    else if(!t.textContent) t.style.color = color;         /* 빈 상자는 상자째 */
    else caretSpan(t, 'color', color);
  }));

  /*
   * 끌어 고른 자리를 조각으로 감싼다.
   *
   * 고른 자리가 여러 줄·여러 조각에 걸쳐 있을 수 있어 Range 를 그대로 감싸면
   * 「경계가 엇갈린다」로 실패한다. extractContents 로 떼어 낸 뒤 새 조각에
   * 넣으면 어떤 모양이든 한 번에 잡힌다.
   */
  function wrapSelection(box, prop, value){
    const sel = getSelection();
    const r = sel.getRangeAt(0);
    const span = document.createElement('span');
    span.style[prop] = value;
    span.appendChild(r.extractContents());
    /* 안쪽에 같은 성질을 따로 쥔 조각이 있으면 바깥 것이 묻힌다 — 벗겨 낸다. */
    span.querySelectorAll('span').forEach(s => { s.style[prop] = ''; if(!s.getAttribute('style')) s.replaceWith(...s.childNodes); });
    r.insertNode(span);
    const after = document.createRange();
    after.selectNodeContents(span);
    sel.removeAllRanges(); sel.addRange(after);
    box.normalize();
  }

  /*
   * 커서 자리에 <b>빈 조각</b>을 세우고 그 안으로 커서를 넣는다.
   * 다음에 치는 글자는 그 조각 안에서 나오므로 새 성질로 들어간다.
   */
  function caretSpan(box, prop, value){
    const sel = getSelection();
    if(!sel || !sel.rangeCount || !box.contains(sel.anchorNode)){
      /* 커서가 상자 밖이면 맨 끝에 세운다 */
      const r = document.createRange();
      r.selectNodeContents(box); r.collapse(false);
      sel.removeAllRanges(); sel.addRange(r);
    }
    const span = document.createElement('span');
    span.style[prop] = value;
    span.appendChild(document.createTextNode('​'));   /* 자리를 잡아 두는 보이지 않는 글자 */
    const r = sel.getRangeAt(0);
    r.deleteContents();
    r.insertNode(span);
    const after = document.createRange();
    after.setStart(span.firstChild, 1);
    after.collapse(true);
    sel.removeAllRanges(); sel.addRange(after);
  }
  board.style.cursor = CURSOR.pen;

  /* ══════════ 되돌리기 ══════════ */
  const snapshot = () => {
    if(!cv.width || !cv.height) return;
    history.push(ctx.getImageData(0, 0, cv.width, cv.height));
    if(history.length > UNDO_MAX) history.shift();
  };
  const undo = () => {
    const s = history.pop();
    if(!s) return;
    ctx.save(); ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, cv.width, cv.height); ctx.putImageData(s, 0, 0); ctx.restore();
  };
  const clearAll = () => {
    snapshot();
    ctx.clearRect(0, 0, cv.width, cv.height);
    board.querySelectorAll('.km-tw').forEach(w => w.remove());
    hint.style.display = '';
  };

  /* ══════════ 형광펜 색 ══════════
     펜 색을 그대로 쓰면 형광펜이 아니라 굵은 펜이 된다. 색상만 남기고
     채도를 끝까지, 명도를 밝게 올려 마커 톤으로 바꾼다. 검정·회색처럼
     색상이 없는 것은 옅은 회색 마커로 낸다. */
  function hlColor(hex){
    const r = parseInt(hex.slice(1, 3), 16) / 255,
          g = parseInt(hex.slice(3, 5), 16) / 255,
          b = parseInt(hex.slice(5, 7), 16) / 255;
    const mx = Math.max(r, g, b), mn = Math.min(r, g, b), l = (mx + mn) / 2;
    const sat = mx === mn ? 0 : (mx - mn) / (1 - Math.abs(2 * l - 1));
    if(sat < .15) return 'hsl(0 0% 62%)';
    const d = mx - mn;
    const h = mx === r ? ((g - b) / d + (g < b ? 6 : 0)) : mx === g ? ((b - r) / d + 2) : ((r - g) / d + 4);
    return `hsl(${(h * 60).toFixed(0)} 100% 72%)`;
  }

  /* ══════════ 그리기 ══════════
     한 획을 토막 선으로 이어 붙이면 반투명 형광펜이 이음매마다 겹쳐
     얼룩과 톱니가 생긴다. 그래서 획 하나는 점을 다 모아 한 번에 긋는다.
     긋는 동안 보이는 것은 미리보기 판(tmp)이고, 손을 떼면 그 획을
     본판(main)에 딱 한 번 얹는다. */
  const pos = e => { const r = cv.getBoundingClientRect(); return {x:e.clientX - r.left, y:e.clientY - r.top}; };

  function pathOf(c, points){
    c.beginPath();
    if(points.length < 3){
      const p = points[0], q = points[1] || p;
      c.moveTo(p.x, p.y); c.lineTo(q.x + .01, q.y);
      return;
    }
    c.moveTo(points[0].x, points[0].y);
    for(let i = 1; i < points.length - 1; i++){
      const m = {x:(points[i].x + points[i + 1].x) / 2, y:(points[i].y + points[i + 1].y) / 2};
      c.quadraticCurveTo(points[i].x, points[i].y, m.x, m.y);   /* 중점을 끝점으로 삼아 모서리를 없앤다 */
    }
    const l = points[points.length - 1];
    c.lineTo(l.x, l.y);
  }
  function drawTemp(){
    tctx.clearRect(0, 0, tmp.width, tmp.height);
    tctx.lineCap = 'round'; tctx.lineJoin = 'round';
    tctx.strokeStyle = tool === 'hl' ? hlColor(color) : color;
    tctx.lineWidth = tool === 'hl' ? HW : PEN_W;
    pathOf(tctx, pts); tctx.stroke();
  }
  function commitStroke(){
    if(!pts.length) return;
    ctx.save();
    ctx.lineCap = 'round'; ctx.lineJoin = 'round';
    if(tool === 'hl'){ ctx.strokeStyle = hlColor(color); ctx.globalCompositeOperation = 'multiply'; ctx.lineWidth = HW; }
    else { ctx.strokeStyle = color; ctx.lineWidth = PEN_W; }
    pathOf(ctx, pts); ctx.stroke(); ctx.restore();
    tctx.clearRect(0, 0, tmp.width, tmp.height);
    pts = [];
  }
  function erase(a, b){
    ctx.save();
    ctx.globalCompositeOperation = 'destination-out';
    ctx.lineCap = 'round'; ctx.lineJoin = 'round'; ctx.lineWidth = ERASER_W; ctx.strokeStyle = '#000';
    ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x + .01, b.y); ctx.stroke();
    ctx.restore();
  }

  board.addEventListener('pointerdown', e => {
    if(tool === 'text'){ placeText(pos(e)); return; }
    commitAll();
    drawing = true; last = pos(e);
    snapshot();
    hint.style.display = 'none';
    board.setPointerCapture(e.pointerId);
    tmp.className = 'km-tmp ' + tool;
    if(tool === 'eraser') erase(last, last);
    else { pts = [last]; drawTemp(); }
  });
  board.addEventListener('pointermove', e => {
    if(!drawing) return;
    const p = pos(e);
    if(tool === 'eraser'){ erase(last, p); last = p; }
    else { pts.push(p); drawTemp(); }
  });
  const finish = () => { if(!drawing) return; drawing = false; if(tool !== 'eraser') commitStroke(); };
  board.addEventListener('pointerup', finish);
  board.addEventListener('pointercancel', finish);

  /* ══════════ 글자 ══════════
     PPT 글상자와 같이 논다. 놓고, 쓰고, 끌어 옮기고, 바깥을 누르면 확정.
     확정해도 캔버스에 굽지 않고 글자 개체로 남겨 둔다 — 나중에 오타를
     고치려고 지우고 다시 쓰는 일을 없앤다. */
  function placeText(p, auto){
    commitAll();
    const r = board.getBoundingClientRect();
    const w = document.createElement('div');
    w.className = 'km-tw';
    w.style.left = Math.max(0, Math.min(p.x, Math.max(0, r.width - 190))) + 'px';
    w.style.top  = Math.max(26, p.y - 14) + 'px';   /* 26px 아래로 — 위에 붙는 「✥ 이동」이 잘리지 않게 */
    w.innerHTML = '<span class="km-grip">✥ 이동</span>' +
      '<span class="km-hd tl"></span><span class="km-hd tr"></span>' +
      '<span class="km-hd bl"></span><span class="km-hd br"></span>';
    const t = document.createElement('div');
    t.className = 'km-tbox';
    t.contentEditable = 'true';
    t.dataset.ph = auto ? '여기에 입력하세요' : '';
    t.style.color = color;
    t.style.fontSize = FS + 'px';
    w.appendChild(t); board.appendChild(w);
    t.focus();
    hint.style.display = 'none';

    /* 글상자 안에서 누른 키는 판의 단축키로 새어 나가지 않는다 — P 를 적어야 한다 */
    t.addEventListener('keydown', ev => { if(ev.key === 'Escape') commit(w); ev.stopPropagation(); });
    t.addEventListener('pointerdown', ev => { if(!w.classList.contains('done')) ev.stopPropagation(); });

    /* 테두리·여백·손잡이 어디를 잡아도 끌린다. 글자 위는 편집이다. */
    let d = null;
    w.addEventListener('pointerdown', ev => {
      if(w.classList.contains('done')){ ev.stopPropagation(); ev.preventDefault(); activate(w); return; }
      const b = board.getBoundingClientRect();
      d = {ox:ev.clientX - b.left - w.offsetLeft, oy:ev.clientY - b.top - w.offsetTop};
      w.classList.add('moving'); w.setPointerCapture(ev.pointerId);
      ev.preventDefault(); ev.stopPropagation();
    });
    w.addEventListener('pointermove', ev => {
      if(!d) return;
      const b = board.getBoundingClientRect();
      w.style.left = Math.min(Math.max(0, ev.clientX - b.left - d.ox), Math.max(0, b.width - w.offsetWidth)) + 'px';
      w.style.top  = Math.min(Math.max(26, ev.clientY - b.top - d.oy), Math.max(26, b.height - w.offsetHeight)) + 'px';
    });
    const end = () => { if(d){ d = null; w.classList.remove('moving'); t.focus(); } };
    w.addEventListener('pointerup', end);
    w.addEventListener('pointercancel', end);

    /*
     * 모서리 네모를 끌어 <b>글상자 폭을 바꾼다.</b>
     *
     * 네모는 그려만 두고 끌어도 아무 일이 없었다 — 장식이었다. 글상자는 쓴
     * 만큼만 넓어지므로, 한 줄을 일부러 접고 싶을 때(「그래서 / 당신은」)
     * 손으로 좁힐 길이 없었다.
     *
     * <b>폭만</b> 바꾼다. 높이는 글이 접히는 대로 저절로 자란다 — 높이까지
     * 손으로 잡아 두면 글을 더 쳤을 때 상자 밖으로 넘친다.
     *
     * 왼쪽 모서리(tl · bl)는 왼 가장자리를, 오른쪽 모서리(tr · br)는 오른
     * 가장자리를 끈다. 왼쪽을 끌 때는 오른 가장자리가 제자리에 있어야 하므로
     * left 와 width 를 함께 옮긴다.
     */
    let rz = null;
    w.querySelectorAll('.km-hd').forEach(hd => {
      const left = hd.classList.contains('tl') || hd.classList.contains('bl');
      const up   = hd.classList.contains('tl') || hd.classList.contains('tr');
      hd.style.cursor = left === up ? 'nwse-resize' : 'nesw-resize';
      hd.addEventListener('pointerdown', ev => {
        if(w.classList.contains('done')) return;
        const b = board.getBoundingClientRect();
        rz = { left, up, x:ev.clientX, y:ev.clientY,
               w:w.offsetWidth, h:w.offsetHeight, l:w.offsetLeft, t:w.offsetTop, b };
        hd.setPointerCapture(ev.pointerId);
        ev.preventDefault(); ev.stopPropagation();
      });
      hd.addEventListener('pointermove', ev => {
        if(!rz) return;
        const dx = ev.clientX - rz.x, dy = ev.clientY - rz.y;
        /* 60px · 40px 아래로는 줄이지 않는다 — 그보다 작으면 글자가 끊긴다. */
        if(rz.left){
          const width = Math.max(60, Math.min(rz.w - dx, rz.l + rz.w));
          w.style.left = (rz.l + rz.w - width) + 'px';
          w.style.width = width + 'px';
        } else {
          w.style.width = Math.max(60, Math.min(rz.w + dx, rz.b.width - rz.l)) + 'px';
        }
        /*
         * 높이는 <b>늘리기만</b> 한다.
         *
         * 글이 여섯 줄인데 상자를 두 줄 높이로 줄이면 글자가 상자 밖으로
         * 삐져나가거나 잘린다. 그래서 아래로 끌면 늘고, 되돌려 끌면 글이
         * 차지하는 높이까지만 줄어든다 — 그 아래로는 안 내려간다.
         */
        if(rz.up){
          const height = Math.max(40, Math.min(rz.h - dy, rz.t + rz.h - 26));
          w.style.top = (rz.t + rz.h - height) + 'px';
          w.style.height = height + 'px';
        } else {
          w.style.height = Math.max(40, Math.min(rz.h + dy, rz.b.height - rz.t)) + 'px';
        }
      });
      const stop = () => { if(rz){ rz = null; t.focus(); } };
      hd.addEventListener('pointerup', stop);
      hd.addEventListener('pointercancel', stop);
    });
  }
  function commit(w){
    if(!w.isConnected) return;
    const t = w.querySelector('.km-tbox');
    if(!(t.innerText ?? t.textContent).trim()){ w.remove(); return; }   /* 빈 상자는 남기지 않는다 */
    w.classList.add('done'); t.contentEditable = 'false'; t.blur();
  }
  function activate(w){
    commitAll();
    w.classList.remove('done');
    const t = w.querySelector('.km-tbox');
    t.contentEditable = 'true';
    if(tool !== 'text') pick('text', true);
    t.focus();
    const sel = getSelection(), rg = document.createRange();
    rg.selectNodeContents(t); rg.collapse(false);
    sel.removeAllRanges(); sel.addRange(rg);
  }
  const commitAll = () => board.querySelectorAll('.km-tw:not(.done)').forEach(commit);

  /* ══════════ 크기 ══════════ */
  let saved = null;
  function resizeBy(k){
    const f = frame(), r = memo.getBoundingClientRect();
    memo.style.width  = Math.max(minW(f), Math.min(f.w - MARGIN, r.width  * k)) + 'px';
    memo.style.height = Math.max(minH(f), Math.min(f.h - MARGIN, r.height * k)) + 'px';
    saved = null;
    clampIntoFrame();
  }
  function toggleMax(){
    if(saved){ Object.assign(memo.style, saved); saved = null; clampIntoFrame(); return; }
    const f = frame();
    saved = {left:memo.style.left, top:memo.style.top, width:memo.style.width, height:memo.style.height};
    Object.assign(memo.style, {
      left:(MARGIN / 2) + 'px', top:(f.top + MARGIN / 2) + 'px',
      width:(f.w - MARGIN) + 'px', height:(f.h - MARGIN) + 'px',
    });
  }

  const ACT = {
    undo, clear:clearAll,
    in:() => resizeBy(1.2), out:() => resizeBy(1 / 1.2),
    max:toggleMax, close:() => setOpen(false),
  };
  memo.querySelectorAll('[data-act]').forEach(b => b.addEventListener('click', () => ACT[b.dataset.act]()));

  /* ══════════ 창 옮기기 ══════════ */
  let drag = null;
  bar.addEventListener('pointerdown', e => {
    if(e.target.closest('button,.km-hlsize')) return;   /* 단추 위에서 시작한 것은 누름이지 끌기가 아니다 */
    const r = memo.getBoundingClientRect();
    drag = {dx:e.clientX - r.left, dy:e.clientY - r.top};
    bar.setPointerCapture(e.pointerId);
  });
  bar.addEventListener('pointermove', e => {
    if(!drag) return;
    const f = frame(), w = memo.offsetWidth, h = memo.offsetHeight;
    memo.style.left = Math.min(Math.max(0, e.clientX - drag.dx), Math.max(0, f.w - w)) + 'px';
    memo.style.top  = Math.min(Math.max(f.top, e.clientY - drag.dy), Math.max(f.top, f.bottom - h)) + 'px';
  });
  const dropBar = () => { drag = null; };
  bar.addEventListener('pointerup', dropBar);
  bar.addEventListener('pointercancel', dropBar);

  /* ══════════ 단축키 ══════════
     강의안이 ← → · 스페이스 · Enter 를 이미 쓰고 있다. 겹치지 않는 글자
     (P·H·T·E)와 Ctrl+Z·Esc 만 가로채고, 잡는 단계(capture)에서 먼저 받아
     강의안으로 내려보내지 않는다.

     ← → 는 일부러 그대로 둔다. 판을 펴 놓고도 슬라이드는 넘겨야 하는데,
     판이 그 키를 삼키면 교사가 판을 닫았다 열었다 해야 한다. 진짜로 부딪히는
     자리는 글상자에 글을 적을 때뿐이고, 그건 글상자가 제 키를 붙잡아 막는다. */
  const isTyping = el => !!(el && (el.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(el.tagName)));
  const KEY = {p:'pen', h:'hl', t:'text', e:'eraser'};

  document.addEventListener('keydown', e => {
    if(!memo.classList.contains('on')) return;

    if(e.key === 'Escape'){
      /* 쓰던 글상자가 있으면 그것부터 맺는다. 한 번 더 누르면 창이 닫힌다. */
      if(board.querySelector('.km-tw:not(.done)')) commitAll();
      else setOpen(false);
      e.stopPropagation(); e.preventDefault();
      return;
    }
    if(isTyping(e.target)) return;
    const k = e.key.toLowerCase();
    if((e.ctrlKey || e.metaKey) && k === 'z'){ e.preventDefault(); e.stopPropagation(); undo(); return; }
    if(KEY[k]){ e.preventDefault(); e.stopPropagation(); pick(KEY[k]); return; }
  }, true);
})();
