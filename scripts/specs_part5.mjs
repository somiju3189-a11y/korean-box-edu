// Units 5 & 6: 시제와 바람 & 정확한 부정 (Lessons 23–30)
export const SPECS_PART5 = {
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
      {
        k: "ㅏ, ㅗ 모음 어간", f: "+ -았어요",
        ex: [["만나다", "만났어요"], ["보다", "봤어요"], ["가다", "갔어요"], ["좋다", "좋았어요"], ["사다", "샀어요"], ["오다", "왔어요"]]
      },
      {
        k: "그 외 모음 / 하다 어간", f: "+ -었어요 / 했어요", c: "g2",
        ex: [["먹다", "먹었어요"], ["읽다", "읽었어요"], ["마시다", "마셨어요"], ["배우다", "배웠어요"], ["공부하다", "공부했어요"], ["운동하다", "운동했어요"]]
      }
    ],
    make: [
      { k: ["어제", "친구", "만나다"], a: "어제 친구를 만났어요.", e: "I met a friend yesterday." },
      { k: ["주말", "영화", "보다"], a: "주말에 영화를 봤어요.", e: "I watched a movie on the weekend." },
      { k: ["아침", "빵", "먹다"], a: "오늘 아침에 빵을 먹었어요.", e: "I ate bread this morning." },
      { k: ["도서관", "공부하다"], a: "어제 도서관에서 한국어를 공부했어요.", e: "I studied Korean at the library yesterday." },
      { k: ["지난주", "제주도", "가다"], a: "지난주에 제주도에 갔어요.", e: "I went to Jeju Island last week." },
      { k: ["어제 날씨", "좋다"], a: "어제는 날씨가 아주 좋았어요.", e: "The weather was very nice yesterday." },
      { k: ["카페", "커피", "마시다"], a: "카페에서 시원한 커피를 마셨어요.", e: "I drank iced coffee at a cafe." },
      { k: ["어젯밤", "푹", "자다"], a: "어젯밤에 일찍 푹 잤어요.", e: "I slept deeply and early last night." }
    ],
    review: [
      { ko: "어제 방과 후에 카페에서 고향 친구를 [[만났어요]].", base: "만나다", b: false, f: "만났어요" },
      { ko: "주말 저녁에 가족과 함께 한국 영화를 [[봤어요]].", base: "보다", b: false, f: "봤어요" },
      { ko: "식당에서 친구들과 불고기를 정말 맛있게 [[먹었어요]].", base: "먹다", b: true, f: "먹었어요" },
      { ko: "도서관에서 어제 시험공부를 열심히 [[했어요]].", base: "공부하다", b: false, f: "공부했어요" },
      { ko: "지난 주말 여행은 날씨가 참 [[좋았어요]].", note: "과거의 일: ㅏ, ㅗ → -았어요 / 그 외 → -었어요 / 하다 → 했어요" }
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
      bWho: "B · 사라", bKo: ["친구랑 부산으로 여행을 [[갈 거예요]].", "바다에서 사진도 많이 찍[[을 거예요]]."], bEn: ["I [[am going to go]] on a trip to Busan with my friend.", "We [[will]] also [[take]] lots of photos at the beach."],
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
      {
        k: "받침 O (ㄹ 제외)", f: "+ -을 거예요",
        ex: [["먹다", "먹을 거예요"], ["읽다", "읽을 거예요"], ["찍다", "찍을 거예요"], ["듣다", "들을 거예요"], ["찾다", "찾을 거예요"], ["받다", "받을 거예요"]]
      },
      {
        k: "받침 X / ㄹ 받침", f: "+ -ㄹ 거예요", c: "g2",
        ex: [["가다", "갈 거예요"], ["보다", "볼 거예요"], ["공부하다", "공부할 거예요"], ["살다", "살 거예요"], ["만나다", "만날 거예요"], ["마시다", "마실 거예요"]]
      }
    ],
    make: [
      { k: ["주말", "여행", "가다"], a: "주말에 부산으로 여행을 갈 거예요.", e: "I will go on a trip to Busan on the weekend." },
      { k: ["방학", "한국어", "공부하다"], a: "방학에 한국어를 공부할 거예요.", e: "I will study Korean during vacation." },
      { k: ["내일", "친구", "만나다"], a: "내일 카페에서 친구를 만날 거예요.", e: "I will meet my friend at a cafe tomorrow." },
      { k: ["저녁", "불고기", "먹다"], a: "오늘 저녁에 불고기를 먹을 거예요.", e: "I will eat bulgogi this evening." },
      { k: ["주말", "영화", "보다"], a: "이번 주말에 새 영화를 볼 거예요.", e: "I will watch a new movie this weekend." },
      { k: ["바다", "사진", "찍다"], a: "바닷가에서 멋진 사진을 찍을 거예요.", e: "I will take nice photos at the seaside." },
      { k: ["도서관", "책", "읽다"], a: "주말에 도서관에서 책을 읽을 거예요.", e: "I will read books at the library on the weekend." },
      { k: ["한국", "오래", "살다"], a: "저는 한국에서 오래 살 거예요.", e: "I will live in Korea for a long time." }
    ],
    review: [
      { ko: "이번 여름 휴가에 친구들과 제주도로 여행을 [[갈 거예요]].", base: "가다", b: false, f: "갈 거예요" },
      { ko: "오늘 저녁 식사로 맛있는 한식을 [[먹을 거예요]].", base: "먹다", b: true, f: "먹을 거예요" },
      { ko: "주말에 도서관에서 한국 역사 책을 [[읽을 거예요]].", base: "읽다", b: true, f: "읽을 거예요" },
      { ko: "다음 학기에도 한국어를 계속해서 열심히 [[공부할 거예요]].", base: "공부하다", b: false, f: "공부할 거예요" },
      { ko: "내일 오후 3시에 시내에서 친구를 [[만날 거예요]].", note: "받침 O(ㄹ 제외) → -을 거예요 / 받침 X 및 ㄹ 받침 → -ㄹ 거예요" }
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
      {
        k: "받침 O 동작동사", f: "+ -고 있어요",
        ex: [["먹다", "먹고 있어요"], ["읽다", "읽고 있어요"], ["듣다", "듣고 있어요"], ["찾다", "찾고 있어요"], ["찍다", "찍고 있어요"], ["받다", "받고 있어요"]]
      },
      {
        k: "받침 X 동작동사", f: "+ -고 있어요", c: "g2",
        ex: [["마시다", "마시고 있어요"], ["배우다", "배우고 있어요"], ["보다", "보고 있어요"], ["공부하다", "공부하고 있어요"], ["쉬다", "쉬고 있어요"], ["일하다", "일하고 있어요"]]
      }
    ],
    make: [
      { k: ["지금", "커피", "마시다"], a: "지금 커피를 마시고 있어요.", e: "I am drinking coffee right now." },
      { k: ["교실", "한국어", "배우다"], a: "교실에서 한국어를 배우고 있어요.", e: "I am learning Korean in the classroom." },
      { k: ["도서관", "책", "읽다"], a: "도서관에서 책을 읽고 있어요.", e: "I am reading a book at the library." },
      { k: ["친구", "영화", "보다"], a: "지금 친구와 영화를 보고 있어요.", e: "I am watching a movie with my friend now." },
      { k: ["식당", "점심", "먹다"], a: "식당에서 친구와 점심을 먹고 있어요.", e: "I am eating lunch with my friend at a restaurant." },
      { k: ["방", "음악", "듣다"], a: "방에서 조용히 음악을 듣고 있어요.", e: "I am listening to music quietly in my room." },
      { k: ["공원", "운동하다"], a: "공원에서 시원하게 운동하고 있어요.", e: "I am exercising refreshingly at the park." },
      { k: ["집", "편히", "쉬다"], a: "집 소파에서 편히 쉬고 있어요.", e: "I am resting comfortably on the sofa at home." }
    ],
    review: [
      { ko: "지금 창가 자리에서 따뜻한 차를 [[마시고 있어요]].", base: "마시다", b: false, f: "마시고 있어요" },
      { ko: "학생들이 교실에서 한국어 회화를 [[배우고 있어요]].", base: "배우다", b: false, f: "배우고 있어요" },
      { ko: "도서관 열람실에서 한국어 책을 집중해서 [[읽고 있어요]].", base: "읽다", b: true, f: "읽고 있어요" },
      { ko: "선생님 말씀을 귀 기울여 집중해서 [[듣고 있어요]].", base: "듣다", b: true, f: "듣고 있어요" },
      { ko: "친구와 함께 공원에서 가볍게 조깅하며 [[운동하고 있어요]].", note: "받침 유무 상관없이 진행 중인 동작에 붙는 '-고 있어요'" }
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
      {
        k: "현재·미래 추측 (-겠어요)", f: "어간 + -겠어요",
        ex: [["맛있다", "맛있겠어요"], ["오다", "오겠어요"], ["좋다", "좋겠어요"], ["바쁘다", "바쁘겠어요"], ["예쁘다", "예쁘겠어요"], ["맵다", "맵겠어요"]]
      },
      {
        k: "과거 일 공감·추측 (-았/었겠어요)", f: "어간 + -았/었겠어요", c: "g2",
        ex: [["힘들다", "힘들었겠어요"], ["재미있다", "재미있었겠어요"], ["좋다", "좋았겠어요"], ["바쁘다", "바빴겠어요"], ["피곤하다", "피곤했겠어요"], ["아프다", "아팠겠어요"]]
      }
    ],
    // 2 Separate Bingo Boards for Lesson 26 (Engine supports multi-board via [{tag, pairs}])
    bingoMulti: [
      {
        tag: "-겠어요 (현재 추측)",
        pairs: [
          ["맛있다", "맛있겠어요"], ["오다", "오겠어요"], ["좋다", "좋겠어요"],
          ["바쁘다", "바쁘겠어요"], ["예쁘다", "예쁘겠어요"], ["맵다", "맵겠어요"],
          ["크다", "크겠어요"], ["시원하다", "시원하겠어요"], ["어렵다", "어렵겠어요"],
          ["비싸다", "비싸겠어요"], ["멋있다", "멋있겠어요"], ["재미있다", "재미있겠어요"]
        ]
      },
      {
        tag: "-았/었겠어요 (과거 공감)",
        c: "b2",
        pairs: [
          ["힘들다", "힘들었겠어요"], ["재미있다", "재미있었겠어요"], ["좋다", "좋았겠어요"],
          ["바쁘다", "바빴겠어요"], ["피곤하다", "피곤했겠어요"], ["아프다", "아팠겠어요"],
          ["맛있다", "맛있었겠어요"], ["어렵다", "어려웠겠어요"], ["춥다", "추웠겠어요"],
          ["덥다", "더웠겠어요"], ["기쁘다", "기뻤겠어요"], ["슬프다", "슬펐겠어요"]
        ]
      }
    ],
    make: [
      { k: ["불고기", "맛있다"], a: "와, 불고기가 정말 맛있겠어요!", e: "Wow, the bulgogi must be really delicious!" },
      { k: ["구름", "비", "오다"], a: "구름이 많아서 비가 오겠어요.", e: "There are many clouds, so it will probably rain." },
      { k: ["여행", "재미있다"], a: "주말 여행이 정말 재미있겠어요.", e: "The weekend trip must be really fun." },
      { k: ["어제", "힘들다"], a: "어제 일이 많아서 힘들었겠어요.", e: "You must have had a hard time with so much work yesterday." },
      { k: ["새 옷", "예쁘다"], a: "새로 산 옷이 참 예쁘겠어요.", e: "The newly bought clothes must look so pretty." },
      { k: ["제주도", "경치", "좋다"], a: "제주도 바다 경치가 참 좋겠어요.", e: "The sea view in Jeju must be so nice." },
      { k: ["밤늦게", "피곤하다"], a: "밤늦게까지 공부해서 피곤했겠어요.", e: "You must have been tired studying till late." },
      { k: ["매운 떡볶이", "맵다"], a: "빨간 떡볶이가 많이 맵겠어요.", e: "The red tteokbokki must be very spicy." }
    ],
    review: [
      { ko: "식탁 위에 놓인 음식이 냄새도 좋고 정말 [[맛있겠어요]].", base: "맛있다", b: true, f: "맛있겠어요" },
      { ko: "하늘에 먹구름이 가득해서 곧 시원한 비가 [[오겠어요]].", base: "오다", b: false, f: "오겠어요" },
      { ko: "어제 하루 종일 이사하느라 몸이 많이 [[힘들었겠어요]].", base: "힘들다", b: true, f: "힘들었겠어요" },
      { ko: "친구들과 함께 다녀온 주말 바다 여행이 참 [[재미있었겠어요]].", base: "재미있다", b: true, f: "재미있었겠어요" },
      { ko: "밤새 시험 준비하느라 오늘 많이 [[피곤하겠어요]].", note: "현재 추측: -겠어요 / 과거 일에 대한 공감·추측: -았/었겠어요" }
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
      {
        k: "일반 동사 · 형용사 (안 + 서술어)", f: "안 + 어간",
        ex: [["가다", "안 가요"], ["먹다", "안 먹어요"], ["비싸다", "안 비싸요"], ["맵다", "안 매워요"], ["마시다", "안 마셔요"], ["보다", "안 봐요"]]
      },
      {
        k: "명사 + 하다 동사 (명사 + 안 해요)", f: "명사 + 안 해요", c: "g2",
        ex: [["공부하다", "공부를 안 해요"], ["운동하다", "운동을 안 해요"], ["일하다", "일을 안 해요"], ["요리하다", "요리를 안 해요"], ["청소하다", "청소를 안 해요"], ["수영하다", "수영을 안 해요"]]
      }
    ],
    make: [
      { k: ["일요일", "학교", "가다"], a: "일요일에는 학교에 안 가요.", e: "I don't go to school on Sunday." },
      { k: ["가방", "비싸다"], a: "이 가방은 안 비싸요.", e: "This bag is not expensive." },
      { k: ["아침", "먹다"], a: "바빠서 아침을 안 먹어요.", e: "I'm busy so I don't eat breakfast." },
      { k: ["주말", "일하다"], a: "주말에는 일을 안 해요.", e: "I don't work on weekends." },
      { k: ["커피", "마시다"], a: "밤에는 커피를 안 마셔요.", e: "I don't drink coffee at night." },
      { k: ["불고기", "맵다"], a: "불고기는 전혀 안 매워요.", e: "Bulgogi is not spicy at all." },
      { k: ["오늘", "운동하다"], a: "피곤해서 오늘은 운동을 안 해요.", e: "I don't exercise today because I am tired." },
      { k: ["한국어", "어렵다"], a: "한국어 문법이 안 어려워요.", e: "Korean grammar is not difficult." }
    ],
    review: [
      { ko: "일요일에는 회사에 [[안]] 가고 집에서 쉬어요.", base: "가다", b: false, f: "안 가요" },
      { ko: "할인 행사 중이라 이 신발은 전혀 [[안]] 비싸요.", base: "비싸다", b: false, f: "안 비싸요" },
      { ko: "늦잠을 자서 아침밥을 [[안]] 먹었어요.", base: "먹다", b: true, f: "안 먹었어요" },
      { ko: "시험이 다 끝나서 오늘은 공부를 [[안]] 해요.", base: "공부하다", b: false, f: "공부를 안 해요" },
      { ko: "한국의 불고기와 된장찌개는 하나도 [[안]] 매워요.", note: "단형 부정: 안 + 서술어 / '명사+하다'는 '명사 + 안 해요'" }
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
      {
        k: "형용사 어간 부정", f: "어간 + -지 않아요",
        ex: [["어렵다", "어렵지 않아요"], ["맵다", "맵지 않아요"], ["비싸다", "비싸지 않아요"], ["멀다", "멀지 않아요"], ["크다", "크지 않아요"], ["좁다", "좁지 않아요"]]
      },
      {
        k: "동사 어간 부정", f: "어간 + -지 않아요", c: "g2",
        ex: [["가다", "가지 않아요"], ["먹다", "먹지 않아요"], ["공부하다", "공부하지 않아요"], ["늦다", "늦지 않아요"], ["만나다", "만나지 않아요"], ["자다", "자지 않아요"]]
      }
    ],
    make: [
      { k: ["한국어", "어렵다"], a: "한국어 공부가 어렵지 않아요.", e: "Studying Korean is not difficult." },
      { k: ["음식", "맵다"], a: "이 음식은 맵지 않아요.", e: "This food is not spicy." },
      { k: ["학교", "멀다"], a: "집에서 학교가 멀지 않아요.", e: "The school is not far from home." },
      { k: ["주말", "일하다"], a: "주말에는 일하지 않아요.", e: "I do not work on weekends." },
      { k: ["가격", "비싸다"], a: "시장 과일은 비싸지 않아요.", e: "Market fruits are not expensive." },
      { k: ["수업", "늦다"], a: "아침에 수업에 늦지 않아요.", e: "I am not late for class in the morning." },
      { k: ["밤", "커피", "마시다"], a: "밤에는 커피를 마시지 않아요.", e: "I do not drink coffee at night." },
      { k: ["방", "좁다"], a: "기숙사 방이 좁지 않아요.", e: "The dorm room is not cramped." }
    ],
    review: [
      { ko: "선생님께서 쉽게 가르쳐 주셔서 한국어가 [[어렵지 않아요]].", base: "어렵다", b: true, f: "어렵지 않아요" },
      { ko: "이 한국 전통 찌개는 아이들도 먹을 만큼 [[맵지 않아요]].", base: "맵다", b: true, f: "맵지 않아요" },
      { ko: "우리 학교는 지하철역에서 걸어서 5분이라 [[멀지 않아요]].", base: "멀다", b: true, f: "멀지 않아요" },
      { ko: "평일에는 부지런히 일하고 주말에는 회사에 [[가지 않아요]].", base: "가다", b: false, f: "가지 않아요" },
      { ko: "규칙적으로 생활해서 아침 수업에 결코 [[늦지 않아요]].", note: "정중하고 차분한 장형 부정: 어간 + -지 않아요" }
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
      {
        k: "일반 동작동사 (못 + 동사)", f: "못 + 동사",
        ex: [["가다", "못 가요"], ["먹다", "못 먹어요"], ["마시다", "못 마셔요"], ["만나다", "못 만나요"], ["자다", "못 자요"], ["타다", "못 타요"]]
      },
      {
        k: "명사 + 하다 동사 (명사 + 못 해요)", f: "명사 + 못 해요", c: "g2",
        ex: [["수영하다", "수영을 못 해요"], ["운전하다", "운전을 못 해요"], ["요리하다", "요리를 못 해요"], ["운동하다", "운동을 못 해요"], ["말하다", "말을 못 해요"], ["전화하다", "전화를 못 해요"]]
      }
    ],
    make: [
      { k: ["수영", "하다"], a: "저는 수영을 못 해요.", e: "I cannot swim." },
      { k: ["오늘", "파티", "가다"], a: "바빠서 오늘 파티에 못 가요.", e: "I'm busy, so I can't go to the party today." },
      { k: ["매운 음식", "먹다"], a: "매운 음식을 잘 못 먹어요.", e: "I can't eat spicy food well." },
      { k: ["운전", "하다"], a: "아직 자동차 운전을 못 해요.", e: "I cannot drive a car yet." },
      { k: ["커피", "마시다"], a: "속이 아파서 커피를 못 마셔요.", e: "I cannot drink coffee because my stomach hurts." },
      { k: ["시험", "친구", "만나다"], a: "시험 때문에 친구를 못 만나요.", e: "I cannot meet my friend because of exams." },
      { k: ["어젯밤", "잠", "자다"], a: "더워서 어젯밤에 잠을 못 잤어요.", e: "I could not sleep last night because it was hot." },
      { k: ["요리", "하다"], a: "저는 요리를 잘 못 해요.", e: "I am not good at cooking." }
    ],
    review: [
      { ko: "물을 무서워해서 바다에서 수영을 [[못 해요]].", base: "수영하다", b: false, f: "수영을 못 해요" },
      { ko: "회사에 급한 회의가 생겨서 오늘 모임에 [[못 가요]].", base: "가다", b: false, f: "못 가요" },
      { ko: "매운 음식을 잘 [[못 먹어서]] 불고기를 시켰어요.", base: "먹다", b: true, f: "못 먹어요" },
      { ko: "면허가 없어서 아직 자동차 운전을 [[못 해요]].", base: "운전하다", b: false, f: "운전을 못 해요" },
      { ko: "어제는 커피를 너무 많이 마셔서 밤에 잠을 [[못 잤어요]].", note: "능력이나 외부 상황 때문에 할 수 없을 때 쓰는 '못'" }
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
      {
        k: "현재 불가능 (-지 못해요)", f: "어간 + -지 못해요",
        ex: [["먹다", "먹지 못해요"], ["가다", "가지 못해요"], ["수영하다", "수영하지 못해요"], ["자다", "자지 못해요"], ["운전하다", "운전하지 못해요"], ["마시다", "마시지 못해요"]]
      },
      {
        k: "과거 불가능 (-지 못했어요)", f: "어간 + -지 못했어요", c: "g2",
        ex: [["가다", "가지 못했어요"], ["만나다", "만나지 못했어요"], ["연락하다", "연락하지 못했어요"], ["보다", "보지 못했어요"], ["일하다", "일하지 못했어요"], ["운동하다", "운동하지 못했어요"]]
      }
    ],
    // 2 Separate Bingo Boards for Lesson 30 (현재 vs 과거 불가능)
    bingoMulti: [
      {
        tag: "-지 못해요 (현재 불가능)",
        pairs: [
          ["먹다", "먹지 못해요"], ["가다", "가지 못해요"], ["수영하다", "수영하지 못해요"],
          ["자다", "자지 못해요"], ["운전하다", "운전하지 못해요"], ["마시다", "마시지 못해요"],
          ["듣다", "듣지 못해요"], ["읽다", "읽지 못해요"], ["타다", "타지 못해요"],
          ["말하다", "말하지 못해요"], ["요리하다", "요리하지 못해요"], ["운동하다", "운동하지 못해요"]
        ]
      },
      {
        tag: "-지 못했어요 (과거 불가능)",
        c: "b2",
        pairs: [
          ["가다", "가지 못했어요"], ["만나다", "만나지 못했어요"], ["연락하다", "연락하지 못했어요"],
          ["보다", "보지 못했어요"], ["일하다", "일하지 못했어요"], ["운동하다", "운동하지 못했어요"],
          ["먹다", "먹지 못했어요"], ["자다", "자지 못했어요"], ["참석하다", "참석하지 못했어요"],
          ["사다", "사지 못했어요"], ["받다", "받지 못했어요"], ["끝내다", "끝내지 못했어요"]
        ]
      }
    ],
    make: [
      { k: ["아프다", "학교", "가다"], a: "어제 아파서 학교에 가지 못했어요.", e: "I couldn't go to school yesterday because I was sick." },
      { k: ["맵다", "먹다"], a: "음식이 너무 매워서 먹지 못해요.", e: "The food is too spicy, so I cannot eat it." },
      { k: ["바쁘다", "만나다"], a: "바빠서 친구를 만나지 못했어요.", e: "I was busy, so I couldn't meet my friend." },
      { k: ["피곤하다", "운동하다"], a: "피곤해서 운동하지 못했어요.", e: "I was tired, so I couldn't exercise." },
      { k: ["밤늦게", "잠", "자다"], a: "걱정이 많아서 잠을 자지 못했어요.", e: "I could not sleep because I had many worries." },
      { k: ["운전", "배우다"], a: "시간이 없어서 운전을 배우지 못했어요.", e: "I couldn't learn driving because I had no time." },
      { k: ["영화", "보다"], a: "표가 매진되어 영화를 보지 못했어요.", e: "I couldn't watch the movie because tickets were sold out." },
      { k: ["전화", "받다"], a: "회의 중이라 전화를 받지 못했어요.", e: "I couldn't answer the phone because I was in a meeting." }
    ],
    review: [
      { ko: "어제 갑자기 심한 감기에 걸려 학교에 [[가지 못했어요]].", base: "가다", b: false, f: "가지 못했어요" },
      { ko: "외국인이라 매운 고추장 떡볶이를 잘 [[먹지 못해요]].", base: "먹다", b: true, f: "먹지 못해요" },
      { ko: "회사 야근 때문에 약속 시간에 친구를 [[만나지 못했어요]].", base: "만나다", b: false, f: "만나지 못했어요" },
      { ko: "스마트폰 배터리가 다 닳아서 어제 [[연락하지 못했어요]].", base: "연락하다", b: false, f: "연락하지 못했어요" },
      { ko: "한국어 1급 30개 과를 완주하여 이제 서툴[[지 않아요]]!", note: "정중한 불가능 표현: 어간 + -지 못해요 / -지 못했어요" }
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
