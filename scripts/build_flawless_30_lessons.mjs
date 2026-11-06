import fs from 'fs';
import path from 'path';
import vm from 'vm';

import { COMPREHENSIVE_WORD_INFO } from './dictionary.mjs';
import { FULL_SPECS as SPECS_PART1 } from './specs_part1.mjs';
import { SPECS_PART2 } from './specs_part2.mjs';
import { SPECS_PART3 } from './specs_part3.mjs';
import { SPECS_PART4 } from './specs_part4.mjs';
import { SPECS_PART5 } from './specs_part5.mjs';
import { EXPANSION_SETS } from './expansion_sets.mjs';

const LESSON_SPECS = Object.assign({}, SPECS_PART1, SPECS_PART2, SPECS_PART3, SPECS_PART4, SPECS_PART5);

// 1. Read authentic SITGO database
const sitgoCode = fs.readFileSync('public/course/sample/data/sitgo.js', 'utf8');
const sitgoCtx = {};
vm.runInNewContext(sitgoCode.replace('const SITGO =', 'var SITGO ='), sitgoCtx);
const SITGO = sitgoCtx.SITGO || {};

// 2. Units definition
const unitsCode = fs.readFileSync('public/course/sample/units.js', 'utf8');
const UNITS = eval(unitsCode.replace('const UNITS =', ''));
const ORDER = UNITS.flatMap(u => u.items);

// Helper: check if last Korean syllable of string has 받침 (final consonant)
function hasBatchim(str) {
  const clean = String(str || '').trim();
  for (let i = clean.length - 1; i >= 0; i--) {
    const code = clean.charCodeAt(i) - 0xAC00;
    if (code >= 0 && code < 11172) {
      return (code % 28) !== 0;
    }
  }
  return false;
}

function getWordInfo(w) {
  return COMPREHENSIVE_WORD_INFO[w] || { g: "Korean expression", e: "📖" };
}

const dataDir = path.resolve('public/course/sample/data');
const v3Map = {
  "1|마이클|Michael": "v-1-michael.svg",
  "1|유진|Yujin": "v-1-yujin.svg",
  "1|하준|Hajun": "v-1-hajun.svg",
  "1|리에|Rie": "v-1-rie.svg",
  "1|사라|Sara": "v-1-sara.svg",
  "1|미나|Mina": "v-1-mina.svg",
  "1|책|book": "v-1-book.svg",
  "1|가방|bag": "v-1-bag.svg",
  "1|연필|pencil": "v-1-pencil.svg",
  "1|의자|chair": "v-1-chair.svg",
  "1|커피|coffee": "v-1-coffee.svg",
  "1|학생|student": "v-1-student.svg",
  "1|선생님|teacher": "v-1-teacher.svg",
  "1|회사원|office worker": "v-1-office-worker.svg",
  "1|의사|doctor": "v-1-doctor.svg",
  "1|가수|singer": "v-1-singer.svg",
  "1|요리사|cook": "v-1-cook.svg"
};

