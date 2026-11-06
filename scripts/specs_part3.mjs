// Unit 3: 이동과 방향 (Lessons 11–14)
export const SPECS_PART3 = {
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
      {
        k: "받침 O (ㄹ 제외)", f: "+ 으로",
        ex: [["볼펜", "볼펜으로"], ["오른쪽", "오른쪽으로"], ["젓가락", "젓가락으로"], ["트럭", "트럭으로"], ["왼쪽", "왼쪽으로"], ["숟가락", "숟가락으로"]]
      },
      {
        k: "받침 X / ㄹ 받침", f: "+ 로", c: "g2",
        ex: [["지하철", "지하철로"], ["연필", "연필로"], ["버스", "버스로"], ["한국어", "한국어로"], ["비행기", "비행기로"], ["기차", "기차로"]]
      }
    ],
    make: [
      { k: ["지하철", "가다"], a: "지하철로 회사에 가요.", e: "I go to the office by subway." },
      { k: ["연필", "쓰다"], a: "연필로 이름을 써요.", e: "I write my name with a pencil." },
      { k: ["젓가락", "먹다"], a: "젓가락으로 밥을 먹어요.", e: "I eat a meal with chopsticks." },
      { k: ["한국어", "말하다"], a: "교실에서 한국어로 말해요.", e: "I speak in Korean in the classroom." },
      { k: ["버스", "학교", "가다"], a: "버스로 학교에 가요.", e: "I go to school by bus." },
      { k: ["비행기", "제주도", "가다"], a: "비행기로 제주도에 가요.", e: "I go to Jeju Island by airplane." },
      { k: ["오른쪽", "가다"], a: "도서관은 오른쪽으로 가세요.", e: "Please go to the right for the library." },
      { k: ["가위", "종이", "자르다"], a: "가위로 종이를 잘라요.", e: "I cut paper with scissors." }
    ],
    review: [
      { ko: "매일 아침 시원한 지하철[[로]] 학교에 가요.", base: "지하철", b: true, f: "로" },
      { ko: "시험 볼 때 볼펜[[으로]] 답을 써요.", base: "볼펜", b: true, f: "으로" },
      { ko: "한국 음식은 숟가락과 젓가락[[으로]] 먹어요.", base: "젓가락", b: true, f: "으로" },
      { ko: "선생님과 학생이 교실에서 한국어[[로]] 대화해요.", base: "한국어", b: false, f: "로" },
      { ko: "약국에 가려면 오른쪽[[으로]] 가세요.", note: "받침 O(ㄹ 제외) → 으로 / 받침 X 및 ㄹ 받침 → 로" }
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
      {
        k: "출발 장소 (from)", f: "장소1 + 에서",
        ex: [["서울", "서울에서"], ["집", "집에서"], ["한국", "한국에서"], ["교실", "교실에서"], ["인천", "인천에서"], ["공항", "공항에서"]]
      },
      {
        k: "도착 장소 (to)", f: "장소2 + 까지", c: "g2",
        ex: [["부산", "부산까지"], ["학교", "학교까지"], ["일본", "일본까지"], ["도서관", "도서관까지"], ["제주도", "제주도까지"], ["호텔", "호텔까지"]]
      }
    ],
    make: [
      { k: ["서울", "부산", "기차"], a: "서울에서 부산까지 기차로 가요.", e: "I go from Seoul to Busan by train." },
      { k: ["집", "학교", "걸어가다"], a: "집에서 학교까지 걸어가요.", e: "I walk from home to school." },
      { k: ["공항", "호텔", "버스"], a: "공항에서 호텔까지 버스로 가요.", e: "I go from the airport to the hotel by bus." },
      { k: ["교실", "도서관", "가깝다"], a: "교실에서 도서관까지 가까워요.", e: "It is close from the classroom to the library." },
      { k: ["한국", "미국", "비행기"], a: "한국에서 미국까지 비행기로 가요.", e: "I go from Korea to the USA by plane." },
      { k: ["역", "백화점", "지하철"], a: "역에서 백화점까지 지하철로 가요.", e: "I go from the station to the department store by subway." },
      { k: ["기숙사", "식당", "걸어가다"], a: "기숙사에서 식당까지 걸어가요.", e: "I walk from the dorm to the cafeteria." },
      { k: ["서울", "제주도", "한 시간"], a: "서울에서 제주도까지 비행기로 한 시간 걸려요.", e: "It takes one hour by plane from Seoul to Jeju." }
    ],
    review: [
      { ko: "서울[[에서]] 부산[[까지]] 고속열차로 3시간 걸려요.", base: "서울", b: true, f: "에서" },
      { ko: "집[[에서]] 대학교[[까지]] 매일 아침 걸어가요.", base: "집", b: true, f: "에서" },
      { ko: "공항[[에서]] 호텔[[까지]] 리무진 버스를 타요.", base: "공항", b: true, f: "에서" },
      { ko: "교실[[에서]] 도서관[[까지]] 아주 가까워요.", base: "교실", b: true, f: "에서" },
      { ko: "인천[[에서]] 제주도[[까지]] 배로 여행해요.", note: "출발점에는 '에서', 도착점에는 '까지'" }
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
      {
        k: "시작 시점 (from)", f: "시간1 + 부터",
        ex: [["9시", "9시부터"], ["월요일", "월요일부터"], ["아침", "아침부터"], ["1월", "1월부터"], ["오전 10시", "오전 10시부터"], ["봄", "봄부터"]]
      },
      {
        k: "종료 시점 (to)", f: "시간2 + 까지", c: "g2",
        ex: [["6시", "6시까지"], ["금요일", "금요일까지"], ["저녁", "저녁까지"], ["3월", "3월까지"], ["오후 12시", "오후 12시까지"], ["가을", "가을까지"]]
      }
    ],
    make: [
      { k: ["9시", "6시", "일하다"], a: "아침 9시부터 저녁 6시까지 일해요.", e: "I work from 9 AM to 6 PM." },
      { k: ["월요일", "금요일", "공부하다"], a: "월요일부터 금요일까지 한국어를 공부해요.", e: "I study Korean from Monday to Friday." },
      { k: ["12시", "1시", "점심"], a: "12시부터 1시까지 점심을 먹어요.", e: "I eat lunch from 12 to 1." },
      { k: ["아침", "저녁", "바쁘다"], a: "오늘은 아침부터 저녁까지 바빠요.", e: "Today I am busy from morning till evening." },
      { k: ["오전 10시", "오후 2시", "수업"], a: "오전 10시부터 오후 2시까지 수업이 있어요.", e: "There is class from 10 AM to 2 PM." },
      { k: ["1월", "2월", "방학"], a: "1월부터 2월까지 겨울 방학이에요.", e: "Winter vacation is from January to February." },
      { k: ["밤 11시", "아침 7시", "자다"], a: "밤 11시부터 아침 7시까지 자요.", e: "I sleep from 11 PM to 7 AM." },
      { k: ["월요일", "수요일", "운동하다"], a: "월요일부터 수요일까지 운동해요.", e: "I exercise from Monday to Wednesday." }
    ],
    review: [
      { ko: "회사에서 아침 9시[[부터]] 저녁 6시[[까지]] 일해요.", base: "9시", b: false, f: "부터" },
      { ko: "대학교 수업은 월요일[[부터]] 금요일[[까지]] 매일 있어요.", base: "월요일", b: true, f: "부터" },
      { ko: "낮 12시[[부터]] 오후 1시[[까지]] 맛있는 점심시간이에요.", base: "12시", b: false, f: "부터" },
      { ko: "1월[[부터]] 2월[[까지]] 학생들은 겨울 방학을 보내요.", base: "1월", b: true, f: "부터" },
      { ko: "밤 11시[[부터]] 아침 7시[[까지]] 푹 자요.", note: "시작하는 때에는 '부터', 끝나는 때에는 '까지'" }
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
      {
        k: "구어체 (대화)", f: "사람 + 한테",
        ex: [["친구", "친구한테"], ["동생", "동생한테"], ["하준", "하준한테"], ["형", "형한테"], ["누나", "누나한테"], ["미나", "미나한테"]]
      },
      {
        k: "문어체 / 높임", f: "사람 + 에게 / 께", c: "g2",
        ex: [["학생", "학생에게"], ["선생님", "선생님께"], ["부모님", "부모님께"], ["할머니", "할머니께"], ["할아버지", "할아버지께"], ["아버지", "아버지께"]]
      }
    ],
    make: [
      { k: ["친구", "선물", "주다"], a: "친구한테 선물을 줘요.", e: "I give a gift to my friend." },
      { k: ["동생", "전화하다"], a: "동생한테 전화를 해요.", e: "I make a phone call to my younger sibling." },
      { k: ["선생님", "질문하다"], a: "선생님께 질문을 해요.", e: "I ask a question to the teacher." },
      { k: ["부모님", "편지", "쓰다"], a: "부모님에게 편지를 써요.", e: "I write a letter to my parents." },
      { k: ["누나", "생일 카드", "보내다"], a: "누나한테 생일 카드를 보내요.", e: "I send a birthday card to my sister." },
      { k: ["할머니", "인사드리다"], a: "할머니께 인사를 드려요.", e: "I greet my grandmother." },
      { k: ["하준 씨", "메시지", "보내다"], a: "하준 씨한테 메시지를 보내요.", e: "I send a message to Hajun." },
      { k: ["학생들", "한국어", "가르치다"], a: "학생들에게 한국어를 가르쳐요.", e: "I teach Korean to students." }
    ],
    review: [
      { ko: "생일을 맞은 친한 친구[[한테]] 예쁜 꽃을 선물해요.", base: "친구", b: false, f: "한테" },
      { ko: "수업 시간에 모르는 단어를 선생님[[께]] 질문해요.", base: "선생님", b: true, f: "께" },
      { ko: "고향에 계신 부모님[[께]] 주말마다 안부 전화를 드려요.", base: "부모님", b: true, f: "께" },
      { ko: "어린 동생[[한테]] 재미있는 동화책을 읽어 줘요.", base: "동생", b: true, f: "한테" },
      { ko: "선생님이 모든 학생들[[에게]] 과제를 나누어 줘요.", note: "구어: 한테 / 문어: 에게 / 어른이나 높임 대상: 께" }
    ],
    sits: [
      { t: "연락과 메시지", q: "오늘 누구[[한테]] 연락했어요? 누구[[한테]] 문자했어요?", qen: "Who did you contact today? Who did you text?", m: ["오늘 아침에 친구[[한테]] 문자했어요.", "저녁에 부모님[[께]] 전화해요."] },
      { t: "선물 주고받기", q: "생일에 누구[[한테]] 선물을 주고 싶어요?", qen: "Who do you want to give a gift to on their birthday?", m: ["친한 친구[[한테]] 책을 선물해요.", "선생님[[께]] 카드를 드려요."] }
    ]
  }
};
