import fs from 'fs';
import path from 'path';

// 1. Extract authentic background <g class="bg"> blocks from original Korean Box SVGs
const rawEx1 = fs.readFileSync('public/course/sample/scenes/ex-1-1.svg', 'utf8');
const BG_SCHOOL_FRONT = rawEx1.slice(rawEx1.indexOf('<g class="bg"'), rawEx1.indexOf('</g><ellipse') + 4);

const rawEx2 = fs.readFileSync('public/course/sample/scenes/ex-1-2.svg', 'utf8');
const BG_CLASSROOM = rawEx2.slice(rawEx2.indexOf('<g class="bg"'), rawEx2.indexOf('</g><ellipse') + 4);

const rawEx3 = fs.readFileSync('public/course/sample/scenes/ex-1-3.svg', 'utf8');
const BG_STAGE = rawEx3.slice(rawEx3.indexOf('<g class="bg"'), rawEx3.indexOf('</g><ellipse') + 4);

const rawHero1 = fs.readFileSync('public/course/sample/scenes/hero-01.svg', 'utf8');
const BG_HALLWAY = `<g transform="translate(0 -30) scale(1, 0.95)">` + rawHero1.slice(rawHero1.indexOf('<g class="bg"'), rawHero1.indexOf('</g></g><path') + 4) + `</g>`;

const BG_STREET = `<rect width="800" height="520" fill="#cfeaf8"/><rect y="440" width="800" height="80" fill="#dcbf98"/><path d="M0 440 H800" stroke="#14213d" stroke-width="5" stroke-linejoin="round" stroke-linecap="round"/><path d="M640 60 a22 22 0 0 1 40 -14 a28 28 0 0 1 52 6 a18 18 0 0 1 10 30 H634 a14 14 0 0 1 6 -22 Z" fill="#fff" stroke="#14213d" stroke-width="4" stroke-linejoin="round"/><path d="M120 75 a20 20 0 0 1 36 -12 a25 25 0 0 1 46 5 a16 16 0 0 1 9 27 H114 a12 12 0 0 1 6 -20 Z" fill="#fff" stroke="#14213d" stroke-width="4" stroke-linejoin="round"/><rect x="30" y="190" width="150" height="250" fill="#f6dcb8" stroke="#14213d" stroke-width="5" stroke-linejoin="round" stroke-linecap="round"/><rect x="50" y="220" width="110" height="40" fill="#bfe3f5" stroke="#14213d" stroke-width="5" stroke-linejoin="round" stroke-linecap="round"/><rect x="200" y="240" width="120" height="200" fill="#cfe3f7" stroke="#14213d" stroke-width="5" stroke-linejoin="round" stroke-linecap="round"/><rect x="220" y="270" width="80" height="40" fill="#bfe3f5" stroke="#14213d" stroke-width="5" stroke-linejoin="round" stroke-linecap="round"/><rect x="600" y="210" width="170" height="230" fill="#f4d3d8" stroke="#14213d" stroke-width="5" stroke-linejoin="round" stroke-linecap="round"/><rect x="620" y="240" width="130" height="40" fill="#bfe3f5" stroke="#14213d" stroke-width="5" stroke-linejoin="round" stroke-linecap="round"/>`;

const BG_AIRPORT = `<rect width="800" height="520" fill="#eef1f6"/><rect y="440" width="800" height="80" fill="#cbd5e4"/><path d="M0 440 H800" stroke="#14213d" stroke-width="5" stroke-linejoin="round" stroke-linecap="round"/><clipPath id="winAir"><rect x="40" y="20" width="720" height="100" rx="10"/></clipPath><rect x="40" y="20" width="720" height="100" rx="10" fill="#bfe3f5" stroke="#14213d" stroke-width="5" stroke-linejoin="round" stroke-linecap="round"/><g clip-path="url(#winAir)"><g transform="translate(340 56)"><path d="M0 0 H110 Q130 0 130 12 Q130 22 110 22 H0 Z" fill="#fff" stroke="#14213d" stroke-width="5" stroke-linejoin="round" stroke-linecap="round"/><path d="M40 4 L70 -30 H84 L70 4 Z M48 18 L74 44 H86 L74 18 Z M4 4 L-10 -18 H6 L18 4 Z" fill="#cfe3f7" stroke="#14213d" stroke-width="5" stroke-linejoin="round" stroke-linecap="round"/></g></g><path d="M220 20 V120 M400 20 V120 M580 20 V120" stroke="#14213d" stroke-width="5" stroke-linejoin="round" stroke-linecap="round"/>`;

const BG_STUDY_ROOM = `<rect width="800" height="520" fill="#f6e3cf"/><rect y="380" width="800" height="140" fill="#dcbf98"/><path d="M0 380 H800" stroke="#14213d" stroke-width="5" stroke-linejoin="round" stroke-linecap="round"/><rect x="350" y="52" width="120" height="86" rx="6" fill="#fff" stroke="#14213d" stroke-width="5" stroke-linejoin="round" stroke-linecap="round"/><path d="M366 122 L394 86 L418 110 L436 92 L454 122 Z" fill="#7fb069" stroke="#14213d" stroke-width="5" stroke-linejoin="round" stroke-linecap="round"/>`;

const BG_CAFE = `<rect width="800" height="520" fill="#f5e6d3"/><rect y="390" width="800" height="130" fill="#d4b48c"/><path d="M0 390 H800" stroke="#14213d" stroke-width="5"/><path d="M0 0 H800 V58 Q760 84 720 58 Q680 84 640 58 Q600 84 560 58 Q520 84 480 58 Q440 84 400 58 Q360 84 320 58 Q280 84 240 58 Q200 84 160 58 Q120 84 80 58 Q40 84 0 58 Z" fill="#c8433a" stroke="#14213d" stroke-width="4"/><rect x="70" y="96" width="180" height="140" rx="8" fill="#bfe3f5" stroke="#14213d" stroke-width="5"/><path d="M160 96 V236 M70 166 H250" stroke="#14213d" stroke-width="4"/><rect x="530" y="90" width="200" height="120" rx="8" fill="#2f5d50" stroke="#14213d" stroke-width="6"/><text x="630" y="135" font-size="24" font-weight="900" fill="#ffd84d" text-anchor="middle" font-family="'Noto Sans KR',sans-serif">CAFE MENU</text><text x="630" y="170" font-size="20" font-weight="800" fill="#fff" text-anchor="middle" font-family="'Noto Sans KR',sans-serif">커피 · 주스 · 빵</text>`;

const BG_PARK = `<rect width="800" height="520" fill="#cfeaf8"/><circle cx="680" cy="82" r="44" fill="#ffd84d" stroke="#14213d" stroke-width="5"/><path d="M120 75 a22 22 0 0 1 40 -14 a28 28 0 0 1 52 6 a18 18 0 0 1 10 30 H114 a14 14 0 0 1 6 -22 Z" fill="#fff" stroke="#14213d" stroke-width="4"/><path d="M0 360 Q220 310 450 350 T800 340 V520 H0 Z" fill="#97ae86" stroke="#14213d" stroke-width="4"/><rect y="410" width="800" height="110" fill="#e4d1b5"/><path d="M0 410 H800" stroke="#14213d" stroke-width="5"/><g transform="translate(110 290)"><rect x="-12" y="20" width="24" height="90" fill="#b4977a" stroke="#14213d" stroke-width="4"/><circle cx="0" cy="-10" r="46" fill="#7fb069" stroke="#14213d" stroke-width="4"/><circle cx="-28" cy="10" r="32" fill="#97ae86" stroke="#14213d" stroke-width="4"/><circle cx="28" cy="10" r="32" fill="#97ae86" stroke="#14213d" stroke-width="4"/></g>`;

