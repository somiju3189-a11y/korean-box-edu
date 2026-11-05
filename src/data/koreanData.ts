export interface ExampleSentence {
  korean: string;
  english: string;
}

export interface QuizItem {
  question: string;
  options: string[];
  answerIndex: number;
  explanation: string;
}

export interface PhraseItem {
  id: string;
  level: number; // 1 to 6
  category: string; // 인사, 식당, 쇼핑, 감정, 일상, 비즈니스 등
  korean: string;
  pronunciation: string;
  english: string;
  grammarPoint: string;
  examples: ExampleSentence[];
  quiz: QuizItem;
}

export const KOREAN_LEVELS = [
  { level: 1, name: "1급 (초급 1)", desc: "기본 인사 및 일상 생존 표현" },
  { level: 2, name: "2급 (초급 2)", desc: "친교, 쇼핑, 식당 주문 및 약속" },
  { level: 3, name: "3급 (중급 1)", desc: "일상 소통 및 공공시설 이용" },
  { level: 4, name: "4급 (중급 2)", desc: "뉴스, 감정 표현 및 사회적 소통" },
  { level: 5, name: "5급 (고급 1)", desc: "전문 업무, 토론 및 논리적 대화" },
  { level: 6, name: "6급 (고급 2)", desc: "원어민 수준의 자연스러운 관용구" },
];

