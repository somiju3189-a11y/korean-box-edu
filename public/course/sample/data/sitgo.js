/*
 * 1급 말하기 장 지시 줄(▶ · Free talking · 영어 지시문) · 바꿔 묻기 · 교사 메모 — 대표님 2026-10-09 말하기 점검표(M9P3x) 메모 반영.
 * 열쇠는 과 문법 이름(L0.key), 배열 차례 = 보이는 말하기 장 차례(SITPIC 과 같다).
 * 원본 _scratch/l1sp/gen-data.cjs — 손으로 고치면 다시 뽑을 때 날아간다.
 */
const SITGO = {
 "이에요/예요": [
  {
   "go": "Say hello and tell your name.",
   "free": true,
   "memo": "1. Free talking — 활동판 없이 선생님과 묻고 답한다<br>2. 교사가 먼저 「안녕하세요? 저는 ○○이에요/예요.」로 인사<br>3. 「이름이 뭐예요?」 → 학생이 자기 이름으로 대답<br>4. 역할 바꾸기 — 학생이 교사 이름을 묻는다"
  },
  {
   "go": "Show your things and ask each other.",
   "free": true,
   "memo": "1. Free talking — 활동판 없이 선생님과 묻고 답한다<br>2. 장 그림으로 「이거 · 저거」를 함께 읽기 — 이거 = 가까운 것, 저거 = 먼 것<br>3. 교사가 자기 물건(책 · 가방 · 연필 · 시계)을 들어 「이거 뭐예요?」 → 학생 「○○이에요/예요」<br>4. 학생이 자기 물건을 보여 주며 묻고 교사가 대답<br>5. 받침 있는 것 · 없는 것을 섞어 이에요 · 예요 둘 다 쓰게 (활동지 없음 — 거리감이 없어 실제 물건으로)"
  },
  {
   "go": "Ask each other: student or teacher?",
   "free": true,
   "memo": "1. Free talking — 활동판 없이 선생님과 묻고 답한다<br>2. 「학생이에요? 선생님이에요?」 — 학생은 「저는 학생이에요」<br>3. 학생이 교사에게 같은 물음 → 교사 「저는 선생님이에요」<br>4. 직업 낱말 카드(회사원 · 의사 …)로 바꿔 한 번 더",
   "alt": [
    "회사원",
    "의사"
   ]
  },
  {
   "go": "Say your name and your country.",
   "free": true,
   "memo": "1. Free talking — 활동판 없이 선생님과 묻고 답한다<br>2. 교사가 먼저 이름 · 나라를 말하는 본보기<br>3. 「어느 나라 사람이에요?」 → 학생 「저는 ○○ 사람이에요」<br>4. 역할 바꾸기 — 학생이 교사에게 묻는다"
  }
 ],
 "은/는": [
  {
   "go": "Introduce yourself to your teacher.",
   "free": true,
   "memo": "1. Free talking — 활동판 없이 선생님과 묻고 답한다<br>2. 교사가 먼저 「저는 ○○이에요. 저는 □□ 사람이에요」로 자기소개<br>3. 학생 차례 — 이름 · 나라 · 직업을 은/는으로 세 문장<br>4. 교사가 「○○ 씨는 학생이에요?」로 한 번 더 묻기"
  },
  {
   "go": "Tell each other about your family.",
   "free": false,
   "memo": "1. 다음 장 활동판으로 — 교사와 학생이 서로 가족이 누가 있는지 먼저 소개한다<br>2. 들은 가족을 활동판에 메모 — 교사 칸은 학생이, 학생 칸은 교사가 쓴다(글씨 크게)<br>3. 메모를 보며 서로 가족의 직업 소개 — 「아버지는 ○○이에요/예요」"
  }
 ],
 "이/가 있어요/없어요": [
  {
   "go": "Look at the classroom. What is there?",
   "free": false,
   "memo": "1. 교실 그림을 보며 「뭐가 있어요?」 — 그림에 있는 것을 「○○이/가 있어요」<br>2. 그림에 없는 것은 상상해서 「○○이/가 없어요」(컴퓨터 · 에어컨 …)<br>3. 학생 방 · 교실로 넓히기 — 「○○ 씨 방에 뭐가 있어요?」"
  },
  {
   "go": "Open your bags and say what’s inside.",
   "free": true,
   "memo": "1. Free talking — 활동판 없이 선생님과 묻고 답한다<br>2. 교사가 먼저 자기 가방에서 하나씩 꺼내며 「책이 있어요. 시계가 없어요」<br>3. 학생도 가방(필통 · 지갑)을 열어 꺼내며 있어요 · 없어요<br>4. 서로 「○○ 있어요?」로 묻고 대답 — 없는 것도 하나씩 말하게"
  }
 ],
 "아니에요": [
  {
   "go": "Think of a job. Ask each other.",
   "free": true,
   "memo": "1. Free talking — 활동판 없이 선생님과 묻고 답한다<br>2. 학생과 교사가 각자 직업을 하나 몰래 정한다(가수 · 의사 · 회사원 …)<br>3. 서로 「○○예요/이에요?」로 맞혀 보기 — 틀리면 「아니요, ○○이/가 아니에요. □□이에요/예요」<br>4. 맞힐 때까지 번갈아 묻기"
  },
  {
   "go": "Your teacher guesses wrong. Correct it.",
   "free": false,
   "memo": "1. 카드를 하나 짚고 교사가 일부러 틀리게 「이거 커피예요?」<br>2. 학생 「아니요, 커피가 아니에요. 녹차예요」 — 아니에요 뒤에 바른 말까지<br>3. 역할 바꾸기 — 학생이 틀리게 묻고 교사가 고친다"
  }
 ],
 "-아/어요": [
  {
   "go": "Tell your teacher about your day.",
   "free": true,
   "memo": "1. Free talking — 활동판 없이 선생님과 묻고 답한다<br>2. 「보통 뭐 해요?」 → 학생이 자기 하루를 두 문장으로<br>3. 교사가 「주말에는요?」로 때를 바꿔 한 번 더<br>4. 역할 바꾸기",
   "alt": [
    "주말",
    "저녁"
   ]
  },
  {
   "go": "Talk about how things taste.",
   "free": true,
   "memo": "1. Free talking — 활동판 없이 선생님과 묻고 답한다<br>2. 「한국 음식이 어때요?」 → 맛 형용사(맛있다 · 맵다 · 달다)로 대답<br>3. 다른 것으로 바꿔 묻기 — 한국어 공부 · 날씨 · 학교<br>4. 역할 바꾸기",
   "alt": [
    "한국어 공부",
    "날씨",
    "학교"
   ]
  }
 ],
 "을/를": [
  {
   "go": "Talk about what you eat and drink.",
   "free": true,
   "memo": "1. Free talking — 활동판 없이 선생님과 묻고 답한다<br>2. 「보통 아침에 무엇을 먹어요?」 → 「○○을/를 먹어요」<br>3. 점심 · 저녁으로 바꿔 묻기 — 마셔요까지<br>4. 역할 바꾸기",
   "alt": [
    "점심",
    "저녁"
   ]
  },
  {
   "go": "Talk about what you like.",
   "free": true,
   "memo": "1. Free talking — 활동판 없이 선생님과 묻고 답한다<br>2. 「무엇을 좋아해요?」 → 학생이 좋아하는 것 두 가지<br>3. 「가족은요? 친구는요?」로 다른 사람까지<br>4. 역할 바꾸기",
   "alt": [
    "가족",
    "친구",
    "선생님"
   ]
  }
 ],
 "이/가 (주어)": [
  {
   "go": "Look outside and talk about the weather.",
   "free": true,
   "memo": "1. Free talking — 활동판 없이 선생님과 묻고 답한다<br>2. 창밖 · 날씨 앱을 함께 보며 「오늘 날씨가 어때요?」<br>3. 학생 「○○이/가 △△아요/어요」 — 날씨 · 바람 · 하늘<br>4. 온라인이면 서로 사는 곳 날씨를 견주기"
  },
  {
   "go": "Who does it? Talk about people you know.",
   "free": true,
   "memo": "1. Free talking — 활동판 없이 선생님과 묻고 답한다<br>2. 「누가 한국어를 공부해요?」 → 이/가로 사람을 세워 대답<br>3. 가족 · 친구로 바꿔 묻기 — 「누가 요리해요?」<br>4. 역할 바꾸기",
   "alt": [
    "친구",
    "엄마",
    "아빠",
    "동생"
   ]
  }
 ],
 "에 (장소)": [
  {
   "go": "Talk about where you go today.",
   "free": true,
   "memo": "1. Free talking — 활동판 없이 선생님과 묻고 답한다<br>2. 「오늘 어디에 가요?」 → 장소 두 곳<br>3. 「주말에는요?」로 때를 바꾸기<br>4. 역할 바꾸기",
   "alt": [
    "내일",
    "주말"
   ]
  },
  {
   "go": "Ask where things are in the room.",
   "free": false,
   "memo": "1. 교사 「휴대폰이 어디에 있어요?」 → 학생 「휴대폰은 책상 위에 있어요」<br>2. 학생이 묻고 교사가 대답 — 일부러 틀리게 말해 학생이 고치게<br>3. 학생 방 물건으로 넓히기"
  }
 ],
 "에서 (장소)": [
  {
   "go": "Talk about where you eat.",
   "free": true,
   "memo": "1. Free talking — 활동판 없이 선생님과 묻고 답한다<br>2. 「어디에서 밥을 먹어요?」 → 「○○에서 먹어요」<br>3. 공부 · 운동 · 쉬기로 바꿔 묻기<br>4. 역할 바꾸기",
   "alt": [
    "공부하다",
    "운동하다",
    "쉬다"
   ]
  },
  {
   "go": "Ask about places and activities.",
   "free": false,
   "memo": "1. 장 그림으로 「주말에 공원에서 운동해요?」 대답을 함께 읽기<br>2. 다음 장 활동판으로 — 교사가 장소 하나 + 활동 하나를 묶어 묻는다(「공원에서 운동해요? · 집에서 운동해요?」)<br>3. 학생은 네 · 아니요 + 「저는 ○○에서 △△아요/어요」, 역할 바꾸기"
  }
 ],
 "에 (시간)": [
  {
   "go": "Ask each other what time.",
   "free": false,
   "memo": "1. 장 그림으로 「몇 시에 일어나요?」를 함께 읽기<br>2. 다음 장 활동판 — 카드의 일마다 서로 「몇 시에 △△아요/어요?」<br>3. 대답한 시각을 카드 아래 칸(선생님 · 학생)에 적고, 다 적으면 같은지 다른지 견주기"
  },
  {
   "go": "Find a time you are both free.",
   "free": false,
   "memo": "1. 학생은 자기 표, 교사는 자기 표만 보고 「토요일 네 시에 만나요?」<br>2. 안 되면 「저는 그때 △△아요/어요」 → 다른 때를 묻는다<br>3. 겹치는 빈칸을 찾으면 「○○요일 □□ 시에 만나요」로 마무리"
  }
 ],
 "(으)로 (수단)": [
  {
   "go": "Talk about how you get to school.",
   "free": true,
   "memo": "1. Free talking — 활동판 없이 선생님과 묻고 답한다<br>2. 「학교에 뭘 타고 가요?」 → 「○○(으)로 가요」<br>3. 회사 · 고향 · 마트로 바꿔 묻기<br>4. 역할 바꾸기",
   "alt": [
    "회사",
    "고향",
    "마트"
   ]
  },
  {
   "go": "Pick a card. What do you use it for?",
   "free": false,
   "memo": "1. 교사 「뭘로 잘라요?」 → 학생이 카드를 짚고 「가위로 잘라요」<br>2. 카드를 바꿔 가며 「뭘로 먹어요? · 뭘로 써요?」<br>3. 역할 바꾸기"
  }
 ],
 "에서 ~ 까지 (장소)": [
  {
   "go": "Talk about your way home.",
   "free": true,
   "memo": "1. Free talking — 활동판 없이 선생님과 묻고 답한다<br>2. 「학교에서 집까지 어떻게 가요?」 → 출발 · 도착 · 수단<br>3. 회사 · 공항으로 바꿔 묻기<br>4. 역할 바꾸기",
   "alt": [
    "회사",
    "공항"
   ]
  },
  {
   "go": "Pick two places. Is it far?",
   "free": false,
   "memo": "1. 장 그림 지도로 「서울에서 부산까지 멀어요?」<br>2. 다음 장 활동판 — 보기(서울 → 미국)처럼 교사 · 학생이 번갈아 출발 · 도착을 정해 쓴다<br>3. 쓴 줄마다 「○○에서 □□까지 멀어요?」 · 궁금한 것(뭘로 가요? · 몇 시간이에요?)을 서로 묻기"
  }
 ],
 "부터 ~ 까지": [
  {
   "go": "Talk about your working hours.",
   "free": true,
   "memo": "1. Free talking — 활동판 없이 선생님과 묻고 답한다<br>2. 「몇 시부터 몇 시까지 일해요/공부해요?」<br>3. 쉬는 날 · 수업 시간으로 바꿔 묻기<br>4. 역할 바꾸기",
   "alt": [
    "수업",
    "아르바이트",
    "점심",
    "쉬는 날"
   ]
  },
  {
   "go": "Talk about your class schedule.",
   "free": true,
   "memo": "1. Free talking — 활동판 없이 선생님과 묻고 답한다<br>2. 「수업이 언제부터 언제까지 있어요?」 — 학생의 실제 시간표로<br>3. 방학 · 시험 기간으로 넓히기<br>4. 역할 바꾸기",
   "alt": [
    "방학",
    "시험"
   ]
  }
 ],
 "에게/한테": [
  {
   "go": "Who gives what to whom?",
   "free": false,
   "memo": "1. 장 그림으로 「누구한테 선물을 줘요?」를 함께 읽기<br>2. 다음 장 활동판 — 카드마다 누가 누구한테 무엇을 주는지 「○○이/가 □□한테 △△을/를 줘요」<br>3. 마지막에 「○○ 씨는 누구한테 선물을 줘요?」로 학생 이야기"
  },
  {
   "go": "How do you contact people?",
   "free": false,
   "memo": "1. 장 그림으로 「누구한테 연락해요?」를 함께 읽기 — 학생이 「엄마한테 연락해요」처럼 사람을 말한다<br>2. 다음 장 활동판 — 학생이 말한 사람(엄마 · 친구 · 회사 …)을 교사가 왼쪽 칸에 쓴다<br>3. 사람마다 교사가 「○○한테 어떻게 연락해요?」 → 학생 「저는 ○○한테 전화를 해요」<br>4. 이메일 · 전화 · 문자 단추로 표시하고, 다 채우면 역할 바꾸기"
  }
 ],
 "도": [
  {
   "go": "Pick a card. Same or different?",
   "free": false,
   "memo": "1. 장 그림으로 「저도 학생이에요」 맞장구를 함께 읽기<br>2. 다음 장 활동판 — 교사가 카드 하나를 골라 「저는 ○○아요/어요. ○○ 씨는요?」<br>3. 같으면 「저도 ○○아요/어요」(도), 다르면 「저는 □□아요/어요」(는) — 역할 바꾸기"
  },
  {
   "go": "Talk about the places you go.",
   "free": true,
   "memo": "1. Free talking — 활동판 없이 선생님과 묻고 답한다<br>2. 「주말에 어디에 가요?」 → 한 곳 말한 뒤 「○○에도 가요」로 더하기<br>3. 교사가 「또요?」로 두세 번 이어 묻기<br>4. 역할 바꾸기"
  }
 ],
 "와/과 · 하고 · (이)랑": [
  {
   "go": "Choose two things to buy.",
   "free": false,
   "memo": "1. 교사 「마트에서 뭐 사요?」 → 학생이 둘을 골라 「○○하고 □□을/를 사요」<br>2. 하고 · (이)랑 · 와/과를 바꿔 가며<br>3. 역할 바꾸기 — 교사도 둘을 골라 말한다"
  },
  {
   "go": "Talk about who you spend time with.",
   "free": true,
   "memo": "1. Free talking — 활동판 없이 선생님과 묻고 답한다<br>2. 「주말에 누구하고 △△아요/어요?」<br>3. 영화 · 밥 · 운동으로 바꿔 묻기<br>4. 역할 바꾸기",
   "alt": [
    "영화",
    "밥",
    "운동"
   ]
  }
 ],
 "만": [
  {
   "go": "Talk about your breakfast.",
   "free": true,
   "memo": "1. Free talking — 활동판 없이 선생님과 묻고 답한다<br>2. 「아침에 빵하고 커피를 먹어요?」 → 하나만 먹으면 「○○만」<br>3. 점심 · 저녁으로 바꿔 묻기<br>4. 역할 바꾸기",
   "alt": [
    "점심",
    "저녁"
   ]
  },
  {
   "go": "Talk about your weekend at home.",
   "free": true,
   "memo": "1. Free talking — 활동판 없이 선생님과 묻고 답한다<br>2. 「주말에 밖에 나가요?」 → 「집에만 있어요」 같은 대답<br>3. 「왜요?」 없이 「그럼 뭐 해요?」로 이어 묻기<br>4. 역할 바꾸기"
  }
 ],
 "(이)나": [
  {
   "go": "Look at the menu. What do you drink?",
   "free": false,
   "memo": "1. 교사 「뭐 마셔요?」 → 학생이 둘을 골라 「○○(이)나 □□을/를 마셔요」<br>2. 「그럼 뭐 먹어요?」로 음식까지<br>3. 역할 바꾸기"
  },
  {
   "go": "Plan our next class together.",
   "free": false,
   "memo": "1. 「우리 언제 만나요?」를 함께 읽기<br>2. 다음 장 활동판에서 진짜 다음 수업 날을 정한다 — 「우리 언제 공부해요? 월요일이나 수요일 어때요?」<br>3. 안 되는 칸은 ✕, 정해진 칸은 한 번 더 눌러 「수업」 표시"
  }
 ],
 "마다": [
  {
   "go": "Talk about what you do every morning.",
   "free": true,
   "memo": "1. Free talking — 활동판 없이 선생님과 묻고 답한다<br>2. 「아침마다 뭐 해요?」<br>3. 주말마다 · 저녁마다로 바꿔 묻기<br>4. 역할 바꾸기",
   "alt": [
    "주말마다",
    "저녁마다"
   ]
  },
  {
   "go": "Talk about your homework.",
   "free": true,
   "memo": "1. Free talking — 활동판 없이 선생님과 묻고 답한다<br>2. 「수업마다 숙제가 있어요?」 → 네 · 아니요 + 마다<br>3. 시험 · 단어 시험으로 바꿔 묻기<br>4. 역할 바꾸기",
   "alt": [
    "시험",
    "단어 시험"
   ]
  }
 ],
 "의": [
  {
   "go": "Look at the name tags. Whose is it?",
   "free": false,
   "memo": "1. 교사 「이 가방은 누구 거예요?」 → 「리에 씨의 가방이에요」<br>2. 교사 · 학생 실제 물건으로 넓히기 — 「이거 ○○ 씨 거예요?」<br>3. 역할 바꾸기"
  },
  {
   "go": "Whose is it? Correct your teacher.",
   "free": true,
   "memo": "1. Free talking — 활동판 없이 선생님과 묻고 답한다<br>2. 교사가 학생 물건을 짚고 일부러 틀리게 「이거 ○○ 씨 거예요?」<br>3. 학생 「아니요, ○○ 씨 것이 아니에요. 제 □□이에요」<br>4. 역할 바꾸기"
  }
 ],
 "보다": [
  {
   "go": "Compare today and yesterday.",
   "free": true,
   "memo": "1. Free talking — 활동판 없이 선생님과 묻고 답한다<br>2. 「오늘 날씨가 어제보다 더워요?」 — 실제 날씨로<br>3. 사는 곳 날씨로 견주기<br>4. 역할 바꾸기"
  },
  {
   "go": "Compare the two.",
   "free": false,
   "memo": "1. 교사 「서울하고 부산 중에서 어디가 더 따뜻해요?」<br>2. 학생 「부산이 서울보다 따뜻해요」 — 반대말로 한 번 더(서울이 더 추워요)<br>3. 학생 고향 · 학생 물건으로 넓히기"
  }
 ],
 "처럼 / 같이": [
  {
   "go": "Describe someone: “like a …”.",
   "free": true,
   "memo": "1. Free talking — 활동판 없이 선생님과 묻고 답한다<br>2. 「○○ 씨는 어때요?」 — 장 그림의 짝(모델 · 가수)으로 먼저<br>3. 유명한 사람 · 반 친구로 바꿔 묻기<br>4. 역할 바꾸기"
  },
  {
   "go": "Pick a card and describe a friend.",
   "free": false,
   "memo": "1. 학생이 친구 한 명을 떠올리고 카드를 고른다<br>2. 「제 친구는 ○○처럼 △△아요/어요」 두 문장<br>3. 교사도 자기 친구를 소개 → 역할 바꾸기"
  }
 ],
 "-았/었-": [
  {
   "go": "Talk about what you did yesterday.",
   "free": true,
   "memo": "1. Free talking — 활동판 없이 선생님과 묻고 답한다<br>2. 「어제 뭐 했어요?」 → 두 문장(장소 · 한 일)<br>3. 주말 · 지난 방학으로 바꿔 묻기<br>4. 역할 바꾸기",
   "alt": [
    "주말",
    "지난 방학"
   ]
  },
  {
   "go": "Talk about your weekend and how it was.",
   "free": true,
   "memo": "1. Free talking — 활동판 없이 선생님과 묻고 답한다<br>2. 「주말에 어땠어요?」 → 한 일 + 기분<br>3. 「왜요?」 대신 「그래서요?」로 이어 묻기<br>4. 역할 바꾸기"
  }
 ],
 "-(으)ㄹ 거예요": [
  {
   "go": "Talk about your weekend plans.",
   "free": true,
   "memo": "1. Free talking — 활동판 없이 선생님과 묻고 답한다<br>2. 「주말에 뭐 할 거예요?」 → 두 가지 계획<br>3. 방학 · 생일로 바꿔 묻기<br>4. 역할 바꾸기",
   "alt": [
    "방학",
    "생일"
   ]
  },
  {
   "go": "Talk about your vacation plans.",
   "free": true,
   "memo": "1. Free talking — 활동판 없이 선생님과 묻고 답한다<br>2. 「방학에 고향에 갈 거예요?」 → 네 · 아니요 + 계획<br>3. 「거기에서 뭐 할 거예요?」로 한 번 더<br>4. 역할 바꾸기"
  }
 ],
 "-고 있다": [
  {
   "go": "What is each person doing now?",
   "free": false,
   "memo": "1. 교사 「리에 씨는 지금 뭐 하고 있어요?」 → 「밥을 먹고 있어요」<br>2. 학생이 번호를 골라 묻고 교사가 대답<br>3. 마지막에 「○○ 씨는 지금 뭐 하고 있어요?」로 실제 지금"
  },
  {
   "go": "Talk about what you are learning now.",
   "free": true,
   "memo": "1. Free talking — 활동판 없이 선생님과 묻고 답한다<br>2. 「요즘 뭐 배우고 있어요?」<br>3. 요즘 읽는 책 · 보는 드라마로 바꿔 묻기<br>4. 역할 바꾸기",
   "alt": [
    "책 · 읽다",
    "드라마 · 보다",
    "음악 · 듣다"
   ]
  }
 ],
 "-겠-": [
  {
   "go": "Look at the food. How does it look?",
   "free": false,
   "memo": "1. 교사가 사진을 하나씩 짚으며 「이거 어때요?」<br>2. 학생 「맛있겠어요! · 맵겠어요 · 차갑겠어요」<br>3. 학생이 자기 나라 음식 사진을 보여 주고 교사가 「-겠어요」로 대답"
  },
  {
   "go": "Who will do it? Choose a job.",
   "free": false,
   "memo": "1. 「누가 발표할 거예요?」 → 「제가 하겠어요」를 함께 읽기<br>2. 다음 장 활동판 — 팀 활동 할 일마다 교사 · 학생이 「제가 △△겠어요」로 맡기<br>3. 맡은 사람을 [선생님] · [학생] 단추로 표시하고, 다 정하면 한 줄씩 다시 말하기"
  }
 ],
 "안": [
  {
   "go": "Look at the cards. Do you do it today?",
   "free": false,
   "memo": "1. 「오늘 학교에 가요?」 → 「아니요, 오늘은 안 가요」를 함께 읽기<br>2. 다음 장 활동판 — 카드마다 교사가 「오늘 △△아요/어요?」<br>3. 학생은 안 하는 일은 「아니요, 오늘은 안 △△아요/어요」, 하는 일은 「네」 — 역할 바꾸기"
  },
  {
   "go": "Talk about prices.",
   "free": true,
   "memo": "1. Free talking — 활동판 없이 선생님과 묻고 답한다<br>2. 교사가 자기 물건을 보여 주며 「이 가방 비싸요?」<br>3. 학생 「별로 안 비싸요 · 하나도 안 비싸요」<br>4. 학생 물건으로 역할 바꾸기"
  }
 ],
 "-지 않다": [
  {
   "go": "Is it hard? Talk about Korean.",
   "free": true,
   "memo": "1. Free talking — 활동판 없이 선생님과 묻고 답한다<br>2. 「한국어가 어려워요?」 → 「별로 어렵지 않아요」<br>3. 한국 음식 · 날씨로 바꿔 묻기<br>4. 역할 바꾸기",
   "alt": [
    "한국 음식",
    "날씨"
   ]
  },
  {
   "go": "Talk about what you don’t eat or drink.",
   "free": true,
   "memo": "1. Free talking — 활동판 없이 선생님과 묻고 답한다<br>2. 「술 마셔요?」 → 「저는 ○○을/를 △△지 않아요」<br>3. 담배 · 운동 · 아침밥으로 바꿔 묻기<br>4. 역할 바꾸기",
   "alt": [
    "커피",
    "아침",
    "운동"
   ]
  }
 ],
 "못": [
  {
   "go": "Can you do it? Mark O or X.",
   "free": false,
   "memo": "1. 교사 「수영을 잘해요?」 → 학생 「네, 잘해요 / 아니요, 못 해요」 → 학생 칸 O · X<br>2. 학생이 교사에게 같은 물음 → 선생님 칸 O · X<br>3. 다 채우면 「저는 ○○ 못 해요. 선생님은 ○○ 잘해요」로 정리"
  },
  {
   "go": "Your teacher invites you. Say no politely.",
   "free": true,
   "memo": "1. Free talking — 활동판 없이 선생님과 묻고 답한다<br>2. 교사가 초대 「내일 파티에 와요?」<br>3. 학생 「미안해요, 못 가요」 + 까닭 한마디<br>4. 역할 바꾸기 — 학생이 초대"
  }
 ],
 "-지 못하다": [
  {
   "go": "Pick a card. Why didn’t you come?",
   "free": false,
   "memo": "1. 교사 「어제 왜 안 왔어요?」 → 학생이 카드를 골라 「아파서 가지 못했어요」<br>2. 카드를 바꿔 두세 번<br>3. 역할 바꾸기 — 교사가 이유를 말하고 학생이 묻는다"
  },
  {
   "go": "Talk about food you can’t eat.",
   "free": true,
   "memo": "1. Free talking — 활동판 없이 선생님과 묻고 답한다<br>2. 「김치찌개 어때요?」 → 먹지 못하는 것 · 하지 못하는 것<br>3. 운동 · 노래로 바꿔 묻기<br>4. 역할 바꾸기",
   "alt": [
    "수영",
    "운전",
    "노래"
   ]
  }
 ]
};