const BG_LIBRARY = `<rect width="800" height="520" fill="#f2e9dc"/><rect y="390" width="800" height="130" fill="#d8c0a0"/><path d="M0 390 H800" stroke="#14213d" stroke-width="5"/><g transform="translate(50 60)"><rect width="220" height="290" rx="6" fill="#b97a42" stroke="#14213d" stroke-width="5"/><rect x="14" y="16" width="192" height="76" fill="#7a4a2a" stroke="#14213d" stroke-width="4"/><rect x="24" y="26" width="24" height="64" fill="#e2553f" stroke="#14213d" stroke-width="3"/><rect x="52" y="26" width="28" height="64" fill="#2a5bd7" stroke="#14213d" stroke-width="3"/><rect x="84" y="26" width="22" height="64" fill="#f0c419" stroke="#14213d" stroke-width="3"/><rect x="110" y="26" width="26" height="64" fill="#5fae8f" stroke="#14213d" stroke-width="3"/><rect x="140" y="26" width="24" height="64" fill="#e98bb3" stroke="#14213d" stroke-width="3"/><rect x="14" y="106" width="192" height="76" fill="#7a4a2a" stroke="#14213d" stroke-width="4"/><rect x="28" y="116" width="28" height="64" fill="#5b8bd9" stroke="#14213d" stroke-width="3"/><rect x="60" y="116" width="24" height="64" fill="#e2553f" stroke="#14213d" stroke-width="3"/><rect x="88" y="116" width="30" height="64" fill="#7fb069" stroke="#14213d" stroke-width="3"/><rect x="122" y="116" width="24" height="64" fill="#ffd84d" stroke="#14213d" stroke-width="3"/><rect x="14" y="196" width="192" height="76" fill="#7a4a2a" stroke="#14213d" stroke-width="4"/><rect x="24" y="206" width="26" height="64" fill="#c8433a" stroke="#14213d" stroke-width="3"/><rect x="54" y="206" width="26" height="64" fill="#2349b8" stroke="#14213d" stroke-width="3"/><rect x="84" y="206" width="26" height="64" fill="#f5b82e" stroke="#14213d" stroke-width="3"/></g><g transform="translate(530 60)"><rect width="220" height="290" rx="6" fill="#b97a42" stroke="#14213d" stroke-width="5"/><rect x="14" y="16" width="192" height="76" fill="#7a4a2a" stroke="#14213d" stroke-width="4"/><rect x="24" y="26" width="26" height="64" fill="#2a9d8f" stroke="#14213d" stroke-width="3"/><rect x="54" y="26" width="28" height="64" fill="#e2553f" stroke="#14213d" stroke-width="3"/><rect x="86" y="26" width="24" height="64" fill="#5b8bd9" stroke="#14213d" stroke-width="3"/><rect x="14" y="106" width="192" height="76" fill="#7a4a2a" stroke="#14213d" stroke-width="4"/><rect x="28" y="116" width="28" height="64" fill="#f0c419" stroke="#14213d" stroke-width="3"/><rect x="60" y="116" width="26" height="64" fill="#e98bb3" stroke="#14213d" stroke-width="3"/><rect x="90" y="116" width="30" height="64" fill="#2349b8" stroke="#14213d" stroke-width="3"/></g>`;

// 2. Extract authentic character inner vectors from vocab/v-1-*.svg
function extractVocabChar(file, pantColor = "#2f4a86") {
  const raw = fs.readFileSync(path.join('public/course/sample/scenes/vocab', file), 'utf8');
  const m = raw.match(/<g clip-path="url\(#cb\)"><g transform="[^"]*">([\s\S]*?)<\/g><\/g><\/g><\/g><\/svg>/);
  const inner = m ? m[1] : '';
  const legs = `<path d="M122 420 L124 532 L128 644" fill="none" stroke="#14213d" stroke-width="44" stroke-linecap="round" stroke-linejoin="round"/><path d="M122 420 L124 532 L128 644" fill="none" stroke="${pantColor}" stroke-width="34" stroke-linecap="round" stroke-linejoin="round"/><ellipse cx="122" cy="646" rx="30" ry="13" fill="#14213d"/><path d="M178 420 L176 532 L172 644" fill="none" stroke="#14213d" stroke-width="44" stroke-linecap="round" stroke-linejoin="round"/><path d="M178 420 L176 532 L172 644" fill="none" stroke="${pantColor}" stroke-width="34" stroke-linecap="round" stroke-linejoin="round"/><ellipse cx="178" cy="646" rx="30" ry="13" fill="#14213d"/><path d="M98 424 H202 V452 H98 Z" fill="${pantColor}" stroke="#14213d" stroke-width="5" stroke-linejoin="round"/>`;
  return legs + inner;
}

const CHARS = {
  student: extractVocabChar('v-1-student.svg', '#1f2a4d'),
  teacher_f: extractVocabChar('v-1-teacher.svg', '#3b4a7a'),
  doctor: extractVocabChar('v-1-doctor.svg', '#2b3a67'),
  cook: extractVocabChar('v-1-cook.svg', '#2b3a67'),
  office: extractVocabChar('v-1-office-worker.svg', '#2b3a67'),
  singer: extractVocabChar('v-1-singer.svg', '#3b4a7a'),
  michael: extractVocabChar('v-1-michael.svg', '#2f4a86'),
  yujin: extractVocabChar('v-1-yujin.svg', '#3b4a7a'),
  hajun: extractVocabChar('v-1-hajun.svg', '#1f2a4d'),
  rie: extractVocabChar('v-1-rie.svg', '#3b4a7a'),
  sara: extractVocabChar('v-1-sara.svg', '#2f4a86'),
  mina: extractVocabChar('v-1-mina.svg', '#3b4a7a'),
};

function extractVocabProp(file) {
  const raw = fs.readFileSync(path.join('public/course/sample/scenes/vocab', file), 'utf8');
  const m = raw.match(/<g id="m" filter="url\(#ol\)">([\s\S]*?)<\/g><\/g><\/svg>/);
  return m ? m[1] : '';
}

const PROPS = {
  book: extractVocabProp('v-1-book.svg'),
  bag: extractVocabProp('v-1-bag.svg'),
  pencil: extractVocabProp('v-1-pencil.svg'),
  chair: extractVocabProp('v-1-chair.svg'),
  coffee: extractVocabProp('v-1-coffee.svg'),
};

function placeChar(charKey, x, y, scale = 0.58, flip = false) {
  const inner = CHARS[charKey] || CHARS.student;
  const shadowCx = x + 150 * scale;
  const shadowCy = y + 648 * scale;
  const shadow = `<ellipse cx="${shadowCx.toFixed(1)}" cy="${shadowCy.toFixed(1)}" rx="${(115 * scale).toFixed(1)}" ry="${(15 * scale).toFixed(1)}" fill="#3a3020" opacity="0.14"/>`;
  if (flip) {
    return `${shadow}<g class="fig" transform="translate(${x} ${y}) scale(${scale})"><g transform="translate(300 0) scale(-1 1)">${inner}</g></g>`;
  }
  return `${shadow}<g class="fig" transform="translate(${x} ${y}) scale(${scale})">${inner}</g>`;
}

function placeProp(propKey, x, y, scale = 0.7) {
  return `<g transform="translate(${x} ${y}) scale(${scale})">${PROPS[propKey]}</g>`;
}

function speechBubble(x, y, w, h, text, tailX, tailY, bg = "#fff", border = "#14213d", textColor = "#14213d", fontSize = 25) {
  const cx = x + w / 2;
  const cy = y + h / 2 + fontSize * 0.35;
  const tBase1 = Math.max(x + 20, Math.min(x + w - 40, tailX - 14));
  const tBase2 = tBase1 + 26;
  const tailYStart = tailY > y + h ? y + h - 2 : y + 2;
  return `<g class="sg"><path d="M${tBase1} ${tailYStart} L${tailX} ${tailY} L${tBase2} ${tailYStart}" fill="${bg}" stroke="${border}" stroke-width="5" stroke-linejoin="round" stroke-linecap="round"/><rect x="${x}" y="${y}" width="${w}" height="${h}" rx="22" fill="${bg}" stroke="${border}" stroke-width="5" stroke-linejoin="round" stroke-linecap="round"/><path d="M${tBase1 + 3} ${tailYStart} H${tBase2 - 3}" stroke="${bg}" stroke-width="7"/><text class="tx" x="${cx}" y="${cy}" font-size="${fontSize}" font-weight="900" fill="${textColor}" text-anchor="middle" font-family="'Noto Sans KR','Malgun Gothic','Apple SD Gothic Neo',sans-serif">${text}</text></g>`;
}

function tagBox(cx, cy, text, bg = "#fff", border = "#14213d", textColor = "#14213d", fontSize = 24, padX = 24, h = 44) {
  const w = Math.max(84, text.length * (fontSize * 0.88) + padX * 2);
  const x = cx - w / 2;
  const y = cy - h / 2;
  return `<g class="sg"><rect x="${x.toFixed(1)}" y="${y.toFixed(1)}" width="${w.toFixed(1)}" height="${h}" rx="10" fill="${bg}" stroke="${border}" stroke-width="4.5" stroke-linejoin="round" stroke-linecap="round"/><text class="tx" x="${cx}" y="${(cy + fontSize * 0.36).toFixed(1)}" font-size="${fontSize}" font-weight="900" fill="${textColor}" text-anchor="middle" font-family="'Noto Sans KR','Malgun Gothic','Apple SD Gothic Neo',sans-serif">${text}</text></g>`;
}

