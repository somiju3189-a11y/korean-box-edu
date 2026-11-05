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

const UNIT_LOOKUP = [
  { no: 1, name: "Unit 1: 나를 소개해요", lessons: [1, 2, 3, 4] },
  { no: 2, name: "Unit 2: 일상을 이야기해요", lessons: [5, 6, 7, 8, 9, 10] },
  { no: 3, name: "Unit 3: 이동과 방향", lessons: [11, 12, 13, 14] },
  { no: 4, name: "Unit 4: 함께하고 덧붙여요", lessons: [15, 16, 17, 18, 19, 20, 21, 22] },
  { no: 5, name: "Unit 5: 시제와 바람", lessons: [23, 24, 25, 26] },
  { no: 6, name: "Unit 6: 정확한 부정", lessons: [27, 28, 29, 30] }
];

// Authentic curriculum data for lessons 2 ~ 30 matching hero-02.svg ~ hero-30.svg 1:1
const LESSON_SPECS = {
  2: {
    pos: "보조사", en: "Topic & Contrast marker · 화제와 대조",
    meanKo: "문장의 화제(주제)를 제시하거나 다른 대상과의 대조를 나타냅니다.",
    meanEn: "Topic and contrast marker.",
    pat: "○○은/는 △△이에요/예요.",
    heroKo: ["저[[는]] 학생이에요.", "선생님[[은]] 한국 사람이에요."],
    heroEn: ["I [[am]] a student.", "The teacher [[is]] Korean."],
    rows: [
      { k: "받침 O", f: "+ 은", ex: [["선생님", "선생님은"], ["이름", "이름은"], ["동생", "동생은"], ["한국", "한국은"]] },
      { k: "받침 X", f: "+ 는", c: "g2", ex: [["저", "저는"], ["친구", "친구는"], ["누나", "누나는"], ["가수", "가수는"]] }
    ],
    make: [
      { k: ["저", "학생"], a: "저는 학생이에요.", e: "I am a student." },
      { k: ["선생님", "한국 사람"], a: "선생님은 한국 사람이에요.", e: "The teacher is Korean." },
      { k: ["제 이름", "민수"], a: "제 이름은 민수예요.", e: "My name is Minsu." },
      { k: ["친구", "의사"], a: "제 친구는 의사예요.", e: "My friend is a doctor." }
    ]
  },
  3: {
    pos: "형용사·존재", en: "Existence & Possession · 소유와 존재",
    meanKo: "사람이나 사물의 존재 및 소유 여부를 나타냅니다.",
    meanEn: "Used to express possession or existence.",
    pat: "○○이/가 있어요/없어요.",
    heroKo: ["책[[이 있어요]].", "시계[[가 없어요]]."],
    heroEn: ["I have a book.", "I don't have a watch."],
    rows: [
      { k: "받침 O", f: "+ 이 있어요/없어요", ex: [["책", "책이 있어요"], ["돈", "돈이 없어요"], ["시간", "시간이 있어요"], ["가방", "가방이 없어요"]] },
      { k: "받침 X", f: "+ 가 있어요/없어요", c: "g2", ex: [["시계", "시계가 없어요"], ["친구", "친구가 있어요"], ["의자", "의자가 있어요"], ["모자", "모자가 없어요"]] }
    ],
    make: [
      { k: ["책", "있다"], a: "책이 있어요.", e: "There is a book." },
      { k: ["시계", "없다"], a: "시계가 없어요.", e: "I don't have a watch." },
      { k: ["오늘", "시간", "있다"], a: "오늘 시간이 있어요.", e: "I have time today." },
      { k: ["지금", "우산", "없다"], a: "지금 우산이 없어요.", e: "I don't have an umbrella now." }
    ]
  },
  4: {
    pos: "서술격 부정", en: "Negation · '~이/가 아닙니다'",
    meanKo: "명사 뒤에 붙어 주어의 신분이나 사실을 부정할 때 씁니다.",
    meanEn: "Negative copula used with 이/가.",
    pat: "○○이/가 아니에요.",
    heroKo: ["학생[[이 아니에요]]. 의사예요.", "커피[[가 아니에요]]. 녹차예요."],
    heroEn: ["I am not a student. I am a doctor.", "It is not coffee. It is green tea."],
    rows: [
      { k: "받침 O", f: "+ 이 아니에요", ex: [["학생", "학생이 아니에요"], ["선생님", "선생님이 아니에요"], ["한국 사람", "한국 사람이 아니에요"], ["가방", "가방이 아니에요"]] },
      { k: "받침 X", f: "+ 가 아니에요", c: "g2", ex: [["의사", "의사가 아니에요"], ["커피", "커피가 아니에요"], ["가수", "가수가 아니에요"], ["요리사", "요리사가 아니에요"]] }
    ],
    make: [
      { k: ["저", "학생"], a: "저는 학생이 아니에요.", e: "I am not a student." },
      { k: ["친구", "의사"], a: "제 친구는 의사가 아니에요.", e: "My friend is not a doctor." },
      { k: ["이거", "커피"], a: "이거는 커피가 아니에요.", e: "This is not coffee." },
      { k: ["저 사람", "선생님"], a: "저 사람은 선생님이 아니에요.", e: "That person is not a teacher." }
    ]
  },
  5: {
    pos: "종결어미", en: "Present Polite Ending · 현재해요체",
    meanKo: "동사나 형용사 뒤에 붙어 현재의 동작이나 상태를 친근하고 공손하게 나타냅니다.",
    meanEn: "Informal polite present tense ending.",
    pat: "동사/형용사 + -아/어요.",
    heroKo: ["한국 음식이 맛있[[어요]].", "매일 한국어를 공부[[해요]]."],
    heroEn: ["Korean food is delicious.", "I study Korean every day."],
    rows: [
      { k: "ㅏ, ㅗ 모음", f: "+ -아요", ex: [["가다", "가요"], ["보다", "봐요"], ["좋다", "좋아요"], ["살다", "살아요"]] },
      { k: "그 외 모음 / 하다", f: "+ -어요 / 해요", c: "g2", ex: [["맛있다", "맛있어요"], ["먹다", "먹어요"], ["공부하다", "공부해요"], ["운동하다", "운동해요"]] }
    ],
    make: [
      { k: ["한국 음식", "맛있다"], a: "한국 음식이 맛있어요.", e: "Korean food is delicious." },
      { k: ["매일", "공부하다"], a: "매일 한국어를 공부해요.", e: "I study Korean every day." },
      { k: ["날씨", "좋다"], a: "오늘 날씨가 좋아요.", e: "The weather is nice today." },
      { k: ["점심", "먹다"], a: "점심을 맛있게 먹어요.", e: "I eat lunch deliciously." }
    ]
  },
  6: {
    pos: "목적격 조사", en: "Object Marker · 목적격 조사",
    meanKo: "명사 뒤에 붙어 동사의 목적어(행동의 대상)임을 나타냅니다.",
    meanEn: "Marks the direct object of an action verb.",
    pat: "○○을/를 + 동사",
    heroKo: ["아침에 커피[[를]] 마셔요.", "재미있는 책[[을]] 읽어요."],
    heroEn: ["I drink coffee in the morning.", "I read an interesting book."],
    rows: [
      { k: "받침 O", f: "+ 을", ex: [["책", "책을 읽어요"], ["밥", "밥을 먹어요"], ["음악", "음악을 들어요"], ["선물", "선물을 사요"]] },
      { k: "받침 X", f: "+ 를", c: "g2", ex: [["커피", "커피를 마셔요"], ["한국어", "한국어를 배워요"], ["영화", "영화를 봐요"], ["친구", "친구를 만나요"]] }
    ],
    make: [
      { k: ["커피", "마시다"], a: "아침에 커피를 마셔요.", e: "I drink coffee in the morning." },
      { k: ["책", "읽다"], a: "재미있는 책을 읽어요.", e: "I read an interesting book." },
      { k: ["밥", "먹다"], a: "점심에 비빔밥을 먹어요.", e: "I eat bibimbap for lunch." },
      { k: ["영화", "보다"], a: "주말에 영화를 봐요.", e: "I watch a movie on the weekend." }
    ]
  },
  7: {
    pos: "주격 조사", en: "Subject Marker · 주격 조사",
    meanKo: "문장의 주어를 나타내며, 특히 새로운 정보나 상태를 묘사할 때 자연스럽게 쓰입니다.",
    meanEn: "Marks the grammatical subject of a sentence.",
    pat: "○○이/가 + 형용사/동사",
    heroKo: ["오늘 날씨[[가]] 참 좋아요.", "공원에 꽃[[이]] 예뻐요."],
    heroEn: ["The weather is really nice today.", "The flowers in the park are pretty."],
    rows: [
      { k: "받침 O", f: "+ 이", ex: [["꽃", "꽃이 예뻐요"], ["음식", "음식이 맛있어요"], ["가방", "가방이 커요"], ["교실", "교실이 넓어요"]] },
      { k: "받침 X", f: "+ 가", c: "g2", ex: [["날씨", "날씨가 좋아요"], ["커피", "커피가 따뜻해요"], ["노래", "노래가 좋아요"], ["비", "비가 와요"]] }
    ],
    make: [
      { k: ["날씨", "좋다"], a: "오늘 날씨가 좋아요.", e: "The weather is nice today." },
      { k: ["꽃", "예쁘다"], a: "공원에 꽃이 예뻐요.", e: "The flowers in the park are pretty." },
      { k: ["음식", "맛있다"], a: "한국 음식이 맛있어요.", e: "Korean food is delicious." },
      { k: ["가방", "크다"], a: "이 가방이 아주 커요.", e: "This bag is very big." }
    ]
  },
  8: {
    pos: "부사격 조사", en: "Location & Destination Marker · 위치와 목적지",
    meanKo: "가거나 오는 이동의 목적지, 또는 사람·사물이 있는 위치를 나타냅니다.",
    meanEn: "Indicates destination (with go/come) or static location.",
    pat: "장소 + 에 가요/와요/있어요.",
    heroKo: ["오늘 학교[[에]] 가요.", "책이 책상 위[[에]] 있어요."],
    heroEn: ["I go to school today.", "The book is on the desk."],
    rows: [
      { k: "이동 목적지", f: "장소 + 에 가요", ex: [["학교", "학교에 가요"], ["집", "집에 가요"], ["회사", "회사에 가요"], ["한국", "한국에 와요"]] },
      { k: "존재 위치", f: "장소 + 에 있어요", c: "g2", ex: [["교실", "교실에 있어요"], ["책상 위", "책상 위에 있어요"], ["가방 안", "가방 안에 있어요"], ["공원", "공원에 있어요"]] }
    ],
    make: [
      { k: ["학교", "가다"], a: "오늘 학교에 가요.", e: "I go to school today." },
      { k: ["책상 위", "있다"], a: "책이 책상 위에 있어요.", e: "The book is on the desk." },
      { k: ["집", "오다"], a: "오후에 집에 와요.", e: "I come home in the afternoon." },
      { k: ["교실", "있다"], a: "친구가 교실에 있어요.", e: "My friend is in the classroom." }
    ]
  },
  9: {
    pos: "부사격 조사", en: "Action Location Marker · 활동 장소",
    meanKo: "구체적인 동작이나 활동이 이루어지는 장소를 나타냅니다.",
    meanEn: "Indicates the location where an action takes place.",
    pat: "장소 + 에서 + 동작동사",
    heroKo: ["도서관[[에서]] 한국어를 공부해요.", "공원[[에서]] 친구와 운동해요."],
    heroEn: ["I study Korean at the library.", "I exercise with my friend at the park."],
    rows: [
      { k: "실내 활동", f: "장소 + 에서", ex: [["도서관", "도서관에서 공부해요"], ["카페", "카페에서 커피를 마셔요"], ["식당", "식당에서 밥을 먹어요"], ["집", "집에서 쉬어요"]] },
      { k: "야외 활동", f: "장소 + 에서", c: "g2", ex: [["공원", "공원에서 운동해요"], ["운동장", "운동장에서 축구해요"], ["백화점", "백화점에서 쇼핑해요"], ["학교", "학교에서 배워요"]] }
    ],
    make: [
      { k: ["도서관", "공부하다"], a: "도서관에서 한국어를 공부해요.", e: "I study Korean at the library." },
      { k: ["공원", "운동하다"], a: "공원에서 아침에 운동해요.", e: "I exercise at the park in the morning." },
      { k: ["카페", "마시다"], a: "카페에서 커피를 마셔요.", e: "I drink coffee at a cafe." },
      { k: ["식당", "먹다"], a: "식당에서 점심을 먹어요.", e: "I eat lunch at a restaurant." }
    ]
  },
  10: {
    pos: "부사격 조사", en: "Time Marker · 시간·시각",
    meanKo: "시간이나 요일, 날짜 뒤에 붙어 동작이 일어나는 때를 나타냅니다. ('오늘, 내일, 어제, 지금' 뒤에는 쓰지 않습니다)",
    meanEn: "Attached to time nouns to indicate when something happens.",
    pat: "시간/요일 + 에",
    heroKo: ["아침 7시[[에]] 일어나요.", "토요일 오후 4시[[에]] 만나요."],
    heroEn: ["I wake up at 7 AM.", "Let's meet at 4 PM on Saturday."],
    rows: [
      { k: "시각·요일", f: "+ 에", ex: [["7시", "7시에 일어나요"], ["4시", "4시에 만나요"], ["토요일", "토요일에 가요"], ["주말", "주말에 쉬어요"]] },
      { k: "'에' 결합 불가", f: "에 X (단독 사용)", c: "g2", ex: [["오늘", "오늘 만나요"], ["내일", "내일 가요"], ["어제", "어제 봤어요"], ["지금", "지금 공부해요"]] }
    ],
    make: [
      { k: ["7시", "일어나다"], a: "아침 7시에 일어나요.", e: "I wake up at 7 AM." },
      { k: ["4시", "만나다"], a: "토요일 오후 4시에 만나요.", e: "We meet at 4 PM on Saturday." },
      { k: ["주말", "쉬다"], a: "주말에 집에서 쉬어요.", e: "I rest at home on the weekend." },
      { k: ["12시", "먹다"], a: "낮 12시에 점심을 먹어요.", e: "I eat lunch at 12 PM." }
    ]
  },
  11: {
    pos: "부사격 조사", en: "Means, Tool & Direction · 수단·도구·방향",
    meanKo: "교통수단, 사용하는 도구·언어, 또는 이동하는 방향을 나타냅니다.",
    meanEn: "Indicates means of transport, instrument/language, or direction.",
    pat: "명사 + (으)로",
    heroKo: ["지하철[[로]] 회사에 가요.", "연필[[로]] 이름을 써요."],
    heroEn: ["I go to the office by subway.", "I write my name with a pencil."],
    rows: [
      { k: "받침 O (ㄹ 제외)", f: "+ 으로", ex: [["트럭", "트럭으로"], ["볼펜", "볼펜으로 써요"], ["오른쪽", "오른쪽으로 가요"], ["젓가락", "젓가락으로 먹어요"]] },
      { k: "받침 X / ㄹ 받침", f: "+ 로", c: "g2", ex: [["지하철", "지하철로 가요"], ["연필", "연필로 써요"], ["버스", "버스로 가요"], ["한국어", "한국어로 말해요"]] }
    ],
    make: [
      { k: ["지하철", "가다"], a: "지하철로 회사에 가요.", e: "I go to work by subway." },
      { k: ["연필", "쓰다"], a: "연필로 이름을 써요.", e: "I write my name with a pencil." },
      { k: ["한국어", "말하다"], a: "교실에서 한국어로 말해요.", e: "We speak in Korean in the classroom." },
      { k: ["버스", "오다"], a: "버스로 학교에 와요.", e: "I come to school by bus." }
    ]
  },
  12: {
    pos: "보조사 결합", en: "From [Place A] To [Place B] · 출발지와 도착지",
    meanKo: "장소의 시작점(출발지)과 끝점(도착지)을 함께 나타냅니다.",
    meanEn: "Expresses spatial range from a starting point to a destination.",
    pat: "장소A에서 장소B까지",
    heroKo: ["서울[[에서]] 부산[[까지]] 기차로 가요.", "집[[에서]] 학교[[까지]] 걸어가요."],
    heroEn: ["I go from Seoul to Busan by train.", "I walk from home to school."],
    rows: [
      { k: "출발지", f: "장소 + 에서", ex: [["서울", "서울에서"], ["집", "집에서"], ["학교", "학교에서"], ["공항", "공항에서"]] },
      { k: "도착지", f: "장소 + 까지", c: "g2", ex: [["부산", "부산까지"], ["회사", "회사까지"], ["도서관", "도서관까지"], ["호텔", "호텔까지"]] }
    ],
    make: [
      { k: ["서울", "부산", "기차"], a: "서울에서 부산까지 기차로 가요.", e: "I go from Seoul to Busan by train." },
      { k: ["집", "학교", "걸어가다"], a: "집에서 학교까지 걸어가요.", e: "I walk from home to school." },
      { k: ["공항", "호텔", "버스"], a: "공항에서 호텔까지 버스로 가요.", e: "I go from the airport to the hotel by bus." },
      { k: ["교실", "식당", "가깝다"], a: "교실에서 식당까지 가까워요.", e: "It is close from the classroom to the cafeteria." }
    ]
  },
  13: {
    pos: "보조사 결합", en: "From [Time A] To [Time B] · 시간의 시작과 끝",
    meanKo: "시간이나 기간의 시작 시점과 종료 시점을 함께 나타냅니다.",
    meanEn: "Expresses temporal range from start time to end time.",
    pat: "시간A부터 시간B까지",
    heroKo: ["아침 9시[[부터]] 저녁 6시[[까지]] 일해요.", "월요일[[부터]] 금요일[[까지]] 공부해요."],
    heroEn: ["I work from 9 AM to 6 PM.", "I study from Monday to Friday."],
    rows: [
      { k: "시작 시각", f: "시간 + 부터", ex: [["9시", "9시부터"], ["아침", "아침부터"], ["월요일", "월요일부터"], ["1월", "1월부터"]] },
      { k: "종료 시각", f: "시간 + 까지", c: "g2", ex: [["6시", "6시까지"], ["저녁", "저녁까지"], ["금요일", "금요일까지"], ["3월", "3월까지"]] }
    ],
    make: [
      { k: ["9시", "6시", "일하다"], a: "아침 9시부터 저녁 6시까지 일해요.", e: "I work from 9 AM to 6 PM." },
      { k: ["월요일", "금요일", "공부하다"], a: "월요일부터 금요일까지 한국어를 공부해요.", e: "I study Korean from Monday to Friday." },
      { k: ["10시", "12시", "수업"], a: "10시부터 12시까지 수업이 있어요.", e: "There is class from 10 to 12." },
      { k: ["아침", "밤", "바쁘다"], a: "아침부터 밤까지 아주 바빠요.", e: "I am very busy from morning till night." }
    ]
  },
  14: {
    pos: "부사격 조사", en: "To [Person] · 행동의 대상(사람·동물)",
    meanKo: "사람이나 동물 뒤에 붙어 어떤 행동이 향하는 대상(수혜자)임을 나타냅니다.",
    meanEn: "Indicates the recipient of an action (to a person/animal).",
    pat: "사람 + 에게 / 한테 (+ 줘요/전화해요)",
    heroKo: ["친구[[한테]] 생일 선물을 줘요.", "선생님[[께]] 한국어로 질문해요."],
    heroEn: ["I give a birthday gift to my friend.", "I ask a question in Korean to the teacher."],
    rows: [
      { k: "구어·문어", f: "+ 한테 / 에게", ex: [["친구", "친구한테 선물을 줘요"], ["동생", "동생한테 전화해요"], ["언니", "언니에게 편지를 써요"], ["강아지", "강아지한테 밥을 줘요"]] },
      { k: "높임 표현", f: "+ 께 (드리다/질문하다)", c: "g2", ex: [["선생님", "선생님께 질문해요"], ["부모님", "부모님께 선물을 드려요"], ["할머니", "할머니께 전화드려요"], ["교수님", "교수님께 인사해요"]] }
    ],
    make: [
      { k: ["친구", "선물", "주다"], a: "친구한테 생일 선물을 줘요.", e: "I give a birthday gift to my friend." },
      { k: ["동생", "전화하다"], a: "저녁에 동생한테 전화해요.", e: "I call my younger sibling in the evening." },
      { k: ["선생님", "질문하다"], a: "선생님께 한국어로 질문해요.", e: "I ask a question to the teacher in Korean." },
      { k: ["언니", "문자", "보내다"], a: "언니에게 문자를 보내요.", e: "I send a text message to my older sister." }
    ]
  },
  15: {
    pos: "보조사", en: "Also / Too · 포함과 추가",
    meanKo: "이미 말한 내용에 다른 대상을 똑같이 덧붙이거나 공감할 때 씁니다.",
    meanEn: "Means 'also' or 'too'; replaces 이/가 and 을/를.",
    pat: "○○도 △△이에요/예요.",
    heroKo: ["저는 학생이에요. 저[[도]] 학생이에요!", "커피를 좋아해요. 주스[[도]] 좋아해요."],
    heroEn: ["I am a student. I am [[also]] a student!", "I like coffee. I [[also]] like juice."],
    rows: [
      { k: "주어에 결합", f: "이/가 → 도", ex: [["저", "저도 학생이에요"], ["친구", "친구도 한국 사람이에요"], ["동생", "동생도 와요"], ["선생님", "선생님도 계세요"]] },
      { k: "목적어에 결합", f: "을/를 → 도", c: "g2", ex: [["커피", "커피도 마셔요"], ["책", "책도 읽어요"], ["한국어", "한국어도 배워요"], ["운동", "운동도 좋아해요"]] }
    ],
    make: [
      { k: ["저", "학생"], a: "저도 한국어 학생이에요.", e: "I am also a Korean language student." },
      { k: ["주스", "좋아하다"], a: "커피를 좋아해요. 주스도 좋아해요.", e: "I like coffee. I also like juice." },
      { k: ["친구", "오다"], a: "오늘 파티에 친구도 와요.", e: "My friend is also coming to the party today." },
      { k: ["책", "사다"], a: "가방을 사요. 책도 사요.", e: "I buy a bag. I also buy a book." }
    ]
  },
  16: {
    pos: "접속 조사", en: "And / With · 나열과 동반",
    meanKo: "두 개 이상의 명사를 대등하게 연결하거나('~와/과'), 함께 행동하는 동반자를 나타냅니다.",
    meanEn: "Connects nouns ('and') or indicates doing something together ('with').",
    pat: "명사A + 하고 / (이)랑 / 와/과 + 명사B",
    heroKo: ["카페에서 빵[[하고]] 커피를 먹어요.", "주말에 친구[[랑]] 영화를 봐요."],
    heroEn: ["I have bread [[and]] coffee at the cafe.", "I watch a movie [[with]] my friend on the weekend."],
    rows: [
      { k: "받침 무관", f: "+ 하고", ex: [["빵", "빵하고 커피"], ["책", "책하고 연필"], ["친구", "구하고 같이"], ["선생님", "선생님하고 대화해요"]] },
      { k: "받침 O / X", f: "+ 이랑/랑 · 과/와", c: "g2", ex: [["가방", "가방이랑 모자"], ["친구", "친구랑 영화를 봐요"], ["책", "책과 공책"], ["우유", "우유와 빵"]] }
    ],
    make: [
      { k: ["빵", "커피", "먹다"], a: "아침에 빵하고 커피를 먹어요.", e: "I have bread and coffee in the morning." },
      { k: ["친구", "영화", "보다"], a: "주말에 친구랑 영화를 봐요.", e: "I watch a movie with my friend on the weekend." },
      { k: ["책", "연필", "사다"], a: "문구점에서 책과 연필을 사요.", e: "I buy a book and a pencil at the stationery store." },
      { k: ["가족", "여행", "가다"], a: "방학에 가족하고 여행을 가요.", e: "I go on a trip with my family during vacation." }
    ]
  },
  17: {
    pos: "보조사", en: "Only · 단독과 한정",
    meanKo: "다른 것은 제외하고 오직 그 대상 하나뿐임을 강조할 때 씁니다.",
    meanEn: "Means 'only' or 'just'.",
    pat: "명사 + 만",
    heroKo: ["아침에 커피[[만]] 마셔요.", "일요일에 집[[에만]] 있어요."],
    heroEn: ["I drink [[only]] coffee in the morning.", "I stay [[only]] at home on Sunday."],
    rows: [
      { k: "주어·목적어", f: "명사 + 만", ex: [["커피", "커피만 마셔요"], ["물", "물만 마셔요"], ["저", "저만 학생이에요"], ["조금", "조금만 주세요"]] },
      { k: "장소·시간 조사 결합", f: "에 + 만 → 에만", c: "g2", ex: [["집", "집에만 있어요"], ["주말", "주말에만 쉬어요"], ["아침", "아침에만 운동해요"], ["교실", "교실에만 있어요"]] }
    ],
    make: [
      { k: ["아침", "커피", "마시다"], a: "아침에 커피만 마셔요.", e: "I only drink coffee in the morning." },
      { k: ["일요일", "집", "있다"], a: "일요일에 집에만 있어요.", e: "I stay only at home on Sunday." },
      { k: ["물", "한 잔", "주다"], a: "시원한 물만 한 잔 주세요.", e: "Please give me just one glass of cool water." },
      { k: ["오늘", "조금", "일하다"], a: "오늘은 조금만 일해요.", e: "I work only a little today." }
    ]
  },
  18: {
    pos: "접속 조사", en: "Or · 선택",
    meanKo: "두 가지 이상의 대상 중에서 어느 하나를 선택할 때 씁니다.",
    meanEn: "Used between nouns to mean 'or'.",
    pat: "명사A(이)나 명사B",
    heroKo: ["카페에서 커피[[나]] 주스를 마셔요.", "토요일[[이나]] 일요일에 만나요."],
    heroEn: ["I drink coffee [[or]] juice at the cafe.", "Let's meet on Saturday [[or]] Sunday."],
    rows: [
      { k: "받침 O", f: "+ 이나", ex: [["빵", "빵이나 밥"], ["토요일", "토요일이나 일요일"], ["책", "책이나 신문"], ["지하철", "지하철이나 버스"]] },
      { k: "받침 X", f: "+ 나", c: "g2", ex: [["커피", "커피나 주스"], ["버스", "버스나 택시"], ["영화", "영화나 드라마"], ["아침", "아침이나 저녁"]] }
    ],
    make: [
      { k: ["커피", "주스", "마시다"], a: "카페에서 커피나 주스를 마셔요.", e: "I drink coffee or juice at the cafe." },
      { k: ["토요일", "일요일", "만나다"], a: "토요일이나 일요일에 친구를 만나요.", e: "I meet my friend on Saturday or Sunday." },
      { k: ["버스", "지하철", "타다"], a: "버스나 지하철을 타고 가요.", e: "I go by bus or subway." },
      { k: ["빵", "과일", "먹다"], a: "아침에 빵이나 과일을 먹어요.", e: "I eat bread or fruit in the morning." }
    ]
  },
  19: {
    pos: "보조사", en: "Every / Each · 빠짐없는 반복",
    meanKo: "시간이나 장소, 사람 뒤에 붙어 '모두 빠짐없이 규칙적으로'라는 뜻을 나타냅니다.",
    meanEn: "Means 'every' or 'each' (e.g., every morning, every weekend).",
    pat: "시간/명사 + 마다",
    heroKo: ["아침[[마다]] 공원에서 운동해요.", "주말[[마다]] 한국 영화를 봐요."],
    heroEn: ["I exercise at the park [[every]] morning.", "I watch Korean movies [[every]] weekend."],
    rows: [
      { k: "시간의 반복", f: "시간 + 마다", ex: [["아침", "아침마다 운동해요"], ["날", "날마다 공부해요"], ["주말", "주말마다 쉬어요"], ["방학", "방학마다 여행해요"]] },
      { k: "대상의 전체", f: "명사 + 마다", c: "g2", ex: [["사람", "사람마다 달라요"], ["나라", "나라마다 문화가 있어요"], ["교실", "교실마다 시계가 있어요"], ["학생", "학생마다 책이 있어요"]] }
    ],
    make: [
      { k: ["아침", "공원", "운동하다"], a: "아침마다 공원에서 운동해요.", e: "I exercise at the park every morning." },
      { k: ["날", "한국어", "공부하다"], a: "날마다 한국어를 열심히 공부해요.", e: "I study Korean hard every day." },
      { k: ["주말", "친구", "만나다"], a: "주말마다 친구를 만나요.", e: "I meet my friends every weekend." },
      { k: ["사람", "생각", "다르다"], a: "사람마다 생각이 달라요.", e: "Every person has different thoughts." }
    ]
  },
  20: {
    pos: "관형격 조사", en: "Possessive Marker · 소유와 소속 ('s / of)",
    meanKo: "앞 명사가 뒤 명사의 소유주이거나 소속임을 나타냅니다.",
    meanEn: "Possessive particle equivalent to 's or 'of'.",
    pat: "사람/명사 + 의 + 물건",
    heroKo: ["이거는 리에 씨[[의]] 가방이에요.", "저거는 선생님[[의]] 책이에요."],
    heroEn: ["This is Rie[['s]] bag.", "That is the teacher[['s]] book."],
    rows: [
      { k: "사람의 소유", f: "이름/직업 + 의", ex: [["리에 씨", "리에 씨의 가방"], ["선생님", "선생님의 책"], ["친구", "친구의 시계"], ["의사", "의사의 가운"]] },
      { k: "대명사 축약", f: "저/나/너 + 의 → 제/내/네", c: "g2", ex: [["저 + 의", "제 가방이에요"], ["나 + 의", "내 친구예요"], ["우리", "우리 학교예요"], ["한국", "한국의 음식"]] }
    ],
    make: [
      { k: ["리에 씨", "가방"], a: "이거는 리에 씨의 가방이에요.", e: "This is Rie's bag." },
      { k: ["선생님", "책"], a: "책상 위에 선생님의 책이 있어요.", e: "The teacher's book is on the desk." },
      { k: ["저", "컴퓨터"], a: "이거는 제 컴퓨터예요.", e: "This is my computer." },
      { k: ["친구", "우산"], a: "저거는 제 친구의 우산이에요.", e: "That is my friend's umbrella." }
    ]
  },
  21: {
    pos: "비교 부사격 조사", en: "Comparative Marker · 비교 ('than')",
    meanKo: "두 대상을 비교할 때 비교의 기준이 되는 말 뒤에 붙여 '~보다 (더)'의 뜻을 나타냅니다.",
    meanEn: "Used to compare two things; attaches to the standard of comparison ('than').",
    pat: "A이/가 B보다 (더) + 형용사",
    heroKo: ["비행기가 기차[[보다]] 더 빨라요.", "부산이 서울[[보다]] 따뜻해요."],
    heroEn: ["An airplane is faster [[than]] a train.", "Busan is warmer [[than]] Seoul."],
    rows: [
      { k: "속도·크기 비교", f: "기준 명사 + 보다", ex: [["기차", "비행기가 기차보다 빨라요"], ["버스", "지하철이 버스보다 빨라요"], ["사과", "수박이 사과보다 커요"], ["어제", "오늘이 어제보다 좋아요"]] },
      { k: "날씨·성질 비교", f: "기준 명사 + 보다 더", c: "g2", ex: [["서울", "부산이 서울보다 더 따뜻해요"], ["여름", "겨울보다 여름이 더 좋아요"], ["영어", "한국어가 더 재미있어요"], ["커피", "녹차보다 커피를 더 좋아해요"]] }
    ],
    make: [
      { k: ["비행기", "기차", "빠르다"], a: "비행기가 기차보다 더 빨라요.", e: "Airplanes are faster than trains." },
      { k: ["부산", "서울", "따뜻하다"], a: "부산이 서울보다 따뜻해요.", e: "Busan is warmer than Seoul." },
      { k: ["수박", "사과", "크다"], a: "수박이 사과보다 아주 커요.", e: "Watermelons are much bigger than apples." },
      { k: ["오늘", "어제", "시원하다"], a: "오늘이 어제보다 시원해요.", e: "Today is cooler than yesterday." }
    ]
  },
  22: {
    pos: "보조사", en: "Simile Marker · 비유 ('like / as')",
    meanKo: "어떤 모양이나 행동이 앞의 명사와 비슷하거나 같음을 비유할 때 씁니다.",
    meanEn: "Expresses similarity or comparison ('like' or 'as').",
    pat: "명사 + 처럼 / 같이",
    heroKo: ["리에 씨는 가수[[처럼]] 노래를 잘해요.", "마음이 천사[[같이]] 정말 착해요."],
    heroEn: ["Rie sings well [[like]] a singer.", "She has a kind heart [[like]] an angel."],
    rows: [
      { k: "직업·인물 비유", f: "명사 + 처럼", ex: [["가수", "가수처럼 노래해요"], ["한국 사람", "한국 사람처럼 말해요"], ["요리사", "요리사처럼 요리를 잘해요"], ["영화배우", "배우처럼 멋있어요"]] },
      { k: "관용적 비유", f: "명사 + 같이 / 처럼", c: "g2", ex: [["천사", "천사같이 착해요"], ["가족", "가족처럼 친해요"], ["눈", "눈처럼 하얘요"], ["보석", "보석같이 빛나요"]] }
    ],
    make: [
      { k: ["가수", "노래", "잘하다"], a: "리에 씨는 가수처럼 노래를 잘해요.", e: "Rie sings well like a professional singer." },
      { k: ["천사", "착하다"], a: "제 친구는 천사같이 착해요.", e: "My friend is kind like an angel." },
      { k: ["한국 사람", "말하다"], a: "마이클 씨는 한국 사람처럼 한국어를 잘해요.", e: "Michael speaks Korean well like a native Korean." },
      { k: ["가족", "지내다"], a: "우리는 가족처럼 친하게 지내요.", e: "We get along closely like family." }
    ]
  },
  23: {
    pos: "과거 시제 선어말어미", en: "Past Tense Marker · 과거 시제",
    meanKo: "동사나 형용사 어간에 붙어 이미 지나간 과거의 일이나 완료된 상태를 나타냅니다.",
    meanEn: "Past tense marker attached to verb or adjective stems.",
    pat: "어간 + -았/었어요.",
    heroKo: ["어제 카페에서 친구를 만[[났어요]].", "지난 주말에 재미있는 영화를 [[봤어요]]."],
    heroEn: ["I [[met]] my friend at a cafe yesterday.", "I [[watched]] an interesting movie last weekend."],
    rows: [
      { k: "ㅏ, ㅗ 어간", f: "+ -았어요", ex: [["만나다", "만났어요"], ["보다", "봤어요"], ["가다", "갔어요"], ["좋다", "좋았어요"]] },
      { k: "그 외 모음 / 하다", f: "+ -었어요 / 했어요", c: "g2", ex: [["먹다", "먹었어요"], ["읽다", "읽었어요"], ["공부하다", "공부했어요"], ["운동하다", "운동했어요"]] }
    ],
    make: [
      { k: ["어제", "친구", "만나다"], a: "어제 카페에서 친구를 만났어요.", e: "I met my friend at a cafe yesterday." },
      { k: ["주말", "영화", "보다"], a: "주말에 재미있는 영화를 봤어요.", e: "I watched an interesting movie on the weekend." },
      { k: ["아침", "빵", "먹다"], a: "오늘 아침에 빵을 먹었어요.", e: "I ate bread this morning." },
      { k: ["도서관", "공부하다"], a: "어제 도서관에서 한국어를 공부했어요.", e: "I studied Korean at the library yesterday." }
    ]
  },
  24: {
    pos: "미래·계획 표현", en: "Future Plan & Intention · 미래 계획과 추측",
    meanKo: "앞으로 할 계획이나 의지, 또는 미래에 대한 추측을 나타냅니다.",
    meanEn: "Expresses future plans, intentions, or supposition ('will / going to').",
    pat: "동사 어간 + -(으)ㄹ 거예요.",
    heroKo: ["이번 주말에 부산으로 여행을 [[갈 거예요]].", "방학에 한국어를 열심히 공부[[할 거예요]]."],
    heroEn: ["I [[am going to]] travel to Busan this weekend.", "I [[will]] study Korean hard during vacation."],
    rows: [
      { k: "받침 X / ㄹ 받침", f: "+ -ㄹ 거예요", ex: [["가다", "갈 거예요"], ["보다", "볼 거예요"], ["마시다", "마실 거예요"], ["공부하다", "공부할 거예요"]] },
      { k: "받침 O", f: "+ -을 거예요", c: "g2", ex: [["먹다", "먹을 거예요"], ["읽다", "읽을 거예요"], ["입다", "입을 거예요"], ["찾다", "찾을 거예요"]] }
    ],
    make: [
      { k: ["주말", "여행", "가다"], a: "주말에 부산으로 여행을 갈 거예요.", e: "I will go on a trip to Busan on the weekend." },
      { k: ["방학", "공부하다"], a: "방학에 한국어를 열심히 공부할 거예요.", e: "I will study Korean hard during vacation." },
      { k: ["내일", "친구", "만나다"], a: "내일 오후에 친구를 만날 거예요.", e: "I am going to meet my friend tomorrow afternoon." },
      { k: ["저녁", "비빔밥", "먹다"], a: "오늘 저녁에 비빔밥을 먹을 거예요.", e: "I will eat bibimbap this evening." }
    ]
  },
  25: {
    pos: "진행 보조용언", en: "Present Progressive · 현재 진행 ('-ing')",
    meanKo: "동사 뒤에 붙어 지금 현재 어떤 동작이 계속 진행 중임을 나타냅니다.",
    meanEn: "Indicates an action currently in progress ('is/am/are doing').",
    pat: "동사 어간 + -고 있어요.",
    heroKo: ["리에 씨는 지금 커피를 마시[[고 있어요]].", "교실에서 한국어를 공부하[[고 있어요]]."],
    heroEn: ["Rie [[is drinking]] coffee right now.", "I [[am studying]] Korean in the classroom."],
    rows: [
      { k: "일상 동작", f: "+ -고 있어요", ex: [["마시다", "마시고 있어요"], ["먹다", "먹고 있어요"], ["읽다", "읽고 있어요"], ["보다", "보고 있어요"]] },
      { k: "하다 동사 / 높임", f: "+ -고 있어요 / 계세요", c: "g2", ex: [["공부하다", "공부하고 있어요"], ["운동하다", "운동하고 있어요"], ["전화하다", "전화하고 있어요"], ["오다", "오고 있어요"]] }
    ],
    make: [
      { k: ["지금", "커피", "마시다"], a: "지금 카페에서 커피를 마시고 있어요.", e: "I am drinking coffee at the cafe right now." },
      { k: ["한국어", "공부하다"], a: "교실에서 한국어를 공부하고 있어요.", e: "I am studying Korean in the classroom." },
      { k: ["책", "읽다"], a: "도서관에서 책을 읽고 있어요.", e: "I am reading a book at the library." },
      { k: ["친구", "기다리다"], a: "역 앞에서 친구를 기다리고 있어요.", e: "I am waiting for my friend in front of the station." }
    ]
  },
  26: {
    pos: "선어말어미", en: "Supposition & Intention · 추측과 의지",
    meanKo: "눈앞의 상황을 보고 직관적으로 추측하거나('맛있겠어요!'), 말하는 사람의 의지를 나타냅니다.",
    meanEn: "Expresses intuitive supposition ('looks/sounds like') or speaker's intention.",
    pat: "동사/형용사 어간 + -겠어요.",
    heroKo: ["와, 한국 음식이 정말 맛있[[겠어요]]!", "내일은 날씨가 아주 좋[[겠어요]]."],
    heroEn: ["Wow, the Korean food [[looks like it will]] be delicious!", "The weather [[will probably]] be very nice tomorrow."],
    rows: [
      { k: "직관적 추측", f: "형용사 + -겠어요", ex: [["맛있다", "맛있겠어요!"], ["재미있다", "재미있겠어요!"], ["좋다", "좋겠어요!"], ["바쁘다", "바쁘겠어요!"]] },
      { k: "화자의 의지·인사", f: "동사 + -겠어요/겠습니다", c: "g2", ex: [["먹다", "잘 먹겠습니다!"], ["하다", "제가 하겠어요"], ["가다", "먼저 가겠습니다"], ["알다", "네, 알겠어요"]] }
    ],
    make: [
      { k: ["음식", "맛있다"], a: "와, 이 음식이 정말 맛있겠어요!", e: "Wow, this food looks so delicious!" },
      { k: ["여행", "재미있다"], a: "주말 여행이 아주 재미있겠어요.", e: "The weekend trip sounds like it will be very fun." },
      { k: ["내일", "날씨", "좋다"], a: "내일은 날씨가 참 좋겠어요.", e: "The weather will probably be very nice tomorrow." },
      { k: ["잘", "먹다"], a: "정성스러운 음식 잘 먹겠습니다!", e: "Thank you for the meal, I will enjoy it!" }
    ]
  },
  27: {
    pos: "부정 부사", en: "Short Form Negation · 의지·단순 부정 ('not')",
    meanKo: "동사나 형용사 바로 앞에 놓여 주어의 의지로 하지 않거나 상태가 그러하지 않음을 나타냅니다.",
    meanEn: "Placed directly before a verb/adjective to negate it ('do not / is not').",
    pat: "안 + 동사/형용사 (명사 + 안 해요)",
    heroKo: ["일요일에는 학교에 [[안]] 가요.", "이 가방은 [[안]] 비싸요."],
    heroEn: ["I [[do not]] go to school on Sundays.", "This bag [[is not]] expensive."],
    rows: [
      { k: "일반 동사·형용사", f: "안 + 용언", ex: [["가다", "안 가요"], ["먹다", "안 먹어요"], ["비싸다", "안 비싸요"], ["춥다", "안 추워요"]] },
      { k: "명사 + 하다 동사", f: "명사(을/를) + 안 해요", c: "g2", ex: [["공부하다", "공부를 안 해요"], ["운동하다", "운동을 안 해요"], ["일하다", "일을 안 해요"], ["요리하다", "요리를 안 해요"]] }
    ],
    make: [
      { k: ["일요일", "학교", "가다"], a: "일요일에는 학교에 안 가요.", e: "I don't go to school on Sundays." },
      { k: ["가방", "비싸다"], a: "이 가방은 안 비싸요.", e: "This bag is not expensive." },
      { k: ["아침", "먹다"], a: "오늘 아침을 안 먹었어요.", e: "I didn't eat breakfast today." },
      { k: ["오늘", "춥다"], a: "오늘은 날씨가 안 추워요.", e: "The weather is not cold today." }
    ]
  },
  28: {
    pos: "부정 보조용언", en: "Long Form Negation · 긴 부정문 ('-지 않아요')",
    meanKo: "동사나 형용사 어간 뒤에 붙어 부정적인 사실이나 상태를 차분하고 명확하게 나타냅니다.",
    meanEn: "Long-form negation attached to any verb or adjective stem.",
    pat: "동사/형용사 어간 + -지 않아요.",
    heroKo: ["한국어 공부가 어렵[[지 않아요]].", "이 음식은 하나도 맵[[지 않아요]]."],
    heroEn: ["Studying Korean [[is not]] difficult.", "This food [[is not]] spicy at all."],
    rows: [
      { k: "형용사 부정", f: "어간 + -지 않아요", ex: [["어렵다", "어렵지 않아요"], ["맵다", "맵지 않아요"], ["비싸다", "비싸지 않아요"], ["멀다", "멀지 않아요"]] },
      { k: "동사 부정", f: "어간 + -지 않아요", c: "g2", ex: [["가다", "가지 않아요"], ["먹다", "먹지 않아요"], ["공부하다", "공부하지 않아요"], ["늦다", "늦지 않아요"]] }
    ],
    make: [
      { k: ["한국어", "어렵다"], a: "한국어 공부가 어렵지 않아요.", e: "Studying Korean is not difficult." },
      { k: ["음식", "맵다"], a: "이 음식은 맵지 않아요.", e: "This food is not spicy." },
      { k: ["학교", "멀다"], a: "집에서 학교가 멀지 않아요.", e: "The school is not far from home." },
      { k: ["주말", "일하다"], a: "주말에는 일하지 않아요.", e: "I do not work on weekends." }
    ]
  },
  29: {
    pos: "능력 부정 부사", en: "Inability Negation · 능력·상황 부정 ('cannot')",
    meanKo: "동사 앞에 놓여 능력이 없거나 외부 사정 때문에 어떤 행동을 할 수 없음을 나타냅니다.",
    meanEn: "Placed before action verbs to express inability or impossibility ('cannot').",
    pat: "못 + 동사 (명사 + 못 해요)",
    heroKo: ["저는 수영을 [[못]] 해요.", "바빠서 오늘 파티에 [[못]] 가요."],
    heroEn: ["I [[cannot]] swim.", "I'm busy so I [[cannot]] go to the party today."],
    rows: [
      { k: "일반 동작동사", f: "못 + 동사", ex: [["가다", "못 가요"], ["먹다", "못 먹어요"], ["마시다", "못 마셔요"], ["만나다", "못 만나요"]] },
      { k: "명사 + 하다 동사", f: "명사(을/를) + 못 해요", c: "g2", ex: [["수영하다", "수영을 못 해요"], ["운전하다", "운전을 못 해요"], ["요리하다", "요리를 못 해요"], ["운동하다", "운동을 못 해요"]] }
    ],
    make: [
      { k: ["수영", "하다"], a: "저는 수영을 못 해요.", e: "I cannot swim." },
      { k: ["오늘", "파티", "가다"], a: "바빠서 오늘 파티에 못 가요.", e: "I'm busy so I can't go to the party today." },
      { k: ["매운 음식", "먹다"], a: "매운 음식을 잘 못 먹어요.", e: "I can't eat spicy food well." },
      { k: ["운전", "하다"], a: "아직 자동차 운전을 못 해요.", e: "I cannot drive a car yet." }
    ]
  },
  30: {
    pos: "능력 부정 보조용언", en: "Long Inability Negation · 긴 능력 부정 ('-지 못해요')",
    meanKo: "동사 어간 뒤에 붙어 능력 부족이나 피치 못할 이유로 행동하지 못함을 정중하게 나타냅니다.",
    meanEn: "Long-form inability negation attached to action verb stems ('cannot / could not').",
    pat: "동사 어간 + -지 못해요 / -지 못했어요.",
    heroKo: ["아파서 학교에 가[[지 못했어요]].", "음식이 너무 매워서 먹[[지 못해요]]."],
    heroEn: ["I was sick so I [[could not]] go to school.", "The food is too spicy so I [[cannot]] eat it."],
    rows: [
      { k: "현재 불가능", f: "어간 + -지 못해요", ex: [["먹다", "먹지 못해요"], ["가다", "가지 못해요"], ["수영하다", "수영하지 못해요"], ["자다", "자지 못해요"]] },
      { k: "과거 불가능", f: "어간 + -지 못했어요", c: "g2", ex: [["가다", "가지 못했어요"], ["만나다", "만나지 못했어요"], ["연락하다", "연락하지 못했어요"], ["보다", "보지 못했어요"]] }
    ],
    make: [
      { k: ["아프다", "학교", "가다"], a: "어제 아파서 학교에 가지 못했어요.", e: "I couldn't go to school yesterday because I was sick." },
      { k: ["맵다", "먹다"], a: "음식이 너무 매워서 먹지 못해요.", e: "The food is too spicy so I cannot eat it." },
      { k: ["바쁘다", "만나다"], a: "바빠서 친구를 만나지 못했어요.", e: "I was busy so I couldn't meet my friend." },
      { k: ["피곤하다", "운동하다"], a: "피곤해서 운동하지 못했어요.", e: "I was tired so I couldn't exercise." }
    ]
  }
};

