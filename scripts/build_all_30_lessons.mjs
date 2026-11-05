import fs from 'fs';
import path from 'path';

const SAMPLE_DIR = 'C:/korean_box_edu/public/course/sample';
const DATA_DIR = path.join(SAMPLE_DIR, 'data');

// 30개 과 전체 정의 (국립국어원 1호선 1급 공인 커리큘럼)
const LESSON_DEFS = [
  // Unit 1: 나를 소개해요 (4과)
  { no: 1, unit: "Unit 1", unitName: "나를 소개해요", key: "이에요/예요", pos: "서술격 조사", meanKo: "이름·사물·직업이 무엇인지 말합니다.", meanEn: "States what someone or something is.", make: [ { p: "학생", s: "이에요", f: "학생이에요" }, { p: "의사", s: "예요", f: "의사예요" } ] },
  { no: 2, unit: "Unit 1", unitName: "나를 소개해요", key: "은/는", pos: "보조사", meanKo: "문장의 주제나 대조를 나타냅니다.", meanEn: "Topic and contrast marker.", make: [ { p: "저", s: "는", f: "저는" }, { p: "선생님", s: "은", f: "선생님은" } ] },
  { no: 3, unit: "Unit 1", unitName: "나를 소개해요", key: "이/가 있어요/없어요", pos: "표현", meanKo: "사물이나 사람이 있거나 없음을 말합니다.", meanEn: "To have / exist or not to have / not exist.", make: [ { p: "친구", s: "가 있어요", f: "친구가 있어요" }, { p: "시간", s: "이 없어요", f: "시간이 없어요" } ] },
  { no: 4, unit: "Unit 1", unitName: "나를 소개해요", key: "아니에요", pos: "표현", meanKo: "명사를 정중하게 부정합니다.", meanEn: "Negative identification (is not).", make: [ { p: "선생님", s: "이 아니에요", f: "선생님이 아니에요" }, { p: "가수", s: "가 아니에요", f: "가수가 아니에요" } ] },

  // Unit 2: 일상을 이야기해요 (6과)
  { no: 5, unit: "Unit 2", unitName: "일상을 이야기해요", key: "-아/어요", pos: "종결 어미", meanKo: "현재의 행동이나 상태를 정중하고 친근하게 말합니다.", meanEn: "Polite informal present tense ending.", make: [ { p: "가다", s: "아요", f: "가요" }, { p: "먹다", s: "어요", f: "먹어요" } ] },
  { no: 6, unit: "Unit 2", unitName: "일상을 이야기해요", key: "을/를", pos: "목적격 조사", meanKo: "행동의 대상이 되는 목적어를 나타냅니다.", meanEn: "Object marking particle.", make: [ { p: "밥", s: "을", f: "밥을" }, { p: "커피", s: "를", f: "커피를" } ] },
  { no: 7, unit: "Unit 2", unitName: "일상을 이야기해요", key: "이/가 (주어)", pos: "주격 조사", meanKo: "문장의 행동을 하는 주어를 나타냅니다.", meanEn: "Subject marking particle.", make: [ { p: "비", s: "가 와요", f: "비가 와요" }, { p: "눈", s: "이 와요", f: "눈이 와요" } ] },
  { no: 8, unit: "Unit 2", unitName: "일상을 이야기해요", key: "에 (장소)", pos: "격 조사", meanKo: "사람이나 사물이 향하는 목적지나 있는 장소를 나타냅니다.", meanEn: "Destination or location of existence (to / in / at).", make: [ { p: "학교", s: "에 가요", f: "학교에 가요" }, { p: "집", s: "에 있어요", f: "집에 있어요" } ] },
  { no: 9, unit: "Unit 2", unitName: "일상을 이야기해요", key: "에서 (장소)", pos: "격 조사", meanKo: "어떤 행동이 일어나는 장소를 나타냅니다.", meanEn: "Location where an action takes place (at / in).", make: [ { p: "도서관", s: "에서 공부해요", f: "도서관에서 공부해요" }, { p: "카페", s: "에서 만나요", f: "카페에서 만나요" } ] },
  { no: 10, unit: "Unit 2", unitName: "일상을 이야기해요", key: "에 (시간)", pos: "격 조사", meanKo: "어떤 일이나 행동이 일어나는 시간을 나타냅니다.", meanEn: "Time marker (at / on / in).", make: [ { p: "아침 9시", s: "에", f: "아침 9시에" }, { p: "주말", s: "에", f: "주말에" } ] },

  // Unit 3: 이동과 방향을 말해요 (4과)
  { no: 11, unit: "Unit 3", unitName: "이동과 방향", key: "(으)로 (수단·방향)", pos: "격 조사", meanKo: "이동하는 방향이나 이동 수단·도구를 나타냅니다.", meanEn: "Direction (towards) or means / tool (by / with).", make: [ { p: "오른쪽", s: "으로 가세요", f: "오른쪽으로 가세요" }, { p: "지하철", s: "로 가요", f: "지하철로 가요" } ] },
  { no: 12, unit: "Unit 3", unitName: "이동과 방향", key: "에서 ~ 까지 (장소)", pos: "조사", meanKo: "출발 장소와 도착 장소의 범위를 나타냅니다.", meanEn: "From [place] to [place].", make: [ { p: "서울", s: "에서 부산까지", f: "서울에서 부산까지" }, { p: "집", s: "에서 역까지", f: "집에서 역까지" } ] },
  { no: 13, unit: "Unit 3", unitName: "이동과 방향", key: "부터 ~ 까지", pos: "조사", meanKo: "시작 시간과 끝 시간의 범위를 나타냅니다.", meanEn: "From [time] to [time].", make: [ { p: "1시", s: "부터 2시까지", f: "1시부터 2시까지" }, { p: "월요일", s: "부터 금요일까지", f: "월요일부터 금요일까지" } ] },
  { no: 14, unit: "Unit 3", unitName: "이동과 방향", key: "에게/한테", pos: "격 조사", meanKo: "행동이 미치는 대상(사람·동물)을 나타냅니다.", meanEn: "To / for someone.", make: [ { p: "친구", s: "에게 줘요", f: "친구에게 줘요" }, { p: "동생", s: "한테 전화해요", f: "동생한테 전화해요" } ] },

  // Unit 4: 함께하고 덧붙여요 (8과)
  { no: 15, unit: "Unit 4", unitName: "함께하고 덧붙여요", key: "도", pos: "보조사", meanKo: "앞선 것과 마찬가지로 더해짐을 나타냅니다.", meanEn: "Also / too / as well.", make: [ { p: "저", s: "도 학생이에요", f: "저도 학생이에요" }, { p: "사과", s: "도 주세요", f: "사과도 주세요" } ] },
  { no: 16, unit: "Unit 4", unitName: "함께하고 덧붙여요", key: "와/과 · 하고 · (이)랑", pos: "접속 조사", meanKo: "사람이나 사물을 대등하게 이어줍니다.", meanEn: "And / with.", make: [ { p: "빵", s: "과 우유", f: "빵과 우유" }, { p: "친구", s: "하고 영화 봐요", f: "친구하고 영화 봐요" } ] },
  { no: 17, unit: "Unit 4", unitName: "함께하고 덧붙여요", key: "만", pos: "보조사", meanKo: "다른 것은 제외하고 그것 하나만을 한정합니다.", meanEn: "Only / just.", make: [ { p: "물", s: "만 마셔요", f: "물만 마셔요" }, { p: "한 번", s: "만 도와주세요", f: "한 번만 도와주세요" } ] },
  { no: 18, unit: "Unit 4", unitName: "함께하고 덧붙여요", key: "(이)나", pos: "접속 조사", meanKo: "둘 중 하나를 선택하거나 수량이 많음을 강조합니다.", meanEn: "Or / as much as.", make: [ { p: "주스", s: "나 커피", f: "주스나 커피" }, { p: "토요일", s: "이나 일요일", f: "토요일이나 일요일" } ] },
  { no: 19, unit: "Unit 4", unitName: "함께하고 덧붙여요", key: "마다", pos: "보조사", meanKo: "하나하나 모두 해당함을 나타냅니다.", meanEn: "Every / each.", make: [ { p: "날", s: "마다 운동해요", f: "날마다 운동해요" }, { p: "주말", s: "마다 여행 가요", f: "주말마다 여행 가요" } ] },
  { no: 20, unit: "Unit 4", unitName: "함께하고 덧붙여요", key: "의", pos: "소유격 조사", meanKo: "소유나 소속 관계를 나타냅니다.", meanEn: "Possessive marker ('s / of).", make: [ { p: "선생님", s: "의 책", f: "선생님의 책" }, { p: "우리", s: "의 약속", f: "우리의 약속" } ] },
  { no: 21, unit: "Unit 4", unitName: "함께하고 덧붙여요", key: "보다", pos: "비교 조사", meanKo: "비교의 기준이 됨을 나타냅니다.", meanEn: "More than (comparison).", make: [ { p: "어제", s: "보다 오늘 더워요", f: "어제보다 오늘 더워요" }, { p: "비행기", s: "가 기차보다 빨라요", f: "비행기가 기차보다 빨라요" } ] },
  { no: 22, unit: "Unit 4", unitName: "함께하고 덧붙여요", key: "처럼 / 같이", pos: "비유 조사", meanKo: "모양이 서로 비슷함을 비유합니다.", meanEn: "Like / as.", make: [ { p: "가수", s: "처럼 노래해요", f: "가수처럼 노래해요" }, { p: "가족", s: "같이 편해요", f: "가족같이 편해요" } ] },

  // Unit 5: 시제와 바람을 나타내요 (4과)
  { no: 23, unit: "Unit 5", unitName: "시제와 바람", key: "-았/었-", pos: "선어말 어미", meanKo: "과거에 일어난 일이나 완료된 상태를 말합니다.", meanEn: "Past tense marker (did / was).", make: [ { p: "가다", s: "았어요", f: "갔어요" }, { p: "먹다", s: "었어요", f: "먹었어요" } ] },
  { no: 24, unit: "Unit 5", unitName: "시제와 바람", key: "-(으)ㄹ 거예요", pos: "종결 어미", meanKo: "미래의 계획이나 추측을 말합니다.", meanEn: "Future tense or plan (will do).", make: [ { p: "만나다", s: "ㄹ 거예요", f: "만날 거예요" }, { p: "읽다", s: "을 거예요", f: "읽을 거예요" } ] },
  { no: 25, unit: "Unit 5", unitName: "시제와 바람", key: "-고 있다", pos: "보조 용언", meanKo: "어떤 행동이 현재 계속 진행되고 있음을 나타냅니다.", meanEn: "Present progressive (be doing -ing).", make: [ { p: "공부하다", s: "고 있어요", f: "공부하고 있어요" }, { p: "듣다", s: "고 있어요", f: "듣고 있어요" } ] },
  { no: 26, unit: "Unit 5", unitName: "시제와 바람", key: "-겠-", pos: "선어말 어미", meanKo: "자신의 의지나 상황에 대한 직관적 추측을 말합니다.", meanEn: "Intention or deduction (will / must be).", make: [ { p: "맛있겠다", s: "!", f: "맛있겠어요!" }, { p: "내일 연락드리", s: "겠습니다", f: "내일 연락드리겠습니다" } ] },

  // Unit 6: 부정을 정확하게 해요 (4과)
  { no: 27, unit: "Unit 6", unitName: "정확한 부정", key: "안", pos: "부사", meanKo: "단순히 하지 않거나 의지가 없음을 부정합니다.", meanEn: "Short form negation (do not).", make: [ { p: "안", s: "가요", f: "안 가요" }, { p: "안", s: "먹어요", f: "안 먹어요" } ] },
  { no: 28, unit: "Unit 6", unitName: "정확한 부정", key: "-지 않다", pos: "보조 용언", meanKo: "행동이나 상태를 격식 있게 길게 부정합니다.", meanEn: "Long form negation (does not).", make: [ { p: "크", s: "지 않아요", f: "크지 않아요" }, { p: "일하", s: "지 않아요", f: "일하지 않아요" } ] },
  { no: 29, unit: "Unit 6", unitName: "정확한 부정", key: "못", pos: "부사", meanKo: "능력이나 상황의 한계로 인해 하지 못함을 말합니다.", meanEn: "Inability negation (cannot).", make: [ { p: "못", s: "가요", f: "못 가요" }, { p: "못", s: "자요", f: "못 자요" } ] },
  { no: 30, unit: "Unit 6", unitName: "정확한 부정", key: "-지 못하다", pos: "보조 용언", meanKo: "할 수 없음을 완곡하고 격식 있게 부정합니다.", meanEn: "Long form inability (cannot).", make: [ { p: "만나", s: "지 못했어요", f: "만나지 못했어요" }, { p: "이해하", s: "지 못해요", f: "이해하지 못해요" } ] }
];

