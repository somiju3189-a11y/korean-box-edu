
/* ══════════ 교수 순서 ══════════
   data/ 안의 과들은 파일 순서와 상관없이 units.js 의 차례대로 정렬합니다.
   아직 안 만든 과는 목차에 '준비 중'으로 남습니다.                     */
const ORDER = UNITS.flatMap(u => u.items);
LESSONS.sort((a,b) => ORDER.indexOf(a.key) - ORDER.indexOf(b.key));

/* ══════════ 렌더링 도우미 ══════════ */
/*
 * 예문에 칠하는 색을 <b>형태소 정리와 맞춘다.</b>
 *
 * 형태소 정리는 받침 O 쪽과 받침 X 쪽을 다른 색으로 갈라 놓았는데, 정작
 * 예문에서는 둘 다 같은 빨강이었다. 그러면 학생이 표에서 「이 아니에요는
 * 빨강, 가 아니에요는 초록」을 익히고 예문으로 넘어와 색이 어긋난 것을 본다.
 * 표에 적힌 갈래를 그대로 읽어 와, 어느 쪽 꼴인지 보고 같은 색을 칠한다.
 *
 * 낱말 안에 우연히 들어간 글자는 세지 않는다 — 「가방이」의 가는 뒤에 한글이
 * 붙어 있으니 조사가 아니다. 뒤가 한글이 아닌 자리만 조사로 본다.
 */
let MARKALT = [];   // buildSlides 가 과마다 새로 채웁니다
const ALTCLS = seg => {
  /* 「○○이/가 있어요」처럼 두 꼴을 한꺼번에 보이는 자리는 한쪽 색으로
     칠하면 거짓말이 된다. 빗금이 들어 있으면 색을 나누지 않는다. */
  if (String(seg).includes('/')) return '';
  let cls = '', at = -1;
  for (const a of MARKALT) {
    for (let i = seg.indexOf(a.alt); i >= 0; i = seg.indexOf(a.alt, i + 1)) {
      const after = seg[i + a.alt.length];
      if (after && /[가-힣]/.test(after)) continue;
      if (i > at) { at = i; cls = a.cls; }
    }
  }
  return cls;
};
const M  = s => String(s).replace(/\[\[(.+?)\]\]/g, (m, x) => {
  const c = ALTCLS(x);
  return `<mark${c ? ` class="${c}"` : ''}>${x}</mark>`;
});
/*
 * 예문에서는 어미만 칠하지 않고 <b>서술어를 통째로</b> 칠한다.
 *
 * 「일해요」에서 해요만 빨간색이면 학생은 「일」과 「해요」를 다른 낱말로 읽는다.
 * 예문은 문장을 통째로 익히는 자리라 서술어 하나가 한 덩어리로 보여야 한다.
 * 형태소를 갈라 보이는 일은 형태소 정리 장이 따로 한다 — 거기는 건드리지 않는다.
 * 조사 과에서는 늘리지 않는다. 앞말은 조사가 아니라 명사다.
 */
const EXM = s => M(VERB_LESSON ? String(s).replace(/([가-힣]+)\[\[/g, '[[$1') : s);
const B  = s => s.replace(/\[\[(.+?)\]\]/g, '<b>$1</b>');
/* 말하기 질문에서 갈아 끼울 수 있는 자리.
   「몇 시에 밥을 먹어요?」의 뒷부분만 바꾸면 같은 문형으로 다섯 번 더 물을 수
   있는데, 그냥 두면 교사가 그걸 알아채지 못하고 한 번 묻고 넘어갑니다.
   바꿔도 되는 자리에 상자를 둘러 눈에 띄게 합니다. */
const SLOT = s => s.replace(/\[\[(.+?)\]\]/g, '<span class="qslot">$1</span>');
const L  = (arr, f) => arr.map(x => `<span class="s">${f(x)}</span>`).join('');
/* ══════════ 국기 ══════════
   국기 이모지는 윈도우에 글리프가 없어 'KR' 같은 두 글자로 나온다.
   그림 파일을 더하지 않으려고 필요한 아홉 나라만 직접 그린다. */
/*
 * 태극기의 사괘는 <b>가운데를 향해 사다리처럼</b> 놓입니다.
 *
 * 막대를 가로로 눕혀 네 귀퉁이에 같은 모양으로 찍으면 사괘가 모두 건괘(☰)가
 * 되어 버립니다. 실제 태극기는 귀퉁이마다 괘가 다르고(건 · 감 · 곤 · 리),
 * 막대는 그 귀퉁이에서 가운데를 잇는 선을 따라 쌓입니다. 나라 이름을 가르치는
 * 카드에 틀린 국기를 두면 학생이 그것을 한국으로 외웁니다.
 *
 *   pat — 막대 셋을 바깥쪽부터 적습니다. 1 = 이어진 막대, 0 = 끊어진 막대
 */
const TRIGRAM = (cx, cy, ang, pat) => {
  const w = 11, t = 1.75, gap = 3.1, half = w * .41;
  return `<g transform="translate(${cx} ${cy}) rotate(${ang})">` + [...pat].map((p, i) => {
    const y = (i - 1) * gap - t / 2;
    return p === '1'
      ? `<rect x="${-w / 2}" y="${y}" width="${w}" height="${t}"/>`
      : `<rect x="${-w / 2}" y="${y}" width="${half}" height="${t}"/>` +
        `<rect x="${w / 2 - half}" y="${y}" width="${half}" height="${t}"/>`;
  }).join('') + `</g>`;
};
const FLAG = {
  KR:`<svg viewBox="0 0 60 40"><rect width="60" height="40" fill="#fff"/>
    ${/* 태극은 가로가 아니라 대각선으로 갈립니다 — 빨강이 왼쪽 위, 파랑이 오른쪽 아래. */''}
    <g transform="rotate(-33.69 30 20)">
      <circle cx="30" cy="20" r="9.6" fill="#cd2e3a"/>
      <path d="M20.4 20a4.8 4.8 0 0 1 9.6 0 4.8 4.8 0 0 0 9.6 0 9.6 9.6 0 0 1-19.2 0" fill="#0047a0"/>
    </g>
    <g fill="#000">${TRIGRAM(11.5, 9.5, -60.95, '111')}${TRIGRAM(48.5, 9.5, 60.95, '010')}${TRIGRAM(11.5, 30.5, -119.05, '101')}${TRIGRAM(48.5, 30.5, 119.05, '000')}</g></svg>`,
  /* 아래는 1급 어휘에 나오는 나머지 나라들. 윈도우에는 국기 이모지 글리프가
     없어 「CN · DE」 같은 두 글자로 나오므로, 쓰는 나라는 모두 직접 그린다. */
  CN:`<svg viewBox="0 0 60 40"><rect width="60" height="40" fill="#ee1c25"/>
    <g fill="#ff0"><path d="M10 6l1.7 5.2-4.4-3.2h5.4l-4.4 3.2z"/>
    <path d="M20 4l.7 2.1-1.8-1.3h2.2l-1.8 1.3z"/><path d="M23 8l.7 2.1-1.8-1.3h2.2l-1.8 1.3z"/>
    <path d="M23 13l.7 2.1-1.8-1.3h2.2l-1.8 1.3z"/><path d="M20 17l.7 2.1-1.8-1.3h2.2l-1.8 1.3z"/></g></svg>`,
  DE:`<svg viewBox="0 0 60 40"><rect width="60" height="13.34"/>
    <rect y="13.34" width="60" height="13.33" fill="#dd0000"/>
    <rect y="26.67" width="60" height="13.33" fill="#ffce00"/></svg>`,
  GB:`<svg viewBox="0 0 60 40"><rect width="60" height="40" fill="#012169"/>
    <path d="M0 0l60 40M60 0L0 40" stroke="#fff" stroke-width="8"/>
    <path d="M0 0l60 40M60 0L0 40" stroke="#c8102e" stroke-width="4"/>
    <path d="M30 0v40M0 20h60" stroke="#fff" stroke-width="13"/>
    <path d="M30 0v40M0 20h60" stroke="#c8102e" stroke-width="8"/></svg>`,
  RU:`<svg viewBox="0 0 60 40"><rect width="60" height="13.34" fill="#fff"/>
    <rect y="13.34" width="60" height="13.33" fill="#0039a6"/>
    <rect y="26.67" width="60" height="13.33" fill="#d52b1e"/></svg>`,
  IN:`<svg viewBox="0 0 60 40"><rect width="60" height="13.34" fill="#ff9933"/>
    <rect y="13.34" width="60" height="13.33" fill="#fff"/>
    <rect y="26.67" width="60" height="13.33" fill="#138808"/>
    <circle cx="30" cy="20" r="5.4" fill="none" stroke="#000080" stroke-width="1.1"/>
    <circle cx="30" cy="20" r="1.1" fill="#000080"/></svg>`,
  IT:`<svg viewBox="0 0 60 40"><rect width="20" height="40" fill="#009246"/>
    <rect x="20" width="20" height="40" fill="#fff"/><rect x="40" width="20" height="40" fill="#ce2b37"/></svg>`,
  ES:`<svg viewBox="0 0 60 40"><rect width="60" height="40" fill="#aa151b"/>
    <rect y="10" width="60" height="20" fill="#f1bf00"/></svg>`,
  CH:`<svg viewBox="0 0 60 40"><rect width="60" height="40" fill="#d52b1e"/>
    <path d="M27 10h6v7h7v6h-7v7h-6v-7h-7v-6h7z" fill="#fff"/></svg>`,
  BR:`<svg viewBox="0 0 60 40"><rect width="60" height="40" fill="#009b3a"/>
    <path d="M30 5l25 15-25 15L5 20z" fill="#fedf00"/>
    <circle cx="30" cy="20" r="8.4" fill="#002776"/>
    <path d="M21.9 17.2a20 20 0 0 1 16.4 4.6" fill="none" stroke="#fff" stroke-width="2.4"/></svg>`,
  MX:`<svg viewBox="0 0 60 40"><rect width="20" height="40" fill="#006847"/>
    <rect x="20" width="20" height="40" fill="#fff"/><rect x="40" width="20" height="40" fill="#ce1126"/>
    <circle cx="30" cy="20" r="5" fill="none" stroke="#8b5a2b" stroke-width="1.4"/>
    <path d="M27 20a3 3 0 0 1 6 0" fill="none" stroke="#006847" stroke-width="1.6"/></svg>`,
  PH:`<svg viewBox="0 0 60 40"><rect width="60" height="20" fill="#0038a8"/>
    <rect y="20" width="60" height="20" fill="#ce1126"/>
    <path d="M0 0l26 20L0 40z" fill="#fff"/>
    <circle cx="8.5" cy="20" r="3.4" fill="#fcd116"/></svg>`,
  PK:`<svg viewBox="0 0 60 40"><rect width="60" height="40" fill="#01411c"/>
    <rect width="15" height="40" fill="#fff"/>
    <circle cx="37" cy="20" r="8" fill="#fff"/><circle cx="40" cy="18" r="8" fill="#01411c"/>
    <path d="M46 12l.9 2.6 2.7-1-1.6 2.4 1.6 2.4-2.7-1-.9 2.6-.9-2.6-2.7 1 1.6-2.4-1.6-2.4 2.7 1z" fill="#fff"/></svg>`,
  NP:`<svg viewBox="0 0 60 40"><path d="M14 2h24L22 17h18L14 38z" fill="#dc143c" stroke="#003893" stroke-width="2.4" stroke-linejoin="round"/>
    <circle cx="22" cy="10" r="3" fill="#fff"/><circle cx="23.4" cy="9" r="2.6" fill="#dc143c"/>
    <circle cx="23" cy="25" r="3.2" fill="#fff"/></svg>`,
  MN:`<svg viewBox="0 0 60 40"><rect width="20" height="40" fill="#c4272f"/>
    <rect x="20" width="20" height="40" fill="#015197"/><rect x="40" width="20" height="40" fill="#c4272f"/>
    <g fill="#f9cf02"><circle cx="10" cy="12" r="2.6"/><rect x="8.6" y="17" width="2.8" height="4"/>
    <rect x="7" y="23" width="6" height="2.6"/><rect x="8.6" y="27.6" width="2.8" height="4"/></g></svg>`,
  UZ:`<svg viewBox="0 0 60 40"><rect width="60" height="12.4" fill="#0099b5"/>
    <rect y="12.4" width="60" height="1.6" fill="#ce1126"/>
    <rect y="14" width="60" height="12" fill="#fff"/>
    <rect y="26" width="60" height="1.6" fill="#ce1126"/>
    <rect y="27.6" width="60" height="12.4" fill="#1eb53a"/>
    <circle cx="12" cy="6.5" r="4.4" fill="#fff"/><circle cx="14.2" cy="5.6" r="4" fill="#0099b5"/>
    <g fill="#fff"><circle cx="21" cy="4" r=".9"/><circle cx="25" cy="4" r=".9"/>
    <circle cx="23" cy="8" r=".9"/><circle cx="27" cy="8" r=".9"/></g></svg>`,
  JP:`<svg viewBox="0 0 60 40"><rect width="60" height="40" fill="#fff"/>
    <circle cx="30" cy="20" r="11" fill="#bc002d"/></svg>`,
  US:`<svg viewBox="0 0 60 40"><rect width="60" height="40" fill="#fff"/>
    <g fill="#b22234"><rect width="60" height="3.1" y="0"/><rect width="60" height="3.1" y="6.2"/>
    <rect width="60" height="3.1" y="12.4"/><rect width="60" height="3.1" y="18.5"/>
    <rect width="60" height="3.1" y="24.7"/><rect width="60" height="3.1" y="30.8"/>
    <rect width="60" height="3.1" y="36.9"/></g>
    <rect width="26" height="21.6" fill="#3c3b6e"/>
    <g fill="#fff"><circle cx="5" cy="4" r="1.5"/><circle cx="12" cy="4" r="1.5"/><circle cx="19" cy="4" r="1.5"/>
    <circle cx="8.5" cy="9" r="1.5"/><circle cx="15.5" cy="9" r="1.5"/>
    <circle cx="5" cy="14" r="1.5"/><circle cx="12" cy="14" r="1.5"/><circle cx="19" cy="14" r="1.5"/>
    <circle cx="8.5" cy="19" r="1.5"/><circle cx="15.5" cy="19" r="1.5"/></g></svg>`,
  CA:`<svg viewBox="0 0 60 40"><rect width="60" height="40" fill="#fff"/>
    <rect width="15" height="40" fill="#d80621"/><rect x="45" width="15" height="40" fill="#d80621"/>
    <path d="M30 8l2.4 5 4.6-1.4-1.6 4.6 4.6 1.4-4.6 3.4 1.6 4.4-4.6-1.6-.6 5h-4l-.6-5-4.6 1.6 1.6-4.4L19 21.6l4.6-1.4L22 15.6l4.6 1.4z" fill="#d80621"/>
    <rect x="29" y="26" width="2" height="6" fill="#d80621"/></svg>`,
  AU:`<svg viewBox="0 0 60 40"><rect width="60" height="40" fill="#00247d"/>
    <path d="M0 0l26 17M26 0L0 17M0 0h26v17H0z" fill="none" stroke="#fff" stroke-width="3"/>
    <path d="M0 0l26 17M26 0L0 17" stroke="#cf142b" stroke-width="1.6"/>
    <path d="M13 0v17M0 8.5h26" stroke="#fff" stroke-width="5"/>
    <path d="M13 0v17M0 8.5h26" stroke="#cf142b" stroke-width="2.6"/>
    <g fill="#fff"><circle cx="13" cy="29" r="3"/><circle cx="44" cy="9" r="1.9"/>
    <circle cx="38" cy="20" r="1.9"/><circle cx="50" cy="20" r="1.9"/>
    <circle cx="44" cy="31" r="1.9"/><circle cx="46" cy="20" r="1.2"/></g></svg>`,
  FR:`<svg viewBox="0 0 60 40"><rect width="20" height="40" fill="#002395"/>
    <rect x="20" width="20" height="40" fill="#fff"/><rect x="40" width="20" height="40" fill="#ed2939"/></svg>`,
  VN:`<svg viewBox="0 0 60 40"><rect width="60" height="40" fill="#da251d"/>
    <path d="M30 10l3.5 10.8h11.4l-9.2 6.7 3.5 10.8-9.2-6.7-9.2 6.7 3.5-10.8-9.2-6.7h11.4z" fill="#ff0"/></svg>`,
  TH:`<svg viewBox="0 0 60 40"><rect width="60" height="40" fill="#a51931"/>
    <rect y="6.7" width="60" height="26.6" fill="#f4f5f8"/>
    <rect y="13.3" width="60" height="13.4" fill="#2d2a4a"/></svg>`,
  ID:`<svg viewBox="0 0 60 40"><rect width="60" height="20" fill="#ce1126"/>
    <rect y="20" width="60" height="20" fill="#fff"/></svg>`,
};
/*
 * 시계 이모지로는 시각을 가르칠 수 없다.
 *
 * 🕐 과 🕑 는 글꼴이 그리는 그림이라 화면에서 40px 남짓으로 나온다. 그
 * 크기에서는 바늘 각도가 한 시인지 두 시인지 구별되지 않고 눈금에 숫자도
 * 없다. 「한 시」를 가르치는 카드가 정작 한 시를 못 보여 주는 셈이다.
 * 그래서 시계는 직접 그린다 — 1부터 12까지 아라비아 숫자를 눈금에 박고,
 * 그 카드가 말하는 시각의 숫자를 크게·진하게 키운다.
 */
const clockSVG = h => {
  const P = (r, a) => [
    (50 + r * Math.sin(a * Math.PI / 180)).toFixed(1),
    (50 - r * Math.cos(a * Math.PI / 180)).toFixed(1),
  ];
  let nums = '';
  for (let n = 1; n <= 12; n++) {
    const [x, y] = P(37, n * 30);
    nums += `<text x="${x}" y="${y}" class="cn${n === h ? ' on' : ''}">${n}</text>`;
  }
  const [hx, hy] = P(24, h * 30);
  return `<span class="clock"><svg viewBox="0 0 100 100" role="img" aria-label="${h}시">` +
    `<circle class="cface" cx="50" cy="50" r="47"/>${nums}` +
    `<line class="cmin" x1="50" y1="50" x2="50" y2="14"/>` +
    `<line class="chr" x1="50" y1="50" x2="${hx}" y2="${hy}"/>` +
    `<circle class="cpin" cx="50" cy="50" r="3.6"/></svg></span>`;
};
/* 🕐(U+1F550) 부터 🕛 까지가 한 시 ~ 열두 시다. */
const CLOCK_AT = e => {
  const c = [...String(e)][0]?.codePointAt(0);
  return c >= 0x1F550 && c <= 0x1F55B ? c - 0x1F550 + 1 : 0;
};

/*
 * 요일은 숫자로 세면 안 된다.
 *
 * 1️⃣2️⃣3️⃣ 으로 요일 카드를 세워 두면 학생은 「1 = 월요일」을 외운다. 그런데
 * 달력에서도 시간표에서도 요일은 숫자로 안 적힌다. 영어 약자를 쓰면 이미
 * 아는 것에 한국어를 얹는 셈이라 카드 한 장이 곧바로 읽힌다.
 * 주말은 빨강이다 — 달력이 그렇게 생겼고, 쉬는 날이라는 것이 색으로 온다.
 */
const DAY = /^day:([A-Za-z]{2,3})$/;

/* 이모지 자리에 온 국기·시계를 실제 그림으로 바꾼다. 그 밖은 그대로 둔다. */
/* 새 단어 그림(data/vocabpic.js) — 표에 있으면 그린 그림, 없으면 예전처럼 EMO(국기 · 시계 · 요일 · 이모지). */
const V3KEY = it => (lesson + 1) + "|" + String(it.w).replace(/<[^>]+>/g, "").trim() + "|" + String(it.g).replace(/<[^>]+>/g, "").trim();
const V3HAS = it => typeof V3MAP !== "undefined" && !!V3MAP[V3KEY(it)];
const V3IMG = f => `<img class="v3" src="/course/sample/scenes/vocab/${f}" alt="">`;
const V3PIC = it => { const f = typeof V3MAP !== "undefined" && V3MAP[V3KEY(it)]; if(!f) return EMO(it.e); return Array.isArray(f) ? `<span class="v3duo">${f.map(V3IMG).join("")}</span>` : V3IMG(f); };
/* 뜻 줄의 괄호는 한 덩이 — 「(male / speaker)」처럼 가운데서 끊기지 않게(11-04 대표님) */
const VEN = g => String(g).replace(/\([^)]*\)/g, m => `<span style="white-space:nowrap">${m}</span>`);
const EMO = e => {
  const h = CLOCK_AT(e);
  if (h) return clockSVG(h);
  const d = DAY.exec(e);
  if (d) return `<span class="daytag${/^(SAT|SUN)$/i.test(d[1]) ? ' off' : ''}">${d[1].toUpperCase()}</span>`;
  const m = /^[\u{1F1E6}-\u{1F1FF}]{2}$/u.test(e)
    ? [...e].map(c => String.fromCharCode(c.codePointAt(0) - 0x1F1E6 + 65)).join('')
    : null;
  return m && FLAG[m] ? `<span class="flag">${FLAG[m]}</span>` : e;
};

/*
 * 묻는 통표현.
 *
 * 학생은 대답만 배우고 교실을 나간다. 「학교에서 집까지 버스로 가요」는
 * 말할 수 있는데, 정작 누구에게 그 말을 시킬 물음을 못 만든다. 물음이 없으면
 * 그 문법은 교실 밖에서 한 번도 안 쓰인다.
 *
 * 그래서 물음을 쪼개서 가르치지 않고 통째로 하나 준다. 「어떻게」가 무슨
 * 품사인지, 「가요」가 왜 그 자리인지는 지금 몰라도 된다 — 통째로 외워
 * 오늘 바로 짝에게 물어보는 것이 먼저다.
 */
const ASK = a => {
  if(!a) return '';
  const q = [].concat(a.q);
  /* 물음이면 「물어보세요」, 아니면 「이렇게 말해요」. 이 상자에 꼭 물음만
     들어가는 것은 아니다 — 대답 한 줄이 더 쓸모 있는 과가 있다. */
  const label = a.l || (q[q.length-1].trim().endsWith("?")
    ? 'Ask like this <i>이렇게 물어보세요</i>' : 'Say it like this <i>이렇게 말해요</i>');
  return `<div class="askbox"${a.z ? ` data-z="${a.z}"` : ''}>
  <span class="ask-l">${label}</span>
  ${q.map(x => `<span class="ask-k">${M(x)}</span>`).join('')}
  ${[].concat(a.en).map(e => `<span class="ask-e">${e}</span>`).join('')}
  ${/* 이 자리에서 함께 짚어 둘 짝을 스티커로 붙인다 — 27-03 의 「있어요 ↔ 없어요」. */''}
  ${a.sticker ? `<span class="ask-sticker">${a.sticker}</span>` : ''}
</div>`;
};

/*
 * 교사 메모.
 *
 * 예문만 던져 두면 교사가 무엇을 짚어야 할지 스스로 알아내야 한다.
 * 「저의 → 제」처럼 규칙 밖에 있는 것, 학생이 꼭 묻는 것, 예외는 여기에
 * 적어 둔다. 학생에게 읽히는 글이 아니라 교사가 말로 풀어 줄 거리다.
 */
/*
 * 교사 메모.
 *
 * 기본은 화면에 펼쳐 둔다 — 한두 줄이면 그대로 읽고 지나가는 것이 빠르다.
 *
 * 그런데 <b>넘치는 메모</b>가 있다. 짝을 보여 주는 예문 상자가 둘씩 들어간 메모는
 * 슬라이드의 예문과 그림을 밀어내고, 학생 앞에서는 보일 까닭도 없는 글이 화면의
 * 절반을 차지한다. 그런 자리는 <b>단추 하나</b>로 접어 둔다 — 수업 중에는 닫혀
 * 있고, 교사가 누르면 슬라이드 위에 통째로 펼쳐진다. 교사만 보는 것이니 예문이나
 * 그림을 덮어도 된다(21-02 · 21-05).
 *
 * 데이터에서 memoPop 을 적어 둔 자리만 단추가 된다.
 */
/*
 * 손으로 memoPop 을 안 적어 둔 자리도 <b>길면 저절로</b> 접는다(2026-09-21).
 *
 * 20 · 10 · 29과에서 메모가 슬라이드를 밀어 아래가 무대 밖으로 나갔다 — 교사가
 * 읽을 글이 정작 화면에 없었다(조판 검사 「화면 밖」). 예문 상자를 품었거나
 * 글이 260자를 넘으면 단추로 세운다. 기준은 데이터가 아니라 길이다 — 새 과를
 * 쓸 때마다 표시하는 것을 잊지 않아도 된다.
 */
const MEMO = (m, pop) => !m ? '' : (pop || m.length > 260 || /class="tipex"/.test(m))
  ? `<div class="memopop">
      <button class="memopop-b" type="button">📝 교사 메모 <i>열기</i></button>
      <div class="memopop-w" hidden>
        <div class="memopop-c">
          <span class="memo-l">📝 교사 메모</span>
          <button class="memopop-x" type="button" title="닫기">✕</button>
          <div class="memo-t">${m}</div>
        </div>
      </div>
    </div>`
  : `<div class="memo"><span class="memo-l">📝 교사 메모</span><span class="memo-t">${m}</span></div>`;

/*
 * 교사 메모 새 B — 칸 넷 · 딱지 · 말풍선 (2급 engine.js 에서 옮김, 1급 정리 장 시안 2026-10-02).
 * 지금은 정리 장(data/sum.js 의 SUMB[과].memo)만 쓴다. 1급의 다른 장 메모는 예전 모양 그대로.
 * 2급의 MEMO_ALWAYS_POP(모든 메모를 알약으로)은 옮기지 않는다 — 다른 장이 바뀌므로.
 * 정리 장은 MEMO(…, true) 로 불러 알약이 된다.
 */
const MB_HEAD = { ex: ['핵심', '설명', '예문', '오류'], cmp: ['핵심', '설명', '예문', '오류'],
  voc: ['목표', '방법', '오류', '1:1 · 온라인'], drill: ['목표', '방법', '오류', '1:1 · 온라인'],
  sit: ['목표', '방법', '막힐 때', '1:1 · 온라인'] };
const MB_MK = [[/^○\s*/, '<span class="mb-ok">○</span>'], [/^✕\s*/, '<span class="mb-ng">✕</span>'], [/^→\s*/, '<span class="mb-ar">→</span>'],
  [/^·\s*/, '<span class="mb-dot">·</span>'], [/^(가|나|교사|학생):\s*/, '<span class="mb-who mb-w$1">$1</span>']];
const MB_ESC = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const MB_IN = t => t.replace(/→ ○ /g, '→ <span class="mb-ok sm">○</span> ');
const MB_BR = t => t.split(' | ').map(u => u.split(' — ').map((x, i) => i === 0 ? x : (/^(「|→|학생:)/.test(x) ? '<br>' : ' — ') + x).join('')).join('<br>');
const MB_LINE = s0 => {
  const s = MB_ESC(s0);
  if(/^🗣/.test(s)) {
    const t = s.replace(/^🗣\s*/, ''), i = t.indexOf(' — ');
    const say = i < 0 ? t : t.slice(0, i), rest = i < 0 ? '' : t.slice(i + 3);
    return `<div class="mb-say"><span>🗣</span><span>${MB_IN(MB_BR(say))}${rest ? `<br><span class="mb-sub">${MB_IN(MB_BR(rest))}</span>` : ''}</span></div>`;
  }
  for(const [re, h] of MB_MK) if(re.test(s)) { const m = s.match(re); return `<div class="mb-ln">${m[0].replace(re, h)}<span>${MB_IN(MB_BR(s.slice(m[0].length)))}</span></div>`; }
  return `<div class="mb-ln mb-plain"><span>${MB_IN(MB_BR(s))}</span></div>`;
};
const MB = (secs, kind) => !secs ? '' : `<div class="mb">${secs.map((ls, i) => ls && ls.length
  ? `<div class="mb-s"><div class="mb-h"><span class="mb-n">${i + 1}</span>${MB_HEAD[kind][i]}</div>${ls.map(MB_LINE).join('')}</div>` : '').join('')}</div>`;

/*
 * 학생 말을 받아 적는 빈칸.
 *
 * 「이렇게 물어보세요」로 물으면 학생은 저마다 다른 대답을 한다. 그 말이
 * 화면에 없으면 교실에서 나온 문장은 그 자리에서 사라지고, 학생은 끝까지
 * 교재에 적힌 남의 문장만 본다. 말풍선 첫 줄을 비워 두고 교사가 방금 들은
 * 말을 적으면, 아래 준비된 예문과 나란히 놓여 「내가 만든 문장도 이 문법이다」가
 * 눈으로 보인다.
 *
 * 적은 글은 검정이고 오늘의 문법소만 빨갛게 뜬다(아래 initWrite).
 * 문장 전체가 빨갛면 어디가 오늘 것인지 알 수 없다 — 자기 문장에서 오늘
 * 배운 조각을 찾아내는 것이 이 칸이 하는 일이다.
 */
const WRITE = ph => `<div class="write" contenteditable="true" spellcheck="false" data-ph="${ph}"></div>`;

/*
 * 이 문법이 무엇 뒤에 붙는가.
 *
 * 규칙표는 「받침이 있으면 이것, 없으면 저것」만 말해 줍니다. 그런데 학생이
 * 정작 틀리는 것은 받침이 아니라 품사입니다 — 「예쁘는데 ✕」, 「가은데 ✕」,
 * 「비싸겠습니다」를 동사인 줄 알고 만듭니다. 규칙표 바로 위에 무엇 뒤에
 * 붙는 문법인지를 띄워, 받침을 따지기 전에 품사를 먼저 보게 합니다.
 *
 * 과 데이터의 pos(「동사 / 형용사 / 이다」)를 그대로 쪼개 쓰므로 과마다
 * 따로 적을 것이 없습니다. 셋 다면 「모두」라고 한 번 더 못박습니다.
 */
const POS_ALL = ['동사','형용사','이다'];
/* 품사 이름은 영어를 앞에 세운다. 학생이 먼저 읽는 자리다. */
const POS_EN = { '동사':'Verb', '형용사':'Adjective', '이다':'Copula', '명사':'Noun', '장소':'Place', '시간':'Time',
  /* 명사가 둘 필요한 과(에서 ~ 까지 · 부터 ~ 까지)는 첫째·둘째 명사로 부른다 */
  '명사1':'Noun 1', '명사2':'Noun 2',
  '동사 (타동사)':'Verb (transitive)', '동사 (자동사)':'Verb (intransitive)',
  '네 축약형 모으기':'Four contractions' };
const POSLABEL = p => {
  /* 「동사 / 형용사 / 이다」·「동사 · 형용사」처럼 여럿을 이어 적는 과가 있다.
     조각마다 영어를 찾고, 하나라도 모르면 한국어를 그대로 둔다. */
  const whole = POS_EN[String(p).trim()];
  if(whole) return `${whole} <i>${p}</i>`;
  const parts = String(p).split(/\s*[\/·]\s*/).map(x => x.trim());
  const en = parts.map(x => POS_EN[x]).filter(Boolean);
  const sep = /\//.test(p) ? ' / ' : ' · ';
  return en.length === parts.length ? `${en.join(sep)} <i>${p}</i>` : p;
};
/* 문법소 제목(formT)에 끼워 둔 품사 딱지도 영어를 앞에 세운다 — 「에서 명사2 + 까지」 */
const POSFT = t => String(t).replace(/<span class="pos">([^<]+)<\/span>/g,
  (_, p) => `<span class="pos">${POSLABEL(p)}</span>`);
/* 정리 장 제목만 — 영어 품사로만 남기고 작은 한국어는 지운다(대표님 2026-10-02 「영어 품사로만 남겨 둬 한국어는 지우고」).
   영어를 모르는 품사 말은 한국어를 그대로 둔다(빈 제목이 되지 않게). 다른 장 제목은 POSLABEL 그대로. */
const POSLABEL_EN = p => {
  const whole = POS_EN[String(p).trim()];
  if(whole) return whole;
  const parts = String(p).split(/\s*[\/·]\s*/).map(x => x.trim());
  const en = parts.map(x => POS_EN[x]).filter(Boolean);
  const sep = /\//.test(p) ? ' / ' : ' · ';
  return en.length === parts.length ? en.join(sep) : p;
};
const POSFT_EN = t => String(t).replace(/<span class="pos">([^<]+)<\/span>/g,
  (_, p) => `<span class="pos">${POSLABEL_EN(p)}</span>`);
/*
 * 표의 이름 칸도 품사 이름은 영어를 앞에 세운다 (1~4급 공통).
 *
 * 품사 말과 받침 표시만으로 된 이름만 옮긴다 — 「명사 + 이다」·「동사 · 받침 O」.
 * 「뒤의 동사」·「동사 · 지금」처럼 뜻이 섞인 이름은 기계로 옮기면 반쪽 영어가
 * 되므로 그대로 두고, 그 과를 검수할 때 한 줄씩 옮긴다.
 * 데이터의 k 는 건드리지 않는다 — 「명사 …」로 시작하는지로 줄을 가르는 곳이 있다.
 */
const KEN_WORD = { '명사':'Noun', '동사':'Verb', '형용사':'Adjective' };
const KEN = k => {
  const s = String(k == null ? '' : k);
  if(!/명사|동사|형용사/.test(s) || /<i>/.test(s)) return s;
  const rest = s.replace(/명사|동사|형용사/g, '')
    .replace(/받침 상관 X|받침\s*[OX](\s*·\s*[OX])?|받침|이다|[OX]|[\s·+()/,]/g, '');
  if(rest) return s;
  return `${s.replace(/명사|동사|형용사/g, w => KEN_WORD[w])}<i>${s}</i>`;
};
const POSBAR = pos => {
  if(!pos) return '';
  const has = POS_ALL.filter(p => pos.includes(p));
  /* 조사 과(명사 · 시간 · 장소)는 용언과 겨룰 것이 없다. 셋을 늘어놓고
     ✕ 를 두 개 붙이면 없는 갈래를 만들어 내는 셈이라, 그냥 하나만 세운다. */
  if(!has.length) return `<div class="posbar">
    <span class="pb-l">Attaches to <i>붙는 자리</i></span><span class="pb-p on">${POSLABEL(pos)}</span></div>`;
  const all = has.length >= 3;
  return `<div class="posbar">
    <span class="pb-l">Attaches to <i>붙는 자리</i></span>
    ${POS_ALL.map(p => `<span class="pb-p${has.includes(p) ? ' on' : ' off'}">${POSLABEL(p)}${has.includes(p) ? '' : ' ✕'}</span>`).join('')}
    ${all ? `<span class="pb-all">All three <i>모두 붙어요</i></span>` : ''}
  </div>`;
};

/* 그림 타일의 설명.
   한 문장이면 마침표를 찍고, 낱말·형태 연습이면 찍지 않는다.
   서술어로 끝나면 문장으로 본다 — 학생이 화면에서 문장과 낱말을 구별한다. */
/* ══════════ 그림 딱지의 영어 ══════════
 * 그림 아래에 한국어 낱말만 서 있으면, 그 낱말을 처음 보는 학생은 그림과
 * 낱말을 잇지 못한 채 교사의 말만 기다린다. 낱말마다 영어를 한 줄 깐다.
 *
 * 여기 적히지 않은 낱말은 그 급의 어휘 카드(g)에서 찾아 쓰고, 그것도 없으면
 * 영어 줄을 아예 그리지 않는다 — 빈 줄을 남기면 딱지 높이만 들쭉날쭉해진다.
 */
const CAPEN = {
  '6시':'6 o’clock', '7월 1일':'July 1', '8월 20일':'August 20', '9시':'9 o’clock',
  '가다':'to go', '가방':'bag', '가수':'singer', '가요':'goes',
  '가위':'scissors — to cut', '가지 못하다':'cannot go', '가지 않다':'does not go',
  '거실':'living room', '계란':'egg', '고향':'hometown',
  '공부 안 하다':'does not study', '공부하다':'to study', '교실':'classroom',
  '금요일':'Friday', '금요일?':'Friday?', '김치찌개':'kimchi stew',
  '날마다':'every day', '날씨':'weather', '날씬해요':'is slim',
  '남동생 ○':'younger brother ○', '내일':'tomorrow', '냉면':'naengmyeon',
  '노래하다':'to sing', '눈':'snow', '다른 건 X':'nothing else ✕',
  '덥다':'to be hot', '도서관':'library', '도서관에':'to the library', '등산':'hiking',
  '리에':'Rie', '리에 씨':'Rie', '리에 씨는 선생님':'Rie is a teacher',
  '마셔요':'drinks', '마시다':'to drink', '마시지 않아요':'does not drink',
  '마이클':'Michael', '마이클 씨가':'Michael (subject)', '마이클 씨는 학생':'Michael is a student',
  '만나다':'to meet', '만나지 못하다':'cannot meet', '많이 ✕':'not a lot ✕',
  '말하다':'to speak', '맛있다':'to be delicious', '매운 음식':'spicy food',
  '매일':'every day', '매일 운동':'exercise every day', '먹다':'to eat', '먹어요':'eats',
  '먹지 못하다':'cannot eat', '멋있다':'to look cool', '모델':'model',
  '모르다':'to not know', '목요일':'Thursday', '못 가다':'cannot go',
  '못 하다':'cannot do', '못 해요':'cannot do it', '물':'water',
  '미국':'the USA', '미국 사람':'American', '바다':'the sea', '밥':'rice',
  '밥을 먹어요':'eats a meal', '버스':'bus', '버스로':'by bus',
  '보고':'and watches', '보다':'to watch', '볼펜':'pen — to write',
  '부산':'Busan', '부산 12도':'Busan 12°', '부엌':'kitchen',
  '빵':'bread', '빵 ✕':'no bread ✕', '서울':'Seoul', '서울 3도':'Seoul 3°',
  '선물':'gift', '선생님':'teacher', '수업':'class', '수영':'swimming',
  '수영하다':'to swim', '수진':'Sujin', '숙제':'homework', '시계 ✕':'no clock ✕',
  '식당':'restaurant', '아니에요':'is not', '아직':'not yet', '아침':'morning',
  '아파요':'is sick', '아홉 시':'9 o’clock', '아홉 시에':'at 9 o’clock',
  '안 가다':'does not go', '안 마시다':'does not drink', '안 봐요':'does not watch',
  '안 해요':'does not do', '안경':'glasses', '알다':'to understand',
  '어렵지 않다':'is not difficult', '어제':'yesterday', '어제 12시':'yesterday 12 o’clock',
  '어제 22도':'yesterday 22°', '어제 27도':'yesterday 27°',
  '어제 · 아파서':'yesterday · because I was sick', '없어요':'does not have',
  '여동생 ✕':'no younger sister ✕', '여섯 시':'6 o’clock', '여행':'trip',
  '영화':'movie', '영화 · 보다':'movie · to watch', '오늘':'today',
  '오늘 31도':'today 31°', '오늘 35도':'today 35°', '오지 않다':'does not come',
  '오후':'afternoon', '우리 학교':'our school', '우산':'umbrella', '우유':'milk',
  '운동하다':'to exercise', '월요일':'Monday', '음식':'food',
  '의자':'chair', '의자 ○':'chair ○', '의자에 가방':'a bag on the chair',
  '이 사람?':'who is this?', '이것':'this', '이름 = 리에':'name = Rie',
  '마이클 = 학생':'Michael = student', '리에 = 선생님':'Rie = teacher', '밤':'night',
  '마이클 · 공부하다':'Michael · to study', '동생 · 자다':'my sibling · to sleep',
  '마이클 · 일어나다':'Michael · to get up', '마이클 · 운동하다':'Michael · to exercise',
  '어머니 · 일하다':'my mother · to work', '저 · 읽다':'I · to read',
  '학생 ✕':'not a student ✕', '회사원 ○':'office worker ○',
  '이메일':'email', '이번 주 · 바빠서':'this week · because I am busy',
  '이야기의 주제':'the topic of the talk', '일곱 시':'7 o’clock',
  '일본 사람 ✕':'not Japanese ✕', '일어나다':'to get up', '일요일':'Sunday',
  '일하다':'to work', '읽다':'to read', '읽어요':'reads', '있어요':'has',
  '자다':'to sleep', '저':'I / me', '저것':'that', '저녁':'evening',
  '저는':'as for me', '저도':'me too', '저만':'only me', '전화':'phone',
  '제가':'I (subject)', '조금만':'just a little', '주말':'weekend', '지갑':'wallet',
  '지금':'now', '지금 눈앞':'right in front of me now', '지금 하는 중':'doing it right now',
  '지하철':'subway', '짐작하다':'to guess', '집':'home', '집 · 있다':'home · to be',
  '차':'tea', '책':'book', '책상에 책':'a book on the desk', '책을 읽다':'to read a book',
  '초대':'invitation', '춥다':'to be cold', '친구':'friend', '친구 · 만나다':'friend · to meet',
  '친구들 ✕':'no friends ✕', '친구하고':'with a friend', '카드':'card',
  '커피':'coffee', '커피를 마셔요':'drinks coffee', '케이크':'cake', '토요일':'Saturday',
  '편지':'letter', '프랑스 사람 ○':'French ○', '피곤하다':'to be tired',
  '하다':'to do', '하지 못해요':'cannot do it', '학교':'school', '학교 · 가다':'school · to go',
  '학교에':'to school', '학생':'student', '학생 ✕':'not a student ✕',
  '학생이에요':'is a student', '한 시':'1 o’clock', '한국':'Korea', '한국 사람':'Korean',
  '한국어':'Korean (language)', '한국어를 공부하다':'to study Korean', '현금':'cash',
  '회사':'company', '회사원 ○':'office worker ○', '휴대폰':'phone — to take a photo',
  '힘들다':'to be hard',
};
/* 위 표에 없는 낱말은 어휘 카드가 이미 들고 있는 뜻(g)을 빌린다. */
const VOCEN = (() => {
  const m = {};
  (LESSONS || []).forEach(L => (L.vocab || []).forEach(v => (v.items || []).forEach(it => {
    if(it.w && it.g && !m[it.w]) m[it.w] = it.g;
  })));
  return m;
})();
const CAPGLOSS = c => CAPEN[c] || VOCEN[c] || '';
const SENT = /(요|다|까|죠)$/;
const CAP = c =>
  SENT.test(c) && !/[.?!]$/.test(c) ? `${c}${/까\?*$/.test(c) ? '?' : '.'}` : c;
/* 자리 말하기 그림에 쓰는 책상. 이모지에 없어 직접 그린다. */
const DESK = '<svg class="deskg" viewBox="0 0 68 46" role="img" aria-label="책상">' +
  /* 상판 — 밝은 면 위에 그늘 한 줄로 두께를 준다. */
  '<rect x="1" y="6" width="66" height="7" rx="3" fill="#d79a56"/>' +
  '<rect x="1" y="11" width="66" height="3.4" rx="1.7" fill="#a86f34"/>' +
  /* 서랍 칸 — 이것이 있어야 책상으로 읽힌다. */
  '<rect x="36" y="15" width="27" height="17" rx="3" fill="#c98a49"/>' +
  '<rect x="39.5" y="18" width="20" height="4.6" rx="2.3" fill="#f0d3a8"/>' +
  '<rect x="39.5" y="24.6" width="20" height="4.6" rx="2.3" fill="#f0d3a8"/>' +
  '<rect x="46" y="19.6" width="7" height="1.6" rx=".8" fill="#a86f34"/>' +
  '<rect x="46" y="26.2" width="7" height="1.6" rx=".8" fill="#a86f34"/>' +
  /* 다리 — 왼쪽은 하나, 오른쪽은 서랍 아래로 짧게. */
  '<rect x="6" y="14.4" width="6.5" height="30" rx="2.6" fill="#a86f34"/>' +
  '<rect x="56" y="32" width="6.5" height="12.4" rx="2.6" fill="#a86f34"/>' +
  '</svg>';
/* on:['📕','desk'] 처럼 적으면 이모지 대신 그린 그림이 온다. */
const SPOTPIC = x => x === 'desk' ? DESK : EMO(x);
const CAPOX = c => { const m = /^(.*\S)\s+([○✕])$/.exec(c);
  return m ? `<span class="cap-w">${m[1]}</span><span class="cap-ox">${m[2]}</span>` : CAP(c); };
const PIC = items => `<div class="illus">` + items.map(x =>
  x.cmp ? `<div class="cmp">${x.cmp}</div>`
  : x.arw && x.via ? (() => { const g = x.via.g ?? CAPGLOSS(x.via.c); return `<div class="arw via">` +
      `<span class="via-emo">${EMO(x.via.e)}</span><span class="via-cap">${CAP(x.via.c)}</span>` +
      (g ? `<span class="via-en">${g}</span>` : '') + `<span class="via-arw">→</span></div>`; })()
  : x.arw ? `<div class="arw">→</div>`
  : x.sign ? `<div class="arw sign">${x.sign}</div>`
        /* only 를 적은 칸은 여럿 가운데 <b>고른 하나</b>다 — 붉은 테를 두른다.
           17과(만)의 첫 그림처럼 「이것 하나뿐」을 그림으로 말하는 자리다. */
        /* fit 은 「이름 = 리에」처럼 꺾이면 안 되는 딱지 — 글자를 줄여 한 줄로 세운다.
           끝에 붙은 ○ · ✕ 는 낱말과 떼어 아랫줄 가운데에 둔다(2026-09-24 대표님). */
        : (() => { const g = x.g ?? CAPGLOSS(x.c); return `<div class="tile ${x.t || ''}${x.only ? ' only' : ''}${x.x ? ' xmark' : ''}${x.fit ? ' fit' : ''}">` +
            `<span class="emo">${EMO(x.e)}</span>${x.c ? `<span class="cap">${CAPOX(x.c)}</span>` : ''}` +
            (g ? `<span class="cap-en">${g}</span>` : '') + `</div>`; })()
).join('') + `</div>`;
/* 사전형(‑다)인지 봅니다. 동사·형용사는 받침 규칙이 어간에 걸립니다.
   '베란다·캐나다'는 명사라서 글자만 보면 구별이 안 됩니다.
   그래서 지금 그리는 과가 용언 과인지를 함께 봅니다. */
/* 어휘·상황 묶음이 늘면 동그라미 번호가 모자라 undefined 가 찍힌다. */
const CIRC = n => '①②③④⑤⑥⑦⑧⑨⑩'[n] ?? `(${n + 1})`;

/*
 * 답이 여럿인 과에서 지금 무엇으로 연습하는지.
 *
 * 와/과 과는 한 낱말에 셋이 다 붙는다. 어느 것으로 연습하는지 정하지 않으면
 * 빙고 칸에는 하고가, 카드에는 셋이 한꺼번에 나와 활동마다 답이 달라진다.
 * 그래서 한 곳에서 고르고 단어 카드·빙고·릴레이가 모두 그것을 따른다.
 */
let PICK = null;
const PICKED = v =>
  (v && typeof v === 'object' && !Array.isArray(v)) ? (v[PICK] ?? Object.values(v)[0]) : v;

let VERB_LESSON = false;   // buildSlides 가 과마다 새로 정합니다
const isDict = w =>
  VERB_LESSON && /다$/.test(w) && w.replace(/[^가-힣]/g,'').length > 1;
/* 받침 표시를 붙입니다 (받침 O = 실선, 받침 X = 점선).
   '먹다'처럼 사전형이면 마지막 '다'가 아니라 어간의 끝 글자(먹)에 표시합니다.
   그러지 않으면 학생이 '다에 받침이 있다'고 읽습니다. */
const BAT = (w,b) => {
  if(b===undefined || b===null) return w;
  const i = isDict(w) ? w.length-2 : w.length-1;
  return w.slice(0,i) + `<u class="bat ${b?'yes':'no'}">${w[i]}</u>` + w.slice(i+1);
};
/* 받침 표시 옆에 붙는 꼬리표. 사전형이면 어디를 보는지 밝혀 줍니다. */
const BTAG = (w,b) => `${isDict(w) ? '어간 ' : ''}받침 ${b ? 'O' : 'X'}`;
/* 정리 슬라이드의 파란 설명줄 */
const NOTE = (r, bat = true) => r.base
  ? `${BAT(r.base, r.b)} + ${r.f}${bat ? ` &nbsp;(${BTAG(r.base, r.b)})` : ''}`
  : r.note;

/*
 * 한국어 설명에 칠해 둔 색을 <b>영어 줄에 그대로 옮긴다.</b>
 *
 * 정리 장과 CHECK 장은 영어가 큰 줄이 되었는데, 색은 한국어 줄에만 칠해져
 * 있었다. 그러면 학생이 읽는 줄은 온통 검정이고, 정작 오늘 배우는 형태가
 * 어느 것인지는 교사가 읽는 작은 줄에만 보인다.
 *
 * 영어 문장 안에도 「이에요 · 예요」 같은 한국어는 그대로 남아 있다. 한국어
 * 줄에서 그 조각에 무슨 색이 칠해졌는지 읽어 와, 영어 줄의 같은 조각에
 * 같은 딱지를 씌운다. 색을 두 군데에 따로 적지 않으므로 한쪽만 바뀌는 일이 없다.
 *
 * 한 글자짜리 조사(은 · 는 · 이 · 가)는 다른 낱말 안에도 들어 있어서,
 * 앞뒤가 한글이면 건드리지 않는다 — 「은행원」의 은까지 빨개지면 안 된다.
 */
const MIRROR = (ko, en, forms) => {
  if (!en || !ko) return en || '';
  const marks = [];
  /* 오늘의 문법소 자체는 영어 줄에도 한국어로 남는다 — 「이에요/예요 says …」.
     한국어 줄에서 굳이 칠하지 않은 자리라도, 학생이 읽는 줄에서는 그것이
     오늘 배우는 것이라는 표가 있어야 한다. */
  for (const f of (forms || [])) {
    const t = String(f || '').trim();
    /* 한 글자짜리 조사(도 · 만 · 안)도 칠한다. 앞뒤가 한글이면 안 건드리므로
       「도서관」의 도까지 빨개지는 일은 없다. */
    if (t && /[가-힣]/.test(t)) marks.push({ run: t, open: '<b>', close: '</b>' });
  }
  const tagRe = /<(b|em|strong|mark)>([\s\S]*?)<\/\1>|<span class="([^"]+)">([\s\S]*?)<\/span>/g;
  let m;
  while ((m = tagRe.exec(ko))) {
    const open = m[3] ? `<span class="${m[3]}">` : `<${m[1]}>`;
    const close = m[3] ? '</span>' : `</${m[1]}>`;
    const inner = (m[2] ?? m[4]).replace(/<[^>]*>/g, '');
    /* 칠해진 덩어리 안에서 한국어 토막만 뽑는다. 「받침 O → 이에요」에서는
       「받침」과 「이에요」가 따로 나오고, 영어 줄에 있는 것은 뒤엣것뿐이다. */
    for (const run of inner.match(/[가-힣][가-힣ㄱ-ㅎㅏ-ㅣ]*/g) || [])
      marks.push({ run, open, close });
  }
  if (!marks.length) return en;
  /* 긴 것부터 씌운다 — 「이에요」를 먼저 잡아야 그 안의 「이」가 따로 안 잡힌다. */
  marks.sort((a, b) => b.run.length - a.run.length);
  const seen = new Set();
  let out = en;
  for (const { run, open, close } of marks) {
    if (seen.has(run)) continue;
    seen.add(run);
    let res = '', i = 0;
    while (i < out.length) {
      /* 태그 안은 건너뛴다 — 이미 씌운 딱지를 다시 쪼개면 안 된다. */
      if (out[i] === '<') { const j = out.indexOf('>', i); res += out.slice(i, j + 1); i = j + 1; continue; }
      if (out.startsWith(run, i)) {
        const before = out[i - 1] || '', after = out[i + run.length] || '';
        const hangul = c => /[가-힣]/.test(c);
        if (!hangul(before) && !hangul(after)) { res += open + run + close; i += run.length; continue; }
      }
      res += out[i]; i++;
    }
    out = res;
  }
  return out;
};
const BOXMARK = `<svg viewBox="0 0 220 200" role="img" aria-label="Korean Box">
  <g stroke="#1b1b1b" stroke-width="6" stroke-linejoin="round" stroke-linecap="round">
    <path d="M46 80h128v104H46z" fill="#c8102e"/>
    <path d="M96 80h28v104H96z" fill="#1b4dff"/>
    <path d="M40 58h140v24H40z" fill="#c8102e" transform="rotate(-7 110 70)"/>
    <path d="M96 55h28v26H96z" fill="#1b4dff" transform="rotate(-7 110 70)"/>
    <path d="M88 54c-16-14-28-18-34-11-6 7 2 17 20 22" fill="none" stroke="#1b4dff" stroke-width="9"/>
    <path d="M126 52c14-16 26-21 33-14 7 7-1 18-19 24" fill="none" stroke="#1b4dff" stroke-width="9"/>
  </g>
  <text x="110" y="150" text-anchor="middle" font-size="40" font-weight="900" fill="#fff"
        stroke="#1b1b1b" stroke-width="5" paint-order="stroke" font-family="inherit">ㅎㅂ</text>
</svg>`;
function buildSlides(L0){
  /*
   * 이 과가 <b>받침으로 갈리는 과</b>인가.
   *
   * 규칙표가 「받침 O」와 「받침 X」를 서로 다른 줄로 갈라 놓았을 때만 참이다.
   * 「받침 O · X」처럼 한 줄이면 받침을 보지 않는 과이므로, 문장 모으기 아래에
   * 「(받침 X)」를 적지 않는다 — 없는 규칙을 찾게 만들 뿐이다(30-07).
   */
  const BATSPLIT = (() => {
    const R = L0.rules || {};
    const rows = [].concat(R.rows || [], R.irr || [], R.noun || [],
      ((R.tense && R.tense.items) || []).flatMap(t => (t.rules && t.rules.rows) || []));
    const name = r => String(r.k || '').replace(/<[^>]*>/g, '');
    const hasO = rows.some(r => /받침\s*O(?!\s*[·/]\s*X)/.test(name(r)));
    const hasX = rows.some(r => /받침\s*X/.test(name(r)));
    return hasO && hasX;
  })();
  const F = L0.form, out = [];
  /*
   * 문법소 제목에만 쓰는 긴 형태.
   *
   * 「에서 ~ 까지」는 명사가 둘 필요한 문법인데, 제목이 「명사 + 에서 ~ 까지」면
   * 명사 하나에 둘을 다 붙이는 것처럼 읽힌다. 제목에서는 둘째 명사 자리를
   * 드러내고(「명사 + 에서 ~ 명사2 + 까지」), 딱지·안내문에는 그대로 짧은
   * form 을 쓴다 — 거기서까지 길어지면 칸을 넘긴다.
   */
  const FT = L0.formT || F;
  /* posT 는 제목에 쓰는 품사 이름이다. 명사가 둘인 과에서는 「명사1」이 된다.
     pos 는 그대로 두어야 한다 — 용언 과인지 가리는 데 쓰기 때문이다. */
  const PT = L0.posT || L0.pos;
  VERB_LESSON = /동사|형용사/.test(L0.pos);
  /*
   * 예문에 칠할 색을 형태소 정리에서 읽어 온다.
   *
   * 표의 줄 하나가 곧 한 갈래다 — 「받침 O · + 이 아니에요」와
   * 「받침 X · + 가 아니에요」. 뒤엣줄에는 데이터가 c:'g2' 를 적어 두었고
   * 그것이 표에서 초록으로 나온다. 예문도 그 색을 그대로 쓴다.
   *
   * 받침으로 갈리는 과에서만 한다. 「ㅏ,ㅗ / 그 밖」처럼 받침과 상관없이
   * 갈리는 과는 두 꼴이 같은 자리를 다투지 않으므로 색을 나눌 까닭이 없다.
   */
  /*
   * 표에 없는 꼴을 따로 칠해야 하는 과가 있다 — 14과의 에게서 · 한테서.
   *
   * 규칙표의 두 줄은 에게(빨강)와 한테(초록)를 가른다. 그런데 받는 쪽을 말하는
   * 「에게서 · 한테서」는 그 둘 중 하나가 아니라 <b>방향이 뒤집힌 제삼의 꼴</b>이다.
   * 빨강으로 두면 주는 쪽 에게와 한 색이 되어, 학생은 서가 붙은 것을 못 본다.
   * 규칙표의 irr 줄까지 훑어 색을 모으면 다른 과의 색이 함께 흔들리므로,
   * 데이터가 markalt 로 집어 준 것만 더한다.
   */
  const MARKEXTRA = (L0.markalt || []).filter(a => a && a.alt && a.cls);
  MARKALT = (() => {
    const rows = (L0.rules && L0.rules.rows) || [];
    /* 표가 색으로 갈래를 나눠 둔 과에서만 한다. 색이 하나뿐이면 나눌 것이 없다. */
    /* 과 데이터가 꼴마다 색을 정해 둔 과(16과 과/와 = 파랑 · (이)랑 = 초록, 2026-10-09 대표님 16-06 · 16-07)는 그대로 쓴다 */
    if (L0.markalt) return MARKEXTRA.concat(L0.markalt);
    if (!rows.some(r => r.c)) return MARKEXTRA;
    return MARKEXTRA.concat(rows.map(r => {
      /* 「+ 이 있어요/없어요」에서 갈리는 것은 앞의 「이」 하나다. */
      /* 「→ 해요」·「+ -어요」처럼 앞에 붙은 기호와 줄표는 떼고 본다. */
      const head = String(r.f || '').replace(/^[+\u2192\s-]+/, '').trim().split(/\s+/)[0].split('/')[0];
      const cls = r.c === 'g2' ? 'bx' : r.c === 'g3' ? 'b3' : r.c === 'g4' ? 'b4' : '';
      return head && /[가-힣]/.test(head) ? { alt: head, cls } : null;
    }).filter(a => a && a.cls));
  })();
  /* ══════ 어간과 어미를 갈라 색칠하기 ══════ */
  const JONG = ['','ㄱ','ㄲ','ㄳ','ㄴ','ㄵ','ㄶ','ㄷ','ㄹ','ㄺ','ㄻ','ㄼ','ㄽ','ㄾ','ㄿ','ㅀ',
                'ㅁ','ㅂ','ㅄ','ㅅ','ㅆ','ㅇ','ㅈ','ㅊ','ㅋ','ㅌ','ㅍ','ㅎ'];
  const isKo   = ch => { const c = ch.codePointAt(0); return c >= 0xAC00 && c <= 0xD7A3; };
  const batOf  = ch => isKo(ch) ? JONG[(ch.codePointAt(0) - 0xAC00) % 28] : '';
  const noBat  = ch => String.fromCodePoint(0xAC00 + Math.floor((ch.codePointAt(0) - 0xAC00) / 28) * 28);
  /* 「으 + ㄹ게요」처럼 낱자가 앞 글자 뒤에 오면 받침으로 합칩니다 → 을게요. */
  const JOIN = s => s.replace(/([가-힣])([ㄱ-ㅎ])/g, (m, a, b) => {
    const i = JONG.indexOf(b), c = a.codePointAt(0) - 0xAC00;
    return (i < 1 || c % 28 !== 0) ? m : String.fromCodePoint(0xAC00 + c + i);
  });
  /* 그 과에 나올 수 있는 어미 꼴을 모읍니다 — 규칙표의 형태 칸과 과의 form 에서. */
  const SUFS = (() => {
    const list = [];
    const add = s => { s = String(s || '').trim(); if (!s) return;
      if (!list.includes(s)) list.push(s);
      /* 「가 있어요/없어요」처럼 뒷말이 붙은 꼴은 조사만 따로도 담습니다. */
      if (s.includes(' ')) { const h = s.split(' ')[0]; if (h && !list.includes(h)) list.push(h); }
      /* 「습니다 · 습니까?」처럼 한 칸에 두 꼴이 적힌 자리도 각각 담습니다. */
      s.split(/[·/]/).map(x => x.trim()).forEach(x => {
        if (x && x !== s && !list.includes(x)) list.push(x);
        /* 갈래마다 물음표를 뗀 꼴도 담습니다 — 습니까? ↔ 습니까 */
        const xb = x.replace(/[?!.]+$/, '');
        if (xb && xb !== x && !list.includes(xb)) list.push(xb); });
      /* 물음표가 붙은 꼴은 뗀 모양으로도 담습니다 — 합니까? ↔ 합니까 */
      const bare = s.replace(/[?!.]+$/, "");
      if (bare && bare !== s && !list.includes(bare)) list.push(bare); };
    /* 「이었어요」처럼 칸에 어미만 적힌 자리도 담습니다. 「+」나 「→」가 없다고
       버리면 명사 뒤 어미가 통째로 안 칠해집니다 — 학생이었어요. */
    const fromF = (f, row) => { const s0 = String(f || '').trim(); const p = s0.split(/[+→]/);
      if (p.length > 1) return add(p[p.length - 1].trim().replace(/^-/, ''));
      /* 「이었어요」처럼 어미만 적힌 칸입니다. 그 칸의 보기 답이 정말 그 꼴로
         끝날 때에만 담습니다 — 「비슷하다」 같은 뜻풀이가 어미로 들어오면
         설명 줄이 엉뚱한 자리에서 빨개집니다. */
      const t = s0.replace(/^-/, '');
      if (!/^[가-힣]{2,6}[?!.]?$/.test(t)) return;
      if (row && (row.ex || []).some(([, a]) => String(a).endsWith(t))) add(t); };
    const scan = R => { if (!R) return; (R.rows || []).forEach(r => fromF(r.f, r)); (R.irr || []).forEach(r => fromF(r.f, r)); (R.noun || []).forEach(r => fromF(r.f, r)); };
    scan(L0.rules);
    (((L0.rules && L0.rules.tense && L0.rules.tense.items)) || []).forEach(t => { fromF(t.f); scan(t.rules); });
    (L0.ex || []).forEach(e => scan(e.rules));
    String(L0.form || '').split('/').forEach(p => {
      const t = p.trim().replace(/^-/, '').replace(/\s*\(.*\)\s*$/, '');
      if (!t) return;
      add(t.replace(/\((으|이|르)\)/g, ''));
      add(JOIN(t.replace(/\((으|이|르)\)/g, '$1')));
    });
    /* 「-아/어서」처럼 앞 모음이 어간과 붙어 버리는 어미는 뒷조각만으로도 찾습니다
       — 만나서 · 와서처럼 줄어든 꼴에서는 「서」만 남기 때문입니다. */
    /* 았 · 었 · 였로 시작하는 어미는 뺍니다. 그 어미는 앞 글자의 받침으로 녹지
       뒷조각만 남지 않습니다. 「았어요」에서 「어요」를 만들어 두면 만났어요가
       만났 + 어요로 갈려 어미의 앞머리를 놓칩니다. */
    list.slice().forEach(s => { if (!/^[아어여]/.test(s) || s.length < 2) return;
      const t = s.slice(1);
      /* 「요」 하나만 남는 꼴은 담지 않습니다 — 먹어요가 먹어 + 요로 잘못 갈립니다. */
      if (t.length > 1 || t !== '요') add(t); });
    /* 「부터 ~ 까지」처럼 물결로 두 자리를 보여 주는 과는 양쪽을 따로 담습니다.
       한 덩이로만 담아 두면 「까지」가 어미로 안 잡혀 「지」만 빨개집니다. */
    if (String(L0.form || '').includes('~'))
      String(L0.form).split('~').forEach(p => {
        const t = p.trim().replace(/^-/, '').replace(/\s*\(.*\)\s*$/, '');
        if (t) add(t.replace(/\((으|이|르)\)/g, ''));
      });
    /* 「이/가 있어요 · 없어요」처럼 앞뒤가 갈리는 과는 짝을 다 만들어 둡니다.
       「가 없어요」가 목록에 없으면 조사는 검게 남고 뒷말만 빨개집니다. */
    (() => {
      const f = String(L0.form || '').trim().replace(/^-/, '');
      if (f.includes('~') || !f.includes(' ')) return;
      const seg = f.split(' ');
      const heads = seg[0].split('/').map(x => x.trim()).filter(Boolean);
      const tails = seg.slice(1).join(' ').split(/[·/]/).map(x => x.trim().replace(/^-/, '')).filter(Boolean);
      if (heads.length < 2 && tails.length < 2) return;
      heads.forEach(h => tails.forEach(t => {
        const one = h + ' ' + t;
        add(one.replace(/\((으|이|르)\)/g, ''));
        add(JOIN(one.replace(/\((으|이|르)\)/g, '$1')));
      }));
    })();
    /* 「았/었어요」처럼 두 꼴을 한 칸에 적은 자리는 갈래마다 이미 담겼습니다. */
    return list.filter(s => s && !s.includes('/')).sort((a, b) => b.length - a.length);
  })();
  /* 결과형을 어간 + 어미로 가릅니다. 어미가 앞 글자의 받침으로 들어간 자리는 따로 돌려줍니다. */
  const PUNCT = /[?!.·…]+$/;
  /* 긴 어미부터 봅니다. 같은 길이 안에서는 통째로 남은 꼴을 먼저 찾고,
     거기서 못 찾을 때에만 앞 글자에 녹아든 꼴을 봅니다.
     — 통째로 먼저: 학생이었어요가 「학생이었 + 어요」로 잘리지 않습니다.
     — 길이를 지켜서: 예뻤는데가 「예뻤 + 는데」가 아니라 「예 + 뻤 + 는데」가 됩니다. */
  const SUFLEN = [...new Set(SUFS.map(s => s.length))].sort((a, b) => b - a);
  const CUT1 = res => {
    /* 「-지 않다」처럼 어미가 어간을 사이에 두고 둘로 갈라지는 자리입니다.
       뒷조각은 활용해서 꼴이 바뀌므로(않아요 · 않았어요 · 않을 거예요) 첫 글자만
       맞으면 그 뒤는 통째로 어미로 봅니다. 앞조각만 빨개지면 학생은 「지」가
       문법인 줄 압니다. 뒤따르는 어절은 둘까지만 데려옵니다. */
    for (const s of SUFS) {
      const sp = s.indexOf(' ');
      if (sp < 1) continue;
      const h = s.slice(0, sp), t0 = s.slice(sp + 1).trim()[0];
      if (!t0 || !isKo(t0)) continue;
      const at = res.lastIndexOf(h + ' ' + t0);
      if (at < 1) continue;
      const rest = res.slice(at + h.length + 1);
      if (/^[가-힣]+( [가-힣]+)?$/.test(rest)) return { stem: res.slice(0, at), bat: '', suf: res.slice(at) };
    }
    for (const n of SUFLEN) {
    const group = SUFS.filter(s => s.length === n);
    /* ① 어미가 통째로 남아 있는 자리 — 학생이었어요 · 공부했어요 */
    for (const s of group) {
      if (!s) continue;
      /* 길이가 같아도 잡습니다 — 「한테」만 표시된 자리가 「한 + 테」로 갈리면
         받침만 빨개져서 학생이 조사를 「테」로 잘못 봅니다. */
      if (res.length >= s.length && res.endsWith(s)) return { stem: res.slice(0, res.length - s.length), bat: '', suf: s };
    }
    /* ② 어미가 앞 글자의 받침으로 들어간 자리 — 하 + ㄹ게요 → 할게요, 가 + 았어요 → 갔어요.
       어미가 자음 하나인 과(-(으)ㄴ · -(으)ㄹ)에서는 그 자음이 마지막 글자의 받침으로
       들어갑니다 — 보 + ㄴ → 본, 만드 + ㄴ → 만든. 그 글자에만 색을 앉힙니다. */
    for (const s of group) {
      if (!s) continue;
      if (/^[ㄱ-ㅎ]$/.test(s)) {
        const tail = res.slice(-1);
        if (isKo(tail) && batOf(tail) === s) return { stem: res.slice(0, -1), bat: tail, suf: '' };
        continue;
      }
      const head = s[0], rest = s.slice(1), hb = /[ㄱ-ㅎ]/.test(head) ? head : (isKo(head) ? batOf(head) : '');
      if (hb && rest && res.length > rest.length && res.endsWith(rest)) {
        const front = res.slice(0, res.length - rest.length), last = front[front.length - 1];
        if (last && isKo(last) && batOf(last) === hb)
          /* 았 · 었 · 였로 시작하는 어미는 모음까지 그 글자 안에 녹습니다 —
             바쁘 + 았어요 → 바빴어요. 그러면 받침만이 아니라 모음부터 빨강입니다. */
          return { stem: front.slice(0, -1), bat: last, suf: rest, vm: /^[았었였]/.test(s) };
      }
    }
    }
    return { stem: res, bat: '', suf: '' };
  };
  const CUT = raw => {
    const res = String(raw), tail = (res.match(PUNCT) || [''])[0];
    const body = tail ? res.slice(0, -tail.length) : res;
    let r = CUT1(body);
    if (!r.suf && !r.bat && body.includes(' ')) {
      /* 조사처럼 가운데 어절에 붙는 것은 어절마다 다시 봅니다 — 책이 있어요. */
      const parts = body.split(' ');
      for (let i = 0; i < parts.length; i++) {
        const t = CUT1(parts[i]);
        if (t.suf || t.bat) {
          return { pre: parts.slice(0, i).concat('').join(' '), stem: t.stem, bat: t.bat, suf: t.suf, vm: t.vm,
                   post: (parts.length > i + 1 ? ' ' + parts.slice(i + 1).join(' ') : '') + tail };
        }
      }
    }
    return { pre: '', stem: r.stem, bat: r.bat, suf: r.suf, vm: r.vm, post: tail };
  };
  /* 바빠요 · 구워요 · 몰라요처럼 어간과 어미가 한 글자 안에서 녹은 꼴은
     어미만 떼어 낼 수 없습니다. 그럴 때는 사전형과 견주어 「달라지기 시작한 자리」
     부터 어미로 봅니다 — 바쁘다 → 바 + 빠요, 굽다 → 구 + 워요. */
  const FUSE = (dict, res) => {
    /* 「가다 → 가 + 아요」처럼 칸에 결합식이 적혀 있으면 그 앞부분이 어간입니다. */
    let d = String(dict || '').trim();
    if (d.includes('+')) d = d.split('+')[0].trim().split(/s+/).pop();
    else if (d.includes('→')) d = d.split('→').pop().trim();
    const stem = d.replace(/다$/, '');
    if (!stem || (stem === d && d.length > 1 && /다$/.test(String(dict)) === false && !String(dict).includes('+'))) return null;
    let i = 0;
    while (i < stem.length && i < res.length) {
      const a = stem[i], b = res[i];
      if (a === b) { i++; continue; }
      if (isKo(a) && isKo(b)
          && Math.floor((a.codePointAt(0) - 0xAC00) / 28) === Math.floor((b.codePointAt(0) - 0xAC00) / 28)) { i++; }
      break;
    }
    /* 어간이 하나도 안 겹치면 같은 낱말이 아닙니다 — 드시다 · 학교에 가요처럼
       다른 말이 통째로 들어온 자리라 색을 넣지 않습니다. 두 글자짜리 줄임꼴
       (쓰다 → 써요)만 예외로 둡니다. */
    if (i >= res.length) return null;
    /* 두 글자 줄임꼴(쓰다 → 써요)만 예외로 두되, 그것도 첫 닿소리는 같아야
       합니다. 「재료」·「댁」처럼 뜻풀이가 들어온 칸이 통째로 빨개집니다. */
    const cho = c => (isKo(c) ? Math.floor((c.codePointAt(0) - 0xAC00) / 588) : -1);
    if (i === 0 && (res.length > 2 || cho(stem[0]) !== cho(res[0]))) return null;
    return { stem: res.slice(0, i), suf: res.slice(i) };
  };
  /* 어미의 모음이 어간 글자에 녹은 자리 — 모음이 있는 쪽만 칠합니다. */
  const VPOS = ch => {
    const v = Math.floor(((ch.codePointAt(0) - 0xAC00) % 588) / 28);
    if ([8, 12, 13, 17, 18].includes(v)) return "b";
    if ([9, 10, 11, 14, 15, 16, 19].includes(v)) return "rb";
    return "r";
  };
  const VW = ch => '<span class="vw ' + VPOS(ch) + '" data-c="' + ch + '">' + ch + '</span>';
  /* 어미가 「요」 하나로 줄었는데 그 과의 어미가 본디 「아요 · 어요」라면,
     앞 글자 안에 모음이 녹아 있다는 뜻입니다. */
  const FUSEDV = suf => SUFS.some(s => s.length > suf.length && s.endsWith(suf) && /^[아어여]/.test(s));
  /* 「에 ✕」처럼 안 되는 형태는 ✕ 대신 글자에 줄을 긋는다. */
  /* ✕ 앞의 틀린 말에 줄을 긋는다. 한 낱말만 그으면 「-지 않다」의 않다만 그어져
     무엇이 안 되는지가 반쪽만 보였다(28과) — 괄호 안이면 괄호 안 전체, 아니면
     ✕ 앞의 한국어 덩이 전체를 긋는다. 영어 낱말은 덩이에 넣지 않는다. */
  const FNO = f => String(f)
    .replace(/([(（])\s*([^)）<>]*?)\s*[✕✖❌]\s*([)）])/g, '$1<s class="wrongword">$2</s>$3')
    .replace(/((?:[-~가-힣ㄱ-ㅎ]+\s)*[-~가-힣ㄱ-ㅎ]+)\s*[✕✖❌]/g, '<s class="wrongword">$1</s>');

  const MORPH = (res, dict) => {
    /* 데이터가 이미 태그로 적어 둔 자리는 손대지 않습니다 — 표의 이름 칸을
       「Clock time<i>시각</i>」처럼 영어 + 작은 한국어로 적는 자리입니다.
       어간·어미를 갈라 칠하려 들면 태그 안으로 파고들어 글이 깨집니다. */
    if (String(res).indexOf('<') >= 0) return String(res);
    /* 「와요 (도워요 ✕)」처럼 뒤에 붙은 주석은 떼어 두고 칠합니다. */
    const raw = String(res), note = (raw.match(/s*[(（][^)）]*[)）]s*$/) || [''])[0];
    if (note) {
      /*
       * 「오늘 (오늘에 ✕)」의 ✕ 는 낱말 <b>옆</b>에 선다. 그래서 무엇이
       * 틀렸는지가 아니라 표만 눈에 남는다. 틀린 말 <b>가운데</b>에 빨간
       * 줄을 그으면 어느 말이 안 되는 말인지가 그 자리에서 보인다.
       * 낱말과 괄호가 붙어 있어 읽기 나빴던 것도 여기서 띄운다.
       */
      const shown = note.replace(/[(（]\s*([^)）]*?)\s*[✕✖❌xX]\s*[)）]/,
        (_, w) => '(<s class="wrongword">' + w + '</s>)');
      return MORPH(raw.slice(0, raw.length - note.length), dict)
               + '<span class="exnote">' + shown + '</span>';
    }
    const { pre, stem, bat, suf, vm, post } = CUT(res);
    if (!suf && !bat) {
      const f = dict ? FUSE(dict, String(res)) : null;
      if (f) {
        const s0 = f.stem, last = s0.slice(-1);
        const vw = (last && /[가-힣]/.test(last) && FUSEDV(f.suf)) ? s0.slice(0, -1) + VW(last) : s0;
        return vw + '<span class="sf">' + f.suf + '</span>';
      }
      const one = String(res);
      /* [[ ]] 안이 어미 그 자체면 통째로 칠합니다 — 이에요 · 예요 · 가.
         다만 세 글자가 넘으면 통째로 칠하지 않습니다 — 드시다 · 학교에 가요처럼
         어미가 아니라 다른 낱말이나 문장이 통째로 들어온 자리이기 때문입니다. */
      if (SUFS.includes(one.trim())) return '<span class="sf">' + one + '</span>';
      /* 자요 · 일어나요처럼 어미가 한 글자로 줄어든 꼴은 그 글자만 칠합니다. */
      const last = one.slice(-1);
      if (one.length > 1 && /[가-힣]/.test(last) && SUFS.some(s => s.length > 1 && s.endsWith(last)))
      {
        const head = one.slice(0, -1), tip = head.slice(-1);
        const vw = (tip && /[가-힣]/.test(tip) && FUSEDV(last)) ? head.slice(0, -1) + VW(tip) : head;
        return vw + '<span class="sf">' + last + '</span>';
      }
      return res;
    }
    return (pre || '') + stem
      + (bat ? '<span class="bt' + (vm ? ' vm ' + VPOS(bat) : '') + '" data-c="' + bat + '">' + bat + '</span>' : '')
      + (suf ? '<span class="sf">' + suf + '</span>' : '') + (post || '');
  };
  /* ══════ 불규칙은 어간이 <b>바뀐 뒤에</b> 어미가 붙습니다 ══════
   *
   * 굽다 → 구 + 우 + 어요 → 구워요. 결과만 보여 주면 학생은 「구워요」를
   * 통째로 외웁니다. 가운데 단계를 적어 주면 규칙처럼 따라 만들 수 있습니다.
   *
   * 맞는지는 자모로 대조해서 확인합니다 — 「구우 + 어요」의 자모가
   * 「구워요」의 자모와 같아야 그 어미를 적습니다. 안 맞으면 아무것도
   * 적지 않습니다. 틀린 결합식을 보여 주느니 비워 두는 게 낫습니다.
   */
  const CHO = ['ㄱ','ㄲ','ㄴ','ㄷ','ㄸ','ㄹ','ㅁ','ㅂ','ㅃ','ㅅ','ㅆ','ㅇ','ㅈ','ㅉ','ㅊ','ㅋ','ㅌ','ㅍ','ㅎ'];
  const JUNG = ['ㅏ','ㅐ','ㅑ','ㅒ','ㅓ','ㅔ','ㅕ','ㅖ','ㅗ','ㅘ','ㅙ','ㅚ','ㅛ','ㅜ','ㅝ','ㅞ','ㅟ','ㅠ','ㅡ','ㅢ','ㅣ'];
  /* 겹모음·겹받침은 낱자로 풀어야 「우 + 어 = 워」가 같은 줄로 보입니다. */
  const V2 = {'ㅘ':'ㅗㅏ','ㅙ':'ㅗㅐ','ㅚ':'ㅗㅣ','ㅝ':'ㅜㅓ','ㅞ':'ㅜㅔ','ㅟ':'ㅜㅣ','ㅢ':'ㅡㅣ'};
  const T2 = {'ㄳ':'ㄱㅅ','ㄵ':'ㄴㅈ','ㄶ':'ㄴㅎ','ㄺ':'ㄹㄱ','ㄻ':'ㄹㅁ','ㄼ':'ㄹㅂ','ㄽ':'ㄹㅅ','ㄾ':'ㄹㅌ','ㄿ':'ㄹㅍ','ㅀ':'ㄹㅎ','ㅄ':'ㅂㅅ'};
  /* 자모로 편다. 소리값이 없는 초성 ㅇ 은 빼야 「구우」와 「구워」가 맞물립니다. */
  const JAMO = s => [...String(s)].map(ch => {
    if (!isKo(ch)) return ch;
    const c = ch.codePointAt(0) - 0xAC00;
    const o = CHO[Math.floor(c / 588)], v = JUNG[Math.floor((c % 588) / 28)], t = JONG[c % 28];
    return (o === 'ㅇ' ? '' : o) + (V2[v] || v) + (T2[t] || t);
  }).join('');
  /* 어간이 바뀌는 자리를 뽑습니다. 사전형이 아니면 손대지 않습니다. */
  const IRR = (k, q, a) => {
    const key = String(k || ''), word = String(q || '').trim();
    if (!/다$/.test(word)) return '';
    const S = word.slice(0, -1);
    if (S.length < 1) return '';
    const last = S.slice(-1);
    if (!isKo(last)) return '';
    const bat = batOf(last), vow = JUNG[Math.floor(((last.codePointAt(0) - 0xAC00) % 588) / 28)];
    let show = null, probe = null;
    if (/ㅂ/.test(key) && bat === 'ㅂ') {
      /* 굽 → 구 + 우 */
      const base = S.slice(0, -1) + noBat(last);
      show = [base, '우']; probe = JAMO(base) + 'ㅜ';
    } else if (/르/.test(key) && S.endsWith('르') && S.length > 1) {
      /* 모르 → 몰 + ㄹ */
      const head = S.slice(0, -2), h = S[S.length - 2];
      if (!isKo(h) || batOf(h)) return '';
      const hl = String.fromCodePoint(h.codePointAt(0) + JONG.indexOf('ㄹ'));
      show = [head + hl, 'ㄹ']; probe = JAMO(head + hl) + 'ㄹ';
    } else if (/ㅡ/.test(key) && vow === 'ㅡ') {
      /* 바쁘 → 바ㅃ (ㅡ 가 빠집니다) */
      show = [S]; probe = JAMO(S).slice(0, -1);
    } else return '';
    const want = JAMO(a);
    for (const e of SUFS) {
      if (!e || /[/·]/.test(e)) continue;
      if (probe + JAMO(e) === want) return show.concat(e).join(' + ');
    }
    return '';
  };

  const CALC = res => {
    const { stem, bat, suf } = CUT(res);
    if (!suf && !bat) return '';
    return bat ? (stem + noBat(bat) + ' + ' + batOf(bat) + suf) : (stem + ' + ' + suf);
  };
  /* [[ ]] 로 짚은 자리도 어간과 어미로 갈라 칠합니다. */
  const MM = (s, cls) => String(s).replace(/\[\[(.+?)\]\]/g, (m, x) => {
    const c = L0.markalt ? ALTCLS(x) : cls;   /* 꼴마다 색을 정한 과(16과)는 꼴 색 */
    return '<span class="hl' + (c ? ' ' + c : '') + '">' + MORPH(x) + '</span>'; });
  const MMEX = r => {
    /* 목표 문법이 아닌 줄을 빨강으로 두면 거짓이 됩니다 — 13과의 「집에서
       학교까지」가 그렇습니다. 줄에 c 를 적어 두면 규칙표와 같은 색으로 칠합니다. */
    const rcls = r.c === 'g2' ? 'bx' : r.c === 'g3' ? 'b3' : r.c === 'g4' ? 'b4' : '';
    const ko = String(r.ko || "");
    if (ko.indexOf("[[") >= 0) return MM(ko, rcls);
    const m = ko.match(/[가-힣]+[^가-힣]*$/);
    if (!m) return ko;
    const seg = m[0], word = (seg.match(/^[가-힣]+/) || [""])[0], tail = seg.slice(word.length);
    if (!word) return ko;
    const dict = r.base ? String(r.base).replace(/다$/, "") + "다" : null;
    const html = MORPH(word, dict);
    return html === word ? ko : ko.slice(0, m.index) + '<span class="hl">' + html + '</span>' + tail;
  };


  /* 이 과 안에서는 [[ ]] 안을 어간과 어미로 갈라 칠합니다 — 전역 M 을 덮습니다. */
  /* 형태소를 갈라 칠하는 자리(정리 · 마무리)에서도 받침 갈래 색을 따른다.
     받침 X 쪽이면 초록으로 — 옆 형태소 정리표와 같은 색이라야 한다. */
  const M = x => String(x).replace(/\[\[(.+?)\]\]/g, (mm, s) => {
    const c = ALTCLS(s);
    return '<mark class="ms' + (c ? ' ' + c : '') + '">' + MORPH(s) + '</mark>';
  });

  /*
   * 주의할 점 줄에서도 어미를 빨강으로 짚습니다.
   *
   * 「학생이었어요 / 가수였어요」처럼 설명 안에 그냥 적힌 형태가 있습니다.
   * 표에서는 빨강인 어미가 여기서만 검정이면 학생은 둘을 다른 것으로 봅니다.
   * 태그 안(<b>…</b>)은 건드리지 않습니다 — 거기는 이미 색이 있습니다.
   * 「-습니다」처럼 설명 문장 자체의 맺음과 겹치는 꼴은 뺍니다. 그러지 않으면
   * 「…입니다.」가 줄마다 빨개집니다.
   */
  /* 규칙표 보기에 실제로 그 꼴로 끝나는 답이 있어야 어미로 봅니다.
     「+ 부정」처럼 형태 칸에 뜻을 적어 둔 자리가 있어서, 그것까지 어미로 보면
     설명 줄의 「부정」이 빨개집니다. */
  const EXRES = [];
  (function collect(R){ if(!R) return;
    (R.rows||[]).concat(R.irr||[], R.noun||[]).forEach(r => (r.ex||[]).forEach(([, a]) => EXRES.push(String(a))));
    ((R.tense && R.tense.items)||[]).forEach(t => collect(t.rules));
  })(L0.rules);
  (L0.ex || []).forEach(e => { if(e.rules) (e.rules.rows||[]).concat(e.rules.irr||[]).forEach(r => (r.ex||[]).forEach(([, a]) => EXRES.push(String(a)))); });
  const WSUFS = SUFS.filter(s => s.length >= 2 && /^[가-힣]+[?!]?$/.test(s)
                                 && !/니다/.test(s) && s !== '이다'
                                 && (EXRES.some(a => a.endsWith(s)) || String(L0.form || '').includes(s)));
  const WMARK = seg => {
    let o = '', i = 0;
    while (i < seg.length) {
      const hit = WSUFS.find(s => seg.startsWith(s, i));
      if (hit) { o += '<span class="sf">' + hit + '</span>'; i += hit.length; }
      else { o += seg[i]; i++; }
    }
    return o;
  };
  const WARNK = html => String(html).split(/(<[^>]*>)/)
    .map(p => p.startsWith('<') ? p : WMARK(p)).join('');


  /*
   * 문법 제시 장은 지하철 역 이름판이다(대표님 2026-09-29 · 시안 AB-1).
   * 1급 = 1호선, 과 번호 = 역 번호(101~). 위에 노선 색 띠, 가운데 역 번호와 문법소,
   * 아래로 노선이 지나가며 오늘 역만 크게 · 지나온 역은 옅게, 끝에 다음 역.
   * 그림(gpic)은 싣지 않는다 — 문법소에 눈이 가게.
   */
  /* 맛보기는 과가 하나뿐이라 노선이 역 하나 · 종점으로 선다. 맛보기 units.js 가 온 노선(LINE_ALL)을
     넘겨주면 그것으로 30역을 그린다(2026-09-29). */
  const LALL = (typeof LINE_ALL !== 'undefined' && LINE_ALL) || null;
  const LKEYS = LALL ? LALL.keys : LESSONS.map(l => l.key);
  const LNO = LKEYS.indexOf(L0.key) + 1;
  const STN = n => 1 * 100 + n;
  const NEXTL = LKEYS[LNO] ? { key: LKEYS[LNO] } : null;
  let 앞역 = 0;
  const LSLINE = (LALL ? LALL.units : UNITS.map(u => u.items.length)).map(c0 => {
    const c = c0, 첫 = 앞역; 앞역 += c;
    return `<div class="ls-seg">${Array.from({ length: c }, (_, i) => {
      const k = 첫 + i + 1;
      return `<i class="${k === LNO ? 'on' : k < LNO ? 'past' : ''}">${k === LNO ? `<b>${STN(k)}</b>` : ''}</i>`;
    }).join('')}</div>`;
  }).join('');
  out.push({name:'문법 제시', html:`
    <div class="eyebrow">● 오늘의 문법</div>
    <div class="card lineslide ln1">
      <div class="ls-bar"></div>
      <div class="ls-body">
        <div class="ls-no">${STN(LNO)}</div>
        <div class="ls-g">
          <div class="gram"><span class="pos">${POSLABEL(PT)}</span><span class="op">+</span><em>${POSFT(FT)}</em></div>
          <div class="gram-en">${L0.en}</div>
          ${/* 「Grammar you can use」(선행 문법 prior) 줄은 1급도 뺀다(대표님 2026-09-29, 2급과 같게). 데이터 L0.prior 는 남긴다. */''}
        </div>
      </div>
      <div class="ls-foot"><div class="ls-line">${LSLINE}</div>${NEXTL
        ? `<span class="ls-next">다음 역 <b>${STN(LNO + 1)}</b> ${NEXTL.key} →</span>`
        : `<span class="ls-next">종점</span>`}</div>
    </div>`});
  /* 2 · 오늘의 표현 — 문장과 그림 */
  out.push({name:'오늘의 표현', html:`
    ${/* 오늘의 표현 = 이 과의 목표 문장. 딱지는 남색으로 진하게, 문장 칸에 빨간 테와 「GOAL」 도장(대표님 2026-09-29 · 시안 B, 영어만). */''}
    <div class="eyebrow ey-goal">오늘의 표현</div>
    <div class="card hero">
      <div class="hero-left">
        ${/* 말은 「물음 → 대답」 차례다. 물음(Ask like this)을 위에, ▼ 아래에 목표 대답(GOAL) — 대표님 2026-09-29 안 1. */''}
        ${L0.ask ? ASK(L0.ask) + '<div class="qa-arrow" aria-hidden="true"></div>' : ''}
        <div class="hero-quote goal">
          <div class="goalstamp" aria-hidden="true"><svg viewBox="0 0 40 40"><circle cx="20" cy="20" r="18" fill="#fff"/><circle cx="20" cy="20" r="12" fill="#c8102e"/><circle cx="20" cy="20" r="6" fill="#fff"/><circle cx="20" cy="20" r="2.6" fill="#c8102e"/></svg>GOAL</div>
          <div class="ko">${L(L0.hero.ko, EXM)}</div>
          <div class="en">${L(L0.hero.en, M)}</div>
        </div>
        ${L0.memo ? `<div class="setslide">${MEMO(L0.memo, true)}</div>` : ''}
      </div>
      ${/* 오늘의 표현 그림은 장면 일러스트(scenes/hero-NN.svg, NN = 과 번호) — 이모티콘 카드 대신 문장의 뜻이 보이는
            한 장면(대표님 2026-09-29, 2급과 같은 그림체). */''}
      <div class="hero-right hero-art"><img class="hero-scene" src="/course/sample/scenes/hero-${String(LESSONS.indexOf(L0) + 1).padStart(2, '0')}.svg" alt=""></div>
    </div>`});

  /* 2~4 · 예문 */
  /* 예문은 셋으로 정해 두지 않는다. 한 문법 안에서 뜻이 갈리는 과는
     (-겠어요 / -았/었겠어요 처럼) 갈린 만큼 장을 내야 뜻이 보인다. */
  L0.ex.forEach((e,n) => out.push({name:`예문 ${CIRC(n)}`, html:`
    <div class="eyebrow${e.fix ? ' fix' : ''}">${String(e.label).replace(/^예문/, '오늘의 대화')}${e.fix ? ' · 고쳐 말하기' : ''}</div>
    <div class="card set${e.fix ? ' fixset' : ''}">
      <div class="pic${e.scene ? ' has-scene' : ''}">${e.scene ? `<img class="ex-scene" src="${e.scene.startsWith('/') ? e.scene : '/course/sample/' + e.scene}" alt="">` : PIC(e.pic)}</div>
      <div class="talk">
        ${e.fix ? `
        <div class="fixrow bad">
          <span class="fixmark">✕</span>
          <div><div class="ko">${M(e.fix.bad.ko)}</div><div class="en">${M(e.fix.bad.en)}</div></div>
        </div>
        <div class="fixrow good">
          <span class="fixmark">○</span>
          <div><div class="ko">${M(e.fix.good.ko)}</div><div class="en">${M(e.fix.good.en)}</div></div>
        </div>
        <div class="fixwhy">
          <span class="fixwhy-l">왜 그런가요</span>
          <div><div class="ko">${M(e.fix.why.ko)}</div><div class="en">${M(e.fix.why.en)}</div></div>
        </div>` : `
        <div class="bubble a">
          ${/* 맨 앞의 쓰기 칸은 <b>수진과 마이클의 대화가 아니다.</b> 교사가 그 자리에서
                만들어 던지는 물음과, 학생이 말한 대답이 들어가는 자리다. 이름표를 안
                달아 두면 아래 예문 대화의 첫 줄로 읽힌다. 말풍선 이름표와 같은
                모양·같은 색으로 「선생님 · 학생」을 세우고, 예문 대화는 그 뒤에 둔다. */''}
          <div class="wline"><span class="who wlabel">선생님</span>${WRITE('교사가 만든 질문을 여기에 쓰세요')}</div>
          <div class="who">${e.a.who}</div>
          <div class="ko">${L(e.a.ko, EXM)}</div>
          <div class="en">${L(e.a.en, M)}</div>
        </div>
        <div class="bubble b">
          <div class="wline"><span class="who wlabel">학생</span>${WRITE('학생이 말한 대답을 여기에 쓰세요')}</div>
          <div class="who">${e.b.who}</div>
          <div class="ko">${L(e.b.ko, EXM)}</div>
          <div class="en">${L(e.b.en, M)}</div>
        </div>`}
        ${ASK(e.ask)}
        ${e.memo ? `<div class="setslide">${MEMO(e.memo, true)}</div>` : ''}
        <div class="morph">${e.morph.map(m=>`<span>${m}</span>`).join('')}</div>
      </div>
    </div>`}));

  /* 비교표 한 장. 예문과 교사 메모까지 같이 실을 수 있습니다. */
  const CMPSLIDE = () => {
    const C = L0.compare;
    out.push({name:`비교 · ${C.name || '헷갈리는 짝'}`, html:`
      <div class="eyebrow">헷갈리는 짝</div>
      <h1 class="slide-title">${C.head}</h1>
      <p class="slide-sub">${C.sub}</p>
      <div class="card cmpcard">
        <table class="cmp">
          <tr><th></th>${C.th.map((h,i)=>`<th class="c${i+1}">${h}</th>`).join('')}</tr>
          ${C.rows.map(r=>`<tr>
            <td class="k">${KEN(r.k)}</td>
            <td class="c1">${r.a}</td>
            <td class="c2">${r.b}</td>
          </tr>`).join('')}
        </table>
        ${(C.exs||[]).length ? `<div class="cmpex">${C.exs.map((x,i)=>`
          <div class="cx"><span class="cxn">${i+1}</span>
            <div><div class="ko">${M(x.ko)}</div><div class="en">${M(x.en)}</div></div>
          </div>`).join('')}</div>` : ''}
        ${C.tip ? `<p class="cmptip">💡 ${C.tip}</p>` : ''}
        ${MEMO(C.memo)}
      </div>`});
  };
  if(L0.compare && L0.compare.before) CMPSLIDE();

  /* 5 · 정리 + 규칙표 */
  const rtRows = (rows, cls) => `<table class="rt ${cls}">` +
    rows.map(r => `<tr><td>${KEN(r.k)}</td><td class="f ${r.c||''}">${FNO(r.f)}</td><td>` +
      r.ex.map(([q,a]) => `<span class="rv">${q}${a === undefined ? '' : ' → <b>' + a + '</b>'}</span>`).join('') +
    `</td></tr>`).join('') + `</table>`;
  /*
   * 갈래가 여럿인 과는 「예문 모아 보기」와 「형태소·규칙표」를 두 장으로 가른다.
   * 한 장에 다 넣으면 -는데처럼 뜻이 넷인 과에서 글자가 잘게 부서진다.
   * splitRules:true 를 적은 과만 갈라진다 — 나머지 60과는 그대로 한 장이다.
   */
  const SPLIT = L0.splitRules === true;

  /*
   * 명사 + 이다는 불규칙이 아닙니다. 받침을 보는 규칙일 뿐인데 불규칙 표에
   * 같이 두면 학생이 「이다도 불규칙」으로 외웁니다. 동사·형용사 불규칙을
   * 다 보인 뒤에 따로 한 상자로 냅니다. 데이터에 noun 을 적어도 되고,
   * irr 안에 「명사…」로 적혀 있으면 여기서 알아서 갈라냅니다.
   */
  /* 이름이 「Noun … <i>명사 …</i>」처럼 영어를 앞에 세워도 한국어 쪽으로 가른다 */
  const isNounRow = r => /(^|<i>)명사/.test(String(r.k || ''));
  const splitIrr = R => {
    const all = R.irr || [];
    return { irr: all.filter(r => !isNounRow(r)),
             noun: (R.noun || []).concat(all.filter(isNounRow)) };
  };
  /* irrHead 에 ⚠️ 를 적어 둔 과가 있어 제목에서 겹칩니다. 하나만 남깁니다. */
  const BARE = h => String(h || '').replace(/^[\s⚠️📎!]+/, '');

  /* 규칙표 한 장. rules 를 통째로 받으므로 시제별 표도 같은 모양으로 찍힙니다. */
  const RULECARD = (R) => { const S = splitIrr(R); return `
      <div class="card ruletable">
        <h3 class="rt-title">📌 ${R.head}
          <span class="rt-hint"></span>
          <button class="mbtn rt-reset" type="button">↺ 다시 가리기</button>
        </h3>
        ${POSBAR(PT)}
        <table class="rt"><tr>${(R.th||L0.rules.th).map(h=>`<th>${h}</th>`).join('')}</tr></table>
        ${rtRows(R.rows,'')}
        ${S.irr.length ? `<h3 class="rt-title irr">⚠️ ${BARE(R.irrHead)}</h3>${rtRows(S.irr,'irr')}` : ''}
        ${S.noun.length ? `<h3 class="rt-title noun">📎 ${BARE(R.nounHead) || 'Noun + 이다 — not irregular, just look at 받침 <i>명사 + 이다 — 불규칙이 아니라 받침을 봅니다</i>'}</h3>${rtRows(S.noun,'noun')}` : ''}
      </div>`; };

  /* 시제 한눈에 — 형태를 따지기 전에 「언제 쓰는 말인지」를 문장으로 먼저 봅니다. */
  const TENSEBOX = () => {
    const T = L0.rules.tense;
    if(!T) return '';
    return `<div class="tenserow big">${T.items.map((t,i)=>`
        <div class="tensecard t${i+1}">
          <div class="tt"><span class="tno">${i+1}</span>${t.t}</div>
          <div class="tf">${t.f}</div>
          ${(t.say||[]).length ? `<ul class="tsay">${t.say.map(k=>`<li>${M(k)}</li>`).join('')}</ul>` : ''}
          <ul class="tex">${t.ex.map(([q,a])=>`<li>${q} → <b>${a}</b></li>`).join('')}</ul>
        </div>`).join('')}</div>`;
  };

  /* ══════ ① 정리 장 ══════ */
  const meanKo = (L0.mean && L0.mean.ko) || L0.en;
  const meanEn = (L0.mean && L0.mean.en) || '';
  const warns  = (L0.warn && L0.warn.length) ? L0.warn
               : ((L0.wrap && L0.wrap.tips) || []).map(t => ({ ko: t }));
  /* 새 정리 장(data/sum.js · 2급 확정 모양, 1급 시안 2026-10-02) — SUMB 에 과가 있으면 새 모양, 없으면 예전 모양. null 줄은 뺀다. */
  const SB = (typeof SUMB !== 'undefined' && SUMB[L0.key]) || null;
  const SBW = SB ? (SB.w || []).filter(Boolean) : null;
  out.push({name:'정리', html:`
    <div class="eyebrow">다시 보기 · 정리</div>
    ${/* 정리 장 제목은 영어 품사만(대표님 2026-10-02) */''}<div class="sum-goal"><span class="pos">${POSLABEL_EN(PT)}</span><span class="op">+</span><span class="form">${POSFT_EN(FT)}</span></div>
    ${/* 한국어 설명은 슬라이드에서 빼고 교사 메모(새 B 네 칸)로 */''}${SB ? `<div class="setslide">${MEMO(MB(SB.memo, 'cmp'), true)}</div>` : ''}
    <div class="sumwrap${SB ? ' sumv2' : ''}">
      ${/*
         * 이 장은 <b>학생이 읽는 장</b>이다. 그런데 큰 글씨는 한국어였고 영어는
         * 아래에 흐리게 깔려 있었다. 오늘 배울 것을 아직 모르는 학생에게 한국어
         * 설명을 크게 내미는 것은 설명이 아니라 벽이다. 영어를 위로 올려 크게
         * 놓고, 한국어는 아래에 작게 둔다 — 그쪽은 교사가 읽어 준다.
         * 영어가 없는 과는 한국어가 그대로 큰 줄을 지킨다(koonly).
         */''}
      <div class="card sum-mean${meanEn ? '' : ' koonly'}">
        <span class="sum-label">의미 · Meaning</span>
        ${meanEn ? `<div class="en">${MIRROR(meanKo, meanEn, [FT, F, L0.key])}</div>` : ''}
        <div class="ko">${meanKo}</div>
      </div>
      ${/* 주의할 점이 넷이 넘는 과는 마지막 줄이 화면 아래로 밀려 내려갔다 —
            스크롤이 생길 뿐이라 교실 화면에서는 그냥 안 보인다. 몇 줄인지를
            data-n 으로 알려 주고, 넷부터는 줄 사이와 안쪽 여백을 줄인다(15-06). */''}
      <div class="card sum-warn" data-n="${SB ? SBW.length : warns.length}">
        <span class="sum-label">주의할 점 · Watch out</span>
        <ol>${SB ? SBW.map((sp, i) => `<li><span class="n">${i+1}</span><div><div class="en">${SUMWARN(sp)}</div></div></li>`).join('')
          : warns.map((w, i) => `<li${w.en ? '' : ' class="koonly"'}><span class="n">${i+1}</span><div>
          ${w.en ? `<div class="en">${WARNK(MIRROR(w.ko, w.en, [FT, F, L0.key]))}</div>` : ''}<div class="ko">${WARNK(w.ko)}</div></div></li>`).join('')}</ol>
      </div>
    </div>`});

  /*
   * 예문은 정리 장에 끼워 넣지 않습니다.
   *
   * 한 카드 안에 여섯 개를 늘어놓으면 「친구를 만났 / 어요」처럼 한 문장이
   * 두 줄로 꺾여 어미가 어디서 시작하는지 안 보입니다. 한 줄에 한 문장씩,
   * 넉 줄이 넘으면 장을 나눕니다.
   */
  const EX_PER = 4;
  /*
   * g 만 적힌 줄은 갈래 이름표지 예문이 아니다.
   *
   * 그대로 목록에 두면 「1 undefined」가 한 줄 서고, 넉 줄씩 세는 쪽수도
   * 그만큼 밀려 예문 번호가 2번부터 시작하는 것처럼 보인다. 이름표는
   * 바로 뒤에 오는 예문에 붙여 두고 목록에서는 뺀다.
   */
  const exAll = [];
  {
    let pend = null;
    for(const r of (L0.review || [])){
      if(!r.ko){ pend = r.g || pend; continue; }
      exAll.push(pend && !r.g ? Object.assign({}, r, {g:pend}) : r);
      pend = null;
    }
  }
  /*
   * 쪽을 <b>고르게</b> 나눈다.
   *
   * 넉 줄씩 자르면 다섯 줄인 과에서 둘째 쪽에 한 줄만 남아, 넓은 화면에 문장
   * 하나가 떠 있는 장이 생긴다. 쪽수를 먼저 셈하고 그 쪽수로 고르게 가른다 —
   * 다섯이면 셋과 둘로 선다(27-07).
   */
  /* exOne — 한 장에 다 넣어도 넘치지 않고 글자도 줄지 않는다고 재 본 과만 한 장으로(2026-10-09 대표님 04-07).
     과 데이터에 exOne:true 를 적는다. 재지 않은 과는 지금처럼 넉 줄씩 나눈다. 시험 때는 ?exone=1 로 모두 한 장. */
  const EXONE = L0.exOne || /[?&]exone=1/.test(location.search);
  const exPages = EXONE ? 1 : Math.max(1, Math.ceil(exAll.length / EX_PER));
  const PER = Math.ceil(exAll.length / exPages);
  for (let i = 0; i < exAll.length; i += PER) {
    const page = exAll.slice(i, i + PER), pno = Math.floor(i / PER) + 1;
    out.push({name:`예문 모아 보기${exPages > 1 ? ` ${CIRC(pno - 1)}` : ''}`, html:`
      <div class="eyebrow">다시 보기 · 예문</div>
      <h1 class="slide-title">🧺 Gather the sentences <i>문장 모으기</i>${
        exPages > 1 ? `<span class="pgno">${pno} / ${exPages}</span>` : ''}</h1>
      <div class="sumwrap">
        <div class="card sum-ex one">
          <span class="sum-label">예문 · Examples</span>
          <ol>${page.map((r, k) => `<li><span class="n">${i + k + 1}</span><div>
            ${r.g ? `<div class="g">${r.g}</div>` : ''}
            <div class="ko">${MMEX(r)}</div>
            <div class="note">${NOTE(r, BATSPLIT)}</div></div></li>`).join('')}</ol>
        </div>
      </div>`});
  }

  /* ══════ ② 형태소 정리 장 ══════ */
  /*
   * 줄마다 첫 보기 하나만 그대로 보이고, 나머지는 눌러야 나옵니다.
   *
   * 다 보여 두면 학생은 읽고 넘어갑니다. 그런데 이 표가 하는 일은 「싸다」를
   * 보고 「싸기 때문에」를 <b>스스로 말해 보는</b> 것입니다. 그래서 첫 칸은
   * 어떻게 하는지 보여 주는 본보기로 열어 두고, 같은 꼴이 되풀이되는
   * 나머지는 가려 둡니다. 말한 뒤에 눌러 맞춰 봅니다.
   */
  /* 형태 딱지의 색을 줄마다 따로 준다 — 아요는 빨강, 어요는 초록, 해요는 금빛.
     한 과에서 갈리는 꼴이 셋이면 색도 셋이라야 어느 줄의 말인지 눈으로 잡힌다. */
  const ROWCLS = r => r.c === 'g2' ? 'bx' : r.c === 'g3' ? 'b3' : r.c === 'g4' ? 'b4' : '';
  /* glue 를 적은 줄은 앞말 속 조사도 오늘의 꼴과 한 덩이로 칠한다 —
     「집에만」의 에만 · 「친구한테만」의 한테만(17 형태 표). 앞 낱말은 검정 그대로다. */
  const GLUE = (r, q, m) => {
    const p = (r.glue || []).filter(x => String(q).endsWith(x)).sort((x, y) => y.length - x.length)[0];
    if (!p || !String(m).startsWith(q)) return m;
    return String(q).slice(0, -p.length) + '<span class="glue">' + p + '</span>' + String(m).slice(String(q).length);
  };
  /* 같은 꼴을 여러 줄이 함께 쓰면(fjoin) 형태 칸을 한 번만 세워 아래 줄까지 덮는다 —
     「Place + 에」를 세 번 되풀이하지 않고, 세 동사가 모두 그 꼴을 쓴다는 것이 보인다(대표님 2026-09-28, 8과). */
  const FSPAN = (rows, i) => { let n = 1; while (rows[i + n] && rows[i + n].fjoin) n++; return n; };
  /* 「Regular after all · 규칙인 것」은 불규칙 바로 아래 ↳ 점선 곁줄로 — 2급과 같다(대표님 2026-10-02 ⑧) */
  const EXCROW = r => /Regular after all|규칙인 것/.test(String(r.k || ''));
  const mRows = (rows, cls) => `<table class="mt ${cls}">` + rows.map((r, ri) => `<tr${EXCROW(r) ? ' class="g-exc"' : ''}>
      <td class="k ${r.kc || ''}">${KEN(r.k)}</td>${r.fjoin ? '' : `<td class="f ${r.c || ''} ${r.fc || ''}${FSPAN(rows, ri) > 1 ? ' fspan' : ''}"${FSPAN(rows, ri) > 1 ? ` rowspan="${FSPAN(rows, ri)}"` : ''}>${FNO(r.f)}</td>`}
      ${/*
         * 위에 작게 얹어 두던 앞말(<span class="w">)을 뺐다.
         *
         * 「책」을 회색으로 작게 얹고 바로 아래에 「책이에요」를 크게 놓으면 같은
         * 낱말이 한 칸에 두 번 서고, 정작 가려 둔 칸에서는 그 작은 글씨만 보여
         * 학생이 큰 글씨를 읽을 기회를 잃는다. 앞말은 큰 글씨 안에 이미 있다.
         *
         * 그래서 가려 둔 칸도 <b>앞말은 검정으로 그대로 보이고</b>, 붙는 말만
         * 가린다 — 학생은 「사람」을 보고 「사람이에요」를 말한 뒤 눌러 맞춘다.
         * 붙는 말을 못 갈라낸 답(sf 가 없는 답)만 통째로 가린다.
         */''}
      ${/*
         * 가려 둔 칸에 무엇을 보일지는 <b>보기의 생김새</b>가 정한다.
         *
         * ① 답이 보기로 시작하면(책 → 책이에요) 앞말은 그대로 두고 붙는 말만
         *    가린다. 학생은 「사람」을 보고 「사람이에요」를 말한 뒤 눌러 맞춘다.
         * ② 답이 보기로 시작하지 않으면(예쁘다 → 예뻐요) 보기가 곧 <b>기본형</b>이다.
         *    첫 글자만 남기고 가려 두면 「예」만 보여 무엇을 말하라는지 알 수 없다.
         *    기본형을 통째로 보이고, 누르면 바뀐 꼴로 넘어간다.
         *    첫 칸은 둘을 나란히 보여 준다 — 어떻게 바뀌는지가 본보기다.
         */''}
      <td${r.col ? ' class="col"' : ''}>${r.ex.map(([q, a, tag], i) => {
        /*
         * 보기 하나만 적은 칸은 <b>그냥 보여 주는 칸</b>이다.
         *
         * 「커피나 차나 (X)」처럼 안 되는 꼴을 보이는 자리가 있다. 그것을 여느
         * 보기처럼 두면 가려 놓고 맞혀 보라는 것이 되고, 형태를 갈라 칠하느라
         * (X) 의 X 가 「틀린 낱말 표시」로 먹혀 괄호만 남는다. 한 칸만 적으면
         * 글자 그대로 세운다(18-08).
         */
        /* 「커피나 차나 (X)」처럼 (X)로 끝나는 보기는 틀린 말에 물결을 긋는다 — 팁의 ✕ 줄과 같은 표시(18-08). */
        if (a === undefined) {
          const xm = String(q).match(/^([^]*?)\s*([(（]\s*[X✕]\s*[)）])\s*$/);
          return `<span class="rv show plain"><span class="res">${xm ? `<span class="xw">${xm[1]}</span> ${xm[2]}` : q}</span></span>`;
        }
        /* 답 자리에 태그가 들어 있으면(영어 + <i>한국어</i>) 형태를 갈라 셀
           것이 없습니다. 계산 줄을 만들려 들면 태그 조각이 그 줄에 새어 나옵니다. */
        const html = String(a).indexOf('<') >= 0;
        const c = html ? '' : (IRR(r.k, q, a) || CALC(a)), m = GLUE(r, q, MORPH(a, q));
        const rc = ROWCLS(r);
        const flip = !String(a).startsWith(String(q));
        const 늘보임 = i === 0 || r.open;
        /* 답이 ⭕ · ❌ 뿐인 칸(8과 학교에 가요 → ⭕)은 앞말이 곧 볼 문장이다 — 흐리게
           두지 않고, ❌ 이면 앞말 밑에 물결을 긋는다(2026-09-24 대표님). */
        const ox = /^\s*(⭕|❌|○|✕)\s*$/.exec(String(a)), bad = ox && /❌|✕/.test(ox[1]);
        /* 답이 영어 이름뿐인 칸(13과 한 시부터 세 시까지 → Clock time)도 앞말이 볼 문장이다. */
        /* 영어로 시작하는 풀이(「No 받침 rule」)도 앞말이 볼 문장이다 — 받침 한 낱말 때문에 흐려졌다(16과). */
        const solid = ox || !/[가-힣]/.test(String(a).replace(/<i>[^]*?<\/i>/g, ''))
          || /^[A-Za-z]/.test(String(a).replace(/<i>[^]*?<\/i>/g, '').replace(/<[^>]+>/g, '').trim())
          /* solid 를 적은 줄은 앞말이 볼 문장이다 — 흐리게 두지 않는다(28과 안 마셔요 · 있다). */
          || r.solid;
        if (flip) return `<span class="rv flip${solid ? ' ox' : ''}${늘보임 ? ' show' : ''}${rc ? ' ' + rc : ''}">
        <span class="res"><span class="dict">${bad ? `<span class="xw">${q}</span>` : q}</span><span class="to">→</span><span class="conj">${ENPILL(a) || m}</span></span>
        ${/* 셋째 칸(tag)은 규칙으로 셈이 안 서는 말에 다는 딱지 — 「돕다 → 도와요」(5과).
             계산 줄 자리에 알약으로 선다(2026-09-24 대표님). */''}${tag ? `<span class="calc"><span class="xtag">${tag}</span></span>` : c ? `<span class="calc">${c}</span>` : ''}</span>`;
        return `<span class="rv${늘보임 ? ' show' : ''}${/class="sf"/.test(m) ? '' : ' nosf'}${rc ? ' ' + rc : ''}">
        <span class="res">${m}</span>
        ${c ? `<span class="calc">${c}</span>` : ''}</span>`; }).join('')}</td>
    </tr>`).join('') + `</table>`;
  /* wrapOnly 로 적어 둔 줄은 형태를 만드는 줄이 아니라 「어디에 더 쓰이나」를
     보이는 줄이다. 그런 줄은 마무리 한눈에만 서고 여기서는 빠진다. */
  /*
   * 표가 셋(기본 · 불규칙 · 명사)인 과는 <b>두 장으로 가른다</b>(2026-09-21).
   *
   * 한 장에 다 담으면 1,359px 이 되어 874px 짜리 카드를 넘고, 넘친 줄은
   * 굴러가는 상자 안으로 숨는다 — 교실에서는 아무도 굴리지 않으니 없는 줄이
   * 된다(조판 검사 「화면 밖」 23 · 5 · 24과). 줄여서 담는 데는 한계가 있어
   * 갈래로 가른다: 첫 장은 기본 + 불규칙, 둘째 장은 명사.
   *
   * @param only  담을 표 이름들 — 「기본」 · 「불규칙」 · 「명사」. 안 주면 다 담는다.
   */
  const MORPHCARD = (R, only = "기본불규칙명사") => { const S = splitIrr(R); const irrM = S.irr.filter(r => !r.wrapOnly);
    /*
     * 줄마다 open:true 로 다 열어 둔 표에는 <b>누를 것이 없다.</b>
     *
     * 그런데도 「Enter로 하나씩 · 0/4」와 「다시 가리기」가 머리에 그대로 서 있으면,
     * 교사는 눌러도 아무 일이 없는 단추를 붙들고 무엇이 고장 났는지 찾는다.
     * 가릴 칸이 하나도 없으면 그 두 자리를 아예 내지 않는다(13-08).
     */
    const 다열림 = [...(R.rows || []), ...irrM, ...(S.noun || [])]
      .every(r => r.open || (r.ex || []).length <= 1);
    return `
    <div class="card morphcard${다열림 ? ' allopen' : ''}${R.grow ? ' mtgrow' : ''}">
      <h3 class="mt-title">📌 ${R.head}
        ${다열림 ? '' : `<span class="rt-hint"></span>
        <button class="mbtn rt-reset" type="button">↺ 다시 가리기</button>`}
      </h3>
      ${/*
         * 붙는 자리의 이름은 품사를 따라간다.
         *
         * 1급 서른 과 가운데 스물한 과가 조사다. 조사는 어미가 아니고 명사에는
         * 어간이 없다. 그런데 이 줄이 붙박이로 「어간은 검정, 어미는 빨강」이라
         * 적혀 있어, 조사 과에서도 학생이 없는 어간을 찾게 만들었다. 동사·형용사
         * 과에서만 어간·어미라 부르고, 나머지는 「앞말」과 「붙는 말」로 부른다.
         */''}
      ${/* 이 줄은 <b>교사가 읽는 줄</b>이다. 학생에게 풀어 주려고 「붙는 말」로
            돌려 적었더니, 정작 가르치는 사람이 문법 용어를 못 보게 됐다.
            여기서는 그냥 문법 형태소라고 부른다 — 풀어 말할지는 교사가 정한다. */''}
      ${/* 갈래가 둘 이상인 과는 어미가 갈래마다 다른 색으로 나온다.
            그런 과에서 「어미는 빨강」이라고 적어 두면 표와 말이 어긋난다. */''}
      ${POSBAR(PT)}
      ${only.includes('기본') ? mRows(R.rows, R.big ? 'big' : '') : ''}
      ${/* 불규칙 · 주의는 한 카드 안 구역(.xsec) — 화면을 넘치면 splitMorph 가 제 카드로 떼어 다음 장으로 보낸다(대표님 2026-10-02 ①) */''}
      ${only.includes('불규칙') && irrM.length ? `<div class="xsec"><h3 class="mt-title irr">⚠️ ${BARE(R.irrHead)}</h3>${mRows(irrM, 'irr')}</div>` : ''}
    </div>${only.includes('명사') ? MORPHNOUN(R) : ''}`; };
  /* 명사 + 이다는 늘 따로 파랑 카드 — 2급과 같다(대표님 2026-10-02 ②) */
  const MORPHNOUN = R => { const S = splitIrr(R); if(!S.noun.length) return ''; return `
    <div class="card morphcard nouncard tail">
      <h3 class="mt-title noun">📎 ${BARE(R.nounHead) || 'Noun + 이다 — not irregular, just look at 받침 <i>명사 + 이다 — 불규칙이 아니라 받침을 봅니다</i>'}
        <span class="rt-hint"></span>
        <button class="mbtn rt-reset" type="button">↺ 다시 가리기</button>
      </h3>
      ${mRows(S.noun, 'noun')}
    </div>`; };

  /*
   * 형태소 정리 장 한 벌 — 표가 셋이면 두 장, 아니면 한 장.
   * 부르는 쪽은 이름과 눈썹만 주고, 몇 장이 되는지는 여기서 정한다.
   */
  const MORPHSLIDES = (R, name, eyebrow, title) => {
    const S = splitIrr(R);
    const irrM = S.irr.filter(r => !r.wrapOnly);
    const head = (extra) => `<div class="eyebrow">${eyebrow}</div>${title ? title(extra) : ''}`;

    /*
     * 한 장에 담는 <b>줄 수</b>로 가른다. 표 이름이 아니라 줄 수로 세는 까닭은,
     * 불규칙이 여섯 줄인 과(23과)는 기본표와 둘만 세워도 넘치기 때문이다.
     * 카드 높이(874px)에 제목과 줄 여섯이 들어간다 — 여섯을 넘기면 가른다(23과에서 재 봄).
     */
    /*
     * 줄 수로 어림해 미리 가르던 것을 그만두고, <b>한 장에 다 담은 뒤 화면에서 재서</b>
     * 넘칠 때만 2급처럼 카드를 떼어 다음 장으로 보낸다(splitMorph, 대표님 2026-10-02 ①⑩).
     * 글자를 줄여 밀어 넣지 않는다 — 장을 늘린다.
     */
    void S; void irrM;
    const 명사 = MORPHNOUN(R);
    return [{ name, html: `${head('')}${명사 ? `<div class="mstack" data-split="${name}">${MORPHCARD(R, '기본불규칙')}${명사}</div>` : `<div class="mstack" data-split="${name}">${MORPHCARD(R, '기본불규칙')}</div>`}` }];
  };

  if(L0.rules.tense){
    out.push({name:'시제 한눈에', html:`
      <div class="eyebrow">형태 보기 전에</div>
      <h1 class="slide-title">${L0.rules.tense.head}</h1>
      <p class="slide-sub">먼저 언제 쓰는 말인지 문장으로 보고, 다음 장부터 형태를 하나씩 봅니다.</p>
      ${TENSEBOX()}`});
    /* 한 장에 한 시제만. 세 시제를 한 표에 겹쳐 두면 학생이 어느 줄이
       어느 시제인지 못 찾습니다. */
    L0.rules.tense.items.forEach((t,i)=>{
      out.push(...MORPHSLIDES(
        t.rules || L0.rules,
        `형태소 ${CIRC(i)} ${t.t}`,
        `Building the form · 규칙 ${CIRC(i)}`,
        () => `<h1 class="slide-title">${t.t} · <span class="must">${t.f}</span></h1>`,
      ));
    });
  } else {
    /* 제목을 뺐다. 「어떤 말이 어떤 모양으로 바뀌나요」는 바로 아래 카드의
       머리(📌 …)가 이미 하는 말이라, 같은 말을 두 번 하면서 표가 쓸 세로만
       잡아먹었다. 제목이 없어진 만큼 카드가 그 자리를 받아 위로 올라선다. */
    out.push(...MORPHSLIDES(L0.rules, '형태소 정리', 'Building the form · 규칙'));
  }
  /* 6-0 · 비교표 — 헷갈리는 짝을 팁보다 먼저 갈라 둡니다.
     팁은 「이 문법」 하나만 다룹니다. 옆 문법과 어디서 갈리는지는
     표로 나란히 놓아야 보입니다. compare 를 적은 과에만 생깁니다.
     before:true 를 적으면 정리 장 앞으로 옵니다 — 「에 ↔ (으)로」처럼
     둘을 못 가리면 예문 정리 자체가 안 읽히는 과가 있습니다. */
  if(L0.compare && !L0.compare.before) CMPSLIDE();

  /*
   * TIP 안의 예문을 박스로 묶는다.
   *
   * TIP 글은 「설명 · 빈 줄 · 예문 · 빈 줄 · 마무리」로 되어 있다. 설명과
   * 예문이 같은 바탕에 붙어 있으면 어디부터가 예문인지 안 보여, 학생이
   * 통째로 읽고 넘어간다. 가운데 덩어리만 감싼다.
   *
   * 빈 줄이 없는 TIP(표만 있는 것)과, 데이터가 직접 감싸 둔 TIP 은 그대로 둔다.
   * 이름표는 「예문」이 기본이고, 낱말 짝처럼 예문이 아닌 자리는 데이터에서
   * data-l 로 다른 이름을 준다.
   */
  /* 화살표가 있는 줄은 화살표 <b>뒤에서만</b> 줄을 바꿉니다.
     「만들다 → 만드 + ㄹ 거예요 → 만들 거예요」가 좁은 칸에서 아무 데서나
     접히면 「만들 / 거예요」처럼 한 낱말이 두 줄로 갈라져 다른 말로 보입니다.
     그래서 화살표 뒤 한 칸만 접히는 자리로 두고 나머지 칸은 붙여 둡니다. */
  const ARROW = html => String(html).split(/(<br>)/).map(part => {
    if (part === '<br>' || part.indexOf('→') < 0) return part;
    let out = '', inTag = false;
    for (const ch of part) {
      if (ch === '<') inTag = true;
      else if (ch === '>') { inTag = false; out += ch; continue; }
      out += (!inTag && ch === ' ') ? '\u00A0' : ch;
    }
    /* 화살표 뒤 한 칸만 되돌린다 — 거기서 접힌다. */
    return out.replace(/→\u00A0/g, '→ ');
  }).join('');

  /*
   * tail 을 적어 둔 TIP 은 <b>꼬리말도 상자에</b> 담는다.
   *
   * TIP 글은 「설명 · 예문 · 꼬리말」로 되어 있는데, 예문만 점선 상자에 들어가고
   * 꼬리말은 상자 밖에 작게 깔려 있었다. 그 꼬리말이 정작 이 팁의 알맹이인 과가
   * 있다 — 19과 TIP ①의 「→ 매일 아침, 빠짐없이」가 그렇다. 상자 밖에 있으니
   * 예문에 딸린 주석처럼 읽히고 글씨도 작았다. 데이터가 tail 로 집어 준 팁에서만
   * 꼬리말을 같은 점선 상자에 담는다 — 다른 과의 팁 모양은 그대로 둔다(19-09).
   */
  /*
   * 팁 예문의 O · X 를 배지로 바꾼다.
   *
   * 데이터에는 <span class="yes">O</span> · <span class="no">X</span> 로 적혀
   * 있다. 글자 O · X 는 흑백으로 뽑으면 색이 날아가 맞는 말과 안 되는 말이
   * 같아 보인다. 그래서 학생용과 같이 동그라미 배지로 세우고, 안 되는 말에는
   * 물결 밑줄을 그어 색 없이도 갈린다.
   *
   * 예문 상자 안에서만 부른다 — 설명과 문법표의 O · X 는 그대로 둔다.
   */
  const OXCHECK = '<svg class="oxi" viewBox="0 0 12 12" aria-hidden="true"><path d="M2.6 6.4 L4.9 8.8 L9.4 3.4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  const OXCROSS = '<svg class="oxi" viewBox="0 0 12 12" aria-hidden="true"><path d="M3.4 3.4 L8.6 8.6 M8.6 3.4 L3.4 8.6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>';
  /*
   * 예문 줄을 「표시 + 글」 두 칸으로 세운다.
   *
   * 글 칸 안에서만 줄이 접히므로, 넘어간 줄도 윗줄 글과 같은 열에서 시작한다.
   * 「A / B」 는 조각으로 갈라 두어, 좁아지면 슬래시 자리에서 내리고 그
   * 슬래시는 감춘다(아래 oxFold 가 재서 정한다).
   */
  const OXSPLIT = body => {
    const 조각 = String(body).split(/\s+[\/·]\s+/);
    if (조각.length < 2) return '<span class="oxp">' + body + '</span>';
    const 표 = String(body).match(/\s+([\/·])\s+/)[1];
    return 조각.map(t => '<span class="oxp">' + t + '</span>')
      .join('<b class="oxsl"> ' + 표 + ' </b>');
  };
  const OXROW = (kind, body, 딸림) =>
    '<span class="oxrow"><span class="oxb ' + kind + '">'
    + (kind === 'ok' ? OXCHECK : OXCROSS) + '</span>'
    + '<span class="oxbody' + (kind === 'no' ? ' bad' : '') + '">'
    + OXSPLIT(body) + (딸림 || '') + '</span></span>';

  /* 맞는 말 아래 딸리는 작은 줄 — 「하지 마라」를 여기에 둔다. */
  const OXSUB = t => '<span class="oxsub"><span class="oxb no">' + OXCROSS
    + '</span><span class="oxs2">' + t + '</span></span>';

  /*
   * 줄 <b>가운데</b> 선 표시 — 맞는 말을 세우고 틀린 꼴은 그 아래 작게.
   *
   * 배지가 문장 한가운데 떠 있으면 어디부터 어디까지가 안 되는 말인지 흐리다.
   * 맞는 말이 먼저 크게 서고, 틀린 꼴은 딸린 말로 내려간다.
   */
  const OXMID = (t, 상자안 = true) => {
    const s = String(t);

    /* ③ 줄 끝이 표시뿐 — 줄 전체가 그 말이다. 맨글자 「(O)」도 받는다. */
    const 끝 = s.match(/^([^]*?)\s*[(（]\s*(?:<span class="(?:yes|no)">)?\s*([OX○✕])\s*(?:<\/span>)?\s*[)）]\s*$/);
    if (끝 && 끝[1].trim()) return OXROW(/[OO○]/.test(끝[2]) ? 'ok' : 'no', 끝[1].trim());

    /* ④ 앞이 문장으로 끝나면 그 앞은 설명 — 괄호 안의 말만 아래 작게 내린다 */
    const 딸림 = s.match(/^([^]*?[.!?。])\s*[(（]\s*([^)）]*?)\s*(?:<span class="no">)?\s*[X✕]\s*(?:<\/span>)?\s*[)）]\s*$/);
    if (딸림 && 딸림[2].trim()) return '<span class="oxplain">' + 딸림[1] + OXSUB(딸림[2].trim()) + '</span>';

    /* ② 「가다 → 가았어요 ✕ → 갔어요」 — 맞는 말을 앞으로 옮긴다 */
    const 화살 = s.match(/^([^]*?→\s*)([^<]*?)\s*<span class="no">\s*[X✕]\s*<\/span>\s*→\s*([^]+)$/);
    if (화살) return OXROW('ok', 화살[1] + 화살[3].trim(), OXSUB(화살[2].trim()));

    /* ① 「있다 → 없다 (✕ 안 있다)」 — 괄호 안이 틀린 꼴 */
    const 괄호 = s.match(/^([^]*?)\s*(?:&nbsp;|\s)*[(（]\s*<span class="no">\s*[X✕]\s*<\/span>\s*([^)）]*)[)）]\s*$/);
    if (괄호) return OXROW('ok', 괄호[1].trim(), OXSUB(괄호[2].trim()));

    /* 그 밖 — 상자 안이면 표시만 배지로, 상자 밖이면 설명이므로 그대로 둔다 */
    if (!상자안) return s;
    return s
      .replace(/<span class="no">\s*[X✕]\s*<\/span>/g, '<span class="oxb no">' + OXCROSS + '</span>')
      .replace(/<span class="yes">\s*[O○]\s*<\/span>/g, '<span class="oxb ok">' + OXCHECK + '</span>');
  };

  /*
   * 줄마다 갈라 본다. 줄 머리에 선 O · X 만 예문 줄로 세우고, 설명 문장 안에
   * 섞인 것은 건드리지 않는다(「질문에도 쓰지 않습니다. (갈게요? X)」).
   * 예문 줄은 블록이라 <br> 이 필요 없다 — 줄을 이미 제가 나눈다.
   */
  const OXHEADLINE = /^\s*<span class="(yes|no)">\s*[OX○✕]\s*<\/span>\s*([^]*)$/;
  const OXLINES = (s, 속까지) => {
    const 줄 = String(s == null ? '' : s).split(/<br>/);
    const 낸것 = 줄.map(t => {
      const m = t.match(OXHEADLINE);
      /* 줄 머리가 O · X 면 그 줄은 통째로 예문이다 — 꼬리에 있어도 속까지 본다.
         한 줄에 표시가 둘인 자리(「X … ␣ X …」)가 그래야 함께 바뀐다. */
      if (m) return { 블록: true, html: OXROW(m[1] === 'yes' ? 'ok' : 'no', OXMID(m[2])) };
      /* 상자 밖이라도 「… (X)」 같은 꼴은 예문이다 — 꼴이 맞을 때만 손댄다. */
      const 고친 = OXMID(t, 속까지);
      return { 블록: /^<span class="ox(row|plain)"/.test(고친), html: 고친 };
    });
    return 낸것.map((x, i) =>
      (i && !낸것[i - 1].블록 && !x.블록 ? '<br>' : '') + x.html).join('');
  };

  /* 예문 상자 안 — 줄 가운데 선 표시까지 본다. 상자 안은 통째로 예문이다. */
  const OXBADGE = s => OXLINES(s, true);
  /* 상자 밖 꼬리 — 설명이 섞여 있어 줄 머리만 본다. */
  const OXTAIL = s => OXLINES(s, false);
  const OXHEAD = OXTAIL;

  /*
   * 데이터가 직접 친 예문 상자 안만 골라 배지로.
   *
   * 상자 안에 <span> 이 또 들어 있어 정규식으로는 끝을 못 잡는다. 여는 것과
   * 닫는 것을 세어 짝이 맞는 자리를 상자의 끝으로 본다. data-l 이 「예문」인
   * 상자만 본다 — 「인사말」 상자의 글자는 그대로 둔다.
   */
  const OXINBOX = s => {
    const open = /<span class="tipex"[^>]*data-l="예문"[^>]*>/g;
    let out = '', last = 0, m;
    while ((m = open.exec(s))) {
      const start = m.index + m[0].length;
      const tag = /<\/?span\b[^>]*>/g;
      tag.lastIndex = start;
      let depth = 1, at = start, t;
      while (depth && (t = tag.exec(s))) { depth += t[0][1] === '/' ? -1 : 1; at = tag.lastIndex; }
      if (depth) break;                    /* 짝이 안 맞으면 손대지 않는다 */
      const end = at - '</span>'.length;
      out += s.slice(last, start) + OXBADGE(s.slice(start, end));
      last = end;
      open.lastIndex = at;
    }
    return out + s.slice(last);
  };

  const TIPP = (p, tail) => {
    const s = ARROW(String(p || ''));
    /* 데이터가 직접 감싸 둔 자리는 그대로 둔다 — 두 번 감싸면 상자가 두 겹이 된다. */
    /* 데이터가 직접 감싸 둔 자리는 상자를 다시 치지 않는다 — 다만 그 안이
       예문 상자라면 O · X 는 똑같이 배지로 세운다. */
    if (s.includes('tipex')) return OXINBOX(s);
    const part = s.split(/<br>\s*<br>/);
    if (part.length < 2) return s;
    /* 뜻이 둘로 갈리는 팁은 상자도 둘이다.
       「순서 — …」와 「나열 — …」을 한 상자에 담으면 두 뜻이 한 덩이로 읽히고,
       한쪽만 상자에 담으면 나란한 두 뜻이 서로 달라 보인다. 그래서 첫 덩이가
       「이름 —」으로 시작하면, 같은 꼴로 시작하는 뒤 덩이도 저마다 상자에 담는다.
       설명 줄(「나라도 도시도 다 됩니다.」 같은 것)은 그 꼴이 아니므로 상자 밖에
       그대로 남는다. 감싼 자리 앞뒤의 빈 줄은 상자가 대신하므로 지운다. */
    const LAB = /^\s*(?:<(?:b|span)[^>]*>)?[^<>]{1,16}(?:<\/(?:b|span)>)?\s*(—|–)\s/;
    const BOX = t => '<span class="tipex" data-l="예문">' + OXBADGE(t) + '</span>';
    const twin = t => LAB.test(part[1]) && LAB.test(t);
    const TBOX = t => '<span class="tipex tail" data-l="' + tail + '">' + t + '</span>';
    let html = part[0], boxed = false;
    for (let i = 1; i < part.length; i++) {
      if (i === 1 || twin(part[i])) { html += BOX(part[i]); boxed = true; }
      else if (tail) { html += TBOX(part[i]); boxed = true; }
      /* 상자 밖으로 남는 덩이라도 O · X 로 시작하면 예문이다 — 표시만 배지로 바꾼다. */
      else { html += (boxed ? '' : '<br><br>') + OXTAIL(part[i]); boxed = false; }
    }
    return html;
  };

  /*
   * TIP 한 칸을 설명과 예문으로 가른다.
   *
   * TIPP 은 빈 줄(<br><br>) 앞을 설명으로, 뒤를 예문으로 보고 예문만 상자에
   * 담는다. 여기서는 그 경계를 그대로 쓰되 두 조각을 따로 돌려준다 —
   * 설명은 영어와 한국어를 위아래로 놓고, 예문은 그 아래 한 번만 놓기
   * 위해서다.
   */
  const tipSplit = (p, tail) => {
    /* 영어 풀이 줄 아래 한국어로 다시 적은 줄(「지금 저에 대해 말해요.」)은 강의안에서 뺀다 — 대표님 2026-10-09 02-10.
       데이터(학생용 책도 읽음)는 그대로 두고 화면에서만. */
    p = String(p || '').replace(/<br>\s*<i class="exen">[^<]*[가-힣][^<]*<\/i>/g, '');
    const s = ARROW(String(p || ''));
    /* 데이터가 직접 감싼 것은 통째로 — 다만 예문 상자 안의 O · X 는 배지로 */
    if (s.includes('tipex')) return [OXINBOX(s), ''];
    const part = s.split(/<br>\s*<br>/);
    if (part.length < 2) return [s, ''];            /* 표만 있는 TIP */
    return [part[0], TIPP(p, tail).slice(part[0].length)];
  };
  /* 「💡 TIP ① · 받침을 보세요」에서 뒤쪽 알맹이만 — 영어 제목을 쓸 때
     한국어 제목이 통째로 사라지지 않게 한국어 줄 앞에 붙인다. */
  const tipHeadTail = h => String(h || '').replace(/^.*?·\s*/, '');

  /* 6 · TIP */
  /*
   * 설명은 <b>영어를 위에 크게</b>, 한국어를 그 아래 작게 둔다.
   *
   * 이 강의안을 보는 학생은 영어로 읽고, 진행하는 교사는 바로 아래 한국어로
   * 같은 말을 확인한다. 예문은 한 번만, 한국어로 둔다 — 영어로 옮겨 놓으면
   * 학생이 한국어 예문 대신 영어를 읽어 버린다.
   *
   * 영어가 아직 없는 과는 한국어가 본문 자리를 그대로 지킨다(solo).
   */
  /* TIP 줄이기 · 한국어 설명은 교사 메모 알약으로(대표님 2026-10-02) — data/tipkeep.js 의 TIPKEEP 에 있는 과만.
     남긴 TIP 의 번호는 ① ② 로 다시 매긴다. 예문 상자는 그대로 둔다. */
  const TK = (typeof TIPKEEP !== 'undefined' && TIPKEEP[L0.key]) || null;
  const tkOpt = i => (TK || []).find(x => typeof x === 'object' && x.n - 1 === i) || {};
  const tipIdx = TK ? TK.map(x => (typeof x === 'object' ? x.n : x) - 1).filter(i => L0.tips[i]) : L0.tips.map((_, i) => i);
  /* 그림 · 표 · 예문 덩이(상자 · O · X 줄 · 작은 표)만 장에 남기고, 덩이 밖 설명 글은 떼어 낸다.
     꼬리 상자(.tipex.tail — 「짝이 되는 말」 같은 한국어 설명)도 메모로 보낸다. */
  const pull = s => {
    s = String(s || '');
    const keep = [], rest = [];
    const re = /<(span) class="(?:tipex(?! tail)|oxrow|oxplain|oxt)[^"]*"[^>]*>|<(table)\b[^>]*>/g;
    let last = 0, m;
    while ((m = re.exec(s))) {
      const name = m[1] || m[2];
      const tag = name === 'table' ? /<\/?table\b[^>]*>/g : /<\/?span\b[^>]*>/g; tag.lastIndex = m.index + m[0].length;
      let depth = 1, at = tag.lastIndex, t;
      while (depth && (t = tag.exec(s))) { depth += t[0][1] === '/' ? -1 : 1; at = tag.lastIndex; }
      rest.push(s.slice(last, m.index)); keep.push(s.slice(m.index, at)); last = at; re.lastIndex = at;
    }
    rest.push(s.slice(last));
    const r = rest.join(' ').replace(/^(\s|<br\s*\/?>)+|(\s|<br\s*\/?>)+$/g, '').trim();
    return [keep.join(''), r.replace(/<[^>]+>/g, '').trim() ? r : ''];
  };
  const tipNo = (h, k) => TK ? String(h).replace(/[①②③④⑤]/, '①②③④⑤'[k]) : h;
  /* 메모 속 팁에도 장의 TIP 번호(① ②)를 붙인다 — 장의 TIP ① ② 와 메모 줄을 바로 맞춰 읽게(11-05 대표님 14과). */
  const tipMemo = TK ? tipIdx.map((i, k) => { const t = L0.tips[i]; const [ko, ex] = tipSplit(t.p, t.tail);
    const more = (tkOpt(i).koBox ? [ex] : [pull(ko)[1], pull(ex)[1]]).filter(Boolean).join('<br>');
    return `<p class="tipmemo"><b>${'①②③④⑤'[k]} ${tipHeadTail(t.h)}</b>${more ? `<br>${more}` : ''}</p>`; }).join('') : '';
  /* 장 머리의 한국어 부제도 메모 맨 위로(대표님 2026-10-03) — 장에는 HOLD ON 띠만 남는다. */
  const tipMemoAll = TK ? '<p>학생들이 자주 틀리는 부분입니다. 여기서 한 번 짚고 넘어가세요.</p>' + tipMemo : '';
  out.push({name:'특별 TIP', html:`
    <h1 class="slide-title tiphead"><span class="wt">✋</span> HOLD ON <i>알아 두면 좋아요</i>${TK ? MEMO(tipMemoAll, true) : ''}</h1>
    ${TK ? '' : '<p class="slide-sub">학생들이 자주 틀리는 부분입니다. 여기서 한 번 짚고 넘어가세요.</p>'}
    <div class="tipgrid${TK ? ' tipv2' : ''}" data-n="${tipIdx.length}"${TK ? ` data-cap="${(typeof TIPCAP !== 'undefined' && TIPCAP[L0.key]) || 10}"` : ''}>
      ${tipIdx.map((i, k)=>{ const t = L0.tips[i];
        const e = (L0.tipsEn || [])[i];
        const [ko, ex0] = tipSplit(t.p, t.tail);
        let ex = TK ? (tkOpt(i).koBox ? `<span class="tipex" data-l="예문">${ko}</span>` : pull(ko)[0] + pull(ex0)[0]) : ex0;
        /* 예문 옆 영어 풀이 밑의 작은 한국어를 뺄 과(대표님 2026-10-13, 16 · 17과) — data/tiplines.js 의 TIPNOKO */
        if (typeof TIPNOKO !== 'undefined' && TIPNOKO.includes(L0.key)) ex = ex.replace(/(<span class="ud0">(?:(?!<\/span>)[\s\S])*?)<i>[\s\S]*?<\/i>/g, '$1');
        /* 영어 설명 줄 나누기(대표님 2026-10-13, 2급 틀 그대로) — data/tiplines.js 의 TIPLINES.
           문장마다 한 줄 · 「꼴 = 뜻」 줄 · ==형광펜== · 「> 」 상자에 없는 보기 · ✕/○ 줄은 점 없음. */
        const lines = (typeof TIPLINES !== 'undefined' && TIPLINES[L0.key] && TIPLINES[L0.key][i + 1]) || null;
        const TL = l => { const exl = /^>\s*/.test(l), ox = /^[✕○]/.test(l);
          let h = MIRROR(ko, l.replace(/^>\s*/, ''), [FT, F, L0.key]).replace(/==(.+?)==/g, '<span class="tmk">$1</span>');
          if (ox) h = h.replace(/^([✕○])\s*/, (_, c) => `<span class="tox ${c === '✕' ? 'no' : 'ok'}">${c}</span>`);
          return `<div class="tipln${exl ? ' ex' : ''}${ox ? ' ox' : ''}">${h}</div>`; };
        const en = lines ? lines.map(TL).join('') : e ? MIRROR(ko, tipSplit(e.p)[0], [FT, F, L0.key]) : '';
        const head = tipNo((e && e.h) ? MIRROR(t.h, e.h, [FT, F, L0.key]) : t.h, k);
        /* 두 칸을 쓰는 팁 — 글 옆에 그림을 두어야 뜻이 서는 자리가 있다(25-09). */
        return `<div class="tip ${t.c}${t.wide ? " wide" : ""}">
          <h3>${head}</h3>
          ${en ? (lines ? `<div class="tip-en tlist">${en}</div>` : `<p class="tip-en">${en}</p>`) : ''}
          ${TK && en ? '' : `<p class="tip-ko${en ? '' : ' solo'}">${
            en ? `<b class="tip-koh">${tipHeadTail(t.h)}</b> ` : ''}${ko}</p>`}
          ${ex ? `<p class="tip-ex">${ex}</p>` : ''}
        </div>`;
      }).join('')}
    </div>`});

  /*
   * 6.5 · 자리 말하기 — spot 이 있는 과만 나옵니다.
   *
   * 위치어(위·아래·안…)를 여섯 개 한꺼번에 카드로 던지면 학생이 낱말만
   * 외우고 「책상 위에」의 <b>순서</b>는 못 만듭니다. 그래서 자리 공식을
   * 먼저 보여 주고, 위치어 하나로만 문장을 만들어 본 뒤에 나머지를 냅니다.
   */
  /*
   * cards 를 적은 spot 은 <b>그림 카드 넷</b>으로 세운다(2026-09-24 대표님 B안, 19과).
   * 공식 한 줄에 예문 카드가 세 칸 줄로 서면 넷째가 혼자 내려가고 화면 아래 절반이
   * 비었다. 공식은 제목 옆으로 줄이고, 두 칸 두 줄 카드가 화면을 채운다.
   */
  if(L0.spot && L0.spot.cards){
    const s = L0.spot;
    out.push({name:s.name, html:`
      <div class="eyebrow">자리 말하기</div>${s.memo ? `<div class="setslide">${MEMO(s.memo, true)}</div>` : ''}
      <div class="spotb-head">
        <h1 class="slide-title">${s.title}</h1>
        <div class="spotb-form">${s.form.map((x,i)=>
          `${i ? '<i>+</i>' : ''}<span class="sf${i+1}">${x}</span>`).join('')}<i>=</i><span class="sfr">${s.same}</span></div>
      </div>
      <div class="spotb">
        ${s.ex.map(e=>`
          <div class="spb ${e.t || ''}">
            <span class="spb-pic" aria-hidden="true">${EMO(e.pic)}</span>
            <div class="spb-top"><span class="spb-w">${e.w}</span><span class="spb-eq">= ${e.eq}</span><span class="spb-g">${e.g}</span></div>
            <div class="spb-ex"><div class="sx-ko">${M(e.ko)}</div><div class="sx-en">${M(e.en)}</div></div>
          </div>`).join('')}
      </div>`});
  }
  else if(L0.spot){
    const s = L0.spot;
    out.push({name:s.name, html:`
      <div class="eyebrow">자리 말하기</div>${s.memo ? `<div class="setslide">${MEMO(s.memo, true)}</div>` : ''}
      <h1 class="slide-title">${s.title}</h1>
      <p class="slide-sub">${s.sub}</p>
      <div class="spotform">
        ${s.form.map((x,i)=>
          `${i ? '<i>+</i>' : ''}<span class="sf${i+1}">${x}</span>`).join('')}
        <b>→</b><span class="sfr">${s.result}</span>
      </div>
      <div class="spotex">
        ${s.ex.map(e=>`
          <div class="sx">
            ${e.on ? `<div class="sx-pic${e.pos ? ' ' + e.pos : ''}" aria-hidden="true">
              <span class="up">${SPOTPIC(e.on[0])}</span>
              <span class="dn">${SPOTPIC(e.on[1])}</span>
            </div>` : ''}
            <div class="sx-ko">${M(e.ko)}</div>
            <div class="sx-en">${M(e.en)}</div>
          </div>`).join('')}
      </div>
      <p class="spotnote">${s.note}</p>`});
  }

  /*
   * 7 · 단어 카드
   *
   * 답이 여럿인 과가 있다. 와/과 과는 한 낱말에 「계란과 · 계란하고 · 계란이랑」
   * 셋이 다 붙는데, 셋을 한 칸에 늘어놓으면 카드가 글자로 꽉 차고 학생은
   * 어느 것을 말해야 하는지 모른 채 세 개를 한꺼번에 읽는다.
   * 그래서 답을 {'하고':'계란하고', ...} 로 적어 두면 위에 고르는 단추가 나오고,
   * 교사가 하나를 골라 그것만으로 한 바퀴 돈다. 세 바퀴를 돌 수 있다.
   */
  /*
   * 답이 여럿인 과에서 쓰는 것들.
   *
   * wKeys — 고를 수 있는 이름들. 단어 카드뿐 아니라 어휘·빙고·릴레이에 적힌
   *         답까지 모아 뽑는다. 한 곳에서 고르면 연습이 전부 그것을 따라야
   *         하기 때문이다.
   * ANS   — 답을 그린다. 여럿이면 전부 그려 두고 고른 것만 보인다. 다시 그리지
   *         않고 보이기만 바꾸므로 카드를 열어 둔 채로도 조사를 갈 수 있다.
   * SEL   — 고르는 줄. 연습이 있는 슬라이드마다 같은 줄을 얹는다.
   */
  const objKeys = v => (v && typeof v === 'object' && !Array.isArray(v)) ? Object.keys(v) : [];
  const wKeys = [...new Set([
    ...(L0.words||[]).flatMap(w => objKeys(w.r)),
    ...(L0.vocab||[]).flatMap(v => (v.items||[]).flatMap(it => objKeys(it.r))),
    /* 빙고는 한 판(짝의 배열)일 수도, 여러 판({tag,pairs})일 수도 있다 */
    ...(L0.bingo||[]).flatMap(x => (Array.isArray(x) ? [x] : (x.pairs||[]))
                                     .flatMap(row => objKeys(row[1]))),
    ...(L0.relays||[]).flatMap(set => set.flatMap(x => objKeys(x.ans))),
  ])];
  if(wKeys.length && !wKeys.includes(PICK)) PICK = wKeys[0];
  /*
   * 답 줄이 <b>긴</b> 카드에 표를 단다(2026-09-20 대표님 검수).
   *
   * 카드 글씨를 제 크기로 되돌리니(23px → 50px) 답이 한 문장인 카드 다섯 장에서
   * 15~21px 이 잘렸다. 글자 수로 갈리는 자리인데 CSS 에는 글자 수를 재는 자가
   * 없다. 그래서 여기서 세어 표를 달고, 줄이는 일은 CSS 가 맡는다.
   * 답이 여럿이면(연습 낱말을 고르는 과) <b>가장 긴 것</b>을 기준으로 삼는다 —
   * 어느 것을 골라도 안 잘려야 한다.
   */
  /*
   * 「우유 + 과자」처럼 낱말 둘을 잇는 카드는 그림도 둘이다. 그림을 한 줄로 붙여
   * 두면 어느 그림이 어느 낱말인지 안 보인다 — 그림마다 제 낱말 한가운데 위에
   * 세운다(16과 연습 카드). 그림 수와 낱말 수가 같을 때만 가른다.
   * 받침 표시는 조사가 붙는 <b>앞 낱말</b>에 단다.
   */
  const DUO = (it) => {
    const parts = String(it.w || '').split(/\s*\+\s*/);
    if (parts.length < 2 || !it.e || typeof Intl === 'undefined' || !Intl.Segmenter) return '';
    const emo = [...new Intl.Segmenter().segment(it.e)].map(s => s.segment).filter(s => s.trim());
    if (emo.length !== parts.length) return '';
    const top = emo.map((x, i) => (i ? '<span></span>' : '') + `<span class="vemo">${EMO(x)}</span>`).join('');
    const bot = parts.map((w, i) => (i ? '<span class="vword vplus">+</span>' : '') + `<span class="vword">${i === 0 ? BAT(w, it.b) : w}</span>`).join('');
    return `<span class="vduo" style="--n:${parts.length * 2 - 1}">${top}${bot}</span>`;
  };
  /*
   * 카드 낱말 · 답 가운데 가장 긴 줄의 폭(한글 1 · 영문과 빈칸 0.55).
   * 낱말과 답은 같은 크기로 크게 서고, 카드 폭에 안 들어갈 때만 한 줄에 맞게 줄인다
   * (2026-09-24 대표님 — 22 · 23 · 24 · 25과 카드 글씨가 작다).
   */
  const CARDW = (it) => {
    const plain = x => String(x ?? '').replace(/<i>[^]*?<.i>/g, '').replace(/<[^>]+>/g, '');
    const w = x => [...plain(x)].reduce((a, c) => a + (/[가-힣ㄱ-ㅣ○△□]/.test(c) ? 1 : 0.55), 0);
    const rs = it.r && typeof it.r === 'object' ? Object.values(it.r) : [it.r];
    return Math.max(3, w(it.w), ...rs.map(w)).toFixed(1);
  };
  const VLONG = (r) => {
    if (r == null) return '';
    const 벗 = (x) => String(x).replace(/<[^>]+>/g, '').trim();
    const 길이 = typeof r === 'object'
      ? Math.max(0, ...Object.values(r).map((x) => 벗(x).length))
      : 벗(r).length;
    return 길이 >= 12 ? ' vlong' : '';
  };
    const ANS = v => objKeys(v).length
    ? Object.entries(v).map(([k,x]) =>
        `<span class="ra${k===PICK?' on':''}" data-wk="${k}">${x}</span>`).join('')
    : (v ?? '');
  const SEL = () => wKeys.length
    ? `<div class="wsel"><span class="wsel-l">무엇으로 연습할까요?</span>${
        wKeys.map(k => `<button class="wsel-b${k===PICK?' on':''}" type="button" data-wk="${k}">${k}</button>`).join('')
      }</div>`
    : '';
  /* 한 장에 다 안 들어가는 과는 words2 로 장을 더 낸다. */
  const WORD_PER = 6;
  /*
   * 단어 카드는 갈래 차례로 줄 세운다(대표님 2026-10-01) — 한 장에 받침 O · X · 불규칙이 뒤섞여 있었다.
   *   받침으로 가르는 과: 받침 O → 받침 X → ㄹ 받침 → ⚠ 규칙인 것 → 불규칙(ㄷ ㅂ 르 ㅅ)
   *   ㅏ/ㅓ/해로 가르는 과: ㅏ · ㅗ → 그 밖(ㅓ) → 하다 → ㅡ 탈락 → ⚠ 규칙인 것 → 불규칙
   *   ⚠ 규칙인 것(웃다 · 씻다처럼 불규칙처럼 보이는 규칙)은 규칙 쪽 맨 뒤, 불규칙 바로 앞(대표님 2026-10-01)
   *   뜻으로 가르는 과(장소 · 사람 · 때 …): 갈래 차례는 그대로, 갈래 안에서 어간 받침 O → X
   * 데이터 차례는 그대로 둔다 — 학생용 활동지는 데이터를 따로 읽는다.
   */
  const WTXT = s => String(s ?? '').replace(/<[^>]+>/g, '').replace(/\s*\(.*?\)\s*/g, '').trim();
  /* 받침은 카드의 <b>첫 낱말</b>로 잰다 — 「학교 → 집」 · 「← 선배」 */
  const W_BAT = w => { const b = (WTXT(w.b).match(/[가-힣]+/) || [''])[0]; const st = /다$/.test(b) && b.length > 1 ? b.slice(0, -1) : b;
    const c = st.charCodeAt(st.length - 1) - 0xAC00; return c >= 0 && c <= 11171 && c % 28 !== 0; };
  const W_RANK = [[/^(어간\s*)?받침\s*O$/, 0], [/^(어간\s*)?받침\s*X$/, 1], [/ㄹ\s*받침/, 2],
    [/^ㅏ$|^ㅏ\s*·?\s*ㅗ$|ㅏ\s*축약|ㅗ\s*→\s*ㅘ/, 10], [/그\s*밖|ㅏ\s*·\s*ㅗ\s*✕|ㅣ\s*→\s*ㅕ|ㅜ\s*→\s*ㅝ/, 11],
    [/^-?하다$/, 12], [/ㅡ\s*탈락/, 13], [/ㄷ\s*불규칙/, 20], [/ㅂ\s*불규칙/, 21], [/르\s*불규칙/, 22], [/ㅅ\s*불규칙/, 23],
    [/규칙인\s*것|^규칙$/, 15]];
  /* 받침 · ㅏ/ㅓ 갈래가 있는 묶음에서만 위 차례를 쓴다. 없으면(동사 / 하다, 듣고 짐작 …) 딱지는 뜻 갈래 — 원래 차례를 지킨다(30과) */
  const W_CORE = /^(어간\s*)?받침\s*[OX]$|^ㅏ$|^ㅏ\s*·?\s*ㅗ$|ㅏ\s*축약|그\s*밖|ㅏ\s*·\s*ㅗ\s*✕/;
  const SORTW = list => {
    const seen = [], core = list.some(w => W_CORE.test(WTXT(w.t)));
    const key = (w, i) => { const t = WTXT(w.t); const hit = core && W_RANK.find(([re]) => re.test(t));
      if(!hit && !seen.includes(t)) seen.push(t);
      return [hit ? hit[1] : 100 + seen.indexOf(t), W_BAT(w) ? 0 : 1, i]; };
    const ks = list.map(key);
    return list.map((w, i) => [w, ks[i]]).sort((a, b) => a[1][0] - b[1][0] || a[1][1] - b[1][1] || a[1][2] - b[1][2]).map(x => x[0]);
  };
  const wordSlide = (list0, title, sub, no, alt) => {
    const list = SORTW(list0 || []);
    const pages = [];
    for(let i = 0; i < list.length; i += WORD_PER) pages.push(list.slice(i, i + WORD_PER));
    pages.forEach((page, pi) => out.push({
    name: `단어 카드${no ? ` ${no}` : ''}${pages.length > 1 ? ` ${CIRC(pi)}` : ''}`, html:`
    <div class="eyebrow${alt ? ' alt' : ''}">연습 ① · 단어 카드${no ? ` ${no}` : ''}${alt ? ' · 다른 형태' : ''}${pages.length > 1 ? ` · ${pi+1} / ${pages.length}` : ''}</div>
    <h1 class="slide-title">${title}${alt && alt !== true ? `<span class="wbadge">${alt}</span>` : ''}${
      pages.length > 1 ? `<span class="pgno">${pi+1} / ${pages.length}</span>` : ''}</h1>
    <p class="slide-sub">${sub}</p>
    ${SEL()}
    <div class="wordgrid${alt ? ' alt' : ''}">
      ${page.map(w=>{
        /* '먹다'에 '받침 O'만 적어 두면 '다'에 받침이 있는 줄 압니다.
           사전형이면 꼬리표에 어간이라고 밝혀 줍니다. */
        const tag = /^받침 [OX]$/.test(w.t||'') && isDict(w.b) ? `어간 ${w.t}` : w.t;
        /* 꼬리표가 없는 묶음도 있습니다 — 받침이 상관없는 과(13과 부터 ~ 까지)에서는
           「시작 · 끝」 같은 이름만 남아 학생이 카드를 갈래로 오해했습니다. 빈 꼬리표
           자리는 아예 내지 않습니다. */
        /*
         * 두 걸음으로 여는 단어 카드.
         *
         * 「모델」만 보고 「모델처럼 날씬해요」를 만들라고 하면 날씬하다를 학생이
         * 지어내야 한다. 그렇다고 처음부터 문장을 다 보이면 읽고 넘어간다.
         * 빨강을 누르면 함께 쓸 <b>형용사가 기본형으로</b> 나오고, 파랑을 누르면
         * 문장이 된다 — 빙고·어휘 카드와 같은 색약속이라 따로 설명할 것이 없다.
         * 묶음이 v 를 적어 둔 카드에서만 두 걸음이 된다(22-10 · 22-11).
         */
        if(w.v) return `<div class="wcard step${tag ? '' : ' notag'}">
          ${tag ? `<span class="tag">${tag}</span>` : ''}
          <span class="wpick">
            <button class="wdot t" type="button" data-step="1" title="함께 쓸 형용사"></button>
            <button class="wdot s" type="button" data-step="2" title="문장으로"></button>
          </span>
          <div class="base">${w.b}</div>
          <div class="wmid">${w.v}</div>
          <div class="res">${ANS(w.r)}</div>
        </div>`;
        /* 「친구 →」 + 꼬리표 「주다」처럼 꼬리표가 함께 쓸 동사면, 구석 딱지가 아니라 화살표 뒤에 크게 파랑으로(11-05 대표님 14과) —
           학생은 그 동사를 넣어 말해야 하므로 낱말과 같은 크기로 보여야 한다. 카드 모양(→ 로 끝나는 낱말 + -다 꼬리표)으로 가린다. */
        const verb = /→\s*$/.test(String(w.b || '')) && /다$/.test(String(tag || '').trim());
        return `
        <button class="wcard${w.t === '받침 X' ? ' x' : ''}${tag && !verb ? '' : ' notag'}" type="button">
          ${tag && !verb ? `<span class="tag">${tag}</span>` : ''}
          <div class="base">${w.b}${verb ? ` <span class="wverb">${tag}</span>` : ''}</div>
          <span class="arrow">클릭 ▾</span>
          <div class="res">${ANS(w.r)}</div>
        </button>`;
      }).join('')}
    </div>`}));
  };

  wordSlide(L0.words, '🔁 WORD DRILL <i>단어 연습</i>',
    '학생들이 먼저 말한 다음, 교사가 카드를 클릭해서 정답을 확인합니다.',
    (L0.words2 || []).length ? 1 : 0);
  (L0.words2 || []).forEach((g, i) =>
    wordSlide(g.items, g.tag, g.sub || '규칙이 갈리는 자리입니다. 하나씩 소리 내어 말해 보세요.', i + 2, g.alt));

  /* 8 · 활동 — 빙고 한 장, 릴레이 한 장(대표님 2026-10-08 1과 01-14 「빙고판하고 릴레이판 따로 하고 글자 크기를 훨씬 더 키워」, 2급과 같게).
     한 장에 둘을 나란히 두면 칸도 글자도 반쪽이 된다. 장을 나누면 저마다 한 장을 다 써서 교실 뒤에서도 읽힌다. */
  const ACT1 = (n, body) => out.push({name:`문장 연습 ${n}`, html:`
    <div class="eyebrow">연습 ② · 활동</div>
    <h1 class="slide-title">🧩 Practice together</h1>
    <p class="slide-sub">칸과 버튼을 눌러 교실에서 바로 진행하는 활동입니다.</p>
    ${SEL()}
    <div class="methods one">${body}</div>`});
  ACT1('· 빙고', `
      <div class="card method m1">
        <div class="mtop"><div class="mno">1</div><h3>🎲 Bingo</h3>
          <span class="bwho"><i class="t"></i>선생님<i class="s"></i>학생</span>
          <span class="bset" id="bingoSet"></span>
          <button class="mbtn" id="bingoNew" type="button">🔀 새 판</button></div>
        ${/* 판이 여럿인 과는 <b>어느 갈래를 연습하는지</b>를 교사가 곧바로 골라야 한다.
             「새 판」으로 한 칸씩 넘기면 지금 판이 무엇인지 이름을 읽어야 안다.
             판마다 단추를 두고, 칸 색도 판을 따라가게 한다(26-16). */''}
        ${bingoBoards(L0).length > 1 ? `<div class="bpick" id="bingoPick">${
          bingoBoards(L0).map((b, i) => `<button class="bpick-b${b.c ? ' ' + b.c : ''}" type="button" data-set="${i}">${b.tag || (i + 1) + '판'}</button>`).join('')}</div>` : ''}
        <div class="how"><b>${L0.bingoForm || F}</b>를 붙여 말한 사람의 색을 누르세요 — <b class="bt-t">빨강은 선생님</b>, <b class="bt-s">파랑은 학생</b>입니다. 칸이 바른 형태로 바뀝니다. 한 줄이면 <b>빙고!</b></div>
        <div class="bingo" id="bingo"></div>
        <div class="bingo-status" id="bingoStatus"></div>
      </div>`);
  ACT1('· 릴레이', `
      <div class="card method m2">
        <div class="mtop"><div class="mno">2</div><h3>🔗 Relay</h3>
          <button class="mbtn" id="relayNew" type="button">🔀 다른 릴레이</button></div>
        <div class="how">앞뒤 말은 미리 보입니다. 학생이 <b>${F}</b>를 붙여 말한 뒤 <b>다음 정답</b>을 눌러 확인하세요.</div>
        <div class="relay" id="relay"></div>
        ${/*
           * 다 맞히면 문장을 통째로 보여 줍니다.
           *
           * 릴레이는 조각을 하나씩 여는 활동이라, 끝나도 학생 눈에는 칸이
           * 여섯 개 남습니다. 자기가 만든 것이 무슨 대화였는지는 보이지
           * 않습니다. 마지막에 A·B 두 줄로 이어 붙여 보여 주면 그제야
           * 「내가 이 대화를 했구나」가 됩니다. 오늘의 문법은 빨갛게 둡니다 —
           * 그 조각이 문장 어디에 들어갔는지가 이 장면의 요점입니다.
           */''}
        <div class="relay-full" id="relayFull"></div>
        <div class="relay-ctrl">
          <button class="pbtn" id="relayNext" type="button">다음 정답 →</button>
          <button class="pbtn ghost" id="relayReset" type="button">다시 가리기</button>
        </div>
      </div>`);

  /* 9 · 문장 만들기 */
  /* 한 장에 여덟 문항을 밀어 넣으면 낱말 칩이 카드 안에서 줄바꿈되고,
     교실 뒤에서는 그 글자가 안 읽힙니다. 네 문항씩 끊어 장을 나눕니다 —
     칸이 넓어지니 칩도 정답 문장도 한 줄로 섭니다. */
  const MAKE_PER = 4;
  const makePages = [];
  for(let i = 0; i < (L0.make || []).length; i += MAKE_PER)
    makePages.push(L0.make.slice(i, i + MAKE_PER));
  makePages.forEach((page, pi) => out.push({
    name: `문장 만들기${makePages.length > 1 ? ` ${CIRC(pi)}` : ''}`, html:`
    <div class="eyebrow">연습 ③ · 문장 만들기${makePages.length > 1 ? ` ${pi+1} / ${makePages.length}` : ''}</div>${L0.makeMemo ? `<div class="setslide">${MEMO(L0.makeMemo, true)}</div>` : ''}
    <h1 class="slide-title">✏️ Make a sentence <i>문장 만들기</i>${
      makePages.length > 1 ? `<span class="pgno">${pi+1} / ${makePages.length}</span>` : ''}</h1>
    ${(() => {
      /* 문항마다 시제가 적혀 있으면 그것을 따르라고 한다. 6단원부터는 현재만
         반복해도 되는 과가 없다 — 과거·미래를 섞어야 말이 살아 있는 말이 된다. */
      const mixed = (L0.make || []).some(q => q.tense);
      /*
       * 「현재형(-아/어요)으로 만드세요」는 <b>정답이 그 꼴일 때만</b> 맞는 말이다.
       *
       * 이에요/예요 과도, 은/는 같은 조사 과도 정답은 「저는 학생이에요」처럼
       * 이에요/예요로 끝난다. 거기에 -아/어요로 만들라고 적어 두면 학생이
       * 만들 수 없는 것을 시키는 셈이다. 그래서 문항의 <b>정답을 실제로 보고</b>
       * 무엇으로 끝나는지 세어, 다 같은 꼴이면 그 꼴을 그대로 적는다.
       */
      const ANSF = (() => {
        const as = (L0.make || []).map(q => String(q.a || '').replace(/[.?!]+$/, ''));
        if(!as.length) return '';
        /* 「제 것이 아니에요」도 이에요/예요 식구다. 한 문항이 부정이라고 해서
           안내가 「현재형(-아/어요)으로 만드세요」로 떨어지면, 정작 만들 꼴이
           아닌 것을 시키는 셈이 된다(20-13 · 20-14). */
        if(as.every(a => /이에요$/.test(a) || /(?<![이])예요$/.test(a) || /아니에요$/.test(a))) return '이에요/예요';
        /* 「이/가 있어요 · 없어요」처럼 문법소가 서술어까지 품는 과가 있다.
           정답이 모두 그 꼬리로 끝나면 그 문법소를 그대로 적어 준다. */
        const tails = String(FT || '').split(/[\s/·]+/).map(t => t.trim().replace(/^-/, ''))
          .filter(t => t.length > 1 && /[가-힣]$/.test(t));
        if(tails.length && as.every(a => tails.some(t => a.endsWith(t)))) return FT;
        return '';
      })();
      const COPULA = !VERB_LESSON && (ANSF || /에요/.test(String(F)));
      const rule = mixed
        ? '카드에 적힌 <em class="must">시제</em>로 만드세요.'
        : (VERB_LESSON || COPULA)
          ? `서술어는 <em class="must">${COPULA ? (ANSF || F) : '오늘 배운 형태'}</em>로 만드세요.`
          : '서술어는 모두 <em class="must">현재형(-아/어요)</em>으로 만드세요.';
      return `<p class="slide-sub">${rule} 학생이 대답한 후 카드를 클릭하면 정답 문장이 나옵니다.</p>`;
    })()}
    <div class="qgrid">
      ${page.map((q,k)=>{
        const n = pi * MAKE_PER + k;
        /*
         * 문법 딱지를 <b>문장에 들어갈 자리</b>에 놓는다.
         * 조사는 앞말에 붙으므로 첫 낱말 바로 뒤, 어미는 서술어에 붙으므로 맨 뒤다.
         * 자리가 다른 문항은 데이터에서 gi 로 집어 준다(0 = 첫 낱말 뒤).
         */
        /*
         * 문법 딱지를 <b>실제로 붙는 자리</b>에 놓는다.
         *
         * 「처음 / 서다 / 무대」에 -(으)ㄴ 을 맨 뒤에 놓으면 「무대-(으)ㄴ」이
         * 되어 버린다. 답은 「처음 선 무대」이니 딱지는 서다 뒤라야 한다.
         * 어디에 붙는지는 문법의 갈래가 정한다:
         *   · 조사        → 첫 낱말 뒤
         *   · 이어 주는 말 → 앞 절의 용언 뒤 (손을 씻고 밥을 먹어요)
         *   · 꾸미는 말   → 꾸밈을 받는 이름씨 <b>앞</b>의 용언 뒤 (처음 선 무대)
         *   · 앞에 오는 말 → 용언 <b>앞</b> (안 가요 · 못 가요)
         *   · 그 밖의 어미 → 마지막 용언 뒤
         * 데이터에 gi 가 있으면 그것이 먼저다.
         */
        const LINK = ['-고','-지만','-아/어서','-는데','-(으)러','-(으)려고','-(으)면','-(으)니까',
                      '-기 전에','-(으)ㄴ 후에','-(으)ㄹ 때'];
        const ADNOM = ['형용사 + -(으)ㄴ','동사 + -는','동사 + -(으)ㄴ','동사 + -(으)ㄹ','-는 것','-기'];
        const BEFORE = ['안','못'];
        const verbs = q.k.map((w,i)=>/다$/.test(w) ? i : -1).filter(i=>i>=0);
        let at;
        if(q.gi !== undefined) at = q.gi;
        else if((() => {
          const ans = String(q.a || '');
          const tag = String(q.gf || F).replace(/^-/, '').split('/')[0].replace(/[()]/g, '').trim();
          if(!ans || !tag) return false;
          if(L0.key === '안' || L0.key === '못') return false;
          const gAt = ans.indexOf(tag);
          if(gAt <= 0) return false;
          let best = -1, bestPos = -1;
          q.k.forEach((w, i) => {
            const t = String(w).replace(/다$/, '').trim();
            if(!t) return;
            const p = ans.lastIndexOf(t, gAt);
            if(p >= 0 && p > bestPos) { bestPos = p; best = i; }
          });
          if(best < 0) return false;
          at = best;
          return true;
        })()) { /* 정답이 자리를 알려 주었습니다 */ }
        /* 명사 뒤에 붙어 서술어가 되는 과(이에요/예요 · 아니에요)는 마지막 낱말 뒤입니다
           — 이 사람 / 친구 + 예요 → 이 사람 친구예요. */
        else if(['이에요/예요', '아니에요'].includes(L0.key)) at = q.k.length - 1;
        else if(!verbs.length) at = 0;
        else if(BEFORE.includes(L0.key)) at = verbs[verbs.length-1] - 1;
        else if(LINK.includes(L0.key)) at = verbs[0];
        else if(ADNOM.includes(L0.key))
          at = (verbs.find(i => i < q.k.length - 1) ?? verbs[0]);
        else if(VERB_LESSON) at = verbs[verbs.length-1];
        else at = 0;
        /*
         * 칩에 적히는 꼴.
         *
         * 그 과의 form 을 그대로 붙이면 과거·높임처럼 꼴이 달라지는 문항에서
         * 칩과 정답이 어긋난다 — 정답은 「힘들었겠어요」인데 칩은 「-겠어요」가
         * 된다. 문항이 gf 로 제 꼴을 적어 두면 그것을 쓴다.
         */
        const chips = q.k.map(x=>`<span>${x}</span>`);
        /* 「에서 ~ 까지」를 한 딱지로 첫 낱말 뒤에 두면 까지가 어느 낱말에 붙는지
           안 보인다. 물결표로 갈린 조각마다 정답에서 제 낱말을 찾아 그 뒤에 세운다. */
        const gform = String(q.gf || F);
        const halves = gform.split('~').map(s => s.trim()).filter(Boolean);
        const qa = String(q.a || '');
        /*
         * 「부터 ~ 까지」처럼 두 자리를 쓰는 문법은 딱지도 <b>조각마다</b> 제 낱말 뒤에 선다.
         *
         * 그런데 답이 한쪽만 쓰는 문항이 있다 — 「저는 다섯 시까지 와요」. 둘 다
         * 찾아야만 갈라 놓던 옛 셈은 여기서 통째로 물러나, 「부터 ~ 까지」 딱지가
         * 한 덩이로 붙었다. 답에 없는 부터를 학생이 붙일 낱말로 보여 준 것이다.
         * 그래서 <b>찾은 조각만</b> 그 자리에 세운다(13-14).
         */
        const spots = halves.length === 2
          ? halves.map((h, n) => [n, q.k.findIndex(w => qa.includes(String(w).trim() + h))])
                  .filter(([, i]) => i >= 0) : [];
        if(spots.length && new Set(spots.map(([, i]) => i)).size === spots.length)
          spots.map(([n, i]) => [i, halves[n]]).sort((a, b) => b[0] - a[0])
            .forEach(([i, h]) => chips.splice(i + 1, 0, `<span class="g">${h}</span>`));
        else chips.splice(at + 1, 0, `<span class="g">${gform}</span>`);
        /* 시제 딱지. 없으면 안 붙는다 — 5단원까지는 현재 하나뿐이라
           같은 말을 여덟 번 되풀이할 이유가 없다. */
        const TENSE = {현재:'now', 과거:'past', 미래:'will', 추측:'guess', 의지:'my will'};
        return `
        <button class="qcard" type="button">
          ${/* 남이 한 말을 키워드 칸에 두면 학생이 그것까지 만들 말로 읽는다.
               들은 말은 딱지 옆에 따로 붙인다(26-18). */''}
          <div class="hintline">${n+1}번${q.tense
            ? ` <span class="tense ${TENSE[q.tense]||''}">${q.tense}</span>` : ''}${q.heard
            ? ` <span class="heard">${q.heard}</span>` : ''}</div>
          ${/* 낱말 칸은 한 줄에 선다 — 칸마다 글자 폭 + 안쪽 여백(1.4)을 더해 넘겨 주면
               CSS 가 카드 폭에 맞춰 글씨를 조금 줄인다(28과 3번). */''}
          <div class="keys" style="--kl:${chips.reduce((a, c) => a + 1.4 + [...String(c).replace(/<[^>]+>/g, '')]
            .reduce((b, ch) => b + (/[가-힣ㄱ-ㅣ○△□]/.test(ch) ? 1 : 0.55), 0), 0).toFixed(1)}">${chips.join('')}</div>
          <div class="ansbox">
            <div class="ans">${q.a}</div>
            <div class="ansen">${q.e}</div>
          </div>
        </button>`;
      }).join('')}
    </div>`}));

  /*
   * 이 묶음으로 만들 문장의 틀.
   *
   * 카드를 눌러 「우산도 있어요」를 보여 줘도, 학생은 그게 이 묶음 전체에
   * 적용되는 틀인지 그 카드 하나의 답인지 모른다. 그래서 묶음 안의 답을
   * 모두 견주어 낱말만 다르고 뒤가 같으면 그 공통 부분을 틀로 내건다.
   * 손으로 적지 않는다 — 답을 고치면 틀도 저절로 따라간다.
   */
  /*
   * 이 낱말 묶음을 교사가 어떻게 물어볼지.
   *
   * 묶음마다 물음을 따로 적게 하면 말하기 카드에 이미 있는 문장을 한 번 더
   * 베껴 두는 셈이고, 한쪽을 고치면 다른 쪽이 어긋난다. 그래서 이 묶음을
   * 쓰는 말하기 카드를 찾아 그 물음을 그대로 가져온다. 묶음에 q 를 직접
   * 적어 두면 그것이 먼저다.
   */
  const vAsk = v => {
    if(v.q) return {q:v.q, en:v.qen};
    const hit = (L0.sit||[]).find(s => [].concat(s.v ?? []).includes(v.tag));
    return hit && hit.q ? {q:hit.q, en:hit.qen} : null;
  };

  /*
   * 「이렇게 만드세요」 상자.
   *
   * 카드의 꼬리가 모두 같으면 거기에서 문형을 뽑는다 — 「○○이/가」처럼.
   * 그런데 활용이 일어나면 꼬리를 못 뽑는다. 「비가 오다」의 답은
   * 「비가 와서 못 나가요」라 낱말로 시작하지 않기 때문이다. 그러면 상자가
   * 통째로 사라져, 학생이 무엇을 만들어야 하는지 모르는 채로 카드만 본다.
   * 묶음이 pat 으로 문형을 적어 두면 그것을 먼저 쓴다.
   */
  const vFrame = v => {
    if(v.pat) return v.pat;
    /*
     * 카드가 <b>용언인데</b> 문형에는 명사 자리만 서 있는 자리가 있다.
     *
     * 「이/가」 과의 형용사 카드 위에 「○○이 / ○○가」만 적혀 있으면, 학생은
     * 멋있다를 어디에 넣으라는 것인지 알 수 없다. 조사 문형은 앞자리만
     * 말해 주기 때문이다. 그 과가 이미 들고 있는 대답 문형(pat)에는 앞뒤
     * 두 자리가 다 있으므로 그것을 그대로 쓴다.
     */
    const verby = (v.items || []).filter(it => /다$/.test(String(it.w || ''))).length;
    if(verby >= (v.items || []).length * .7 && verby && !VERB_LESSON
       && L0.pat && /△△/.test(L0.pat)) return L0.pat.replace(/[.]$/, '');
    const tails = (v.items||[]).map(it =>
      { const r = objKeys(it.r).length ? it.r[PICK] ?? Object.values(it.r)[0] : it.r;
        return r && r.startsWith(it.w) ? r.slice(it.w.length) : null; });
    /* 빈자리 표시는 품사를 따른다 — 명사 자리는 ○○, 용언 자리는 △△. */
    const SLOTSYM = VERB_LESSON ? '△△' : '○○';
    if(tails.length && tails.every(t => t && t === tails[0])) return `${SLOTSYM}${tails[0]}`;
    /*
     * 꼬리를 못 뽑으면 그 과의 목표 형태로 만든다. 다만 아무 form 이나
     * 쓰면 안 된다 — 「안 · 못」은 앞에 붙는 말이라 「○○못」이 되어 버리고,
     * 「-아/어요」는 어미 <b>안에서</b> 갈리는 것이라 「○○아 / ○○어요」로
     * 잘못 쪼개진다. 그런 과는 묶음이 pat 으로 적어 준다.
     */
    const f = String(L0.form || '').trim();
    if(!f || f === '안' || f === '못') return '';
    const parts = f.split('/').map(s => s.trim()).filter(Boolean);
    if(parts.length > 3) return '';
    const dashed = parts.filter(p => p.startsWith('-')).length;
    if(dashed && dashed !== parts.length) return '';
    return parts.map(p => `${SLOTSYM}${p.replace(/^-/, '')}`).join(' / ');
  };
/* 어휘 묶음 이름의 영어. 제목은 <b>WORDS : [ 장소 ] place</b> 꼴로
   서고, 여기에 없는 묶음은 한국어만 남는다 — 어설픈 직역보다 낫다. */
const TAGEN = {
  '가족':'family', '같이 쓰는 말':'words that go together', '같이 쓰는 부사':'adverbs that go with it',
  '견주는 말':'comparing words', '계획 표현':'plans', '고를 때 쓰는 말':'choosing',
  '교실 물건':'classroom things', '교통':'transport', '끝 시간·기한':'end time & deadline',
  '날씨 표현':'weather', '날씨 형용사':'weather adjectives', '내 뜻 밝히기':'stating your intention',
  '네 문법 한눈에':'four grammar points at a glance', '누가 무엇을 해요':'who does what',
  '누구의 것':'whose it is', '능력 부정':'saying you can’t', '더 하는 일':'one more thing',
  '도구':'tools', '도시':'cities', '도착하는 곳':'where you arrive',
  '동사':'verbs', '동사 부정':'negative verbs', '때':'time', '때 · 요일':'time & day',
  '때·요일':'time & day', '때·장소·교통':'time, place, transport', '마트 식품':'groceries',
  '먹고 마시는 것':'food & drink', '못 하는 이유':'why you can’t', '물건 · 활동':'things & activities',
  '받는 동사':'receiving verbs', '복습 동사':'review verbs', '보고 짐작하기':'guessing from what you see',
  '부정 대답':'saying no', '불규칙 동사':'irregular verbs', '불규칙까지 한 바퀴 더 👆':'one more round, irregulars too',
  '빗대는 짝 10':'ten comparisons', '사람':'people', '사람·사물 형용사':'adjectives for people & things',
  '사물':'things', '상태 지속':'a state that lasts', '상황 때문에':'because of the situation',
  '새 동사':'new verbs', '새 사물':'new things', '새 형용사':'new adjectives',
  '시각 · 한 시 ~ 열두 시':'1 to 12 o’clock',
  '시작 시간':'start time', '습관 활동':'things you do regularly', '안 ↔ -지 않다':'안 ↔ -지 않다',
  '안 ↔ 못':'안 ↔ 못', '어디의 것':'where it belongs', '어제 한 일':'what you did yesterday',
  '에를 안 쓰는 말':'words that take no 에', '요일':'days of the week', '위치':'position',
  '음식':'food', '음식·음료':'food & drink', '의를 안 쓰는 자리':'where 의 is dropped',
  '이름':'names', '이름 · 나라':'names & countries', '장소':'place', '장소 (에서~까지)':'place (from–to)',
  '재료·언어·방법':'material, language, method', '조사 뒤에도 붙어요':'it attaches after a particle',
  '조사가 남는 자리':'where the particle stays', '주는 동사':'giving verbs',
  '지난 이야기를 듣고':'hearing about the past', '직업':'jobs', '직업 + 였어요':'jobs + 였어요',
  '진행 동사':'ongoing actions', '집 안':'around the house', '통표현':'set phrases',
  '하나만 있어요':'only one', '하는 일':'things you do', '하다 동사':'하다 verbs',
  '⚠️ 하다 동사':'하다 verbs', '하루 일과':'a day’s routine', '한국 음식':'Korean food',
  '함께하는 사람':'who you’re with', '헷갈리는 짝':'easy to mix up', '형용사':'adjectives',
  '형용사 부정':'negative adjectives', '나라':'countries',
  '-아요 · -어요 동사':'-아요 · -어요 verbs', '-지 못했어요 · 어제 못 한 일 🌙':'what you couldn’t do yesterday',
  '-았/었겠어요 · 지난 이야기를 듣고':'hearing about the past', '-았/었겠어요 · 지난 이야기를 듣고 👂':'hearing about the past',
  '-겠어요 · 지금 보고':'guessing from what you see',
};
/* 영어가 제목이고 한국어는 그 뒤에 부제와 같은 얼굴로 선다(검수 7과 · 어휘).
   괄호는 지웠다 — 묶음 이름이 제목 안에서 이미 갈라져 보인다. */
/* 영어 이름이 한국어와 같으면 속삭임을 달지 않는다 — 「안 ↔ -지 않다」처럼
   문법 이름 그대로인 묶음에서 같은 말이 두 번 서 있었다(28-18). */
const VTITLE = t => { const k = String(t).trim(); const en = TAGEN[k];
  return (en && en !== k) ? `${en} <i class='vko'>${k}</i>` : k; };
  /* 말하기 전 · 어휘 제시 (한 슬라이드에 6개) */
  /*
   * 시간 말 한 장 — 카드를 뒤집지 않고 줄로 늘어놓는다.
   *
   * 「오늘 · 지금 · 보통」은 외울 낱말이 아니라 「에를 붙이느냐」를 가를
   * 말이다. 카드 여덟 장을 하나씩 뒤집으면 그 가름이 안 보인다. 한 판에
   * 늘어놓고 <b>색으로 가른다 — 빨강은 에 없이, 검정은 에를 붙여</b> 쓴다.
   * 날은 한 축 위에 세워 그저께 → 모레의 순서가 눈에 남게 한다.
   * 이 장만 도현체다 — 낱말을 크게 보이는 장이라 제목 글씨와 한 얼굴로 둔다.
   */
  const TIMESLIDE = (v, n) => ({name:`어휘 ${CIRC(n)} ${v.tag}`, html:`
    <div class="eyebrow">새 단어 ${n+1} / ${VTOT}</div>
    <div class="tl">
      <h1 class="slide-title tl-title">${v.icon} ${v.en} <i>${v.tag}</i></h1>
      <div class="tl-sheet">
        ${v.rows.map(r => `<span class="tl-lab">${r.k}</span>
          <div class="tl-row${r.axis ? ' axis' : ''}${r.axis || r.at ? ' grid5' : ''}">
            ${r.ws.map(([w, g, e], j) => `<span class="tl-w${e ? ' e' : ''}"${r.at ? ` style="grid-column:${r.at[j] + 1}"` : ''}><b>${w}</b><i>${g}</i></span>`).join('')}
          </div>`).join('')}
      </div>
      <div class="tl-rule">
        <span class="tl-key"><span class="red">Red no 에</span> &nbsp;·&nbsp; <span class="blk">Black + 에</span></span>
        ${v.rule.map(x => `<span>${x}</span>`).join('')}
      </div>
    </div>`});

  /*
   * 강의안에 세울 어휘 묶음(대표님 2026-10-02 고르기).
   * hide:true 는 강의안에서만 뺀다 — 학생용 책(print/cards.mjs 의 묶음 번호)과 상황 장 연결은 그대로 둔다.
   * set:true 가 잇달아 놓인 묶음은 연습 없이 <b>세트 소개 한 장</b>으로 모은다(21과 반대말 여섯 짝) — 누를 것이 없다.
   */
  const VSHOW = [];
  (L0.vocab||[]).forEach(v => {
    if(v.hide) return;
    if(v.set){ const last = VSHOW[VSHOW.length - 1]; if(last && last.sets) last.sets.push(v); else VSHOW.push({ sets:[v] }); }
    else VSHOW.push(v);
  });
  const VTOT = VSHOW.length;
  const SETSLIDE = (G, n) => ({name:`어휘 ${CIRC(n)} 세트`, html:`
    <div class="eyebrow">새 단어 ${n+1} / ${VTOT}</div>
    <h1 class="slide-title">${G[0].setTitle || '🔁 WORD SETS'}</h1>
    <div class="setslide">${MEMO(G[0].memo, true)}</div>
    <div class="wsets${G.some(v => v.pic) ? ' haspic' : ''}">${G.map(v => { const row = (v.items||[]).map(it => `<div class="ws-w"><b>${it.w}</b><i>${it.g || ''}</i></div>`).join('<span class="ws-ar">↔</span>');
      /* 짝마다 그림(빠르다 · 쉽다는 움직이는 그림) — 그림 위 · 짝 아래(대표님 2026-10-10 21-18) */
      return v.pic ? `<div class="wset pic"><img class="ws-pic" src="/course/sample/scenes/${v.pic}.svg" alt=""><div class="ws-row">${row}</div></div>` : `<div class="wset">${row}</div>`; }).join('')}</div>`});
  VSHOW.forEach((v,n) => out.push(v.sets ? SETSLIDE(v.sets, n) : v.layout === 'timeline' ? TIMESLIDE(v, n) : {name:`어휘 ${CIRC(n)} ${v.tag}`, html:`
    <div class="eyebrow">새 단어 ${n+1} / ${VTOT}</div>
    <h1 class="slide-title">${v.icon} WORDS : ${VTITLE(v.tag)}</h1>
    <p class="slide-sub">${v.sub || '마지막 글자에 <b>받침</b>이 있는지 보세요. 카드를 누르면 문법을 붙인 형태가 나옵니다.'}</p>
    ${/* 물음과 대답 꼴은 한 상자에 — 위 물음(Ask like this) · 아래 대답(Make it like this).
          따로 두 상자면 짝인 것이 안 보였다. 상자는 글 길이만큼만(대표님 2026-10-08 3과 03-15 · 03-16).
          물음은 교사가 만드는 묶음(noask)이라도 <b>문형은 걸어 둡니다</b> — 묶음이
          pat 을 손으로 적어 두었다면 그것은 보여 주려고 적은 것입니다(21-17). */''}
    ${(()=>{
      const pat = (v.pat || (!v.noask && vFrame(v))) ? `<div class="vpat"><span class="vpat-l">Make it like this</span><span class="vpat-k">${vFrame(v)}</span></div>` : '';
      /* patOnly — 물음 상자는 빼고 대답 꼴 상자만 가운데에(11-05 대표님 11과 「끝 시간·기한」). 물음(q)은 학생용 책이 쓰므로 데이터에 남긴다. */
      if(v.patOnly && pat) return `<div class="vqa-row">${pat.replace('class="vpat"', 'class="vpat vbox"')}</div>` + SEL();
      const a = v.noask ? null : vAsk(v);
      if(!a) return SEL() + pat;
      /* 한 줄에 「물음 상자 → 대답 꼴 상자」 — 위아래로 쌓던 두 줄을 한 줄로 줄여, 남는 높이는 카드가 나눠 쓴다.
         대답 상자는 핑크(글자 · 테 · 바탕) — 학생 대답 말풍선과 같은 색(같은 날 다시) */
      return `<div class="vqa-row">${ASK(a)}${pat ? `<span class="vqa-arr" aria-hidden="true">→</span>${pat.replace('class="vpat"', 'class="vpat vbox"')}` : ''}</div>` + SEL();
    })()}
    ${v.memo ? `<div class="setslide">${MEMO(v.memo, true)}</div>` : ''}
    ${/* 짝 둘만 놓는 묶음은 칸이 화면 높이만큼 늘어나 카드 한 장이 벽이 된다.
          두 장짜리 판은 따로 표시해 두고 가운데로 모아 알맞은 높이로 세운다(21-17). */''}
    <div class="vgrid${(v.items||[]).length === 2 ? ' pair2' : (v.items||[]).length === 4 ? ' quad' : (v.items||[]).length === 8 ? ' eight' : (v.items||[]).length === 12 ? ' cols4' : ''}" data-rows="${(v.items||[]).length === 8 ? 2 : Math.min(3, Math.ceil((v.items||[]).length / 3))}">
      ${VGRP(v.items, v.items.map(it=>{
        /* sp 는 규칙이 아니라 통째로 외우는 말입니다(「저도 그렇다」).
           같은 분홍으로 두면 앞말에 도를 붙이는 카드들과 섞여, 학생이
           「그렇다 + 도」라고 잘못 쪼갭니다. 연두로 따로 세워 둡니다. */
        /* sp 는 규칙대로 만드는 카드가 아니라는 표시다. sp:1 이면 연두,
           sp:'pink' 처럼 적으면 그 색으로 따로 세운다. */
        const cls = it.sp ? (it.sp === true || it.sp === 1 ? 'sp' : 'sp-' + it.sp)
          : it.b===true ? 'yes' : it.b===false ? 'no' : 'plain';
        const tag = typeof it.b === 'boolean' ? BTAG(it.w, it.b) : (it.t||'');
        /*
         * 고를 거리가 있는 카드.
         *
         * 답을 하나만 적어 두면 학생이 「먹다는 식당」이라고 외웁니다. 장소를
         * 두 개 보여 주고 학생이 고르게 하면 같은 동사로 두 문장이 나오고,
         * 고른 것이 곧 자기 말이 됩니다. 버튼 안에 버튼을 넣을 수 없어
         * 이 카드만 div 로 그립니다.
         */
        if(it.pick) return `<div class="vcard pickcard ${cls}">
          ${tag ? `<span class="vtag">${tag}</span>` : ''}
          ${/* 장소는 동사 <b>앞</b>에 — 「공원에서 찍어요」의 말 차례와 카드 차례를
               맞춘다(2026-09-24 대표님, 9과). */''}
          <span class="vpick">
            ${it.pick.map(p=>
              `<button class="vopt" type="button" data-say="${p.say}">
                 <i>${EMO(p.e)}</i><b>${p.w}</b>
               </button>`).join('')}
          </span>
          <span class="vemo">${V3PIC(it)}</span>
          <span class="vword">${BAT(it.w, it.b)}</span>
          <span class="ven">${VEN(it.g)}</span>
          <span class="vres"></span>
        </div>`;
        /*
         * 낱말 하나로는 문장이 안 되는 카드는 <b>두 걸음</b>으로 연다.
         *
         * 「매일」만 보고 「매일 공부해요」를 만들라고 하면, 공부하다를 학생이
         * 지어내야 한다. 그렇다고 처음부터 다 보여 주면 읽고 넘어간다.
         * 빨강을 누르면 함께 쓸 낱말이 나오고, 파랑을 누르면 문장이 된다 —
         * 빙고와 같은 색이라 교실에서 따로 설명할 것이 없다.
         */
        if(it.v) return `<div class="vcard step ${cls}">
          ${tag ? `<span class="vtag">${tag}</span>` : ''}
          <span class="vemo">${V3PIC(it)}</span>
          ${/* 짝 동사는 명사 <b>옆에</b> 같은 크기로 선다. 아래에 작게 두면
              명사만 낱말로 보이고 동사는 딸린 설명처럼 읽힌다. */''}
          ${/* 짝 낱말이 문장에서 <b>앞에</b> 오는 묶음은 카드에서도 앞에 세운다 —
               「주다 친구」가 아니라 「친구 주다」다. 카드 순서와 문장 순서가 거꾸로면
               학생이 카드를 읽은 그대로 「주다 친구에게」라고 말한다(14-15).
               묶음에 vfirst 를 적어 둔 데서만 바꾼다 — 11 · 12과는 동사가 앞이다. */''}
          ${/* 2026-10-09 대표님(06-17 · 07-16~18 · 10-20) — 짝이 명사(밥 · 날씨 · 7:00)이고 카드 낱말이
               서술어(…다)면 언제나 명사가 앞이다: 「밥 먹다」 · 「날씨 덥다」 · 「7:00 일어나다」.
               과 번호가 아니라 낱말 모양으로 가린다. */''}
          <span class="vpair">${(v.vfirst || (/다$/.test(String(it.w).replace(/<[^>]+>/g, '').trim()) && !/다$/.test(String(it.v).replace(/<[^>]+>/g, '').trim())))
            ? `<span class="vmid">${it.v}</span><span class="vword">${BAT(it.w, it.b)}</span>`
            : `<span class="vword">${BAT(it.w, it.b)}</span><span class="vmid">${it.v}</span>`}</span>
          <span class="ven">${VEN(it.g)}</span>
          <span class="vpick2">
            <button class="vdot t" type="button" data-step="1" title="함께 쓸 낱말"></button>
            <button class="vdot s" type="button" data-step="2" title="문장으로"></button>
          </span>
          <span class="vres">${ANS(it.r)}</span>
        </div>`;
        /* pv 는 이 낱말과 짝이 되는 동사다. 「학교에」만 보여 주고 답이
           「학교에도 가요」면 학생은 가다를 어디서 가져왔는지 모른다. */
        /*
         * 짝 동사는 낱말 <b>옆에</b> 선다(15-19).
         *
         * 오른쪽 위에 작은 알약으로 얹어 두었더니 카드 꼭지에 붙은 딱지처럼
         * 읽혀, 학생은 「학교에」만 보고 동사를 지어냈다. 문장에서 둘이 나란히
         * 오는 말이므로 카드에서도 나란히 두고 크기를 맞춘다 — 파랑 알약은
         * 그대로다. 학생이 말할 것은 「학교에도 가요」 한 덩이다.
         */
        /*
         * 답이 없는 카드는 <b>누를 것이 없다</b>.
         *
         * 「손을 다쳐서 · 길을 잃어서」처럼 이유만 보여 주고 문장은 학생이 만드는
         * 자리가 있다. 그 카드까지 단추로 그리면 교사가 눌러 보고 아무 일이
         * 없는 것을 확인하게 된다. 답이 없으면 판으로 그리고 눌리지 않게 둔다(30-19).
         */
        if(!it.r) return `<div class="vcard plain ${cls}" style="--wl:${CARDW(it)}">
          ${tag ? `<span class="vtag">${tag}</span>` : ''}
          <span class="vemo">${V3PIC(it)}</span>
          <span class="vword">${BAT(it.w, it.b)}</span>
          <span class="ven">${VEN(it.g)}</span>
        </div>`;
        return `<button class="vcard ${cls}${it.pv ? ' pvpair' : ''}${VLONG(it.r)}" type="button" style="--wl:${CARDW(it)}">
          ${tag ? `<span class="vtag">${tag}</span>` : ''}
          ${!it.pv && !V3HAS(it) && DUO(it) ? DUO(it) : `<span class="vemo">${V3PIC(it)}</span>
          ${it.pv
            ? `<span class="vpair"><span class="vword">${BAT(it.w, it.b)}</span><span class="vpv">${it.pv}</span></span>`
            : `<span class="vword">${BAT(it.w, it.b)}</span>`}`}
          <span class="ven">${VEN(it.g)}</span>
          <span class="vres">${ANS(it.r)}</span>
        </button>`;
      }))}
    </div>`}));

  /* 상황별 질문 — 하단에 앞에서 배운 단어를 함께 보여 주던 자리입니다.
     ⚠️ 지금은 내려 두었습니다(615행). 어떤 낱말을 「배운 것」으로 볼지는
     앞 과들이 무엇을 가르쳤는지가 정해 주는데 그 데이터가 아직 정확하지
     않습니다. 틀린 낱말을 「배운 단어」로 깔면 학생은 안 배운 말을 배운
     것으로 여깁니다. 데이터가 서면 615행 한 줄만 되살리면 됩니다.
     아래 bankOf 는 그때를 위해 그대로 두었습니다. */
  /*
   * 말하기 밑에 깔아 주는 낱말 주머니.
   *
   * v 에 묶음 이름을 여러 개 적을 수 있다. 한 묶음만 깔면 학생이 그 안에서만
   * 고른다 — 시각만 늘어놓으면 「아홉 시에 가요」에서 멈춘다. 때(아침·오후)를
   * 같이 깔아 줘야 「일요일 아침 아홉 시에」처럼 붙여 볼 생각을 한다.
   */
  const bankOf = s => {
    const sets = L0.vocab || [];
    if(!sets.length) return '';
    /* w 에 낱말을 그대로 적으면 어휘 묶음 대신 그것을 깐다. 대답 문형의
       빈칸이 어휘 묶음과 다른 자리일 때가 있다 — 「○○도 △△이에요」에서
       △△ 은 신분이라, 사람 묶음을 깔면 학생이 채울 말이 없다. */
    if(Array.isArray(s.w)) return `<div class="wbank"><span class="wb-label">배운 단어</span>` +
      s.w.map(w => `<span class="w">${w}</span>`).join('') + `</div>`;
    const want = [].concat(s.v ?? []);
    const hits = want.length ? sets.filter(v => want.includes(v.tag))
                             : sets.filter(v => v.tag === s.t);
    /* 줄로 그리는 묶음(시간 말)에는 카드가 없다 — 빈 손으로 받는다. */
    const items = hits.length ? hits.flatMap(v => v.items || [])
                              : sets.flatMap(v => v.items || []).slice(0,12);
    const seen = new Set();
    return `<div class="wbank"><span class="wb-label">배운 단어</span>` +
      items.filter(it => !seen.has(it.w) && seen.add(it.w))
           /* pv 는 그 낱말과 짝이 되는 동사다. 명사만 깔아 두면 학생이
              「가위로」까지 말하고 멈춘다 — 뒤에 붙일 동사가 없어서다. */
           .map(it => `<span class="w">${it.w}${it.pv ? `<i>${it.pv}</i>` : ''}</span>`)
           .join('') + `</div>`;
  };
  /* hide:true 상황 장은 강의안에서만 뺀다 — 과마다 2장쯤(대표님 2026-10-03 고르기). 어휘 장 물음(vAsk) · 학생용 책 연결은 그대로 */
  const SITS = (L0.sit||[]).filter(s => !s.hide);
  /* 말하기 그림(2026-10-08 대표님) — data/sitpic.js 가 과 문법 이름마다 보이는 상황 차례대로 그림 파일을 준다(scenes/sp-과-번호.svg).
     그림이 있으면 물음 · 영어는 위 한 줄 전체, 왼쪽에 문형 · 대답, 오른쪽에 그림. 네 · 아니요 대답은 위아래(문장이 잘리지 않게).
     넘치면 fitSit 이 차례로 맞춘다 — 글자 크기는 줄이지 않는다. 그림이 없으면 예전 모양(이모티콘 칸) 그대로. */
  const SPIC = ((typeof SITPIC !== 'undefined' && SITPIC) || {})[L0.key] || [];
  /* 지시 줄(대표님 2026-10-09) — [주제] 딱지를 빼고 맨 윗줄을 「빨간 세모 · Free talking 알약 · 영어 지시문」으로.
     data/sitgo.js 가 장마다 go(지시) · free · memo(교사 메모, 번호 줄) · alt(바꿔 묻기 딱지)를 준다. 학생용 책은 이 파일을 읽지 않는다. */
  const SGO = ((typeof SITGO !== 'undefined' && SITGO) || {})[L0.key] || [];
  const ACTS1 = ((typeof ACT1_BOARDS !== 'undefined' && ACT1_BOARDS) || {})[L0.key] || [];
  /*
   * 말하기 활동판 — 말하기 장 바로 다음 한 장(대표님 2026-10-09, 2급 활동판 모양을 1급에).
   * 위: 지시 줄(빨간 세모 + 영어 지시) · 오른쪽 위 교사 메모 「이 활동판의 차례」, 가운데 A 줄 아래 B 줄 문형 박스, 아래: 판.
   * 판 갈래 — 그림 카드(c4 · g6 · one, 카드 아래 낱말 -다 꼴 · times 면 시각 쓰는 칸) /
   *   fam 가족 메모 · route 두 곳 쓰기 · contact 연락 방법 · menu 차림표 · cal 다음 수업 정하기 · sched2 두 일정표 · pick 맡기 · ox 할 수 있어요.
   */
  const ROWN = ['①', '②', '③', '④', '⑤', '⑥', '⑦', '⑧'];
  const boardSlide = (a, n) => {
    const pat = a.p.map(r => { const m = String(r).match(/^([AB])\.\s*(.*)$/); return `<span class="k">${m ? m[1] + '.' : ''}</span><span>${m ? m[2] : r}</span>`; }).join('');
    const inp = (ph, lab) => `<input type="text" class="ab-in" placeholder="${ph || ''}" aria-label="${lab || ph || '쓰기'}">`;
    let body = '';
    if(a.kind === 'fam'){
      const col = (who, cls) => `<div class="fam-col ${cls}"><div class="fam-band">${who}</div>
        <div class="fam-h"><span>Family</span><span>Job</span></div>
        ${[0, 1, 2, 3].map(j => `<div class="fam-row">${inp(j ? '' : '아버지', `${who} 가족 ${j + 1}`)}${inp(j ? '' : '회사원', `${who} 가족 ${j + 1} 직업`)}</div>`).join('')}</div>`;
      body = `<div class="fam2">${col('선생님 가족', 'teacher')}<div class="td-cut"></div>${col('학생 가족', 'student')}</div>`;
    } else if(a.kind === 'route'){
      body = `<div class="route">
        <div class="rt-row ex"><span class="rt-who">보기</span><span class="rt-fix">${a.sample[0]}</span><span class="rt-arr">→</span><span class="rt-fix">${a.sample[1]}</span></div>
        ${a.rows.map((w, j) => `<div class="rt-row"><span class="rt-who ${w === '선생님' ? 't' : 's'}">${w}</span>${inp('', `${w} 출발 ${j + 1}`)}<span class="rt-arr">→</span>${inp('', `${w} 도착 ${j + 1}`)}</div>`).join('')}</div>`;
    } else if(a.kind === 'contact'){
      const ic = a.icons.map((m, j) => `<span class="ct-ic"><img src="/course/sample/scenes/${m}.svg" alt=""><b>${a.ways[j]}</b></span>`).join('');
      body = `<div class="contact${a.two ? ' two' : ''}"><div class="ct-top">${ic}</div>
        ${a.two ? '<div class="ct-g">' : ''}${Array.from({ length: a.rows }, (_, j) => `<div class="ct-row"><span class="pk-n">${ROWN[j]}</span>${inp(j ? '' : '엄마', `연락하는 사람 ${j + 1}`)}<span class="ct-b">${a.ways.map(w => `<button type="button" onclick="actOne(this)">${w}</button>`).join('')}</span></div>`).join('')}${a.two ? '</div>' : ''}</div>`;
    } else if(a.kind === 'menu'){
      /* 18과 차림표(대표님 2026-10-10 18-19) — 음료마다 그림 + 이름, 왼쪽 셋 | 점선 | 오른쪽 셋 */
      const mnRow = ([w, v, ic]) => `<div class="mn-row">${ic ? `<img class="mn-ic" src="/course/sample/scenes/${ic}.svg" alt="">` : ''}<span>${w}</span><i></i><b>₩${v}</b></div>`;
      const half = Math.ceil(a.items.length / 2);
      body = `<div class="menu"><div class="mn-board"><div class="mn-t">${a.title}</div><div class="mn-cols"><div class="mn-col">${a.items.slice(0, half).map(mnRow).join('')}</div><div class="mn-cut"></div><div class="mn-col">${a.items.slice(half).map(mnRow).join('')}</div></div></div></div>`;
    } else if(a.kind === 'cal'){
      /* 누르는 법을 표 위 왼쪽에(대표님 2026-10-10 18-21) — 1번 = ✕, 2번 = 수업 */
      body = `<div class="cal"><div class="cal-key"><span class="ck-n">1번</span><span class="ck-c" data-v="x">✕</span><span class="ck-n">2번</span><span class="ck-c" data-v="go">수업</span></div><div class="cal-g" style="--d:${a.days.length}"><span></span>${a.days.map(d => `<span class="cal-d">${d}</span>`).join('')}
        ${a.slots.map(s => `<span class="cal-s">${s}</span>${a.days.map(d => `<button type="button" class="cal-c" aria-label="${d}요일 ${s}" onclick="actCal(this)"></button>`).join('')}`).join('')}</div></div>`;
    } else if(a.kind === 'sched2'){
      const DAYS = ['토', '일'], SL = ['오전', '오후'];
      const tb = t => `<div class="sch ${t.who === '선생님' ? 'teacher' : 'student'}"><div class="fam-band">${t.who}</div><div class="sch-g"><span></span>${DAYS.map(d => `<span class="cal-d">${d}요일</span>`).join('')}
        ${SL.map(s => `<span class="cal-s">${s}</span>${DAYS.map(d => { const v = t.cells[`${d} ${s}`]; return `<span class="sch-c${v ? ' busy' : ''}">${v || ''}</span>`; }).join('')}`).join('')}</div></div>`;
      body = `<div class="sch2">${tb(a.tables[0])}<div class="td-cut"></div>${tb(a.tables[1])}</div>`;
    } else if(a.kind === 'pick'){
      body = `<div class="pkb big${a.two ? ' two' : ''}">${a.items.map((t, j) => `<div class="pk-row"><span class="pk-n">${ROWN[j]}</span><span class="pk-t">${t}</span><span class="pk-who" data-who="">?</span><span class="pk-b"><button type="button" data-v="t" onclick="actPick(this)">선생님</button><button type="button" data-v="s" onclick="actPick(this)">학생</button></span></div>`).join('')}</div>`;
    } else if(a.kind === 'ox'){
      body = `<div class="oxb oxg">${a.items.map((t, j) => `<div class="ox-tile"><div class="ox-t"><span class="pk-n">${ROWN[j]}</span>${t}</div>${a.cols.map(c => `<div class="ox-who"><span>${c}</span><span class="ox-c"><button type="button" class="o" onclick="actOX(this)">O</button><button type="button" class="x" onclick="actOX(this)">X</button></span></div>`).join('')}</div>`).join('')}</div>`;
    } else {
      const one = a.img.length === 1;
      body = `<div class="row ${a.kind}">${a.img.map((m, j) => a.you === j ? `<div class="sc you"><span class="n">${ROWN[j]}</span><div class="you-t">You!</div></div>` : `<div class="sc">${one ? '' : `<span class="n">${ROWN[j]}</span>`}<img src="/course/sample/scenes/${m}.svg" alt="">${a.caps && a.caps[j] ? `<div class="cap">${a.caps[j]}${a.capsEn && a.capsEn[j] ? `<span class="cap-en">${a.capsEn[j]}</span>` : ''}</div>` : ''}${a.times ? `<div class="tm"><label><span>선생님</span>${inp('', `${a.caps[j]} 선생님 시각`)}</label><label><span>학생</span>${inp('', `${a.caps[j]} 학생 시각`)}</label></div>` : ''}</div>`).join('')}</div>`;
    }
    const tm = a.teach ? MEMO(a.teach.map((x, i) => `${i + 1}. ${x}`).join('<br>'), true) : '';
    return { name:`활동판 ${CIRC(n)}`, html:`
    <div class="eyebrow">연습 ④ · 말하기 활동</div>
    <div class="card actb k-${a.kind}">
      <div class="ab-head"><div class="sf-go"><span class="tri" aria-hidden="true"></span><span class="t">${a.go}</span></div><div class="pat"><span class="pat-l">보기<i>Example</i></span>${pat}</div>${tm}</div>
      ${body}
    </div>`};
  };
  SITS.forEach((s,n) => { const pic = SPIC[n], g = SGO[n] || {}; const memo = g.memo || s.memo; out.push({name:`상황 ${CIRC(n)} ${s.t}`, html:`
    <div class="eyebrow">연습 ④ · 묻고 답해요</div>
    <div class="card sitfull s${n+1}${pic ? ' withpic' : ''}">
      <div class="sf-head">
        ${pic ? '' : `<div class="sf-icon">${s.i}</div>`}
        ${g.go ? `<div class="sf-go"><span class="tri" aria-hidden="true"></span>${g.free ? '<span class="ft-pill">Free talking</span>' : ACTS1.some(a => a.sit === n) ? '<span class="ft-pill act">Activity</span>' : ''}<span class="t">${g.go}</span></div>` : `<div class="sf-tag">[ ${s.t} ]</div>`}
        <div class="sf-count">${n+1} / ${SITS.length}</div>
        ${/* 말하기 장 교안 — 무엇을 어떤 차례로 할지(대표님 2026-10-08) */''}${memo ? MEMO(memo, true) : ''}
      </div>
      ${pic ? '<div class="sf-top">' : ''}
      ${/* 질문은 한 줄에 선다 — 글자 수를 넘겨 주고 CSS 가 칸 폭에 맞춰 글씨를 줄인다(21-24). */''}
      <div class="sf-q" style="--qlen:${[...String(SLOT(s.q)).replace(/<[^>]+>/g, '')].length}${s.qz ? `;zoom:${s.qz}` : ''}">${SLOT(s.q)}</div>
      <div class="sf-en">${s.qen}</div>
      ${pic ? '</div><div class="sf-txt">' : ''}
      ${ s.prep ? `<div class="sf-prep"><span class="pl">미리 안내</span><span class="pt">${s.prep}</span></div>` : '' }
      ${ (s.p || L0.pat) ? `<div class="sf-pat"><span class="pl">대답 문형</span><span class="pt">${B(s.p || L0.pat)}</span></div>` : '' }
      ${ s.m2
          ? `<div class="sf-answers">
               <div class="sf-model yn-y"><span class="lbl">${s.mL || '네'} — 대답 예시</span>${L(s.m, B)}</div>
               <div class="sf-model yn-n"><span class="lbl">${s.m2L || '아니요'} — 대답 예시</span>${L(s.m2, B)}</div>
             </div>`
          : `<div class="sf-model"><span class="lbl">대답 예시</span>${L(s.m, B)}</div>` }
      ${ g.alt ? `<div class="sf-alt"><span class="alt-pill">바꿔 묻기</span><span class="cues">${g.alt.map(c => `<span class="cue">${c}</span>`).join('')}</span></div>` : '' }
      ${pic ? `</div><figure class="sf-pic"><img src="/course/sample/scenes/${pic}.svg" alt=""></figure>` : ''}
      ${/* 배운 단어 주머니를 잠시 내려 두었습니다. 되살릴 때 → ${bankOf(s)} */ ""}
    </div>`}); ACTS1.filter(a => a.sit === n).forEach(a => out.push(boardSlide(a, n))); });

  /* 16 · 마무리 */
  /*
   * 마무리 한 장.
   *
   * 명사 + 이다는 불규칙이 아니므로 불규칙 아래에 상자를 따로 세운다.
   * 주의점은 여기서 뺀다 — 문형 · 예문 · 규칙표 · 주의점이 한 화면에 다
   * 있으면 어디를 보라는 것인지 알 수 없다. 바로 다음 장에 크게 놓는다.
   */
  /* 제목 한 줄의 너비(글자 폭 단위) — 가장 긴 줄만 센다. 한글 1, 영문 · 기호 0.58.
     작은 한국어 곁말(<i>)은 뺀다. 세로로 쌓는 꼴(·)은 첫 줄에 첫 꼴만 선다. */
  const WLEN = (pos, ft) => {
    const plain = s => String(s).replace(/<i>[^]*?<.i>/g, '').replace(/<[^>]+>/g, '');
    const w = s => [...plain(s)].reduce((a, c) => a + (/[가-힣ㄱ-ㅣ○△□]/.test(c) ? 1 : 0.58), 0);
    const lines = String(pos + ' + ' + ft).split(/<br\s*\/?>/);
    const stacked = lines.flatMap((ln, i) => i === 0 ? [ln.split(/\s*·\s*/)[0], ...ln.split(/\s*·\s*/).slice(1)] : [ln]);
    return Math.max(4, ...stacked.map(w)).toFixed(1);
  };
  const WSPLIT = splitIrr(L0.rules);
  const wrow = (r, cls) => `<div class="wrow${cls ? ' ' + cls : ''}"><span class="k ${r.kc || ''}">${KEN(r.k)}</span>` +
    /* fw 는 마무리 장에서만 쓰는 이름 — 좁은 칸에서 줄을 어디서 가를지 적어 둔다(16과). */
    `<span class="f ${[cls, r.c].filter(Boolean).join(' ')}">${String(FNO(r.fw || r.f)).replace(/^(\s*)([+→])\s*/, '$1<span class="fsign">$2 </span>')}</span>` +
    /* opp 는 반대말 짝 — ↔ 를 달아 아랫줄에 세운다(3과 있어요 ↔ 없어요).
       brk 는 화살표째 아랫줄로 내린다 — 한 줄에 안 들어가는 짝(4과 학생이 아니에요). */
    ((r.opp || r.brk) && r.ex[0][1] !== undefined
      ? `<span class="e opp${r.brk ? ' brk' : ''}"><span>${r.ex[0][0]}</span><span><b class="oa">${r.opp ? '↔' : '→'}</b>${ENPILL(r.ex[0][1]) || FNO(r.ex[0][1])}</span></span></div>`
      : `<span class="e">${r.ex[0][0]}${r.ex[0][1] === undefined ? '' : ' → ' + (ENPILL(r.ex[0][1]) || FNO(r.ex[0][1]))}</span></div>`);
  const sumRows = (L0.rules.rows || []).map(r => wrow(r, '')).join('')
                + WSPLIT.irr.map(r => wrow(r, 'irr')).join('');
  const nounRows = WSPLIT.noun.map(r => wrow(r, 'noun')).join('');
  /*
   * 형태소 표가 길면 <b>이다는 제 장으로</b> 나간다(2026-09-20 대표님 검수 23-27).
   *
   * 23과는 규칙 셋에 불규칙 넷이라 일곱 줄인데, 그 아래에 이다 상자까지 서면서
   * 표 맨 윗줄이 카드 위로 잘려 나갔다 — 첫 줄이 안 보이면 그 과가 가르치는
   * 꼴이 무엇인지부터 모른다. 과 번호가 아니라 <b>줄 수</b>로 가른다.
   */
  const 정리줄 = (L0.rules.rows || []).length + WSPLIT.irr.length;
  const 이다따로 = !!nounRows && 정리줄 >= 6;
  const NOUNBOX = `<div class="card wsum wnoun"><h3>📎 Noun + 이다 — not irregular <i>명사 + 이다 — 불규칙이 아닙니다</i></h3>${nounRows}</div>`;
  /*
   * 한눈에 — 바로 뒤 CHECK 장과 같은 틀(노란 테 카드 · 노란 알약 이름표 · 위쪽 정렬), 대표님 2026-10-08 시안 3 확정.
   * 왼쪽 Form: 문법 제목 · 영어 풀이 · 꼴 카드(받침 O · X 과는 두 장, 아/어/해는 세 장 위아래) | 점선 | 오른쪽 Today's sentence(목표 문장).
   * 오른쪽 형태소 표는 뺐다 — 제목 · 형태소 정리 장과 겹치고, 주의점은 CHECK 가 맡는다.
   */
  const GL_PLAIN = x => String(x || '').replace(/<i>[\s\S]*?<\/i>/g, '').replace(/<[^>]+>/g, '').trim();
  const GL_ROWS = (() => {
    const rows = (L0.rules && L0.rules.rows) || [];
    return rows.some(r => /^받침 O/.test(r.k || '')) ? rows.filter(r => /^받침 [OX]/.test(r.k || ''))
      : rows.filter(r => !/모음 축약|Vowels merge/.test(r.k || '') && (r.ex || []).length).slice(0, 3);
  })();
  const GL_G = r => r.c === 'g2' ? 'g2' : r.c === 'g3' ? 'g3' : 'g1';
  const GL_CARD = r => {
    const ex = (r.ex || [])[0] || [], b = GL_PLAIN(ex[0]), res = GL_PLAIN(ex[1]);
    const head = res.startsWith(b) ? b : '', tail = res.startsWith(b) ? res.slice(b.length) : res;
    return `<div class="gl-row ${GL_G(r)}"><span class="gl-k">${GL_PLAIN(r.k)}</span><span class="gl-ex">${b}<span class="gl-ar">→</span>${head}<b>${tail}</b></span></div>`;
  };
  const GL_HERO = (L0.hero && L0.hero.ko) ? L0.hero : (L0.wrap.ex[0] || {});
  /* 목표 문장 색 = 그 문장이 쓴 꼴의 줄 색(공부해요 → 해요 줄 파랑) */
  const GL_HCLS = (() => {
    const t = GL_PLAIN([].concat(GL_HERO.ko || []).join(' ').replace(/\[\[|\]\]/g, ''));
    const hit = GL_ROWS.find(r => { const res = GL_PLAIN(((r.ex || [])[0] || [])[1]); return res && t.includes(res.slice(-2)); });
    return hit ? GL_G(hit) : 'g1';
  })();
  out.push({name:'마무리 정리', html:`
    <div class="eyebrow">마무리</div>
    <h1 class="slide-title">👀 At a glance <i>한눈에</i></h1>
    <div class="card gl-box">
      <div class="gl-sec">
        <span class="gl-pill">Form</span>
        <div class="wgram" style="--wlen:${WLEN(POSLABEL(PT), FT)}"><span class="pos">${POSLABEL(PT)}</span><span class="op">+</span><em>${L0.wrapStack !== false
          ? String(POSFT(FT)).split(/\s*·\s*/).map(x => `<span class="stk">${x}</span>`).join('')
          : POSFT(FT)}</em></div>
        ${L0.mean && L0.mean.en ? `<div class="gl-mean">${GL_PLAIN(L0.mean.en)}</div>` : ''}
        ${GL_ROWS.length ? `<div class="gl-rows${GL_ROWS.length >= 3 ? ' col' : ''}">${GL_ROWS.map(GL_CARD).join('')}</div>` : ''}
      </div>
      <div class="gl-sec gl-right">
        <span class="gl-pill">Today's sentence<i>오늘의 표현</i></span>
        <div class="gl-goal ${GL_HCLS}"><div class="gl-ko">${L([].concat(GL_HERO.ko || []).flatMap(x => String(x).split(/(?<=[.?!])\s+(?=\S)/)), M)}</div><div class="gl-en">${L(GL_HERO.en || [], M)}</div></div>
      </div>
    </div>`});

  /*
   * 주의점 한 장. 마무리 장에서 덜어 낸 자리입니다.
   *
   * 이 장은 <b>학생이 들고 나가는 장</b>이라 영어가 위에 크게 서고 한국어가
   * 아래에 작게 깔린다. 영어는 같은 과의 warn 에 이미 적혀 있으므로 그것을
   * 그대로 가져다 쓴다 — 같은 말을 두 군데에 적어 두면 한쪽만 고쳐진다.
   * 아직 영어가 없는 줄은 한국어가 큰 줄을 지킨다(koonly).
   */
  /* 한눈에가 새 틀(Form | Today's sentence)로 바뀐 뒤 이 장만 혼자 남아 어색했다 — 뺀다(대표님 2026-10-10 23-26).
     명사 + 이다는 형태소 정리 · 명사 장이 맡는다. */
  if (false && 이다따로) out.push({name:'마무리 정리 · 이다', html:`
    <div class="eyebrow">마무리</div>
    <h1 class="slide-title">👀 At a glance <i>한눈에</i> · 명사 + 이다</h1>
    ${NOUNBOX}`});

  const warnEn = new Map((L0.warn || []).map(w => [w.ko, w.en]));
  /* 줄은 글 한 줄로 적어도 되고, 영어를 따로 붙이려면 {ko, en} 으로 적는다.
     주의할 점과 같은 문장이면 거기 적힌 영어를 그대로 빌려 온다. */
  const checks = (L0.wrap.tips || []).map(t => {
    const c = (typeof t === 'string') ? { ko: t } : t;
    return { ko: c.ko, en: c.en || warnEn.get(c.ko) || '' };
  });
  /*
   * CHECK 새 모양 — 2급과 같은 Point 한 장(data/check.js). 세트 문형은 1급에 없다.
   * 한국어 풀이(wrap.tips)는 장에서 빼고 오른쪽 위 교사 메모 알약으로 옮긴다.
   */
  const CK = (typeof CHECKB !== 'undefined' && CHECKB[L0.key]) || null;
  const ckNb = t => String(t).split(/s+(?=[→↔])/).map(x => `<span class="nb">${x}</span>`).join(' ');
  const CK_X = '<span class="oxb no"><svg class="oxi" viewBox="0 0 12 12" aria-hidden="true"><path d="M3.4 3.4 L8.6 8.6 M8.6 3.4 L3.4 8.6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg></span>';
  const CK_O = '<span class="oxb ok"><svg class="oxi" viewBox="0 0 12 12" aria-hidden="true"><path d="M2.6 6.4 L4.9 8.8 L9.4 3.4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></span>';
  const ckBad = t => `${CK_X}<span class="bad">${t}</span>`;
  const ckGood = t => `${CK_O}<span class="good">${t}</span>`;
  const ckOne = (k, p) =>
      k === 'no' ? `<span class="ckx1"><span class="ckq">${ckBad(p)}</span></span>`
    : k === 'ok' ? `<span class="ckx1"><span class="ckq">${ckGood(p)}</span></span>`
    : k === 'to' ? `<span class="ckx1"><span class="ckq"><span class="from">${p[0]}</span></span> <span class="ckq"><span class="ar">→</span><span class="good">${p[1]}</span></span></span>`
    : `<span class="ckx1 vs"><span class="ckq">${ckGood(p[1])}</span> <span class="ckq">${ckBad(p[0])}</span></span>`;
  /* 한 번호 안에서 여럿을 견주면 표로 세운다(대표님 2026-10-02 「정신 없다 — 견줄 수 있게 표로」).
     fix 둘 이상: ✓ 맞는 말 | ✕ 틀린 말 · to 둘 이상: 앞 → 뒤 · lab: 이름표 | 문장 */
  const ckTable = c =>
      c.k === 'grid' ? `<table class="cktb grid"><tbody>${(r => { const rows = []; for (let i = 0; i < r.length; i += 3) rows.push(r.slice(i, i + 3)); return rows; })(c.p || (L0.wrap.pairs || {}).rows || []).map(row => `<tr>${row.map(([a, b]) => `<td><b>${a}</b><i>—</i><em>${b}</em></td>`).join('')}</tr>`).join('')}</tbody></table>`
    : c.k === 'lab' ? `<table class="cktb lab"><tbody>${c.p.map(([l, t]) => `<tr><th>${l}</th><td>${t}</td></tr>`).join('')}</tbody></table>`
    : c.k === 'to' ? `<table class="cktb to"><tbody>${c.p.map(([x, y]) => `<tr><td class="from">${x}</td><td class="ar">→</td><td><span class="good">${y}</span></td></tr>`).join('')}</tbody></table>`
    : `<table class="cktb fix"><thead><tr><th class="ok">${CK_O}Correct</th><th class="no">${CK_X}Wrong</th></tr></thead><tbody>${
        c.p.map(([x, y]) => `<tr><td><span class="good">${y}</span></td><td><span class="bad">${x}</span></td></tr>`).join('')}</tbody></table>`;
  const ckIsTb = c => c.k === 'lab' || c.k === 'grid' || ((c.k === 'fix' || c.k === 'vs' || c.k === 'to') && c.p.length > 1);
  const ckPt = (c, n) => ckIsTb(c) ? `<li class="nob tb"><span class="mk">${n + 1}</span><div class="ckxw">
        <div class="ckxp">${ckTable(c)}</div>
        <div class="ckxn">${ckNb(c.en)}</div></div></li>` : `<li class="${c.k === 'to' ? 'nob' : ''}"><span class="mk">${n + 1}</span><div class="ckxw">
        <div class="ckxp">${c.p.map(p => ckOne(c.k, p)).join('')}</div>
        <div class="ckxn">${ckNb(c.en)}</div></div></li>`;
  const ckMemo = checks.map((c, n) => `<p><b>${n + 1}.</b> ${c.ko}</p>`).join('');
  const ckPairs = L0.wrap.pairs && !(CK && CK.pt.some(c => c.k === 'grid')) ? `<div class="wpairs">
      <h3>${L0.wrap.pairs.h}</h3>
      <div class="wpairgrid">${L0.wrap.pairs.rows.map(([a, b]) =>
        `<span class="wpairrow"><b>${a}</b><i>—</i><em>${b}</em></span>`).join('')}</div>
    </div>` : '';
  if(CK) out.push({name:'CHECK', html:`
    <div class="eyebrow">마무리 · 주의점</div>
    <h1 class="slide-title">💡 CHECK</h1>
    <div class="setslide">${MEMO(ckMemo, true)}</div>
    <div class="card wtip solo ckcard nosets${ckPairs ? ' withpairs' : ''}">
      <div class="ckpt"><h3 class="ckh">💡 Point <i>주의점</i></h3><ul>${CK.pt.map(ckPt).join('')}</ul></div>${ckPairs}
    </div>`});
  else if(checks.length) out.push({name:'CHECK', html:`
    <div class="eyebrow">마무리 · 주의점</div>
    <h1 class="slide-title">💡 CHECK</h1>
    <p class="slide-sub"><span class="sub-en">The places students miss most in today’s lesson.</span><span class="sub-ko">오늘 배운 것 가운데 학생들이 가장 자주 놓치는 자리입니다.</span></p>
    <div class="card wtip solo${L0.wrap.pairs ? ' withpairs' : ''}"><ul>
      ${checks.map((c,n)=>`<li${c.en ? '' : ' class="koonly"'}><span class="mk">${n+1}</span><div>
        ${c.en ? `<div class="en">${WARNK(MIRROR(c.ko, c.en, [FT, F, L0.key]))}</div>` : ''}<div class="ko">${WARNK(c.ko)}</div></div></li>`).join('')}
    </ul>${L0.wrap.pairs ? `<div class="wpairs">
      <h3>${L0.wrap.pairs.h}</h3>
      <div class="wpairgrid">${L0.wrap.pairs.rows.map(([a, b]) =>
        `<span class="wpairrow"><b>${a}</b><i>—</i><em>${b}</em></span>`).join('')}</div>
    </div>` : ''}</div>`});

  /*
   * 급을 맺는 장.
   *
   * 서른 과의 마지막 화면이 「CHECK」로 끝나면, 한 급을 다 걸어온 사람에게
   * 남는 마지막 인상이 주의할 점 목록이다. 여기까지 온 것을 한 번 말해 주고
   * 다음 급으로 가는 문을 열어 둔다. 급을 마치는 과에만 finale 을 적는다.
   *
   * 이 장에는 이름표(watermark)를 깔지 않는다 — 축하하는 화면에 남의 이름이
   * 옅게 깔려 있으면 축하가 되지 않는다. 그 일은 style.css 가 맡는다.
   */
  /*
   * 급의 출발 장 · 도착 장에 쓰는 조각(2026-09-24 대표님 A안).
   * 로고는 대표 로고 리본 상자 — 상자 그림 위에 ㅎ(먹빛) ㅂ(빨강)을 얹는다.
   * 사이트에서는 /box-mark.svg, 파일로 열 때는 public 폴더를 찾아간다.
   */
  const RIBBON = `<span class="rbox"><img src="/box-mark.svg" alt="Korean Box" onerror="this.onerror=null;this.src='../../../public/box-mark.svg'"><svg viewBox="52.5 5 296 296" aria-hidden="true"><text x="181" y="163" font-size="56" font-weight="900" fill="#14213d" text-anchor="middle" dominant-baseline="central">ㅎ</text><text x="236" y="163" font-size="56" font-weight="900" fill="#c8102e" text-anchor="middle" dominant-baseline="central">ㅂ</text></svg></span>`;
  /* 두 칸짜리 지하철 — 옆줄이 노선 색. 앞칸 · 뒤칸 색을 따로 주면 환승하는 기차가 된다. */
  const TRAIN = (front, back, cls = '') => {
    const car = (x, col, nose) => `<g transform="translate(${x},0)"><rect x="0" y="6" width="140" height="48" rx="${nose ? 0 : 10}" fill="#fff" stroke="#14213d" stroke-width="3"/>${nose ? '<path d="M110 6 H128 Q146 6 148 30 V54 H110 Z" fill="#fff" stroke="#14213d" stroke-width="3"/>' : ''}<rect x="0" y="36" width="${nose ? 148 : 140}" height="8" fill="${col}"/>${[12, 44, 76].map(wx => `<rect x="${wx}" y="14" width="24" height="16" rx="3" fill="#cfe3f5" stroke="#14213d" stroke-width="2"/>`).join('')}${nose ? '<path d="M114 14 H130 Q139 14 141 28 H114 Z" fill="#cfe3f5" stroke="#14213d" stroke-width="2"/>' : ''}<circle cx="26" cy="58" r="7" fill="#14213d"/><circle cx="110" cy="58" r="7" fill="#14213d"/></g>`;
    return `<svg class="ktrain ${cls}" viewBox="0 0 300 70" aria-hidden="true">${car(0, back, false)}<rect x="140" y="26" width="8" height="10" fill="#14213d"/>${car(148, front, true)}</svg>`;
  };

  /* 급을 여는 장 — 1과 맨 앞(opening 을 적은 과만). 노선 머리: 전광판 + 단원 역 + 기차. */
  if(L0.opening){ const O = L0.opening; out.unshift({name:O.name, html:`
    <div class="opening">
      <div class="op-left">
        ${RIBBON}
        <div class="op-word">Korean <b>Box</b></div>
        <div class="op-lvl"><span class="op-dot">${O.no}</span>${O.line}</div>
        <div class="op-en">${O.en}</div>
      </div>
      <div class="op-right">
        <div class="op-board"><span class="op-dot inv">${O.no}</span><div><b>${O.board}</b><span>${O.next}</span></div></div>
        <div class="op-stations" aria-hidden="true"><i class="op-rail"></i>${O.stops.map((s, i) => {
          const x = 3 + i * (94 / (O.stops.length - 1));
          return `<i class="op-st${i ? '' : ' first'}" style="left:${x}%"></i><span class="op-lab" style="left:${x}%">${s}</span>`; }).join('')}</div>
        ${TRAIN(O.color, O.color, 'op-train')}
      </div>
    </div>`}); }

  if(L0.finale) out.push({name:L0.finale.name, html:`
    <div class="finale">
      <div class="fin-mark" aria-hidden="true">${RIBBON}</div>
      <div class="fin-word">Korean <b>Box</b></div>
      <div class="fin-done">${L0.finale.done}</div>
      <div class="fin-next">
        <span class="fin-arw" aria-hidden="true">→</span>
        <a class="fin-go" href="${L0.finale.href}">
          <span class="fin-no">${L0.finale.no}</span>${L0.finale.go}
        </a>
      </div>
      <div class="fin-sub">${L0.finale.sub}</div>
      ${/* 도착 A안 — 1호선(파랑)에서 환승역을 지나 2호선(초록)으로 달리는 기차 */''}
      ${L0.finale.from ? `<div class="fin-rails" aria-hidden="true">
        <i class="fr1" style="background:${L0.finale.from}"></i><i class="fr2" style="background:${L0.finale.to}"></i>
        <i class="fxfer"></i><span class="fxlab">Transfer</span>
        <span class="fn1" style="color:${L0.finale.from}"><span class="op-dot" style="background:${L0.finale.from}">${L0.finale.no - 1}</span>Level ${L0.finale.no - 1}</span>
        <span class="fn2" style="color:${L0.finale.to}">Level ${L0.finale.no}<span class="op-dot" style="background:${L0.finale.to}">${L0.finale.no}</span></span>
        ${TRAIN(L0.finale.to, L0.finale.from, 'fin-train')}
      </div>` : ''}
    </div>`});

  /* 드릴 낱말이 앞 과에 없고 어휘 장에서 처음 나오는 과는 어휘를 드릴 앞으로
     당긴다(vocabFirst). 22과는 호랑이 · 토끼 · 얼음이 어휘로 배우기 전에
     단어 카드에서 먼저 나왔다(2026-09-24 대표님). */
  /* 주의할 점 안의 O · X 상자(warnox)도 팁 예문과 같은 배지 줄로 세운다(17-06).
     정리 장은 OXBADGE 가 선언되기 전에 그려지므로 다 그린 뒤에 한 번 훑는다. */
  out.forEach(s => {
    if (s.html && s.html.includes('class="warnox"'))
      s.html = s.html.replace(/<span class="warnox">([^]*?)<\/span><!--\/warnox-->/g,
        (_, b) => '<span class="warnox">' + OXBADGE(b) + '</span>');
  });

  if (L0.vocabFirst) {
    const isV = s => /^어휘 /.test(s.name);
    const vs = out.filter(isV);
    const rest = out.filter(s => !isV(s));
    const at = rest.findIndex(s => /^단어 카드/.test(s.name));
    if (vs.length && at >= 0) { rest.splice(at, 0, ...vs); out.length = 0; out.push(...rest); }
  }

  return out;
}

/* ══════════ 화면 구성 ══════════ */
/*
 * 주소 뒤에 붙이는 값들.
 *
 * 판매 페이지가 이 교재를 <iframe>으로 그대로 끼워 넣는다. 그때 어느 과의
 * 몇 번째 슬라이드를 열지 정해 주고, 상단 메뉴와 하단 내비는 감춘다.
 * 판매 페이지에 다시 그린 그림이 아니라 <b>진짜 화면</b>이 들어가야
 * 교재를 고칠 때 판매 페이지도 같이 바뀐다.
 *
 *   ?l=0&s=4&bare=1   0번째 과의 5번째 슬라이드, 껍데기 없이
 */
const QS = new URLSearchParams(location.search);
const BARE = QS.get('bare') === '1';
if(BARE) document.documentElement.classList.add('bare');

const stage  = document.getElementById('stage');
const dots   = document.getElementById('dots');
const picker = document.getElementById('picker');
let slides = [], idx = 0, lesson = 0;

/* ══ 목차 ══
   과가 많아 가로 버튼줄에 다 들어가지 않습니다. 단원별로 묶어 패널로 엽니다. */
const tocBtn   = document.getElementById('tocBtn');
const tocPanel = document.getElementById('tocPanel');

tocPanel.innerHTML = UNITS.map(u => `
  <section class="toc-unit">
    <h3><span class="uno">${u.no}단원</span> ${u.name}</h3>
    <div class="toc-row">${
      u.items.map(key => {
        const n = LESSONS.findIndex(l => l.key === key);
        return n < 0
          ? `<span class="pick soon">${key}<i>준비 중</i></span>`
          : `<button class="pick" type="button" data-n="${n}"><span class="pno">${n+1}</span>${key}</button>`;
      }).join('')
    }</div>
  </section>`).join('');

function markPicker(){
  [...tocPanel.querySelectorAll('.pick[data-n]')].forEach(b =>
    b.classList.toggle('on', +b.dataset.n === lesson));
  const L0 = LESSONS[lesson];
  const u  = UNITS.find(x => x.items.includes(L0.key));
  picker.innerHTML =
    `<span class="pnow"><span class="pno">${lesson+1}</span>${L0.key}</span>` +
    (u ? `<span class="punit">${u.no}단원 · ${u.name}</span>` : '');
}

const closeToc = () => tocPanel.classList.remove('open');
tocBtn.addEventListener('click', e => {
  e.stopPropagation();
  tocPanel.classList.toggle('open');
});
tocPanel.addEventListener('click', e => {
  const b = e.target.closest('.pick[data-n]');
  if(!b) return;
  lesson = +b.dataset.n;
  closeToc();
  loadLesson();
});
document.addEventListener('click', e => {
  if(!tocPanel.contains(e.target) && e.target !== tocBtn) closeToc();
});

/* 과 넘기기 — 마지막 슬라이드에서 → 를 한 번 더 누르면 다음 과로 */
function hopLesson(d){
  const n = lesson + d;
  if(n < 0 || n >= LESSONS.length) return false;
  lesson = n;
  loadLesson(d < 0 ? 'last' : 0);
  return true;
}

/* 장 이름으로 단계를 가른다. 1~4급 116과 모든 장이 이 순서로 떨어진다(2026-09-10 확인). */
const DOT_STAGES = ['들어가기','보여주기','익히기','말해 보기','마무리'];
const DOT_STAGE = name =>
  /^(문법 제시|오늘의 표현)/.test(name) ? 1 :
  /^(단어 카드|문장 연습|문장 만들기)/.test(name) ? 3 :
  /^(어휘|상황)/.test(name) ? 4 :
  /^(마무리|CHECK)/.test(name) ? 5 : 2;

/*
 * 형태소 장을 <b>재서</b> 나눈다 — 2급 splitMorph 를 옮겼다(대표님 2026-10-02 「장이 넘어갈 경우 2급과 같이」).
 *
 * 1급은 Rule · 불규칙(주의)을 <b>한 카드</b>에 둔다. 화면에 다 들어가면 그대로 둔다.
 * 넘치면 먼저 카드 안 구역(.xsec)을 제 카드로 떼고, 그래도 넘치면 맨 아래 카드부터
 * 다음 장으로 보낸다. 글자는 줄이지 않는다(⑩) — 더 뗄 것이 없을 때만 여백을 좁힌다.
 */
function splitMorph(stage){
  if(!stage || !stage.querySelectorAll || !stage.querySelector) return;   /* 맛보기 빌드의 가짜 DOM */
  const 켜져있던 = stage.querySelector('.slide.on');
  if(켜져있던) 켜져있던.classList.remove('on');
  const HEADBTN = '<span class="rt-hint"></span> <button class="mbtn rt-reset" type="button">↺ 다시 가리기</button>';
  const 갈래 = card => {
    const t = card.querySelector('.mt-title');
    if(!t) return '';
    if(t.classList.contains('noun')) return '명사';
    if(t.classList.contains('irr')) return /Watch out/.test(t.textContent) ? '주의' : '불규칙';
    return '';
  };
  const 이름달기 = (장, 밑) => {
    const 것 = [...장.querySelectorAll('.card')].map(갈래).filter(Boolean);
    장.dataset.name = 밑 + (것.length ? ' · ' + [...new Set(것)].join(' · ') : ' 이어서');
  };
  let 줄 = [...stage.querySelectorAll('.mstack[data-split]')];
  let 돌 = 0;
  while(줄.length && 돌++ < 40){
    const box = 줄.shift();
    const slide = box.closest('.slide');
    if(!slide) continue;
    const 밑이름 = box.dataset.split;
    slide.classList.add('on');
    /* 가린 칸을 다 연 채로 잰다 — 열면 보기가 두 줄이 되는 자리가 있다 */
    const 연것 = [...box.querySelectorAll('.rv:not(.show):not(.on)')];
    연것.forEach(r => r.classList.add('on'));
    const 닫기 = () => 연것.forEach(r => r.classList.remove('on'));
    const sr = slide.getBoundingClientRect();
    const 자리 = Math.min(sr.bottom - parseFloat(getComputedStyle(slide).paddingBottom || 0), box.getBoundingClientRect().bottom);
    const cards = [...box.children];
    const 바닥 = Math.max(...cards.map(c => c.getBoundingClientRect().bottom));
    if(바닥 <= 자리 - 20){ 닫기(); slide.classList.remove('on'); continue; }
    /* 떼기 전에 여백만 좁혀 본다 — 들어가면 한 카드 그대로(「장이 넘어갈 경우에만」 나눈다) */
    if(!box.classList.contains('packed')){
      box.classList.add('packed');
      const 바닥0 = Math.max(...cards.map(c => c.getBoundingClientRect().bottom));
      if(바닥0 <= 자리 - 20){ 닫기(); slide.classList.remove('on'); continue; }
      box.classList.remove('packed');
    }
    /* 한 카드 안의 불규칙 · 주의 구역을 먼저 제 카드로 뗀다 */
    const 구역 = box.querySelector('.xsec');
    if(구역){
      const 카드 = document.createElement('div');
      카드.className = 'card morphcard';
      const h = 구역.querySelector('.mt-title');
      if(h){ h.insertAdjacentHTML('beforeend', HEADBTN); 카드.appendChild(h); }
      구역.querySelectorAll('table').forEach(t => 카드.appendChild(t));
      구역.closest('.card').after(카드);
      구역.remove();
      닫기(); slide.classList.remove('on');
      줄.unshift(box);
      continue;
    }
    /* 카드가 하나만 남았는데도 넘치면 그 표의 줄을 반으로 갈라 같은 머리의 카드를 하나 더 만든다(5과 불규칙 여덟 줄) */
    if(cards.length < 2){
      const t = cards[0] && cards[0].querySelector('table.mt');
      const trs = t ? [...t.rows] : [];
      if(trs.length >= 4 && !cards[0].dataset.halved){
        const 둘 = cards[0].cloneNode(false);
        둘.dataset.halved = cards[0].dataset.halved = '1';
        const h = cards[0].querySelector('.mt-title');
        if(h) 둘.appendChild(h.cloneNode(true));
        const t2 = t.cloneNode(false);
        trs.slice(Math.ceil(trs.length / 2)).forEach(tr => t2.appendChild(tr));
        둘.appendChild(t2);
        cards[0].after(둘);
        닫기(); slide.classList.remove('on');
        줄.unshift(box);
        continue;
      }
      닫기(); slide.classList.remove('on'); continue;
    }
    if(!box.classList.contains('packed')){
      box.classList.add('packed');
      const 바닥2 = Math.max(...cards.map(c => c.getBoundingClientRect().bottom));
      if(바닥2 <= 자리 - 20){ 닫기(); slide.classList.remove('on'); continue; }
      box.classList.remove('packed');
    }
    /* 맨 아래 카드를 뗀다. 끝의 명사(.tail)는 한 짝으로 */
    let 끝 = cards.length - 1;
    if (cards[끝].classList.contains('tail')) while (끝 > 1 && cards[끝 - 1].classList.contains('tail')) 끝--;
    const 뗀것 = document.createDocumentFragment();
    cards.slice(끝).forEach(c => 뗀것.appendChild(c));
    if(box._이음 && box._이음.isConnected){
      box._이음.prepend(뗀것);
      이름달기(box._이음.closest('.slide'), 밑이름);
      닫기(); slide.classList.remove('on');
      줄.unshift(box, box._이음);
      continue;
    }
    const 새장 = document.createElement('section');
    새장.className = 'slide';
    const eye = slide.querySelector('.eyebrow');
    새장.innerHTML = eye ? '<div class="eyebrow">' + eye.innerHTML + '</div>' : '';
    const w = document.createElement('div');
    w.className = 'mstack';
    w.dataset.split = 밑이름;
    w.appendChild(뗀것);
    새장.appendChild(w);
    slide.after(새장);
    box._이음 = w;
    이름달기(새장, 밑이름);
    if(!/ · /.test(slide.dataset.name || '')) slide.dataset.name = 밑이름;
    닫기(); slide.classList.remove('on');
    줄.unshift(box, w);
  }
  stage.querySelectorAll('.mstack').forEach(el => {
    if(el.children.length === 1) el.replaceWith(el.firstElementChild);
    else el.removeAttribute('data-split');
  });
  /* 더 뗄 것이 없는데도 넘치는 장은 여백만 좁힌다 — 글자는 그대로 */
  stage.querySelectorAll('.slide').forEach(slide => {
    if(!/형태소/.test(slide.dataset.name || '')) return;
    const cards = [...slide.querySelectorAll('.card')];
    if(!cards.length) return;
    slide.classList.add('on');
    for(let 조임 = 0; 조임 < 3; 조임++){
      const sr = slide.getBoundingClientRect();
      const 자리 = sr.bottom - parseFloat(getComputedStyle(slide).paddingBottom || 0);
      const 바닥 = Math.max(...cards.map(c => c.getBoundingClientRect().bottom));
      if(바닥 <= 자리 + 0.5) break;
      slide.dataset.tight = String(조임 + 1);
    }
    slide.classList.remove('on');
  });
  if(켜져있던) 켜져있던.classList.add('on');
}

function loadLesson(start){
  /* 글꼴이 다 들어오기 전에 재면 작게 잡혀 한 장에 담았다가 잘린다 — 들어오면 한 번 더 짠다(2급과 같다) */
  if (typeof document !== 'undefined' && document.fonts && document.fonts.status !== 'loaded' && !loadLesson._글꼴) {
    loadLesson._글꼴 = true;
    const 과 = lesson;
    document.fonts.ready.then(() => {
      if (lesson !== 과) return;
      const 보던 = idx;
      loadLesson(start);
      if (보던) go(Math.min(보던, slides.length - 1));
    });
  }
  const data = buildSlides(LESSONS[lesson]);
  stage.innerHTML = data.map((s,n)=>
    `<section class="slide${n?'':' on'}" data-name="${s.name}">${s.html}</section>`).join('');
  slides = [...stage.querySelectorAll('.slide')];
  splitMorph(stage);
  slides = [...stage.querySelectorAll('.slide')];
  /* 점마다 슬라이드 번호를 박습니다.
     교사용 지침서가 「03–10」처럼 번호로 자리를 가리키므로, 점을 하나씩
     세어 찾는 대신 번호를 보고 바로 누릅니다. 좁은 화면에서는 점줄이
     통째로 숨으므로 아래 「SLIDE n / 전체」가 그 몫을 합니다. */
  /* 점을 단계로 묶어 칠하고, 단계가 바뀌는 자리에 틈을 둡니다 — 0과 한글과
     같은 다섯 단계입니다. 「말해 보기는 어디부터」가 점줄에서 바로 보입니다. */
  const st = slides.map(s => DOT_STAGE(s.dataset.name));
  /* 눈썹 줄에 장 번호를 박습니다 — 2급과 같다(대표님 2026-09-24 「1급도 장 번호를 만들어 줘」).
     학생이 「오늘 스물다섯 중 지금 열다섯」을 스스로 셉니다. 아래 「SLIDE n」은
     교사 바에 있어 뒷자리에서는 안 보이고, 점줄은 좁은 화면에서 통째로 숨습니다.
     맛보기 빌드의 가짜 DOM 은 querySelector 가 null 이라 이 블록을 건너뜁니다. */
  slides.forEach((s,n) => {
    const e = s.querySelector('.eyebrow');
    if(!e) return;
    e.classList.add('stg' + st[n]);
    e.insertAdjacentHTML('afterbegin', `<b class="sno">${n+1}</b>`);
  });
  dots.innerHTML = slides.map((s,n)=>
    `<button class="dot st${st[n]}${n && st[n] !== st[n-1] ? ' sep' : ''}${n?'':' on'}" type="button" title="${n+1} · ${DOT_STAGES[st[n]-1]} · ${s.dataset.name}">${n+1}</button>`).join('');
  [...dots.children].forEach((d,n)=>d.addEventListener('click',()=>go(n)));
  document.getElementById('tot').textContent = slides.length;
  document.getElementById('lcur').textContent = lesson + 1;
  document.getElementById('ltot').textContent = LESSONS.length;
  /* initWrite 가 먼저입니다. 릴레이의 「완성된 대화」가 WRITE_RE 로 문법소를
     칠하는데, 뒤에 두면 첫 판이 앞 과의 문법소로 칠해집니다. */
  initWrite(LESSONS[lesson]);
  initBingo(); initRelay(); initRuleTable(); markPicker();
  idx = 0; go(start === 'last' ? slides.length - 1 : 0);
}

/* ═══════════════════════════════════════════════════════════════
   예문 말풍선의 빈칸 — 적은 글에서 오늘의 문법소만 빨갛게
   ═══════════════════════════════════════════════════════════════ */

/*
 * 무엇을 빨갛게 할지는 그 과가 이미 알고 있다.
 *
 * 과마다 문법소 목록을 따로 적어 두면 61개를 손으로 적어야 하고, 예문을
 * 고칠 때마다 두 곳을 맞춰야 한다. 그럴 필요가 없다 — 예문에 이미 [[ ]] 로
 * 빨갛게 할 자리가 표시되어 있다. 그것을 그대로 읽어 쓴다.
 *
 * 두 가지로 잡는다.
 *  ① 예문에 나온 그대로 — 「도」, 「마다」, 「예쁜」
 *  ② 예문들의 공통 꼬리로 넓혀서 — 「할 거예요 · 쉴 거예요 · 만날 거예요」의
 *    공통 꼬리는 「거예요」다. 그러면 예문에 없는 「청소할 거예요」도 잡힌다.
 *    학생 말은 교재대로 나오지 않으니 이 넓히기가 있어야 쓸모가 있다.
 *
 * 둘 다 낱말 끝에서만 잡는다. 「도」를 아무 데서나 잡으면 「도서관」의 도가
 * 빨개진다.
 */
let WRITE_RE = [];

/* ══════════ 목표 형태에서 꼬리 뽑기 ══════════
 * 과가 스스로 적어 둔 form(예: '-(으)ㄹ까요?')에서 붙잡을 꼬리를 뽑는다.
 *
 * 왜 필요한가. 아래 hlPatterns 의 ② 규칙은 그 과 표시들의 「공통 꼬리」로
 * 넓히는데, 한 과에 여러 꼴이 섞이면(-겠어요 / -았겠어요) 공통 꼬리가
 * 사라져 규칙이 통째로 꺼진다. 그러면 교사가 예문에 없던 동사를 치는 순간
 * 아무 데도 안 빨개진다. form 은 그 과의 목표를 이미 적어 둔 칸이니
 * 거기에서 꼬리를 뽑으면 그런 과에서도 규칙이 산다.
 *
 * 뽑는 방법. (으)·(이) 는 넣은 꼴과 뺀 꼴을 둘 다 만들고, ㄴ·ㄹ·ㅂ 같은
 * 낱자가 섞이면 그 뒤의 완전한 글자만 쓴다 — 「(으)ㄹ까요」 → 「까요」.
 * 낱자는 앞 글자의 받침으로 들어가 버려서 글자로는 못 잡기 때문이다.
 */
const HL_GENERIC = new Set(['있어요','없어요','해요','어요','아요','여요',
                            '예요','이에요','합니다','입니다']);
/* 조사·흔한 낱말과 겹쳐 아무 데나 빨개지는 한 글자 꼬리는 뺀다.
   「-는」의 는을 규칙으로 만들면 「저는」의 는까지 빨개진다. */
const HL_BLOCK1 = new Set(['는','은','이','가','를','을','도','만','요','다',
                           '고','기','와','과','나','의','에','서','로']);
function formAnchors(form){
  if(!form || !form.trim().startsWith('-')) return [];   /* 안·못처럼 앞에 붙는 말은 꼬리가 아니다 */
  const extra = [];
  form = form.replace(/\(([^)]*)\)/g, (m, inner) => {
    if(inner.startsWith('-')){ extra.push(inner); return ''; }   /* (-죠?) 같은 딴이름 */
    return '(' + inner + ')';                                    /* (으)·(이) 는 남긴다 */
  });
  const branches = [...form.split('/'), ...extra].map(s => s.trim()).filter(Boolean);
  /* 「-(으)ㄹ 수 있어요 / 없어요」처럼 뒤 가지가 앞 가지의 끝만 바꾼 꼴을 되살린다 */
  for(let i = 1; i < branches.length; i++){
    if(!branches[i].startsWith('-')){
      const prev = branches[i-1].split(/\s+/); prev.pop();
      if(prev.length) branches[i] = prev.join(' ') + ' ' + branches[i];
    }
  }
  const out = new Set();
  for(let b of branches){
    b = b.replace(/^-/, '').replace(/[?!.]/g, '').trim();
    const vars = [b];
    for(const opt of ['(으)','(이)'])
      for(const v of [...vars])
        if(v.includes(opt)) vars.push(v.split(opt).join(''),
                                      v.split(opt).join(opt.slice(1,-1)));
    for(const v of vars){
      if(v.includes('(')) continue;
      let a = v;
      const j = [...a].map((c,i) => /[\u3131-\u318E]/.test(c) ? i : -1)
                      .filter(i => i >= 0).pop();
      if(j !== undefined) a = a.slice(j + 1);              /* 낱자 뒤만 남긴다 */
      a = a.trim();
      if(!a) continue;
      if([...a].length === 1 && HL_BLOCK1.has(a)) continue;
      if(!a.includes(' ') && HL_GENERIC.has(a)) continue;
      out.add(a);
      /* 「-아 주세요 / -어 주세요」는 뒷말만으로도 잡아야 「복사해 주세요」가 빨개진다 */
      const toks = a.split(/\s+/);
      if(toks.length > 1){
        const last = toks[toks.length - 1];
        if([...last].length >= 3 && !HL_GENERIC.has(last)) out.add(last);
      }
    }
  }
  return [...out];
}

function hlPatterns(L0){
  /* 과 데이터 어디에 있든 [[ ]] 를 모두 긁는다. 한 과의 표시는 모두 그 과의
     문법소다 — 어느 칸에서 나왔는지는 따지지 않아도 된다. */
  const marks = new Set();
  const dig = v => {
    if(!v) return;
    if(Array.isArray(v)) return v.forEach(dig);
    if(typeof v === 'object') return Object.values(v).forEach(dig);
    if(typeof v !== 'string') return;
    const re = /\[\[([^\]]+)\]\]/g;
    let m;
    while((m = re.exec(v))){
      const t = m[1].trim();
      if(/[가-힣]/.test(t)) marks.add(t);   /* 영어 뜻풀이 표시는 뺀다 */
    }
  };
  dig(L0);
  if(!marks.size) return [];

  const list = [...marks];
  const esc = s => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
                    .replace(/\s+/g, '\\s*');       /* 띄어쓰기는 있으나 없으나 */
  /* 낱말 끝에서만 — 뒤에 글자가 더 붙으면 다른 말이다.
     다만 뒤에 붙은 「도」 하나는 넘는다 — 「동생한테도」의 한테가 안 칠해졌다
     (2026-09-24 대표님, 14과 릴레이). 칠하는 것은 한테까지, 도는 그대로. */
  const END = '(?=도?(?![가-힣]))';
  const out = [];

  /* ② 공통 꼬리로 넓히기 — 두 글자 이상일 때만.
       한 글자(「요」 같은)로 넓히면 오늘 것이 아닌 말까지 다 빨개진다. */
  let tail = list[0];
  list.forEach(w => {
    let i = 0;
    while(i < tail.length && i < w.length &&
          tail[tail.length-1-i] === w[w.length-1-i]) i++;
    tail = tail.slice(tail.length - i);
  });
  tail = tail.replace(/^\s+/, '');
  if(tail.length >= 2) out.push(new RegExp('[가-힣]+\\s*' + esc(tail) + END, 'g'));

  /* ③ 그 과가 적어 둔 목표 형태로 넓히기 — ② 가 꺼지는 과를 살린다 */
  formAnchors(L0.form).forEach(a =>
    out.push(new RegExp('[가-힣]+\\s*' + esc(a) + END, 'g')));

  /* ① 예문에 나온 그대로 — 긴 것부터 봐야 「이 아니에요」가 「아니에요」에
       먹히지 않는다 */
  out.push(new RegExp('(?:' +
    list.sort((a,b) => b.length - a.length).map(esc).join('|') + ')' + END, 'g'));
  return out;
}

/* 글자만 세어 커서 자리를 기억한다. 태그가 몇 개든 사람이 보는 글자 수는 같다.
   줄바꿈(<br>)도 한 글자로 센다 — 아랫줄에 쓴 글자가 윗줄로 튀지 않게 하는 것이
   이 셈이 하는 일이다. */
function textOf(root){
  const w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT);
  let s = '', node;
  while((node = w.nextNode())){
    if(node.nodeType === 3){ s += node.data; continue; }
    /* 칸 끝에 세워 둔 자리(data-pad)는 우리가 그린 것이지 사람이 넣은 줄이
       아니다. 이것까지 세면 지울 때마다 한 줄씩 도로 서서, 글을 다 지워도
       칸이 안 줄어든다. */
    if(node.nodeName === 'BR'){ if(node.hasAttribute('data-pad')) continue; s += '\n'; continue; }
    /* 붙여넣기가 만들어 놓은 <div> 도 한 줄이다 */
    if(/^(DIV|P|LI)$/.test(node.nodeName) && s && !s.endsWith('\n')) s += '\n';
  }
  return s;
}
function caretOffset(el){
  const s = getSelection();
  if(!s.rangeCount || !el.contains(s.anchorNode)) return null;
  const cur = s.getRangeAt(0), r = cur.cloneRange();
  r.selectNodeContents(el);
  r.setEnd(cur.endContainer, cur.endOffset);
  return textOf(r.cloneContents()).length;
}
function setCaret(el, n){
  if(n == null) return;
  const w = document.createTreeWalker(el, NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT);
  const put = (node, off) => {
    const r = document.createRange();
    off == null ? r.setStartAfter(node) : r.setStart(node, off);
    r.collapse(true);
    const s = getSelection(); s.removeAllRanges(); s.addRange(r);
  };
  let seen = 0, node;
  while((node = w.nextNode())){
    if(node.nodeType === 3){
      if(seen + node.length >= n) return put(node, n - seen);
      seen += node.length;
    } else if(node.nodeName === 'BR'){
      if(node.hasAttribute('data-pad')) continue;   /* 세지 않은 자리 */
      seen += 1;
      if(seen >= n) return put(node, null);
    }
  }
}

function paintWrite(el, left){
  /*
   * Enter 를 치면 아랫줄에 씁니다.
   *
   * 칠하기는 칸을 통째로 다시 그립니다. 그래서 줄바꿈을 글자와 똑같이 한 칸으로
   * 세고, 다시 그릴 때 <br> 로 돌려놓아야 눌러 둔 줄이 도로 붙지 않습니다.
   * 마지막 줄이 비었으면 <br> 을 하나 더 둡니다 — 브라우저는 그래야 빈 줄을
   * 세워 줍니다. 다만 커서가 그 줄에 있을 때만입니다. 커서가 떠난 빈 줄은
   * 학생이 만들려던 줄이 아니라 칸 아래에 남은 자리일 뿐입니다.
   */
  let text = textOf(el);
  /* 손을 뗀 칸(left)에서는 커서를 되돌리지 않는다.
     되돌리면 그 칸 안에 선택 영역이 다시 서면서, 방금 누른 옆 칸에서
     포커스를 도로 뺏어 온다 — 선생님 칸에 한 줄 쓴 뒤 학생 칸을 눌러도
     글이 선생님 칸으로 들어가던 것이 이것이다. */
  let at = left ? null : caretOffset(el);
  /* 끝의 빈 줄은 커서가 설 자리다. 쓰고 있는 칸이면 남기고, 손을 뗀 칸에서만
     지운다 — 커서가 <br> 앞에 서는 판이 있어, 자리로 따지면 방금 넣은 줄을
     지워 버렸다. 그래서 「끝까지 써야 Enter 가 듣는」 것처럼 보였다. */
  if(text.endsWith('\n') && document.activeElement !== el) text = text.slice(0, -1);
  if(at != null) at = Math.min(at, text.length);
  renderWrite(el, text, at);
}

/*
 * 받은 글자를 그대로 칸에 그린다. 커서 자리도 받아서 그 자리에 도로 둔다.
 *
 * 줄을 넣는 일(Enter)은 브라우저에 맡기지 않는다. 브라우저가 넣은 줄은
 * 커서를 어디에 두는지가 판마다 달라, 다시 그릴 때 「커서가 없는 빈 줄」로
 * 보여 방금 넣은 줄이 지워지는 일이 있었다. 우리가 글자에 줄바꿈을 끼우고
 * 커서를 그 다음 자리로 일러 주면 판을 타지 않는다.
 */
function renderWrite(el, text, at){
  if(!text){ el.innerHTML = ''; return; }

  const hit = [];
  WRITE_RE.forEach(re => {
    re.lastIndex = 0;
    let m;
    while((m = re.exec(text))) hit.push([m.index, m.index + m[0].length]);
  });
  /* 손으로 칠한 자리(Ctrl+M)도 함께 */
  (el.dataset.hand || '').split('|').filter(Boolean).forEach(h => {
    const p = h.split(',').map(Number);
    if(p[1] <= text.length) hit.push(p);
  });
  hit.sort((x,y) => x[0] - y[0] || y[1] - x[1]);

  const esc = t => t.replace(/&/g,'&amp;').replace(/</g,'&lt;')
    .replace(/>/g,'&gt;').replace(/\n/g,'<br>');
  let html = '', pos = 0;
  hit.forEach(p => {
    if(p[0] < pos) return;                       /* 겹치면 앞의 것만 */
    html += esc(text.slice(pos, p[0])) + '<mark>' + esc(text.slice(p[0], p[1])) + '</mark>';
    pos = p[1];
  });
  /* 마지막이 줄바꿈이면 <br> 을 하나 더 — 빈 줄은 그래야 섭니다. 이 하나는
     우리가 세운 자리라고 표를 달아 둡니다(textOf 가 안 셉니다). */
  el.innerHTML = html + esc(text.slice(pos)) + (text.endsWith('\n') ? '<br data-pad="1">' : '');
  setCaret(el, at);
}

function initWrite(L0){
  WRITE_RE = hlPatterns(L0);
  stage.querySelectorAll('.write').forEach(el => {
    /*
     * 한글은 조합해서 만들어진다.
     *
     * ㄱ → 고 → 골 → 골으… 한 글자가 완성되기까지 브라우저는 그 자리를
     * 「조합 중」으로 붙들고 있다. 그 사이에 innerHTML 을 갈아 끼우면 붙들고
     * 있던 자리가 사라져 조합이 끊긴다 — 「골으」가 「고 놀 ㅇ」으로 흩어지는
     * 것이 그것이다. 조합이 끝난 뒤에 칠한다.
     */
    let composing = false, waitingBreak = false;
    /* 줄바꿈은 우리가 끼운다 — 커서 자리에 한 칸, 커서는 그 다음 줄로.
       그려 넣다 어긋나면 브라우저 손을 빌린다. 어느 쪽이든 줄은 서야 한다. */
    const lineBreak = () => {
      try {
        const at = caretOffset(el);
        if(at == null) throw new Error('커서 자리를 모른다');
        /* 끝의 자리 br 은 이제 안 세므로 여기서 뺄 것이 없다. */
        const text = textOf(el);
        renderWrite(el, text.slice(0, at) + '\n' + text.slice(at), at + 1);
      } catch(err){
        el.focus();
        if(!document.execCommand('insertLineBreak')) document.execCommand('insertHTML', false, '<br>');
      }
    };
    /* 이미 줄이 바뀌어 있는가 — 조합을 끝내면서 브라우저가 스스로 넣는 일도 있다 */
    const brokeAlready = () => {
      const n = caretOffset(el);
      return n > 0 && textOf(el)[n - 1] === '\n';
    };
    el.addEventListener('compositionstart', () => { composing = true; });
    el.addEventListener('compositionend', () => {
      composing = false;
      /* 「골」이 끝나자마자 「으」가 시작되기도 한다. 한 박자 미뤄 두고,
         그새 새 조합이 시작됐으면 넘긴다 — 그 조합이 끝날 때 칠하면 된다. */
      setTimeout(() => {
        if(composing) return;
        /* 조합 중에 누른 Enter 는 글자를 확정하는 키였다. 확정이 끝난 지금
           줄을 넣는다 — 「나는」을 치고 바로 Enter 를 누르는 것이 이 자리다. */
        if(waitingBreak){
          waitingBreak = false;
          if(!brokeAlready()){ lineBreak(); return; }
        }
        paintWrite(el);
      }, 0);
    });
    el.addEventListener('input', () => { if(!composing) paintWrite(el); });
    /* 붙여넣기는 글자만 — 다른 곳에서 온 색과 크기가 따라 들어오면 안 된다. */
    el.addEventListener('paste', e => {
      e.preventDefault();
      const t = (e.clipboardData || window.clipboardData).getData('text');
      document.execCommand('insertText', false, t);
    });
    /* 슬라이드는 ← → 로 넘긴다. 칸 안에서 화살표를 누르면 글자 사이를
       오가야지 슬라이드가 넘어가면 안 된다. */
    el.addEventListener('keydown', e => {
      if(e.key.startsWith('Arrow')){ e.stopPropagation(); return; }
      if(e.key !== 'Enter') return;
      /*
       * 한글을 치는 중의 Enter 는 두 가지 일을 한다.
       *
       * 「나는」까지 치면 마지막 글자는 아직 조합 중이다. 그때의 Enter 는
       * 먼저 그 글자를 확정하는 키다. 그 키를 뺏으면 글자가 확정되지 않고,
       * 그냥 두면 확정만 되고 줄은 그대로다 — 교실에서 Enter 가 안 먹는
       * 것처럼 보이던 것이 이것이다. 확정을 브라우저에 맡기고, 끝나는 대로
       * (compositionend) 줄을 넣는다.
       */
      if(composing || e.isComposing || e.keyCode === 229){
        waitingBreak = true;
        /* 확정했다는 신호(compositionend)를 안 주는 판도 있다. 잠깐 뒤에도
           그대로면 여기서 줄을 넣는다 — 신호가 왔으면 이미 넣었고 꺼져 있다. */
        setTimeout(() => {
          if(!waitingBreak || composing) return;
          waitingBreak = false;
          if(!brokeAlready()) lineBreak();
        }, 80);
        return;
      }
      e.preventDefault();
      lineBreak();
    });
    /*
     * 키보드만 보고 있으면 놓치는 자리가 있다.
     *
     * 판마다 Enter 를 키로 알려 주는 대신 「줄을 바꾸겠다」는 신호로만 주는
     * 일이 있다(beforeinput). 키를 못 들었어도 이 신호는 오므로, 여기서도
     * 같은 일을 한다. 키에서 이미 막았으면 이 신호는 오지 않는다.
     */
    el.addEventListener('beforeinput', e => {
      if(e.inputType !== 'insertParagraph' && e.inputType !== 'insertLineBreak') return;
      e.preventDefault();
      waitingBreak = false;
      lineBreak();
    });
    /* 손을 뗀 칸에서는 끝에 세워 둔 빈 줄을 지운다 */
    el.addEventListener('blur', () => paintWrite(el, true));
  });
}

/* Ctrl+M · 끌어 선택한 자리를 손으로 칠하거나 지운다.
   자동으로 못 잡는 말이 나온다 — 학생 말은 교재대로 나오지 않는다. */
document.addEventListener('keydown', e => {
  if(!(e.ctrlKey && (e.key === 'm' || e.key === 'M'))) return;
  const s = getSelection();
  if(!s.rangeCount || s.isCollapsed) return;
  const host = s.anchorNode.parentElement && s.anchorNode.parentElement.closest('.write');
  if(!host) return;
  e.preventDefault();

  const r = s.getRangeAt(0), pre = r.cloneRange();
  pre.selectNodeContents(host);
  pre.setEnd(r.startContainer, r.startOffset);
  const a = pre.toString().length, b = a + r.toString().length;

  const hand = (host.dataset.hand || '').split('|').filter(Boolean);
  const key = a + ',' + b;
  host.dataset.hand = (hand.indexOf(key) >= 0
    ? hand.filter(h => h !== key)
    : hand.concat(key)).join('|');
  paintWrite(host);
});

/*
 * 문법소 줄은 한 줄에 하나씩 서야 합니다.
 *
 * 「동사 · 형용사 + -았어요 / -었어요 / 했어요」와 「명사 + 였어요 / 이었어요」는
 * 각각 한 덩어리입니다. 가운데서 접히면 「했어요」만 다음 줄에 남아 학생이
 * 그것을 따로 배우는 것으로 봅니다. 글자를 안 접는 대신, 줄이 칸을 넘치면
 * 그 줄만 조금 줄입니다 — 과마다 문법소 길이가 달라 크기를 하나로 못 박습니다.
 */
function fitGram(root){
  root.querySelectorAll('.gram,.wgram,.sum-goal').forEach(el=>{
    el.style.zoom = '';
    for(let z = 0.96; z > 0.5; z -= 0.04){
      if(el.scrollWidth <= el.clientWidth + 1) break;
      el.style.zoom = String(z);
    }
  });
}

/*
 * 아래 줄을 윗줄의 첫 글자에 맞춘다.
 *
 * 윗줄은 「✏️ Make a sentence」나 「① 🎲 Bingo」처럼 이모지·번호 딱지로
 * 시작하는데, 아래 설명 줄은 칸의 맨 왼쪽에서 시작해 그만큼 어긋나 보였다.
 * 이모지 너비는 글자마다 다르고 제목 칸에 여백이 있는 장(잠깐만요의 노란 띠)도
 * 있어 값을 못 박지 않는다. 첫 글자(영어나 한글)의 실제 x 를 재서 민다.
 * 글자로 시작하는 줄은 밀 거리가 0이라 그대로 선다.
 */
function padTo(head, sub){
  if(!head || !sub) return;
  sub.style.paddingLeft = "";
  const walk = document.createTreeWalker(head, NodeFilter.SHOW_TEXT);
  let n, hit = null, at = 0;
  while((n = walk.nextNode())){
    const i = n.textContent.search(/[A-Za-z\uAC00-\uD7A3]/);
    if(i >= 0){ hit = n; at = i; break; }
  }
  if(!hit) return;
  const r = document.createRange();
  r.setStart(hit, at);
  r.setEnd(hit, at + 1);
  const x = r.getBoundingClientRect().left;
  const cs = getComputedStyle(sub);
  const base = parseFloat(cs.paddingLeft) || 0;
  const left = sub.getBoundingClientRect().left + (parseFloat(cs.borderLeftWidth) || 0) + base;
  const d = x - left;
  if(d > 2) sub.style.paddingLeft = Math.round(base + d) + "px";
}

function alignSub(root){
  if(!root) return;
  padTo(root.querySelector("h1.slide-title"), root.querySelector("p.slide-sub"));
  /* 활동 카드도 같다 — 번호 딱지와 이모지 다음의 이름(Bingo · Relay)에 맞춘다. */
  root.querySelectorAll(".method").forEach(m =>
    padTo(m.querySelector(".mtop h3"), m.querySelector(".how")));
}
/*
 * 예문 줄이 한 줄에 안 들어가면 슬래시 자리에서 접는다.
 *
 * 「선생님은 / 저는」이 좁아 접힐 때, 아무 데서나 잘려 「저는」이 배지 밑
 * 맨 왼쪽으로 내려가면 글이 어디서 시작하는지 알 수 없다. 슬래시 자리에서
 * 내리고 그 슬래시는 감춘다 — 줄이 이미 갈라 놓았으니 겹말이다.
 * 창 크기에 따라 달라지므로 그릴 때마다 다시 잰다.
 */
function oxFold(root){
  root.querySelectorAll('.oxrow').forEach(r => {
    const b = r.querySelector('.oxbody');
    if(!b || !r.querySelector('.oxsl')) return;
    r.classList.remove('stack');
    const 한줄 = parseFloat(getComputedStyle(b).lineHeight);
    if(한줄 && b.scrollHeight > 한줄 * 1.4) r.classList.add('stack');
  });
}
/*
 * 특별 TIP 새 판 — 글자는 모든 과가 같은 크기(--tf)에서 시작하고, 자리가 남는 과만
 * 넘치지 않는 데까지 조금 키운다. 얼마까지 키울지는 과마다 data-cap(%) — 보통 10,
 * 대표님이 고른 과는 20(data/tipkeep.js 의 TIPCAP, 2026-10-03).
 * 0.25px 씩 올려 보다가 카드가 화면 아래 띠에 닿거나 칸 안에서 넘치면 한 단 물린다.
 */
function fitTip(root){
  const g = root && root.querySelector && root.querySelector('.tipgrid.tipv2[data-cap]');
  if(!g) return;
  g.style.removeProperty('--tf');
  /* --tf 는 식(max · min)이라 그대로 읽으면 글자다 — 그려진 제목 크기로 잰다. */
  const h = g.querySelector('.tip h3');
  const base = h ? parseFloat(getComputedStyle(h).fontSize) : 0;
  if(!base) return;
  const top = base * (1 + (parseFloat(g.dataset.cap) || 0) / 100);
  const nav = document.querySelector('.nav');
  const floor = nav ? nav.getBoundingClientRect().top - 4 : innerHeight;
  const ok = () => !(root.scrollHeight > root.clientHeight + 1 || g.scrollHeight > g.clientHeight + 1 ||
    g.getBoundingClientRect().bottom > floor ||
    [...g.querySelectorAll('.tip')].some(c => c.getBoundingClientRect().bottom > floor ||
      c.scrollHeight > c.clientHeight + 2 || c.scrollWidth > c.clientWidth + 2));
  /* 제목 · 예문 한 줄이 두 줄로 접히면 안 된다(대표님 2026-10-03) — 키울 때도 지킨다. */
  const fine = () => ok() && !tipWraps(g).length;
  let px = base;
  for(let p = base + 0.25; p <= top + 0.01; p += 0.25){
    g.style.setProperty('--tf', p + 'px');
    if(fine()) px = p; else break;
  }
  g.style.setProperty('--tf', px + 'px');
  /* 바탕 크기에서도 접히거나 아래가 잘리는 장만 접히지 않을 만큼 조금 줄인다 — 다른 과는 그대로.
     줄일 수 있는 데는 바탕의 80%까지. */
  if(px === base && !fine()){
    for(let p = base - 0.25; p >= base * 0.8 - 0.01; p -= 0.25){
      px = p; g.style.setProperty('--tf', p + 'px');
      if(fine()) break;
    }
  }
}
/*
 * TIP 제목(h3)과 예문 상자에서 한 줄이어야 할 줄이 접혔는지 — 접힌 줄의 글을 돌려준다.
 * <br> 이나 블록(① ② · 풀이 줄)으로 갈린 줄은 처음부터 다른 줄이라 세지 않는다.
 * 같은 줄 안에서 글이 아랫줄로 내려가면 접힌 것이다.
 */
function tipWraps(g){
  const out = [];
  const blk = (n, u) => { let e = n.parentElement;
    while(e && e !== u && ['inline', 'contents'].includes(getComputedStyle(e).display)) e = e.parentElement;
    return e; };
  g.querySelectorAll('.tip h3, .tip .tip-ex').forEach(u => {
    const tw = document.createTreeWalker(u, NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT);
    let prev = null, broke = false;
    for(let n = tw.nextNode(); n; n = tw.nextNode()){
      if(n.nodeType === 1){ if(n.tagName === 'BR') broke = true; continue; }
      if(!n.textContent.trim()) continue;
      const rg = document.createRange(); rg.selectNodeContents(n);
      const rs = [...rg.getClientRects()].filter(r => r.width > 0.5);
      if(!rs.length) continue;
      const down = (a, b) => b.top > a.bottom - a.height * 0.3;
      let wrap = rs.some((r, i) => i && down(rs[i - 1], r));
      const b = blk(n, u);
      if(!wrap && prev && !broke && prev.b === b && down(prev.r, rs[0])) wrap = true;
      if(wrap) out.push(u.textContent.trim().slice(0, 40));
      prev = { b, r: rs[rs.length - 1] }; broke = false;
      if(wrap) break;
    }
  });
  return out;
}
window.addEventListener("resize", () => { if(typeof slides !== "undefined" && slides[idx]) { alignSub(slides[idx]); oxFold(slides[idx]); fitTip(slides[idx]); fitEx(slides[idx]); fitSit(slides[idx]); fitBoard(slides[idx]); fitCk(slides[idx]); fitAct(slides[idx]); fitVc(slides[idx]); fitVqa(slides[idx]); fitSum(slides[idx]); } });
/* 글꼴이 늦게 들어오면 대신 글꼴로 잰 크기가 남는다 — 들어온 뒤 한 번 더 잰다. */
if(document.fonts && document.fonts.ready) document.fonts.ready.then(() => { if(typeof slides !== "undefined" && slides[idx]){ fitTip(slides[idx]); fitEx(slides[idx]); fitSit(slides[idx]); fitBoard(slides[idx]); fitCk(slides[idx]); fitAct(slides[idx]); fitVc(slides[idx]); fitVqa(slides[idx]); fitSum(slides[idx]); } });

/*
 * 예문 장 글자 — 대화 글자를 지금의 2배로 키운다(대표님 2026-10-08 「예문 텍스트가 너무 작다」).
 * 「Say it like this」 상자는 왼쪽 그림 아래로 옮겨 대화 칸을 넓히고, 문형이 길면 상자 폭에 맞춰 한 줄로 줄인다.
 * 대화가 칸을 넘치면 이 차례로 물러선다 — 2배 → 2배 + 짧은 문장 이어 붙이기(문장 단위로만, 문장 가운데서는
 * 안 접는다) → 1.7배 → 1.7배 + 이어 붙이기 → 1.5 · 1.3 · 1.15 · 1배(이어 붙인 채) — 작은 화면(1280×720)에서
 * 1급 긴 대화가 1.5배로도 넘쳐 끝까지 물러설 자리를 두었다. 이어 붙이기는 「문장이 짧아 옆자리가 남을 때 석 줄을 두 줄로 해서 2배를 지킨다」(같은 날).
 * 크기는 그때그때 지금 화면에서 다시 잰다 — 창 크기가 바뀌면 처음 크기부터 다시 맞춘다.
 */
/*
 * 빙고 · 릴레이 한 장 맞추기(2026-10-08) — 큰 글자가 기본이고, 장을 넘칠 때만 한 단씩 줄인다.
 * 릴레이는 답을 열 때마다(drawRelay) 다시 부른다 — 끝에 완성 문장이 붙으면 그만큼 자리가 준다.
 */
/* 어휘 장 「물음 → 대답 꼴」 한 줄 — 문장이 길어 상자 밖으로 나가면 두 상자의 글자를 한 단씩 함께 줄인다(2026-10-08) */
/*
 * 어휘 카드 글자 기준(2026-10-09 대표님, 14과 「Receiving verbs」 카드가 본보기) —
 * 영어 뜻은 새 단어의 절반, 결과 줄(눌러서 나오는 문장)은 새 단어와 같은 크기.
 * 카드 종류(받침 · 두 걸음 · 고르는 카드)마다 따로 정해 두었던 크기를 이 하나로 맞춘다.
 * 다 열었을 때(두 걸음은 두 줄 다, 고르는 카드는 가장 긴 문장) 카드 밖으로 넘치면 셋을 같은 비율로 줄인다.
 */
/*
 * 규칙 표 · 주의 줄의 영어 결과(Clock time · In writing · Among friends)는 파란 점선 알약 하나로 —
 * 아래 작게 달던 한국어(<i>시각</i>)는 지운다(2026-10-09 대표님 13-08 · 16-08 · 16-09, 1급 전체).
 * 한글이 섞인 답(책이에요)은 손대지 않는다.
 */
/* 어휘 카드 묶음 — grp 를 적은 카드가 이어지면 점선 테 하나로 묶는다(2026-10-09 대표님 15-18,
   「저도 그래요 · 하나도 없어요」는 도 문형 연습이 아니라 통째로 쓰는 말). */
function VGRP(items, html){
  let out = '', k = 0;
  while(k < html.length){
    if(items[k] && items[k].grp){
      let n = k; while(n < html.length && items[n] && items[n].grp === items[k].grp) n++;
      out += '<div class="vgrp" style="grid-column:span ' + (n - k) + ';grid-template-columns:repeat(' + (n - k) + ',1fr)">' + html.slice(k, n).join('') + '</div>';
      k = n;
    } else { out += html[k]; k++; }
  }
  return out;
}
/* 규칙 표 이름 칸 — 영어 이름 아래 작게 단 한국어(<i>사람이 아니면</i>)는 뗀다(2026-10-09 대표님 13-08 「규칙에 한국어가 아래 작게
   병기된 것은 다 지워」). 한국어 이름(있다 · 없다) 아래 영어 풀이는 그대로 둔다. */
function KDROP(k){
  const s = String(k == null ? '' : k);
  const head = s.split('<i>')[0].replace(/<[^>]+>/g, '').trim();
  if(!/^[A-Za-z]/.test(head)) return s;
  return s.replace(/<i>([^]*?)<\/i>/g, (m, t) => /[가-힣]/.test(t) ? '' : m);
}
function ENPILL(a){
  const t = String(a == null ? '' : a);
  const bare = t.replace(/<i>[^]*?<\/i>/g, '');
  const plain = bare.replace(/<[^>]+>/g, '').trim();
  /* 영어로 시작하는 풀이(No 받침 rule)도 알약 — 한국어로 시작하는 답(책이에요)은 그대로 */
  if(!/^[A-Za-z]/.test(plain)) return null;
  return '<span class="enpill">' + bare.replace(/<[^>]+>/g, '').trim() + '</span>';
}
function fitVc(root){
  const grids = root ? [...root.querySelectorAll('.vgrid')] : [];
  grids.forEach(g => {
    g.classList.remove('vstd'); g.style.removeProperty('--vcw'); g.style.removeProperty('--vcz');
    const w0 = g.querySelector('.vcard .vword');
    if(!w0) return;
    g.style.setProperty('--vcw', parseFloat(getComputedStyle(w0).fontSize) + 'px');
    g.classList.add('vstd');
    const cards = [...g.querySelectorAll('.vcard')];
    const keep = cards.map(c => [c.className, c.querySelector('.pickcard .vres, .vres') ? c.querySelector('.vres').innerHTML : null]);
    cards.forEach(c => {
      if(c.classList.contains('step')) c.classList.add('s1', 's2');
      else c.classList.add('open');
      if(c.classList.contains('pickcard')){
        const says = [...c.querySelectorAll('.vopt')].map(b => b.dataset.say || '');
        c.querySelector('.vres').textContent = says.sort((a, b) => b.length - a.length)[0] || '';
      }
    });
    const fits = () => cards.filter(c => c.classList.contains('step') || c.classList.contains('pickcard')).every(c => c.scrollHeight <= c.clientHeight + 1 && c.scrollWidth <= c.clientWidth + 1);   /* 보통 카드는 제 규칙이 맞춘다 */
    /* 결과를 화살표로 옆에 — 모든 카드에서 한 줄로 서고 넘치지 않을 때만(11-17) */
    g.classList.remove('vrow');
    if(cards.length && cards.every(c => c.classList.contains('step'))){   /* 두 걸음 카드만 — 보통 카드는 14과처럼 아래로 */
      g.style.setProperty('--vcz', 1);
      g.classList.add('vrow');
      const oneLine = cards.every(c => { const r = c.querySelector('.vres'), w = c.querySelector('.vpair, .vword');
        if(!r || !r.textContent.trim()) return true;
        return Math.abs(r.getBoundingClientRect().top - w.getBoundingClientRect().top) < 12; });
      if(!oneLine || !fits()) g.classList.remove('vrow');
    }
    for(const z of [1, .94, .88, .82, .76, .7, .64, .58]){
      g.style.setProperty('--vcz', z);
      if(fits()) break;
    }
    cards.forEach((c, i) => { c.className = keep[i][0]; if(keep[i][1] !== null) c.querySelector('.vres').innerHTML = keep[i][1]; });
  });
}
function fitVqa(root){
  const r = root && root.querySelector('.vqa-row');
  if(!r) return;
  const boxes = [...r.querySelectorAll('.askbox, .vpat')];
  const txt = [...r.querySelectorAll('.ask-k, .ask-e, .vpat-k')];   /* 딱지(ask-l · vpat-l)는 테 위에 떠 있어 재지 않는다 */
  for(const z of [1, .92, .85, .78, .72, .66, .6]){
    r.style.setProperty('--vqz', z);
    if(txt.every(e => e.getBoundingClientRect().right <= e.closest('.askbox, .vpat').getBoundingClientRect().right + 1) && r.scrollWidth <= r.clientWidth + 1) break;
  }
}
/*
 * 정리 장 맞추기(2026-10-08) — 의미 줄 · 주의할 점 줄은 화면 폭(vw)으로 커져서, 폭은 넓고 높이가 낮은 창
 * (1750×880 쯤)에서는 아래로 넘쳤다. 넘칠 때만 두 줄을 함께 한 단씩 줄인다 — 같은 크기는 지킨다.
 */
function fitSum(root){
  const w = root && root.querySelector('.sumwrap');
  if(!w || !root.querySelector('.sum-warn')) return;
  const stage = document.querySelector('.stage');
  /* 아래 이전 · 다음 줄(.nav)이 무대 아래를 덮는다 — 그 위까지가 쓸 수 있는 자리다 */
  const nav = document.querySelector('.nav');
  const room = () => Math.min(stage ? stage.getBoundingClientRect().bottom : innerHeight, nav ? nav.getBoundingClientRect().top : innerHeight) - 10;
  const low = () => Math.max(...[...w.querySelectorAll('.sum-mean, .sum-warn')].map(e => e.getBoundingClientRect().bottom));
  for(const z of [1, .94, .88, .82, .76, .7, .64]){
    w.style.setProperty('--swz', z);
    if(low() <= room()) break;
  }
}
function fitAct(root){
  const m = root && root.querySelector('.methods.one');
  if(!m) return;
  /* 빙고는 칸 높이(cqh)로 글자를 정한다 — 줄이는 맞춤은 릴레이만(대표님 2026-10-08 「빙고 글씨가 작아」) */
  if(m.querySelector('.bingo')){ m.style.setProperty('--actz', 1); return; }
  /* 글꼴이 늦게 들어오거나 판이 늦게 서면 맞춘 뒤에 다시 넘친다 — 넘칠 때만 다시 맞춘다(줄이는 쪽으로만이라 되먹임이 없다) */
  if(!m._ro && typeof ResizeObserver !== 'undefined'){
    m._ro = new ResizeObserver(() => { if(m.scrollHeight > m.clientHeight + 1 && m.closest('.slide.on')) fitAct(m.closest('.slide')); });
    [...m.querySelectorAll('.card.method, .how, .bingo, .relay, .relay-full')].forEach(x => m._ro.observe(x));
  }
  /* 칩(--actz)을 먼저 0.78 까지 줄이고, 그래도 넘치면 완성 대화(--rfz)도 함께 줄인다 — 완성 대화가 주인공이라 나중에 */
  for(const [z, z2] of [[1, 1], [.92, 1], [.85, 1], [.78, 1], [.78, .9], [.72, .84], [.66, .78], [.6, .72], [.55, .66], [.5, .6], [.5, .54], [.48, .5]]){
    m.style.setProperty('--actz', z);
    m.style.setProperty('--rfz', z2);
    if(m.scrollHeight <= m.clientHeight + 1) break;
  }
}
function fitEx(root){
  const card = root && root.querySelector('.card.set:not(.fixset)');
  if(!card) return;
  const talk = card.querySelector('.talk'), pic = card.querySelector('.pic');
  if(!talk || !pic || !talk.querySelector('.bubble')) return;
  const ask = card.querySelector('.askbox');
  if(ask && ask.parentElement !== pic) pic.appendChild(ask);
  card.classList.add('exbig');
  const sz = (els, f) => {
    els.forEach(e => e.style.removeProperty('font-size'));
    const base = els.map(e => parseFloat(getComputedStyle(e).fontSize));
    return g => els.forEach((e, i) => e.style.setProperty('font-size', base[i] * (g || f) + 'px', 'important'));
  };
  sz([...talk.querySelectorAll('.morph span')], 1.2)();
  /* 상자마다 키움 배수를 따로 둘 수 있다(data-z, 29-04). 문장마다 한 줄 — 넘치는 줄만 상자 폭에 맞춰 줄인다. */
  const askZ = ask && parseFloat(ask.dataset.z) || 1.35;
  sz([...pic.querySelectorAll('.askbox .ask-k')], askZ)();
  sz([...pic.querySelectorAll('.askbox .ask-e, .askbox .ask-l')], 1.35)();
  /* 여러 줄이면 가장 긴 줄에 맞춰 모두 같은 크기로 줄인다 — 줄마다 크기가 다르면 다른 말처럼 보인다 */
  { const ks = [...pic.querySelectorAll('.ask-k')];
    if(ks.length){
      const box = ks[0].parentElement, cs = getComputedStyle(box);
      const room = box.clientWidth - parseFloat(cs.paddingLeft) - parseFloat(cs.paddingRight);
      const r = Math.min(1, ...ks.map(k => room / k.scrollWidth));
      if(r < 1) ks.forEach(k => k.style.setProperty('font-size', parseFloat(getComputedStyle(k).fontSize) * r + 'px', 'important'));
    } }
  const bs = [...talk.querySelectorAll('.bubble')];
  bs.forEach(b => b.classList.remove('pack'));
  /* 한 말풍선에 문장이 셋 넘으면 두 문장씩 한 줄 — 「안녕하세요? 마이클이에요. / 미국 사람이에요.」(대표님 2026-10-08 1과 01-04).
     넘치지 않아도 늘 묶는다. 영어 풀이 줄도 같은 짝으로. 문장 가운데서는 접지 않는다. */
  bs.forEach(b => {
    b.querySelectorAll('br.pbr').forEach(x => x.remove());
    const n = b.querySelectorAll('.ko .s').length;
    b.classList.toggle('pair', n >= 3);
    if(n >= 3) b.querySelectorAll('.ko, .en').forEach(box => {
      [...box.querySelectorAll(':scope > .s')].forEach((s, i, all) => { if(i % 2 === 1 && i < all.length - 1){ const br = document.createElement('br'); br.className = 'pbr'; s.after(br); } });
    });
  });
  const big = sz([...talk.querySelectorAll('.bubble .ko, .bubble .en, .bubble .who')], 2);
  for(const [f, pk] of [[2, 0], [2, 1], [1.7, 0], [1.7, 1], [1.5, 1], [1.3, 1], [1.15, 1], [1, 1]]){
    bs.forEach(b => b.classList.toggle('pack', !!pk));
    big(f);
    if(talk.scrollHeight <= talk.clientHeight) break;
  }
}

/* 말하기 그림 장 맞추기 — 넘칠 때만 차례로: ① 대답 문형을 물음 아래로 ② 두 갈래 대답이 한 줄씩 안 잘리면 나란히
   ③ 그림을 물음 옆까지 끌어올림(물음이 짧을 때) ④ 대답 줄 간격 좁힘 ⑤ 그림 칸 좁힘(60%까지). 글자 크기는 그대로. */
function fitSit(root){
  const card = root && root.querySelector('.sitfull.withpic');
  if(!card) return;
  const top = card.querySelector('.sf-top'), txt = card.querySelector('.sf-txt'), fig = card.querySelector('.sf-pic');
  if(!top || !txt || !fig) return;
  /* 처음 모양으로 되돌린 뒤 잰다(창 크기가 바뀌면 다시 맞춘다) */
  const pat = card.querySelector('.sf-pat');
  if(pat && pat.parentElement !== txt) txt.insertBefore(pat, txt.firstChild);
  const ans = txt.querySelector('.sf-answers');
  if(ans) ans.classList.remove('side');
  card.classList.remove('tight', 'picup');
  card.style.removeProperty('grid-template-columns');
  top.style.zoom = ''; txt.style.zoom = '';
  /*
   * 「나쁨」 = 글이 그림 칸으로 들어가거나(겹침) 카드 아래로 나감, 그림이 카드 아래로 나감(대표님 2026-10-08 「그림과 박스가 겹치지 않게」).
   * 물러서는 차례: ① 문형을 물음 칸으로 ② 그림 칸을 아주 조금 줄임(세 단까지 — 「필요하면 그림 크기를 미세하게」)
   * ③ 줄 간격 ④ 마지막에 글자. 대답 두 상자를 옆으로 나란히 두던 수는 뺐다 — 그림 칸으로 넘어가 겹쳤다.
   */
  const bad = () => {
    const cb = card.getBoundingClientRect().bottom - 12, pl = fig.getBoundingClientRect().left - 10;
    const els = [...top.children, ...txt.querySelectorAll('.sf-prep, .sf-pat, .sf-model, .sf-alt')];
    return els.some(e => { const r = e.getBoundingClientRect(); return r.bottom > cb || r.right > pl; })
      || fig.getBoundingClientRect().bottom > cb + 12
      /* 지시 줄 · 바꿔 묻기가 들어오며 카드 자체가 넘치는 장(10-09) — 카드 안 스크롤이 생기면 나쁨 */
      || card.scrollHeight > card.clientHeight;
  };
  if(!bad()) return;
  if(pat){ top.appendChild(pat); if(!bad()) return; }
  for(const pw of ['.94', '.88', '.82']){
    card.style.setProperty('grid-template-columns', `minmax(0,1fr) minmax(0,${pw}fr)`, 'important');
    if(!bad()) return;
  }
  card.classList.add('tight');
  if(!bad()) return;
  for(const z of [.94, .88, .82, .76, .7]){ top.style.zoom = z; txt.style.zoom = z; if(!bad()) break; }
}

/* Point 장 맞추기(대표님 2026-10-09 01-27) — 위에서부터 서고, 칸이 남으면 글자를 키운다(넘치기 직전까지, 1.8배까지).
   기준 크기(--ckK · --ckE)를 재 둔 뒤 큰 값부터 넣어 보고 처음 들어가는 값을 쓴다. */
function fitCk(root){
  fitMt(root); fitCapEn(root);
  const card = root && root.querySelector('.ckcard.nosets'); if(!card) return;
  const ul = card.querySelector('.ckpt ul'), li = ul && ul.querySelector('li'); if(!li) return;
  card.style.removeProperty('--ckK'); card.style.removeProperty('--ckE');
  const ne = card.querySelector('.ckxn');
  const K = parseFloat(getComputedStyle(li).fontSize), E = ne ? parseFloat(getComputedStyle(ne).fontSize) : K * .75;
  const fits = () => { const ub = ul.getBoundingClientRect().bottom, last = ul.lastElementChild.getBoundingClientRect().bottom;
    return last <= ub + 1 && card.scrollHeight <= card.clientHeight && ul.scrollWidth <= ul.clientWidth + 1; };
  for(const z of [1.8, 1.7, 1.6, 1.5, 1.4, 1.3, 1.2, 1.1, 1, .95, .9, .85]){
    card.style.setProperty('--ckK', (K * z).toFixed(1) + 'px'); card.style.setProperty('--ckE', (E * z).toFixed(1) + 'px');
    if(fits()) return;
  }
  card.style.removeProperty('--ckK'); card.style.removeProperty('--ckE');
}

/* 규칙표가 짧아 자리가 남는 장(rules.grow) — 표를 키우되 화면 아래 띠에 닿거나 옆으로 넘치면 한 단 물린다(대표님 2026-10-10 23-09). */
/* 규칙표 보기 칸이 두 줄로 접히면 줄 사이를 띄운다 — 붙어 있으면 위아래 보기가 한 덩이로 읽힌다(대표님 2026-10-10 30-08). */
function fitMtWrap(root){
  if(!root) return;
  root.querySelectorAll('table.mt td').forEach(td => {
    td.classList.remove('rvwrap');
    const rv = [...td.querySelectorAll(':scope > .rv')]; if(rv.length < 2) return;
    const top = r => r.getBoundingClientRect().top, h = rv[0].getBoundingClientRect().height;
    if(rv.some(r => top(r) - top(rv[0]) > h * .6)) td.classList.add('rvwrap');
  });
}
/* 활동판 그림 이름 + 영어(30-21) — 한 칸이라도 넘치면 판 전체의 이름 글자를 같은 비율로 줄인다(칸마다 크기가 다르지 않게) */
function fitCapEn(root){
  const caps = root ? [...root.querySelectorAll('.actb .cap')].filter(c => c.querySelector('.cap-en')) : [];
  if(!caps.length) return;
  caps.forEach(c => c.style.removeProperty('font-size'));
  const f0 = parseFloat(getComputedStyle(caps[0]).fontSize);
  for(let z = 1; z >= .5; z -= .05){
    caps.forEach(c => c.style.fontSize = (f0 * z).toFixed(1) + 'px');
    if(caps.every(c => [...c.childNodes].length && c.scrollWidth <= c.clientWidth + 1 && [...c.querySelectorAll('.cap-en')].every(e => e.scrollWidth <= c.clientWidth + 1))) return;
  }
}
function fitMt(root){
  fitMtWrap(root);
  const card = root && root.querySelector('.morphcard.mtgrow'); if(!card) return;
  const t = card.querySelector('table.mt'); if(!t) return;
  t.style.zoom = '';
  const nav = document.querySelector('.nav');
  const floor = nav ? nav.getBoundingClientRect().top - 12 : innerHeight;
  const rows = [...t.querySelectorAll('tr')], h0 = rows.map(r => r.getBoundingClientRect().height);
  /* 줄이 접히면(피곤하다가 아랫줄로) 키운 것이 아니라 어지럽힌 것이다 — 줄마다 키운 만큼만 자랐는지 본다 */
  const ok = z => card.getBoundingClientRect().bottom <= floor && card.scrollWidth <= card.clientWidth + 1
    && rows.every((r, i) => r.getBoundingClientRect().height <= h0[i] * z * 1.08);
  for(const z of [1.6, 1.5, 1.4, 1.3, 1.2, 1.1]){ t.style.zoom = String(z); if(ok(z)) return; }
  t.style.zoom = '';
}
/* 활동판 단추(2026-10-09, 2급과 같은 색) — 맡기: 선생님 빨강 · 학생 초록 / O X: O 빨강 · X 초록 / 연락: 한 줄에 하나 / 다음 수업: 빈칸 → ✕ → 수업 */
function actPick(b){
  const row = b.closest('.pk-row'), who = row.querySelector('.pk-who');
  const on = who.dataset.who === b.dataset.v;
  who.dataset.who = on ? '' : b.dataset.v;
  who.textContent = on ? '?' : (b.dataset.v === 't' ? '선생님' : '학생');
  row.querySelectorAll('.pk-b button').forEach(x => x.classList.toggle('on', !on && x === b));
}
function actOX(b){
  const c = b.closest('.ox-c'), was = b.classList.contains('on');
  c.querySelectorAll('button').forEach(x => x.classList.remove('on'));
  if(!was) b.classList.add('on');
}
function actOne(b){
  const was = b.classList.contains('on');
  b.parentElement.querySelectorAll('button').forEach(x => x.classList.remove('on'));
  if(!was) b.classList.add('on');
}
function actCal(b){
  const v = b.dataset.v === 'x' ? 'go' : b.dataset.v === 'go' ? '' : 'x';
  b.dataset.v = v; b.textContent = v === 'x' ? '✕' : v === 'go' ? '수업' : '';
}
/* 활동판 맞추기 — 판이 카드 밖으로 넘치면 판 글자 · 칸을 한 단씩(--abz) 줄인다. 넘치지 않으면 손대지 않는다. */
function fitBoard(root){
  const card = root && root.querySelector('.actb'); if(!card) return;
  card.querySelectorAll('img').forEach(im => { if(!im.complete && !im.dataset.fb){ im.dataset.fb = 1; im.addEventListener('load', () => fitBoard(root), { once: true }); } });
  card.style.removeProperty('--abz');
  /* 문형 박스는 지시 줄 한가운데(대표님 10-09 「문형 중앙 · 텍스트랑 겹치면 안 돼」) — 지시문 · 교사 메모 단추와 겹치면 그 판만 한 줄 아래 가운데로 */
  const head = card.querySelector('.ab-head'), pat = card.querySelector('.pat');
  if(head && pat){
    /* 테 위에 「보기 Example」(2026-10-09 대표님 09-21 시안 3).
       그림 판(그림 칸 줄)은 그림이 세로를 다 쓰게 문형을 지시 줄 한가운데에 두고, 겹칠 때만 한 줄 아래로.
       그 밖의 판(표 · 쓰기 칸)은 문형을 늘 지시 줄 아래로 내리고 판을 남는 자리 가운데로(10-24 「위에 몰려 있다」). */
    const picBoard = !!card.querySelector('.row .sc img');
    if(pat.parentElement !== head) head.appendChild(pat);
    pat.style.top = ''; pat.style.left = '';
    card.classList.remove('patdown'); head.style.minHeight = pat.offsetHeight + 'px';
    const pr = pat.getBoundingClientRect(), hit = [...head.querySelectorAll('.sf-go .t, .memopop')].some(e => {
      const r = e.getBoundingClientRect(); return r.width && r.left < pr.right + 16 && r.right > pr.left - 16 && r.top < pr.bottom && r.bottom > pr.top; });
    if(hit || !picBoard){ card.classList.add('patdown'); head.style.minHeight = ''; head.after(pat); }
    else {
      /* 지시 줄이 자리 기준이 아니게 된 뒤(교사 메모 펼침판을 슬라이드 전체에, 10-09) 문형이 슬라이드 맨 위로 떴다 —
         기준이 되는 칸에서 지시 줄의 위 · 가운데를 재서 그 자리에 놓는다(2026-10-10 20과 판) */
      const op = pat.offsetParent, hr = head.getBoundingClientRect();
      if(op && op !== head){ const orr = op.getBoundingClientRect();
        pat.style.top = (hr.top - orr.top) + 'px'; pat.style.left = (hr.left + hr.width / 2 - orr.left) + 'px'; }
    }
  }
  const over = () => card.scrollHeight > card.clientHeight || card.scrollWidth > card.clientWidth;
  for(const z of [.94, .88, .82, .76, .7]){ if(!over()) break; card.style.setProperty('--abz', z); }
}

/*
 * 받침 O · X 색 맞추기(대표님 2026-10-08, 1과 「이에요는 빨강, 예요는 초록」 · 「예요 부분은 다 초록」).
 * 규칙표에 「받침 O · 받침 X」 줄이 있는 과만 — 받침 O 꼴은 빨강, 받침 X 꼴은 초록으로 모든 장을 맞춘다.
 * 아/어/해처럼 받침과 상관없이 갈리는 과, 형태소가 하나인 과는 건드리지 않는다(같은 날 「다른 규칙」).
 * 이미 강조색(빨강 · 초록 · 금색 · 파랑)으로 칠한 조각만 다시 칠한다 — 검정 본문은 그대로 둔다.
 * 「이에요 · 예요」처럼 두 꼴이 한 조각에 같이 있으면 손대지 않는다.
 */
const VC_HL = ['rgb(200, 16, 46)', 'rgb(11, 110, 99)', 'rgb(184, 134, 11)', 'rgb(27, 77, 255)'];
function vcSides(L0){
  const rows = (L0 && L0.rules && L0.rules.rows) || [];
  const o = rows.find(r => /^받침 O/.test(r.k || '')), x = rows.find(r => /^받침 X/.test(r.k || ''));
  if(!o || !x) return null;
  const toks = f => String(f || '').replace(/<[^>]+>/g, '').split(/\s\/\s/).map(p => p.replace(/^[+\-→\s]+/, '').trim()).map(p => p[0] === 'ㄹ' ? p.replace(/\/.*$/, '') : p.split(/\s+/)[0].replace(/\/.*$/, '')).filter(Boolean);
  return [toks(o.f), toks(x.f)];
}
function vcHit(t, tok){
  if(tok[0] === 'ㄹ'){
    const rest = tok.slice(1);
    for(let i = 0; i < t.length; i++){
      const c = t.charCodeAt(i) - 0xAC00;
      if(c >= 0 && c < 11172 && c % 28 === 8 && t[i] !== '을' && rest.trim() && t.slice(i + 1).replace(/^\s+/, ' ').startsWith(' ' + rest.trim())) return 1 + rest.length;   /* 받침 ㄹ + 거예요(갈 거예요) — 「을」은 받침 O 꼴 */
    }
    return 0;
  }
  if(t === tok || t.endsWith(tok)) return tok.length + 100;
  return new RegExp('(^|[가-힣])' + tok + '(\\s|$)').test(t) ? tok.length : 0;
}
function vcolor(root){
  if(!root || typeof LESSONS === 'undefined') return;
  /* 꼴마다 색을 정해 둔 과(markalt, 16과)는 받침 색으로 덮지 않는다 */
  if(LESSONS[lesson] && LESSONS[lesson].markalt){ root.querySelectorAll('.vc1, .vc2').forEach(e => e.classList.remove('vc1', 'vc2')); return; }
  const sides = vcSides(LESSONS[lesson]);
  if(!sides) return;
  root.querySelectorAll('*').forEach(e => {
    /* 상자 색으로 칠한 문장 전체(물음 상자 · 문형 상자 · 정답 줄 · 확인 문제)는 그 상자의 색이다 — 꼴 색이 아니다 */
    if(e.closest('.morph, .gram, .sum-goal, .lineslide, .opening, .ask-k, .vpat-k, .sf-pat, .ans, .ckq, .must, .stk, .slide-sub')) return;
    const own = [...e.childNodes].filter(n => n.nodeType === 3).map(n => n.textContent).join('').trim();
    if(!own || !/[가-힣]/.test(own)) return;
    e.classList.remove('vc1', 'vc2');
    if(!VC_HL.includes(getComputedStyle(e).color)) return;
    const t = e.textContent.replace(/[.?!。]+$/, '').trim();
    const best = sides.map(ts => Math.max(0, ...ts.map(k => vcHit(t, k))));
    if(!best[0] && !best[1]) return;
    /* 「이에요/예요」 「이에요 · 예요」 — 두 꼴이 한 덩이면 그대로 */
    if(/\(.*\)/.test(t)) return;   /* (이)랑 · (으)로 — 괄호로 두 꼴을 한꺼번에 적은 이름표 */
    if(/[\/·↔]/.test(t) && sides[0].some(k => t.includes(k)) && sides[1].some(k => t.includes(k))) return;
    let side;
    if(best[0] >= 100 || best[1] >= 100) side = best[0] >= best[1] ? 0 : 1;   /* 끝에 붙은 꼴이 정한다 — 긴 쪽(이에요 > 예요, 으로 > 로) */
    else if(best[0] && best[1]) return;                                          /* 두 꼴이 같이 있다 */
    else side = best[0] ? 0 : 1;
    e.classList.add(side ? 'vc2' : 'vc1');
  });
}

/*
 * 교사 메모 번호 줄 — ① · 1. · 1) 로 시작하는 줄이 다음 줄로 넘어가면 번호 밑이 아니라 윗줄 글자 첫머리에서
 * 이어지게(내어쓰기) 번호와 글을 나눈다(대표님 2026-10-08, 1 · 2급 모든 교사 메모). 한 번만 나눈다.
 */
function memoNum(root){
  if(!root) return;
  const NUM = /^(\s*)([①-⑳]|\d{1,2}[.)](?=\s)|[A-Z][.)](?=\s))\s*/;
  root.querySelectorAll('.memo-t, .mb-ln').forEach(el => {
    if(el.dataset.mn) return;
    el.dataset.mn = '1';
    const parts = el.innerHTML.split(/<br\s*\/?>/i);
    if(!parts.some(p => NUM.test(p.replace(/^(\s|<[^>]+>)*/, m => m.replace(/<[^>]+>/g, ''))))) return;
    el.innerHTML = parts.map(p => {
      const m = p.match(NUM);
      return m ? `<span class="mli"><span class="mln">${m[2]}</span><span class="mlt">${p.slice(m[0].length)}</span></span>` : p;
    }).join('<br>').replace(/<\/span><\/span><br>/g, '</span></span>').replace(/<br>(<span class="mli">)/g, '$1');
  });
}
/* 한눈에(gl-box) 맞추기 — 문법 제목이 두세 줄인 과(-는데 · 동사/형용사/명사)는 꼴 카드까지 넣으면 아래로 넘친다.
   넘칠 때만 칸을 한 단씩 줄인다(2026-10-08). */
function fitGl(root){
  const box = root && root.querySelector('.gl-box');
  if(!box) return;
  const secs = [...box.querySelectorAll('.gl-sec')];
  secs.forEach(s => s.style.zoom = '');
  /* 칸 안 마지막 것의 화면 아래 끝으로 잰다 — zoom 을 걸면 scrollHeight 단위가 달라져 쓸 수 없다 */
  /* 오늘의 표현은 한 문장 한 줄(02-22 · 03-20 · 15-23) — 줄이 칸 폭을 넘어도 줄인다 */
  /* 칸만이 아니라 글이 든 상자(오늘의 표현 분홍 상자 · 꼴 줄 상자)도 넘으면 줄인다 — 13과 「Clock time」 · 「일해요.」가 상자 밖으로 나갔다(11-05 대표님) */
  /* 글자가 실제로 끝나는 자리로 잰다 — 칸(span) 폭은 상자 안에 머문 채 글자만 밖으로 나가기도 한다 */
  const textRight = e => { const g = document.createRange(); g.selectNodeContents(e); return g.getBoundingClientRect().right; };
  const wide = s => [...s.querySelectorAll('.gl-ko .s, .gl-en .s')].some(e => textRight(e) > (e.closest('.gl-goal') || s).getBoundingClientRect().right - 8)
    || [...s.querySelectorAll('.gl-row')].some(r => { const rr = r.getBoundingClientRect(); return [...r.querySelectorAll('.gl-ex')].some(x => textRight(x) > rr.right - 8); });
  const over = s => { const last = s.lastElementChild; return wide(s) || (!!last && last.getBoundingClientRect().bottom > box.getBoundingClientRect().bottom - 14); };
  secs.forEach(s => { for(const z of [.94, .88, .82, .76, .7, .64]){ if(!over(s)) break; s.style.zoom = z; } });
}
function go(n){
  /* 장을 넘길 때는 펼쳐 둔 교사 메모를 닫는다 — 다음 장으로 갔는데 앞 장의
     메모가 떠 있으면 학생 앞에서 그것부터 치워야 한다. */
  document.querySelectorAll('.memopop-w:not([hidden])').forEach(w=>{
    w.hidden = true;
    const b = w.parentElement.querySelector('.memopop-b');
    if(b){ b.classList.remove('on'); const i = b.querySelector('i'); if(i) i.textContent = '열기'; }
  });
  idx = (n + slides.length) % slides.length;
  slides.forEach((s,k)=>s.classList.toggle('on', k===idx));
  fitGram(slides[idx]);
  alignSub(slides[idx]);
  oxFold(slides[idx]);
  fitTip(slides[idx]);
  fitEx(slides[idx]); fitSit(slides[idx]); fitBoard(slides[idx]); fitCk(slides[idx]);
  vcolor(slides[idx]);
  memoNum(slides[idx]);
  fitGl(slides[idx]);
  if(typeof setTimeout === 'function'){ const g = slides[idx]; setTimeout(() => { if(slides[idx] === g) fitGl(g); }, 500); }
  fitAct(slides[idx]);
  fitVc(slides[idx]); fitVqa(slides[idx]);
  fitSum(slides[idx]);
  if(typeof setTimeout === 'function'){ const s = slides[idx]; setTimeout(() => { if(slides[idx] === s){ fitAct(s); fitVc(s); fitVqa(s); fitSum(s); } }, 450); }   /* 빙고 판 · 글꼴이 늦게 서는 장 — 한 번 더 */
  /* 장은 14px 아래에서 올라오며 들어온다(@keyframes in) — 움직이는 동안 잰 값은 그만큼 어긋나므로 다 들어온 뒤 한 번 더. */
  { const s = slides[idx]; s.addEventListener('animationend', () => { if(s.classList.contains('on')){ fitTip(s); fitEx(s); fitSit(s); fitBoard(s); fitCk(s); fitAct(s); fitVc(s); fitVqa(s); fitSum(s); } }, { once: true }); }
  [...dots.children].forEach((d,k)=>d.classList.toggle('on', k===idx));
  document.getElementById('cur').textContent = idx + 1;
  document.getElementById('sname').textContent = slides[idx].dataset.name;
  window.scrollTo({top:0, behavior:'smooth'});
}
/* 끝에서 한 번 더 누르면 옆 과로 넘어갑니다 (과 안에서는 순환하지 않습니다). */
function step(d){
  const at = d > 0 ? slides.length - 1 : 0;
  if(idx === at && hopLesson(d)) return;
  go(idx + d);
}
document.getElementById('prev').addEventListener('click', ()=>step(-1));
document.getElementById('next').addEventListener('click', ()=>step(1));
document.getElementById('lprev').addEventListener('click', ()=>hopLesson(-1));
document.getElementById('lnext').addEventListener('click', ()=>hopLesson(1));
/* 글을 쓰고 있는 중이면 슬라이드를 넘기지 않는다.
   말풍선 빈칸에서 띄어쓰기를 하면 스페이스가 「다음 슬라이드」로 먹혀
   글을 쓸 수가 없다. 글을 받는 자리에서는 키를 그 자리에 둔다. */
const TYPING = el => !!(el && (el.isContentEditable ||
  /^(INPUT|TEXTAREA|SELECT)$/.test(el.tagName)));

document.addEventListener('keydown', e=>{
  if(TYPING(e.target)){ if(e.key==='Escape') e.target.blur(); return; }
  if(e.target.tagName==='BUTTON' && (e.key===' '||e.key==='Enter')) return;
  if(e.key==='ArrowRight'||e.key===' '){ e.preventDefault(); step(1); }
  if(e.key==='ArrowLeft') step(-1);
  if(e.key==='ArrowDown'){ e.preventDefault(); hopLesson(1); }
  if(e.key==='ArrowUp'){ e.preventDefault(); hopLesson(-1); }
  if(e.key==='Escape') closeToc();
});

/* 카드 열고 닫기 */
stage.addEventListener('click', e=>{
  /*
   * 조사 고르기가 가장 먼저다. 단추를 누르면 그 조사의 답만 보이고,
   * 이미 열어 둔 카드는 도로 닫는다 — 답을 보고 나서 조사를 바꾸면
   * 학생이 다시 말해 볼 기회가 없어진다.
   */
  const wsel = e.target.closest('.wsel-b');
  if(wsel){
    PICK = wsel.dataset.wk;
    /* 고르는 줄은 슬라이드마다 하나씩 있다. 한 곳에서 고르면 나머지도 같이
       옮겨야 다음 화면에서 다시 고르는 일이 없다. */
    stage.querySelectorAll('.wsel-b').forEach(b=>b.classList.toggle('on', b.dataset.wk===PICK));
    stage.querySelectorAll('.ra').forEach(r=>r.classList.toggle('on', r.dataset.wk===PICK));
    /* 열어 둔 카드는 도로 닫는다. 답을 보고 나서 조사만 갈면 학생이 다시
       말해 볼 기회가 없어진다. */
    stage.querySelectorAll('.wcard.open, .vcard.open').forEach(c=>c.classList.remove('open'));
    if(bingoEl) drawBingo();
    if(relayEl) drawRelay();
    return;
  }
  /* 고르는 카드가 먼저다. 고른 장소로 문장을 만들어 보여 준다. */
  const opt = e.target.closest('.vopt');
  if(opt){
    const card = opt.closest('.pickcard');
    card.querySelectorAll('.vopt').forEach(b=>b.classList.toggle('on', b===opt));
    card.querySelector('.vres').textContent = opt.dataset.say;
    card.classList.add('open');
    return;
  }
  /* 두 걸음 카드는 점을 눌러 연다 — 빨강은 함께 쓸 낱말, 파랑은 문장. */
  const dot = e.target.closest('.vdot, .wdot');
  if(dot){
    const card = dot.closest('.vcard.step, .wcard.step');
    const key = dot.dataset.step === '1' ? 's1' : 's2';
    card.classList.toggle(key);
    return;
  }
  const c = e.target.closest('.wcard, .qcard, .vcard');
  /* 고르는 카드와 두 걸음 카드는 카드를 눌러서는 열리지 않는다. */
  if(c && !c.classList.contains('pickcard') && !c.classList.contains('step')) c.classList.toggle('open');
});

/* ══ 활동 1 · 빙고 ══ */
const LINES=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
let board=[], bingoEl, bingoStatus;
/*
 * 누가 말한 답인지가 칸에 남아야 <b>게임이 된다.</b>
 *
 * 칸 하나에 단추가 하나뿐이면, 학생이 말한 답도 교사가 누르는 순간 교사가 말한
 * 것처럼 보인다. 두 사람이 주고받는 놀이인데 판에는 한 사람만 남는 셈이다.
 * 그래서 칸마다 빨강·파랑 두 점을 둔다 — 빨강은 선생님, 파랑은 학생이다.
 * 눌린 점의 색이 그대로 칸의 색이 되므로, 판만 봐도 누가 몇 칸을 가져갔는지 보인다.
 */
function drawBingo(){
  /* 빙고는 <b>한 사람이</b> 한 줄을 다 채웠을 때만 — 선생님 칸 · 학생 칸이 섞인 줄은 아무의 빙고도 아니다.
     섞여도 세던 때는 판이 다 차면 「빙고 8줄 완성!」이 떴다(대표님 2026-10-09 01-14). */
  const done = LINES.filter(l=>board[l[0]].hit && l.every(k=>board[k].hit === board[l[0]].hit));
  const inLine = new Set(done.flat());
  const nT = done.filter(l=>board[l[0]].hit==='t').length, nS = done.length - nT;
  /*
   * 두 자리를 쓰는 과에서는 칸마다 <b>어느 쪽을 붙일 칸인지</b>를 알약으로 알려 준다.
   *
   * 「월요일」 한 낱말만 서 있으면 학생은 부터인지 까지인지 고를 거리가 없어 반반으로
   * 찍는다. 답이 부터로 끝나는 칸에는 from, 까지로 끝나는 칸에는 to 를 낱말 옆에
   * 같은 크기의 알약으로 세운다 — 영어라 교실에서 따로 풀어 줄 것이 없다(13-12).
   */
  const BHINT = p => {
    const s = String(typeof p === 'string' ? p : (Object.values(p || {})[0] || ''));
    /* 방향이 뒤집히는 과(14과)는 화살표로 알려 준다 — 주는 쪽은 낱말에서 나가고,
       받는 쪽은 낱말로 들어온다. 「선배」만 서 있으면 한테인지 한테서인지 고를
       거리가 없다(14-12). */
    if(/(에게서|한테서)$/.test(s)) return '←';
    if(/(에게|한테)$/.test(s)) return '→';
    if(/(부터|에서)$/.test(s)) return 'from';
    if(/까지$/.test(s)) return 'to';
    return '';
  };
  /* 알약이 판 전체에서 한 가지뿐이면 고를 거리가 아니다 — 9과(에서 장소)는 칸마다
     「from」만 서서 뜻까지 틀리게 읽혔다(2026-09-24 대표님). 둘 이상일 때만 세운다. */
  const 갈림 = new Set(((bingoSets[bingoAt] || {}).pairs || []).map(x => BHINT(Array.isArray(x) ? x[1] : x)).concat(board.map(c => BHINT(c.p))).filter(Boolean)).size > 1;
  bingoEl.innerHTML = board.map((c,k)=>
    `<div class="bcell${c.hit?' hit by-'+c.hit:''}${inLine.has(k)?' line':''}" data-k="${k}">` +
    `<span class="bword">${c.hit?PICKED(c.p):c.b}${
      !c.hit && 갈림 && BHINT(c.p)
        ? `<span class="bhint${/[←→]/.test(BHINT(c.p)) ? ' arw' : ''}">${BHINT(c.p)}</span>` : ''}</span>` +
    `<span class="bpick">` +
      `<button class="bdot t${c.hit==='t'?' on':''}" type="button" data-k="${k}" data-by="t" title="선생님이 말했어요"></button>` +
      `<button class="bdot s${c.hit==='s'?' on':''}" type="button" data-k="${k}" data-by="s" title="학생이 말했어요"></button>` +
    `</span></div>`).join('');
  bingoStatus.textContent = done.length
    ? `🎉 ${[nT ? `선생님 빙고 ${nT}줄` : '', nS ? `학생 빙고 ${nS}줄` : ''].filter(Boolean).join(' · ')}!`
    : '말한 사람의 색을 누르세요';
  bingoStatus.classList.toggle('win', done.length>0);
}
/*
 * 빙고 판을 여러 개 둘 수 있다.
 *
 * 한 과에서 만드는 법이 갈리면(-겠어요 / -았·었겠어요) 한 판에 섞어서는
 * 연습이 안 된다. 학생은 아홉 칸을 다 「겠어요」로 읽고 지나간다. 그래서
 * 판을 갈래별로 두고 「새 판」으로 넘긴다 — 한 판을 끝내고 다음 판에
 * 들어가면 그때 -았/었- 이 눈에 띈다.
 *
 * 데이터는 두 가지를 다 받는다.
 *   bingo:[['맛있다','맛있겠어요'], …]                     ← 한 판
 *   bingo:[{tag:'-겠어요', pairs:[…]}, {tag:'-았/었겠어요', pairs:[…]}]  ← 여러 판
 */
let bingoSets = [], bingoAt = 0, bingoSetEl;
function bingoBoards(L0){
  const b = L0.bingo || [];
  return b.length && !Array.isArray(b[0]) ? b : [{tag:'', pairs:b}];
}
function newBingo(pick){
  /* 판이 여럿이면 누를 때마다 다음 판으로. 하나뿐이면 그 판을 다시 섞는다.
     판을 집어 주면(pick) 그 판으로 간다 — 아래 단추가 그렇게 부른다. */
  if(Number.isInteger(pick)) bingoAt = pick;
  else if(bingoSets.length > 1) bingoAt = (bingoAt + 1) % bingoSets.length;
  const set = bingoSets[bingoAt] || {pairs:[]};
  /* 칸 색이 판을 따라간다 — 초록 판과 황토 판을 한눈에 가른다(26-16). */
  if(bingoEl) bingoEl.className = 'bingo' + (set.c ? ' ' + set.c : '');
  const picked = document.getElementById('bingoPick');
  if(picked) [...picked.children].forEach((b, i) => b.classList.toggle('on', i === bingoAt));
  board = [...set.pairs].sort(()=>Math.random()-.5).slice(0,9).map(([b,p])=>({b,p,hit:false}));
  if(bingoSetEl) bingoSetEl.textContent =
    bingoSets.length > 1 ? `${set.tag} · ${bingoAt+1}/${bingoSets.length}판` : '';
  drawBingo();
}
function initBingo(){
  bingoEl = document.getElementById('bingo');
  bingoStatus = document.getElementById('bingoStatus');
  bingoSetEl = document.getElementById('bingoSet');
  bingoSets = bingoBoards(LESSONS[lesson]);
  /* 첫 판부터 보여 준다. newBingo 가 먼저 한 칸 넘기므로 뒤로 한 칸 물려 둔다. */
  bingoAt = bingoSets.length > 1 ? -1 : 0;
  bingoEl.addEventListener('click', e=>{
    /* 점을 누르면 그 사람이 가져간다. 같은 점을 다시 누르면 되돌린다.
       점이 아닌 자리를 눌러도 되돌아간다 — 잘못 눌렀을 때 빠져나갈 길이다. */
    const dot = e.target.closest('.bdot');
    const cell = e.target.closest('.bcell');
    if(!dot && !cell) return;
    const k = +(dot || cell).dataset.k;
    const by = dot ? dot.dataset.by : null;
    board[k].hit = (by && board[k].hit !== by) ? by : false;
    drawBingo();
  });
  document.getElementById('bingoNew').addEventListener('click', () => newBingo());
  const picked = document.getElementById('bingoPick');
  if(picked) picked.addEventListener('click', e => {
    const b = e.target.closest('.bpick-b');
    if(b) newBingo(+b.dataset.set);
  });
  newBingo(bingoSets.length > 1 ? 0 : undefined);
}

/* ══ 활동 2 · 릴레이 ══ */
let relayEl, relayNext, rSet=0, rShown=0;
function drawRelay(){
  const set = LESSONS[lesson].relays[rSet];
  let b = -1;
  relayEl.innerHTML = set.map((p,k)=>{
    const arrow = k ? '→&nbsp;' : '';
    if(!p.ans) return `<span class="lead">${arrow}${p.t}</span>`;
    b++;
    /* 물음표는 가리지 않고 빈칸 옆에 미리 보여 준다.
       질문이라는 걸 알아야 학생이 끝을 올려 말한다. */
    const raw = PICKED(p.ans);
    const q = /\?$/.test(raw);
    const ans = q ? raw.slice(0,-1) : raw;
    return `<span class="slot${b<rShown?' on':''}" data-b="${b}">${arrow}` +
           `${p.sub ? p.sub+'&nbsp;' : ''}<em>${p.base}</em><s>→</s>` +
           `<b>${ans}</b>${q ? '<i class="qm">?</i>' : ''}</span>`;
  }).join('');
  const total = set.filter(p=>p.ans).length;
  const done = rShown >= total;
  relayNext.textContent = done ? '완성! 🎉' : `다음 정답 → (${rShown}/${total})`;
  relayNext.disabled = done;
  drawRelayFull(set, done);
  /* 답을 열수록 칸이 늘고 끝에는 완성 문장이 붙는다 — 그때마다 다시 맞춘다 */
  { const sl = relayEl.closest ? relayEl.closest('.slide') : null;   /* 맛보기 빌드의 가짜 DOM 에는 closest 가 없다 */
    fitAct(sl); if(sl && typeof setTimeout === 'function') setTimeout(() => fitAct(sl), 420); }   /* 완성 대화는 펼쳐지며 들어온다 — 다 들어온 뒤 한 번 더 */
}

/*
 * 다 맞힌 뒤에 보여 주는 「완성된 대화」.
 *
 * 조각을 이어 붙여 두 줄로 세웁니다. 첫 조각이 물음이면 그것이 A, 나머지가 B입니다.
 * 물음이 아니면 한 사람이 이어 말하는 것이니 줄을 나누지 않습니다.
 *
 * 오늘의 문법은 빨갛게 둡니다. 어느 조각이 문장 어디에 들어갔는지가
 * 이 장면이 하는 일이라, 색이 없으면 그냥 긴 문장 하나로 보입니다.
 * 표시할 자리는 예문에서 이미 쓰고 있는 WRITE_RE 를 그대로 씁니다 —
 * 말풍선 빈칸과 같은 규칙이라 학생 눈에 같은 것으로 보입니다.
 */
function markGrammar(text){
  const esc = t => t.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
  const hit = [];
  (WRITE_RE || []).forEach(re => {
    re.lastIndex = 0;
    let m;
    while((m = re.exec(text))) hit.push([m.index, m.index + m[0].length]);
  });
  hit.sort((x,y) => x[0] - y[0] || y[1] - x[1]);
  let html = '', pos = 0;
  hit.forEach(p => {
    if(p[0] < pos) return;
    html += esc(text.slice(pos, p[0])) + '<mark>' + esc(text.slice(p[0], p[1])) + '</mark>';
    pos = p[1];
  });
  return html + esc(text.slice(pos));
}

function drawRelayFull(set, done){
  const box = document.getElementById('relayFull');
  if(!box) return;
  if(!done){ box.innerHTML = ''; box.classList.remove('on'); return; }

  /* 조각을 차례대로 이어 붙입니다. 빈칸 자리는 정답으로 채웁니다. */
  const parts = set.map(p => (p.ans ? PICKED(p.ans) : p.t).trim()).filter(Boolean);
  const join  = xs => xs.join(' ').replace(/\s+([.,!?])/g, '$1');
  /* 물음이 여러 조각으로 이어져도(누가 + 학생 + 이에요?) 물음표가 나온 조각까지가 A, 그 뒤가 B —
     대화는 A · B 두 줄, 물음이 없는 혼자 말은 한 줄 그대로(2026-10-09 대표님 07-13). */
  /* 물음과 대답이 두 번 오면(이거 뭐예요? 책이에요. 저거? 의자예요.) A · B 를 번갈아 넷으로 */
  const asks  = parts.some((p, k) => /\?$/.test(p) && k < parts.length - 1);
  const lines = [];
  if(asks){
    let cur = [], who = 'A';
    parts.forEach(p => {
      if(who === 'B' && /\?$/.test(p)){ lines.push({who:'B', t:join(cur)}); cur = []; who = 'A'; }
      cur.push(p);
      if(who === 'A' && /\?$/.test(p)){ lines.push({who:'A', t:join(cur)}); cur = []; who = 'B'; }
    });
    if(cur.length) lines.push({who, t:join(cur)});
  } else lines.push({who:'', t:join(parts)});

  box.innerHTML =
    `<span class="rf-label">완성된 대화</span>` +
    lines.map(l =>
      `<p class="rf-line">${l.who ? `<b>${l.who}</b>` : ''}${markGrammar(l.t)}</p>`).join('');
  box.classList.add('on');
}
function initRelay(){
  relayEl = document.getElementById('relay');
  relayNext = document.getElementById('relayNext');
  rSet = 0; rShown = 0;
  relayEl.addEventListener('click', e=>{
    const slot = e.target.closest('.slot');
    if(!slot) return;
    const b = +slot.dataset.b;
    rShown = slot.classList.contains('on') ? b : b+1;
    drawRelay();
  });
  relayNext.addEventListener('click', ()=>{ rShown++; drawRelay(); });
  document.getElementById('relayReset').addEventListener('click', ()=>{ rShown=0; drawRelay(); });
  document.getElementById('relayNew').addEventListener('click', ()=>{
    rSet = (rSet+1) % LESSONS[lesson].relays.length; rShown = 0; drawRelay();
  });
  drawRelay();
}

/* ══ 규칙표 · Enter로 하나씩 공개 ══
   한 과에 규칙표가 여러 장일 수 있습니다(-는데는 현재·과거·앞일로 갈립니다).
   그래서 표 하나가 아니라 표 목록을 들고, 지금 보고 있는 슬라이드의 표에만
   Enter 가 듣게 합니다. */
let rtBoxes = [];
function rtUpdate(box){
  fitMtWrap(box.el);  /* 열 때마다 칸 폭이 바뀌어 접힘이 달라진다(30-08) */
  if(!box.hint || !box.rvs.length) return;
  const shown = box.rvs.filter(x=>x.classList.contains('on')).length;
  box.hint.textContent = shown === box.rvs.length
    ? '✅ 모두 공개했어요'
    : ''; /* 「Enter로 하나씩 · 0/4」 셈은 뺐다(대표님 2026-10-09 01-10, 모든 장) — Enter 로 여는 것은 그대로 */
}
function initRuleTable(){
  /* 형태소 카드도 같은 방식으로 하나씩 엽니다. 본보기로 열어 둔 칸(.show)은
     셈에서 뺍니다 — 그건 학생이 맞힐 것이 아니라 보여 주는 것입니다. */
  rtBoxes = [...document.querySelectorAll('.ruletable, .morphcard')].map(el => {
    const box = {el, rvs:[...el.querySelectorAll('.rv:not(.show)')], hint:el.querySelector('.rt-hint')};
    box.rvs.forEach(s => s.addEventListener('click', ()=>{ s.classList.toggle('on'); rtUpdate(box); }));
    const reset = el.querySelector('.rt-reset');
    if(reset) reset.addEventListener('click', ()=>{
      box.rvs.forEach(s=>s.classList.remove('on')); rtUpdate(box);
    });
    rtUpdate(box);
    return box;
  });
}
document.addEventListener('keydown', e=>{
  if(e.key!=='Enter' || e.target.tagName==='BUTTON' || TYPING(e.target)) return;
  const box = rtBoxes.find(b => slides[idx] && slides[idx].contains(b.el));
  if(!box) return;
  e.preventDefault();
  const next = box.rvs.find(x=>!x.classList.contains('on'));
  if(next) next.classList.add('on');
  rtUpdate(box);
});

/* ══════════ 교사 메모 펼치기 ══════════
   단추를 누르면 그 슬라이드 위에 메모가 통째로 펼쳐진다. 다시 누르거나 ✕,
   또는 덮인 바탕을 누르면 닫힌다. 슬라이드를 넘기면 열려 있던 것도 닫는다 —
   다음 장으로 갔더니 앞 장 메모가 떠 있으면 학생 앞에서 당황한다. */
document.addEventListener('click', e => {
  const open = e.target.closest('.memopop-b');
  if(open){
    const box = open.parentElement.querySelector('.memopop-w');
    const 열림 = box.hidden;
    box.hidden = !열림;
    open.classList.toggle('on', 열림);
    open.querySelector('i').textContent = 열림 ? '닫기' : '열기';
    return;
  }
  const shut = e.target.closest('.memopop-x') ? e.target.closest('.memopop-w')
             : (e.target.classList && e.target.classList.contains('memopop-w') ? e.target : null);
  if(!shut) return;
  shut.hidden = true;
  const btn = shut.parentElement.querySelector('.memopop-b');
  if(btn){ btn.classList.remove('on'); btn.querySelector('i').textContent = '열기'; }
});

/* ══════════ 첫 화면 ══════════
   주소 뒤에 ?l= 로 과를, ?s= 로 슬라이드를 집어 줄 수 있다.
   과는 번호(1부터)로도, 문법 이름으로도 받는다 — ?l=3 이나 ?l=은/는.  */
(function boot(){
  const raw = QS.get('l');
  if(raw){
    const n = Number(raw);
    const found = Number.isFinite(n) && n >= 1
      ? n - 1
      : LESSONS.findIndex(x => x.key === decodeURIComponent(raw));
    if(found >= 0 && found < LESSONS.length) lesson = found;
  }
  loadLesson();
  const s = Number(QS.get('s'));
  if(Number.isFinite(s) && s >= 1 && s <= slides.length) go(s - 1);
})();


/* v3 그림 맞추기 — 한 판 안의 카드는 모두 같은 틀로 선다(2026-09-24 규칙). 11-04 대표님 확정:
   ① 그림 왼쪽, 그림 칸 42 → 36 → 30% (글자 그대로)
   ② 그래도 넘치면 글자(낱말 · 뜻 · 답 함께)를 90 → 85 → 80% (「나」)
   ③ 3개짜리 판(답이 길어 둘로 나눈 묶음, try-split.js)은 그림을 위에 크게(.v3top, 150px 부터)
   답이 열린 모습으로 잰다 — 눌렀을 때 넘치면 안 되므로(fitVc 와 같은 방식). fitVc 가 글자 크기를 정한 뒤에 돈다. */
function v3fit(root){
  const g = root && root.querySelector('.vgrid');
  if(!g || !g.querySelector('.vcard .vemo')) return;
  const cards = [...g.querySelectorAll('.vcard')];
  /* 그림이 하나도 없는 판(12과 도시 짝 — 글자로만 쓰는 카드)은 엔진 본래 배치 그대로 */
  if(!g.querySelector('.vemo img, .vemo svg, .vemo .flag, .vemo .daytag')){ ['--v3c', '--v3z', '--v3h'].forEach(p => g.style.removeProperty(p)); g.classList.add('v3top'); return; }
  const keep = cards.map(c => c.className);
  g.classList.add('v3meas');
  cards.forEach(c => { if(c.classList.contains('step')) c.classList.add('s1', 's2'); else c.classList.add('open'); });
  const over = () => cards.some(c => {
    const b = c.getBoundingClientRect();
    /* 장이 들어오는 애니메이션(scale) 도중에도 같게 재도록 — 화면 크기 ÷ 제 크기 */
    const s = c.offsetWidth ? b.width / c.offsetWidth : 1;
    /* 두 걸음 카드의 동그라미 단추(오른쪽 위)와 글자가 겹쳐도 넘침 */
    const dot = c.querySelector(':scope > .vpick2'), d = dot && dot.getBoundingClientRect();
    return [...c.children].some(k => {
      if(k.classList.contains('vtag') || k.classList.contains('vemo') || k.classList.contains('vpick2')) return false;
      const r = k.getBoundingClientRect();
      if(!r.width && !r.height) return false;
      const right = r.left + k.scrollWidth * (k.currentCSSZoom || 1) * s;
      if(d && d.width && r.top < d.bottom + 4 * s && r.bottom > d.top && right > d.left - 6 * s) return true;
      /* 낱말 · 답은 한 줄(20-17 「한국의 / 음식이에요」 ✕) */
      if(k.matches('.vword, .vpair, .vres') && k.textContent.trim()){ const fs = Math.max(parseFloat(getComputedStyle(k).fontSize) || 16, ...[...k.querySelectorAll('*')].map(q => parseFloat(getComputedStyle(q).fontSize) || 0)); if(k.offsetHeight > fs * 1.9) return true; }
      return right > b.right - 8 * s || r.bottom > b.bottom - 2 * s || r.top < b.top + 2 * s;
    }) || (() => { /* 그림이 왼쪽 위 딱지(받침 O 등)에 닿아도 넘침 */
      if(!g.classList.contains('v3top')) return false; /* 그림 왼쪽 배치에서는 그림 투명 모서리만 닿는다 — 위 배치(넓은 국기 등)만 잰다 */
      const t = c.querySelector(':scope > .vtag'); if(!t) return false; const tr = t.getBoundingClientRect(); if(!tr.width) return false;
      return [...c.querySelectorAll('.vemo img, .vemo svg')].some(i => { const q = i.getBoundingClientRect(); return q.left < tr.right + 4 * s && q.top < tr.bottom + 4 * s && q.right > tr.left && q.bottom > tr.top; });
    })() || [...c.querySelectorAll('.vemo')].some(v => { const r = v.getBoundingClientRect(); return r.top < b.top + 12 * s || r.bottom > b.bottom - 8 * s || [...v.querySelectorAll("img, svg")].some(i => { const q = i.getBoundingClientRect(); return q.left < b.left + 10 * s || q.right > b.right - 10 * s; }); });
  });
  ['--v3c', '--v3z', '--v3h'].forEach(p => g.style.removeProperty(p)); g.classList.remove('v3top');
  const three = g.dataset.rows === '1';
  let done = false;
  if(!three) for(const z of [1, .9, .85, .8]){
    g.style.setProperty('--v3z', z);
    for(const c of [42, 36, 30]){ g.style.setProperty('--v3c', c + '%'); if(!over()){ done = true; break; } }
    if(done) break;
  }
  if(!done){
    g.classList.add('v3top');
    /* 그림이 96px 아래로 작아지느니 긴 답 줄을 조금(80%까지) 줄인다 — 넘침이 폭 때문이면 그림을 줄여도 소용없다 */
    const tryH = (min) => { for(const h of [220, 200, 180, 165, 150, 136, 122, 110, 96, 84, 72, 62, 54]){ if(h < min) return false; g.style.setProperty('--v3h', h + 'px'); if(!over()) return true; } return false; };
    let ok = false;
    for(const z of [1, .9, .85, .8]){ g.style.setProperty('--v3z', z); if(tryH(96)){ ok = true; break; } }
    if(!ok) tryH(0);
  }
  cards.forEach((c, i) => { c.className = keep[i]; });
  void g.offsetWidth; g.classList.remove('v3meas');
}
{ const fitVc0 = fitVc; fitVc = function(root){ fitVc0(root); v3fit(root); }; }
