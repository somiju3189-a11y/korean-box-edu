// Unit 2: 일상을 이야기해요 (Lessons 5–10)
export const SPECS_PART2 = {
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
      {
        k: "ㅏ, ㅗ 모음 어간", f: "+ -아요",
        ex: [["가다", "가요"], ["보다", "봐요"], ["좋다", "좋아요"], ["살다", "살아요"], ["만나다", "만나요"], ["사다", "사요"]]
      },
      {
        k: "그 외 모음 / 하다 어간", f: "+ -어요 / 해요", c: "g2",
        ex: [["맛있다", "맛있어요"], ["먹다", "먹어요"], ["마시다", "마셔요"], ["읽다", "읽어요"], ["공부하다", "공부해요"], ["운동하다", "운동해요"]]
      }
    ],
    make: [
      { k: ["한국 음식", "맛있다"], a: "한국 음식이 맛있어요.", e: "Korean food is delicious." },
      { k: ["매일", "공부하다"], a: "매일 한국어를 공부해요.", e: "I study Korean every day." },
      { k: ["날씨", "좋다"], a: "오늘 날씨가 좋아요.", e: "The weather is nice today." },
      { k: ["점심", "먹다"], a: "점심을 맛있게 먹어요.", e: "I eat lunch deliciously." },
      { k: ["공원", "만나다"], a: "공원에서 친구를 만나요.", e: "I meet a friend at the park." },
      { k: ["카페", "커피", "마시다"], a: "카페에서 커피를 마셔요.", e: "I drink coffee at a cafe." },
      { k: ["도서관", "책", "읽다"], a: "도서관에서 책을 읽어요.", e: "I read a book at the library." },
      { k: ["저녁", "운동하다"], a: "저녁에 공원에서 운동해요.", e: "I exercise at the park in the evening." }
    ],
    review: [
      { ko: "저는 아침마다 도서관에 [[가요]].", base: "가다", b: false, f: "가요" },
      { ko: "식당에서 맛있는 점심을 [[먹어요]].", base: "먹다", b: true, f: "먹어요" },
      { ko: "한국어 수업이 참 [[재미있어요]].", base: "재미있다", b: true, f: "재미있어요" },
      { ko: "방과 후에 친구와 한국어를 [[공부해요]].", base: "공부하다", b: false, f: "공부해요" },
      { ko: "오늘 서울 날씨가 아주 [[좋아요]].", note: "ㅏ, ㅗ → -아요 / 그 외 → -어요 / 하다 → 해요" }
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
      {
        k: "받침 O", f: "+ 을",
        ex: [["책", "책을"], ["밥", "밥을"], ["음악", "음악을"], ["선물", "선물을"], ["라면", "라면을"], ["신문", "신문을"]]
      },
      {
        k: "받침 X", f: "+ 를", c: "g2",
        ex: [["커피", "커피를"], ["한국어", "한국어를"], ["영화", "영화를"], ["친구", "친구를"], ["사과", "사과를"], ["노래", "노래를"]]
      }
    ],
    make: [
      { k: ["커피", "마시다"], a: "아침에 커피를 마셔요.", e: "I drink coffee in the morning." },
      { k: ["책", "읽다"], a: "재미있는 책을 읽어요.", e: "I read an interesting book." },
      { k: ["밥", "먹다"], a: "점심에 비빔밥을 먹어요.", e: "I eat bibimbap for lunch." },
      { k: ["영화", "보다"], a: "주말에 영화를 봐요.", e: "I watch a movie on the weekend." },
      { k: ["음악", "듣다"], a: "방에서 조용히 음악을 들어요.", e: "I listen to music quietly in my room." },
      { k: ["친구", "만나다"], a: "오후에 카페에서 친구를 만나요.", e: "I meet a friend at a cafe in the afternoon." },
      { k: ["한국어", "배우다"], a: "교실에서 한국어를 배워요.", e: "I learn Korean in the classroom." },
      { k: ["사과", "사다"], a: "시장에서 신선한 사과를 사요.", e: "I buy fresh apples at the market." }
    ],
    review: [
      { ko: "아침마다 따뜻한 커피[[를]] 한 잔 마셔요.", base: "커피", b: false, f: "를" },
      { ko: "식당에서 친구와 점심밥[[을]] 맛있게 먹어요.", base: "밥", b: true, f: "을" },
      { ko: "도서관에서 한국어 책[[을]] 열심히 읽어요.", base: "책", b: true, f: "을" },
      { ko: "주말에는 집에서 재미있는 영화[[를]] 봐요.", base: "영화", b: false, f: "를" },
      { ko: "문구점에서 예쁜 공책과 연필[[을]] 사요.", note: "받침 O → 을 / 받침 X → 를" }
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
      {
        k: "받침 O", f: "+ 이",
        ex: [["꽃", "꽃이"], ["음식", "음식이"], ["가방", "가방이"], ["교실", "교실이"], ["바람", "바람이"], ["하늘", "하늘이"]]
      },
      {
        k: "받침 X", f: "+ 가", c: "g2",
        ex: [["날씨", "날씨가"], ["커피", "커피가"], ["노래", "노래가"], ["비", "비가"], ["바다", "바다가"], ["모자", "모자가"]]
      }
    ],
    make: [
      { k: ["날씨", "좋다"], a: "오늘 날씨가 좋아요.", e: "The weather is nice today." },
      { k: ["꽃", "예쁘다"], a: "공원에 꽃이 예뻐요.", e: "The flowers in the park are pretty." },
      { k: ["음식", "맛있다"], a: "한국 음식이 맛있어요.", e: "Korean food is delicious." },
      { k: ["가방", "크다"], a: "이 가방이 아주 커요.", e: "This bag is very big." },
      { k: ["비", "오다"], a: "밖에 시원하게 비가 와요.", e: "It rains refreshingly outside." },
      { k: ["교실", "깨끗하다"], a: "우리 교실이 참 깨끗해요.", e: "Our classroom is really clean." },
      { k: ["노래", "좋다"], a: "라디오에서 나오는 노래가 좋아요.", e: "The song coming from the radio is nice." },
      { k: ["바람", "시원하다"], a: "가을 바람이 시원해요.", e: "The autumn breeze is cool." }
    ],
    review: [
      { ko: "가을 하늘[[이]] 높고 날씨[[가]] 참 좋아요.", base: "날씨", b: false, f: "가" },
      { ko: "봄이 되어서 길가에 꽃[[이]] 활짝 피었어요.", base: "꽃", b: true, f: "이" },
      { ko: "한국 식당의 비빔밥 음식[[이]] 아주 맛있어요.", base: "음식", b: true, f: "이" },
      { ko: "오후부터 하늘이 흐려지고 비[[가]] 내려요.", base: "비", b: false, f: "가" },
      { ko: "우리 대학교 교실[[이]] 넓고 환해요.", note: "받침 O → 이 / 받침 X → 가" }
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
      {
        k: "이동 목적지 (+ 가요/와요)", f: "장소 + 에",
        ex: [["학교", "학교에"], ["집", "집에"], ["회사", "회사에"], ["한국", "한국에"], ["공항", "공항에"], ["병원", "병원에"]]
      },
      {
        k: "존재 위치 (+ 있어요/없어요)", f: "장소 + 에", c: "g2",
        ex: [["교실", "교실에"], ["책상 위", "책상 위에"], ["가방 안", "가방 안에"], ["공원", "공원에"], ["방", "방에"], ["은행", "은행에"]]
      }
    ],
    make: [
      { k: ["학교", "가다"], a: "오늘 학교에 가요.", e: "I go to school today." },
      { k: ["책상 위", "있다"], a: "책이 책상 위에 있어요.", e: "The book is on the desk." },
      { k: ["집", "오다"], a: "오후에 집에 와요.", e: "I come home in the afternoon." },
      { k: ["교실", "있다"], a: "친구가 교실에 있어요.", e: "My friend is in the classroom." },
      { k: ["회사", "가다"], a: "아침 8시에 회사에 가요.", e: "I go to the company at 8 AM." },
      { k: ["가방 안", "지갑", "있다"], a: "지갑이 가방 안에 있어요.", e: "The wallet is inside the bag." },
      { k: ["공항", "가다"], a: "친구를 만나러 공항에 가요.", e: "I go to the airport to meet my friend." },
      { k: ["병원", "가다"], a: "몸이 아파서 병원에 가요.", e: "I go to the hospital because I am sick." }
    ],
    review: [
      { ko: "아침마다 지하철을 타고 학교[[에]] 가요.", base: "학교", b: false, f: "에" },
      { ko: "제 한국어 사전은 책상 위[[에]] 있어요.", base: "책상 위", b: false, f: "에" },
      { ko: "퇴근하고 저녁 7시에 집[[에]] 와요.", base: "집", b: true, f: "에" },
      { ko: "선생님과 학생들이 지금 교실[[에]] 있어요.", base: "교실", b: true, f: "에" },
      { ko: "주말에는 가족과 함께 공원[[에]] 가요.", note: "목적지(가요/와요)와 위치(있어요/없어요)에 쓰는 '에'" }
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
      {
        k: "실내 활동 장소", f: "장소 + 에서",
        ex: [["도서관", "도서관에서"], ["카페", "카페에서"], ["식당", "식당에서"], ["집", "집에서"], ["교실", "교실에서"], ["서점", "서점에서"]]
      },
      {
        k: "야외·쇼핑 활동 장소", f: "장소 + 에서", c: "g2",
        ex: [["공원", "공원에서"], ["운동장", "운동장에서"], ["백화점", "백화점에서"], ["학교", "학교에서"], ["시장", "시장에서"], ["수영장", "수영장에서"]]
      }
    ],
    make: [
      { k: ["도서관", "공부하다"], a: "도서관에서 한국어를 공부해요.", e: "I study Korean at the library." },
      { k: ["공원", "운동하다"], a: "공원에서 아침에 운동해요.", e: "I exercise at the park in the morning." },
      { k: ["카페", "마시다"], a: "카페에서 커피를 마셔요.", e: "I drink coffee at a cafe." },
      { k: ["식당", "먹다"], a: "식당에서 점심을 먹어요.", e: "I eat lunch at a restaurant." },
      { k: ["집", "쉬다"], a: "주말에는 집에서 편하게 쉬어요.", e: "I rest comfortably at home on weekends." },
      { k: ["백화점", "옷", "사다"], a: "백화점에서 예쁜 옷을 사요.", e: "I buy pretty clothes at the department store." },
      { k: ["서점", "책", "찾다"], a: "서점에서 한국어 책을 찾아요.", e: "I look for a Korean book at the bookstore." },
      { k: ["수영장", "수영하다"], a: "토요일에 수영장에서 수영해요.", e: "I swim at the swimming pool on Saturday." }
    ],
    review: [
      { ko: "조용한 대학교 도서관[[에서]] 한국어를 공부해요.", base: "도서관", b: true, f: "에서" },
      { ko: "분위기 좋은 카페[[에서]] 친구와 차를 마셔요.", base: "카페", b: false, f: "에서" },
      { ko: "한국 식당[[에서]] 불고기와 된장찌개를 먹어요.", base: "식당", b: true, f: "에서" },
      { ko: "주말 아침에 집 근처 공원[[에서]] 산책을 해요.", base: "공원", b: true, f: "에서" },
      { ko: "동네 큰 시장[[에서]] 신선한 과일을 사요.", note: "행동이 일어나는 장소에 쓰는 '에서'" }
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
      {
        k: "시각 · 요일 결합", f: "+ 에",
        ex: [["7시", "7시에"], ["9시", "9시에"], ["12시", "12시에"], ["4시", "4시에"], ["월요일", "월요일에"], ["토요일", "토요일에"]]
      },
      {
        k: "주의! 에 결합 불가", f: "에 ✕ (단독 사용)", c: "g2",
        ex: [["오늘", "오늘"], ["내일", "내일"], ["어제", "어제"], ["지금", "지금"], ["모레", "모레"], ["그저께", "그저께"]]
      }
    ],
    // Dedicated 12 valid time pairs for Bingo practice (all practicing +에 cleanly)
    bingoPairs: [
      ["아침 7시", "아침 7시에"], ["오전 9시", "오전 9시에"], ["낮 12시", "낮 12시에"],
      ["오후 3시", "오후 3시에"], ["오후 4시", "오후 4시에"], ["저녁 6시", "저녁 6시에"],
      ["저녁 7시", "저녁 7시에"], ["밤 10시", "밤 10시에"], ["월요일", "월요일에"],
      ["수요일", "수요일에"], ["금요일", "금요일에"], ["주말", "주말에"]
    ],
    make: [
      { k: ["7시", "일어나다"], a: "아침 7시에 일어나요.", e: "I wake up at 7 AM." },
      { k: ["4시", "만나다"], a: "토요일 오후 4시에 만나요.", e: "We meet at 4 PM on Saturday." },
      { k: ["주말", "쉬다"], a: "주말에 집에서 쉬어요.", e: "I rest at home on the weekend." },
      { k: ["오늘", "공부하다"], a: "오늘 한국어를 공부해요.", e: "I study Korean today." },
      { k: ["9시", "수업", "시작하다"], a: "오전 9시에 수업이 시작해요.", e: "Class starts at 9 AM." },
      { k: ["12시", "점심", "먹다"], a: "낮 12시에 점심을 먹어요.", e: "I eat lunch at 12 PM." },
      { k: ["밤 11시", "자다"], a: "밤 11시에 잠을 자요.", e: "I go to sleep at 11 PM." },
      { k: ["내일", "친구", "만나다"], a: "내일 친구를 만나요.", e: "I meet my friend tomorrow." }
    ],
    review: [
      { ko: "저는 매일 아침 7시[[에]] 일어나요.", base: "7시", b: false, f: "에" },
      { ko: "오전 9시[[에]] 한국어 수업이 있어요.", base: "9시", b: false, f: "에" },
      { ko: "우리 이번 주 토요일[[에]] 같이 영화를 봐요.", base: "토요일", b: true, f: "에" },
      { ko: "오늘[[은]] 친구를 만나요. (오늘에 ✕)", base: "오늘", b: true, f: "은" },
      { ko: "밤 10시[[에]] 숙제를 끝내고 자요.", note: "시각·요일 뒤에는 '에' / 오늘·내일·어제 뒤에는 '에' 금지" }
    ],
    sits: [
      { t: "나의 하루 시각", q: "매일 몇 시[[에]] 일어나요? 몇 시[[에]] 자요?", qen: "What time do you wake up every day? What time do you sleep?", m: ["아침 7시[[에]] 일어나요.", "밤 11시[[에]] 자요."] },
      { t: "생일과 기념일", q: "생일이 몇 월 며칠[[에]] 있어요?", qen: "Which month and day is your birthday?", m: ["제 생일은 5월[[에]] 있어요.", "토요일[[에]] 파티를 해요."] },
      { t: "오늘과 내일 일정", q: "오늘 몇 시[[에]] 수업이 있어요? 내일 뭐 해요?", qen: "What time do you have class today? What do you do tomorrow?", m: ["오늘 오전 10시[[에]] 수업이 있어요.", "내일 친구를 만나요."] }
    ]
  }
};