function focusRing(cx, cy, rx = 68, ry = 42) {
  return `<ellipse class="red" cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}" fill="none" stroke="#c8102e" stroke-width="6" stroke-dasharray="14 8"/>`;
}

function woodenTable(x, y, w = 220, h = 90) {
  return `<g><rect x="${x}" y="${y}" width="${w}" height="22" rx="4" fill="#c98b52" stroke="#14213d" stroke-width="5" stroke-linejoin="round"/><rect x="${x + 16}" y="${y + 22}" width="${w - 32}" height="${h - 22}" fill="#b07a45" stroke="#14213d" stroke-width="5" stroke-linejoin="round"/></g>`;
}

function drawClock(cx, cy, r = 46, hourAngle = 0, minAngle = 0, label = "") {
  const hx = cx + Math.sin(hourAngle * Math.PI / 180) * (r * 0.52);
  const hy = cy - Math.cos(hourAngle * Math.PI / 180) * (r * 0.52);
  const mx = cx + Math.sin(minAngle * Math.PI / 180) * (r * 0.74);
  const my = cy - Math.cos(minAngle * Math.PI / 180) * (r * 0.74);
  return `<g><circle cx="${cx}" cy="${cy}" r="${r + 6}" fill="#c8433a" stroke="#14213d" stroke-width="5"/><circle cx="${cx}" cy="${cy}" r="${r}" fill="#fffdf6" stroke="#14213d" stroke-width="4"/><path d="M${cx} ${cy - r + 6} V${cy - r + 14} M${cx} ${cy + r - 14} V${cy + r - 6} M${cx - r + 6} ${cy} H${cx - r + 14} M${cx + r - 14} ${cy} H${cx + r - 6}" stroke="#14213d" stroke-width="4" stroke-linecap="round"/><path d="M${cx} ${cy} L${hx.toFixed(1)} ${hy.toFixed(1)}" stroke="#14213d" stroke-width="6" stroke-linecap="round"/><path d="M${cx} ${cy} L${mx.toFixed(1)} ${my.toFixed(1)}" stroke="#c8102e" stroke-width="4.5" stroke-linecap="round"/><circle cx="${cx}" cy="${cy}" r="5" fill="#14213d"/>${label ? tagBox(cx, cy + r + 28, label, "#ffd84d", "#14213d", "#14213d", 22, 16, 38) : ''}</g>`;
}

