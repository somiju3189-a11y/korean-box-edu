import fs from 'fs';
import path from 'path';

// Load authentic lesson1.js to keep it pristine
const origLesson1 = fs.readFileSync('public/course/sample/data/lesson1.js', 'utf8');

const UNIT_LOOKUP = [
  { no: 1, name: "Unit 1: 나를 소개해요", lessons: [1, 2, 3, 4] },
  { no: 2, name: "Unit 2: 일상을 이야기해요", lessons: [5, 6, 7, 8, 9, 10] },
  { no: 3, name: "Unit 3: 이동과 방향", lessons: [11, 12, 13, 14] },
  { no: 4, name: "Unit 4: 함께하고 덧붙여요", lessons: [15, 16, 17, 18, 19, 20, 21, 22] },
  { no: 5, name: "Unit 5: 시제와 바람", lessons: [23, 24, 25, 26] },
  { no: 6, name: "Unit 6: 정확한 부정", lessons: [27, 28, 29, 30] }
];

const RAW_LESSONS = [
  // 2
  { num: 2, key: "은/는", pos: "보조사", form: "은/는", en: "Topic & Contrast marker · 화제와 대조", meanKo: "문장의 주제나 화제를 제시하거나 다른 대상과의 대조를 나타냅니다.", meanEn: "Topic and contrast marker.", ruleHead: "Rule <i>규칙</i>", th: ["앞말의 받침", "형태", "예"], rows: [
    { k: "받침 O", f: "+ 은", ex: [["선생님", "선생님은"], ["이름", "이름은"], ["동생", "동생은"], ["한국", "한국은"]] },
    { k: "받침 X", f: "+ 는", c: "g2", ex: [["저", "저는"], ["친구", "친구는"], ["누나", "누나는"], ["미국", "미국은"]] }
  ], pat: "○○은/는 △△이에요/예요.", heroKo: ["저[[는]] 학생이에요.", "선생님[[은]] 한국 사람이에요."], heroEn: ["I [[am]] a student.", "The teacher [[is]] Korean."],
  makeWords: [
    { k: ["저", "학생"], a: "저는 학생이에요.", e: "I am a student." },
    { k: ["선생님", "한국 사람"], a: "선생님은 한국 사람이에요.", e: "The teacher is Korean." },
    { k: ["이름", "민수"], a: "제 이름은 민수예요.", e: "My name is Minsu." },
    { k: ["친구", "의사"], a: "제 친구는 의사예요.", e: "My friend is a doctor." }
  ] },

  // 3
  { num: 3, key: "이/가 있어요/없어요", pos: "명사", form: "이/가 있어요/없어요", en: "Existence & Possession · 소유와 존재", meanKo: "사람이나 사물의 존재 및 소유 여부를 나타냅니다.", meanEn: "To express possession or existence.", ruleHead: "Rule <i>규칙</i>", th: ["앞말의 받침", "형태", "예"], rows: [
    { k: "받침 O", f: "+ 이 있어요/없어요", ex: [["책", "책이 있어요"], ["돈", "돈이 없어요"], ["시간", "시간이 있어요"], ["가방", "가방이 없어요"]] },
    { k: "받침 X", f: "+ 가 있어요/없어요", c: "g2", ex: [["시계", "시계가 있어요"], ["친구", "친구가 있어요"], ["우산", "우산이 없어요"], ["모자", "모자가 있어요"]] }
  ], pat: "○○이/가 있어요/없어요.", heroKo: ["책[[이 있어요]].", "시계[[가 없어요]]."], heroEn: ["I have a book.", "I don't have a watch."],
  makeWords: [
    { k: ["책", "있다"], a: "책이 있어요.", e: "There is a book." },
    { k: ["시계", "없다"], a: "시계가 없어요.", e: "I don't have a watch." },
    { k: ["시간", "있다"], a: "오늘 시간이 있어요.", e: "I have time today." },
    { k: ["우산", "없다"], a: "지금 우산이 없어요.", e: "I don't have an umbrella now." }
  ] },

  // 4
  { num: 4, key: "아니에요", pos: "명사", form: "아니에요", en: "Negation · '~이/가 아닙니다'", meanKo: "명사 뒤에 붙어 어떤 사실이나 신분을 부정할 때 씁니다.", meanEn: "Negative copula.", ruleHead: "Rule <i>규칙</i>", th: ["앞말의 받침", "형태", "예"], rows: [
    { k: "받침 O", f: "+ 이 아니에요", ex: [["학생", "학생이 아니에요"], ["선생님", "선생님이 아니에요"], ["한국 사람", "한국 사람이 아니에요"]] },
    { k: "받침 X", f: "+ 가 아니에요", c: "g2", ex: [["의사", "의사가 아니에요"], ["가수", "가수가 아니에요"], ["친구", "친구가 아니에요"]] }
  ], pat: "○○이/가 아니에요.", heroKo: ["학생[[이 아니에요]].", "의사[[가 아니에요]]."], heroEn: ["I am not a student.", "I am not a doctor."],
  makeWords: [
    { k: ["저", "학생"], a: "저는 학생이 아니에요.", e: "I am not a student." },
    { k: ["친구", "의사"], a: "친구는 의사가 아니에요.", e: "My friend is not a doctor." },
    { k: ["이거", "책"], a: "이거 제 책이 아니에요.", e: "This is not my book." },
    { k: ["저 사람", "선생님"], a: "저 사람은 선생님이 아니에요.", e: "That person is not a teacher." }
  ] },

  // 5
  { num: 5, key: "-아/어요", pos: "동사·형용사", form: "-아/어요", en: "Present tense polite ending", meanKo: "현재 시제의 기본 서술과 질문을 나타내는 친근한 존댓말 어미입니다.", meanEn: "Present tense informal polite ending.", ruleHead: "Rule <i>규칙</i>", th: ["어간 모음", "형태", "예"], rows: [
    { k: "끝 모음이 ㅏ, ㅗ", f: "+ -아요", ex: [["가다", "가요"], ["보다", "봐요"], ["살다", "살아요"], ["좋다", "좋아요"]] },
    { k: "그 밖의 모음", f: "+ -어요", c: "g2", ex: [["먹다", "먹어요"], ["읽다", "읽어요"], ["마시다", "마셔요"], ["배우다", "배워요"]] },
    { k: "하다", f: "→ 해요", c: "g3", ex: [["공부하다", "공부해요"], ["일하다", "일해요"], ["운동하다", "운동해요"]] }
  ], pat: "○○을/를 -아/어요.", heroKo: ["한국어를 [[공부해요]].", "밥을 [[먹어요]]."], heroEn: ["I study Korean.", "I eat a meal."],
  makeWords: [
    { k: ["학교", "가다"], a: "학교에 가요.", e: "I go to school." },
    { k: ["밥", "먹다"], a: "밥을 먹어요.", e: "I eat a meal." },
    { k: ["한국어", "공부하다"], a: "한국어를 공부해요.", e: "I study Korean." },
    { k: ["영화", "보다"], a: "영화를 봐요.", e: "I watch a movie." }
  ] },

  // 6
  { num: 6, key: "을/를", pos: "목적격 조사", form: "을/를", en: "Object marker", meanKo: "동사의 목적어가 되는 명사 뒤에 붙습니다.", meanEn: "Direct object marker.", ruleHead: "Rule <i>규칙</i>", th: ["앞말의 받침", "형태", "예"], rows: [
    { k: "받침 O", f: "+ 을", ex: [["밥", "밥을"], ["책", "책을"], ["물", "물을"], ["음악", "음악을"]] },
    { k: "받침 X", f: "+ 를", c: "g2", ex: [["사과", "사과를"], ["커피", "커피를"], ["영화", "영화를"], ["친구", "친구를"]] }
  ], pat: "○○을/를 V-아/어요.", heroKo: ["책[[을]] 읽어요.", "사과[[를]] 먹어요."], heroEn: ["I read a book.", "I eat an apple."],
  makeWords: [
    { k: ["책", "읽다"], a: "책을 읽어요.", e: "I read a book." },
    { k: ["사과", "먹다"], a: "사과를 먹어요.", e: "I eat an apple." },
    { k: ["커피", "마시다"], a: "커피를 마셔요.", e: "I drink coffee." },
    { k: ["한국어", "배우다"], a: "한국어를 배워요.", e: "I learn Korean." }
  ] },

  // 7
  { num: 7, key: "이/가 (주어)", pos: "주격 조사", form: "이/가", en: "Subject marker", meanKo: "문장에서 동작이나 상태의 주체를 나타냅니다.", meanEn: "Subject marker.", ruleHead: "Rule <i>규칙</i>", th: ["앞말의 받침", "형태", "예"], rows: [
    { k: "받침 O", f: "+ 이", ex: [["눈", "눈이"], ["선생님", "선생님이"], ["바람", "바람이"]] },
    { k: "받침 X", f: "+ 가", c: "g2", ex: [["비", "비가"], ["날씨", "날씨가"], ["배", "배가"]] }
  ], pat: "○○이/가 형용사/동사.", heroKo: ["비[[가]] 와요.", "날씨[[가]] 좋아요."], heroEn: ["Rain falls.", "The weather is nice."],
  makeWords: [
    { k: ["비", "오다"], a: "비가 와요.", e: "It rains." },
    { k: ["날씨", "좋다"], a: "날씨가 좋아요.", e: "The weather is good." },
    { k: ["눈", "오다"], a: "눈이 와요.", e: "It snows." },
    { k: ["바람", "불다"], a: "바람이 불어요.", e: "The wind blows." }
  ] },

  // 8
  { num: 8, key: "에 (장소)", pos: "부사격 조사", form: "에", en: "Location of existence or destination", meanKo: "사람이나 사물이 존재하는 장소 또는 이동의 목적지를 나타냅니다.", meanEn: "Static location or destination.", ruleHead: "Rule <i>규칙</i>", th: ["동사 유형", "형태", "예"], rows: [
    { k: "존재 (있다/없다)", f: "+ 에", ex: [["집", "집에 있어요"], ["학교", "학교에 없어요"]] },
    { k: "이동 (가다/오다)", f: "+ 에", c: "g2", ex: [["회사", "회사에 가요"], ["한국", "한국에 와요"]] }
  ], pat: "장소에 가요 / 있어요.", heroKo: ["학교[[에]] 가요.", "집[[에]] 있어요."], heroEn: ["I go to school.", "I am at home."],
  makeWords: [
    { k: ["학교", "가다"], a: "학교에 가요.", e: "I go to school." },
    { k: ["집", "있다"], a: "집에 있어요.", e: "I am at home." },
    { k: ["회사", "가다"], a: "회사에 가요.", e: "I go to work." },
    { k: ["식당", "가다"], a: "식당에 가요.", e: "I go to a restaurant." }
  ] },

  // 9
  { num: 9, key: "에서 (장소)", pos: "부사격 조사", form: "에서", en: "Action location · \"at / in\"", meanKo: "어떤 동작이나 행동이 일어나는 장소를 나타냅니다.", meanEn: "Location of dynamic action.", ruleHead: "Rule <i>규칙</i>", th: ["구분", "형태", "예"], rows: [
    { k: "동작 장소", f: "+ 에서", ex: [["도서관", "도서관에서 공부해요"], ["식당", "식당에서 밥을 먹어요"], ["공원", "공원에서 운동해요"]] }
  ], pat: "장소에서 행동해요.", heroKo: ["도서관[[에서]] 책을 읽어요.", "카페[[에서]] 친구를 만나요."], heroEn: ["I read books at the library.", "I meet a friend at a cafe."],
  makeWords: [
    { k: ["도서관", "책", "읽다"], a: "도서관에서 책을 읽어요.", e: "I read books at the library." },
    { k: ["카페", "친구", "만나다"], a: "카페에서 친구를 만나요.", e: "I meet a friend at a cafe." },
    { k: ["식당", "밥", "먹다"], a: "식당에서 밥을 먹어요.", e: "I eat a meal at a restaurant." },
    { k: ["공원", "운동하다"], a: "공원에서 운동해요.", e: "I exercise in the park." }
  ] },

  // 10
  { num: 10, key: "에 (시간)", pos: "부사격 조사", form: "에", en: "Time marker · \"at / on / in\"", meanKo: "동작이 일어나는 때나 시간을 나타냅니다.", meanEn: "Time marker.", ruleHead: "Rule <i>규칙</i>", th: ["시간 명사", "형태", "예"], rows: [
    { k: "시/분/요일/날짜", f: "+ 에", ex: [["1시", "1시에 만나요"], ["월요일", "월요일에 가요"], ["아침", "아침에 운동해요"]] },
    { k: "붙지 않는 단어", f: "(없음)", c: "g2", ex: [["오늘", "오늘 만나요"], ["어제", "어제 왔어요"], ["지금", "지금 가요"]] }
  ], pat: "시간에 V-아/어요.", heroKo: ["아침 8시[[에]] 일어나요.", "주말[[에]] 영화를 봐요."], heroEn: ["I wake up at 8 AM.", "I watch movies on the weekend."],
  makeWords: [
    { k: ["8시", "일어나다"], a: "8시에 일어나요.", e: "I wake up at 8." },
    { k: ["1시", "점심", "먹다"], a: "1시에 점심을 먹어요.", e: "I eat lunch at 1." },
    { k: ["주말", "영화", "보다"], a: "주말에 영화를 봐요.", e: "I watch movies on weekends." },
    { k: ["월요일", "학교", "가다"], a: "월요일에 학교에 가요.", e: "I go to school on Monday." }
  ] },

  // 11
  { num: 11, key: "(으)로 (수단·방향)", pos: "부사격 조사", form: "(으)로", en: "Direction & Tool marker", meanKo: "이동하는 방향이나 동작에 사용되는 도구·수단을 나타냅니다.", meanEn: "By means of / towards.", ruleHead: "Rule <i>규칙</i>", th: ["받침 조건", "형태", "예"], rows: [
    { k: "받침 O (ㄹ 제외)", f: "+ 으로", ex: [["오른쪽", "오른쪽으로"], ["집", "집으로"], ["손", "손으로"]] },
    { k: "받침 X 또는 'ㄹ'", f: "+ 로", c: "g2", ex: [["버스", "버스로"], ["지하철", "지하철로"], ["앞", "앞으로"]] }
  ], pat: "수단/방향(으)로 가요.", heroKo: ["지하철[[로]] 가요.", "오른쪽[[으로]] 가세요."], heroEn: ["I go by subway.", "Go to the right."],
  makeWords: [
    { k: ["지하철", "가다"], a: "지하철로 가요.", e: "I go by subway." },
    { k: ["버스", "학교", "가다"], a: "버스로 학교에 가요.", e: "I go to school by bus." },
    { k: ["오른쪽", "가다"], a: "오른쪽으로 가요.", e: "I go to the right." },
    { k: ["한국어", "말하다"], a: "한국어로 말해요.", e: "I speak in Korean." }
  ] },

  // 12
  { num: 12, key: "에서 ~ 까지 (장소)", pos: "부사격 조사", form: "에서 ~ 까지", en: "From [place] to [place]", meanKo: "출발 장소에서부터 도착 장소까지의 범위를 나타냅니다.", meanEn: "From location to location.", ruleHead: "Rule <i>규칙</i>", th: ["출발 / 도착", "형태", "예"], rows: [
    { k: "출발지", f: "+ 에서", ex: [["서울", "서울에서"], ["집", "집에서"]] },
    { k: "도착지", f: "+ 까지", c: "g2", ex: [["부산", "부산까지"], ["학교", "학교까지"]] }
  ], pat: "장소1에서 장소2까지 가요.", heroKo: ["집[[에서]] 학교[[까지]] 걸어가요.", "서울[[에서]] 부산[[까지]] KTX를 타요."], heroEn: ["I walk from home to school.", "I take KTX from Seoul to Busan."],
  makeWords: [
    { k: ["집", "학교", "걸어가다"], a: "집에서 학교까지 걸어가요.", e: "I walk from home to school." },
    { k: ["서울", "부산", "가다"], a: "서울에서 부산까지 가요.", e: "I go from Seoul to Busan." },
    { k: ["여기", "역", "가다"], a: "여기에서 역까지 가요.", e: "I go from here to the station." },
    { k: ["회사", "집", "버스를 타다"], a: "회사에서 집까지 버스를 타요.", e: "I take a bus from office to home." }
  ] },

  // 13
  { num: 13, key: "부터 ~ 까지", pos: "보조사", form: "부터 ~ 까지", en: "From [time] until [time]", meanKo: "시작하는 시점부터 끝나는 시점까지의 시간 범위를 나타냅니다.", meanEn: "From time until time.", ruleHead: "Rule <i>규칙</i>", th: ["시작 / 종료", "형태", "예"], rows: [
    { k: "시작 시간", f: "+ 부터", ex: [["9시", "9시부터"], ["월요일", "월요일부터"]] },
    { k: "종료 시간", f: "+ 까지", c: "g2", ex: [["6시", "6시까지"], ["금요일", "금요일까지"]] }
  ], pat: "시간1부터 시간2까지 공부해요.", heroKo: ["9시[[부터]] 6시[[까지]] 일해요.", "오늘[[부터]] 내일[[까지]] 쉬어요."], heroEn: ["I work from 9 to 6.", "I take a rest from today to tomorrow."],
  makeWords: [
    { k: ["9시", "6시", "일하다"], a: "9시부터 6시까지 일해요.", e: "I work from 9 to 6." },
    { k: ["1시", "2시", "점심시간"], a: "1시부터 2시까지 점심시간이에요.", e: "Lunch time is from 1 to 2." },
    { k: ["월요일", "금요일", "수업"], a: "월요일부터 금요일까지 수업이 있어요.", e: "I have classes from Monday to Friday." },
    { k: ["아침", "저녁", "공부하다"], a: "아침부터 저녁까지 공부해요.", e: "I study from morning to evening." }
  ] },

  // 14
  { num: 14, key: "에게/한테", pos: "부사격 조사", form: "에게/한테", en: "To [person] · indirect object", meanKo: "행동이 미치는 대상이나 사람을 나타냅니다.", meanEn: "To someone (indirect object).", ruleHead: "Rule <i>규칙</i>", th: ["용도", "형태", "예"], rows: [
    { k: "서면·격식", f: "+ 에게", ex: [["동생", "동생에게"], ["친구", "친구에게"]] },
    { k: "구어·일상", f: "+ 한테", c: "g2", ex: [["친구", "친구한테"], ["선생님", "선생님께 (높임)"]] }
  ], pat: "사람에게/한테 선물해요.", heroKo: ["친구[[한테]] 전화를 걸어요.", "동생[[에게]] 책을 줘요."], heroEn: ["I call my friend.", "I give a book to my sibling."],
  makeWords: [
    { k: ["친구", "전화", "걸다"], a: "친구한테 전화를 걸어요.", e: "I call my friend." },
    { k: ["동생", "선물", "주다"], a: "동생에게 선물을 줘요.", e: "I give a gift to my younger sibling." },
    { k: ["선생님", "질문", "하다"], a: "선생님께 질문을 해요.", e: "I ask a question to the teacher." },
    { k: ["부모님", "편지", "쓰다"], a: "부모님께 편지를 써요.", e: "I write a letter to my parents." }
  ] },

  // 15
  { num: 15, key: "도", pos: "보조사", form: "도", en: "Also / too · 첨가·동일", meanKo: "어떤 대상이 이미 있는 것과 같거나 더해짐을 나타냅니다.", meanEn: "Also, too.", ruleHead: "Rule <i>규칙</i>", th: ["명사 연결", "형태", "예"], rows: [
    { k: "받침 무관", f: "+ 도", ex: [["저", "저도"], ["물", "물도"], ["사과", "사과도"], ["한국어", "한국어도"]] }
  ], pat: "○○도 주세요/좋아요.", heroKo: ["저[[도]] 한국어를 배워요.", "커피[[도]] 마셔요."], heroEn: ["I also learn Korean.", "I also drink coffee."],
  makeWords: [
    { k: ["저", "학생"], a: "저도 학생이에요.", e: "I am also a student." },
    { k: ["커피", "마시다"], a: "커피도 마셔요.", e: "I also drink coffee." },
    { k: ["사과", "주다"], a: "사과도 주세요.", e: "Please give me apples too." },
    { k: ["한국어", "배우다"], a: "한국어도 배워요.", e: "I also learn Korean." }
  ] },

  // 16
  { num: 16, key: "와/과 · 하고 · (이)랑", pos: "접속 조사", form: "와/과 · 하고 · (이)랑", en: "And / with · 명사와 명사 연결", meanKo: "두 개 이상의 명사를 대등하게 이어 주거나 함께하는 상대를 나타냅니다.", meanEn: "And, with.", ruleHead: "Rule <i>규칙</i>", th: ["받침 조건", "형태", "예"], rows: [
    { k: "와/과", f: "받침O: 과 / 받침X: 와", ex: [["선생님", "선생님과"], ["친구", "친구와"]] },
    { k: "하고", f: "받침 무관: 하고", c: "g2", ex: [["밥", "밥하고"], ["빵", "빵하고"]] },
    { k: "(이)랑", f: "받침O: 이랑 / 받침X: 랑", c: "g3", ex: [["동생", "동생이랑"], ["누나", "누나랑"]] }
  ], pat: "A와/과 B를 좋아해요.", heroKo: ["사과[[와]] 바나나를 사요.", "친구[[하고]] 영화를 봐요."], heroEn: ["I buy apples and bananas.", "I watch movies with a friend."],
  makeWords: [
    { k: ["사과", "바나나", "사다"], a: "사과와 바나나를 사요.", e: "I buy apples and bananas." },
    { k: ["친구", "영화", "보다"], a: "친구하고 영화를 봐요.", e: "I watch movies with a friend." },
    { k: ["동생", "밥", "먹다"], a: "동생이랑 밥을 먹어요.", e: "I eat a meal with my sibling." },
    { k: ["빵", "우유", "마시다"], a: "빵하고 우유를 먹어요.", e: "I have bread and milk." }
  ] },

  // 17
  { num: 17, key: "만", pos: "보조사", form: "만", en: "Only / just · 한정", meanKo: "다른 것은 제외하고 오직 그것 하나만을 한정함을 나타냅니다.", meanEn: "Only, just.", ruleHead: "Rule <i>규칙</i>", th: ["명사 연결", "형태", "예"], rows: [
    { k: "받침 무관", f: "+ 만", ex: [["물", "물만 마셔요"], ["하나", "하나만 주세요"], ["주말", "주말에만 만나요"]] }
  ], pat: "○○만 있어요/주세요.", heroKo: ["물[[만]] 마셔요.", "사과 하나[[만]] 주세요."], heroEn: ["I only drink water.", "Please give me just one apple."],
  makeWords: [
    { k: ["물", "마시다"], a: "물만 마셔요.", e: "I only drink water." },
    { k: ["하나", "주다"], a: "하나만 주세요.", e: "Please give me only one." },
    { k: ["사과", "사다"], a: "사과만 사요.", e: "I only buy apples." },
    { k: ["오늘", "시간", "있다"], a: "오늘만 시간이 있어요.", e: "I only have time today." }
  ] },

  // 18
  { num: 18, key: "(이)나", pos: "보조사", form: "(이)나", en: "Or · 선택 / 수량의 많음", meanKo: "둘 중 하나를 선택하거나 예상보다 양이 많음을 나타냅니다.", meanEn: "Or, as much as.", ruleHead: "Rule <i>규칙</i>", th: ["받침 조건", "형태", "예"], rows: [
    { k: "받침 O", f: "+ 이나", ex: [["밥", "밥이나 빵"], ["커피", "커피나 차"]] },
    { k: "받침 X", f: "+ 나", c: "g2", ex: [["영화", "영화나 책"], ["주스", "주스나 물"]] }
  ], pat: "A(이)나 B를 마셔요.", heroKo: ["주말에 영화[[나]] 책을 봐요.", "커피[[나]] 차 한잔해요."], heroEn: ["I watch a movie or read a book on weekends.", "Let's have coffee or tea."],
  makeWords: [
    { k: ["영화", "책", "보다"], a: "영화나 책을 봐요.", e: "I watch a movie or read a book." },
    { k: ["커피", "차", "마시다"], a: "커피나 차를 마셔요.", e: "I drink coffee or tea." },
    { k: ["토요일", "일요일", "만나다"], a: "토요일이나 일요일에 만나요.", e: "Let's meet on Saturday or Sunday." },
    { k: ["사과", "바나나", "먹다"], a: "사과나 바나나를 먹어요.", e: "I eat an apple or a banana." }
  ] },

  // 19
  { num: 19, key: "마다", pos: "보조사", form: "마다", en: "Every / each · 전수·반복", meanKo: "하나하나 모두 또는 반복되는 때를 나타냅니다.", meanEn: "Every, each.", ruleHead: "Rule <i>규칙</i>", th: ["명사 연결", "형태", "예"], rows: [
    { k: "받침 무관", f: "+ 마다", ex: [["날", "날마다 운동해요"], ["아침", "아침마다 커피를 마셔요"], ["나라", "나라마다 달라요"]] }
  ], pat: "시간/단위마다 V-아/어요.", heroKo: ["아침[[마다]] 운동을 해요.", "주말[[마다]] 등산을 가요."], heroEn: ["I exercise every morning.", "I go hiking every weekend."],
  makeWords: [
    { k: ["아침", "운동하다"], a: "아침마다 운동을 해요.", e: "I exercise every morning." },
    { k: ["날", "한국어", "공부하다"], a: "날마다 한국어를 공부해요.", e: "I study Korean every day." },
    { k: ["주말", "등산", "가다"], a: "주말마다 등산을 가요.", e: "I go hiking every weekend." },
    { k: ["사람", "생각", "다르다"], a: "사람마다 생각이 달라요.", e: "Everyone thinks differently." }
  ] },

  // 20
  { num: 20, key: "의", pos: "관형격 조사", form: "의", en: "Possessive marker · \"'s / of\"", meanKo: "앞 명사가 뒤 명사를 소유하거나 한정함을 나타냅니다. [발음: 에]", meanEn: "Possessive particle.", ruleHead: "Rule <i>규칙</i>", th: ["소유 관계", "형태", "예"], rows: [
    { k: "받침 무관", f: "+ 의", ex: [["선생님", "선생님의 책"], ["친구", "친구의 이름"], ["한국", "한국의 수도"]] }
  ], pat: "A의 B입니다.", heroKo: ["이것은 선생님[[의]] 가방이에요.", "제 친구[[의]] 집이에요."], heroEn: ["This is teacher's bag.", "This is my friend's house."],
  makeWords: [
    { k: ["선생님", "가방"], a: "선생님의 가방이에요.", e: "It is the teacher's bag." },
    { k: ["친구", "집"], a: "친구의 집이에요.", e: "It is my friend's house." },
    { k: ["한국", "수도", "서울"], a: "한국의 수도는 서울이에요.", e: "The capital of Korea is Seoul." },
    { k: ["제", "이름", "민수"], a: "제 이름은 민수예요.", e: "My name is Minsu." }
  ] },

  // 21
  { num: 21, key: "보다", pos: "부사격 조사", form: "보다", en: "Than · 비교", meanKo: "비교의 기준이 되는 대상 뒤에 붙어 더 어떠함을 나타냅니다.", meanEn: "More than (comparison).", ruleHead: "Rule <i>규칙</i>", th: ["비교 대상", "형태", "예"], rows: [
    { k: "받침 무관", f: "+ 보다", ex: [["어제", "어제보다 오늘이 더워요"], ["버스", "버스보다 지하철이 빨라요"]] }
  ], pat: "A가 B보다 더 형용사해요.", heroKo: ["지하철이 버스[[보다]] 빨라요.", "한국어가 영어[[보다]] 재미있어요."], heroEn: ["Subway is faster than bus.", "Korean is more fun than English."],
  makeWords: [
    { k: ["지하철", "버스", "빠르다"], a: "지하철이 버스보다 빨라요.", e: "Subway is faster than bus." },
    { k: ["오늘", "어제", "덥다"], a: "오늘이 어제보다 더워요.", e: "Today is hotter than yesterday." },
    { k: ["비행기", "기차", "빠르다"], a: "비행기가 기차보다 빨라요.", e: "Airplane is faster than train." },
    { k: ["사과", "바나나", "맛있다"], a: "사과가 바나나보다 맛있어요.", e: "Apples are more delicious than bananas." }
  ] },

  // 22
  { num: 22, key: "처럼 / 같이", pos: "부사격 조사", form: "처럼 / 같이", en: "Like / as · 비유", meanKo: "모양이나 상태가 비슷함을 비유하여 나타냅니다.", meanEn: "Like, as.", ruleHead: "Rule <i>규칙</i>", th: ["비유 대상", "형태", "예"], rows: [
    { k: "받침 무관", f: "+ 처럼 / 같이", ex: [["천사", "천사처럼 착해요"], ["가수", "가수같이 노래해요"], ["가족", "가족처럼 지내요"]] }
  ], pat: "○○처럼/같이 V-해요.", heroKo: ["한국 사람[[처럼]] 한국어를 잘해요.", "천사[[같이]] 착해요."], heroEn: ["She speaks Korean like a Korean.", "Kind like an angel."],
  makeWords: [
    { k: ["한국 사람", "말하다"], a: "한국 사람처럼 말해요.", e: "Speaks like a Korean." },
    { k: ["가수", "노래하다"], a: "가수같이 노래해요.", e: "Sings like a singer." },
    { k: ["천사", "착하다"], a: "천사처럼 착해요.", e: "Kind like an angel." },
    { k: ["가족", "지내다"], a: "가족같이 지내요.", e: "Get along like family." }
  ] },

  // 23
  { num: 23, key: "-았/었-", pos: "과거 선어말어미", form: "-았/었-", en: "Past tense marker", meanKo: "이미 일어난 과거의 일이나 상태를 나타냅니다.", meanEn: "Past tense marker.", ruleHead: "Rule <i>규칙</i>", th: ["어간 모음", "형태", "예"], rows: [
    { k: "끝 모음 ㅏ, ㅗ", f: "+ -았어요", ex: [["가다", "갔어요"], ["보다", "봤어요"], ["만나다", "만났어요"]] },
    { k: "그 밖의 모음", f: "+ -었어요", c: "g2", ex: [["먹다", "먹었어요"], ["읽다", "읽었어요"], ["마시다", "마셨어요"]] },
    { k: "하다", f: "→ 했어요", c: "g3", ex: [["공부하다", "공부했어요"], ["운동하다", "운동했어요"]] }
  ], pat: "어제 ○○을/를 V-았/었어요.", heroKo: ["어제 친구를 [[만났어요]].", "저녁을 [[먹었어요]]."], heroEn: ["I met a friend yesterday.", "I had dinner."],
  makeWords: [
    { k: ["어제", "친구", "만나다"], a: "어제 친구를 만났어요.", e: "I met a friend yesterday." },
    { k: ["영화", "보다"], a: "영화를 봤어요.", e: "I watched a movie." },
    { k: ["점심", "먹다"], a: "점심을 먹었어요.", e: "I ate lunch." },
    { k: ["한국어", "공부하다"], a: "한국어를 공부했어요.", e: "I studied Korean." }
  ] },

  // 24
  { num: 24, key: "-(으)ㄹ 거예요", pos: "미래/추측 어미", form: "-(으)ㄹ 거예요", en: "Future plan & supposition", meanKo: "앞으로 할 계획이나 화자의 추측을 나타냅니다.", meanEn: "Future plan or probability.", ruleHead: "Rule <i>규칙</i>", th: ["받침 조건", "형태", "예"], rows: [
    { k: "받침 O (ㄹ 제외)", f: "+ 을 거예요", ex: [["먹다", "먹을 거예요"], ["입다", "입을 거예요"]] },
    { k: "받침 X 또는 'ㄹ'", f: "+ ㄹ 거예요", c: "g2", ex: [["가다", "갈 거예요"], ["만나다", "만날 거예요"], ["살다", "살 거예요"]] }
  ], pat: "내일 V-(으)ㄹ 거예요.", heroKo: ["내일 한국에 [[갈 거예요]].", "주말에 푹 [[쉴 거예요]]."], heroEn: ["I will go to Korea tomorrow.", "I will rest well on the weekend."],
  makeWords: [
    { k: ["내일", "학교", "가다"], a: "내일 학교에 갈 거예요.", e: "I will go to school tomorrow." },
    { k: ["저녁", "피자", "먹다"], a: "저녁에 피자를 먹을 거예요.", e: "I will eat pizza for dinner." },
    { k: ["주말", "친구", "만나다"], a: "주말에 친구를 만날 거예요.", e: "I will meet a friend on weekend." },
    { k: ["한국어", "배우다"], a: "한국어를 배울 거예요.", e: "I will learn Korean." }
  ] },

  // 25
  { num: 25, key: "-고 있다", pos: "보조 용언", form: "-고 있다", en: "Present progressive · \"-ing\"", meanKo: "동작이 현재 계속 진행되고 있음을 나타냅니다.", meanEn: "Present progressive.", ruleHead: "Rule <i>규칙</i>", th: ["어간 연결", "형태", "예"], rows: [
    { k: "받침 무관", f: "+ -고 있어요", ex: [["공부하다", "공부하고 있어요"], ["먹다", "먹고 있어요"], ["듣다", "듣고 있어요"]] }
  ], pat: "지금 V-고 있어요.", heroKo: ["지금 음악을 [[듣고 있어요]].", "한국어를 [[배우고 있어요]]."], heroEn: ["I am listening to music now.", "I am learning Korean."],
  makeWords: [
    { k: ["지금", "공부하다"], a: "지금 공부하고 있어요.", e: "I am studying now." },
    { k: ["음악", "듣다"], a: "음악을 듣고 있어요.", e: "I am listening to music." },
    { k: ["밥", "먹다"], a: "밥을 먹고 있어요.", e: "I am eating a meal." },
    { k: ["책", "읽다"], a: "책을 읽고 있어요.", e: "I am reading a book." }
  ] },

  // 26
  { num: 26, key: "-겠-", pos: "선어말어미", form: "-겠-", en: "Will / Intention / Guess", meanKo: "화자의 의지나 현재 상황을 보고 짐작함을 나타냅니다.", meanEn: "Intention or conjecture.", ruleHead: "Rule <i>규칙</i>", th: ["용법", "형태", "예"], rows: [
    { k: "의지 (1인칭)", f: "+ -겠어요", ex: [["하다", "열심히 하겠습니다"], ["먹다", "잘 먹겠습니다"]] },
    { k: "추측 (상황)", f: "+ -겠어요", c: "g2", ex: [["맛있다", "맛있겠어요"], ["좋다", "좋겠어요"], ["바쁘다", "바쁘겠어요"]] }
  ], pat: "열심히 V-겠어요 / 맛있겠어요.", heroKo: ["열심히 [[하겠습니다]].", "와, 정말 [[맛있겠어요]]!"], heroEn: ["I will do my best.", "Wow, looks so delicious!"],
  makeWords: [
    { k: ["열심히", "하다"], a: "열심히 하겠습니다.", e: "I will do my best." },
    { k: ["정말", "맛있다"], a: "정말 맛있겠어요.", e: "It looks so delicious." },
    { k: ["오늘", "바쁘다"], a: "오늘 바쁘겠어요.", e: "You must be busy today." },
    { k: ["기분", "좋다"], a: "기분이 좋겠어요.", e: "You must feel great." }
  ] },

  // 27
  { num: 27, key: "안", pos: "부사", form: "안", en: "Short negation · \"not\"", meanKo: "동사나 형용사 앞에 놓여 단순 부정이나 화자의 의지 부정을 나타냅니다.", meanEn: "Short negation.", ruleHead: "Rule <i>규칙</i>", th: ["동사 형태", "형태", "예"], rows: [
    { k: "일반 동사/형용사", f: "안 + 용언", ex: [["먹다", "안 먹어요"], ["가다", "안 가요"], ["맵다", "안 매워요"]] },
    { k: "명사+하다 동사", f: "명사 + 안 하다", c: "g2", ex: [["일하다", "일 안 해요"], ["공부하다", "공부 안 해요"]] }
  ], pat: "안 V-아/어요.", heroKo: ["오늘 회사에 [[안 가요]].", "매운 음식을 [[안 먹어요]]."], heroEn: ["I don't go to work today.", "I don't eat spicy food."],
  makeWords: [
    { k: ["오늘", "학교", "안", "가다"], a: "오늘 학교에 안 가요.", e: "I don't go to school today." },
    { k: ["커피", "안", "마시다"], a: "커피를 안 마셔요.", e: "I don't drink coffee." },
    { k: ["오늘", "일", "안 하다"], a: "오늘은 일 안 해요.", e: "I don't work today." },
    { k: ["김치", "안", "맵다"], a: "김치가 안 매워요.", e: "Kimchi is not spicy." }
  ] },

  // 28
  { num: 28, key: "-지 않다", pos: "보조 용언", form: "-지 않다", en: "Long negation · \"not\"", meanKo: "용언 어간 뒤에 붙어 상태나 행동을 부정하는 격식 있는 표현입니다.", meanEn: "Long form negation.", ruleHead: "Rule <i>규칙</i>", th: ["어간 연결", "형태", "예"], rows: [
    { k: "받침 무관", f: "+ -지 않아요", ex: [["먹다", "먹지 않아요"], ["가다", "가지 않아요"], ["비싸다", "비싸지 않아요"]] }
  ], pat: "V-지 않아요.", heroKo: ["주말에는 일하[[지 않아요]].", "가격이 비싸[[지 않아요]]."], heroEn: ["I don't work on weekends.", "The price is not expensive."],
  makeWords: [
    { k: ["주말", "일하다"], a: "주말에는 일하지 않아요.", e: "I don't work on weekends." },
    { k: ["가격", "비싸다"], a: "가격이 비싸지 않아요.", e: "The price is not expensive." },
    { k: ["아침", "먹다"], a: "아침을 먹지 않아요.", e: "I don't eat breakfast." },
    { k: ["어렵다"], a: "한국어가 어렵지 않아요.", e: "Korean is not difficult." }
  ] },

  // 29
  { num: 29, key: "못", pos: "부사", form: "못", en: "Inability negation · \"cannot\"", meanKo: "능력이 없거나 외적 상황 때문에 할 수 없음을 나타냅니다.", meanEn: "Inability negation.", ruleHead: "Rule <i>규칙</i>", th: ["동사 형태", "형태", "예"], rows: [
    { k: "일반 동사", f: "못 + 동사", ex: [["가다", "못 가요"], ["먹다", "못 먹어요"], ["수영하다", "수영 못 해요"]] }
  ], pat: "못 V-아/어요.", heroKo: ["감기 때문에 학교에 [[못 가요]].", "매운 것을 [[못 먹어요]]."], heroEn: ["I cannot go to school due to cold.", "I cannot eat spicy food."],
  makeWords: [
    { k: ["학교", "못", "가다"], a: "학교에 못 가요.", e: "I cannot go to school." },
    { k: ["매운 것", "못", "먹다"], a: "매운 것을 못 먹어요.", e: "I cannot eat spicy food." },
    { k: ["수영", "못 하다"], a: "수영을 못 해요.", e: "I cannot swim." },
    { k: ["술", "못", "마시다"], a: "술을 못 마셔요.", e: "I cannot drink alcohol." }
  ] },

  // 30
  { num: 30, key: "-지 못하다", pos: "보조 용언", form: "-지 못하다", en: "Long inability negation · \"cannot\"", meanKo: "동사 어간 뒤에 붙어 능력이나 상황의 불가함을 정중하게 나타냅니다.", meanEn: "Long form inability negation.", ruleHead: "Rule <i>규칙</i>", th: ["어간 연결", "형태", "예"], rows: [
    { k: "받침 무관", f: "+ -지 못해요", ex: [["참석하다", "참석하지 못해요"], ["가다", "가지 못해요"], ["자다", "자지 못해요"]] }
  ], pat: "V-지 못해요.", heroKo: ["회의에 참석하[[지 못해요]].", "어제 잠을 잘 자[[지 못했어요]]."], heroEn: ["I cannot attend the meeting.", "I couldn't sleep well yesterday."],
  makeWords: [
    { k: ["회의", "참석하다"], a: "회의에 참석하지 못해요.", e: "I cannot attend the meeting." },
    { k: ["파티", "가다"], a: "파티에 가지 못해요.", e: "I cannot go to the party." },
    { k: ["잠", "자다"], a: "어제 잠을 잘 자지 못했어요.", e: "I couldn't sleep well yesterday." },
    { k: ["약속", "지키다"], a: "약속을 지키지 못했어요.", e: "I couldn't keep the promise." }
  ] }
];

