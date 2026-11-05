/* Lesson 6: 을/를 · 100% Authentic Situation-Matched Data */
LESSONS.push({
  "key": "을/를",
  "pos": "명사",
  "form": "을/를",
  "gpic": [
    {
      "e": "📖",
      "c": "을/를",
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
    "ko": "명사 뒤에 붙어 동사가 나타내는 행동의 직접적인 대상(목적어)임을 나타냅니다.",
    "en": "Attached to a noun to mark the direct object of an action verb."
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
    "q": "아침에 무엇[[을]] 마셔요? 도서관에서 무엇[[을]] 읽어요?",
    "en": "What do you drink in the morning? What do you read at the library?"
  },
  "en": "Object Marker · \"~을/를\" · 동작의 대상을 말해요",
  "prior": [],
  "pat": "○○을/를 + 동사",
  "hero": {
    "pic": [
      {
        "e": "🧑",
        "c": "을/를",
        "t": "navy"
      },
      {
        "e": "💬",
        "c": "명사",
        "t": "accent"
      }
    ],
    "ko": [
      "아침에 커피[[를]] 마셔요.",
      "재미있는 책[[을]] 읽어요."
    ],
    "en": [
      "I drink [[coffee]] in the morning.",
      "I read an interesting [[book]]."
    ]
  },
  "ex": [
    {
      "label": "예문 ① · 카페에서 주문하기",
      "scene": "/course/sample/scenes/ex-6-1.svg",
      "ask": {
        "q": "아침에 무엇[[을]] 마셔요?",
        "en": "What do you drink in the morning?"
      },
      "pic": [
        {
          "e": "🙋",
          "c": "을/를",
          "t": "navy"
        }
      ],
      "a": {
        "who": "A · 리에",
        "ko": [
          "하준 씨, 아침에 보통 무엇[[을]] 마셔요?"
        ],
        "en": [
          "Hajun, what do you usually drink in the morning?"
        ]
      },
      "b": {
        "who": "B · 하준",
        "ko": [
          "저는 따뜻한 커피[[를]] 마셔요.",
          "그리고 맛있는 빵[[을]] 먹어요."
        ],
        "en": [
          "I drink warm [[coffee]].",
          "And I eat delicious [[bread]]."
        ]
      },
      "morph": [
        "커피 + 를 (받침 X)",
        "빵 + 을 (받침 O)"
      ]
    },
    {
      "label": "예문 ② · 여가 활동 이야기",
      "scene": "/course/sample/scenes/ex-6-2.svg",
      "ask": {
        "q": "주말에 무엇[[을]] 해요?",
        "en": "What do you do on the weekend?"
      },
      "pic": [
        {
          "e": "🗣️",
          "c": "을/를",
          "t": "accent"
        }
      ],
      "a": {
        "who": "A · 미나",
        "ko": [
          "주말에 도서관에서 무엇[[을]] 해요?"
        ],
        "en": [
          "What do you do at the library on the weekend?"
        ]
      },
      "b": {
        "who": "B · 학생",
        "ko": [
          "도서관에서 한국어 책[[을]] 읽어요.",
          "저녁에는 한국 영화[[를]] 봐요."
        ],
        "en": [
          "I read a Korean [[book]] at the library.",
          "In the evening, I watch a Korean [[movie]]."
        ]
      },
      "morph": [
        "책 + 을 (받침 O)",
        "영화 + 를 (받침 X)"
      ]
    }
  ],
  "review": [
    {
      "ko": "책을 읽어요.",
      "base": "책",
      "b": true,
      "f": "을/를"
    },
    {
      "ko": "밥을 먹어요.",
      "base": "밥",
      "b": true,
      "f": "을/를"
    },
    {
      "ko": "음악을 들어요.",
      "base": "음악",
      "b": true,
      "f": "을/를"
    },
    {
      "ko": "선물을 사요.",
      "base": "선물",
      "b": true,
      "f": "을/를"
    },
    {
      "ko": "커피를 마셔요.",
      "base": "커피",
      "b": false,
      "f": "을/를"
    },
    {
      "ko": "한국어를 배워요.",
      "base": "한국어",
      "b": false,
      "f": "을/를"
    },
    {
      "ko": "영화를 봐요.",
      "base": "영화",
      "b": false,
      "f": "을/를"
    },
    {
      "ko": "친구를 만나요.",
      "base": "친구",
      "b": false,
      "f": "을/를"
    },
    {
      "ko": "아침에 커피를 마셔요.",
      "note": "을/를 대표 예문"
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
        "f": "+ 을",
        "ex": [
          [
            "책",
            "책을 읽어요"
          ],
          [
            "밥",
            "밥을 먹어요"
          ],
          [
            "음악",
            "음악을 들어요"
          ],
          [
            "선물",
            "선물을 사요"
          ]
        ]
      },
      {
        "k": "받침 X",
        "f": "+ 를",
        "c": "g2",
        "ex": [
          [
            "커피",
            "커피를 마셔요"
          ],
          [
            "한국어",
            "한국어를 배워요"
          ],
          [
            "영화",
            "영화를 봐요"
          ],
          [
            "친구",
            "친구를 만나요"
          ]
        ]
      }
    ]
  },
  "tips": [
    {
      "c": "",
      "h": "💡 TIP ① · 을/를 결합 규칙",
      "p": "<b>받침 O</b>일 때는 <span class=\"g\">+ 을</span>, <b>받침 X</b>일 때는 <span class=\"g2\">+ 를</span> 형태를 씁니다.<br><br><span class=\"yes\">O</span> 책을 읽어요 / 커피를 마셔요"
    },
    {
      "c": "navy",
      "h": "💡 TIP ② · 핵심 의미와 쓰임",
      "p": "명사 뒤에 붙어 동사가 나타내는 행동의 직접적인 대상(목적어)임을 나타냅니다.<br><br>· 아침에 커피를 마셔요.<br>· 재미있는 책을 읽어요."
    },
    {
      "c": "teal",
      "h": "💡 TIP ③ · 실전 대화 팁",
      "p": "질문 <b>\"아침에 무엇을 마셔요? 도서관에서 무엇을 읽어요?\"</b>에 대해 <b>○○을/를 + 동사</b> 패턴으로 자연스럽게 답해 보세요."
    }
  ],
  "tipsEn": [
    {
      "c": "",
      "h": "💡 TIP ① · 을/를 Conjugation Rule",
      "p": "Use <span class=\"g\">+ 을</span> for <b>받침 O</b> and <span class=\"g2\">+ 를</span> for <b>받침 X</b>.<br><br><span class=\"yes\">O</span> 책을 읽어요 / 커피를 마셔요"
    },
    {
      "c": "navy",
      "h": "💡 TIP ② · Core Meaning & Usage",
      "p": "Attached to a noun to mark the direct object of an action verb.<br><br>· I drink coffee in the morning.<br>· I read an interesting book."
    },
    {
      "c": "teal",
      "h": "💡 TIP ③ · Conversation Practice",
      "p": "Practice answering <b>\"What do you drink in the morning? What do you read at the library?\"</b> using the pattern <b>○○을/를 + 동사</b>."
    }
  ],
  "words": [
    {
      "b": "책",
      "r": "책을 읽어요",
      "t": "받침 O"
    },
    {
      "b": "밥",
      "r": "밥을 먹어요",
      "t": "받침 O"
    },
    {
      "b": "음악",
      "r": "음악을 들어요",
      "t": "받침 O"
    },
    {
      "b": "선물",
      "r": "선물을 사요",
      "t": "받침 O"
    },
    {
      "b": "커피",
      "r": "커피를 마셔요",
      "t": "받침 X"
    },
    {
      "b": "한국어",
      "r": "한국어를 배워요",
      "t": "받침 X"
    },
    {
      "b": "영화",
      "r": "영화를 봐요",
      "t": "받침 X"
    },
    {
      "b": "친구",
      "r": "친구를 만나요",
      "t": "받침 X"
    }
  ],
  "bingo": [
    [
      "책",
      "책을 읽어요"
    ],
    [
      "밥",
      "밥을 먹어요"
    ],
    [
      "음악",
      "음악을 들어요"
    ],
    [
      "선물",
      "선물을 사요"
    ],
    [
      "커피",
      "커피를 마셔요"
    ],
    [
      "한국어",
      "한국어를 배워요"
    ],
    [
      "영화",
      "영화를 봐요"
    ],
    [
      "친구",
      "친구를 만나요"
    ],
    [
      "커피",
      "아침에 커피를 마셔요."
    ],
    [
      "책",
      "재미있는 책을 읽어요."
    ],
    [
      "밥",
      "점심에 비빔밥을 먹어요."
    ],
    [
      "영화",
      "주말에 영화를 봐요."
    ]
  ],
  "relays": [
    [
      {
        "t": "하준 씨, 아침에 보통 무엇을 마셔요?"
      },
      {
        "base": "책",
        "ans": "책을 읽어요."
      },
      {
        "base": "커피",
        "ans": "커피를 마셔요."
      }
    ],
    [
      {
        "t": "아침에 무엇을 마셔요? 도서관에서 무엇을 읽어요?"
      },
      {
        "base": "커피 · 마시다",
        "ans": "아침에 커피를 마셔요."
      },
      {
        "base": "책 · 읽다",
        "ans": "재미있는 책을 읽어요."
      }
    ]
  ],
  "make": [
    {
      "k": [
        "커피",
        "마시다"
      ],
      "a": "아침에 커피를 마셔요.",
      "e": "I drink coffee in the morning."
    },
    {
      "k": [
        "책",
        "읽다"
      ],
      "a": "재미있는 책을 읽어요.",
      "e": "I read an interesting book."
    },
    {
      "k": [
        "밥",
        "먹다"
      ],
      "a": "점심에 비빔밥을 먹어요.",
      "e": "I eat bibimbap for lunch."
    },
    {
      "k": [
        "영화",
        "보다"
      ],
      "a": "주말에 영화를 봐요.",
      "e": "I watch a movie on the weekend."
    }
  ],
  "vocab": [
    {
      "tag": "을/를",
      "icon": "📖",
      "q": "아침에 무엇을 마셔요? 도서관에서 무엇을 읽어요?",
      "qen": "What do you drink in the morning? What do you read at the library?",
      "pat": "○○을/를 + 동사",
      "items": [
        {
          "e": "📕",
          "w": "책",
          "g": "book",
          "r": "책을 읽어요",
          "b": true
        },
        {
          "e": "🍚",
          "w": "밥",
          "g": "meal / rice",
          "r": "밥을 먹어요",
          "b": true
        },
        {
          "e": "🎵",
          "w": "음악",
          "g": "music",
          "r": "음악을 들어요",
          "b": true
        },
        {
          "e": "🎁",
          "w": "선물",
          "g": "gift",
          "r": "선물을 사요",
          "b": true
        },
        {
          "e": "☕",
          "w": "커피",
          "g": "coffee",
          "r": "커피를 마셔요",
          "b": false
        },
        {
          "e": "🇰🇷",
          "w": "한국어",
          "g": "Korean language",
          "r": "한국어를 배워요",
          "b": false
        }
      ]
    }
  ],
  "sit": [
    {
      "i": "👋",
      "t": "오늘 먹은 음식",
      "v": "오늘 먹은 음식",
      "q": "오늘 아침에 무엇[[을]] 먹었어요? 무엇[[을]] 마셨어요?",
      "qen": "What did you eat this morning? What did you drink?",
      "m": [
        "아침에 빵[[을]] 먹어요.",
        "따뜻한 커피[[를]] 마셔요."
      ],
      "memo": "1. Free talking — 활동판 없이 선생님과 묻고 답한다<br>2. 「보통 아침에 무엇을 먹어요?」 → 「○○을/를 먹어요」<br>3. 점심 · 저녁으로 바꿔 묻기 — 마셔요까지<br>4. 역할 바꾸기"
    },
    {
      "i": "💬",
      "t": "좋아하는 것",
      "v": "좋아하는 것",
      "q": "어떤 음악[[을]] 좋아해요? 어떤 운동[[을]] 좋아해요?",
      "qen": "What kind of music do you like? What sports do you like?",
      "m": [
        "한국 음악[[을]] 좋아해요.",
        "주말에 영화[[를]] 봐요."
      ],
      "memo": "1. Free talking — 활동판 없이 선생님과 묻고 답한다<br>2. 「무엇을 좋아해요?」 → 학생이 좋아하는 것 두 가지<br>3. 「가족은요? 친구는요?」로 다른 사람까지<br>4. 역할 바꾸기"
    },
    {
      "i": "🎯",
      "t": "요즘 배우는 것",
      "v": "요즘 배우는 것",
      "q": "요즘 무엇[[을]] 공부해요?",
      "qen": "What do you study these days?",
      "m": [
        "요즘 한국어[[를]] 공부해요.",
        "한국어 책[[을]] 읽어요."
      ],
      "memo": "1. Free talking — 활동판 없이 선생님과 묻고 답한다<br>2. 「보통 아침에 무엇을 먹어요?」 → 「○○을/를 먹어요」<br>3. 점심 · 저녁으로 바꿔 묻기 — 마셔요까지<br>4. 역할 바꾸기"
    }
  ],
  "wrap": {
    "ex": [
      {
        "ko": [
          "아침에 커피[[를]] 마셔요."
        ],
        "en": [
          "I drink [[coffee]] in the morning."
        ]
      },
      {
        "ko": [
          "재미있는 책[[을]] 읽어요."
        ],
        "en": [
          "I read an interesting [[book]]."
        ]
      }
    ],
    "tips": [
      "<b>받침 O</b> → <span class=\"g\">+ 을</span> / <b>받침 X</b> → <span class=\"g2\">+ 를</span>",
      "명사 뒤에 붙어 동사가 나타내는 행동의 직접적인 대상(목적어)임을 나타냅니다.",
      "대표 대화: \"아침에 무엇을 마셔요? 도서관에서 무엇을 읽어요?\" → \"아침에 커피를 마셔요.\""
    ]
  }
});