const dataDir = path.resolve('public/course/sample/data');

for (let n = 2; n <= 30; n++) {
  const key = ORDER[n - 1];
  const spec = LESSON_SPECS[n];
  const unitObj = UNIT_LOOKUP.find(u => u.lessons.includes(n));
  const unitName = unitObj ? unitObj.name : "Unit 1";

  // Extract words from rows
  const words = [];
  spec.rows.forEach((row, rIdx) => {
    row.ex.forEach(pair => {
      words.push({
        b: pair[0],
        r: pair[1],
        t: row.k
      });
    });
  });

  const vocabEmojis = ["🏫", "📕", "☕", "👫", "⏰", "🚇", "🎁", "🎬"];
  const vocabItems = words.slice(0, 6).map((w, idx) => ({
    e: vocabEmojis[idx % vocabEmojis.length],
    w: w.b,
    g: spec.en.split('·')[0].trim(),
    r: w.r,
    b: idx % 2 === 0
  }));

  const sitKey = key === "(으)로 (수단·방향)" ? "(으)로 (수단)" : key;
  const rawSitList = SITGO[sitKey] || SITGO[key] || [];
  const sitList = rawSitList.length > 0 ? rawSitList.map((s, idx) => ({
    i: ["👋", "📕", "💼", "🌏"][idx % 4],
    t: `상황 대화 ${idx + 1}`,
    v: key,
    q: s.go || `${key} 표현으로 대화해 보세요.`,
    qen: s.go || `Practice ${key}`,
    m: spec.heroKo,
    memo: s.memo || "교사와 학생이 역할을 바꾸어 묻고 답합니다.",
    go: s.go || "Ask and answer with teacher."
  })) : [
    {
      i: "👋",
      t: "실전 상황 대화",
      v: key,
      q: spec.heroKo[0].replace(/\[\[|\]\]/g, ''),
      qen: spec.heroEn[0].replace(/\[\[|\]\]/g, ''),
      m: spec.heroKo,
      memo: "그림 속 상황을 보며 질문과 대답을 번갈아 연습합니다."
    }
  ];

  const numStr = String(n).padStart(2, '0');
  const heroScenePath = `/course/sample/scenes/hero-${numStr}.svg`;

  const lessonObj = {
    key: key,
    pos: spec.pos,
    form: key,
    opening: {
      name: `${n}호선 출발 · ${key}`,
      no: n,
      line: `Level 1 · ${unitName}`,
      color: "#0052a4",
      en: `${spec.en}<br>Practice everyday Korean step by step.`,
      board: `Departing · Lesson ${n}`,
      next: `Next: ${key}`,
      stops: ["Unit 1", "Unit 2", "Unit 3", "Unit 4", "Unit 5", "Unit 6"]
    },
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
      { ko: "그림 속 실제 상황과 핵심 표현을 연결하며 큰 소리로 따라 말해 보세요.", en: "Connect the illustration with the key expression and repeat aloud." },
      { ko: "받침 유무와 결합 형태 변화에 주의하세요.", en: "Pay attention to form changes based on final consonants." }
    ],
    ask: {
      q: spec.heroKo[0].replace(/\[\[|\]\]/g, ''),
      en: spec.heroEn[0].replace(/\[\[|\]\]/g, '')
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
        label: `예문 ① · ${key} 핵심 상황`,
        scene: heroScenePath,
        ask: { q: spec.heroKo[0].replace(/\[\[|\]\]/g, ''), en: spec.heroEn[0].replace(/\[\[|\]\]/g, '') },
        pic: [{ e: "🙋", c: key, t: "navy" }],
        a: { who: "A · 마이클", ko: [spec.heroKo[0]], en: [spec.heroEn[0]] },
        b: { who: "B · 수진", ko: [spec.heroKo[1]], en: [spec.heroEn[1]] },
        morph: [key + " 핵심 표현", spec.pos]
      },
      {
        label: `예문 ② · 실전 응용 대화`,
        scene: heroScenePath,
        ask: { q: spec.make[2].a, en: spec.make[2].e },
        pic: [{ e: "🗣️", c: "응용", t: "accent" }],
        a: { who: "A · 유진", ko: [spec.make[2].a], en: [spec.make[2].e] },
        b: { who: "B · 하준", ko: [spec.make[3].a], en: [spec.make[3].e] },
        morph: [key + " 실전 활용"]
      }
    ],
    review: words.map(w => ({
      ko: `${w.r}.`,
      base: w.b,
      b: w.t.includes('O'),
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
      { c: "navy", h: `💡 TIP ② · 대표 상황 예문`, p: `${spec.meanKo}<br><br>· ${spec.heroKo[0].replace(/\[\[|\]\]/g, '')}<br>· ${spec.heroKo[1].replace(/\[\[|\]\]/g, '')}` },
      { c: "teal", h: `💡 TIP ③ · 자연스러운 억양과 발음`, p: `문장 패턴 <b>${spec.pat}</b>에 맞추어 자연스럽게 이어서 발음해 보세요.` }
    ],
    tipsEn: [
      spec.meanEn,
      "Practice the representative sentences with the situation illustration."
    ],
    words: words,
    bingo: words.map(w => [w.b, w.r]).concat([
      ["한국어", spec.make[0].a],
      ["연습", spec.make[1].a],
      ["대화", spec.make[2].a],
      ["오늘", spec.make[3].a]
    ]).slice(0, 12),
    relays: [
      [{ t: `${key} 형태 연습` }, { base: words[0].b, ans: words[0].r }, { base: words[4].b, ans: words[4].r }],
      [{ t: "상황 문장 말하기" }, { base: spec.make[0].k.join(' + '), ans: spec.make[0].a }, { base: spec.make[1].k.join(' + '), ans: spec.make[1].a }]
    ],
    make: spec.make,
    vocab: [
      {
        tag: key,
        icon: "📖",
        q: `${key} 핵심 어휘와 표현을 연습해 보세요.`,
        qen: `Practice ${key} vocabulary and expressions.`,
        pat: spec.pat,
        items: vocabItems
      }
    ],
    sit: sitList,
    wrap: {
      ex: [
        { ko: spec.heroKo, en: spec.heroEn }
      ],
      tips: [
        `<b>${key}</b>: ${spec.meanKo}`,
        `대표 문장: "${spec.heroKo[0].replace(/\[\[|\]\]/g, '')}"`,
        `대표 문장: "${spec.heroKo[1].replace(/\[\[|\]\]/g, '')}"`
      ]
    }
  };

  const jsContent = `/* Lesson ${n}: ${key} · 100% Authentic Situation-Matched Data */\nLESSONS.push(${JSON.stringify(lessonObj, null, 2)});\n`;
  fs.writeFileSync(path.join(dataDir, `lesson${n}.js`), jsContent, 'utf8');
}

console.log('Successfully generated lessons 2 through 30 with 100% situation-matched Korean sentences and grammar rules!');
