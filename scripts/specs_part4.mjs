// Unit 4: 함께하고 덧붙여요 (Lessons 15–22)
export const SPECS_PART4 = {
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
      {
        k: "주어 자리 대체 (은/는, 이/가 대신)", f: "명사 + 도",
        ex: [["저", "저도"], ["친구", "친구도"], ["동생", "동생도"], ["선생님", "선생님도"], ["형", "형도"], ["누나", "누나도"]]
      },
      {
        k: "목적어 자리 대체 (을/를 대신)", f: "명사 + 도", c: "g2",
        ex: [["녹차", "녹차도"], ["책", "책도"], ["영화", "영화도"], ["운동", "운동도"], ["라면", "라면도"], ["사과", "사과도"]]
      }
    ],
    make: [
      { k: ["저", "학생"], a: "저도 학생이에요.", e: "I am also a student." },
      { k: ["녹차", "좋아하다"], a: "커피를 좋아해요. 녹차도 좋아해요.", e: "I like coffee. I also like green tea." },
      { k: ["친구", "오다"], a: "오늘 제 친구도 교실에 와요.", e: "My friend is also coming to the classroom today." },
      { k: ["책", "사다"], a: "가방을 사요. 책도 사요.", e: "I buy a bag. I also buy a book." },
      { k: ["동생", "한국어", "배우다"], a: "제 동생도 한국어를 배워요.", e: "My younger sibling also learns Korean." },
      { k: ["라면", "먹다"], a: "김밥을 먹어요. 라면도 먹어요.", e: "I eat gimbap. I also eat ramen." },
      { k: ["영화", "보다"], a: "드라마를 봐요. 영화도 봐요.", e: "I watch dramas. I also watch movies." },
      { k: ["선생님", "웃다"], a: "학생들이 웃어요. 선생님도 웃으세요.", e: "Students smile. The teacher also smiles." }
    ],
    review: [
      { ko: "마이클 씨는 미국 사람이에요. 사라 씨[[도]] 미국 사람이에요.", base: "사라 씨", b: false, f: "도" },
      { ko: "아침에 커피를 마셔요. 시원한 물[[도]] 마셔요.", base: "물", b: true, f: "도" },
      { ko: "저는 대학교에서 경제학을 배워요. 한국어[[도]] 열심히 공부해요.", base: "한국어", b: false, f: "도" },
      { ko: "토요일에 쉬어요. 일요일[[도]] 푹 쉬어요.", base: "일요일", b: true, f: "도" },
      { ko: "도서관에서 책을 빌려요. 음악 CD[[도]] 들어요.", note: "은/는, 이/가, 을/를 자리에 대신 들어가는 '도'" }
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
      {
        k: "받침 O (+ 과 / 이랑 / 하고)", f: "+ 과",
        ex: [["책", "책과"], ["빵", "빵과"], ["동생", "동생과"], ["선생님", "선생님과"], ["신문", "신문과"], ["라면", "라면과"]]
      },
      {
        k: "받침 X (+ 와 / 랑 / 하고)", f: "+ 와", c: "g2",
        ex: [["커피", "커피와"], ["우유", "우유와"], ["친구", "친구와"], ["누나", "누나와"], ["사과", "사과와"], ["의자", "의자와"]]
      }
    ],
    make: [
      { k: ["빵", "우유", "먹다"], a: "아침에 빵하고 우유를 먹어요.", e: "I eat bread and milk in the morning." },
      { k: ["친구", "영화", "보다"], a: "주말에 친구랑 영화를 봐요.", e: "I watch a movie with my friend on the weekend." },
      { k: ["책", "연필", "사다"], a: "문구점에서 책과 연필을 사요.", e: "I buy a book and a pencil at the stationery store." },
      { k: ["동생", "공원", "가다"], a: "동생이랑 같이 공원에 가요.", e: "I go to the park together with my younger sibling." },
      { k: ["사과", "바나나", "사다"], a: "시장에서 사과와 바나나를 사요.", e: "I buy apples and bananas at the market." },
      { k: ["선생님", "이야기하다"], a: "방과 후에 선생님과 이야기해요.", e: "I talk with the teacher after class." },
      { k: ["커피", "케이크", "주문하다"], a: "카페에서 커피하고 케이크를 주문해요.", e: "I order coffee and cake at the cafe." },
      { k: ["형", "운동하다"], a: "주말마다 형이랑 운동해요.", e: "I exercise with my older brother every weekend." }
    ],
    review: [
      { ko: "아침 식사로 따뜻한 빵[[과]] 우유를 먹어요.", base: "빵", b: true, f: "과" },
      { ko: "주말 오후에 친한 친구[[와]] 영화관에 가요.", base: "친구", b: false, f: "와" },
      { ko: "식탁 위에 맛있는 사과[[하고]] 바나나가 놓여 있어요.", base: "사과", b: false, f: "하고" },
      { ko: "휴일에 귀여운 동생[[이랑]] 같이 쇼핑을 해요.", base: "동생", b: true, f: "이랑" },
      { ko: "가방 안에 한국어 책[[과]] 공책, 필통이 있어요.", note: "받침 O: 과/이랑 | 받침 X: 와/랑 | 무관: 하고" }
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
      {
        k: "받침 O 명사", f: "+ 만",
        ex: [["물", "물만"], ["책", "책만"], ["빵", "빵만"], ["한국어", "한국어만"], ["돈", "돈만"], ["한 번", "한 번만"]]
      },
      {
        k: "받침 X 명사 / 조사 뒤", f: "+ 만", c: "g2",
        ex: [["커피", "커피만"], ["저", "저만"], ["야채", "야채만"], ["집에", "집에만"], ["사과", "사과만"], ["친구한테", "친구한테만"]]
      }
    ],
    make: [
      { k: ["커피", "마시다"], a: "아침에 커피만 마셔요.", e: "I drink only coffee in the morning." },
      { k: ["집", "있다"], a: "일요일에는 집에만 있어요.", e: "I stay only at home on Sundays." },
      { k: ["한국어", "말하다"], a: "수업 시간에 한국어만 말해요.", e: "We speak only Korean during class." },
      { k: ["물", "마시다"], a: "운동할 때 물만 마셔요.", e: "I drink only water when exercising." },
      { k: ["야채", "먹다"], a: "건강을 위해 야채만 먹어요.", e: "I eat only vegetables for health." },
      { k: ["한국 영화", "보다"], a: "주말에는 한국 영화만 봐요.", e: "I watch only Korean movies on weekends." },
      { k: ["사과", "사다"], a: "과일 가게에서 사과만 사요.", e: "I buy only apples at the fruit store." },
      { k: ["저", "알다"], a: "이 비밀은 저만 알아요.", e: "Only I know this secret." }
    ],
    review: [
      { ko: "바쁜 아침에는 밥 대신 따뜻한 차[[만]] 한 잔 마셔요.", base: "차", b: false, f: "만" },
      { ko: "피곤해서 주말에는 하루 종일 집에[[만]] 있었어요.", base: "집에", b: false, f: "만" },
      { ko: "한국어 교실 안에서는 한국어[[만]] 사용해요.", base: "한국어", b: false, f: "만" },
      { ko: "시험 전날에는 도서관에서 책[[만]] 집중해서 읽어요.", base: "책", b: true, f: "만" },
      { ko: "우리 반에서는 마이클 씨[[만]] 일본어를 할 줄 알아요.", note: "받침 유무와 관계없이 오직 그것만을 나타내는 '만'" }
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
      {
        k: "받침 O", f: "+ 이나",
        ex: [["빵", "빵이나"], ["책", "책이나"], ["토요일", "토요일이나"], ["지하철", "지하철이나"], ["라면", "라면이나"], ["신문", "신문이나"]]
      },
      {
        k: "받침 X", f: "+ 나", c: "g2",
        ex: [["커피", "커피나"], ["영화", "영화나"], ["버스", "버스나"], ["노래", "노래나"], ["사과", "사과나"], ["주스", "주스나"]]
      }
    ],
    make: [
      { k: ["커피", "주스", "마시다"], a: "커피나 주스를 마셔요.", e: "I drink coffee or juice." },
      { k: ["토요일", "일요일", "만나다"], a: "토요일이나 일요일에 만나요.", e: "We meet on Saturday or Sunday." },
      { k: ["지하철", "버스", "타다"], a: "지하철이나 버스로 학교에 가요.", e: "I go to school by subway or bus." },
      { k: ["빵", "김밥", "먹다"], a: "아침에 빵이나 김밥을 먹어요.", e: "I eat bread or gimbap in the morning." },
      { k: ["영화", "드라마", "보다"], a: "저녁에 영화나 드라마를 봐요.", e: "I watch a movie or drama in the evening." },
      { k: ["책", "잡지", "읽다"], a: "도서관에서 책이나 잡지를 읽어요.", e: "I read books or magazines at the library." },
      { k: ["사과", "바나나", "사다"], a: "마트에서 사과나 바나나를 사요.", e: "I buy apples or bananas at the mart." },
      { k: ["운동", "산책", "하다"], a: "주말에는 운동이나 산책을 해요.", e: "On weekends I do exercise or go for a walk." }
    ],
    review: [
      { ko: "카페에서 따뜻한 커피[[나]] 달콤한 주스를 마셔요.", base: "커피", b: false, f: "나" },
      { ko: "아침 식사로 가볍게 빵[[이나]] 샌드위치를 먹어요.", base: "빵", b: true, f: "이나" },
      { ko: "우리 이번 주 토요일[[이나]] 일요일에 만나요.", base: "토요일", b: true, f: "이나" },
      { ko: "학교에 갈 때 지하철[[이나]] 시내버스를 타요.", base: "지하철", b: true, f: "이나" },
      { ko: "심심할 때 집에서 영화[[나]] 음악을 감상해요.", note: "받침 O → 이나 / 받침 X → 나" }
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
      {
        k: "시간의 반복 (every)", f: "시간 + 마다",
        ex: [["아침", "아침마다"], ["날", "날마다"], ["주말", "주말마다"], ["일요일", "일요일마다"], ["저녁", "저녁마다"], ["달", "달마다"]]
      },
      {
        k: "대상의 개별성 (each)", f: "명사 + 마다", c: "g2",
        ex: [["사람", "사람마다"], ["나라", "나라마다"], ["교실", "교실마다"], ["학생", "학생마다"], ["방", "방마다"], ["가게", "가게마다"]]
      }
    ],
    make: [
      { k: ["아침", "운동하다"], a: "아침마다 공원에서 운동해요.", e: "I exercise at the park every morning." },
      { k: ["날", "한국어", "공부하다"], a: "날마다 한국어를 공부해요.", e: "I study Korean every day." },
      { k: ["주말", "영화", "보다"], a: "주말마다 가족과 영화를 봐요.", e: "I watch a movie with my family every weekend." },
      { k: ["사람", "성격", "다르다"], a: "사람마다 좋아하는 음식이 달라요.", e: "Favorite foods differ for each person." },
      { k: ["저녁", "산책하다"], a: "저녁마다 강아지와 산책해요.", e: "I take a walk with my puppy every evening." },
      { k: ["나라", "문화", "다르다"], a: "나라마다 전통 문화가 달라요.", e: "Traditional cultures differ in each country." },
      { k: ["교실", "시계", "있다"], a: "교실마다 큰 시계가 있어요.", e: "There is a big clock in every classroom." },
      { k: ["일요일", "청소하다"], a: "일요일마다 방을 깨끗이 청소해요.", e: "I clean my room clean every Sunday." }
    ],
    review: [
      { ko: "건강을 위해 아침[[마다]] 시원한 물을 마셔요.", base: "아침", b: true, f: "마다" },
      { ko: "날[[마다]] 새로운 한국어 단어를 다섯 개씩 외워요.", base: "날", b: true, f: "마다" },
      { ko: "주말[[마다]] 가족들과 함께 근교로 여행을 떠나요.", base: "주말", b: true, f: "마다" },
      { ko: "나라[[마다]] 인사하는 방법과 문화가 서로 달라요.", base: "나라", b: false, f: "마다" },
      { ko: "사람[[마다]] 좋아하는 취미가 다 달라요.", note: "시간이나 명사 뒤에 붙어 빠짐없음을 나타내는 '마다'" }
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
      {
        k: "이름 · 인물 명사 + 의", f: "+ 의",
        ex: [["선생님", "선생님의"], ["친구", "친구의"], ["마이클", "마이클의"], ["하준", "하준의"], ["부모님", "부모님의"], ["동생", "동생의"]]
      },
      {
        k: "인칭대명사 및 국가 + 의", f: "+ 의 (축약: 저의→제)", c: "g2",
        ex: [["저", "저의 (제)"], ["나", "나의 (내)"], ["우리", "우리의 (우리)"], ["한국", "한국의"], ["사라", "사라의"], ["누나", "누나의"]]
      }
    ],
    make: [
      { k: ["리에", "가방"], a: "이거는 리에 씨의 가방이에요.", e: "This is Rie's bag." },
      { k: ["선생님", "책"], a: "책상 위에 선생님의 책이 있어요.", e: "The teacher's book is on the desk." },
      { k: ["저", "이름", "유진"], a: "제 이름은 유진이에요.", e: "My name is Yujin." },
      { k: ["친구", "생일"], a: "오늘은 제 친구의 생일이에요.", e: "Today is my friend's birthday." },
      { k: ["마이클", "시계"], a: "이거는 마이클 씨의 시계예요.", e: "This is Michael's watch." },
      { k: ["한국", "수도", "서울"], a: "한국의 수도는 서울이에요.", e: "The capital of Korea is Seoul." },
      { k: ["아버지", "안경"], a: "거실에 아버지의 안경이 있어요.", e: "My father's glasses are in the living room." },
      { k: ["동생", "꿈"], a: "제 동생의 꿈은 요리사예요.", e: "My younger sibling's dream is to be a chef." }
    ],
    review: [
      { ko: "책상 위에 놓인 사전은 선생님[[의]] 책이에요.", base: "선생님", b: true, f: "의" },
      { ko: "이 예쁜 필통은 제 친구[[의]] 물건이에요.", base: "친구", b: false, f: "의" },
      { ko: "안녕하세요? [[제]] 이름은 유진이에요.", base: "저", b: false, f: "제" },
      { ko: "한국[[의]] 전통 음식은 전 세계에서 인기가 많아요.", base: "한국", b: true, f: "의" },
      { ko: "이 모자는 마이클 씨[[의]] 모자예요.", note: "소유나 소속을 나타내는 '의' (구어에서는 저의→제, 나의→내)" }
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
      {
        k: "사물 · 교통수단 비교", f: "기준 + 보다",
        ex: [["기차", "기차보다"], ["버스", "버스보다"], ["배", "배보다"], ["자전거", "자전거보다"], ["비행기", "비행기보다"], ["자동차", "자동차보다"]]
      },
      {
        k: "시간 · 장소 · 인물 비교", f: "기준 + 보다", c: "g2",
        ex: [["어제", "어제보다"], ["서울", "서울보다"], ["부산", "부산보다"], ["여름", "여름보다"], ["형", "형보다"], ["커피", "커피보다"]]
      }
    ],
    make: [
      { k: ["비행기", "기차", "빠르다"], a: "비행기가 기차보다 더 빨라요.", e: "An airplane is faster than a train." },
      { k: ["부산", "서울", "따뜻하다"], a: "부산이 서울보다 따뜻해요.", e: "Busan is warmer than Seoul." },
      { k: ["오늘", "어제", "시원하다"], a: "오늘 날씨가 어제보다 시원해요.", e: "Today's weather is cooler than yesterday's." },
      { k: ["동생", "형", "크다"], a: "동생이 형보다 키가 더 커요.", e: "The younger brother is taller than the older brother." },
      { k: ["기차", "버스", "편하다"], a: "기차가 버스보다 더 편해요.", e: "A train is more comfortable than a bus." },
      { k: ["한국어", "영어", "재미있다"], a: "한국어가 영어보다 재미있어요.", e: "Korean is more fun than English." },
      { k: ["백화점", "시장", "비싸다"], a: "백화점이 시장보다 더 비싸요.", e: "The department store is more expensive than the market." },
      { k: ["수박", "사과", "크다"], a: "수박이 사과보다 훨씬 커요.", e: "A watermelon is much bigger than an apple." }
    ],
    review: [
      { ko: "하늘을 나는 비행기가 기차[[보다]] 훨씬 빨라요.", base: "기차", b: false, f: "보다" },
      { ko: "남쪽 바닷가 부산이 서울[[보다]] 겨울에 더 따뜻해요.", base: "서울", b: true, f: "보다" },
      { ko: "오늘 날씨는 맑아서 어제[[보다]] 바람이 시원해요.", base: "어제", b: false, f: "보다" },
      { ko: "제 남동생이 형[[보다]] 키가 5cm 더 커요.", base: "형", b: true, f: "보다" },
      { ko: "고속열차가 고속버스[[보다]] 훨씬 빠르고 편해요.", note: "비교 기준 명사 뒤에 붙는 '보다' ('~보다 더')" }
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
      {
        k: "명사 + 처럼", f: "+ 처럼",
        ex: [["가수", "가수처럼"], ["한국 사람", "한국 사람처럼"], ["배우", "배우처럼"], ["가족", "가족처럼"], ["새", "새처럼"], ["호랑이", "호랑이처럼"]]
      },
      {
        k: "명사 + 같이", f: "+ 같이", c: "g2",
        ex: [["천사", "천사같이"], ["눈", "눈같이"], ["바다", "바다같이"], ["친구", "친구같이"], ["토끼", "토끼같이"], ["거북이", "거북이같이"]]
      }
    ],
    make: [
      { k: ["가수", "노래하다"], a: "가수처럼 노래를 잘해요.", e: "He sings well like a singer." },
      { k: ["천사", "착하다"], a: "마음이 천사같이 착해요.", e: "She is kind-hearted like an angel." },
      { k: ["한국 사람", "말하다"], a: "한국 사람처럼 한국어를 잘해요.", e: "She speaks Korean well like a Korean." },
      { k: ["배우", "멋있다"], a: "영화배우처럼 정말 멋있어요.", e: "He is really cool like a movie actor." },
      { k: ["눈", "하얗다"], a: "피부가 하얀 눈같이 하얘요.", e: "Her skin is white like snow." },
      { k: ["바다", "넓다"], a: "마음이 넓은 바다같이 넓어요.", e: "His mind is broad like the ocean." },
      { k: ["새", "날다"], a: "새처럼 하늘을 자유롭게 날고 싶어요.", e: "I want to fly freely like a bird." },
      { k: ["가족", "친하다"], a: "우리는 친가족처럼 가깝게 지내요.", e: "We get along closely like real family." }
    ],
    review: [
      { ko: "하준 씨는 무대 위에서 전문 가수[[처럼]] 멋지게 노래해요.", base: "가수", b: false, f: "처럼" },
      { ko: "미나 씨는 마음씨가 하늘의 천사[[같이]] 따뜻하고 착해요.", base: "천사", b: false, f: "같이" },
      { ko: "마이클 씨는 발음이 한국 사람[[처럼]] 아주 자연스러워요.", base: "한국 사람", b: true, f: "처럼" },
      { ko: "새하얀 겨울 눈[[같이]] 깨끗한 마음을 가지고 있어요.", base: "눈", b: true, f: "같이" },
      { ko: "우리는 서로 아끼며 진짜 가족[[처럼]] 지내요.", note: "비슷한 모양이나 정도를 빗대어 말하는 '처럼 / 같이'" }
    ],
    sits: [
      { t: "친구 칭찬하기", q: "짝은 누구[[처럼]] 멋있어요? 누구[[처럼]] 한국어를 잘해요?", qen: "Like whom is your partner cool? Like whom do they speak Korean well?", m: ["마이클 씨는 배우[[처럼]] 멋있어요.", "한국 사람[[처럼]] 발음이 좋아요."] },
      { t: "비유해서 표현하기", q: "누구[[처럼]] 노래나 요리를 잘하고 싶어요?", qen: "Like whom do you want to sing or cook well?", m: ["요리사[[처럼]] 요리를 잘하고 싶어요.", "가수[[처럼]] 노래를 부르고 싶어요."] }
    ]
  }
};
