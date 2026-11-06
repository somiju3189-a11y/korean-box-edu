// Comprehensive Specifications for Lessons 2 to 30
// 12 distinct 1:1 items per lesson in rows (6 in row 1, 6 in row 2)
// 8 varied make items per lesson
// 5-6 natural review full sentences per lesson

export const FULL_SPECS = {
  // ─────────────────────────────────────────────────────────────
  // Unit 1: 나를 소개해요 (Lessons 2–4)
  // ─────────────────────────────────────────────────────────────
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
      {
        k: "받침 O", f: "+ 은",
        ex: [["선생님", "선생님은"], ["학생", "학생은"], ["동생", "동생은"], ["한국", "한국은"], ["이름", "이름은"], ["경찰", "경찰은"]]
      },
      {
        k: "받침 X", f: "+ 는", c: "g2",
        ex: [["저", "저는"], ["친구", "친구는"], ["의사", "의사는"], ["가수", "가수는"], ["기자", "기자는"], ["누나", "누나는"]]
      }
    ],
    make: [
      { k: ["저", "학생"], a: "저는 학생이에요.", e: "I am a student." },
      { k: ["선생님", "한국 사람"], a: "선생님은 한국 사람이에요.", e: "The teacher is Korean." },
      { k: ["제 이름", "민수"], a: "제 이름은 민수예요.", e: "My name is Minsu." },
      { k: ["친구", "의사"], a: "제 친구는 의사예요.", e: "My friend is a doctor." },
      { k: ["사라 씨", "캐나다 사람"], a: "사라 씨는 캐나다 사람이에요.", e: "Sara is Canadian." },
      { k: ["동생", "고등학생"], a: "제 동생은 고등학생이에요.", e: "My younger sibling is a high school student." },
      { k: ["하준 씨", "회사원"], a: "하준 씨는 회사원이에요.", e: "Hajun is an office worker." },
      { k: ["누나", "간호사"], a: "제 누나는 간호사예요.", e: "My older sister is a nurse." }
    ],
    review: [
      { ko: "저[[는]] 한국 대학교 학생이에요.", base: "저", b: false, f: "는" },
      { ko: "선생님[[은]] 친절한 한국 사람이에요.", base: "선생님", b: true, f: "은" },
      { ko: "제 친구[[는]] 병원에서 일하는 의사예요.", base: "친구", b: false, f: "는" },
      { ko: "제 동생[[은]] 음악을 좋아하는 학생이에요.", base: "동생", b: true, f: "은" },
      { ko: "이름이 [[뭐예요]]? 어느 나라 사람이에요?", note: "화제와 대조를 나타내는 은/는" }
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
      {
        k: "받침 O", f: "+ 이 있어요/없어요",
        ex: [["책", "책이 있어요"], ["가방", "가방이 있어요"], ["연필", "연필이 있어요"], ["시간", "시간이 없어요"], ["돈", "돈이 있어요"], ["우산", "우산이 없어요"]]
      },
      {
        k: "받침 X", f: "+ 가 있어요/없어요", c: "g2",
        ex: [["시계", "시계가 없어요"], ["의자", "의자가 있어요"], ["모자", "모자가 있어요"], ["안경", "안경이 있어요"], ["휴대폰", "휴대폰이 있어요"], ["지갑", "지갑이 없어요"]]
      }
    ],
    make: [
      { k: ["책", "있다"], a: "책이 있어요.", e: "I have a book." },
      { k: ["시계", "없다"], a: "시계가 없어요.", e: "I don't have a watch." },
      { k: ["오늘", "시간", "있다"], a: "오늘 시간이 있어요.", e: "I have time today." },
      { k: ["지금", "우산", "없다"], a: "지금 우산이 없어요.", e: "I don't have an umbrella now." },
      { k: ["가방", "지갑", "있다"], a: "가방에 지갑이 있어요.", e: "There is a wallet in the bag." },
      { k: ["책상", "컴퓨터", "있다"], a: "책상 위에 컴퓨터가 있어요.", e: "There is a computer on the desk." },
      { k: ["필통", "지우개", "없다"], a: "필통에 지우개가 없어요.", e: "There is no eraser in the pencil case." },
      { k: ["동생", "있다"], a: "귀여운 동생이 있어요.", e: "I have a cute younger sibling." }
    ],
    review: [
      { ko: "가방 안에 한국어 책[[이 있어요]].", base: "책", b: true, f: "이 있어요" },
      { ko: "지금 손목에 시계[[가 없어요]].", base: "시계", b: false, f: "가 없어요" },
      { ko: "오늘 오후에 약속 시간[[이 있어요]].", base: "시간", b: true, f: "이 있어요" },
      { ko: "밖에 비가 와요. 우산[[이 없어요]].", base: "우산", b: true, f: "이 없어요" },
      { ko: "주머니에 휴대폰[[이 있어요]]?", note: "받침 O → 이 있어요 / 받침 X → 가 있어요" }
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
      aWho: "A · 마이클", aKo: ["리에 씨, 지금 마시는 거는 커피[[예요]]?"], aEn: ["Rie, what you're drinking is coffee?"],
      bWho: "B · 리에", bKo: ["아니요, 커피[[가 아니에요]].", "따뜻한 녹차[[예요]]."], bEn: ["No, it [[is not]] coffee.", "It is warm green tea."],
      morph: ["커피 + 가 아니에요 (받침 X)", "녹차 + 예요 (받침 X)"]
    },
    rows: [
      {
        k: "받침 O", f: "+ 이 아니에요",
        ex: [["학생", "학생이 아니에요"], ["선생님", "선생님이 아니에요"], ["책", "책이 아니에요"], ["가방", "가방이 아니에요"], ["경찰", "경찰이 아니에요"], ["일본 사람", "일본 사람이 아니에요"]]
      },
      {
        k: "받침 X", f: "+ 가 아니에요", c: "g2",
        ex: [["의사", "의사가 아니에요"], ["커피", "커피가 아니에요"], ["가수", "가수가 아니에요"], ["의자", "의자가 아니에요"], ["기자", "기자가 아니에요"], ["간호사", "간호사가 아니에요"]]
      }
    ],
    make: [
      { k: ["저", "학생"], a: "저는 학생이 아니에요.", e: "I am not a student." },
      { k: ["친구", "의사"], a: "제 친구는 의사가 아니에요.", e: "My friend is not a doctor." },
      { k: ["이거", "커피"], a: "이거는 커피가 아니에요.", e: "This is not coffee." },
      { k: ["저 사람", "선생님"], a: "저 사람은 선생님이 아니에요.", e: "That person is not a teacher." },
      { k: ["저 물건", "제 가방"], a: "저 물건은 제 가방이 아니에요.", e: "That item is not my bag." },
      { k: ["이곳", "도서관"], a: "이곳은 도서관이 아니에요.", e: "This place is not a library." },
      { k: ["하준 씨", "가수"], a: "하준 씨는 가수가 아니에요.", e: "Hajun is not a singer." },
      { k: ["사라 씨", "일본 사람"], a: "사라 씨는 일본 사람이 아니에요.", e: "Sara is not Japanese." }
    ],
    review: [
      { ko: "저[[는]] 고등학생[[이 아니에요]]. 대학생이에요.", base: "학생", b: true, f: "이 아니에요" },
      { ko: "이 컵에 든 음료는 커피[[가 아니에요]]. 녹차예요.", base: "커피", b: false, f: "가 아니에요" },
      { ko: "저 분은 우리 학교 선생님[[이 아니에요]].", base: "선생님", b: true, f: "이 아니에요" },
      { ko: "이 의자는 제 의자[[가 아니에요]].", base: "의자", b: false, f: "가 아니에요" },
      { ko: "저는 외국 사람이에요. 한국 사람[[이 아니에요]].", note: "받침 O → 이 아니에요 / 받침 X → 가 아니에요" }
    ],
    sits: [
      { t: "잘못된 추측 고치기", q: "혹시 일본 사람[[이에요]]? 선생님[[이에요]]?", qen: "Are you Japanese? Are you a teacher?", m: ["아니요, 일본 사람[[이 아니에요]].", "선생님[[이 아니에요]]. 학생이에요."] },
      { t: "물건 맞히기", q: "이거는 누구 가방[[이에요]]? 마이클 씨 가방이에요?", qen: "Whose bag is this? Is it Michael's bag?", m: ["제 가방[[이 아니에요]].", "유진 씨 가방이에요."] },
      { t: "참 · 거짓 말하기", q: "우리 교실은 도서관[[이에요]]?", qen: "Is our classroom a library?", m: ["아니요, 도서관[[이 아니에요]].", "한국어 교실이에요."] }
    ]
  }
};