for (let n = 2; n <= 30; n++) {
  const key = ORDER[n - 1];
  const spec = LESSON_SPECS[n];
  const exp = EXPANSION_SETS[n] || {};

  if (!spec) {
    console.error(`Missing spec for lesson ${n} (${key})`);
    continue;
  }

  // 1. Primary Word Set (12 items: 6 in row 1, 6 in row 2)
  const words1 = [];
  spec.rows.forEach((row) => {
    row.ex.forEach(pair => {
      words1.push({
        b: pair[0],
        r: pair[1],
        t: row.k
      });
    });
  });

  // 2. Secondary Word Set (12 expansion items: 6 in row 1, 6 in row 2)
  const words2List = [];
  if (exp.rows2) {
    exp.rows2.forEach((row) => {
      row.ex.forEach(pair => {
        words2List.push({
          b: pair[0],
          r: pair[1],
          t: row.k
        });
      });
    });
  }

  // Build vocab items with authentic English meanings and accurate 받침 boolean
  const vocabItems = words1.slice(0, 6).map((w) => {
    const info = getWordInfo(w.b);
    if (info.pic) {
      v3Map[`${n}|${w.b}|${info.g}`] = info.pic;
    }
    return {
      e: info.e,
      w: w.b,
      g: info.g,
      r: w.r,
      b: hasBatchim(w.b)
    };
  });

  // Build sit items matching SITGO 1:1 with real Korean questions (q), English questions (qen), and natural Korean answers (m)
  const sitKey = key === "(으)로 (수단·방향)" ? "(으)로 (수단)" : key;
  const rawSitList = SITGO[sitKey] || SITGO[key] || [];
  const sitIcons = ["👋", "💬", "🎯", "🌏"];
  const sitCount = Math.max(rawSitList.length, spec.sits.length);
  const sitList = [];
  for (let i = 0; i < sitCount; i++) {
    const rawS = rawSitList[i] || rawSitList[0] || {};
    const customS = spec.sits[i] || spec.sits[spec.sits.length - 1];
    sitList.push({
      i: sitIcons[i % sitIcons.length],
      t: customS.t,
      v: customS.t,
      q: customS.q,
      qen: customS.qen,
      m: customS.m,
      memo: rawS.memo || "① 질문과 대답 예시를 함께 읽습니다.<br>② 교사가 먼저 질문하고 학생이 자신의 실제 상황으로 대답합니다.<br>③ 역할을 바꾸어 학생이 질문하고 교사가 대답합니다."
    });
  }

  // 3. Multi-Board Bingo: 2 Distinct Authentic Boards with [새 판] Switch!
  let bingoBoards;
  if (spec.bingoMulti) {
    bingoBoards = spec.bingoMulti;
  } else if (spec.bingoPairs && exp.rows2) {
    bingoBoards = [
      {
        tag: exp.tag1 || "1판 · 기본 연습",
        pairs: spec.bingoPairs
      },
      {
        tag: exp.tag2 || "2판 · 실전 확장",
        c: "g2",
        pairs: words2List.map(w => [w.b, w.r])
      }
    ];
  } else {
    bingoBoards = [
      {
        tag: exp.tag1 || "1판 · 기본 일상 어휘",
        pairs: words1.map(w => [w.b, w.r])
      },
      {
        tag: exp.tag2 || "2판 · 실전 확장 어휘",
        c: "g2",
        pairs: words2List.map(w => [w.b, w.r])
      }
    ];
  }

  // 4. Relays: 3 conversational sets matching Lesson 1
  const relays = [
    [
      { t: spec.ex1.aKo[0].replace(/\[\[|\]\]/g, '') },
      { base: words1[0].b, ans: `${words1[0].r}.` },
      { base: words1[4].b, ans: `${words1[4].r}.` }
    ],
    [
      { t: spec.askQ.replace(/\[\[|\]\]/g, '') },
      { base: words1[1].b, ans: `${words1[1].r}.` },
      { base: words1[7].b, ans: `${words1[7].r}.` }
    ],
    [
      { t: spec.ex2.aKo[0].replace(/\[\[|\]\]/g, '') },
      { base: spec.make[0].k.join(' · '), ans: spec.make[0].a },
      { base: spec.make[1].k.join(' · '), ans: spec.make[1].a }
    ]
  ];

  // 5. Build words2 (Set 2 Word Drill Slide)
  const words2Slide = words2List.length ? [
    {
      tag: `🔁 WORD DRILL ② <i>${exp.tag2 || '실전 확장 어휘'}</i>`,
      sub: "실제 생활에서 가장 자주 쓰이는 심화 어휘들입니다. 소리 내어 말해 보세요.",
      items: words2List
    }
  ] : [];

  const lessonObj = {
    key: key,
    pos: spec.pos,
    ...(spec.posT ? { posT: spec.posT } : {}),
    form: key.replace(/\s*\([^)]*\)/g, ''),
    ...(spec.formT ? { formT: spec.formT } : {}),
    gpic: [
      { e: "📖", c: key, t: "navy" },
      { sign: "=" },
      { e: "✨", c: spec.pos, t: "accent" }
    ],
    mean: {
      ko: spec.meanKo,
      en: spec.meanEn
    },
    warn: [
      { ko: "그림 속 실제 상황과 핵심 문형을 연결하며 자연스럽게 말해 보세요.", en: "Connect the situation in the illustration with the key pattern and speak naturally." },
      { ko: "받침 유무와 결합 형태 변화에 주의하세요.", en: "Pay attention to form changes based on final consonants." }
    ],
    ask: {
      q: spec.askQ,
      en: spec.askEn
    },
    en: spec.en,
    prior: [],
    pat: spec.pat,
    hero: {
      pic: [
        { e: "🧑", c: key, t: "navy" },
        { e: "💬", c: spec.pos, t: "accent" }
      ],
      ko: spec.heroKo,
      en: spec.heroEn
    },
    ex: [
      {
        label: spec.ex1.label,
        scene: `/course/sample/scenes/ex-${n}-1.svg`,
        ask: { q: spec.ex1.askQ, en: spec.ex1.askEn },
        pic: [{ e: "🙋", c: key, t: "navy" }],
        a: { who: spec.ex1.aWho, ko: spec.ex1.aKo, en: spec.ex1.aEn },
        b: { who: spec.ex1.bWho, ko: spec.ex1.bKo, en: spec.ex1.bEn },
        morph: spec.ex1.morph
      },
      {
        label: spec.ex2.label,
        scene: `/course/sample/scenes/ex-${n}-2.svg`,
        ask: { q: spec.ex2.askQ, en: spec.ex2.askEn },
        pic: [{ e: "🗣️", c: key, t: "accent" }],
        a: { who: spec.ex2.aWho, ko: spec.ex2.aKo, en: spec.ex2.aEn },
        b: { who: spec.ex2.bWho, ko: spec.ex2.bKo, en: spec.ex2.bEn },
        morph: spec.ex2.morph
      }
    ],
    review: spec.review,
    rules: {
      head: "Rule <i>규칙</i>",
      th: ["구분", "결합 형태", "예시"],
      rows: spec.rows
    },
    tips: [
      { c: "", h: `💡 TIP ① · ${key} 결합 규칙`, p: `<b>${spec.rows[0].k}</b>일 때는 <span class="g">${spec.rows[0].f}</span>, <b>${spec.rows[1].k}</b>일 때는 <span class="g2">${spec.rows[1].f}</span> 형태를 씁니다.<br><br><span class="yes">O</span> ${spec.rows[0].ex[0][1]} / ${spec.rows[1].ex[0][1]}` },
      { c: "navy", h: `💡 TIP ② · 핵심 의미와 쓰임`, p: `${spec.meanKo}<br><br>· ${spec.heroKo[0].replace(/\[\[|\]\]/g, '')}<br>· ${spec.heroKo[1].replace(/\[\[|\]\]/g, '')}` },
      { c: "teal", h: `💡 TIP ③ · 실전 대화 팁`, p: `질문 <b>"${spec.askQ.replace(/\[\[|\]\]/g, '')}"</b>에 대해 <b>${spec.pat}</b> 패턴으로 자연스럽게 답해 보세요.` }
    ],
    tipsEn: [
      { c: "", h: `💡 TIP ① · ${key} Conjugation Rule`, p: `Use <span class="g">${spec.rows[0].f}</span> for <b>${spec.rows[0].k}</b> and <span class="g2">${spec.rows[1].f}</span> for <b>${spec.rows[1].k}</b>.<br><br><span class="yes">O</span> ${spec.rows[0].ex[0][1]} / ${spec.rows[1].ex[0][1]}` },
      { c: "navy", h: `💡 TIP ② · Core Meaning & Usage`, p: `${spec.meanEn}<br><br>· ${spec.heroEn[0].replace(/\[\[|\]\]/g, '')}<br>· ${spec.heroEn[1].replace(/\[\[|\]\]/g, '')}` },
      { c: "teal", h: `💡 TIP ③ · Conversation Practice`, p: `Practice answering <b>"${spec.askEn.replace(/\[\[|\]\]/g, '')}"</b> using the pattern <b>${spec.pat}</b>.` }
    ],
    words: words1,
    words2: words2Slide,
    bingo: bingoBoards,
    relays: relays,
    make: spec.make,
    vocab: [
      {
        tag: key,
        icon: "📖",
        q: spec.askQ.replace(/\[\[|\]\]/g, ''),
        qen: spec.askEn.replace(/\[\[|\]\]/g, ''),
        pat: spec.pat,
        items: vocabItems
      }
    ],
    sit: sitList,
    wrap: {
      ex: [
        { ko: [spec.heroKo[0]], en: [spec.heroEn[0]] },
        { ko: [spec.heroKo[1]], en: [spec.heroEn[1]] }
      ],
      tips: [
        `<b>${spec.rows[0].k}</b> → <span class="g">${spec.rows[0].f}</span> / <b>${spec.rows[1].k}</b> → <span class="g2">${spec.rows[1].f}</span>`,
        spec.meanKo,
        `대표 대화: "${spec.askQ.replace(/\[\[|\]\]/g, '')}" → "${spec.heroKo[0].replace(/\[\[|\]\]/g, '')}"`
      ]
    },
    ...(spec.finale ? { finale: spec.finale } : {})
  };

  const jsContent = `/* Lesson ${n}: ${key} · 100% Authentic Situation-Matched Data */\nLESSONS.push(${JSON.stringify(lessonObj, null, 2)});\n`;
  fs.writeFileSync(path.join(dataDir, `lesson${n}.js`), jsContent, 'utf8');
}

// Update vocabpic.js
const vocabPicContent = `/* scripts/build-course-sample.mjs 가 만든 파일입니다. 직접 고치지 마세요. */\nconst V3MAP = ${JSON.stringify(v3Map)};\nconst V3SPLIT_DUO = [];\n`;
fs.writeFileSync(path.join(dataDir, 'vocabpic.js'), vocabPicContent, 'utf8');

console.log('Successfully upgraded all 30 lessons with Multi-Board Bingo and 2-Set Word Drill!');