// 3. Build 29 distinct hero SVGs (hero-02.svg ~ hero-30.svg)
const HERO_SCENES = {
  2: () => `${BG_CLASSROOM}
    ${placeChar('student', 110, 96, 0.58, false)}
    ${placeChar('teacher_f', 485, 96, 0.58, false)}
    ${speechBubble(65, 22, 250, 56, "저는 학생이에요", 195, 110, "#fff", "#14213d", "#14213d", 25)}
    ${speechBubble(425, 22, 320, 56, "선생님은 한국 사람이에요", 570, 110, "#ffd84d", "#14213d", "#14213d", 24)}
    ${focusRing(200, 260, 82, 110)}
    ${focusRing(575, 260, 82, 110)}
    ${tagBox(195, 488, "저 (학생)", "#fff", "#2349b8", "#2349b8", 22, 18, 40)}
    ${tagBox(575, 488, "선생님 (한국 사람)", "#fff", "#c8102e", "#c8102e", 22, 18, 40)}`,
  3: () => `${BG_STUDY_ROOM}
    ${placeChar('michael', 75, 92, 0.58, true)}
    ${placeChar('yujin', 535, 92, 0.58, false)}
    ${woodenTable(255, 360, 290, 110)}
    ${placeProp('book', 265, 225, 0.65)}
    <g transform="translate(465 320)"><circle cx="0" cy="0" r="38" fill="#fff" stroke="#c8102e" stroke-width="5" stroke-dasharray="10 6"/><text x="0" y="12" font-size="38" font-weight="900" fill="#c8102e" text-anchor="middle" font-family="sans-serif">?</text></g>
    ${focusRing(345, 332, 74, 42)}
    ${focusRing(465, 320, 56, 46)}
    ${speechBubble(75, 24, 245, 56, "책이 있어요 (O)", 200, 108, "#fff", "#2349b8", "#2349b8", 25)}
    ${speechBubble(455, 24, 275, 56, "시계가 없어요 (X)", 590, 108, "#fff", "#c8102e", "#c8102e", 25)}
    ${tagBox(345, 435, "책 O", "#ffd84d", "#14213d", "#14213d", 24, 18, 40)}
    ${tagBox(465, 435, "시계 X", "#fff", "#c8102e", "#c8102e", 24, 18, 40)}`,
  4: () => `${BG_HALLWAY}
    ${placeChar('doctor', 460, 96, 0.6, false)}
    ${placeChar('sara', 110, 96, 0.58, true)}
    <g transform="translate(345 235)"><rect x="-70" y="-55" width="140" height="110" rx="14" fill="#fff" stroke="#14213d" stroke-width="5"/><text x="0" y="-8" font-size="24" font-weight="900" fill="#14213d" text-anchor="middle" font-family="'Noto Sans KR',sans-serif">학생</text><path d="M-45 -35 L45 35 M45 -35 L-45 35" stroke="#c8102e" stroke-width="9" stroke-linecap="round"/></g>
    ${focusRing(550, 255, 86, 115)}
    ${speechBubble(390, 22, 350, 58, "학생이 아니에요. 의사예요!", 550, 106, "#ffd84d", "#14213d", "#14213d", 24)}
    ${speechBubble(65, 28, 220, 54, "학생이에요?", 180, 108, "#fff", "#14213d", "#14213d", 25)}
    ${tagBox(550, 488, "의사 (O)", "#fff", "#2349b8", "#2349b8", 24, 20, 42)}`,
  5: () => `${BG_CAFE}
    ${placeChar('cook', 105, 96, 0.6, false)}
    ${placeChar('rie', 515, 96, 0.58, false)}
    ${woodenTable(275, 365, 250, 115)}
    <g transform="translate(400 342)"><ellipse cx="0" cy="12" rx="64" ry="20" fill="#3a3a46" stroke="#14213d" stroke-width="5"/><path d="M-54 6 C-54 44 54 44 54 6 Z" fill="#c8433a" stroke="#14213d" stroke-width="5"/><ellipse cx="0" cy="6" rx="50" ry="14" fill="#f5b82e"/><path d="M-22 -16 Q-14 -34 -22 -48 M0 -20 Q8 -38 0 -52 M22 -16 Q30 -34 22 -48" fill="none" stroke="#fff" stroke-width="4.5" stroke-linecap="round"/></g>
    ${focusRing(400, 342, 82, 46)}
    ${speechBubble(65, 24, 290, 56, "한국 음식이 맛있어요!", 200, 108, "#ffd84d", "#14213d", "#14213d", 25)}
    ${speechBubble(435, 24, 315, 56, "매일 한국어를 공부해요", 595, 108, "#fff", "#14213d", "#14213d", 25)}
    ${tagBox(400, 445, "맛있어요 · 공부해요", "#fff", "#c8102e", "#c8102e", 23, 20, 42)}`,
  6: () => `${BG_CAFE}
    ${placeChar('hajun', 105, 96, 0.58, true)}
    ${placeChar('mina', 520, 96, 0.58, false)}
    ${woodenTable(250, 365, 300, 115)}
    ${placeProp('coffee', 260, 225, 0.62)}
    ${placeProp('book', 395, 235, 0.6)}
    ${focusRing(335, 330, 62, 46)}
    ${focusRing(465, 335, 68, 42)}
    ${speechBubble(65, 24, 275, 56, "커피를 마셔요", 195, 108, "#fff", "#14213d", "#14213d", 26)}
    ${speechBubble(465, 24, 265, 56, "책을 읽어요", 595, 108, "#ffd84d", "#14213d", "#14213d", 26)}
    ${tagBox(335, 445, "커피를", "#fff", "#c8102e", "#c8102e", 24, 18, 40)}
    ${tagBox(465, 445, "책을", "#fff", "#2349b8", "#2349b8", 24, 18, 40)}`,
  7: () => `${BG_PARK}
    ${placeChar('yujin', 145, 96, 0.58, true)}
    ${placeChar('michael', 495, 96, 0.58, false)}
    <g transform="translate(390 375)"><path d="M0 0 V55" stroke="#2f5d50" stroke-width="6"/><circle cx="-18" cy="-12" r="16" fill="#ff758f" stroke="#14213d" stroke-width="4"/><circle cx="18" cy="-12" r="16" fill="#ff758f" stroke="#14213d" stroke-width="4"/><circle cx="0" cy="-30" r="16" fill="#ff758f" stroke="#14213d" stroke-width="4"/><circle cx="0" cy="6" r="16" fill="#ff758f" stroke="#14213d" stroke-width="4"/><circle cx="0" cy="-12" r="13" fill="#ffd84d" stroke="#14213d" stroke-width="4"/></g>
    ${focusRing(680, 82, 64, 64)}
    ${focusRing(390, 375, 58, 52)}
    ${speechBubble(85, 24, 285, 56, "오늘 날씨가 좋아요!", 230, 108, "#ffd84d", "#14213d", "#14213d", 25)}
    ${speechBubble(415, 24, 250, 56, "꽃이 참 예뻐요!", 565, 108, "#fff", "#14213d", "#14213d", 25)}
    ${tagBox(390, 482, "날씨가 · 꽃이", "#fff", "#c8102e", "#c8102e", 24, 22, 42)}`,
  8: () => `${BG_SCHOOL_FRONT}
    ${placeChar('student', 135, 92, 0.6, true)}
    <g transform="translate(345 275)"><path d="M0 0 H110 L110 -22 L155 15 L110 52 L110 30 H0 Z" fill="#c8102e" stroke="#14213d" stroke-width="5" stroke-linejoin="round"/></g>
    ${focusRing(605, 260, 125, 95)}
    ${speechBubble(80, 24, 295, 58, "오늘 학교에 가요!", 225, 106, "#ffd84d", "#14213d", "#14213d", 26)}
    ${tagBox(605, 385, "학교에 가요 (→)", "#fff", "#c8102e", "#c8102e", 25, 22, 44)}
    ${tagBox(225, 488, "학생", "#fff", "#14213d", "#14213d", 22, 18, 40)}`,
  9: () => `${BG_LIBRARY}
    ${placeChar('student', 200, 98, 0.56, true)}
    ${placeChar('yujin', 440, 98, 0.56, false)}
    ${woodenTable(250, 368, 300, 112)}
    ${placeProp('book', 280, 240, 0.58)}
    ${placeProp('pencil', 410, 250, 0.52)}
    ${focusRing(400, 338, 120, 52)}
    ${speechBubble(110, 18, 305, 56, "도서관에서 공부해요", 275, 104, "#ffd84d", "#14213d", "#14213d", 25)}
    ${speechBubble(445, 18, 295, 56, "공원에서 운동해요", 525, 104, "#fff", "#14213d", "#14213d", 25)}
    ${tagBox(400, 445, "도서관에서 (활동 장소)", "#fff", "#c8102e", "#c8102e", 23, 20, 42)}`,
  10: () => `${BG_STUDY_ROOM}
    ${placeChar('hajun', 105, 96, 0.58, true)}
    ${placeChar('sara', 520, 96, 0.58, false)}
    ${drawClock(330, 215, 54, -150, 0, "아침 7시에")}
    ${drawClock(480, 215, 54, 120, 0, "오후 4시에")}
    ${focusRing(330, 215, 74, 74)}
    ${focusRing(480, 215, 74, 74)}
    ${speechBubble(65, 22, 295, 56, "아침 7시에 일어나요", 195, 108, "#fff", "#14213d", "#14213d", 25)}
    ${speechBubble(445, 22, 305, 56, "토요일 4시에 만나요", 595, 108, "#ffd84d", "#14213d", "#14213d", 25)}`,
  11: () => `${BG_STREET}
    ${placeChar('office', 95, 96, 0.58, true)}
    ${placeChar('student', 535, 96, 0.58, false)}
    <g transform="translate(260 220)"><rect width="260" height="125" rx="20" fill="#fff" stroke="#14213d" stroke-width="5"/><rect x="10" y="16" width="240" height="24" rx="6" fill="#0052a4"/><rect x="24" y="50" width="60" height="44" rx="6" fill="#bfe3f5" stroke="#14213d" stroke-width="4"/><rect x="100" y="50" width="60" height="44" rx="6" fill="#bfe3f5" stroke="#14213d" stroke-width="4"/><rect x="176" y="50" width="60" height="44" rx="6" fill="#bfe3f5" stroke="#14213d" stroke-width="4"/><circle cx="55" cy="130" r="14" fill="#14213d"/><circle cx="205" cy="130" r="14" fill="#14213d"/></g>
    ${placeProp('pencil', 320, 325, 0.58)}
    ${focusRing(390, 280, 145, 78)}
    ${speechBubble(60, 22, 300, 56, "지하철로 회사에 가요", 185, 108, "#ffd84d", "#14213d", "#14213d", 25)}
    ${speechBubble(440, 22, 300, 56, "연필로 이름을 써요", 605, 108, "#fff", "#14213d", "#14213d", 25)}
    ${tagBox(390, 488, "지하철로 · 연필로 (수단)", "#fff", "#c8102e", "#c8102e", 23, 20, 42)}`,
  12: () => `${BG_AIRPORT}
    ${placeChar('michael', 95, 110, 0.56, true)}
    ${placeChar('yujin', 545, 110, 0.56, false)}
    <g transform="translate(250 185)"><rect width="300" height="170" rx="16" fill="#fffdf6" stroke="#14213d" stroke-width="5"/><circle cx="65" cy="65" r="24" fill="#2349b8" stroke="#14213d" stroke-width="4"/><text x="65" y="73" font-size="20" font-weight="900" fill="#fff" text-anchor="middle">서울</text><circle cx="235" cy="105" r="24" fill="#c8102e" stroke="#14213d" stroke-width="4"/><text x="235" y="113" font-size="20" font-weight="900" fill="#fff" text-anchor="middle">부산</text><path d="M92 70 Q155 65 208 98" fill="none" stroke="#c8102e" stroke-width="7" stroke-dasharray="12 8" stroke-linecap="round"/><text x="150" y="150" font-size="22" font-weight="900" fill="#14213d" text-anchor="middle">서울에서 → 부산까지</text></g>
    ${focusRing(400, 270, 165, 98)}
    ${speechBubble(195, 22, 410, 58, "서울에서 부산까지 기차로 가요", 400, 112, "#ffd84d", "#14213d", "#14213d", 25)}`,
  13: () => `${BG_STUDY_ROOM}
    ${placeChar('office', 95, 96, 0.58, true)}
    ${placeChar('teacher_f', 535, 96, 0.58, false)}
    ${drawClock(310, 225, 52, -90, 0, "9시부터")}
    <g transform="translate(400 225)"><path d="M-24 0 H18 L18 -14 L42 6 L18 26 L18 12 H-24 Z" fill="#c8102e" stroke="#14213d" stroke-width="4"/></g>
    ${drawClock(495, 225, 52, 180, 0, "6시까지")}
    ${focusRing(402, 225, 165, 82)}
    ${speechBubble(165, 22, 470, 58, "아침 9시부터 저녁 6시까지 일해요", 400, 108, "#ffd84d", "#14213d", "#14213d", 25)}`,
  14: () => `${BG_HALLWAY}
    ${placeChar('hajun', 135, 96, 0.58, true)}
    ${placeChar('mina', 485, 96, 0.58, false)}
    <g transform="translate(390 295)"><rect x="-46" y="-42" width="92" height="84" rx="10" fill="#ffd84d" stroke="#14213d" stroke-width="5"/><rect x="-50" y="-42" width="100" height="22" rx="6" fill="#e2553f" stroke="#14213d" stroke-width="5"/><rect x="-10" y="-42" width="20" height="84" fill="#c8102e" stroke="#14213d" stroke-width="4"/><path d="M0 -42 C-28 -70 -44 -42 -8 -42 C28 -42 28 -70 0 -42 Z" fill="#c8102e" stroke="#14213d" stroke-width="4"/></g>
    ${focusRing(390, 295, 76, 66)}
    ${speechBubble(75, 22, 295, 56, "친구한테 선물을 줘요", 220, 108, "#ffd84d", "#14213d", "#14213d", 25)}
    ${speechBubble(445, 22, 275, 56, "정말 고마워요!", 565, 108, "#fff", "#14213d", "#14213d", 25)}
    ${tagBox(390, 488, "친구한테 / 친구에게 (→)", "#fff", "#c8102e", "#c8102e", 24, 22, 42)}`,
  15: () => `${BG_CLASSROOM}
    ${placeChar('student', 120, 96, 0.58, false)}
    ${placeChar('yujin', 475, 96, 0.58, false)}
    ${placeProp('book', 260, 270, 0.55)}
    ${placeProp('book', 385, 270, 0.55)}
    ${focusRing(210, 255, 78, 105)}
    ${focusRing(565, 255, 78, 105)}
    ${speechBubble(75, 22, 255, 56, "저는 학생이에요", 200, 108, "#fff", "#14213d", "#14213d", 25)}
    ${speechBubble(435, 22, 280, 56, "저도 학생이에요!", 565, 108, "#ffd84d", "#c8102e", "#c8102e", 26)}
    ${tagBox(400, 488, "저도 (+ 또한 / ALSO)", "#ffd84d", "#14213d", "#14213d", 24, 22, 42)}`,
  16: () => `${BG_CAFE}
    ${placeChar('sara', 100, 96, 0.58, true)}
    ${placeChar('rie', 525, 96, 0.58, false)}
    ${woodenTable(245, 365, 310, 115)}
    <g transform="translate(320 330)"><path d="M-42 18 C-46 -22 46 -22 42 18 Z" fill="#e09f5a" stroke="#14213d" stroke-width="5"/><path d="M-22 -4 Q-12 -14 0 -4 M6 -4 Q16 -14 26 -4" fill="none" stroke="#fff" stroke-width="3.5" stroke-linecap="round"/></g>
    <g transform="translate(400 325)"><circle cx="0" cy="0" r="22" fill="#ffd84d" stroke="#14213d" stroke-width="4"/><text x="0" y="9" font-size="28" font-weight="900" fill="#14213d" text-anchor="middle">+</text></g>
    ${placeProp('coffee', 410, 225, 0.6)}
    ${focusRing(400, 325, 130, 56)}
    ${speechBubble(65, 22, 295, 56, "빵하고 커피를 먹어요", 195, 108, "#ffd84d", "#14213d", "#14213d", 25)}
    ${speechBubble(440, 22, 295, 56, "친구랑 영화를 봐요", 595, 108, "#fff", "#14213d", "#14213d", 25)}
    ${tagBox(400, 445, "빵하고 커피 (A + B)", "#fff", "#c8102e", "#c8102e", 24, 20, 42)}`,
  17: () => `${BG_CAFE}
    ${placeChar('office', 105, 96, 0.58, true)}
    ${placeChar('mina', 525, 96, 0.58, false)}
    ${woodenTable(250, 365, 300, 115)}
    ${placeProp('coffee', 260, 225, 0.62)}
    <g transform="translate(465 330)"><path d="M-40 16 C-44 -20 44 -20 40 16 Z" fill="#e09f5a" stroke="#14213d" stroke-width="4" opacity="0.45"/><path d="M-36 -24 L36 24 M36 -24 L-36 24" stroke="#c8102e" stroke-width="8" stroke-linecap="round"/></g>
    ${focusRing(335, 330, 64, 48)}
    ${speechBubble(65, 22, 315, 56, "아침에 커피만 마셔요!", 195, 108, "#ffd84d", "#14213d", "#14213d", 25)}
    ${speechBubble(445, 22, 295, 56, "빵은 안 먹어요 (X)", 595, 108, "#fff", "#14213d", "#14213d", 25)}
    ${tagBox(335, 445, "커피만 (ONLY O)", "#ffd84d", "#c8102e", "#c8102e", 24, 18, 42)}`,
  18: () => `${BG_CAFE}
    ${placeChar('yujin', 100, 96, 0.58, true)}
    ${placeChar('hajun', 525, 96, 0.58, false)}
    ${woodenTable(245, 365, 310, 115)}
    ${placeProp('coffee', 245, 225, 0.58)}
    <g transform="translate(400 322)"><rect x="-32" y="-22" width="64" height="44" rx="10" fill="#ffd84d" stroke="#14213d" stroke-width="4"/><text x="0" y="8" font-size="22" font-weight="900" fill="#14213d" text-anchor="middle">OR</text></g>
    <g transform="translate(480 325)"><path d="M-26 -35 H26 L20 30 H-20 Z" fill="#ff9f1c" stroke="#14213d" stroke-width="5"/><path d="M6 -35 L18 -58" stroke="#c8102e" stroke-width="6" stroke-linecap="round"/></g>
    ${focusRing(400, 322, 135, 56)}
    ${speechBubble(185, 22, 430, 58, "커피나 주스를 마셔요 (선택)", 400, 108, "#ffd84d", "#14213d", "#14213d", 25)}
    ${tagBox(400, 445, "커피나 주스 (A or B)", "#fff", "#c8102e", "#c8102e", 24, 20, 42)}`,
  19: () => `${BG_PARK}
    ${placeChar('michael', 110, 96, 0.58, true)}
    ${placeChar('yujin', 525, 96, 0.58, false)}
    <g transform="translate(260 175)"><rect width="280" height="165" rx="14" fill="#fff" stroke="#14213d" stroke-width="5"/><rect width="280" height="42" rx="12" fill="#c8102e" stroke="#14213d" stroke-width="5"/><text x="140" y="29" font-size="22" font-weight="900" fill="#fff" text-anchor="middle">EVERY DAY · 날마다</text><text x="140" y="82" font-size="22" font-weight="900" fill="#14213d" text-anchor="middle">월   화   수   목   금</text><text x="140" y="132" font-size="28" font-weight="900" fill="#2349b8" text-anchor="middle">✓  ✓  ✓  ✓  ✓</text></g>
    ${focusRing(400, 260, 155, 96)}
    ${speechBubble(165, 22, 470, 58, "아침마다 공원에서 운동해요!", 400, 108, "#ffd84d", "#14213d", "#14213d", 25)}`,
  20: () => `${BG_CLASSROOM}
    ${placeChar('rie', 105, 96, 0.58, true)}
    ${placeChar('teacher_f', 525, 96, 0.58, false)}
    ${woodenTable(255, 365, 290, 115)}
    ${placeProp('bag', 255, 195, 0.68)}
    ${placeProp('book', 395, 230, 0.6)}
    ${focusRing(335, 305, 68, 62)}
    ${focusRing(465, 330, 68, 45)}
    ${speechBubble(65, 22, 295, 56, "리에 씨의 가방이에요", 195, 108, "#ffd84d", "#14213d", "#14213d", 25)}
    ${speechBubble(445, 22, 295, 56, "선생님의 책이에요", 595, 108, "#fff", "#14213d", "#14213d", 25)}
    ${tagBox(335, 445, "리에의 가방", "#fff", "#c8102e", "#c8102e", 23, 18, 40)}
    ${tagBox(465, 445, "선생님의 책", "#fff", "#2349b8", "#2349b8", 23, 18, 40)}`,
  21: () => `${BG_AIRPORT}
    ${placeChar('hajun', 95, 110, 0.56, true)}
    ${placeChar('sara', 545, 110, 0.56, false)}
    <g transform="translate(245 190)"><rect width="310" height="165" rx="16" fill="#fff" stroke="#14213d" stroke-width="5"/><text x="85" y="75" font-size="26" font-weight="900" fill="#2349b8" text-anchor="middle">비행기</text><text x="155" y="80" font-size="40" font-weight="900" fill="#c8102e" text-anchor="middle">&gt;</text><text x="230" y="75" font-size="26" font-weight="900" fill="#14213d" text-anchor="middle">기차</text><text x="155" y="132" font-size="23" font-weight="900" fill="#c8102e" text-anchor="middle">기차보다 더 빨라요!</text></g>
    ${focusRing(400, 272, 165, 95)}
    ${speechBubble(175, 22, 450, 58, "비행기가 기차보다 빨라요!", 400, 112, "#ffd84d", "#14213d", "#14213d", 26)}`,
  22: () => `${BG_STAGE}
    ${placeChar('singer', 475, 76, 0.62, false)}
    ${placeChar('michael', 110, 92, 0.58, true)}
    ${focusRing(565, 215, 88, 95)}
    ${speechBubble(75, 24, 345, 58, "와! 가수처럼 노래를 잘해요!", 205, 108, "#ffd84d", "#14213d", "#14213d", 25)}
    ${tagBox(565, 465, "가수처럼 / 천사같이", "#fff", "#c8102e", "#c8102e", 24, 22, 44)}`,
  23: () => `${BG_STUDY_ROOM}
    ${placeChar('yujin', 100, 96, 0.58, true)}
    ${placeChar('mina', 525, 96, 0.58, false)}
    <g transform="translate(260 175)"><rect width="280" height="165" rx="14" fill="#fffdf6" stroke="#14213d" stroke-width="5"/><rect width="280" height="44" rx="12" fill="#2349b8" stroke="#14213d" stroke-width="5"/><text x="140" y="30" font-size="22" font-weight="900" fill="#fff" text-anchor="middle">◀ 어제 (YESTERDAY)</text><text x="140" y="92" font-size="25" font-weight="900" fill="#14213d" text-anchor="middle">친구를 만났어요</text><text x="140" y="134" font-size="25" font-weight="900" fill="#c8102e" text-anchor="middle">영화를 봤어요</text></g>
    ${focusRing(400, 258, 155, 96)}
    ${speechBubble(165, 22, 470, 58, "어제 친구를 만났어요 · 영화를 봤어요", 400, 108, "#ffd84d", "#14213d", "#14213d", 24)}`,
  24: () => `${BG_AIRPORT}
    ${placeChar('sara', 105, 106, 0.56, true)}
    ${placeChar('hajun', 535, 106, 0.56, false)}
    <g transform="translate(260 190)"><rect width="280" height="160" rx="14" fill="#fff" stroke="#14213d" stroke-width="5"/><rect width="280" height="44" rx="12" fill="#2a9d8f" stroke="#14213d" stroke-width="5"/><text x="140" y="30" font-size="22" font-weight="900" fill="#fff" text-anchor="middle">내일 · 주말 (FUTURE ▶)</text><text x="140" y="92" font-size="25" font-weight="900" fill="#14213d" text-anchor="middle">여행을 갈 거예요</text><text x="140" y="132" font-size="24" font-weight="900" fill="#c8102e" text-anchor="middle">맛있는 것을 먹을 거예요</text></g>
    ${focusRing(400, 270, 155, 95)}
    ${speechBubble(185, 22, 430, 58, "주말에 부산으로 여행을 갈 거예요!", 400, 112, "#ffd84d", "#14213d", "#14213d", 25)}`,
  25: () => `${BG_CAFE}
    ${placeChar('rie', 105, 96, 0.58, true)}
    ${placeChar('student', 525, 96, 0.58, false)}
    ${woodenTable(250, 365, 300, 115)}
    ${placeProp('coffee', 265, 225, 0.6)}
    ${placeProp('book', 395, 235, 0.6)}
    <g transform="translate(400 185)"><rect x="-95" y="-24" width="190" height="48" rx="24" fill="#c8102e" stroke="#14213d" stroke-width="4.5"/><circle cx="-64" cy="0" r="8" fill="#ffd84d"/><text x="12" y="8" font-size="23" font-weight="900" fill="#fff" text-anchor="middle">지금 LIVE</text></g>
    ${focusRing(400, 330, 130, 55)}
    ${speechBubble(60, 22, 310, 56, "지금 커피를 마시고 있어요", 195, 108, "#ffd84d", "#14213d", "#14213d", 24)}
    ${speechBubble(430, 22, 320, 56, "한국어를 공부하고 있어요", 595, 108, "#fff", "#14213d", "#14213d", 24)}`,
  26: () => `${BG_CAFE}
    ${placeChar('cook', 105, 96, 0.6, false)}
    ${placeChar('michael', 515, 96, 0.58, false)}
    ${woodenTable(265, 365, 270, 115)}
    <g transform="translate(400 340)"><ellipse cx="0" cy="12" rx="68" ry="22" fill="#fff" stroke="#14213d" stroke-width="5"/><path d="M-54 6 C-54 -36 54 -36 54 6 Z" fill="#e2553f" stroke="#14213d" stroke-width="5"/><path d="M-24 -32 Q-16 -52 -24 -66 M0 -36 Q8 -56 0 -70 M24 -32 Q32 -52 24 -66" fill="none" stroke="#c8102e" stroke-width="5" stroke-linecap="round"/></g>
    ${focusRing(400, 332, 86, 52)}
    ${speechBubble(395, 22, 345, 58, "와, 정말 맛있겠어요!", 585, 108, "#ffd84d", "#c8102e", "#c8102e", 26)}
    ${speechBubble(65, 24, 255, 54, "제가 만들었어요!", 195, 108, "#fff", "#14213d", "#14213d", 25)}`,
  27: () => `${BG_SCHOOL_FRONT}
    ${placeChar('hajun', 125, 92, 0.58, true)}
    <g transform="translate(595 265)"><circle cx="0" cy="0" r="64" fill="#fff" fill-opacity="0.88" stroke="#c8102e" stroke-width="8"/><path d="M-44 -44 L44 44 M44 -44 L-44 44" stroke="#c8102e" stroke-width="10" stroke-linecap="round"/></g>
    ${focusRing(595, 265, 84, 84)}
    ${speechBubble(75, 22, 345, 58, "일요일에는 학교에 안 가요!", 215, 108, "#ffd84d", "#14213d", "#14213d", 25)}
    ${tagBox(595, 385, "학교에 안 가요 (X)", "#fff", "#c8102e", "#c8102e", 25, 22, 44)}`,
  28: () => `${BG_CLASSROOM}
    ${placeChar('teacher_f', 105, 96, 0.58, false)}
    ${placeChar('sara', 515, 96, 0.58, false)}
    ${woodenTable(255, 365, 290, 115)}
    ${placeProp('book', 315, 230, 0.64)}
    ${focusRing(400, 330, 78, 48)}
    ${speechBubble(65, 22, 285, 56, "한국어가 어려워요?", 195, 108, "#fff", "#14213d", "#14213d", 25)}
    ${speechBubble(415, 22, 335, 56, "아니요, 어렵지 않아요!", 585, 108, "#ffd84d", "#14213d", "#14213d", 25)}
    ${tagBox(400, 445, "어렵지 않아요 (재미있어요!)", "#fff", "#2349b8", "#2349b8", 23, 20, 42)}`,
  29: () => `${BG_PARK}
    ${placeChar('michael', 110, 96, 0.58, true)}
    ${placeChar('yujin', 520, 96, 0.58, false)}
    <g transform="translate(400 285)"><circle cx="0" cy="0" r="56" fill="#ff758f" stroke="#14213d" stroke-width="5"/><circle cx="0" cy="0" r="24" fill="#97ae86" stroke="#14213d" stroke-width="5"/><path d="M-40 -40 L40 40 M40 -40 L-40 40" stroke="#c8102e" stroke-width="9" stroke-linecap="round"/></g>
    ${focusRing(400, 285, 76, 76)}
    ${speechBubble(65, 22, 315, 56, "저는 수영을 못 해요 (X)", 200, 108, "#ffd84d", "#14213d", "#14213d", 25)}
    ${speechBubble(435, 22, 310, 56, "오늘 파티에 못 가요", 595, 108, "#fff", "#c8102e", "#c8102e", 25)}`,
  30: () => `${BG_STUDY_ROOM}
    ${placeChar('doctor', 105, 96, 0.58, false)}
    ${placeChar('mina', 515, 96, 0.58, false)}
    <g transform="translate(400 250)"><rect x="-110" y="-58" width="220" height="116" rx="14" fill="#fff" stroke="#14213d" stroke-width="5"/><text x="0" y="-12" font-size="23" font-weight="900" fill="#c8102e" text-anchor="middle">아파서 · 매워서</text><text x="0" y="32" font-size="25" font-weight="900" fill="#14213d" text-anchor="middle">가지 못했어요 (X)</text></g>
    ${focusRing(400, 250, 130, 76)}
    ${speechBubble(385, 22, 365, 58, "아파서 학교에 가지 못했어요", 585, 108, "#ffd84d", "#14213d", "#14213d", 24)}
    ${speechBubble(65, 24, 265, 54, "푹 쉬세요!", 195, 108, "#fff", "#14213d", "#14213d", 25)}`
};

