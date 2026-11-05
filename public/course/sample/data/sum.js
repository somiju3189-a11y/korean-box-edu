/* scripts/build-course-sample.mjs 가 만든 파일입니다. 직접 고치지 마세요. */
const SUMB = {
  "이에요/예요": {
    "w": [
      {
        "h": "Consonant? — <b>이에요</b> · <b>예요</b>"
      },
      {
        "h": "Questions — just raise your voice ↗",
        "ln": [
          "A. 리에 씨, 일본 사람[[이에요]]?",
          "B. 네, 일본 사람[[이에요]]."
        ]
      },
      {
        "h": "Names — same rule",
        "form": 1,
        "ex": "마이클[[이에요]] · 리에[[예요]]"
      }
    ],
    "memo": [
      [
        "· 이름·사물·직업이 무엇인지 말합니다."
      ],
      [
        "· 1. 앞말에 받침 O → 이에요, 받침 X → 예요입니다.",
        "· 2. 질문은 끝만 올려서 말합니다.",
        "· 3. 사람 이름에도 같은 규칙을 씁니다."
      ],
      [
        "○ A. 리에 씨, 일본 사람이에요?",
        "○ B. 네, 일본 사람이에요.",
        "○ 마이클이에요 · 리에예요"
      ],
      []
    ]
  }
};

const SUMWARN = (() => {
  const OXCHECK = '<svg class="oxi" viewBox="0 0 12 12" aria-hidden="true"><path d="M2.6 6.4 L4.9 8.8 L9.4 3.4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  const OXCROSS = '<svg class="oxi" viewBox="0 0 12 12" aria-hidden="true"><path d="M3.4 3.4 L8.6 8.6 M8.6 3.4 L3.4 8.6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>';
  const XB = '<span class="oxb no">' + OXCROSS + '</span>', OB = '<span class="oxb ok">' + OXCHECK + '</span>';
  const MK = t => String(t)
    .replace(/!!(.+?)!!/g, (m, x) => '<span class="xq">' + XB + '<span class="bad">' + x + '</span></span>')
    .replace(/@@(.+?)@@/g, (m, x) => '<span class="xq">' + OB + '<span class="okx">' + x + '</span></span>')
    .replace(/__(.+?)__/g, '<span class="wr wu">$1</span>')
    .replace(/\[\[(.+?)\]\]/g, '<span class="wr">$1</span>')
    .replace(/\{\{(.+?)\}\}/g, '<span class="wbl">$1</span>')
    .replace(/%%(.+?)%%/g, '<span class="wgr">$1</span>');
  const LAB = /^(Same subject|Instruction|On the spot|No command|These days|Intention|Sequence|Activity|Not able|Listing|Promise|Future|Choice|Favor|Guess|Plan|Past|Act|Now): ?(.*)$/;
  const RULE = /^(Consonant[?]|Any stem|Always|Verbs — always|Pick like|-아[/]어요|Three forms|Past — <b>-았|ㄹ drops|ㅂ irregular|Consonant|Vowel[?]|ㄷ irregular|르 irregular|ㅡ drops|ㅎ irregular|ㅅ irregular)/;
  const RL = '<span class="wrule">▸ Form</span>';
  const EXI = t => '<span class="wexi"><span class="weg">e.g.</span><span class="wexb">' + MK(t) + '</span></span>';
  const LNS = (ls, row) => ls.every(l => LAB.test(l))
    ? '<span class="wln' + (row ? ' wrow' : '') + '"><span class="weg">e.g.</span><span class="wtb">' + ls.map(l => {
        const m = l.match(LAB), x = MK(m[2]);
        const c = /class="wbl"/.test(x) ? 'pcb' : /class="wr/.test(x) ? 'pcr' : 'pcn';
        return '<span class="wpr ' + c + '"><span class="wtl">' + m[1] + '</span><span class="wtx">' + x + '</span></span>';
      }).join('') + '</span></span>'
    : '<span class="wln"><span class="weg">e.g.</span><span class="wlnb">' + ls.map(l => '<span>' + MK(l) + '</span>').join('') + '</span></span>';
  const PATK = t => String(t).replace(/<span class="wr">/g, '<span class="wr wchip">').replace(/<span class="wbl">/g, '<span class="wbl wchip">');
  /* 줄임 꼴 둘을 같은 자리에서 시작하는 두 줄로, 오른쪽은 e.g. 예문 상자(대표님 2026-10-10 20-06) */
  const PAIRS = ps => '<span class="wpg">' + ps.map(([f, l, t]) => '<span class="wpf">' + f + '</span><span class="wexi wpx"><span class="weg">e.g.</span><span class="wpl">' + l + '</span><span class="wexb">' + MK(t) + '</span></span>').join('') + '</span>';
  const ROWS = (rs, pat) => '<span class="wln wvt"><span class="wvtb">' + rs.map(([l, t]) => '<span class="wvl' + (/%%/.test(t) ? ' gr' : /\{\{/.test(t) ? ' blu' : '') + '">' + MK(l) + '</span><span class="wvx">' + (pat ? PATK(MK(t)) : MK(t)) + '</span>').join('') + '</span></span>';
  return sp => '<span class="whd">' + sp.h + '</span>' + (sp.form ? RL : '') + (sp.ex ? EXI(sp.ex) : '')
    + (sp.ln ? LNS(sp.ln, sp.row) : '') + (sp.rows ? ROWS(sp.rows, sp.pat) : '') + (sp.pairs ? PAIRS(sp.pairs) : '')
    + (!sp.form && !sp.ex && !sp.ln && !sp.rows && !sp.pairs && RULE.test(sp.h) ? RL : '');
})();
