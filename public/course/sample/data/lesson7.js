/* Lesson 7: 이/가 (주어) · 100% Authentic Situation-Matched Data */
LESSONS.push({
  "key": "이/가 (주어)",
  "pos": "명사",
  "form": "이/가",
  "gpic": [
    {
      "e": "📖",
      "c": "이/가 (주어)",
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
    "ko": "문장의 주어를 나타내며, 새로운 정보나 상태·성질을 묘사할 때 자연스럽게 쓰입니다.",
    "en": "Marks the grammatical subject of a sentence, especially with descriptive adjectives."
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
    "q": "오늘 날씨[[가]] 어때요? 공원에 무엇[[이]] 예뻐요?",
    "en": "How is the weather today? What is pretty in the park?"
  },
  "en": "Subject Marker · \"~이/가\" · 문장의 주어를 나타내요",
  "prior": [],
  "pat": "○○이/가 + 형용사/동사",
  "hero": {
    "pic": [
      {
        "e": "🧑",
        "c": "이/가 (주어)",
        "t": "navy"
      },
      {
        "e": "💬",
        "c": "명사",
        "t": "accent"
      }
    ],
    "ko": [
      "오늘 날씨[[가]] 참 좋아요.",
      "공원에 꽃[[이]] 예뻐요."
    ],
    "en": [
      "The [[weather]] is really nice today.",
      "The [[flowers]] in the park are pretty."
    ]
  },
  "ex": [
    {
      "label": "예문 ① · 공원 산책과 날씨",
      "scene": "/course/sample/scenes/ex-7-1.svg",
      "ask": {
        "q": "오늘 날씨[[가]] 어때요?",
        "en": "How is the weather today?"
      },
      "pic": [
        {
          "e": "🙋",
          "c": "이/가 (주어)",
          "t": "navy"
        }
      ],
      "a": {
        "who": "A · 유진",
        "ko": [
          "마이클 씨, 오늘 날씨[[가]] 어때요?"
        ],
        "en": [
          "Michael, how is the weather today?"
        ]
      },
      "b": {
        "who": "B · 마이클",
        "ko": [
          "하늘[[이]] 맑고 날씨[[가]] 참 좋아요.",
          "공원에 꽃[[이]] 정말 예뻐요."
        ],
        "en": [
          "The [[sky]] is clear and the [[weather]] is really nice.",
          "The [[flowers]] in the park are very pretty."
        ]
      },
      "morph": [
        "날씨 + 가 (받침 X)",
        "꽃 + 이 (받침 O)"
      ]
    },
    {
      "label": "예문 ② · 교실과 음식 묘사",
      "scene": "/course/sample/scenes/ex-7-2.svg",
      "ask": {
        "q": "한국 음식[[이]] 어때요?",
        "en": "How is Korean food?"
      },
      "pic": [
        {
          "e": "🗣️",
          "c": "이/가 (주어)",
          "t": "accent"
        }
      ],
      "a": {
        "who": "A · 선생님",
        "ko": [
          "여러분, 우리 한국어 교실[[이]] 어때요?"
        ],
        "en": [
          "Everyone, how is our Korean classroom?"
        ]
      },
      "b": {
        "who": "B · 유진",
        "ko": [
          "우리 교실[[이]] 아주 넓고 깨끗해요.",
          "그리고 학교 식당 음식[[이]] 맛있어요."
        ],
        "en": [
          "Our [[classroom]] is very spacious and clean.",
          "And the school cafeteria [[food]] is delicious."
        ]
      },
      "morph": [
        "교실 + 이 (받침 O)",
        "음식 + 이 (받침 O)"
      ]
    }
  ],
  "review": [
    {
      "ko": "가을 하늘[[이]] 높고 날씨[[가]] 참 좋아요.",
      "base": "날씨",
      "b": false,
      "f": "가"
    },
    {
      "ko": "봄이 되어서 길가에 꽃[[이]] 활짝 피었어요.",
      "base": "꽃",
      "b": true,
      "f": "이"
    },
    {
      "ko": "한국 식당의 비빔밥 음식[[이]] 아주 맛있어요.",
      "base": "음식",
      "b": true,
      "f": "이"
    },
    {
      "ko": "오후부터 하늘이 흐려지고 비[[가]] 내려요.",
      "base": "비",
      "b": false,
      "f": "가"
    },
    {
      "ko": "우리 대학교 교실[[이]] 넓고 환해요.",
      "note": "받침 O → 이 / 받침 X → 가"
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
        "k": "받침 O",
        "f": "+ 이",
        "ex": [
          [
            "꽃",
            "꽃이"
          ],
          [
            "음식",
            "음식이"
          ],
          [
            "가방",
            "가방이"
          ],
          [
            "교실",
            "교실이"
          ],
          [
            "바람",
            "바람이"
          ],
          [
            "하늘",
            "하늘이"
          ]
        ]
      },
      {
        "k": "받침 X",
        "f": "+ 가",
        "c": "g2",
        "ex": [
          [
            "날씨",
            "날씨가"
          ],
          [
            "커피",
            "커피가"
          ],
          [
            "노래",
            "노래가"
          ],
          [
            "비",
            "비가"
          ],
          [
            "바다",
            "바다가"
          ],
          [
            "모자",
            "모자가"
          ]
        ]
      }
    ]
  },
  "tips": [
    {
      "c": "",
      "h": "💡 TIP ① · 이/가 (주어) 결합 규칙",
      "p": "<b>받침 O</b>일 때는 <span class=\"g\">+ 이</span>, <b>받침 X</b>일 때는 <span class=\"g2\">+ 가</span> 형태를 씁니다.<br><br><span class=\"yes\">O</span> 꽃이 / 날씨가"
    },
    {
      "c": "navy",
      "h": "💡 TIP ② · 핵심 의미와 쓰임",
      "p": "문장의 주어를 나타내며, 새로운 정보나 상태·성질을 묘사할 때 자연스럽게 쓰입니다.<br><br>· 오늘 날씨가 참 좋아요.<br>· 공원에 꽃이 예뻐요."
    },
    {
      "c": "teal",
      "h": "💡 TIP ③ · 실전 대화 팁",
      "p": "질문 <b>\"오늘 날씨가 어때요? 공원에 무엇이 예뻐요?\"</b>에 대해 <b>○○이/가 + 형용사/동사</b> 패턴으로 자연스럽게 답해 보세요."
    }
  ],
  "tipsEn": [
    {
      "c": "",
      "h": "💡 TIP ① · 이/가 (주어) Conjugation Rule",
      "p": "Use <span class=\"g\">+ 이</span> for <b>받침 O</b> and <span class=\"g2\">+ 가</span> for <b>받침 X</b>.<br><br><span class=\"yes\">O</span> 꽃이 / 날씨가"
    },
    {
      "c": "navy",
      "h": "💡 TIP ② · Core Meaning & Usage",
      "p": "Marks the grammatical subject of a sentence, especially with descriptive adjectives.<br><br>· The weather is really nice today.<br>· The flowers in the park are pretty."
    },
    {
      "c": "teal",
      "h": "💡 TIP ③ · Conversation Practice",
      "p": "Practice answering <b>\"How is the weather today? What is pretty in the park?\"</b> using the pattern <b>○○이/가 + 형용사/동사</b>."
    }
  ],
  "words": [
    {
      "b": "꽃",
      "r": "꽃이",
      "t": "받침 O"
    },
    {
      "b": "음식",
      "r": "음식이",
      "t": "받침 O"
    },
    {
      "b": "가방",
      "r": "가방이",
      "t": "받침 O"
    },
    {
      "b": "교실",
      "r": "교실이",
      "t": "받침 O"
    },
    {
      "b": "바람",
      "r": "바람이",
      "t": "받침 O"
    },
    {
      "b": "하늘",
      "r": "하늘이",
      "t": "받침 O"
    },
    {
      "b": "날씨",
      "r": "날씨가",
      "t": "받침 X"
    },
    {
      "b": "커피",
      "r": "커피가",
      "t": "받침 X"
    },
    {
      "b": "노래",
      "r": "노래가",
      "t": "받침 X"
    },
    {
      "b": "비",
      "r": "비가",
      "t": "받침 X"
    },
    {
      "b": "바다",
      "r": "바다가",
      "t": "받침 X"
    },
    {
      "b": "모자",
      "r": "모자가",
      "t": "받침 X"
    }
  ],
  "bingo": [
    [
      "꽃",
      "꽃이"
    ],
    [
      "음식",
      "음식이"
    ],
    [
      "가방",
      "가방이"
    ],
    [
      "교실",
      "교실이"
    ],
    [
      "바람",
      "바람이"
    ],
    [
      "하늘",
      "하늘이"
    ],
    [
      "날씨",
      "날씨가"
    ],
    [
      "커피",
      "커피가"
    ],
    [
      "노래",
      "노래가"
    ],
    [
      "비",
      "비가"
    ],
    [
      "바다",
      "바다가"
    ],
    [
      "모자",
      "모자가"
    ]
  ],
  "relays": [
    [
      {
        "t": "마이클 씨, 오늘 날씨가 어때요?"
      },
      {
        "base": "꽃",
        "ans": "꽃이."
      },
      {
        "base": "바람",
        "ans": "바람이."
      }
    ],
    [
      {
        "t": "오늘 날씨가 어때요? 공원에 무엇이 예뻐요?"
      },
      {
        "base": "음식",
        "ans": "음식이."
      },
      {
        "base": "커피",
        "ans": "커피가."
      }
    ],
    [
      {
        "t": "여러분, 우리 한국어 교실이 어때요?"
      },
      {
        "base": "날씨 · 좋다",
        "ans": "오늘 날씨가 좋아요."
      },
      {
        "base": "꽃 · 예쁘다",
        "ans": "공원에 꽃이 예뻐요."
      }
    ]
  ],
  "make": [
    {
      "k": [
        "날씨",
        "좋다"
      ],
      "a": "오늘 날씨가 좋아요.",
      "e": "The weather is nice today."
    },
    {
      "k": [
        "꽃",
        "예쁘다"
      ],
      "a": "공원에 꽃이 예뻐요.",
      "e": "The flowers in the park are pretty."
    },
    {
      "k": [
        "음식",
        "맛있다"
      ],
      "a": "한국 음식이 맛있어요.",
      "e": "Korean food is delicious."
    },
    {
      "k": [
        "가방",
        "크다"
      ],
      "a": "이 가방이 아주 커요.",
      "e": "This bag is very big."
    },
    {
      "k": [
        "비",
        "오다"
      ],
      "a": "밖에 시원하게 비가 와요.",
      "e": "It rains refreshingly outside."
    },
    {
      "k": [
        "교실",
        "깨끗하다"
      ],
      "a": "우리 교실이 참 깨끗해요.",
      "e": "Our classroom is really clean."
    },
    {
      "k": [
        "노래",
        "좋다"
      ],
      "a": "라디오에서 나오는 노래가 좋아요.",
      "e": "The song coming from the radio is nice."
    },
    {
      "k": [
        "바람",
        "시원하다"
      ],
      "a": "가을 바람이 시원해요.",
      "e": "The autumn breeze is cool."
    }
  ],
  "vocab": [
    {
      "tag": "이/가 (주어)",
      "icon": "📖",
      "q": "오늘 날씨가 어때요? 공원에 무엇이 예뻐요?",
      "qen": "How is the weather today? What is pretty in the park?",
      "pat": "○○이/가 + 형용사/동사",
      "items": [
        {
          "e": "🌸",
          "w": "꽃",
          "g": "flower",
          "r": "꽃이",
          "b": true
        },
        {
          "e": "🍲",
          "w": "음식",
          "g": "food",
          "r": "음식이",
          "b": true
        },
        {
          "e": "🎒",
          "w": "가방",
          "g": "bag",
          "r": "가방이",
          "b": true
        },
        {
          "e": "🏫",
          "w": "교실",
          "g": "classroom",
          "r": "교실이",
          "b": true
        },
        {
          "e": "💨",
          "w": "바람",
          "g": "wind",
          "r": "바람이",
          "b": true
        },
        {
          "e": "⛅",
          "w": "하늘",
          "g": "sky",
          "r": "하늘이",
          "b": true
        }
      ]
    }
  ],
  "sit": [
    {
      "i": "👋",
      "t": "오늘의 날씨",
      "v": "오늘의 날씨",
      "q": "오늘 밖의 날씨[[가]] 어때요?",
      "qen": "How is the weather outside today?",
      "m": [
        "오늘 날씨[[가]] 아주 좋아요.",
        "바람[[이]] 시원해요."
      ],
      "memo": "1. Free talking — 활동판 없이 선생님과 묻고 답한다<br>2. 창밖 · 날씨 앱을 함께 보며 「오늘 날씨가 어때요?」<br>3. 학생 「○○이/가 △△아요/어요」 — 날씨 · 바람 · 하늘<br>4. 온라인이면 서로 사는 곳 날씨를 견주기"
    },
    {
      "i": "💬",
      "t": "누가 했어요?",
      "v": "누가 했어요?",
      "q": "교실에 누[[가]] 일찍 왔어요?",
      "qen": "Who came to the classroom early?",
      "m": [
        "마이클 씨[[가]] 일찍 왔어요.",
        "선생님[[이]] 교실에 계세요."
      ],
      "memo": "1. Free talking — 활동판 없이 선생님과 묻고 답한다<br>2. 「누가 한국어를 공부해요?」 → 이/가로 사람을 세워 대답<br>3. 가족 · 친구로 바꿔 묻기 — 「누가 요리해요?」<br>4. 역할 바꾸기"
    },
    {
      "i": "🎯",
      "t": "좋아하는 계절",
      "v": "좋아하는 계절",
      "q": "어느 계절[[이]] 좋아요? 무엇[[이]] 맛있어요?",
      "qen": "Which season is nice? What is delicious?",
      "m": [
        "봄[[이]] 따뜻하고 좋아요.",
        "한국 음식[[이]] 정말 맛있어요."
      ],
      "memo": "1. Free talking — 활동판 없이 선생님과 묻고 답한다<br>2. 창밖 · 날씨 앱을 함께 보며 「오늘 날씨가 어때요?」<br>3. 학생 「○○이/가 △△아요/어요」 — 날씨 · 바람 · 하늘<br>4. 온라인이면 서로 사는 곳 날씨를 견주기"
    }
  ],
  "wrap": {
    "ex": [
      {
        "ko": [
          "오늘 날씨[[가]] 참 좋아요."
        ],
        "en": [
          "The [[weather]] is really nice today."
        ]
      },
      {
        "ko": [
          "공원에 꽃[[이]] 예뻐요."
        ],
        "en": [
          "The [[flowers]] in the park are pretty."
        ]
      }
    ],
    "tips": [
      "<b>받침 O</b> → <span class=\"g\">+ 이</span> / <b>받침 X</b> → <span class=\"g2\">+ 가</span>",
      "문장의 주어를 나타내며, 새로운 정보나 상태·성질을 묘사할 때 자연스럽게 쓰입니다.",
      "대표 대화: \"오늘 날씨가 어때요? 공원에 무엇이 예뻐요?\" → \"오늘 날씨가 참 좋아요.\""
    ]
  }
});