export const KOREAN_PHRASES: PhraseItem[] = [
  // --- 1급 (초급 1) ---
  {
    id: "lv1-01",
    level: 1,
    category: "인사",
    korean: "안녕하세요? 만나서 반갑습니다.",
    pronunciation: "An-nyeong-ha-se-yo? Man-na-seo ban-gap-seum-ni-da.",
    english: "Hello! Nice to meet you.",
    grammarPoint: "-아서/어서 (이유, 순서 연결 어미)",
    examples: [
      { korean: "안녕하세요? 저는 마이클이에요.", english: "Hello, I am Michael." },
      { korean: "만나서 정말 반갑습니다.", english: "It is really nice to meet you." }
    ],
    quiz: {
      question: "처음 만난 사람에게 건네는 가장 정중한 인사는?",
      options: ["잘 자요", "만나서 반갑습니다", "안녕", "다음에 봐요"],
      answerIndex: 1,
      explanation: "'만나서 반갑습니다'는 상대를 처음 만났을 때 정중하게 건네는 표준 표현입니다."
    }
  },
  {
    id: "lv1-02",
    level: 1,
    category: "식당",
    korean: "여기 물 좀 더 주세요.",
    pronunciation: "Yeo-gi mul jom deo ju-se-yo.",
    english: "Could I have some more water here, please?",
    grammarPoint: "명사 + 좀 주세요 (정중한 요청)",
    examples: [
      { korean: "사장님, 메뉴판 좀 주세요.", english: "Excuse me, please give me the menu." },
      { korean: "여기 김치 좀 더 주세요.", english: "Please give us some more kimchi here." }
    ],
    quiz: {
      question: "식당에서 종업원에게 정중하게 물을 요청할 때 쓰는 말은?",
      options: ["물 줘", "물 좀 더 주세요", "물 마셨어", "물 없어요"],
      answerIndex: 1,
      explanation: "'좀 더 주세요'는 식당이나 상점에서 공손하게 추가를 요청할 때 씁니다."
    }
  },
  {
    id: "lv1-03",
    level: 1,
    category: "쇼핑",
    korean: "이거 얼마예요? 조금만 깎아 주세요.",
    pronunciation: "I-geo eol-ma-ye-yo? Jo-geum-man kka-kka ju-se-yo.",
    english: "How much is this? Could you give me a little discount?",
    grammarPoint: "명사 + 얼마예요? / -아/어 주다 (부탁)",
    examples: [
      { korean: "이 사과 얼마예요?", english: "How much are these apples?" },
      { korean: "현금으로 낼게요, 깎아 주세요.", english: "I will pay in cash, please give a discount." }
    ],
    quiz: {
      question: "물건의 가격을 물어볼 때 쓰는 표준 표현은?",
      options: ["이거 어디예요?", "이거 누구예요?", "이거 얼마예요?", "이거 언제예요?"],
      answerIndex: 2,
      explanation: "'얼마예요?'는 가격이나 비용을 물어볼 때 사용하는 핵심 표현입니다."
    }
  },
  {
    id: "lv1-04",
    level: 1,
    category: "길찾기",
    korean: "화장실이 어디에 있어요?",
    pronunciation: "Hwa-jang-sil-i eo-di-e i-sseo-yo?",
    english: "Where is the restroom?",
    grammarPoint: "장소 + 에 있다/없다 (위치 표현)",
    examples: [
      { korean: "지하철역이 어디에 있어요?", english: "Where is the subway station?" },
      { korean: "화장실은 2층 오른쪽에 있어요.", english: "The restroom is on the 2nd floor, to the right." }
    ],
    quiz: {
      question: "'어디에 있어요?'의 올바른 쓰임새는?",
      options: ["시간을 물어볼 때", "위치나 장소를 물어볼 때", "가격을 물어볼 때", "이름을 물어볼 때"],
      answerIndex: 1,
      explanation: "'어디'는 장소나 위치를 질문할 때 사용하는 의문사입니다."
    }
  },

  // --- 2급 (초급 2) ---
  {
    id: "lv2-01",
    level: 2,
    category: "약속",
    korean: "이번 주말에 시간 있으면 같이 영화 볼래요?",
    pronunciation: "I-beon ju-ma-re si-gan i-sseu-myeon ga-chi yeong-hwa bol-lae-yo?",
    english: "If you have time this weekend, would you like to watch a movie together?",
    grammarPoint: "-(으)면 (조건), -(으)ㄹ래요? (제안/의향)",
    examples: [
      { korean: "내일 점심 같이 먹을래요?", english: "Would you like to have lunch together tomorrow?" },
      { korean: "비가 오면 집에서 쉴래요.", english: "If it rains, I would like to rest at home." }
    ],
    quiz: {
      question: "상대방에게 친근하게 함께 무언가를 하자고 제안할 때 적절한 어미는?",
      options: ["-(으)ㄹ래요?", "-았습니다", "-(으)ㄴ 적이 있어요", "-지 마세요"],
      answerIndex: 0,
      explanation: "'-(으)ㄹ래요?'는 상대방의 의향을 묻거나 함께 행동하자고 제안할 때 씁니다."
    }
  },
  {
    id: "lv2-02",
    level: 2,
    category: "병원",
    korean: "어제부터 머리가 아프고 열이 나요.",
    pronunciation: "Eo-je-bu-teo meo-ri-ga a-peu-go yeo-ri na-yo.",
    english: "I have had a headache and fever since yesterday.",
    grammarPoint: "-부터 (시작점), -고 (나열)",
    examples: [
      { korean: "목이 아프고 기침이 나와요.", english: "My throat hurts and I have a cough." },
      { korean: "언제부터 아프셨어요?", english: "Since when have you been sick?" }
    ],
    quiz: {
      question: "병원에서 의사에게 증상을 설명할 때 올바른 표현은?",
      options: ["배가 불러요", "열이 나고 아파요", "맛있어요", "비싸요"],
      answerIndex: 1,
      explanation: "발열과 통증 증상을 전달할 때 '열이 나고 아파요'라고 말합니다."
    }
  },
  {
    id: "lv2-03",
    level: 2,
    category: "경험",
    korean: "한국 음식을 먹어 본 적이 있어요.",
    pronunciation: "Han-guk eum-si-geul meo-geo bon jeo-gi i-sseo-yo.",
    english: "I have had the experience of eating Korean food.",
    grammarPoint: "-(으)ㄴ 적이 있다/없다 (과거 경험)",
    examples: [
      { korean: "제주도에 가 본 적이 있어요?", english: "Have you ever been to Jeju Island?" },
      { korean: "한복을 입어 본 적이 없어요.", english: "I have never tried wearing a Hanbok." }
    ],
    quiz: {
      question: "과거의 특별한 경험을 말할 때 사용하는 문법은?",
      options: ["-(으)러 가다", "-(으)ㄴ 적이 있다", "-기 전에", "-(으)려고 하다"],
      answerIndex: 1,
      explanation: "'-(으)ㄴ 적이 있다/없다'는 과거의 경험 유무를 나타낼 때 쓰입니다."
    }
  },

  // --- 3급 (중급 1) ---
  {
    id: "lv3-01",
    level: 3,
    category: "일상",
    korean: "바쁘시겠지만 시간 되실 때 연락 부탁드립니다.",
    pronunciation: "Ba-ppeu-si-get-ji-man si-gan doe-sil ttae yeon-rak bu-tak-deu-rim-ni-da.",
    english: "I know you are busy, but please contact me when you have time.",
    grammarPoint: "-겠- (추측/배려), -(으)ㄹ 때 (때/시간)",
    examples: [
      { korean: "힘드시겠지만 조금만 더 힘내세요.", english: "It must be tough, but please cheer up a bit more." },
      { korean: "도착하시는 대로 연락 부탁드립니다.", english: "Please get in touch as soon as you arrive." }
    ],
    quiz: {
      question: "상대방의 상황을 배려하면서 연락을 정중히 요청하는 표현은?",
      options: ["빨리 전화해", "시간 되실 때 연락 부탁드립니다", "전화 끊어", "아무 때나 오세요"],
      answerIndex: 1,
      explanation: "'시간 되실 때 연락 부탁드립니다'는 공손함과 배려가 묻어나는 정중한 표현입니다."
    }
  },
  {
    id: "lv3-02",
    level: 3,
    category: "감정",
    korean: "한국어를 배울수록 더 재미있어지는 것 같아요.",
    pronunciation: "Han-gu-geo-reul bae-ul-su-rok deo jae-mi-i-sseo-ji-neun geot ga-ta-yo.",
    english: "The more I learn Korean, the more interesting it seems to become.",
    grammarPoint: "-(으)ㄹ수록 (정도의 심화), -(으)ㄴ/는 것 같다 (완곡한 표현)",
    examples: [
      { korean: "연습할수록 실력이 늘어요.", english: "The more you practice, the more your skill improves." },
      { korean: "생각할수록 좋은 아이디어예요.", english: "The more I think about it, the better the idea is." }
    ],
    quiz: {
      question: "'A할수록 B하다'의 의미는?",
      options: ["A를 포기한다", "A의 정도가 커질 때 B도 비례하여 심화된다", "A와 B는 무관하다", "A 대신 B를 한다"],
      answerIndex: 1,
      explanation: "'-(으)ㄹ수록'은 앞선 행위나 상태의 정도가 깊어짐에 따라 뒤의 상태도 변함을 나타냅니다."
    }
  },

  // --- 4급 (중급 2) ---
  {
    id: "lv4-01",
    level: 4,
    category: "의견",
    korean: "제 생각에는 이 방법이 훨씬 더 효율적인 것 같습니다.",
    pronunciation: "Je saeng-ga-ge-neun i bang-beo-bi hwol-ssin deo hyo-yul-jeo-gin geot gat-seum-ni-da.",
    english: "In my opinion, this method seems to be much more efficient.",
    grammarPoint: "제 생각에는 (자신의 견해 피력), -ㄴ/은 것 같다",
    examples: [
      { korean: "제 생각에는 일정을 하루 미루는 게 좋겠습니다.", english: "In my opinion, it would be better to postpone the schedule by a day." },
      { korean: "이 디자인이 훨씬 더 직관적입니다.", english: "This design is far more intuitive." }
    ],
    quiz: {
      question: "회의나 토론에서 부드럽게 자신의 의견을 시작할 때 사용하는 문구는?",
      options: ["무조건 내 말이 맞다", "제 생각에는", "너는 틀렸다", "상관없습니다"],
      answerIndex: 1,
      explanation: "'제 생각에는'은 자신의 견해를 겸손하고 격식 있게 제시하는 대표적 표현입니다."
    }
  },
  {
    id: "lv4-02",
    level: 4,
    category: "사회",
    korean: "환경 보호를 위해서 일회용품 사용을 줄여야 합니다.",
    pronunciation: "Hwan-gyeong bo-ho-reul wi-hae-seo il-hoe-yong-pum sa-yong-eul ju-ryeo-ya ham-ni-da.",
    english: "We must reduce the use of disposable items in order to protect the environment.",
    grammarPoint: "-기 위해(서) (목적), -아/어야 하다 (당위/의무)",
    examples: [
      { korean: "건강을 유지하기 위해서 매일 운동해요.", english: "I exercise every day in order to maintain my health." },
      { korean: "시험에 합격하기 위해 열심히 공부하고 있습니다.", english: "I am studying hard to pass the exam." }
    ],
    quiz: {
      question: "어떤 목표나 목적을 나타내는 올바른 문법 형태는?",
      options: ["-기 위해서", "-자마자", "-는 바람에", "-다 보니까"],
      answerIndex: 0,
      explanation: "'-기 위해서'는 어떠한 목적을 달성하고자 하는 의도나 이유를 나타냅니다."
    }
  },

  // --- 5급 (고급 1) ---
  {
    id: "lv5-01",
    level: 5,
    category: "비즈니스",
    korean: "상황을 종합적으로 검토한 결과, 다음과 같이 결론을 내렸습니다.",
    pronunciation: "Sang-hwang-eul jong-hap-jeok-eu-ro geom-to-han gyeol-gwa, da-eum-gwa ga-chi gyeol-ron-eul nae-ryeot-seum-ni-da.",
    english: "As a result of comprehensively reviewing the situation, we reached the following conclusion.",
    grammarPoint: "-(으)ㄴ 결과 (과정의 귀결), -과 같이 (비유/인용)",
    examples: [
      { korean: "다각도로 분석한 결과 시장 경쟁력이 충분합니다.", english: "After analyzing from multiple angles, market competitiveness is sufficient." },
      { korean: "협의를 거친 결과 계약을 체결하기로 합의했습니다.", english: "As a result of discussions, we agreed to sign the contract." }
    ],
    quiz: {
      question: "업무 보고서에서 분석 후 결과를 공식 발표할 때 적절한 종결 어투는?",
      options: ["~했어요", "~한 결과 ~로 결론지었습니다", "~한 것 같아", "~하든지 말든지"],
      answerIndex: 1,
      explanation: "비즈니스 및 학술 문서에서는 논리적 인과관계를 명확히 하는 격식체(-ㄴ 결과 ~로 결론지었습니다)를 씁니다."
    }
  },

  // --- 6급 (고급 2) ---
  {
    id: "lv6-01",
    level: 6,
    category: "관용구",
    korean: "천 리 길도 한 걸음부터라는 말이 있듯이 꾸준함이 가장 중요합니다.",
    pronunciation: "Cheon ri gil-do han geol-eum-bu-teo-ra-neun ma-ri it-deu-si kku-jun-ha-mi ga-jang jung-yo-ham-ni-da.",
    english: "As the saying goes, 'a journey of a thousand miles begins with a single step,' consistency is what matters most.",
    grammarPoint: "-듯이 (비유), 관용 속담 인용",
    examples: [
      { korean: "시작이 반이라는 말처럼 일단 도전해 보세요.", english: "Just like the saying 'well begun is half done', give it a try first." },
      { korean: "비 온 뒤에 땅이 굳어지듯이 어려움을 극복하고 더 단단해졌습니다.", english: "Just as the ground firms up after rain, we became stronger after hardship." }
    ],
    quiz: {
      question: "'천 리 길도 한 걸음부터' 속담이 전하는 교훈은?",
      options: ["서둘러야 성공한다", "아무리 큰 일도 작은 시작과 꾸준함이 바탕이 된다", "천 리를 걸으면 피곤하다", "남의 말을 믿지 마라"],
      answerIndex: 1,
      explanation: "이 속담은 원대한 목표라도 눈앞의 작은 실천부터 성실히 시작해야 완성된다는 삶의 지혜를 담고 있습니다."
    }
  }
];