const dataDir = path.resolve('public/course/sample/data');

RAW_LESSONS.forEach(ld => {
  const unitObj = UNIT_LOOKUP.find(u => u.lessons.includes(ld.num));
  const unitName = unitObj ? unitObj.name : "Unit 1";

  const lessonObj = {
    key: ld.key,
    pos: ld.pos,
    form: ld.form,
    opening: {
      name: `${ld.num}호선 출발 · ${ld.key}`,
      no: ld.num,
      line: `Level 1 · ${unitName}`,
      color: "#0052a4",
      en: `${ld.en}<br>Practice everyday Korean step by step.`,
      board: `Departing · Lesson ${ld.num}`,
      next: `Next: ${ld.key}`,
      stops: ["Unit 1", "Unit 2", "Unit 3", "Unit 4", "Unit 5", "Unit 6"]
    },
    gpic: [
      { e: "📖", c: ld.key, t: "navy" },
      { sign: "=" },
      { e: "✨", c: ld.pos, t: "accent" }
    ],
    mean: {
      ko: ld.meanKo,
      en: ld.meanEn
    },
    warn: [
      { ko: "정확한 억양과 규칙에 맞추어 큰 소리로 따라 말해 보세요.", en: "Practice speaking aloud with natural intonation." },
      { ko: "받침 여부에 따른 형태 변화에 주의하세요.", en: "Pay attention to form changes based on final consonants." }
    ],
    ask: {
      q: ld.pat,
      en: ld.en
    },
    en: ld.en,
    prior: [],
    pat: ld.pat,
    hero: {
      pic: [
        { e: "🧑", c: "말하기", t: "navy" },
        { e: "💬", c: "연습", t: "accent" }
      ],
      ko: ld.heroKo,
      en: ld.heroEn
    },
    ex: [
      {
        label: `예문 ① · ${ld.key} 연습`,
        ask: { q: ld.heroKo[0], en: ld.heroEn[0] },
        pic: [{ e: "🙋", c: "대화", t: "navy" }],
        a: { who: "A · 수진", ko: [ld.heroKo[0]], en: [ld.heroEn[0]] },
        b: { who: "B · 민수", ko: [ld.heroKo[1]], en: [ld.heroEn[1]] },
        morph: [ld.key + " 규칙", "핵심 어휘"]
      },
      {
        label: `예문 ② · 실전 대화`,
        ask: { q: ld.heroKo[1], en: ld.heroEn[1] },
        pic: [{ e: "🗣️", c: "실전", t: "accent" }],
        a: { who: "A · 지훈", ko: [ld.heroKo[1]], en: [ld.heroEn[1]] },
        b: { who: "B · 사라", ko: ["네, 맞아요. " + ld.heroKo[0].replace(/\[\[|\]\]/g, '')], en: ["Yes, that's right."] },
        morph: [ld.key + " 실전 적용"]
      }
    ],
    review: ld.rows[0].ex.map(([base, formed]) => ({
      ko: formed.includes('[[') ? formed : `${formed.replace(ld.key, `[[${ld.key}]]`)}.`,
      base: base,
      b: true,
      f: ld.key
    })).concat([
      { ko: ld.heroKo[0], note: `${ld.key}의 자연스러운 문장 활용` }
    ]),
    rules: {
      head: ld.ruleHead,
      th: ld.th,
      rows: ld.rows
    },
    tips: [
      `<b>${ld.key}</b> 규칙에 맞춰 정확한 발음과 억양으로 따라 해 보세요.`,
      "일상생활 대화에서 자주 쓰이는 핵심 표현입니다.",
      "예문과 말하기 카드를 통해 반복해서 입으로 연습해 보세요."
    ],
    tipsEn: [
      "Pay attention to the spelling and final consonant rules.",
      "Repeat each example sentence aloud for best results."
    ],
    words: (ld.rows[0].ex || []).map(([base, formed]) => ({ w: base, m: "연습 단어", f: formed })).concat([
      { w: "친구", m: "friend", f: "친구" },
      { w: "선생님", m: "teacher", f: "선생님" },
      { w: "학교", m: "school", f: "학교" },
      { w: "한국", m: "Korea", f: "한국" }
    ]).slice(0, 8),
    bingo: (ld.rows.flatMap(row => row.ex || [])).concat([
      ["사과", "사과"], ["물", "물"], ["시간", "시간"], ["오늘", "오늘"]
    ]).slice(0, 12),
    relays: [
      [{ t: `${ld.key} 기본 연습` }, { base: "연습1", ans: ld.rows[0].ex[0] ? ld.rows[0].ex[0][1] : ld.key }, { base: "연습2", ans: ld.rows[0].ex[1] ? ld.rows[0].ex[1][1] : ld.key }],
      [{ t: "문장으로 말하기" }, { base: "문장1", ans: ld.heroKo[0].replace(/\[\[|\]\]/g, '') }, { base: "문장2", ans: ld.heroKo[1].replace(/\[\[|\]\]/g, '') }]
    ],
    make: ld.makeWords,
    vocab: [
      {
        tag: ld.key,
        icon: "📖",
        q: `${ld.key} 연습을 해 보세요.`,
        qen: `Practice ${ld.key}`,
        pat: ld.pat,
        items: (ld.rows[0].ex || []).map(([b, f]) => ({ k: b, m: f }))
      }
    ],
    sit: [
      {
        i: "👋",
        t: "대화 연습",
        v: ld.key,
        q: `오늘 배운 ${ld.key} 표현을 사용해 보세요.`,
        qen: "Try using the expression learned today.",
        m: [ld.heroKo[0], ld.heroKo[1]]
      }
    ],
    wrap: {
      ex: [
        { ko: ld.heroKo, en: ld.heroEn }
      ],
      tips: [
        `<b>${ld.key}</b> 규칙에 맞춰 자연스럽게 발음해 보세요.`,
        "질문할 때는 문장 끝을 올려서 말합니다.",
        "자주 쓰는 어휘와 결합해 반복 연습합니다."
      ]
    }
  };

  const jsContent = `/* Lesson ${ld.num}: ${ld.key} · 100% Full Unlocked Data */\nLESSONS.push(${JSON.stringify(lessonObj, null, 2)});\n`;
  const filePath = path.join(dataDir, `lesson${ld.num}.js`);
  fs.writeFileSync(filePath, jsContent, 'utf8');
});

console.log('Successfully generated full authentic lessons 2 through 30!');
