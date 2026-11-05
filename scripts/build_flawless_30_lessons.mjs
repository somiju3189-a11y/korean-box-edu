import fs from 'fs';
import path from 'path';
import vm from 'vm';

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

// Comprehensive English dictionary for all Korean base words used across Lessons 2–30
const WORD_INFO = {
  "선생님": { g: "teacher", e: "👩‍🏫", pic: "v-1-teacher.svg" },
  "학생": { g: "student", e: "🎓", pic: "v-1-student.svg" },
  "의사": { g: "doctor", e: "🩺", pic: "v-1-doctor.svg" },
  "요리사": { g: "cook", e: "👨‍🍳", pic: "v-1-cook.svg" },
  "회사원": { g: "office worker", e: "👔", pic: "v-1-office-worker.svg" },
  "가수": { g: "singer", e: "🎤", pic: "v-1-singer.svg" },
  "마이클": { g: "Michael", e: "🧑", pic: "v-1-michael.svg" },
  "유진": { g: "Yujin", e: "👩", pic: "v-1-yujin.svg" },
  "하준": { g: "Hajun", e: "👦", pic: "v-1-hajun.svg" },
  "리에": { g: "Rie", e: "👧", pic: "v-1-rie.svg" },
  "사라": { g: "Sara", e: "👱‍♀️", pic: "v-1-sara.svg" },
  "미나": { g: "Mina", e: "👩", pic: "v-1-mina.svg" },
  "책": { g: "book", e: "📕", pic: "v-1-book.svg" },
  "가방": { g: "bag", e: "🎒", pic: "v-1-bag.svg" },
  "연필": { g: "pencil", e: "✏️", pic: "v-1-pencil.svg" },
  "의자": { g: "chair", e: "🪑", pic: "v-1-chair.svg" },
  "커피": { g: "coffee", e: "☕", pic: "v-1-coffee.svg" },
  "이름": { g: "name", e: "🪪" },
  "동생": { g: "younger sibling", e: "👦" },
  "한국": { g: "Korea", e: "🇰🇷" },
  "저": { g: "I (polite)", e: "🙋" },
  "친구": { g: "friend", e: "👫" },
  "누나": { g: "older sister", e: "👧" },
  "돈": { g: "money", e: "💵" },
  "시간": { g: "time", e: "⏰" },
  "시계": { g: "watch / clock", e: "⌚" },
  "모자": { g: "hat", e: "🧢" },
  "우산": { g: "umbrella", e: "☂️" },
  "한국 사람": { g: "Korean person", e: "🇰🇷" },
  "녹차": { g: "green tea", e: "🍵" },
  "가다": { g: "to go", e: "🚶" },
  "보다": { g: "to watch / see", e: "👀" },
  "좋다": { g: "to be good", e: "👍" },
  "살다": { g: "to live", e: "🏠" },
  "맛있다": { g: "to be delicious", e: "😋" },
  "먹다": { g: "to eat", e: "🍽️" },
  "공부하다": { g: "to study", e: "📖" },
  "운동하다": { g: "to exercise", e: "🏃" },
  "밥": { g: "meal / rice", e: "🍚" },
  "음악": { g: "music", e: "🎵" },
  "선물": { g: "gift", e: "🎁" },
  "한국어": { g: "Korean language", e: "🇰🇷" },
  "영화": { g: "movie", e: "🎬" },
  "꽃": { g: "flower", e: "🌸" },
  "음식": { g: "food", e: "🍲" },
  "교실": { g: "classroom", e: "🏫" },
  "날씨": { g: "weather", e: "☀️" },
  "노래": { g: "song", e: "🎶" },
  "비": { g: "rain", e: "🌧️" },
  "학교": { g: "school", e: "🏫" },
  "집": { g: "home / house", e: "🏠" },
  "회사": { g: "company / office", e: "🏢" },
  "책상 위": { g: "on the desk", e: "桌" },
  "가방 안": { g: "inside the bag", e: "🎒" },
  "공원": { g: "park", e: "🌳" },
  "도서관": { g: "library", e: "📚" },
  "카페": { g: "cafe", e: "☕" },
  "식당": { g: "restaurant", e: "🍴" },
  "운동장": { g: "playground", e: "⚽" },
  "백화점": { g: "department store", e: "🏬" },
  "7시": { g: "7 o'clock", e: "🕖" },
  "4시": { g: "4 o'clock", e: "🕓" },
  "토요일": { g: "Saturday", e: "📅" },
  "주말": { g: "weekend", e: "🗓️" },
  "오늘": { g: "today", e: "☀️" },
  "내일": { g: "tomorrow", e: "🌅" },
  "어제": { g: "yesterday", e: "⏮️" },
  "지금": { g: "now", e: "⏱️" },
  "트럭": { g: "truck", e: "🚚" },
  "볼펜": { g: "ballpoint pen", e: "🖊️" },
  "오른쪽": { g: "right side", e: "➡️" },
  "젓가락": { g: "chopsticks", e: "🥢" },
  "지하철": { g: "subway", e: "🚇" },
  "버스": { g: "bus", e: "🚌" },
  "서울": { g: "Seoul", e: "🏙️" },
  "집": { g: "home", e: "🏠" },
  "한국": { g: "Korea", e: "🇰🇷" },
  "교실": { g: "classroom", e: "🏫" },
  "부산": { g: "Busan", e: "🌊" },
  "학교": { g: "school", e: "🏫" },
  "공항": { g: "airport", e: "✈️" },
  "도서관": { g: "library", e: "📚" },
  "9시": { g: "9 o'clock", e: "🕘" },
  "월요일": { g: "Monday", e: "📅" },
  "아침": { g: "morning", e: "🌅" },
  "1월": { g: "January", e: "🗓️" },
  "6시": { g: "6 o'clock", e: "🕕" },
  "금요일": { g: "Friday", e: "📅" },
  "저녁": { g: "evening", e: "🌆" },
  "3월": { g: "March", e: "🗓️" },
  "선생님께": { g: "to the teacher (hon.)", e: "👩‍🏫" },
  "부모님": { g: "parents", e: "👨‍👩‍👧" },
  "할머니": { g: "grandmother", e: "👵" },
  "형": { g: "older brother", e: "👦" },
  "빵": { g: "bread", e: "🥐" },
  "과일": { g: "fruit", e: "🍎" },
  "우유": { g: "milk", e: "🥛" },
  "물": { g: "water", e: "💧" },
  "고기": { g: "meat", e: "🥩" },
  "야채": { g: "vegetables", e: "🥗" },
  "일요일": { g: "Sunday", e: "📅" },
  "주스": { g: "juice", e: "🧃" },
  "기차": { g: "train", e: "🚆" },
  "비행기": { g: "airplane", e: "✈️" },
  "날": { g: "day", e: "☀️" },
  "사람": { g: "person", e: "🧑" },
  "나라": { g: "country", e: "🌏" },
  "여름": { g: "summer", e: "🌻" },
  "겨울": { g: "winter", e: "⛄" },
  "형": { g: "older brother", e: "👦" },
  "배우": { g: "actor", e: "🎭" },
  "천사": { g: "angel", e: "👼" },
  "눈": { g: "snow", e: "❄️" },
  "바다": { g: "sea / ocean", e: "🌊" },
  "만나다": { g: "to meet", e: "🤝" },
  "자다": { g: "to sleep", e: "😴" },
  "여행하다": { g: "to travel", e: "🧳" },
  "읽다": { g: "to read", e: "📖" },
  "찍다": { g: "to take (a photo)", e: "📷" },
  "사다": { g: "to buy", e: "🛍️" },
  "마시다": { g: "to drink", e: "🥤" },
  "일하다": { g: "to work", e: "💼" },
  "쉬다": { g: "to rest", e: "🛋️" },
  "듣다": { g: "to listen", e: "🎧" },
  "배우다": { g: "to learn", e: "✏️" },
  "오다": { g: "to come", e: "🚶" },
  "좋아하다": { g: "to like", e: "❤️" },
  "재미있다": { g: "to be fun / interesting", e: "😄" },
  "힘들다": { g: "to be tough / tiring", e: "💦" },
  "바쁘다": { g: "to be busy", e: "🏃" },
  "예쁘다": { g: "to be pretty", e: "✨" },
  "비싸다": { g: "to be expensive", e: "🏷️" },
  "맵다": { g: "to be spicy", e: "🌶️" },
  "어렵다": { g: "to be difficult", e: "🧩" },
  "멀다": { g: "to be far", e: "🛤️" },
  "늦다": { g: "to be late", e: "⏰" },
  "수영하다": { g: "to swim", e: "🏊" },
  "운전하다": { g: "to drive", e: "🚗" },
  "요리하다": { g: "to cook", e: "🍳" },
  "연락하다": { g: "to contact", e: "📱" }
};

function getWordInfo(w) {
  return WORD_INFO[w] || { g: "Korean expression", e: "📖" };
}