// 4. Build 58 distinct dialogue example SVGs (ex-2-1.svg, ex-2-2.svg ~ ex-30-1.svg, ex-30-2.svg)
const EX_CONFIGS = {
  2: [
    { bg: BG_SCHOOL_FRONT, c1: 'michael', c2: 'yujin', b1: "유진 씨는 학생이에요?", b2: "네, 저는 학생이에요!", tag: "저는 · 선생님은", prop: 'bag' },
    { bg: BG_HALLWAY, c1: 'sara', c2: 'hajun', b1: "어느 나라 사람이에요?", b2: "저는 캐나다 사람이에요!", tag: "저는 · 동생은", prop: 'book' }
  ],
  3: [
    { bg: BG_CLASSROOM, c1: 'teacher_f', c2: 'student', b1: "책상 위에 책이 있어요?", b2: "네, 한국어 책이 있어요!", tag: "책이 있어요 (O)", prop: 'book' },
    { bg: BG_CAFE, c1: 'hajun', c2: 'mina', b1: "지금 시계가 있어요?", b2: "아니요, 시계가 없어요!", tag: "시계가 없어요 (X)", prop: 'coffee' }
  ],
  4: [
    { bg: BG_HALLWAY, c1: 'yujin', c2: 'doctor', b1: "혹시 학생이에요?", b2: "학생이 아니에요. 의사예요!", tag: "학생이 아니에요", prop: 'bag' },
    { bg: BG_CAFE, c1: 'michael', c2: 'rie', b1: "이거는 커피예요?", b2: "커피가 아니에요. 녹차예요!", tag: "커피가 아니에요", prop: 'coffee' }
  ],
  5: [
    { bg: BG_CAFE, c1: 'cook', c2: 'michael', b1: "한국 음식이 어때요?", b2: "비빔밥이 정말 맛있어요!", tag: "맛있어요 · 좋아해요", prop: 'coffee' },
    { bg: BG_LIBRARY, c1: 'yujin', c2: 'sara', b1: "요즘 무엇을 공부해요?", b2: "매일 한국어를 공부해요!", tag: "공부해요 · 재미있어요", prop: 'book' }
  ],
  6: [
    { bg: BG_CAFE, c1: 'rie', c2: 'hajun', b1: "아침에 무엇을 마셔요?", b2: "따뜻한 커피를 마셔요!", tag: "커피를 · 빵을", prop: 'coffee' },
    { bg: BG_LIBRARY, c1: 'mina', c2: 'student', b1: "도서관에서 무엇을 해요?", b2: "재미있는 책을 읽어요!", tag: "책을 읽어요", prop: 'book' }
  ],
  7: [
    { bg: BG_PARK, c1: 'sara', c2: 'michael', b1: "오늘 날씨가 어때요?", b2: "하늘이 맑고 날씨가 좋아요!", tag: "날씨가 좋아요", prop: null },
    { bg: BG_CLASSROOM, c1: 'teacher_f', c2: 'yujin', b1: "우리 교실이 어때요?", b2: "교실이 넓고 깨끗해요!", tag: "교실이 넓어요", prop: 'chair' }
  ],
  8: [
    { bg: BG_SCHOOL_FRONT, c1: 'yujin', c2: 'student', b1: "지금 어디에 가요?", b2: "수업이 있어서 학교에 가요!", tag: "학교에 가요", prop: 'bag' },
    { bg: BG_STUDY_ROOM, c1: 'hajun', c2: 'mina', b1: "한국어 책이 어디에 있어요?", b2: "책상 위에 있어요!", tag: "책상 위에 있어요", prop: 'book' }
  ],
  9: [
    { bg: BG_LIBRARY, c1: 'teacher_f', c2: 'student', b1: "어디에서 한국어를 공부해요?", b2: "도서관에서 한국어를 공부해요!", tag: "도서관에서 공부해요", prop: 'book' },
    { bg: BG_PARK, c1: 'michael', c2: 'hajun', b1: "주말에 어디에서 운동해요?", b2: "공원에서 친구와 운동해요!", tag: "공원에서 운동해요", prop: null }
  ],
  10: [
    { bg: BG_STUDY_ROOM, c1: 'mina', c2: 'hajun', b1: "보통 몇 시에 일어나요?", b2: "아침 7시에 일어나요!", tag: "아침 7시에", prop: 'clock7' },
    { bg: BG_CAFE, c1: 'yujin', c2: 'sara', b1: "우리 토요일에 언제 만나요?", b2: "토요일 오후 4시에 만나요!", tag: "오후 4시에", prop: 'clock4' }
  ],
  11: [
    { bg: BG_STREET, c1: 'yujin', c2: 'office', b1: "회사에 어떻게 가요?", b2: "매일 지하철로 회사에 가요!", tag: "지하철로 가요", prop: 'bag' },
    { bg: BG_CLASSROOM, c1: 'teacher_f', c2: 'student', b1: "무엇으로 이름을 써요?", b2: "연필로 공책에 이름을 써요!", tag: "연필로 써요", prop: 'pencil' }
  ],
  12: [
    { bg: BG_AIRPORT, c1: 'sara', c2: 'michael', b1: "서울에서 부산까지 어떻게 가요?", b2: "서울에서 부산까지 기차로 가요!", tag: "서울에서 부산까지", prop: 'bag' },
    { bg: BG_SCHOOL_FRONT, c1: 'yujin', c2: 'hajun', b1: "집에서 학교까지 걸어서 가요?", b2: "네, 집에서 학교까지 걸어가요!", tag: "집에서 학교까지", prop: 'book' }
  ],
  13: [
    { bg: BG_STUDY_ROOM, c1: 'mina', c2: 'office', b1: "몇 시부터 몇 시까지 일해요?", b2: "9시부터 6시까지 일해요!", tag: "9시부터 6시까지", prop: 'clock7' },
    { bg: BG_LIBRARY, c1: 'teacher_f', c2: 'student', b1: "한국어 수업이 언제예요?", b2: "월요일부터 금요일까지 있어요!", tag: "월요일부터 금요일까지", prop: 'book' }
  ],
  14: [
    { bg: BG_HALLWAY, c1: 'yujin', c2: 'hajun', b1: "그 선물을 누구한테 줘요?", b2: "생일인 친구한테 선물을 줘요!", tag: "친구한테 줘요", prop: 'gift' },
    { bg: BG_CLASSROOM, c1: 'student', c2: 'teacher_f', b1: "모르는 것은 누구에게 물어요?", b2: "선생님께 질문을 해요!", tag: "선생님께 / 친구에게", prop: 'book' }
  ],
  15: [
    { bg: BG_CLASSROOM, c1: 'michael', c2: 'yujin', b1: "저는 한국어를 공부해요.", b2: "반가워요! 저도 공부해요!", tag: "저도 학생이에요", prop: 'book' },
    { bg: BG_CAFE, c1: 'sara', c2: 'rie', b1: "커피를 좋아해요? 차도 좋아해요?", b2: "커피를 좋아해요. 녹차도 좋아해요!", tag: "녹차도 좋아해요", prop: 'coffee' }
  ],
  16: [
    { bg: BG_CAFE, c1: 'cook', c2: 'sara', b1: "아침에 무엇을 먹어요?", b2: "빵하고 따뜻한 우유를 먹어요!", tag: "빵하고 우유", prop: 'coffee' },
    { bg: BG_STREET, c1: 'hajun', c2: 'mina', b1: "주말에 누구랑 영화를 봐요?", b2: "제 친구랑 같이 영화를 봐요!", tag: "친구랑 영화를 봐요", prop: 'bag' }
  ],
  17: [
    { bg: BG_CAFE, c1: 'rie', c2: 'office', b1: "아침에 밥을 먹어요?", b2: "아니요, 아침에는 커피만 마셔요!", tag: "커피만 마셔요", prop: 'coffee' },
    { bg: BG_STUDY_ROOM, c1: 'michael', c2: 'yujin', b1: "일요일에 어디에 가요?", b2: "피곤해서 집에만 있어요!", tag: "집에만 있어요", prop: 'book' }
  ],
  18: [
    { bg: BG_CAFE, c1: 'mina', c2: 'yujin', b1: "카페에서 무엇을 마실까요?", b2: "시원한 커피나 주스를 마셔요!", tag: "커피나 주스", prop: 'coffee' },
    { bg: BG_PARK, c1: 'hajun', c2: 'sara', b1: "우리 언제 만날까요?", b2: "토요일이나 일요일에 만나요!", tag: "토요일이나 일요일", prop: null }
  ],
  19: [
    { bg: BG_PARK, c1: 'yujin', c2: 'michael', b1: "운동을 자주 해요?", b2: "네, 아침마다 공원에서 운동해요!", tag: "아침마다 운동해요", prop: null },
    { bg: BG_LIBRARY, c1: 'teacher_f', c2: 'rie', b1: "한국어 단어를 언제 외워요?", b2: "날마다 한국어 단어를 외워요!", tag: "날마다 공부해요", prop: 'book' }
  ],
  20: [
    { bg: BG_CLASSROOM, c1: 'teacher_f', c2: 'rie', b1: "이 가방은 누구의 가방이에요?", b2: "그거는 리에 씨의 가방이에요!", tag: "리에 씨의 가방", prop: 'bag' },
    { bg: BG_STUDY_ROOM, c1: 'student', c2: 'yujin', b1: "책상 위의 책은 누구 거예요?", b2: "우리 선생님의 한국어 책이에요!", tag: "선생님의 책", prop: 'book' }
  ],
  21: [
    { bg: BG_AIRPORT, c1: 'michael', c2: 'hajun', b1: "비행기와 기차 중에 뭐가 빨라요?", b2: "비행기가 기차보다 훨씬 빨라요!", tag: "기차보다 빨라요", prop: 'bag' },
    { bg: BG_STREET, c1: 'sara', c2: 'mina', b1: "서울과 부산 중에 어디가 따뜻해요?", b2: "부산이 서울보다 더 따뜻해요!", tag: "서울보다 따뜻해요", prop: null }
  ],
  22: [
    { bg: BG_STAGE, c1: 'yujin', c2: 'singer', b1: "민수 씨가 노래를 잘해요?", b2: "네, 진짜 가수처럼 노래를 잘해요!", tag: "가수처럼 잘해요", prop: null },
    { bg: BG_HALLWAY, c1: 'michael', c2: 'sara', b1: "수진 씨는 어떤 사람이에요?", b2: "마음이 천사같이 정말 착해요!", tag: "천사같이 착해요", prop: 'book' }
  ],
  23: [
    { bg: BG_CAFE, c1: 'hajun', c2: 'yujin', b1: "어제 주말에 무엇을 했어요?", b2: "오랜만에 친구를 만났어요!", tag: "친구를 만났어요", prop: 'coffee' },
    { bg: BG_STUDY_ROOM, c1: 'mina', c2: 'rie', b1: "어제 저녁에 뭐 했어요?", b2: "집에서 재미있는 영화를 봤어요!", tag: "영화를 봤어요", prop: 'book' }
  ],
  24: [
    { bg: BG_AIRPORT, c1: 'michael', c2: 'sara', b1: "이번 주말에 무엇을 할 거예요?", b2: "부산으로 여행을 갈 거예요!", tag: "여행을 갈 거예요", prop: 'bag' },
    { bg: BG_LIBRARY, c1: 'teacher_f', c2: 'student', b1: "방학에 무슨 계획이 있어요?", b2: "열심히 한국어를 공부할 거예요!", tag: "공부할 거예요", prop: 'book' }
  ],
  25: [
    { bg: BG_CAFE, c1: 'yujin', c2: 'rie', b1: "지금 카페에서 뭐 하고 있어요?", b2: "따뜻한 커피를 마시고 있어요!", tag: "마시고 있어요", prop: 'coffee' },
    { bg: BG_CLASSROOM, c1: 'hajun', c2: 'student', b1: "요즘 무엇을 배우고 있어요?", b2: "학교에서 한국어를 배우고 있어요!", tag: "배우고 있어요", prop: 'book' }
  ],
  26: [
    { bg: BG_CAFE, c1: 'cook', c2: 'michael', b1: "오늘 점심은 불고기예요!", b2: "와, 불고기가 정말 맛있겠어요!", tag: "정말 맛있겠어요", prop: 'coffee' },
    { bg: BG_STREET, c1: 'sara', c2: 'yujin', b1: "하늘에 구름이 아주 많아요.", b2: "오후에 비가 많이 오겠어요!", tag: "비가 오겠어요", prop: 'bag' }
  ],
  27: [
    { bg: BG_SCHOOL_FRONT, c1: 'mina', c2: 'hajun', b1: "일요일에도 학교에 가요?", b2: "아니요, 일요일에는 안 가요!", tag: "학교에 안 가요", prop: 'bag' },
    { bg: BG_STREET, c1: 'rie', c2: 'sara', b1: "이 예쁜 가방은 비싸요?", b2: "아니요, 세일해서 안 비싸요!", tag: "안 비싸요", prop: 'bag' }
  ],
  28: [
    { bg: BG_CLASSROOM, c1: 'teacher_f', c2: 'sara', b1: "한국어 공부가 어려워요?", b2: "아니요, 어렵지 않아요!", tag: "어렵지 않아요", prop: 'book' },
    { bg: BG_CAFE, c1: 'cook', c2: 'michael', b1: "이 음식이 많이 매워요?", b2: "아니요, 하나도 맵지 않아요!", tag: "맵지 않아요", prop: 'coffee' }
  ],
  29: [
    { bg: BG_PARK, c1: 'yujin', c2: 'michael', b1: "주말에 같이 수영하러 갈까요?", b2: "저는 수영을 못 해요!", tag: "수영을 못 해요", prop: null },
    { bg: BG_STUDY_ROOM, c1: 'mina', c2: 'office', b1: "오늘 저녁 파티에 와요?", b2: "일이 많아서 파티에 못 가요!", tag: "파티에 못 가요", prop: 'book' }
  ],
  30: [
    { bg: BG_STUDY_ROOM, c1: 'doctor', c2: 'mina', b1: "어제 왜 학교에 안 왔어요?", b2: "감기로 아파서 가지 못했어요!", tag: "가지 못했어요", prop: 'book' },
    { bg: BG_CAFE, c1: 'hajun', c2: 'rie', b1: "왜 떡볶이를 안 먹어요?", b2: "너무 매워서 먹지 못해요!", tag: "먹지 못해요", prop: 'coffee' }
  ]
};