// 1. units.js 생성 (단원 6개, 총 30개 과 전체 등록)
const UNITS_DATA = [
  { no: 1, name: "Unit 1: 나를 소개해요", items: ["이에요/예요", "은/는", "이/가 있어요/없어요", "아니에요"] },
  { no: 2, name: "Unit 2: 일상을 이야기해요", items: ["-아/어요", "을/를", "이/가 (주어)", "에 (장소)", "에서 (장소)", "에 (시간)"] },
  { no: 3, name: "Unit 3: 이동과 방향", items: ["(으)로 (수단·방향)", "에서 ~ 까지 (장소)", "부터 ~ 까지", "에게/한테"] },
  { no: 4, name: "Unit 4: 함께하고 덧붙여요", items: ["도", "와/과 · 하고 · (이)랑", "만", "(이)나", "마다", "의", "보다", "처럼 / 같이"] },
  { no: 5, name: "Unit 5: 시제와 바람", items: ["-았/었-", "-(으)ㄹ 거예요", "-고 있다", "-겠-"] },
  { no: 6, name: "Unit 6: 정확한 부정", items: ["안", "-지 않다", "못", "-지 못하다"] }
];

const unitsJsContent = `/* 수강생 전용 100% 무료 슬라이드 30개 단원 전편 개방 */
const UNITS = ${JSON.stringify(UNITS_DATA, null, 2)};
const LINE_ALL = {"units":[4,6,4,8,4,4],"keys":${JSON.stringify(LESSON_DEFS.map(l => l.key))}};
`;