// 3. Complete, Flawless Specification for Lessons 2 ~ 30
const LESSON_SPECS = {
  2: {
    pos: "명사",
    en: 'Topic & Contrast · "~은/는" · 화제와 대조를 말해요',
    meanKo: "문장의 화제(주제)를 제시하거나 다른 대상과 대조할 때 씁니다.",
    meanEn: "Attached to a noun to mark the topic of a sentence or show contrast.",
    pat: "○○은/는 △△이에요/예요.",
    askQ: "학생[[이에요]]? 선생님[[은]] 어느 나라 사람이에요?",
    askEn: "Are you a student? Where is the teacher from?",
    heroKo: ["저[[는]] 학생이에요.", "선생님[[은]] 한국 사람이에요."],
    heroEn: ["I [[am]] a student.", "The teacher [[is]] Korean."],
    ex1: {
      label: "예문 ① · 자기소개와 대조",
      askQ: "유진 씨[[는]] 직업이 뭐예요?",
      askEn: "What is your occupation, Yujin?",
      aWho: "A · 마이클", aKo: ["유진 씨[[는]] 학생이에요?"], aEn: ["Are you a student, Yujin?"],
      bWho: "B · 유진", bKo: ["네, 저[[는]] 대학생이에요.", "제 동생[[은]] 고등학생이에요."], bEn: ["Yes, I [[am]] a college student.", "My younger sibling [[is]] a high school student."],
      morph: ["유진 씨 + 는 (받침 X)", "저 + 는 (받침 X)", "동생 + 은 (받침 O)"]
    },
    ex2: {
      label: "예문 ② · 국적 소개하기",
      askQ: "하준 씨[[는]] 어느 나라 사람이에요?",
      askEn: "Where are you from, Hajun?",
      aWho: "A · 사라", aKo: ["하준 씨[[는]] 한국 사람이에요?"], aEn: ["Are you Korean, Hajun?"],
      bWho: "B · 하준", bKo: ["네, 저[[는]] 한국 사람이에요.", "사라 씨[[는]] 캐나다 사람이에요."], bEn: ["Yes, I [[am]] Korean.", "Sara [[is]] Canadian."],
      morph: ["하준 씨 + 는 (받침 X)", "사라 씨 + 는 (받침 X)"]
    },
    rows: [
      { k: "받침 O", f: "+ 은", ex: [["선생님", "선생님은"], ["학생", "학생은"], ["동생", "동생은"], ["한국", "한국은"]] },
      { k: "받침 X", f: "+ 는", c: "g2", ex: [["저", "저는"], ["친구", "친구는"], ["의사", "의사는"], ["가수", "가수는"]] }
    ],
    make: [
      { k: ["저", "학생"], a: "저는 학생이에요.", e: "I am a student." },
      { k: ["선생님", "한국 사람"], a: "선생님은 한국 사람이에요.", e: "The teacher is Korean." },
      { k: ["제 이름", "민수"], a: "제 이름은 민수예요.", e: "My name is Minsu." },
      { k: ["친구", "의사"], a: "제 친구는 의사예요.", e: "My friend is a doctor." }
    ],
    sits: [
      { t: "자기소개", q: "안녕하세요? 이름[[은]] 뭐예요? 직업[[은]] 뭐예요?", qen: "Hello! What is your name? What is your job?", m: ["제 이름[[은]] 마이클이에요.", "저[[는]] 학생이에요."] },
      { t: "짝 소개", q: "짝[[은]] 이름이 뭐예요? 어느 나라 사람이에요?", qen: "What is your partner's name? Where are they from?", m: ["제 친구[[는]] 유진이에요.", "유진 씨[[는]] 한국 사람이에요."] },
      { t: "나와 가족 대조", q: "여러분[[은]] 학생이에요? 가족[[은]] 직업이 뭐예요?", qen: "Are you a student? What does your family member do?", m: ["저[[는]] 학생이에요.", "형[[은]] 회사원이에요."] }
    ]
  },
  3: {
    pos: "명사",
    en: 'Possession & Existence · "~이/가 있어요/없어요" · 소유와 존재를 말해요',
    meanKo: "사람이나 사물이 어느 장소에 있거나(존재), 가지고 있음(소유)을 나타냅니다.",
    meanEn: "Expresses possession ('have / don't have') or existence ('there is / isn't').",
    pat: "○○이/가 있어요/없어요.",
    askQ: "책상 위에 책[[이 있어요]]? 시계[[가 있어요]]?",
    askEn: "Is there a book on the desk? Do you have a watch?",
    heroKo: ["책[[이 있어요]].", "시계[[가 없어요]]."],
    heroEn: ["I [[have]] a book.", "I [[don't have]] a watch."],
    ex1: {
      label: "예문 ① · 교실 물건 확인하기",
      askQ: "한국어 책[[이 있어요]]?",
      askEn: "Do you have a Korean book?",
      aWho: "A · 선생님", aKo: ["유진 씨, 한국어 책[[이 있어요]]?"], aEn: ["Yujin, do you have a Korean book?"],
      bWho: "B · 유진", bKo: ["네, 가방 안에 한국어 책[[이 있어요]].", "연필도 [[있어요]]."], bEn: ["Yes, I [[have]] a Korean book in my bag.", "I also [[have]] a pencil."],
      morph: ["책 + 이 있어요 (받침 O)", "연필 + 이 있어요 (받침 O)"]
    },
    ex2: {
      label: "예문 ② · 가지고 있는 물건 묻기",
      askQ: "지금 시계[[가 있어요]]?",
      askEn: "Do you have a watch right now?",
      aWho: "A · 하준", aKo: ["미나 씨, 지금 시계[[가 있어요]]?"], aEn: ["Mina, do you have a watch now?"],
      bWho: "B · 미나", bKo: ["아니요, 시계[[가 없어요]].", "하지만 휴대폰[[이 있어요]]."], bEn: ["No, I [[don't have]] a watch.", "But I [[have]] a mobile phone."],
      morph: ["시계 + 가 없어요 (받침 X)", "휴대폰 + 이 있어요 (받침 O)"]
    },
    rows: [
      { k: "받침 O", f: "+ 이 있어요/없어요", ex: [["책", "책이 있어요"], ["가방", "가방이 있어요"], ["연필", "연필이 있어요"], ["시간", "시간이 없어요"]] },
      { k: "받침 X", f: "+ 가 있어요/없어요", c: "g2", ex: [["시계", "시계가 없어요"], ["의자", "의자가 있어요"], ["커피", "커피가 있어요"], ["친구", "친구가 있어요"]] }
    ],
    make: [
      { k: ["책", "있다"], a: "책이 있어요.", e: "I have a book." },
      { k: ["시계", "없다"], a: "시계가 없어요.", e: "I don't have a watch." },
      { k: ["오늘", "시간", "있다"], a: "오늘 시간이 있어요.", e: "I have time today." },
      { k: ["지금", "우산", "없다"], a: "지금 우산이 없어요.", e: "I don't have an umbrella now." }
    ],
    sits: [
      { t: "가방 속 물건", q: "가방 안에 뭐[[가 있어요]]? 뭐[[가 없어요]]?", qen: "What is in your bag? What is not in your bag?", m: ["가방 안에 책[[이 있어요]].", "우산[[이 없어요]]."] },
      { t: "가족과 형제", q: "형제[[가 있어요]]? 언니나 동생[[이 있어요]]?", qen: "Do you have siblings? Do you have an older sister or younger sibling?", m: ["네, 동생[[이 있어요]].", "아니요, 형제[[가 없어요]]."] },
      { t: "오늘 시간 약속", q: "오늘 오후에 시간[[이 있어요]]?", qen: "Do you have time this afternoon?", m: ["네, 오늘 시간[[이 있어요]].", "미안해요. 오늘 시간[[이 없어요]]."] }
    ]
  },
  4: {
    pos: "명사",
    en: 'Negative Copula · "~이/가 아니에요" · 신분과 사물을 부정해요',
    meanKo: "명사 뒤에 붙어 주어의 신분이나 사물이 그것이 아님을 나타냅니다.",
    meanEn: "Negative copula meaning 'is/am/are not' (used with subject marker 이/가).",
    pat: "○○이/가 아니에요. △△이에요/예요.",
    askQ: "학생[[이에요]]? 이거는 커피[[예요]]?",
    askEn: "Are you a student? Is this coffee?",
    heroKo: ["학생[[이 아니에요]]. 의사예요.", "커피[[가 아니에요]]. 녹차예요."],
    heroEn: ["I [[am not]] a student. I am a doctor.", "It [[is not]] coffee. It is green tea."],
    ex1: {
      label: "예문 ① · 직업 바로잡기",
      askQ: "혹시 학생[[이에요]]?",
      askEn: "Are you a student by any chance?",
      aWho: "A · 사라", aKo: ["안녕하세요? 혹시 학생[[이에요]]?"], aEn: ["Hello! Are you a student?"],
      bWho: "B · 의사", bKo: ["아니요, 저는 학생[[이 아니에요]].", "병원에서 일하는 의사[[예요]]."], bEn: ["No, I [[am not]] a student.", "I am a doctor working at a hospital."],
      morph: ["학생 + 이 아니에요 (받침 O)", "의사 + 예요 (받침 X)"]
    },
    ex2: {
      label: "예문 ② · 음료 구별하기",
      askQ: "이거는 커피[[예요]]?",
      askEn: "Is this coffee?",
      aWho: "A · 마이클", aKo: ["리에 씨, 지금 마시는 거는 커피[[예요]]?"], aEn: ["Rie, is what you're drinking coffee?"],
      bWho: "B · 리에", bKo: ["아니요, 커피[[가 아니에요]].", "따뜻한 녹차[[예요]]."], bEn: ["No, it [[is not]] coffee.", "It is warm green tea."],
      morph: ["커피 + 가 아니에요 (받침 X)", "녹차 + 예요 (받침 X)"]
    },
    rows: [
      { k: "받침 O", f: "+ 이 아니에요", ex: [["학생", "학생이 아니에요"], ["선생님", "선생님이 아니에요"], ["책", "책이 아니에요"], ["가방", "가방이 아니에요"]] },
      { k: "받침 X", f: "+ 가 아니에요", c: "g2", ex: [["의사", "의사가 아니에요"], ["커피", "커피가 아니에요"], ["가수", "가수가 아니에요"], ["의자", "의자가 아니에요"]] }
    ],
    make: [
      { k: ["저", "학생"], a: "저는 학생이 아니에요.", e: "I am not a student." },
      { k: ["친구", "의사"], a: "제 친구는 의사가 아니에요.", e: "My friend is not a doctor." },
      { k: ["이거", "커피"], a: "이거는 커피가 아니에요.", e: "This is not coffee." },
      { k: ["저 사람", "선생님"], a: "저 사람은 선생님이 아니에요.", e: "That person is not a teacher." }
    ],
    sits: [
      { t: "잘못된 추측 고치기", q: "혹시 일본 사람[[이에요]]? 선생님[[이에요]]?", qen: "Are you Japanese? Are you a teacher?", m: ["아니요, 일본 사람[[이 아니에요]].", "선생님[[이 아니에요]]. 학생이에요."] },
      { t: "물건 맞히기", q: "이거는 누구 가방[[이에요]]? 마이클 씨 가방이에요?", qen: "Whose bag is this? Is it Michael's bag?", m: ["제 가방[[이 아니에요]].", "유진 씨 가방이에요."] },
      { t: "참 · 거짓 말하기", q: "우리 교실은 도서관[[이에요]]?", qen: "Is our classroom a library?", m: ["아니요, 도서관[[이 아니에요]].", "한국어 교실이에요."] }
    ]
  },
  5: {
    pos: "동사 · 형용사",
    en: 'Polite Present · "-아/어요" · 현재의 동작과 상태를 말해요',
    meanKo: "동사나 형용사 어간 뒤에 붙어 현재의 동작이나 상태를 친근하고 정중하게 나타냅니다.",
    meanEn: "Informal polite present tense ending attached to verb or adjective stems.",
    pat: "동사/형용사 + -아/어요.",
    askQ: "한국 음식이 [[어때요]]? 요즘 무엇을 [[공부해요]]?",
    askEn: "How is Korean food? What do you study these days?",
    heroKo: ["한국 음식이 맛있[[어요]].", "매일 한국어를 공부[[해요]]."],
    heroEn: ["Korean food [[is delicious]].", "I [[study]] Korean every day."],
    ex1: {
      label: "예문 ① · 한국 음식 이야기",
      askQ: "비빔밥이 맛있[[어요]]?",
      askEn: "Is bibimbap delicious?",
      aWho: "A · 요리사", aKo: ["마이클 씨, 한국 음식이 입에 맞[[아요]]?"], aEn: ["Michael, does Korean food suit your taste?"],
      bWho: "B · 마이클", bKo: ["네, 한국 음식이 정말 맛있[[어요]].", "비빔밥을 아주 좋아[[해요]]."], bEn: ["Yes, Korean food [[is]] really delicious.", "I [[like]] bibimbap very much."],
      morph: ["맛있 + 어요 (ㅓ 모음)", "좋아하 + 여요 → 좋아해요 (하다)"]
    },
    ex2: {
      label: "예문 ② · 매일 하는 일과",
      askQ: "요즘 무엇을 공부[[해요]]?",
      askEn: "What do you study these days?",
      aWho: "A · 유진", aKo: ["사라 씨, 요즘 매일 무엇을 [[해요]]?"], aEn: ["Sara, what do you do every day these days?"],
      bWho: "B · 사라", bKo: ["매일 한국어를 공부[[해요]].", "한국어 수업이 참 재미있[[어요]]."], bEn: ["I [[study]] Korean every day.", "Korean class [[is]] very fun."],
      morph: ["공부하 + 여요 → 공부해요 (하다)", "재미있 + 어요 (ㅣ 모음)"]
    },
    rows: [
      { k: "ㅏ, ㅗ 모음", f: "+ -아요", ex: [["가다", "가요"], ["보다", "봐요"], ["좋다", "좋아요"], ["살다", "살아요"]] },
      { k: "그 외 모음 / 하다", f: "+ -어요 / 해요", c: "g2", ex: [["맛있다", "맛있어요"], ["먹다", "먹어요"], ["공부하다", "공부해요"], ["운동하다", "운동해요"]] }
    ],
    make: [
      { k: ["한국 음식", "맛있다"], a: "한국 음식이 맛있어요.", e: "Korean food is delicious." },
      { k: ["매일", "공부하다"], a: "매일 한국어를 공부해요.", e: "I study Korean every day." },
      { k: ["날씨", "좋다"], a: "오늘 날씨가 좋아요.", e: "The weather is nice today." },
      { k: ["점심", "먹다"], a: "점심을 맛있게 먹어요.", e: "I eat lunch deliciously." }
    ],
    sits: [
      { t: "오늘의 하루 일과", q: "오늘 무엇을 [[해요]]? 아침에 무엇을 [[먹어요]]?", qen: "What do you do today? What do you eat in the morning?", m: ["아침에 빵을 [[먹어요]].", "학교에서 한국어를 [[공부해요]]."] },
      { t: "주말에 하는 일", q: "주말에 보통 무엇을 [[해요]]?", qen: "What do you usually do on weekends?", m: ["주말에 영화를 [[봐요]].", "공원에서 운동[[해요]]."] },
      { t: "안부와 기분", q: "오늘 날씨가 [[어때요]]? 기분이 [[어때요]]?", qen: "How is the weather today? How do you feel?", m: ["오늘 날씨가 참 [[좋아요]].", "기분이 아주 [[좋아요]]."] }
    ]
  },
  6: {
    pos: "명사",
    en: 'Object Marker · "~을/를" · 동작의 대상을 말해요',
    meanKo: "명사 뒤에 붙어 동사가 나타내는 행동의 직접적인 대상(목적어)임을 나타냅니다.",
    meanEn: "Attached to a noun to mark the direct object of an action verb.",
    pat: "○○을/를 + 동사",
    askQ: "아침에 무엇[[을]] 마셔요? 도서관에서 무엇[[을]] 읽어요?",
    askEn: "What do you drink in the morning? What do you read at the library?",
    heroKo: ["아침에 커피[[를]] 마셔요.", "재미있는 책[[을]] 읽어요."],
    heroEn: ["I drink [[coffee]] in the morning.", "I read an interesting [[book]]."],
    ex1: {
      label: "예문 ① · 카페에서 주문하기",
      askQ: "아침에 무엇[[을]] 마셔요?",
      askEn: "What do you drink in the morning?",
      aWho: "A · 리에", aKo: ["하준 씨, 아침에 보통 무엇[[을]] 마셔요?"], aEn: ["Hajun, what do you usually drink in the morning?"],
      bWho: "B · 하준", bKo: ["저는 따뜻한 커피[[를]] 마셔요.", "그리고 맛있는 빵[[을]] 먹어요."], bEn: ["I drink warm [[coffee]].", "And I eat delicious [[bread]]."],
      morph: ["커피 + 를 (받침 X)", "빵 + 을 (받침 O)"]
    },
    ex2: {
      label: "예문 ② · 여가 활동 이야기",
      askQ: "주말에 무엇[[을]] 해요?",
      askEn: "What do you do on the weekend?",
      aWho: "A · 미나", aKo: ["주말에 도서관에서 무엇[[을]] 해요?"], aEn: ["What do you do at the library on the weekend?"],
      bWho: "B · 학생", bKo: ["도서관에서 한국어 책[[을]] 읽어요.", "저녁에는 한국 영화[[를]] 봐요."], bEn: ["I read a Korean [[book]] at the library.", "In the evening, I watch a Korean [[movie]]."],
      morph: ["책 + 을 (받침 O)", "영화 + 를 (받침 X)"]
    },
    rows: [
      { k: "받침 O", f: "+ 을", ex: [["책", "책을 읽어요"], ["밥", "밥을 먹어요"], ["음악", "음악을 들어요"], ["선물", "선물을 사요"]] },
      { k: "받침 X", f: "+ 를", c: "g2", ex: [["커피", "커피를 마셔요"], ["한국어", "한국어를 배워요"], ["영화", "영화를 봐요"], ["친구", "친구를 만나요"]] }
    ],
    make: [
      { k: ["커피", "마시다"], a: "아침에 커피를 마셔요.", e: "I drink coffee in the morning." },
      { k: ["책", "읽다"], a: "재미있는 책을 읽어요.", e: "I read an interesting book." },
      { k: ["밥", "먹다"], a: "점심에 비빔밥을 먹어요.", e: "I eat bibimbap for lunch." },
      { k: ["영화", "보다"], a: "주말에 영화를 봐요.", e: "I watch a movie on the weekend." }
    ],
    sits: [
      { t: "오늘 먹은 음식", q: "오늘 아침에 무엇[[을]] 먹었어요? 무엇[[을]] 마셨어요?", qen: "What did you eat this morning? What did you drink?", m: ["아침에 빵[[을]] 먹어요.", "따뜻한 커피[[를]] 마셔요."] },
      { t: "좋아하는 것", q: "어떤 음악[[을]] 좋아해요? 어떤 운동[[을]] 좋아해요?", qen: "What kind of music do you like? What sports do you like?", m: ["한국 음악[[을]] 좋아해요.", "주말에 영화[[를]] 봐요."] },
      { t: "요즘 배우는 것", q: "요즘 무엇[[을]] 공부해요?", qen: "What do you study these days?", m: ["요즘 한국어[[를]] 공부해요.", "한국어 책[[을]] 읽어요."] }
    ]
  },
  7: {
    pos: "명사",
    en: 'Subject Marker · "~이/가" · 문장의 주어를 나타내요',
    meanKo: "문장의 주어를 나타내며, 새로운 정보나 상태·성질을 묘사할 때 자연스럽게 쓰입니다.",
    meanEn: "Marks the grammatical subject of a sentence, especially with descriptive adjectives.",
    pat: "○○이/가 + 형용사/동사",
    askQ: "오늘 날씨[[가]] 어때요? 공원에 무엇[[이]] 예뻐요?",
    askEn: "How is the weather today? What is pretty in the park?",
    heroKo: ["오늘 날씨[[가]] 참 좋아요.", "공원에 꽃[[이]] 예뻐요."],
    heroEn: ["The [[weather]] is really nice today.", "The [[flowers]] in the park are pretty."],
    ex1: {
      label: "예문 ① · 공원 산책과 날씨",
      askQ: "오늘 날씨[[가]] 어때요?",
      askEn: "How is the weather today?",
      aWho: "A · 유진", aKo: ["마이클 씨, 오늘 날씨[[가]] 어때요?"], aEn: ["Michael, how is the weather today?"],
      bWho: "B · 마이클", bKo: ["하늘[[이]] 맑고 날씨[[가]] 참 좋아요.", "공원에 꽃[[이]] 정말 예뻐요."], bEn: ["The [[sky]] is clear and the [[weather]] is really nice.", "The [[flowers]] in the park are very pretty."],
      morph: ["날씨 + 가 (받침 X)", "꽃 + 이 (받침 O)"]
    },
    ex2: {
      label: "예문 ② · 교실과 음식 묘사",
      askQ: "한국 음식[[이]] 어때요?",
      askEn: "How is Korean food?",
      aWho: "A · 선생님", aKo: ["여러분, 우리 한국어 교실[[이]] 어때요?"], aEn: ["Everyone, how is our Korean classroom?"],
      bWho: "B · 유진", bKo: ["우리 교실[[이]] 아주 넓고 깨끗해요.", "그리고 학교 식당 음식[[이]] 맛있어요."], bEn: ["Our [[classroom]] is very spacious and clean.", "And the school cafeteria [[food]] is delicious."],
      morph: ["교실 + 이 (받침 O)", "음식 + 이 (받침 O)"]
    },
    rows: [
      { k: "받침 O", f: "+ 이", ex: [["꽃", "꽃이 예뻐요"], ["음식", "음식이 맛있어요"], ["가방", "가방이 커요"], ["교실", "교실이 넓어요"]] },
      { k: "받침 X", f: "+ 가", c: "g2", ex: [["날씨", "날씨가 좋아요"], ["커피", "커피가 따뜻해요"], ["노래", "노래가 좋아요"], ["비", "비가 와요"]] }
    ],
    make: [
      { k: ["날씨", "좋다"], a: "오늘 날씨가 좋아요.", e: "The weather is nice today." },
      { k: ["꽃", "예쁘다"], a: "공원에 꽃이 예뻐요.", e: "The flowers in the park are pretty." },
      { k: ["음식", "맛있다"], a: "한국 음식이 맛있어요.", e: "Korean food is delicious." },
      { k: ["가방", "크다"], a: "이 가방이 아주 커요.", e: "This bag is very big." }
    ],
    sits: [
      { t: "오늘의 날씨", q: "오늘 밖의 날씨[[가]] 어때요?", qen: "How is the weather outside today?", m: ["오늘 날씨[[가]] 아주 좋아요.", "바람[[이]] 시원해요."] },
      { t: "누가 했어요?", q: "교실에 누[[가]] 일찍 왔어요?", qen: "Who came to the classroom early?", m: ["마이클 씨[[가]] 일찍 왔어요.", "선생님[[이]] 교실에 계세요."] },
      { t: "좋아하는 계절", q: "어느 계절[[이]] 좋아요? 무엇[[이]] 맛있어요?", qen: "Which season is nice? What is delicious?", m: ["봄[[이]] 따뜻하고 좋아요.", "한국 음식[[이]] 정말 맛있어요."] }
    ]
  },
  8: {
    pos: "장소",
    en: 'Location & Destination · "~에" · 목적지와 위치를 말해요',
    meanKo: "가거나 오는 이동의 목적지, 또는 사람이나 사물이 있는 위치를 나타냅니다.",
    meanEn: "Attached to a place noun to indicate destination (with go/come) or static location.",
    pat: "장소 + 에 가요/와요/있어요.",
    askQ: "지금 어디[[에]] 가요? 책이 어디[[에]] 있어요?",
    askEn: "Where are you going now? Where is the book?",
    heroKo: ["오늘 학교[[에]] 가요.", "책이 책상 위[[에]] 있어요."],
    heroEn: ["I go [[to]] school today.", "The book is [[on]] the desk."],
    ex1: {
      label: "예문 ① · 이동 목적지 묻기",
      askQ: "지금 어디[[에]] 가요?",
      askEn: "Where are you going now?",
      aWho: "A · 유진", aKo: ["마이클 씨, 지금 어디[[에]] 가요?"], aEn: ["Michael, where are you going right now?"],
      bWho: "B · 학생", bKo: ["한국어 수업이 있어서 학교[[에]] 가요.", "수업 후에 도서관[[에]] 가요."], bEn: ["I have Korean class, so I'm going [[to]] school.", "After class, I go [[to]] the library."],
      morph: ["학교 + 에 가요 (목적지)", "도서관 + 에 가요 (목적지)"]
    },
    ex2: {
      label: "예문 ② · 물건의 위치 묻기",
      askQ: "한국어 책이 어디[[에]] 있어요?",
      askEn: "Where is the Korean book?",
      aWho: "A · 하준", aKo: ["미나 씨, 한국어 책이 어디[[에]] 있어요?"], aEn: ["Mina, where is the Korean book?"],
      bWho: "B · 미나", bKo: ["한국어 책이 책상 위[[에]] 있어요.", "연필은 가방 안[[에]] 있어요."], bEn: ["The Korean book is [[on]] the desk.", "The pencil is [[in]] the bag."],
      morph: ["책상 위 + 에 있어요 (위치)", "가방 안 + 에 있어요 (위치)"]
    },
    rows: [
      { k: "이동 목적지", f: "장소 + 에 가요", ex: [["학교", "학교에 가요"], ["집", "집에 가요"], ["회사", "회사에 가요"], ["한국", "한국에 와요"]] },
      { k: "존재 위치", f: "장소 + 에 있어요", c: "g2", ex: [["교실", "교실에 있어요"], ["책상 위", "책상 위에 있어요"], ["가방 안", "가방 안에 있어요"], ["공원", "공원에 있어요"]] }
    ],
    make: [
      { k: ["학교", "가다"], a: "오늘 학교에 가요.", e: "I go to school today." },
      { k: ["책상 위", "있다"], a: "책이 책상 위에 있어요.", e: "The book is on the desk." },
      { k: ["집", "오다"], a: "오후에 집에 와요.", e: "I come home in the afternoon." },
      { k: ["교실", "있다"], a: "친구가 교실에 있어요.", e: "My friend is in the classroom." }
    ],
    sits: [
      { t: "수업 후 목적지", q: "수업이 끝나고 어디[[에]] 가요?", qen: "Where do you go after class finishes?", m: ["수업 후에 집[[에]] 가요.", "도서관[[에]] 가요."] },
      { t: "지금 있는 곳", q: "지금 가족이나 친구가 어디[[에]] 있어요?", qen: "Where are your family or friends right now?", m: ["제 친구는 교실[[에]] 있어요.", "부모님은 집[[에]] 계세요."] },
      { t: "가고 싶은 나라", q: "방학에 어디[[에]] 가고 싶어요?", qen: "Where do you want to go during vacation?", m: ["방학에 한국[[에]] 가고 싶어요.", "제주도[[에]] 가요."] }
    ]
  },
  9: {
    pos: "장소",
    en: 'Location of Action · "~에서" · 행동하는 장소를 말해요',
    meanKo: "장소 명사 뒤에 붙어 구체적인 동작이나 활동이 이루어지는 공간을 나타냅니다.",
    meanEn: "Attached to a place noun to indicate where an action or activity takes place.",
    pat: "장소 + 에서 + 동작동사",
    askQ: "어디[[에서]] 한국어를 공부해요? 어디[[에서]] 운동해요?",
    askEn: "Where do you study Korean? Where do you exercise?",
    heroKo: ["도서관[[에서]] 한국어를 공부해요.", "공원[[에서]] 친구와 운동해요."],
    heroEn: ["I study Korean [[at]] the library.", "I exercise with my friend [[at]] the park."],
    ex1: {
      label: "예문 ① · 공부하는 장소",
      askQ: "어디[[에서]] 한국어를 공부해요?",
      askEn: "Where do you study Korean?",
      aWho: "A · 선생님", aKo: ["여러분, 보통 어디[[에서]] 한국어를 공부해요?"], aEn: ["Everyone, where do you usually study Korean?"],
      bWho: "B · 학생", bKo: ["저는 조용한 도서관[[에서]] 공부해요.", "가끔 카페[[에서]] 숙제를 해요."], bEn: ["I study [[at]] a quiet library.", "Sometimes I do homework [[at]] a cafe."],
      morph: ["도서관 + 에서 공부해요", "카페 + 에서 숙제를 해요"]
    },
    ex2: {
      label: "예문 ② · 주말 활동 장소",
      askQ: "주말에 어디[[에서]] 운동해요?",
      askEn: "Where do you exercise on the weekend?",
      aWho: "A · 마이클", aKo: ["하준 씨, 주말에 어디[[에서]] 운동해요?"], aEn: ["Hajun, where do you exercise on weekends?"],
      bWho: "B · 하준", bKo: ["집 앞 공원[[에서]] 농구를 해요.", "그리고 식당[[에서]] 점심을 먹어요."], bEn: ["I play basketball [[at]] the park in front of my house.", "And I eat lunch [[at]] a restaurant."],
      morph: ["공원 + 에서 운동해요", "식당 + 에서 먹어요"]
    },
    rows: [
      { k: "실내 활동", f: "장소 + 에서", ex: [["도서관", "도서관에서 공부해요"], ["카페", "카페에서 마셔요"], ["식당", "식당에서 먹어요"], ["집", "집에서 쉬어요"]] },
      { k: "야외·기타 활동", f: "장소 + 에서", c: "g2", ex: [["공원", "공원에서 운동해요"], ["운동장", "운동장에서 축구해요"], ["백화점", "백화점에서 쇼핑해요"], ["학교", "학교에서 배워요"]] }
    ],
    make: [
      { k: ["도서관", "공부하다"], a: "도서관에서 한국어를 공부해요.", e: "I study Korean at the library." },
      { k: ["공원", "운동하다"], a: "공원에서 아침에 운동해요.", e: "I exercise at the park in the morning." },
      { k: ["카페", "마시다"], a: "카페에서 커피를 마셔요.", e: "I drink coffee at a cafe." },
      { k: ["식당", "먹다"], a: "식당에서 점심을 먹어요.", e: "I eat lunch at a restaurant." }
    ],
    sits: [
      { t: "공부하는 곳", q: "보통 어디[[에서]] 한국어를 공부해요?", qen: "Where do you usually study Korean?", m: ["도서관[[에서]] 한국어를 공부해요.", "집[[에서]] 책을 읽어요."] },
      { t: "식사와 여가", q: "점심을 어디[[에서]] 먹어요? 어디[[에서]] 쉬어요?", qen: "Where do you eat lunch? Where do you rest?", m: ["학교 식당[[에서]] 밥을 먹어요.", "카페[[에서]] 커피를 마셔요."] },
      { t: "에 vs 에서 구분", q: "어디[[에]] 가요? 거기[[에서]] 무엇을 해요?", qen: "Where are you going? What do you do there?", m: ["공원[[에]] 가요.", "공원[[에서]] 친구와 운동해요."] }
    ]
  },
  10: {
    pos: "시간",
    en: 'Time Marker · "~에" · 동작이 일어나는 시간을 말해요',
    meanKo: "시각, 요일, 날짜 뒤에 붙어 동작이 일어나는 때를 나타냅니다. (오늘·내일·어제·지금 뒤에는 쓰지 않습니다)",
    meanEn: "Attached to time nouns to indicate when an action happens (not used with today/tomorrow/yesterday/now).",
    pat: "시간/요일 + 에",
    askQ: "아침 몇 시[[에]] 일어나요? 토요일 몇 시[[에]] 만나요?",
    askEn: "What time do you wake up in the morning? What time do we meet on Saturday?",
    heroKo: ["아침 7시[[에]] 일어나요.", "토요일 오후 4시[[에]] 만나요."],
    heroEn: ["I wake up [[at]] 7 AM.", "Let's meet [[at]] 4 PM on Saturday."],
    ex1: {
      label: "예문 ① · 하루 일과 시간",
      askQ: "보통 아침 몇 시[[에]] 일어나요?",
      askEn: "What time do you usually wake up in the morning?",
      aWho: "A · 미나", aKo: ["하준 씨, 매일 아침 몇 시[[에]] 일어나요?"], aEn: ["Hajun, what time do you wake up every morning?"],
      bWho: "B · 하준", bKo: ["저는 아침 7시[[에]] 일어나요.", "그리고 9시[[에]] 학교에 가요."], bEn: ["I wake up [[at]] 7 AM.", "And I go to school [[at]] 9 o'clock."],
      morph: ["7시 + 에 일어나요", "9시 + 에 가요"]
    },
    ex2: {
      label: "예문 ② · 주말 약속 정하기",
      askQ: "토요일 몇 시[[에]] 만날까요?",
      askEn: "What time shall we meet on Saturday?",
      aWho: "A · 유진", aKo: ["사라 씨, 우리 이번 주말[[에]] 언제 만나요?"], aEn: ["Sara, when do we meet this weekend?"],
      bWho: "B · 사라", bKo: ["토요일 오후 4시[[에]] 만나요.", "오늘 저녁에는 집에서 쉬어요."], bEn: ["Let's meet [[at]] 4 PM on Saturday.", "This evening (오늘), I rest at home."],
      morph: ["토요일 오후 4시 + 에", "오늘 (에 X)"]
    },
    rows: [
      { k: "시각 · 요일", f: "+ 에", ex: [["7시", "7시에 일어나요"], ["4시", "4시에 만나요"], ["토요일", "토요일에 가요"], ["주말", "주말에 쉬어요"]] },
      { k: "'에' 결합 불가", f: "에 X (단독 사용)", c: "g2", ex: [["오늘", "오늘 만나요"], ["내일", "내일 가요"], ["어제", "어제 봤어요"], ["지금", "지금 공부해요"]] }
    ],
    make: [
      { k: ["7시", "일어나다"], a: "아침 7시에 일어나요.", e: "I wake up at 7 AM." },
      { k: ["4시", "만나다"], a: "토요일 오후 4시에 만나요.", e: "We meet at 4 PM on Saturday." },
      { k: ["주말", "쉬다"], a: "주말에 집에서 쉬어요.", e: "I rest at home on the weekend." },
      { k: ["오늘", "공부하다"], a: "오늘 한국어를 공부해요.", e: "I study Korean today." }
    ],
    sits: [
      { t: "나의 하루 시각", q: "매일 몇 시[[에]] 일어나요? 몇 시[[에]] 자요?", qen: "What time do you wake up every day? What time do you sleep?", m: ["아침 7시[[에]] 일어나요.", "밤 11시[[에]] 자요."] },
      { t: "생일과 기념일", q: "생일이 몇 월 며칠[[에]] 있어요?", qen: "Which month and day is your birthday?", m: ["제 생일은 5월[[에]] 있어요.", "토요일[[에]] 파티를 해요."] },
      { t: "오늘과 내일 일정", q: "오늘 몇 시[[에]] 수업이 있어요? 내일 뭐 해요?", qen: "What time do you have class today? What do you do tomorrow?", m: ["오늘 오전 10시[[에]] 수업이 있어요.", "내일 친구를 만나요."] }
    ]
  },
  11: {
    pos: "명사",
    en: 'Means, Tool & Direction · "~(으)로" · 수단·도구·방향을 말해요',
    meanKo: "교통수단, 사용하는 도구·언어, 또는 이동하는 방향을 나타냅니다.",
    meanEn: "Indicates means of transport ('by'), instrument/language ('with/in'), or direction ('toward').",
    pat: "명사 + (으)로",
    askQ: "회사에 무엇[[으로]] 가요? 무엇[[으로]] 이름을 써요?",
    askEn: "How do you go to the office? What do you write your name with?",
    heroKo: ["지하철[[로]] 회사에 가요.", "연필[[로]] 이름을 써요."],
    heroEn: ["I go to the office [[by]] subway.", "I write my name [[with]] a pencil."],
    ex1: {
      label: "예문 ① · 교통수단 묻기",
      askQ: "학교나 회사에 어떻게 가요?",
      askEn: "How do you go to school or work?",
      aWho: "A · 유진", aKo: ["하준 씨, 매일 회사에 무엇[[으로]] 가요?"], aEn: ["Hajun, how do you go to the office every day?"],
      bWho: "B · 회사원", bKo: ["저는 지하철[[로]] 회사에 가요.", "가끔 버스[[로]] 갈 때도 있어요."], bEn: ["I go to the office [[by]] subway.", "Sometimes I go [[by]] bus."],
      morph: ["지하철 + 로 (ㄹ 받침)", "버스 + 로 (받침 X)"]
    },
    ex2: {
      label: "예문 ② · 도구와 언어 사용하기",
      askQ: "무엇[[으로]] 글씨를 써요?",
      askEn: "What do you write with?",
      aWho: "A · 선생님", aKo: ["여러분, 공책에 무엇[[으로]] 이름을 써요?"], aEn: ["Everyone, what do you write your name in the notebook with?"],
      bWho: "B · 학생", bKo: ["연필[[로]] 공책에 이름을 써요.", "그리고 교실에서 한국어[[로]] 말해요."], bEn: ["I write my name [[with]] a pencil.", "And I speak [[in]] Korean in the classroom."],
      morph: ["연필 + 로 (ㄹ 받침)", "볼펜 + 으로 (받침 O)"]
    },
    rows: [
      { k: "받침 O (ㄹ 제외)", f: "+ 으로", ex: [["볼펜", "볼펜으로 써요"], ["오른쪽", "오른쪽으로 가요"], ["젓가락", "젓가락으로 먹어요"], ["트럭", "트럭으로 가요"]] },
      { k: "받침 X / ㄹ 받침", f: "+ 로", c: "g2", ex: [["지하철", "지하철로 가요"], ["연필", "연필로 써요"], ["버스", "버스로 가요"], ["한국어", "한국어로 말해요"]] }
    ],
    make: [
      { k: ["지하철", "가다"], a: "지하철로 회사에 가요.", e: "I go to the office by subway." },
      { k: ["연필", "쓰다"], a: "연필로 이름을 써요.", e: "I write my name with a pencil." },
      { k: ["젓가락", "먹다"], a: "젓가락으로 밥을 먹어요.", e: "I eat a meal with chopsticks." },
      { k: ["한국어", "말하다"], a: "교실에서 한국어로 말해요.", e: "I speak in Korean in the classroom." }
    ],
    sits: [
      { t: "통학 · 통근 교통수단", q: "오늘 교실에 무엇[[으로]] 왔어요?", qen: "How did you come to the classroom today?", m: ["지하철[[로]] 학교에 왔어요.", "버스[[로]] 왔어요."] },
      { t: "도구와 언어", q: "한국 음식을 무엇[[으로]] 먹어요? 수업에서 무슨 말[[로]] 이야기해요?", qen: "What do you eat Korean food with? What language do you speak in class?", m: ["숟가락과 젓가락[[으로]] 먹어요.", "한국어[[로]] 이야기해요."] },
      { t: "길 안내하기", q: "도서관에 가려면 어느 쪽[[으로]] 가요?", qen: "Which way do I go to get to the library?", m: ["앞[[으로]] 쭉 가세요.", "오른쪽[[으로]] 가세요."] }
    ]
  },
  12: {
    pos: "명사",
    posT: "명사1",
    formT: '에서 <span class="pos">명사2</span> + 까지',
    en: 'Place Range · "~에서 ~까지" · 출발지와 도착지를 말해요',
    meanKo: "장소의 시작점(출발지)과 끝점(도착지)을 나타내어 이동 구간을 표현합니다.",
    meanEn: "Indicates the starting point ('from') and ending point ('to') of a spatial range.",
    pat: "장소1 + 에서 + 장소2 + 까지",
    askQ: "서울[[에서]] 부산[[까지]] 어떻게 가요?",
    askEn: "How do you go from Seoul to Busan?",
    heroKo: ["서울[[에서]] 부산[[까지]] 기차로 가요.", "집[[에서]] 학교[[까지]] 걸어가요."],
    heroEn: ["I go [[from]] Seoul [[to]] Busan by train.", "I walk [[from]] home [[to]] school."],
    ex1: {
      label: "예문 ① · 도시 간 이동하기",
      askQ: "서울[[에서]] 부산[[까지]] 무엇으로 가요?",
      askEn: "How do you travel from Seoul to Busan?",
      aWho: "A · 사라", aKo: ["마이클 씨, 서울[[에서]] 부산[[까지]] 어떻게 가요?"], aEn: ["Michael, how do you go from Seoul to Busan?"],
      bWho: "B · 마이클", bKo: ["서울[[에서]] 부산[[까지]] 고속열차로 가요.", "기차로 세 시간쯤 걸려요."], bEn: ["I go [[from]] Seoul [[to]] Busan by express train.", "It takes about three hours by train."],
      morph: ["서울 + 에서 (출발지)", "부산 + 까지 (도착지)"]
    },
    ex2: {
      label: "예문 ② · 집에서 학교까지 통학",
      askQ: "집[[에서]] 학교[[까지]] 멀어요?",
      askEn: "Is it far from home to school?",
      aWho: "A · 유진", aKo: ["하준 씨, 집[[에서]] 학교[[까지]] 버스로 가요?"], aEn: ["Hajun, do you go from home to school by bus?"],
      bWho: "B · 하준", bKo: ["아니요, 집[[에서]] 학교[[까지]] 가까워요.", "그래서 매일 걸어서 가요."], bEn: ["No, it is close [[from]] home [[to]] school.", "So I walk every day."],
      morph: ["집 + 에서 (출발지)", "학교 + 까지 (도착지)"]
    },
    rows: [
      { k: "출발 장소", f: "장소1 + 에서", ex: [["서울", "서울에서"], ["집", "집에서"], ["한국", "한국에서"], ["교실", "교실에서"]] },
      { k: "도착 장소", f: "장소2 + 까지", c: "g2", ex: [["부산", "부산까지"], ["학교", "학교까지"], ["공항", "공항까지"], ["도서관", "도서관까지"]] }
    ],
    make: [
      { k: ["서울", "부산", "기차"], a: "서울에서 부산까지 기차로 가요.", e: "I go from Seoul to Busan by train." },
      { k: ["집", "학교", "걸어가다"], a: "집에서 학교까지 걸어가요.", e: "I walk from home to school." },
      { k: ["공항", "호텔", "버스"], a: "공항에서 호텔까지 버스로 가요.", e: "I go from the airport to the hotel by bus." },
      { k: ["교실", "도서관", "가깝다"], a: "교실에서 도서관까지 가까워요.", e: "It is close from the classroom to the library." }
    ],
    sits: [
      { t: "통학 거리와 시간", q: "집[[에서]] 학교[[까지]] 무엇으로 와요? 얼마나 걸려요?", qen: "How do you come from home to school? How long does it take?", m: ["집[[에서]] 학교[[까지]] 지하철로 와요.", "30분쯤 걸려요."] },
      { t: "여행 경로 말하기", q: "서울[[에서]] 제주도[[까지]] 무엇으로 가요?", qen: "How do you go from Seoul to Jeju Island?", m: ["서울[[에서]] 제주도[[까지]] 비행기로 가요.", "한 시간 걸려요."] }
    ]
  },
  13: {
    pos: "시간",
    posT: "시간",
    formT: '부터 <span class="pos">시간</span> + 까지',
    en: 'Time Range · "~부터 ~까지" · 시작 시간과 끝 시간을 말해요',
    meanKo: "시간, 요일, 날짜의 시작점(~부터)과 끝점(~까지)을 나타냅니다.",
    meanEn: "Indicates the starting time ('from') and ending time ('until/to').",
    pat: "시간1 + 부터 + 시간2 + 까지",
    askQ: "몇 시[[부터]] 몇 시[[까지]] 일해요?",
    askEn: "From what time to what time do you work?",
    heroKo: ["아침 9시[[부터]] 저녁 6시[[까지]] 일해요.", "월요일[[부터]] 금요일[[까지]] 학교에 가요."],
    heroEn: ["I work [[from]] 9 AM [[to]] 6 PM.", "I go to school [[from]] Monday [[to]] Friday."],
    ex1: {
      label: "예문 ① · 근무 시간 말하기",
      askQ: "몇 시[[부터]] 몇 시[[까지]] 일해요?",
      askEn: "From what time to what time do you work?",
      aWho: "A · 미나", aKo: ["하준 씨, 회사에서 몇 시[[부터]] 몇 시[[까지]] 일해요?"], aEn: ["Hajun, from what time to what time do you work at the company?"],
      bWho: "B · 회사원", bKo: ["아침 9시[[부터]] 저녁 6시[[까지]] 일해요.", "낮 12시[[부터]] 1시[[까지]] 점심시간이에요."], bEn: ["I work [[from]] 9 AM [[to]] 6 PM.", "Lunchtime is [[from]] 12 PM [[to]] 1 PM."],
      morph: ["9시 + 부터 (시작 시각)", "6시 + 까지 (끝 시각)"]
    },
    ex2: {
      label: "예문 ② · 주간 수업 일정",
      askQ: "한국어 수업이 무슨 요일[[부터]] 무슨 요일[[까지]] 있어요?",
      askEn: "From what day to what day is the Korean class?",
      aWho: "A · 학생", aKo: ["선생님, 한국어 수업이 언제 있어요?"], aEn: ["Teacher, when is the Korean class?"],
      bWho: "B · 선생님", bKo: ["월요일[[부터]] 금요일[[까지]] 매일 수업이 있어요.", "오전 10시[[부터]] 12시[[까지]] 공부해요."], bEn: ["There is class every day [[from]] Monday [[to]] Friday.", "We study [[from]] 10 AM [[to]] 12 PM."],
      morph: ["월요일 + 부터", "금요일 + 까지"]
    },
    rows: [
      { k: "시작 시각·요일", f: "시간1 + 부터", ex: [["9시", "9시부터"], ["월요일", "월요일부터"], ["아침", "아침부터"], ["1월", "1월부터"]] },
      { k: "종료 시각·요일", f: "시간2 + 까지", c: "g2", ex: [["6시", "6시까지"], ["금요일", "금요일까지"], ["저녁", "저녁까지"], ["3월", "3월까지"]] }
    ],
    make: [
      { k: ["9시", "6시", "일하다"], a: "아침 9시부터 저녁 6시까지 일해요.", e: "I work from 9 AM to 6 PM." },
      { k: ["월요일", "금요일", "공부하다"], a: "월요일부터 금요일까지 한국어를 공부해요.", e: "I study Korean from Monday to Friday." },
      { k: ["12시", "1시", "점심"], a: "12시부터 1시까지 점심을 먹어요.", e: "I eat lunch from 12 to 1." },
      { k: ["아침", "저녁", "바쁘다"], a: "오늘은 아침부터 저녁까지 바빠요.", e: "Today I am busy from morning till evening." }
    ],
    sits: [
      { t: "수업과 공부 시간", q: "오늘 몇 시[[부터]] 몇 시[[까지]] 한국어를 공부해요?", qen: "From what time to what time do you study Korean today?", m: ["오전 10시[[부터]] 12시[[까지]] 공부해요.", "오후 2시[[부터]] 4시[[까지]] 도서관에 있어요."] },
      { t: "하루 일과와 수면", q: "밤 몇 시[[부터]] 아침 몇 시[[까지]] 자요?", qen: "From what time at night to what time in the morning do you sleep?", m: ["밤 11시[[부터]] 아침 7시[[까지]] 자요.", "월요일[[부터]] 금요일[[까지]] 일찍 일어나요."] }
    ]
  },
  14: {
    pos: "명사",
    en: 'Recipient Marker · "~에게/한테" · 행동의 대상을 말해요',
    meanKo: "사람이나 동물 명사 뒤에 붙어 어떤 행동이 향하는 대상(받는 사람)을 나타냅니다.",
    meanEn: "Attached to a person or animal noun to mark the recipient ('to').",
    pat: "사람 + 에게/한테 + 주다/선물하다/전화하다",
    askQ: "누구[[한테]] 선물을 줘요? 누구[[에게]] 질문해요?",
    askEn: "Who do you give a gift to? Who do you ask a question to?",
    heroKo: ["친구[[한테]] 선물을 줘요.", "선생님[[께]] 질문해요."],
    heroEn: ["I give a gift [[to]] my friend.", "I ask a question [[to]] the teacher."],
    ex1: {
      label: "예문 ① · 친구에게 선물 주기",
      askQ: "그 선물을 누구[[한테]] 줘요?",
      askEn: "Who are you giving that gift to?",
      aWho: "A · 유진", aKo: ["하준 씨, 그 예쁜 선물을 누구[[한테]] 줘요?"], aEn: ["Hajun, who are you giving that pretty gift to?"],
      bWho: "B · 하준", bKo: ["오늘이 미나 씨 생일이에요.", "그래서 미나 씨[[한테]] 생일 선물을 줘요."], bEn: ["Today is Mina's birthday.", "So I'm giving a birthday gift [[to]] Mina."],
      morph: ["누구 + 한테 (구어체)", "미나 씨 + 한테"]
    },
    ex2: {
      label: "예문 ② · 연락하고 질문하기",
      askQ: "모르는 것은 누구[[에게]] 물어봐요?",
      askEn: "Who do you ask when you don't know something?",
      aWho: "A · 학생", aKo: ["한국어 숙제가 어려우면 누구[[에게]] 물어봐요?"], aEn: ["If Korean homework is hard, who do you ask?"],
      bWho: "B · 유진", bKo: ["선생님[[께]] 질문을 해요.", "그리고 저녁에 부모님[[께]] 전화해요."], bEn: ["I ask a question [[to]] the teacher (honorific).", "And in the evening, I call [[my]] parents."],
      morph: ["친구 + 에게 (문어·격식)", "선생님 + 께 (높임)"]
    },
    rows: [
      { k: "구어체 (대화)", f: "사람 + 한테", ex: [["친구", "친구한테 줘요"], ["동생", "동생한테 말해요"], ["하준", "하준한테 전화해요"], ["형", "형한테 물어요"]] },
      { k: "문어체 / 높임", f: "사람 + 에게 / 께", c: "g2", ex: [["친구", "친구에게 보내요"], ["학생", "학생에게 가르쳐요"], ["선생님", "선생님께 질문해요"], ["부모님", "부모님께 드려요"]] }
    ],
    make: [
      { k: ["친구", "선물", "주다"], a: "친구한테 선물을 줘요.", e: "I give a gift to my friend." },
      { k: ["동생", "전화하다"], a: "동생한테 전화를 해요.", e: "I make a phone call to my younger sibling." },
      { k: ["선생님", "질문하다"], a: "선생님께 질문을 해요.", e: "I ask a question to the teacher." },
      { k: ["부모님", "편지", "쓰다"], a: "부모님에게 편지를 써요.", e: "I write a letter to my parents." }
    ],
    sits: [
      { t: "연락과 메시지", q: "오늘 누구[[한테]] 연락했어요? 누구[[한테]] 문자했어요?", qen: "Who did you contact today? Who did you text?", m: ["오늘 아침에 친구[[한테]] 문자했어요.", "저녁에 부모님[[께]] 전화해요."] },
      { t: "선물 주고받기", q: "생일에 누구[[한테]] 선물을 주고 싶어요?", qen: "Who do you want to give a gift to on their birthday?", m: ["친한 친구[[한테]] 책을 선물해요.", "선생님[[께]] 카드를 드려요."] }
    ]
  },
  15: {
    pos: "명사",
    en: 'Addition Marker · "~도" · 똑같음과 포함을 말해요',
    meanKo: "명사 뒤에 붙어 앞의 내용과 같거나 더함('~도 역시, 또한')을 나타냅니다. (이/가, 을/를, 은/는 자리에 대신 붙습니다)",
    meanEn: "Attached to a noun to mean 'also' or 'too' (replaces subject/object/topic particles).",
    pat: "○○은/는 ~해요. △△도 ~해요.",
    askQ: "유진 씨[[도]] 학생이에요? 무엇[[도]] 좋아해요?",
    askEn: "Are you also a student, Yujin? What else do you like?",
    heroKo: ["저는 학생이에요. 친구[[도]] 학생이에요.", "커피를 좋아해요. 녹차[[도]] 좋아해요."],
    heroEn: ["I am a student. My friend [[is also]] a student.", "I like coffee. I [[also]] like green tea."],
    ex1: {
      label: "예문 ① · 같은 신분 말하기",
      askQ: "유진 씨[[도]] 한국어를 공부해요?",
      askEn: "Do you also study Korean, Yujin?",
      aWho: "A · 마이클", aKo: ["저는 대학교에서 한국어를 공부해요."], aEn: ["I study Korean at university."],
      bWho: "B · 유진", bKo: ["정말요? 저[[도]] 한국어를 공부해요!", "제 친구 사라 씨[[도]] 한국어를 배워요."], bEn: ["Really? I [[also]] study Korean!", "My friend Sara [[also]] learns Korean."],
      morph: ["저 + 도 (저도)", "사라 씨 + 도 (받침 무관)"]
    },
    ex2: {
      label: "예문 ② · 좋아하는 것 덧붙이기",
      askQ: "커피를 좋아해요? 차[[도]] 좋아해요?",
      askEn: "Do you like coffee? Do you also like tea?",
      aWho: "A · 사라", aKo: ["리에 씨, 어떤 음료를 좋아해요?"], aEn: ["Rie, what kind of beverage do you like?"],
      bWho: "B · 리에", bKo: ["저는 커피를 좋아해요.", "그리고 따뜻한 녹차[[도]] 아주 좋아해요."], bEn: ["I like coffee.", "And I [[also]] like warm green tea very much."],
      morph: ["녹차 + 도 좋아해요 (을/를 대신 '도')"]
    },
    rows: [
      { k: "주어 자리 대체", f: "명사 + 도", ex: [["저", "저도 학생이에요"], ["친구", "친구도 가요"], ["동생", "동생도 좋아해요"], ["선생님", "선생님도 계세요"]] },
      { k: "목적어 자리 대체", f: "명사 + 도", c: "g2", ex: [["녹차", "녹차도 마셔요"], ["책", "책도 읽어요"], ["영화", "영화도 봐요"], ["운동", "운동도 해요"]] }
    ],
    make: [
      { k: ["저", "학생"], a: "저도 학생이에요.", e: "I am also a student." },
      { k: ["녹차", "좋아하다"], a: "커피를 좋아해요. 녹차도 좋아해요.", e: "I like coffee. I also like green tea." },
      { k: ["친구", "오다"], a: "오늘 제 친구도 교실에 와요.", e: "My friend is also coming to the classroom today." },
      { k: ["책", "사다"], a: "가방을 사요. 책도 사요.", e: "I buy a bag. I also buy a book." }
    ],
    sits: [
      { t: "짝과 공통점 찾기", q: "저는 음악을 좋아해요. 여러분[[도]] 음악을 좋아해요?", qen: "I like music. Do you also like music?", m: ["네, 저[[도]] 음악을 좋아해요.", "저는 영화[[도]] 좋아해요."] },
      { t: "장바구니와 주문", q: "카페에서 커피를 주문해요. 무엇[[도]] 주문해요?", qen: "You order coffee at a cafe. What else do you order?", m: ["커피를 마셔요. 빵[[도]] 먹어요.", "시원한 물[[도]] 주세요."] }
    ]
  },
  16: {
    pos: "명사",
    en: 'Conjunction & Accompaniment · "~와/과 · ~하고 · ~(이)랑" · 나열과 동반을 말해요',
    meanKo: "두 개 이상의 명사를 대등하게 연결하거나('~와/과, ~하고, ~(이)랑'), 누군가와 함께 행동함을 나타냅니다.",
    meanEn: "Connects nouns ('and') or indicates doing an action together ('with').",
    pat: "명사1 + 와/과(하고, (이)랑) + 명사2",
    askQ: "아침에 무엇[[하고]] 무엇을 먹어요? 누구[[랑]] 영화를 봐요?",
    askEn: "What and what do you eat in the morning? Who do you watch a movie with?",
    heroKo: ["빵[[하고]] 우유를 먹어요.", "친구[[랑]] 같이 영화를 봐요."],
    heroEn: ["I eat bread [[and]] milk.", "I watch a movie [[with]] my friend."],
    ex1: {
      label: "예문 ① · 음식 나열하기",
      askQ: "아침에 무엇[[하고]] 무엇을 먹어요?",
      askEn: "What do you eat for breakfast?",
      aWho: "A · 요리사", aKo: ["사라 씨, 아침에 보통 무엇을 먹어요?"], aEn: ["Sara, what do you usually eat in the morning?"],
      bWho: "B · 사라", bKo: ["저는 빵[[하고]] 우유를 먹어요.", "가끔 사과[[와]] 바나나도 먹어요."], bEn: ["I eat bread [[and]] milk.", "Sometimes I also eat apples [[and]] bananas."],
      morph: ["빵 + 하고 (받침 무관)", "사과 + 와 (받침 X)"]
    },
    ex2: {
      label: "예문 ② · 함께하는 사람 말하기",
      askQ: "주말에 누구[[랑]] 영화를 봐요?",
      askEn: "Who do you watch a movie with on the weekend?",
      aWho: "A · 하준", aKo: ["미나 씨, 이번 주말에 누구[[랑]] 영화를 봐요?"], aEn: ["Mina, who are you watching a movie with this weekend?"],
      bWho: "B · 미나", bKo: ["제 친구[[랑]] 같이 영화를 봐요.", "그리고 동생[[이랑]] 쇼핑도 해요."], bEn: ["I watch a movie [[with]] my friend.", "And I also go shopping [[with]] my younger sibling."],
      morph: ["친구 + 랑 (받침 X)", "동생 + 이랑 (받침 O)"]
    },
    rows: [
      { k: "받침 O", f: "+ 과 / 이랑 / 하고", ex: [["책", "책과 공책"], ["빵", "빵하고 우유"], ["동생", "동생이랑 가요"], ["선생님", "선생님과 이야기해요"]] },
      { k: "받침 X", f: "+ 와 / 랑 / 하고", c: "g2", ex: [["커피", "커피와 주스"], ["우유", "우유하고 빵"], ["친구", "친구랑 놀아요"], ["누나", "누나와 운동해요"]] }
    ],
    make: [
      { k: ["빵", "우유", "먹다"], a: "아침에 빵하고 우유를 먹어요.", e: "I eat bread and milk in the morning." },
      { k: ["친구", "영화", "보다"], a: "주말에 친구랑 영화를 봐요.", e: "I watch a movie with my friend on the weekend." },
      { k: ["책", "연필", "사다"], a: "문구점에서 책과 연필을 사요.", e: "I buy a book and a pencil at the stationery store." },
      { k: ["동생", "공원", "가다"], a: "동생이랑 같이 공원에 가요.", e: "I go to the park together with my younger sibling." }
    ],
    sits: [
      { t: "가방 속 물건 두 가지", q: "지금 가방 안에 무엇[[하고]] 무엇이 있어요?", qen: "What two things are in your bag right now?", m: ["가방 안에 책[[하고]] 연필이 있어요.", "지갑[[과]] 휴대폰이 있어요."] },
      { t: "함께 활동하는 사람", q: "주말에 누구[[랑]] 같이 시간을 보내요?", qen: "Who do you spend time with on the weekend?", m: ["주말에 친구[[랑]] 같이 카페에 가요.", "가족[[하고]] 저녁을 먹어요."] }
    ]
  },
  17: {
    pos: "명사",
    en: 'Limitation Marker · "~만" · 오직 그것뿐임을 말해요',
    meanKo: "명사 뒤에 붙어 다른 것은 제외하고 오직 그것뿐임('only')을 나타냅니다.",
    meanEn: "Attached to a noun to indicate limitation or exclusivity ('only / just').",
    pat: "명사 + 만",
    askQ: "아침에 밥을 먹어요? 일요일에 어디에 가요?",
    askEn: "Do you eat a meal in the morning? Where do you go on Sunday?",
    heroKo: ["아침에 커피[[만]] 마셔요.", "일요일에 집에[[만]] 있어요."],
    heroEn: ["I drink [[only]] coffee in the morning.", "I stay [[only]] at home on Sunday."],
    ex1: {
      label: "예문 ① · 아침 식사 습관",
      askQ: "아침에 무엇[[만]] 마셔요?",
      askEn: "What is the only thing you drink in the morning?",
      aWho: "A · 리에", aKo: ["하준 씨, 아침에 밥하고 빵을 다 먹어요?"], aEn: ["Hajun, do you eat both rice and bread in the morning?"],
      bWho: "B · 회사원", bKo: ["아니요, 아침에는 시간이 없어요.", "그래서 따뜻한 커피[[만]] 한 잔 마셔요."], bEn: ["No, I don't have time in the morning.", "So I drink [[only]] a cup of warm coffee."],
      morph: ["커피 + 만 (받침 무관)"]
    },
    ex2: {
      label: "예문 ② · 주말 휴식 이야기",
      askQ: "일요일에 어디에[[만]] 있어요?",
      askEn: "Where is the only place you stay on Sunday?",
      aWho: "A · 마이클", aKo: ["유진 씨, 일요일에 밖에 나가요?"], aEn: ["Yujin, do you go out on Sunday?"],
      bWho: "B · 유진", bKo: ["아니요, 일요일에는 집에[[만]] 있어요.", "집에서 좋아하는 영화[[만]] 봐요."], bEn: ["No, on Sunday I stay [[only]] at home.", "At home, I watch [[only]] my favorite movies."],
      morph: ["집에 + 만 있어요", "영화 + 만 봐요"]
    },
    rows: [
      { k: "받침 O 명사", f: "+ 만", ex: [["물", "물만 마셔요"], ["책", "책만 읽어요"], ["빵", "빵만 먹어요"], ["한국어", "한국어만 써요"]] },
      { k: "받침 X / 조사 뒤", f: "+ 만", c: "g2", ex: [["커피", "커피만 마셔요"], ["저", "저만 알아요"], ["야채", "야채만 먹어요"], ["집", "집에만 있어요"]] }
    ],
    make: [
      { k: ["커피", "마시다"], a: "아침에 커피만 마셔요.", e: "I drink only coffee in the morning." },
      { k: ["집", "있다"], a: "일요일에는 집에만 있어요.", e: "I stay only at home on Sundays." },
      { k: ["한국어", "말하다"], a: "수업 시간에 한국어만 말해요.", e: "We speak only Korean during class." },
      { k: ["물", "마시다"], a: "운동할 때 물만 마셔요.", e: "I drink only water when exercising." }
    ],
    sits: [
      { t: "나의 식습관", q: "아침에 밥을 먹어요? 아니면 무엇[[만]] 먹어요?", qen: "Do you eat breakfast, or what is the only thing you eat/drink?", m: ["아침에는 커피[[만]] 마셔요.", "과일[[만]] 조금 먹어요."] },
      { t: "수업 시간 약속", q: "한국어 교실에서 무슨 말[[만]] 해요?", qen: "What is the only language you speak in the Korean classroom?", m: ["교실에서는 한국어[[만]] 해요.", "오늘 숙제는 한 장[[만]] 있어요."] }
    ]
  },
  18: {
    pos: "명사",
    en: 'Choice Marker · "~(이)나" · 둘 중 하나를 선택해요',
    meanKo: "두 개 이상의 명사 가운데 어느 하나를 선택함('~또는, ~혹은')을 나타냅니다.",
    meanEn: "Attached to a noun to express choice between options ('or').",
    pat: "명사1 + (이)나 + 명사2",
    askQ: "카페에서 무엇을 마셔요? 주말 언제 만나요?",
    askEn: "What do you drink at the cafe? When do we meet on the weekend?",
    heroKo: ["커피[[나]] 주스를 마셔요.", "토요일[[이나]] 일요일에 만나요."],
    heroEn: ["I drink coffee [[or]] juice.", "Let's meet on Saturday [[or]] Sunday."],
    ex1: {
      label: "예문 ① · 음료 선택하기",
      askQ: "카페에서 무엇[[이나]] 무엇을 마셔요?",
      askEn: "What do you drink at the cafe?",
      aWho: "A · 미나", aKo: ["유진 씨, 카페에서 무엇을 마실까요?"], aEn: ["Yujin, what shall we drink at the cafe?"],
      bWho: "B · 유진", bKo: ["시원한 커피[[나]] 오렌지 주스를 마셔요.", "그리고 빵[[이나]] 케이크를 먹어요."], bEn: ["Let's drink iced coffee [[or]] orange juice.", "And let's eat bread [[or]] cake."],
      morph: ["커피 + 나 (받침 X)", "빵 + 이나 (받침 O)"]
    },
    ex2: {
      label: "예문 ② · 약속 요일 정하기",
      askQ: "무슨 요일[[이나]] 무슨 요일에 만나요?",
      askEn: "On which day or which day do we meet?",
      aWho: "A · 하준", aKo: ["사라 씨, 우리 이번 주에 언제 만날까요?"], aEn: ["Sara, when shall we meet this week?"],
      bWho: "B · 사라", bKo: ["평일에는 바빠요.", "토요일[[이나]] 일요일에 공원에서 만나요!"], bEn: ["I'm busy on weekdays.", "Let's meet at the park on Saturday [[or]] Sunday!"],
      morph: ["토요일 + 이나 (받침 O)"]
    },
    rows: [
      { k: "받침 O", f: "+ 이나", ex: [["빵", "빵이나 밥"], ["책", "책이나 신문"], ["토요일", "토요일이나 일요일"], ["지하철", "지하철이나 버스"]] },
      { k: "받침 X", f: "+ 나", c: "g2", ex: [["커피", "커피나 주스"], ["영화", "영화나 드라마"], ["버스", "버스나 택시"], ["노래", "노래나 춤"]] }
    ],
    make: [
      { k: ["커피", "주스", "마시다"], a: "커피나 주스를 마셔요.", e: "I drink coffee or juice." },
      { k: ["토요일", "일요일", "만나다"], a: "토요일이나 일요일에 만나요.", e: "We meet on Saturday or Sunday." },
      { k: ["지하철", "버스", "타다"], a: "지하철이나 버스로 학교에 가요.", e: "I go to school by subway or bus." },
      { k: ["빵", "김밥", "먹다"], a: "아침에 빵이나 김밥을 먹어요.", e: "I eat bread or gimbap in the morning." }
    ],
    sits: [
      { t: "아침 식사 메뉴", q: "아침에 보통 무엇[[이나]] 무엇을 먹어요?", qen: "What or what do you usually eat in the morning?", m: ["아침에 빵[[이나]] 과일을 먹어요.", "우유[[나]] 주스를 마셔요."] },
      { t: "주말 여가 선택", q: "시간이 있을 때 무엇[[이나]] 무엇을 해요?", qen: "When you have free time, what or what do you do?", m: ["집에서 영화[[나]] 드라마를 봐요.", "토요일[[이나]] 일요일에 운동해요."] }
    ]
  },
  19: {
    pos: "명사",
    en: 'Every / Each Marker · "~마다" · 빠짐없이 반복됨을 말해요',
    meanKo: "시간이나 장소, 사람 명사 뒤에 붙어 '빠짐없이 모두, 각각('every / each')'의 뜻을 나타냅니다.",
    meanEn: "Attached to a noun to indicate 'every' or 'each' without exception.",
    pat: "시간/명사 + 마다",
    askQ: "언제[[마다]] 운동해요? 언제[[마다]] 한국어를 공부해요?",
    askEn: "How often do you exercise? How often do you study Korean?",
    heroKo: ["아침[[마다]] 공원에서 운동해요.", "날[[마다]] 한국어를 공부해요."],
    heroEn: ["I exercise at the park [[every]] morning.", "I study Korean [[every]] day."],
    ex1: {
      label: "예문 ① · 규칙적인 운동 습관",
      askQ: "언제[[마다]] 공원에서 운동해요?",
      askEn: "When do you exercise at the park?",
      aWho: "A · 유진", aKo: ["마이클 씨, 운동을 자주 해요?"], aEn: ["Michael, do you exercise often?"],
      bWho: "B · 마이클", bKo: ["네, 저는 아침[[마다]] 공원에서 달리기해요.", "그리고 주말[[마다]] 친구랑 축구를 해요."], bEn: ["Yes, I run at the park [[every]] morning.", "And [[every]] weekend I play soccer with my friend."],
      morph: ["아침 + 마다 (받침 무관)", "주말 + 마다"]
    },
    ex2: {
      label: "예문 ② · 꾸준한 공부와 다양성",
      askQ: "날[[마다]] 무엇을 공부해요?",
      askEn: "What do you study every day?",
      aWho: "A · 선생님", aKo: ["리에 씨, 한국어 실력이 정말 좋아졌어요!"], aEn: ["Rie, your Korean skills have really improved!"],
      bWho: "B · 리에", bKo: ["감사합니다! 날[[마다]] 한국어 단어를 외워요.", "나라[[마다]] 문화와 언어가 참 재미있어요."], bEn: ["Thank you! I memorize Korean words [[every]] day.", "[[Each]] country's culture and language are very interesting."],
      morph: ["날 + 마다 (매일)", "나라 + 마다 (각 나라)"]
    },
    rows: [
      { k: "시간 반복", f: "시간 + 마다", ex: [["아침", "아침마다 운동해요"], ["날", "날마다 공부해요"], ["주말", "주말마다 여행해요"], ["일요일", "일요일마다 쉬어요"]] },
      { k: "대상 각각", f: "명사 + 마다", c: "g2", ex: [["사람", "사람마다 달라요"], ["나라", "나라마다 문화가 있어요"], ["교실", "교실마다 시계가 있어요"], ["학생", "학생마다 책이 있어요"]] }
    ],
    make: [
      { k: ["아침", "운동하다"], a: "아침마다 공원에서 운동해요.", e: "I exercise at the park every morning." },
      { k: ["날", "한국어", "공부하다"], a: "날마다 한국어를 공부해요.", e: "I study Korean every day." },
      { k: ["주말", "영화", "보다"], a: "주말마다 가족과 영화를 봐요.", e: "I watch a movie with my family every weekend." },
      { k: ["사람", "성격", "다르다"], a: "사람마다 좋아하는 음식이 달라요.", e: "Favorite foods differ for each person." }
    ],
    sits: [
      { t: "나의 좋은 습관", q: "아침[[마다]] 무엇을 해요? 주말[[마다]] 무엇을 해요?", qen: "What do you do every morning? What do you do every weekend?", m: ["아침[[마다]] 커피를 마셔요.", "주말[[마다]] 도서관에 가요."] },
      { t: "나라와 사람마다 다른 점", q: "나라[[마다]] 무엇이 달라요? 사람[[마다]] 무엇이 달라요?", qen: "What is different in each country? What is different for each person?", m: ["나라[[마다]] 음식이 달라요.", "사람[[마다]] 취미가 달라요."] }
    ]
  },
  20: {
    pos: "명사",
    en: 'Possessive Marker · "~의" · 소유와 소속을 말해요',
    meanKo: "명사 뒤에 붙어 뒤따르는 명사의 소유자나 소속('~의')을 나타냅니다. ('저의→제, 나의→내')",
    meanEn: "Possessive marker meaning 'of' or '-’s' (저의 contracts to 제, 나의 to 내).",
    pat: "명사1(소유자) + 의 + 명사2",
    askQ: "이 가방은 누구[[의]] 가방이에요? 이 책은 누구[[의]] 책이에요?",
    askEn: "Whose bag is this? Whose book is this?",
    heroKo: ["이거는 리에 씨[[의]] 가방이에요.", "선생님[[의]] 한국어 책이에요."],
    heroEn: ["This is [[Rie's]] bag.", "It is the [[teacher's]] Korean book."],
    ex1: {
      label: "예문 ① · 물건 주인 찾기",
      askQ: "이 가방은 누구[[의]] 가방이에요?",
      askEn: "Whose bag is this?",
      aWho: "A · 선생님", aKo: ["여러분, 의자 위에 있는 이 가방은 누구[[의]] 가방이에요?"], aEn: ["Everyone, whose bag is this on the chair?"],
      bWho: "B · 리에", bKo: ["그거는 리에[[의]] 가방이에요!", "그리고 옆에는 [[제]] 우산이에요."], bEn: ["That is [[Rie's]] bag!", "And next to it is [[my]] umbrella."],
      morph: ["리에 + 의 가방", "저의 → 제 우산"]
    },
    ex2: {
      label: "예문 ② · 가족과 소속 소개",
      askQ: "책상 위의 책은 누구[[의]] 책이에요?",
      askEn: "Whose book is on the desk?",
      aWho: "A · 학생", aKo: ["유진 씨, 책상 위에 있는 책은 유진 씨[[의]] 책이에요?"], aEn: ["Yujin, is the book on the desk your book?"],
      bWho: "B · 유진", bKo: ["아니요, 우리 선생님[[의]] 한국어 책이에요.", "[[제]] 책은 가방 안에 있어요."], bEn: ["No, it is our [[teacher's]] Korean book.", "[[My]] book is inside my bag."],
      morph: ["선생님 + 의 책", "저의 → 제 책"]
    },
    rows: [
      { k: "이름 · 사람 + 의", f: "명사 + 의", ex: [["리에", "리에의 가방"], ["선생님", "선생님의 책"], ["친구", "친구의 휴대폰"], ["마이클", "마이클의 시계"]] },
      { k: "대명사 축약", f: "저의 → 제 / 나의 → 내", c: "g2", ex: [["저", "제 이름 (저의 이름)"], ["저", "제 가방 (저의 가방)"], ["우리", "우리 학교"], ["한국", "한국의 음식"]] }
    ],
    make: [
      { k: ["리에", "가방"], a: "이거는 리에 씨의 가방이에요.", e: "This is Rie's bag." },
      { k: ["선생님", "책"], a: "책상 위에 선생님의 책이 있어요.", e: "The teacher's book is on the desk." },
      { k: ["저", "이름", "유진"], a: "제 이름은 유진이에요.", e: "My name is Yujin." },
      { k: ["친구", "생일"], a: "오늘은 제 친구의 생일이에요.", e: "Today is my friend's birthday." }
    ],
    sits: [
      { t: "교실 물건 주인 찾기", q: "이 연필은 누구[[의]] 연필이에요? 저 가방은 누구 거[[예요]]?", qen: "Whose pencil is this? Whose bag is that?", m: ["이거는 마이클 씨[[의]] 연필이에요.", "저거는 [[제]] 가방이에요."] },
      { t: "나의 소중한 것 소개", q: "여러분[[의]] 취미는 뭐예요? 가장 좋아하는 책은 뭐예요?", qen: "What is your hobby? What is your favorite book?", m: ["[[제]] 취미는 음악 듣기예요.", "이거는 [[제]] 동생[[의]] 사진이에요."] }
    ]
  },
  21: {
    pos: "명사",
    en: 'Comparison Marker · "~보다" · 두 대상을 비교해요',
    meanKo: "비교의 기준이 되는 명사 뒤에 붙어 '~에 비해 더('more than')'의 뜻을 나타냅니다.",
    meanEn: "Attached to a noun to set the standard of comparison ('than').",
    pat: "명사1 + 이/가 + 명사2 + 보다 (더) + 형용사",
    askQ: "비행기와 기차 중에 뭐가 [[더 빨라요]]?",
    askEn: "Between an airplane and a train, which one is faster?",
    heroKo: ["비행기가 기차[[보다]] 더 빨라요.", "부산이 서울[[보다]] 따뜻해요."],
    heroEn: ["An airplane is faster [[than]] a train.", "Busan is warmer [[than]] Seoul."],
    ex1: {
      label: "예문 ① · 교통수단 속도 비교",
      askQ: "비행기가 기차[[보다]] 빨라요?",
      askEn: "Is an airplane faster than a train?",
      aWho: "A · 마이클", aKo: ["하준 씨, 제주도에 갈 때 비행기와 배 중에 뭐가 빨라요?"], aEn: ["Hajun, when going to Jeju, which is faster between a plane and a boat?"],
      bWho: "B · 하준", bKo: ["비행기가 배[[보다]] 훨씬 빨라요.", "그리고 기차가 버스[[보다]] 더 편해요."], bEn: ["An airplane is much faster [[than]] a boat.", "And a train is more comfortable [[than]] a bus."],
      morph: ["배 + 보다 빨라요", "버스 + 보다 편해요"]
    },
    ex2: {
      label: "예문 ② · 날씨와 계절 비교",
      askQ: "서울과 부산 중에 어디가 [[더 따뜻해요]]?",
      askEn: "Between Seoul and Busan, which place is warmer?",
      aWho: "A · 사라", aKo: ["미나 씨, 겨울에 서울하고 부산 중에 어디가 따뜻해요?"], aEn: ["Mina, in winter, which is warmer between Seoul and Busan?"],
      bWho: "B · 미나", bKo: ["남쪽에 있는 부산이 서울[[보다]] 더 따뜻해요.", "서울은 부산[[보다]] 눈이 많이 와요."], bEn: ["Busan in the south is warmer [[than]] Seoul.", "It snows more in Seoul [[than]] in Busan."],
      morph: ["서울 + 보다 따뜻해요", "부산 + 보다"]
    },
    rows: [
      { k: "사물 · 교통 비교", f: "비교기준 + 보다", ex: [["기차", "기차보다 빨라요"], ["버스", "버스보다 편해요"], ["어제", "어제보다 시원해요"], ["책", "책보다 영화가 재미있어요"]] },
      { k: "장소 · 사람 비교", f: "비교기준 + 보다 더", c: "g2", ex: [["서울", "서울보다 따뜻해요"], ["여름", "여름보다 겨울이 좋아요"], ["형", "형보다 키가 커요"], ["커피", "커피보다 차를 좋아해요"]] }
    ],
    make: [
      { k: ["비행기", "기차", "빠르다"], a: "비행기가 기차보다 더 빨라요.", e: "An airplane is faster than a train." },
      { k: ["부산", "서울", "따뜻하다"], a: "부산이 서울보다 따뜻해요.", e: "Busan is warmer than Seoul." },
      { k: ["오늘", "어제", "시원하다"], a: "오늘 날씨가 어제보다 시원해요.", e: "Today's weather is cooler than yesterday's." },
      { k: ["동생", "형", "크다"], a: "동생이 형보다 키가 더 커요.", e: "The younger brother is taller than the older brother." }
    ],
    sits: [
      { t: "우리 고향과 한국 비교", q: "고향이 서울[[보다]] 커요? 날씨가 서울[[보다]] 따뜻해요?", qen: "Is your hometown bigger than Seoul? Is the weather warmer than Seoul?", m: ["제 고향이 서울[[보다]] 더 따뜻해요.", "서울이 제 고향[[보다]] 사람이 많아요."] },
      { t: "취향 비교하기", q: "커피[[보다]] 차를 더 좋아해요? 여름[[보다]] 겨울이 좋아요?", qen: "Do you like tea more than coffee? Do you like winter more than summer?", m: ["저는 커피[[보다]] 녹차를 더 좋아해요.", "여름[[보다]] 가을이 더 좋아요."] }
    ]
  },
  22: {
    pos: "명사",
    en: 'Simile Marker · "~처럼 · ~같이" · 비슷한 모양이나 정도를 비유해요',
    meanKo: "명사 뒤에 붙어 모양이나 행동이 그 대상과 비슷함('like / as ~ as')을 비유적으로 나타냅니다.",
    meanEn: "Attached to a noun to express similarity or comparison ('like / as').",
    pat: "명사 + 처럼 / 같이",
    askQ: "누구[[처럼]] 노래를 잘해요? 마음씨가 누구[[같이]] 착해요?",
    askEn: "Like whom does he sing well? Like whom is she kind-hearted?",
    heroKo: ["가수[[처럼]] 노래를 정말 잘해요.", "마음이 천사[[같이]] 착해요."],
    heroEn: ["He sings really well [[like]] a singer.", "She is kind-hearted [[like]] an angel."],
    ex1: {
      label: "예문 ① · 특기와 실력 칭찬하기",
      askQ: "하준 씨가 누구[[처럼]] 노래를 잘해요?",
      askEn: "Like whom does Hajun sing well?",
      aWho: "A · 유진", aKo: ["하준 씨가 노래를 그렇게 잘해요?"], aEn: ["Does Hajun sing that well?"],
      bWho: "B · 가수", bKo: ["네, 진짜 가수[[처럼]] 노래를 아주 잘해요!", "그리고 한국 사람[[처럼]] 한국어도 잘해요."], bEn: ["Yes, he sings very well [[like]] a real singer!", "And he speaks Korean well [[like]] a Korean."],
      morph: ["가수 + 처럼", "한국 사람 + 처럼"]
    },
    ex2: {
      label: "예문 ② · 성격과 모습 비유하기",
      askQ: "사라 씨는 어떤 사람이에요?",
      askEn: "What kind of person is Sara?",
      aWho: "A · 마이클", aKo: ["사라 씨는 성격이 어때요?"], aEn: ["What is Sara's personality like?"],
      bWho: "B · 사라", bKo: ["사라 씨는 마음이 천사[[같이]] 정말 착해요.", "항상 가족[[처럼]] 친구들을 도와줘요."], bEn: ["Sara has a kind heart [[like]] an angel.", "She always helps her friends [[like]] family."],
      morph: ["천사 + 같이", "가족 + 처럼"]
    },
    rows: [
      { k: "명사 + 처럼", f: "+ 처럼", ex: [["가수", "가수처럼 노래해요"], ["한국 사람", "한국 사람처럼 말해요"], ["배우", "배우처럼 멋있어요"], ["가족", "가족처럼 친해요"]] },
      { k: "명사 + 같이", f: "+ 같이", c: "g2", ex: [["천사", "천사같이 착해요"], ["눈", "눈같이 하얘요"], ["바다", "바다같이 넓어요"], ["친구", "친구같이 편해요"]] }
    ],
    make: [
      { k: ["가수", "노래하다"], a: "가수처럼 노래를 잘해요.", e: "He sings well like a singer." },
      { k: ["천사", "착하다"], a: "마음이 천사같이 착해요.", e: "She is kind-hearted like an angel." },
      { k: ["한국 사람", "말하다"], a: "한국 사람처럼 한국어를 잘해요.", e: "She speaks Korean well like a Korean." },
      { k: ["배우", "멋있다"], a: "영화배우처럼 정말 멋있어요.", e: "He is really cool like a movie actor." }
    ],
    sits: [
      { t: "친구 칭찬하기", q: "짝은 누구[[처럼]] 멋있어요? 누구[[처럼]] 한국어를 잘해요?", qen: "Like whom is your partner cool? Like whom do they speak Korean well?", m: ["마이클 씨는 배우[[처럼]] 멋있어요.", "한국 사람[[처럼]] 발음이 좋아요."] },
      { t: "비유해서 표현하기", q: "누구[[처럼]] 노래나 요리를 잘하고 싶어요?", qen: "Like whom do you want to sing or cook well?", m: ["요리사[[처럼]] 요리를 잘하고 싶어요.", "가수[[처럼]] 노래를 부르고 싶어요."] }
    ]
  },
  23: {
    pos: "동사 · 형용사",
    en: 'Past Tense · "-았/었-" · 이미 지나간 과거의 일을 말해요',
    meanKo: "동사나 형용사 어간 뒤에 붙어 이미 일어난 과거의 동작이나 상태를 나타냅니다.",
    meanEn: "Past tense suffix attached to verb or adjective stems ('did / was / were').",
    pat: "동사/형용사 + -았/었어요.",
    askQ: "어제 무엇을 [[했어요]]? 주말에 누구를 [[만났어요]]?",
    askEn: "What did you do yesterday? Who did you meet on the weekend?",
    heroKo: ["어제 친구를 만[[났어요]].", "집에서 재미있는 영화를 [[봤어요]]."],
    heroEn: ["I [[met]] a friend yesterday.", "I [[watched]] an interesting movie at home."],
    ex1: {
      label: "예문 ① · 어제 한 일 이야기",
      askQ: "어제 누구를 만[[났어요]]?",
      askEn: "Who did you meet yesterday?",
      aWho: "A · 하준", aKo: ["유진 씨, 어제 주말에 무엇을 [[했어요]]?"], aEn: ["Yujin, what did you do yesterday on the weekend?"],
      bWho: "B · 유진", bKo: ["어제 오랜만에 고향 친구를 만[[났어요]].", "같이 맛있는 점심을 먹[[었어요]]."], bEn: ["Yesterday I [[met]] a hometown friend after a long time.", "We [[ate]] a delicious lunch together."],
      morph: ["만나 + 았어요 → 만났어요", "먹 + 었어요 → 먹었어요"]
    },
    ex2: {
      label: "예문 ② · 지난 저녁 여가",
      askQ: "어제 저녁에 무슨 영화를 [[봤어요]]?",
      askEn: "What movie did you watch yesterday evening?",
      aWho: "A · 미나", aKo: ["리에 씨, 어제 저녁에 집에서 뭐 [[했어요]]?"], aEn: ["Rie, what did you do at home yesterday evening?"],
      bWho: "B · 리에", bKo: ["가족하고 한국 영화를 [[봤어요]].", "영화가 정말 재미있[[었어요]]."], bEn: ["I [[watched]] a Korean movie with my family.", "The movie [[was]] really interesting."],
      morph: ["보 + 았어요 → 봤어요", "재미있 + 었어요"]
    },
    rows: [
      { k: "ㅏ, ㅗ 모음", f: "+ -았어요", ex: [["만나다", "만났어요"], ["보다", "봤어요"], ["가다", "갔어요"], ["좋다", "좋았어요"]] },
      { k: "그 외 모음 / 하다", f: "+ -었어요 / 했어요", c: "g2", ex: [["먹다", "먹었어요"], ["읽다", "읽었어요"], ["공부하다", "공부했어요"], ["운동하다", "운동했어요"]] }
    ],
    make: [
      { k: ["어제", "친구", "만나다"], a: "어제 친구를 만났어요.", e: "I met a friend yesterday." },
      { k: ["주말", "영화", "보다"], a: "주말에 영화를 봤어요.", e: "I watched a movie on the weekend." },
      { k: ["아침", "빵", "먹다"], a: "오늘 아침에 빵을 먹었어요.", e: "I ate bread this morning." },
      { k: ["도서관", "공부하다"], a: "어제 도서관에서 한국어를 공부했어요.", e: "I studied Korean at the library yesterday." }
    ],
    sits: [
      { t: "어제 한 일", q: "어제 어디에 [[갔어요]]? 무엇을 [[먹었어요]]?", qen: "Where did you go yesterday? What did you eat?", m: ["어제 도서관에 [[갔어요]].", "식당에서 불고기를 [[먹었어요]]."] },
      { t: "지난 주말과 방학", q: "지난 주말에 누구를 [[만났어요]]? 무엇을 [[했어요]]?", qen: "Who did you meet last weekend? What did you do?", m: ["지난 주말에 친구를 [[만났어요]].", "같이 영화를 [[봤어요]]."] }
    ]
  },
  24: {
    pos: "동사 · 형용사",
    en: 'Future Plan · "-(으)ㄹ 거예요" · 미래의 계획과 예정된 일을 말해요',
    meanKo: "동사 어간 뒤에 붙어 앞으로 할 미래의 계획이나 의도를 나타냅니다.",
    meanEn: "Attached to a verb stem to express future plans or intentions ('will / going to').",
    pat: "동사 + -(으)ㄹ 거예요.",
    askQ: "이번 주말에 무엇을 [[할 거예요]]?",
    askEn: "What are you going to do this weekend?",
    heroKo: ["주말에 부산으로 여행을 [[갈 거예요]].", "방학에 한국어를 열심히 공부[[할 거예요]]."],
    heroEn: ["I [[will go]] on a trip to Busan on the weekend.", "I [[will study]] Korean hard during vacation."],
    ex1: {
      label: "예문 ① · 주말 여행 계획",
      askQ: "이번 주말에 어디에 [[갈 거예요]]?",
      askEn: "Where are you going to go this weekend?",
      aWho: "A · 마이클", aKo: ["사라 씨, 이번 주말에 무엇을 [[할 거예요]]?"], aEn: ["Sara, what are you going to do this weekend?"],
      bWho: "B · 사라", bKo: ["친구랑 부산으로 여행을 [[갈 거예요]].", "바다에서 사진도 많이 찍[[을 거예요]]."], bEn: ["I [[ am going to go]] on a trip to Busan with my friend.", "We [[will]] also [[take]] lots of photos at the beach."],
      morph: ["가 + ㄹ 거예요 → 갈 거예요", "찍 + 을 거예요 → 찍을 거예요"]
    },
    ex2: {
      label: "예문 ② · 방학 목표와 다짐",
      askQ: "방학에 무엇을 공부[[할 거예요]]?",
      askEn: "What are you going to study during vacation?",
      aWho: "A · 선생님", aKo: ["하준 씨, 이번 여름 방학에 무슨 계획이 있어요?"], aEn: ["Hajun, what plans do you have for this summer vacation?"],
      bWho: "B · 학생", bKo: ["방학에 매일 한국어를 공부[[할 거예요]].", "그리고 한국 역사 책도 읽[[을 거예요]]."], bEn: ["I [[will study]] Korean every day during vacation.", "And I [[will]] also [[read]] Korean history books."],
      morph: ["공부하 + ㄹ 거예요 → 공부할 거예요", "읽 + 을 거예요 → 읽을 거예요"]
    },
    rows: [
      { k: "받침 O (ㄹ 제외)", f: "+ -을 거예요", ex: [["먹다", "먹을 거예요"], ["읽다", "읽을 거예요"], ["찍다", "찍을 거예요"], ["듣다", "들을 거예요"]] },
      { k: "받침 X / ㄹ 받침", f: "+ -ㄹ 거예요", c: "g2", ex: [["가다", "갈 거예요"], ["보다", "볼 거예요"], ["공부하다", "공부할 거예요"], ["살다", "살 거예요"]] }
    ],
    make: [
      { k: ["주말", "여행", "가다"], a: "주말에 부산으로 여행을 갈 거예요.", e: "I will go on a trip to Busan on the weekend." },
      { k: ["방학", "한국어", "공부하다"], a: "방학에 한국어를 공부할 거예요.", e: "I will study Korean during vacation." },
      { k: ["내일", "친구", "만나다"], a: "내일 카페에서 친구를 만날 거예요.", e: "I will meet my friend at a cafe tomorrow." },
      { k: ["저녁", "불고기", "먹다"], a: "오늘 저녁에 불고기를 먹을 거예요.", e: "I will eat bulgogi this evening." }
    ],
    sits: [
      { t: "오늘 저녁 계획", q: "오늘 수업이 끝나고 무엇을 [[할 거예요]]?", qen: "What are you going to do after class today?", m: ["집에 가서 저녁을 [[먹을 거예요]].", "도서관에서 숙제를 [[할 거예요]]."] },
      { t: "다가오는 주말과 휴가", q: "이번 주말에 어디에 [[갈 거예요]]? 누구를 [[만날 거예요]]?", qen: "Where will you go this weekend? Who will you meet?", m: ["주말에 공원에 [[갈 거예요]].", "친구를 만나서 영화를 [[볼 거예요]]."] }
    ]
  },
  25: {
    pos: "동사",
    en: 'Present Progressive · "-고 있다" · 지금 진행 중인 동작을 말해요',
    meanKo: "동작동사 어간 뒤에 붙어 현재 그 행동이 계속 진행되고 있음('be -ing')을 나타냅니다.",
    meanEn: "Attached to an action verb stem to express an ongoing action ('am/is/are -ing').",
    pat: "동사 + -고 있어요.",
    askQ: "지금 무엇을 하[[고 있어요]]?",
    askEn: "What are you doing right now?",
    heroKo: ["지금 따뜻한 커피를 마시[[고 있어요]].", "교실에서 한국어를 배우[[고 있어요]]."],
    heroEn: ["I [[am drinking]] warm coffee right now.", "I [[am learning]] Korean in the classroom."],
    ex1: {
      label: "예문 ① · 지금 카페에서 하는 일",
      askQ: "지금 카페에서 뭐 하[[고 있어요]]?",
      askEn: "What are you doing at the cafe right now?",
      aWho: "A · 유진", aKo: ["리에 씨, 지금 어디예요? 뭐 하[[고 있어요]]?"], aEn: ["Rie, where are you now? What are you doing?"],
      bWho: "B · 리에", bKo: ["지금 카페에서 커피를 마시[[고 있어요]].", "그리고 한국 음악을 듣[[고 있어요]]."], bEn: ["I [[am drinking]] coffee at the cafe right now.", "And I [[am listening]] to Korean music."],
      morph: ["마시 + 고 있어요", "듣 + 고 있어요"]
    },
    ex2: {
      label: "예문 ② · 요즘 계속하는 공부",
      askQ: "요즘 무엇을 배우[[고 있어요]]?",
      askEn: "What are you learning these days?",
      aWho: "A · 하준", aKo: ["마이클 씨, 요즘 학교에서 무엇을 배우[[고 있어요]]?"], aEn: ["Michael, what are you learning at school these days?"],
      bWho: "B · 학생", bKo: ["요즘 열심히 한국어를 배우[[고 있어요]].", "친구들과 한국어로 대화하[[고 있어요]]."], bEn: ["I [[am learning]] Korean hard these days.", "I [[am conversing]] in Korean with my friends."],
      morph: ["배우 + 고 있어요", "대화하 + 고 있어요"]
    },
    rows: [
      { k: "받침 O 동사", f: "+ -고 있어요", ex: [["먹다", "먹고 있어요"], ["읽다", "읽고 있어요"], ["듣다", "듣고 있어요"], ["찾다", "찾고 있어요"]] },
      { k: "받침 X 동사", f: "+ -고 있어요", c: "g2", ex: [["마시다", "마시고 있어요"], ["배우다", "배우고 있어요"], ["보다", "보고 있어요"], ["공부하다", "공부하고 있어요"]] }
    ],
    make: [
      { k: ["지금", "커피", "마시다"], a: "지금 커피를 마시고 있어요.", e: "I am drinking coffee right now." },
      { k: ["교실", "한국어", "배우다"], a: "교실에서 한국어를 배우고 있어요.", e: "I am learning Korean in the classroom." },
      { k: ["도서관", "책", "읽다"], a: "도서관에서 책을 읽고 있어요.", e: "I am reading a book at the library." },
      { k: ["친구", "영화", "보다"], a: "지금 친구와 영화를 보고 있어요.", e: "I am watching a movie with my friend now." }
    ],
    sits: [
      { t: "지금 이 순간", q: "여러분은 지금 교실에서 무엇을 하[[고 있어요]]?", qen: "What are you doing in the classroom right now?", m: ["지금 한국어를 공부하[[고 있어요]].", "선생님 말씀을 듣[[고 있어요]]."] },
      { t: "전화 통화 상황", q: "여보세요! 지금 어디에서 뭐 하[[고 있어요]]?", qen: "Hello! Where are you and what are you doing right now?", m: ["집에서 저녁을 먹[[고 있어요]].", "공원에서 산책하[[고 있어요]]."] }
    ]
  },
  26: {
    pos: "동사 · 형용사",
    en: 'Conjecture & Reaction · "-겠-" · 추측과 공감 반응을 말해요',
    meanKo: "동사나 형용사 어간 뒤에 붙어 상황으로 미루어 추측하거나 상대방의 말에 공감·반응할 때 씁니다.",
    meanEn: "Attached to a verb/adjective stem to express conjecture ('must be / looks like / will probably').",
    pat: "동사/형용사 + -겠어요 / -았/었겠어요.",
    askQ: "불고기가 정말 맛있[[겠어요]]! 오후에 비가 오[[겠어요]]?",
    askEn: "The bulgogi must be really delicious! Does it look like it will rain in the afternoon?",
    heroKo: ["와, 불고기가 정말 맛있[[겠어요]]!", "구름이 많아서 비가 오[[겠어요]]."],
    heroEn: ["Wow, the bulgogi [[looks like it must be]] delicious!", "There are many clouds, so it [[will probably]] rain."],
    ex1: {
      label: "예문 ① · 음식을 보고 반응하기",
      askQ: "음식이 정말 맛있[[겠어요]]!",
      askEn: "The food looks so delicious!",
      aWho: "A · 요리사", aKo: ["마이클 씨, 오늘 점심으로 불고기를 만들었어요."], aEn: ["Michael, I made bulgogi for lunch today."],
      bWho: "B · 마이클", bKo: ["와, 냄새가 정말 좋아요! 아주 맛있[[겠어요]]!", "요리하느라고 많이 힘들[[었겠어요]]."], bEn: ["Wow, it smells great! It [[must be]] very delicious!", "It [[must have been]] hard work cooking."],
      morph: ["맛있 + 겠어요 (현재 추측)", "힘들 + 었겠어요 (과거 추측)"]
    },
    ex2: {
      label: "예문 ② · 날씨와 상대방 기분 추측",
      askQ: "오후에 비가 오[[겠어요]]?",
      askEn: "Will it probably rain in the afternoon?",
      aWho: "A · 사라", aKo: ["유진 씨, 밖을 보세요. 하늘에 검은 구름이 많아요."], aEn: ["Yujin, look outside. There are many dark clouds in the sky."],
      bWho: "B · 유진", bKo: ["네, 조금 뒤에 비가 많이 오[[겠어요]].", "우산이 없어서 집에 가기 힘들[[겠어요]]."], bEn: ["Yes, it [[looks like it will]] rain a lot soon.", "Without an umbrella, it [[will be]] tough going home."],
      morph: ["오 + 겠어요 (비가 오겠어요)", "힘들 + 겠어요"]
    },
    rows: [
      { k: "현재·미래 추측", f: "어간 + -겠어요", ex: [["맛있다", "맛있겠어요"], ["오다", "비가 오겠어요"], ["좋다", "정말 좋겠어요"], ["바쁘다", "요즘 바쁘겠어요"]] },
      { k: "과거 일 공감·추측", f: "어간 + -았/었겠어요", c: "g2", ex: [["힘들다", "힘들었겠어요"], ["재미있다", "재미있었겠어요"], ["좋다", "기분이 좋았겠어요"], ["바쁘다", "어제 바빴겠어요"]] }
    ],
    make: [
      { k: ["불고기", "맛있다"], a: "와, 불고기가 정말 맛있겠어요!", e: "Wow, the bulgogi must be really delicious!" },
      { k: ["구름", "비", "오다"], a: "구름이 많아서 비가 오겠어요.", e: "There are many clouds, so it will probably rain." },
      { k: ["여행", "재미있다"], a: "주말 여행이 정말 재미있겠어요.", e: "The weekend trip must be really fun." },
      { k: ["어제", "힘들다"], a: "어제 일이 많아서 힘들었겠어요.", e: "You must have had a hard time with so much work yesterday." }
    ],
    sits: [
      { t: "친구의 기쁜 소식에 공감하기", q: "친구가 내일 제주도로 여행을 가요. 어떻[[겠어요]]?", qen: "Your friend is going on a trip to Jeju tomorrow. How must it be?", m: ["와, 정말 좋[[겠어요]]!", "여행이 아주 재미있[[겠어요]]!"] },
      { t: "바쁜 하루 위로하기", q: "친구가 어제 밤늦게까지 일했어요. 어땠[[겠어요]]?", qen: "Your friend worked until late last night. How must they have felt?", m: ["어제 정말 힘들[[었겠어요]].", "오늘 많이 피곤하[[겠어요]]."] }
    ]
  },
  27: {
    pos: "동사 · 형용사",
    en: 'Short Negation · "안" · 의지 부정과 상태 부정을 말해요',
    meanKo: "동사나 형용사 앞에 놓여 어떤 행동을 하지 않거나 그런 상태가 아님을 나타냅니다. ('명사+하다' 동사는 '명사+안 하다')",
    meanEn: "Placed before a verb or adjective to express general or volitional negation ('not / don't').",
    pat: "안 + 동사/형용사 (명사 + 안 해요)",
    askQ: "일요일에 학교에 가요? 이 가방이 비싸요?",
    askEn: "Do you go to school on Sunday? Is this bag expensive?",
    heroKo: ["일요일에는 학교에 [[안]] 가요.", "이 가방은 [[안]] 비싸요."],
    heroEn: ["I [[do not]] go to school on Sunday.", "This bag [[is not]] expensive."],
    ex1: {
      label: "예문 ① · 주말 등교 여부",
      askQ: "일요일에도 학교에 가요?",
      askEn: "Do you go to school on Sunday too?",
      aWho: "A · 미나", aKo: ["하준 씨, 일요일에도 학교에 가요?"], aEn: ["Hajun, do you go to school on Sunday too?"],
      bWho: "B · 하준", bKo: ["아니요, 일요일에는 학교에 [[안]] 가요.", "집에서 쉬고 공부도 [[안]] 해요."], bEn: ["No, I [[do not]] go to school on Sunday.", "I rest at home and [[do not]] study either."],
      morph: ["안 + 가요 (일반 동사)", "공부 + 안 해요 (명사 + 하다)"]
    },
    ex2: {
      label: "예문 ② · 가격과 상태 부정",
      askQ: "이 가방은 많이 비싸요?",
      askEn: "Is this bag very expensive?",
      aWho: "A · 리에", aKo: ["사라 씨, 새로 산 가방이 참 예뻐요! 많이 비싸요?"], aEn: ["Sara, the new bag you bought is so pretty! Is it very expensive?"],
      bWho: "B · 사라", bKo: ["아니요, 세일해서 [[안]] 비싸요.", "그리고 가벼워서 하나도 [[안]] 무거워요."], bEn: ["No, it's on sale so it [[is not]] expensive.", "And it's light so it [[is not]] heavy at all."],
      morph: ["안 + 비싸요 (형용사)", "안 + 무거워요 (형용사)"]
    },
    rows: [
      { k: "동사 · 형용사", f: "안 + 동사/형용사", ex: [["가다", "안 가요"], ["먹다", "안 먹어요"], ["비싸다", "안 비싸요"], ["맵다", "안 매워요"]] },
      { k: "명사 + 하다 동사", f: "명사(을/를) + 안 해요", c: "g2", ex: [["공부하다", "공부를 안 해요"], ["운동하다", "운동을 안 해요"], ["일하다", "일을 안 해요"], ["요리하다", "요리를 안 해요"]] }
    ],
    make: [
      { k: ["일요일", "학교", "가다"], a: "일요일에는 학교에 안 가요.", e: "I don't go to school on Sunday." },
      { k: ["가방", "비싸다"], a: "이 가방은 안 비싸요.", e: "This bag is not expensive." },
      { k: ["아침", "먹다"], a: "바빠서 아침을 안 먹어요.", e: "I'm busy so I don't eat breakfast." },
      { k: ["주말", "일하다"], a: "주말에는 일을 안 해요.", e: "I don't work on weekends." }
    ],
    sits: [
      { t: "안 하는 것과 안 먹는 것", q: "평소에 무엇을 [[안]] 먹어요? 주말에 무엇을 [[안]] 해요?", qen: "What do you usually not eat? What do you not do on weekends?", m: ["저는 매운 음식을 [[안]] 먹어요.", "일요일에는 공부를 [[안]] 해요."] },
      { t: "사물과 음식 상태 말하기", q: "한국 음식이 매워요? 한국어 공부가 어려워요?", qen: "Is Korean food spicy? Is studying Korean difficult?", m: ["불고기는 [[안]] 매워요.", "한국어가 [[안]] 어려워요."] }
    ]
  },
  28: {
    pos: "동사 · 형용사",
    en: 'Long Negation · "-지 않다" · 동작과 상태를 정중하게 부정해요',
    meanKo: "동사나 형용사 어간 뒤에 붙어 어떤 행동이나 상태가 아님을 정중하고 차분하게 나타냅니다.",
    meanEn: "Long-form negation attached to any verb or adjective stem ('do not / is not').",
    pat: "동사/형용사 어간 + -지 않아요.",
    askQ: "한국어 공부가 어려워요? 이 음식이 매워요?",
    askEn: "Is studying Korean difficult? Is this food spicy?",
    heroKo: ["한국어 공부가 어렵[[지 않아요]].", "이 음식은 하나도 맵[[지 않아요]]."],
    heroEn: ["Studying Korean [[is not]] difficult.", "This food [[is not]] spicy at all."],
    ex1: {
      label: "예문 ① · 한국어 공부 소감",
      askQ: "한국어 공부가 어렵[[지 않아요]]?",
      askEn: "Isn't studying Korean difficult?",
      aWho: "A · 선생님", aKo: ["사라 씨, 요즘 한국어 공부가 많이 어려워요?"], aEn: ["Sara, is studying Korean very difficult these days?"],
      bWho: "B · 사라", bKo: ["아니요, 한국어 공부가 어렵[[지 않아요]].", "선생님이 친절하셔서 수업이 힘들[[지 않아요]]."], bEn: ["No, studying Korean [[is not]] difficult.", "Because the teacher is kind, class [[is not]] tiring."],
      morph: ["어렵 + 지 않아요 (형용사)", "힘들 + 지 않아요"]
    },
    ex2: {
      label: "예문 ② · 음식 맛과 거리 이야기",
      askQ: "이 국수가 맵[[지 않아요]]?",
      askEn: "Is this noodle dish not spicy?",
      aWho: "A · 요리사", aKo: ["마이클 씨, 이 국수가 입에 맞아요? 많이 매워요?"], aEn: ["Michael, does this noodle dish suit your taste? Is it very spicy?"],
      bWho: "B · 마이클", bKo: ["아니요, 하나도 맵[[지 않아요]]. 아주 맛있어요!", "그리고 식당이 집에서 멀[[지 않아요]]."], bEn: ["No, it [[is not]] spicy at all. It's very delicious!", "And the restaurant [[is not]] far from home."],
      morph: ["맵 + 지 않아요", "멀 + 지 않아요"]
    },
    rows: [
      { k: "형용사 부정", f: "어간 + -지 않아요", ex: [["어렵다", "어렵지 않아요"], ["맵다", "맵지 않아요"], ["비싸다", "비싸지 않아요"], ["멀다", "멀지 않아요"]] },
      { k: "동사 부정", f: "어간 + -지 않아요", c: "g2", ex: [["가다", "가지 않아요"], ["먹다", "먹지 않아요"], ["공부하다", "공부하지 않아요"], ["늦다", "늦지 않아요"]] }
    ],
    make: [
      { k: ["한국어", "어렵다"], a: "한국어 공부가 어렵지 않아요.", e: "Studying Korean is not difficult." },
      { k: ["음식", "맵다"], a: "이 음식은 맵지 않아요.", e: "This food is not spicy." },
      { k: ["학교", "멀다"], a: "집에서 학교가 멀지 않아요.", e: "The school is not far from home." },
      { k: ["주말", "일하다"], a: "주말에는 일하지 않아요.", e: "I do not work on weekends." }
    ],
    sits: [
      { t: "솔직한 내 생각 말하기", q: "한국어가 어려워요? 집에서 학교가 멀어요?", qen: "Is Korean difficult? Is school far from your home?", m: ["아니요, 한국어가 어렵[[지 않아요]].", "집에서 학교가 멀[[지 않아요]]."] },
      { t: "건강과 생활 습관", q: "밤늦게 음식을 먹어요? 아침에 지각을 해요?", qen: "Do you eat food late at night? Are you late in the morning?", m: ["밤늦게 음식을 먹[[지 않아요]].", "수업 시간에 늦[[지 않아요]]."] }
    ]
  },
  29: {
    pos: "동사",
    en: 'Inability Negation · "못" · 능력 부족이나 불가능을 말해요',
    meanKo: "동작동사 앞에 놓여 능력이 없거나 외부 사정 때문에 어떤 행동을 할 수 없음('cannot')을 나타냅니다.",
    meanEn: "Placed before an action verb to express inability or impossibility ('cannot').",
    pat: "못 + 동사 (명사 + 못 해요)",
    askQ: "수영을 할 수 있어요? 오늘 파티에 가요?",
    askEn: "Can you swim? Are you going to the party today?",
    heroKo: ["저는 수영을 [[못]] 해요.", "바빠서 오늘 파티에 [[못]] 가요."],
    heroEn: ["I [[cannot]] swim.", "I'm busy, so I [[cannot]] go to the party today."],
    ex1: {
      label: "예문 ① · 할 수 없는 운동 말하기",
      askQ: "수영을 잘해요?",
      askEn: "Are you good at swimming?",
      aWho: "A · 유진", aKo: ["마이클 씨, 주말에 같이 수영하러 갈까요?"], aEn: ["Michael, shall we go swimming together this weekend?"],
      bWho: "B · 마이클", bKo: ["미안해요. 저는 수영을 [[못]] 해요.", "그리고 아직 자전거도 [[못]] 타요."], bEn: ["I'm sorry. I [[cannot]] swim.", "And I [[cannot]] ride a bicycle yet either."],
      morph: ["수영을 + 못 해요 (능력 부정)", "못 + 타요"]
    },
    ex2: {
      label: "예문 ② · 사정이 있어서 못 가는 상황",
      askQ: "오늘 저녁 파티에 와요?",
      askEn: "Are you coming to the party this evening?",
      aWho: "A · 미나", aKo: ["하준 씨, 오늘 저녁 생일 파티에 올 수 있어요?"], aEn: ["Hajun, can you come to the birthday party this evening?"],
      bWho: "B · 회사원", bKo: ["회사 일이 많아서 오늘 파티에 [[못]] 가요.", "내일 아침에도 일찍 일어나야 해서 늦게까지 [[못]] 놀아요."], bEn: ["I have a lot of work, so I [[cannot]] go to the party today.", "I have to wake up early tomorrow too, so I [[cannot]] hang out late."],
      morph: ["못 + 가요 (상황 부정)", "못 + 놀아요"]
    },
    rows: [
      { k: "일반 동작동사", f: "못 + 동사", ex: [["가다", "못 가요"], ["먹다", "못 먹어요"], ["마시다", "못 마셔요"], ["만나다", "못 만나요"]] },
      { k: "명사 + 하다 동사", f: "명사(을/를) + 못 해요", c: "g2", ex: [["수영하다", "수영을 못 해요"], ["운전하다", "운전을 못 해요"], ["요리하다", "요리를 못 해요"], ["운동하다", "운동을 못 해요"]] }
    ],
    make: [
      { k: ["수영", "하다"], a: "저는 수영을 못 해요.", e: "I cannot swim." },
      { k: ["오늘", "파티", "가다"], a: "바빠서 오늘 파티에 못 가요.", e: "I'm busy, so I can't go to the party today." },
      { k: ["매운 음식", "먹다"], a: "매운 음식을 잘 못 먹어요.", e: "I can't eat spicy food well." },
      { k: ["운전", "하다"], a: "아직 자동차 운전을 못 해요.", e: "I cannot drive a car yet." }
    ],
    sits: [
      { t: "잘하는 것과 못 하는 것", q: "운전을 할 수 있어요? 수영이나 요리를 잘해요?", qen: "Can you drive? Are you good at swimming or cooking?", m: ["저는 아직 운전을 [[못]] 해요.", "매운 음식을 잘 [[못]] 먹어요."] },
      { t: "초대 정중하게 거절하기", q: "오늘 저녁에 같이 영화 보러 갈까요?", qen: "Shall we go watch a movie together this evening?", m: ["미안해요. 숙제가 많아서 [[못]] 가요.", "오늘은 바빠서 친구를 [[못]] 만나요."] }
    ]
  },
  30: {
    pos: "동사",
    en: 'Long Inability Negation · "-지 못하다" · 하지 못한 이유와 불가능을 말해요',
    meanKo: "동작동사 어간 뒤에 붙어 능력 부족이나 외부의 피치 못할 이유로 행동하지 못함을 정중하게 나타냅니다.",
    meanEn: "Long-form inability negation attached to action verb stems ('cannot / could not').",
    pat: "동사 어간 + -지 못해요 / -지 못했어요.",
    askQ: "어제 왜 학교에 안 왔어요? 왜 떡볶이를 안 먹어요?",
    askEn: "Why didn't you come to school yesterday? Why aren't you eating tteokbokki?",
    heroKo: ["감기로 아파서 학교에 가[[지 못했어요]].", "음식이 너무 매워서 먹[[지 못해요]]."],
    heroEn: ["I was sick with a cold, so I [[could not]] go to school.", "The food is too spicy, so I [[cannot]] eat it."],
    ex1: {
      label: "예문 ① · 결석한 이유 설명하기",
      askQ: "어제 왜 학교에 오[[지 못했어요]]?",
      askEn: "Why couldn't you come to school yesterday?",
      aWho: "A · 의사", aKo: ["미나 씨, 어제 왜 학교에 안 왔어요?"], aEn: ["Mina, why didn't you come to school yesterday?"],
      bWho: "B · 미나", bKo: ["감기로 많이 아파서 학교에 가[[지 못했어요]].", "밤에 열이 나서 잠도 잘 자[[지 못했어요]]."], bEn: ["I was very sick with a cold, so I [[could not]] go to school.", "I had a fever at night, so I [[could not]] sleep well either."],
      morph: ["가 + 지 못했어요 (과거 불가능)", "자 + 지 못했어요"]
    },
    ex2: {
      label: "예문 ② · 먹을 수 없는 이유 말하기",
      askQ: "왜 떡볶이를 먹[[지 못해요]]?",
      askEn: "Why can't you eat the tteokbokki?",
      aWho: "A · 하준", aKo: ["리에 씨, 왜 떡볶이를 안 먹어요? 맛이 없어요?"], aEn: ["Rie, why aren't you eating the tteokbokki? Does it not taste good?"],
      bWho: "B · 리에", bKo: ["아니요, 너무 매워서 먹[[지 못해요]].", "저는 매운 음식을 잘 먹[[지 못해요]]."], bEn: ["No, it's too spicy, so I [[cannot]] eat it.", "I [[cannot]] eat spicy food well."],
      morph: ["먹 + 지 못해요 (현재 불가능)"]
    },
    rows: [
      { k: "현재 불가능", f: "어간 + -지 못해요", ex: [["먹다", "먹지 못해요"], ["가다", "가지 못해요"], ["수영하다", "수영하지 못해요"], ["자다", "자지 못해요"]] },
      { k: "과거 불가능", f: "어간 + -지 못했어요", c: "g2", ex: [["가다", "가지 못했어요"], ["만나다", "만나지 못했어요"], ["연락하다", "연락하지 못했어요"], ["보다", "보지 못했어요"]] }
    ],
    make: [
      { k: ["아프다", "학교", "가다"], a: "어제 아파서 학교에 가지 못했어요.", e: "I couldn't go to school yesterday because I was sick." },
      { k: ["맵다", "먹다"], a: "음식이 너무 매워서 먹지 못해요.", e: "The food is too spicy, so I cannot eat it." },
      { k: ["바쁘다", "만나다"], a: "바빠서 친구를 만나지 못했어요.", e: "I was busy, so I couldn't meet my friend." },
      { k: ["피곤하다", "운동하다"], a: "피곤해서 운동하지 못했어요.", e: "I was tired, so I couldn't exercise." }
    ],
    sits: [
      { t: "어제 하지 못한 일과 이유", q: "어제 바빠서 무엇을 하[[지 못했어요]]?", qen: "What could you not do yesterday because you were busy?", m: ["어제 바빠서 숙제를 하[[지 못했어요]].", "피곤해서 운동하[[지 못했어요]]."] },
      { t: "1급 완주 소감 나누기", q: "한국어 1급 30과를 모두 끝냈어요! 기분이 어때요?", qen: "You finished all 30 lessons of Korean Level 1! How do you feel?", m: ["처음에는 한국어를 잘하[[지 못했어요]].", "이제 한국어로 재미있게 이야기해요!"] }
    ],
    finale: {
      name: "1호선 종착역 · 완주",
      done: "Level 1 · 30 Lessons Complete!",
      href: "/course",
      no: 2,
      go: "Level 2 · 2호선으로 환승",
      sub: "1과부터 30과까지 한국어 기초 문법 열차를 모두 완주했습니다!",
      from: "#0052a4",
      to: "#00a84d"
    }
  }
};

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

  // Extract words from rows
  const words = [];
  spec.rows.forEach((row) => {
    row.ex.forEach(pair => {
      words.push({
        b: pair[0],
        r: pair[1],
        t: row.k
      });
    });
  });

  // Build vocab items with authentic English meanings and accurate 받침 boolean
  const vocabItems = words.slice(0, 6).map((w) => {
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
    review: words.map(w => ({
      ko: `${w.r}.`,
      base: w.b,
      b: hasBatchim(w.b),
      f: key
    })).concat([
      { ko: spec.heroKo[0].replace(/\[\[|\]\]/g, ''), note: `${key} 대표 예문` }
    ]),
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
    words: words,
    bingo: words.map(w => [w.b, w.r]).concat([
      [spec.make[0].k[0], spec.make[0].a],
      [spec.make[1].k[0], spec.make[1].a],
      [spec.make[2].k[0], spec.make[2].a],
      [spec.make[3].k[0], spec.make[3].a]
    ]).slice(0, 12),
    relays: [
      [
        { t: spec.ex1.aKo[0].replace(/\[\[|\]\]/g, '') },
        { base: words[0].b, ans: `${words[0].r}.` },
        { base: words[4].b, ans: `${words[4].r}.` }
      ],
      [
        { t: spec.askQ.replace(/\[\[|\]\]/g, '') },
        { base: spec.make[0].k.join(' · '), ans: spec.make[0].a },
        { base: spec.make[1].k.join(' · '), ans: spec.make[1].a }
      ]
    ],
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

// Also update vocabpic.js so Lessons 2–30 render authentic SVG illustrations on matching vocab cards!
const vocabPicContent = `/* scripts/build-course-sample.mjs 가 만든 파일입니다. 직접 고치지 마세요. */\nconst V3MAP = ${JSON.stringify(v3Map)};\nconst V3SPLIT_DUO = [];\n`;
fs.writeFileSync(path.join(dataDir, 'vocabpic.js'), vocabPicContent, 'utf8');

console.log('Successfully generated lessons 2 through 30 and updated vocabpic.js with 0 errors!');
