/* Lesson 12: 에서 ~ 까지 (장소) · 100% Authentic Situation-Matched Data */
LESSONS.push({
  "key": "에서 ~ 까지 (장소)",
  "pos": "명사",
  "posT": "명사1",
  "form": "에서 ~ 까지",
  "formT": "에서 <span class=\"pos\">명사2</span> + 까지",
  "gpic": [
    {
      "e": "📖",
      "c": "에서 ~ 까지 (장소)",
      "t": "navy"
    },
    {
      "sign": "="
    },
    {
      "e": "✨",
      "c": "명사",
      "t": "accent"
    }
  ],
  "mean": {
    "ko": "장소의 시작점(출발지)과 끝점(도착지)을 나타내어 이동 구간을 표현합니다.",
    "en": "Indicates the starting point ('from') and ending point ('to') of a spatial range."
  },
  "warn": [
    {
      "ko": "그림 속 실제 상황과 핵심 문형을 연결하며 자연스럽게 말해 보세요.",
      "en": "Connect the situation in the illustration with the key pattern and speak naturally."
    },
    {
      "ko": "받침 유무와 결합 형태 변화에 주의하세요.",
      "en": "Pay attention to form changes based on final consonants."
    }
  ],
  "ask": {
    "q": "서울[[에서]] 부산[[까지]] 어떻게 가요?",
    "en": "How do you go from Seoul to Busan?"
  },
  "en": "Place Range · \"~에서 ~까지\" · 출발지와 도착지를 말해요",
  "prior": [],
  "pat": "장소1 + 에서 + 장소2 + 까지",
  "hero": {
    "pic": [
      {
        "e": "🧑",
        "c": "에서 ~ 까지 (장소)",
        "t": "navy"
      },
      {
        "e": "💬",
        "c": "명사",
        "t": "accent"
      }
    ],
    "ko": [
      "서울[[에서]] 부산[[까지]] 기차로 가요.",
      "집[[에서]] 학교[[까지]] 걸어가요."
    ],
    "en": [
      "I go [[from]] Seoul [[to]] Busan by train.",
      "I walk [[from]] home [[to]] school."
    ]
  },
  "ex": [
    {
      "label": "예문 ① · 도시 간 이동하기",
      "scene": "/course/sample/scenes/ex-12-1.svg",
      "ask": {
        "q": "서울[[에서]] 부산[[까지]] 무엇으로 가요?",
        "en": "How do you travel from Seoul to Busan?"
      },
      "pic": [
        {
          "e": "🙋",
          "c": "에서 ~ 까지 (장소)",
          "t": "navy"
        }
      ],
      "a": {
        "who": "A · 사라",
        "ko": [
          "마이클 씨, 서울[[에서]] 부산[[까지]] 어떻게 가요?"
        ],
        "en": [
          "Michael, how do you go from Seoul to Busan?"
        ]
      },
      "b": {
        "who": "B · 마이클",
        "ko": [
          "서울[[에서]] 부산[[까지]] 고속열차로 가요.",
          "기차로 세 시간쯤 걸려요."
        ],
        "en": [
          "I go [[from]] Seoul [[to]] Busan by express train.",
          "It takes about three hours by train."
        ]
      },
      "morph": [
        "서울 + 에서 (출발지)",
        "부산 + 까지 (도착지)"
      ]
    },
    {
      "label": "예문 ② · 집에서 학교까지 통학",
      "scene": "/course/sample/scenes/ex-12-2.svg",
      "ask": {
        "q": "집[[에서]] 학교[[까지]] 멀어요?",
        "en": "Is it far from home to school?"
      },
      "pic": [
        {
          "e": "🗣️",
          "c": "에서 ~ 까지 (장소)",
          "t": "accent"
        }
      ],
      "a": {
        "who": "A · 유진",
        "ko": [
          "하준 씨, 집[[에서]] 학교[[까지]] 버스로 가요?"
        ],
        "en": [
          "Hajun, do you go from home to school by bus?"
        ]
      },
      "b": {
        "who": "B · 하준",
        "ko": [
          "아니요, 집[[에서]] 학교[[까지]] 가까워요.",
          "그래서 매일 걸어서 가요."
        ],
        "en": [
          "No, it is close [[from]] home [[to]] school.",
          "So I walk every day."
        ]
      },
      "morph": [
        "집 + 에서 (출발지)",
        "학교 + 까지 (도착지)"
      ]
    }
  ],
  "review": [
    {
      "ko": "서울에서.",
      "base": "서울",
      "b": true,
      "f": "에서 ~ 까지 (장소)"
    },
    {
      "ko": "집에서.",
      "base": "집",
      "b": true,
      "f": "에서 ~ 까지 (장소)"
    },
    {
      "ko": "한국에서.",
      "base": "한국",
      "b": true,
      "f": "에서 ~ 까지 (장소)"
    },
    {
      "ko": "교실에서.",
      "base": "교실",
      "b": true,
      "f": "에서 ~ 까지 (장소)"
    },
    {
      "ko": "부산까지.",
      "base": "부산",
      "b": true,
      "f": "에서 ~ 까지 (장소)"
    },
    {
      "ko": "학교까지.",
      "base": "학교",
      "b": false,
      "f": "에서 ~ 까지 (장소)"
    },
    {
      "ko": "공항까지.",
      "base": "공항",
      "b": true,
      "f": "에서 ~ 까지 (장소)"
    },
    {
      "ko": "도서관까지.",
      "base": "도서관",
      "b": true,
      "f": "에서 ~ 까지 (장소)"
    },
    {
      "ko": "서울에서 부산까지 기차로 가요.",
      "note": "에서 ~ 까지 (장소) 대표 예문"
    }
  ],
  "rules": {
    "head": "Rule <i>규칙</i>",
    "th": [
      "구분",
      "결합 형태",
      "예시"
    ],
    "rows": [
      {
        "k": "출발 장소",
        "f": "장소1 + 에서",
        "ex": [
          [
            "서울",
            "서울에서"
          ],
          [
            "집",
            "집에서"
          ],
          [
            "한국",
            "한국에서"
          ],
          [
            "교실",
            "교실에서"
          ]
        ]
      },
      {
        "k": "도착 장소",
        "f": "장소2 + 까지",
        "c": "g2",
        "ex": [
          [
            "부산",
            "부산까지"
          ],
          [
            "학교",
            "학교까지"
          ],
          [
            "공항",
            "공항까지"
          ],
          [
            "도서관",
            "도서관까지"
          ]
        ]
      }
    ]
  },
  "tips": [
    {
      "c": "",
      "h": "💡 TIP ① · 에서 ~ 까지 (장소) 결합 규칙",
      "p": "<b>출발 장소</b>일 때는 <span class=\"g\">장소1 + 에서</span>, <b>도착 장소</b>일 때는 <span class=\"g2\">장소2 + 까지</span> 형태를 씁니다.<br><br><span class=\"yes\">O</span> 서울에서 / 부산까지"
    },
    {
      "c": "navy",
      "h": "💡 TIP ② · 핵심 의미와 쓰임",
      "p": "장소의 시작점(출발지)과 끝점(도착지)을 나타내어 이동 구간을 표현합니다.<br><br>· 서울에서 부산까지 기차로 가요.<br>· 집에서 학교까지 걸어가요."
    },
    {
      "c": "teal",
      "h": "💡 TIP ③ · 실전 대화 팁",
      "p": "질문 <b>\"서울에서 부산까지 어떻게 가요?\"</b>에 대해 <b>장소1 + 에서 + 장소2 + 까지</b> 패턴으로 자연스럽게 답해 보세요."
    }
  ],
  "tipsEn": [
    {
      "c": "",
      "h": "💡 TIP ① · 에서 ~ 까지 (장소) Conjugation Rule",
      "p": "Use <span class=\"g\">장소1 + 에서</span> for <b>출발 장소</b> and <span class=\"g2\">장소2 + 까지</span> for <b>도착 장소</b>.<br><br><span class=\"yes\">O</span> 서울에서 / 부산까지"
    },
    {
      "c": "navy",
      "h": "💡 TIP ② · Core Meaning & Usage",
      "p": "Indicates the starting point ('from') and ending point ('to') of a spatial range.<br><br>· I go from Seoul to Busan by train.<br>· I walk from home to school."
    },
    {
      "c": "teal",
      "h": "💡 TIP ③ · Conversation Practice",
      "p": "Practice answering <b>\"How do you go from Seoul to Busan?\"</b> using the pattern <b>장소1 + 에서 + 장소2 + 까지</b>."
    }
  ],
  "words": [
    {
      "b": "서울",
      "r": "서울에서",
      "t": "출발 장소"
    },
    {
      "b": "집",
      "r": "집에서",
      "t": "출발 장소"
    },
    {
      "b": "한국",
      "r": "한국에서",
      "t": "출발 장소"
    },
    {
      "b": "교실",
      "r": "교실에서",
      "t": "출발 장소"
    },
    {
      "b": "부산",
      "r": "부산까지",
      "t": "도착 장소"
    },
    {
      "b": "학교",
      "r": "학교까지",
      "t": "도착 장소"
    },
    {
      "b": "공항",
      "r": "공항까지",
      "t": "도착 장소"
    },
    {
      "b": "도서관",
      "r": "도서관까지",
      "t": "도착 장소"
    }
  ],
  "bingo": [
    [
      "서울",
      "서울에서"
    ],
    [
      "집",
      "집에서"
    ],
    [
      "한국",
      "한국에서"
    ],
    [
      "교실",
      "교실에서"
    ],
    [
      "부산",
      "부산까지"
    ],
    [
      "학교",
      "학교까지"
    ],
    [
      "공항",
      "공항까지"
    ],
    [
      "도서관",
      "도서관까지"
    ],
    [
      "서울",
      "서울에서 부산까지 기차로 가요."
    ],
    [
      "집",
      "집에서 학교까지 걸어가요."
    ],
    [
      "공항",
      "공항에서 호텔까지 버스로 가요."
    ],
    [
      "교실",
      "교실에서 도서관까지 가까워요."
    ]
  ],
  "relays": [
    [
      {
        "t": "마이클 씨, 서울에서 부산까지 어떻게 가요?"
      },
      {
        "base": "서울",
        "ans": "서울에서."
      },
      {
        "base": "부산",
        "ans": "부산까지."
      }
    ],
    [
      {
        "t": "서울에서 부산까지 어떻게 가요?"
      },
      {
        "base": "서울 · 부산 · 기차",
        "ans": "서울에서 부산까지 기차로 가요."
      },
      {
        "base": "집 · 학교 · 걸어가다",
        "ans": "집에서 학교까지 걸어가요."
      }
    ]
  ],
  "make": [
    {
      "k": [
        "서울",
        "부산",
        "기차"
      ],
      "a": "서울에서 부산까지 기차로 가요.",
      "e": "I go from Seoul to Busan by train."
    },
    {
      "k": [
        "집",
        "학교",
        "걸어가다"
      ],
      "a": "집에서 학교까지 걸어가요.",
      "e": "I walk from home to school."
    },
    {
      "k": [
        "공항",
        "호텔",
        "버스"
      ],
      "a": "공항에서 호텔까지 버스로 가요.",
      "e": "I go from the airport to the hotel by bus."
    },
    {
      "k": [
        "교실",
        "도서관",
        "가깝다"
      ],
      "a": "교실에서 도서관까지 가까워요.",
      "e": "It is close from the classroom to the library."
    }
  ],
  "vocab": [
    {
      "tag": "에서 ~ 까지 (장소)",
      "icon": "📖",
      "q": "서울에서 부산까지 어떻게 가요?",
      "qen": "How do you go from Seoul to Busan?",
      "pat": "장소1 + 에서 + 장소2 + 까지",
      "items": [
        {
          "e": "🏙️",
          "w": "서울",
          "g": "Seoul",
          "r": "서울에서",
          "b": true
        },
        {
          "e": "🏠",
          "w": "집",
          "g": "home",
          "r": "집에서",
          "b": true
        },
        {
          "e": "🇰🇷",
          "w": "한국",
          "g": "Korea",
          "r": "한국에서",
          "b": true
        },
        {
          "e": "🏫",
          "w": "교실",
          "g": "classroom",
          "r": "교실에서",
          "b": true
        },
        {
          "e": "🌊",
          "w": "부산",
          "g": "Busan",
          "r": "부산까지",
          "b": true
        },
        {
          "e": "🏫",
          "w": "학교",
          "g": "school",
          "r": "학교까지",
          "b": false
        }
      ]
    }
  ],
  "sit": [
    {
      "i": "👋",
      "t": "통학 거리와 시간",
      "v": "통학 거리와 시간",
      "q": "집[[에서]] 학교[[까지]] 무엇으로 와요? 얼마나 걸려요?",
      "qen": "How do you come from home to school? How long does it take?",
      "m": [
        "집[[에서]] 학교[[까지]] 지하철로 와요.",
        "30분쯤 걸려요."
      ],
      "memo": "1. Free talking — 활동판 없이 선생님과 묻고 답한다<br>2. 「학교에서 집까지 어떻게 가요?」 → 출발 · 도착 · 수단<br>3. 회사 · 공항으로 바꿔 묻기<br>4. 역할 바꾸기"
    },
    {
      "i": "💬",
      "t": "여행 경로 말하기",
      "v": "여행 경로 말하기",
      "q": "서울[[에서]] 제주도[[까지]] 무엇으로 가요?",
      "qen": "How do you go from Seoul to Jeju Island?",
      "m": [
        "서울[[에서]] 제주도[[까지]] 비행기로 가요.",
        "한 시간 걸려요."
      ],
      "memo": "1. 장 그림 지도로 「서울에서 부산까지 멀어요?」<br>2. 다음 장 활동판 — 보기(서울 → 미국)처럼 교사 · 학생이 번갈아 출발 · 도착을 정해 쓴다<br>3. 쓴 줄마다 「○○에서 □□까지 멀어요?」 · 궁금한 것(뭘로 가요? · 몇 시간이에요?)을 서로 묻기"
    }
  ],
  "wrap": {
    "ex": [
      {
        "ko": [
          "서울[[에서]] 부산[[까지]] 기차로 가요."
        ],
        "en": [
          "I go [[from]] Seoul [[to]] Busan by train."
        ]
      },
      {
        "ko": [
          "집[[에서]] 학교[[까지]] 걸어가요."
        ],
        "en": [
          "I walk [[from]] home [[to]] school."
        ]
      }
    ],
    "tips": [
      "<b>출발 장소</b> → <span class=\"g\">장소1 + 에서</span> / <b>도착 장소</b> → <span class=\"g2\">장소2 + 까지</span>",
      "장소의 시작점(출발지)과 끝점(도착지)을 나타내어 이동 구간을 표현합니다.",
      "대표 대화: \"서울에서 부산까지 어떻게 가요?\" → \"서울에서 부산까지 기차로 가요.\""
    ]
  }
});