fs.writeFileSync(path.join(SAMPLE_DIR, 'units.js'), unitsJsContent, 'utf8');
console.log('[OK] Generated units.js with 30 lessons across 6 units!');

// 2. data/lesson1.js ~ lesson30.js 생성
LESSON_DEFS.forEach((l) => {
  if (l.no === 1) return; // 1과는 원본 파일 보존

  const content = `/* Lesson ${l.no}: ${l.key} */
LESSONS.push({
  "key": "${l.key}",
  "pos": "${l.pos}",
  "form": "${l.key}",
  "opening": {
    "name": "${l.unitName}",
    "no": ${l.no},
    "line": "Level 1 · ${l.unit}",
    "color": "#0052a4",
    "en": "${l.meanEn}",
    "board": "Lesson ${l.no} · ${l.key}",
    "next": "Next stop: Lesson ${l.no < 30 ? l.no + 1 : 1}",
    "stops": ["Unit 1", "Unit 2", "Unit 3", "Unit 4", "Unit 5", "Unit 6"]
  },
  "gpic": [
    { "e": "💡", "c": "${l.key}", "t": "navy" },
    { "sign": "=" },
    { "e": "✨", "c": "${l.pos}", "t": "accent" }
  ],
  "mean": {
    "ko": "${l.meanKo}",
    "en": "${l.meanEn}"
  },
  "warn": [
    {
      "ko": "정확한 억양과 규칙에 맞추어 큰 소리로 따라 말해 보세요.",
      "en": "Practice speaking aloud with natural intonation."
    }
  ],
  "make": ${JSON.stringify(l.make, null, 2)},
  "talk": [
    { "sp": "A", "t": "${l.make[0].f}.", "tr": "Example sentence 1" },
    { "sp": "B", "t": "${l.make[1] ? l.make[1].f : l.make[0].f}.", "tr": "Example sentence 2" }
  ]
});
`;
  fs.writeFileSync(path.join(DATA_DIR, `lesson${l.no}.js`), content, 'utf8');
});

console.log('[OK] All 30 lesson data files created successfully!');

// 3. course/sample/index.html 에 30개 스크립트 전수 로드
const sampleIndexPath = path.join(SAMPLE_DIR, 'index.html');
let sampleHtml = fs.readFileSync(sampleIndexPath, 'utf8');

// 기존 lesson 스크립트들을 모두 30개 과 로드로 일괄 교체
let lessonScripts = '';
for (let i = 1; i <= 30; i++) {
  lessonScripts += `<script src="/course/sample/data/lesson${i}.js"></script>\n`;
}

// 교체
const scriptRegex = /<script\s+src="[^"]*lesson1\.js[^"]*"><\/script>[\s\S]*?(?=<script\s+src="[^"]*sum\.js)/;
if (scriptRegex.test(sampleHtml)) {
  sampleHtml = sampleHtml.replace(scriptRegex, lessonScripts);
} else {
  sampleHtml = sampleHtml.replace('<script src="/course/sample/data/sum.js', lessonScripts + '<script src="/course/sample/data/sum.js');
}

fs.writeFileSync(sampleIndexPath, sampleHtml, 'utf8');
console.log('[OK] sample/index.html updated with all 30 lesson scripts!');