function renderExScene(cfg) {
  let mid = '';
  if (cfg.prop === 'book') {
    mid = `${woodenTable(260, 365, 280, 115)}${placeProp('book', 315, 230, 0.64)}${focusRing(400, 330, 78, 46)}`;
  } else if (cfg.prop === 'coffee') {
    mid = `${woodenTable(260, 365, 280, 115)}${placeProp('coffee', 325, 225, 0.62)}${focusRing(400, 330, 72, 48)}`;
  } else if (cfg.prop === 'bag') {
    mid = `${placeProp('bag', 315, 215, 0.68)}${focusRing(395, 320, 76, 60)}`;
  } else if (cfg.prop === 'pencil') {
    mid = `${woodenTable(260, 365, 280, 115)}${placeProp('pencil', 330, 245, 0.58)}${focusRing(400, 332, 76, 46)}`;
  } else if (cfg.prop === 'chair') {
    mid = `${placeProp('chair', 330, 215, 0.62)}${focusRing(400, 325, 76, 62)}`;
  } else if (cfg.prop === 'clock7') {
    mid = `${drawClock(400, 230, 56, -150, 0, cfg.tag)}${focusRing(400, 230, 78, 78)}`;
  } else if (cfg.prop === 'clock4') {
    mid = `${drawClock(400, 230, 56, 120, 0, cfg.tag)}${focusRing(400, 230, 78, 78)}`;
  } else if (cfg.prop === 'gift') {
    mid = `<g transform="translate(400 295)"><rect x="-46" y="-42" width="92" height="84" rx="10" fill="#ffd84d" stroke="#14213d" stroke-width="5"/><rect x="-50" y="-42" width="100" height="22" rx="6" fill="#e2553f" stroke="#14213d" stroke-width="5"/><rect x="-10" y="-42" width="20" height="84" fill="#c8102e" stroke="#14213d" stroke-width="4"/></g>${focusRing(400, 295, 76, 66)}`;
  } else {
    mid = `${focusRing(575, 260, 82, 108)}`;
  }

  return `${cfg.bg}
    ${placeChar(cfg.c1, 95, 96, 0.58, true)}
    ${placeChar(cfg.c2, 515, 96, 0.58, false)}
    ${mid}
    ${speechBubble(55, 22, 330, 56, cfg.b1, 190, 108, "#fff", "#14213d", "#14213d", 23)}
    ${speechBubble(415, 22, 345, 56, cfg.b2, 595, 108, "#ffd84d", "#14213d", "#14213d", 23)}
    ${tagBox(400, 486, cfg.tag, "#fff", "#c8102e", "#c8102e", 23, 20, 42)}`;
}

const outDirs = [
  path.resolve('public/course/sample/scenes'),
  path.resolve('public/course/scenes')
];

for (const dir of outDirs) {
  fs.mkdirSync(dir, { recursive: true });
}

for (let n = 2; n <= 30; n++) {
  const numStr = String(n).padStart(2, '0');
  const heroSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 520">${HERO_SCENES[n]()}</svg>\n`;
  const ex1Svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 520">${renderExScene(EX_CONFIGS[n][0])}</svg>\n`;
  const ex2Svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 520">${renderExScene(EX_CONFIGS[n][1])}</svg>\n`;
  for (const dir of outDirs) {
    fs.writeFileSync(path.join(dir, `hero-${numStr}.svg`), heroSvg, 'utf8');
    fs.writeFileSync(path.join(dir, `ex-${n}-1.svg`), ex1Svg, 'utf8');
    fs.writeFileSync(path.join(dir, `ex-${n}-2.svg`), ex2Svg, 'utf8');
  }
}

console.log('Successfully generated 29 hero SVGs and 58 dialogue ex SVGs (87 total) in both scenes directories!');
