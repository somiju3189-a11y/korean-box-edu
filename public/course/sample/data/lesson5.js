/* Lesson 5: -아/어요 · 100% Authentic Situation-Matched Data */
LESSONS.push({
  "key": "-아/어요",
  "pos": "동사 · 형용사",
  "form": "-아/어요",
  "gpic": [
    {
      "e": "📖",
      "c": "-아/어요",
      "t": "navy"
    },
    {
      "sign": "="
    },
    {
      "e": "✨",
      "c": "동사 · 형용사",
      "t": "accent"
    }
  ],
  "mean": {
    "ko": "동사나 형용사 어간 뒤에 붙어 현재의 동작이나 상태를 친근하고 정중하게 나타냅니다.",
    "en": "Informal polite present tense ending attached to verb or adjective stems."
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
    "q": "한국 음식이 [[어때요]]? 요즘 무엇을 [[공부해요]]?",
    "en": "How is Korean food? What do you study these days?"
  },
  "en": "Polite Present · \"-아/어요\" · 현재의 동작과 상태를 말해요",
  "prior": [],
  "pat": "동사/형용사 + -아/어요.",
  "hero": {
    "pic": [
      {
        "e": "🧑",
        "c": "-아/어요",
        "t": "navy"
      },
      {
        "e": "💬",
        "c": "동사 · 형용사",
        "t": "accent"
      }
    ],
    "ko": [
      "한국 음식이 맛있[[어요]].",
      "매일 한국어를 공부[[해요]]."
    ],
    "en": [
      "Korean food [[is delicious]].",
      "I [[study]] Korean every day."
    ]
  },
  "ex": [
    {
      "label": "예문 ① · 한국 음식 이야기",
      "scene": "/course/sample/scenes/ex-5-1.svg",
      "ask": {
        "q": "비빔밥이 맛있[[어요]]?",
        "en": "Is bibimbap delicious?"
      },
      "pic": [
        {
          "e": "🙋",
          "c": "-아/어요",
          "t": "navy"
        }
      ],
      "a": {
        "who": "A · 요리사",
        "ko": [
          "마이클 씨, 한국 음식이 입에 맞[[아요]]?"
        ],
        "en": [
          "Michael, does Korean food suit your taste?"
        ]
      },
      "b": {
        "who": "B · 마이클",
        "ko": [
          "네, 한국 음식이 정말 맛있[[어요]].",
          "비빔밥을 아주 좋아[[해요]]."
        ],
        "en": [
          "Yes, Korean food [[is]] really delicious.",
          "I [[like]] bibimbap very much."
        ]
      },
      "morph": [
        "맛있 + 어요 (ㅓ 모음)",
        "좋아하 + 여요 → 좋아해요 (하다)"
      ]
    },
    {
      "label": "예문 ② · 매일 하는 일과",
      "scene": "/course/sample/scenes/ex-5-2.svg",
      "ask": {
        "q": "요즘 무엇을 공부[[해요]]?",
        "en": "What do you study these days?"
      },
      "pic": [
        {
          "e": "🗣️",
          "c": "-아/어요",
          "t": "accent"
        }
      ],
      "a": {
        "who": "A · 유진",
        "ko": [
          "사라 씨, 요즘 매일 무엇을 [[해요]]?"
        ],
        "en": [
          "Sara, what do you do every day these days?"
        ]
      },
      "b": {
        "who": "B · 사라",
        "ko": [
          "매일 한국어를 공부[[해요]].",
          "한국어 수업이 참 재미있[[어요]]."
        ],
        "en": [
          "I [[study]] Korean every day.",
          "Korean class [[is]] very fun."
        ]
      },
      "morph": [
        "공부하 + 여요 → 공부해요 (하다)",
        "재미있 + 어요 (ㅣ 모음)"
      ]
    }
  ],
  "review": [
    {
      "ko": "가요.",
      "base": "가다",
      "b": false,
      "f": "-아/어요"
    },
    {
      "ko": "봐요.",
      "base": "보다",
      "b": false,
      "f": "-아/어요"
    },
    {
      "ko": "좋아요.",
      "base": "좋다",
      "b": false,
      "f": "-아/어요"
    },
    {
      "ko": "살아요.",
      "base": "살다",
      "b": false,
      "f": "-아/어요"
    },
    {
      "ko": "맛있어요.",
      "base": "맛있다",
      "b": false,
      "f": "-아/어요"
    },
    {
      "ko": "먹어요.",
      "base": "먹다",
      "b": false,
      "f": "-아/어요"
    },
    {
      "ko": "공부해요.",
      "base": "공부하다",
      "b": false,
      "f": "-아/어요"
    },
    {
      "ko": "운동해요.",
      "base": "운동하다",
      "b": false,
      "f": "-아/어요"
    },
    {
      "ko": "한국 음식이 맛있어요.",
      "note": "-아/어요 대표 예문"
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
        "k": "ㅏ, ㅗ 모음",
        "f": "+ -아요",
        "ex": [
          [
            "가다",
            "가요"
          ],
          [
            "보다",
            "봐요"
          ],
          [
            "좋다",
            "좋아요"
          ],
          [
            "살다",
            "살아요"
          ]
        ]
      },
      {
        "k": "그 외 모음 / 하다",
        "f": "+ -어요 / 해요",
        "c": "g2",
        "ex": [
          [
            "맛있다",
            "맛있어요"
          ],
          [
            "먹다",
            "먹어요"
          ],
          [
            "공부하다",
            "공부해요"
          ],
          [
            "운동하다",
            "운동해요"
          ]
        ]
      }
    ]
  },
  "tips": [
    {
      "c": "",
      "h": "💡 TIP ① · -아/어요 결합 규칙",
      "p": "<b>ㅏ, ㅗ 모음</b>일 때는 <span class=\"g\">+ -아요</span>, <b>그 외 모음 / 하다</b>일 때는 <span class=\"g2\">+ -어요 / 해요</span> 형태를 씁니다.<br><br><span class=\"yes\">O</span> 가요 / 맛있어요"
    },
    {
      "c": "navy",
      "h": "💡 TIP ② · 핵심 의미와 쓰임",
      "p": "동사나 형용사 어간 뒤에 붙어 현재의 동작이나 상태를 친근하고 정중하게 나타냅니다.<br><br>· 한국 음식이 맛있어요.<br>· 매일 한국어를 공부해요."
    },
    {
      "c": "teal",
      "h": "💡 TIP ③ · 실전 대화 팁",
      "p": "질문 <b>\"한국 음식이 어때요? 요즘 무엇을 공부해요?\"</b>에 대해 <b>동사/형용사 + -아/어요.</b> 패턴으로 자연스럽게 답해 보세요."
    }
  ],
  "tipsEn": [
    {
      "c": "",
      "h": "💡 TIP ① · -아/어요 Conjugation Rule",
      "p": "Use <span class=\"g\">+ -아요</span> for <b>ㅏ, ㅗ 모음</b> and <span class=\"g2\">+ -어요 / 해요</span> for <b>그 외 모음 / 하다</b>.<br><br><span class=\"yes\">O</span> 가요 / 맛있어요"
    },
    {
      "c": "navy",
      "h": "💡 TIP ② · Core Meaning & Usage",
      "p": "Informal polite present tense ending attached to verb or adjective stems.<br><br>· Korean food is delicious.<br>· I study Korean every day."
    },
    {
      "c": "teal",
      "h": "💡 TIP ③ · Conversation Practice",
      "p": "Practice answering <b>\"How is Korean food? What do you study these days?\"</b> using the pattern <b>동사/형용사 + -아/어요.</b>."
    }
  ],
  "words": [
    {
      "b": "가다",
      "r": "가요",
      "t": "ㅏ, ㅗ 모음"
    },
    {
      "b": "보다",
      "r": "봐요",
      "t": "ㅏ, ㅗ 모음"
    },
    {
      "b": "좋다",
      "r": "좋아요",
      "t": "ㅏ, ㅗ 모음"
    },
    {
      "b": "살다",
      "r": "살아요",
      "t": "ㅏ, ㅗ 모음"
    },
    {
      "b": "맛있다",
      "r": "맛있어요",
      "t": "그 외 모음 / 하다"
    },
    {
      "b": "먹다",
      "r": "먹어요",
      "t": "그 외 모음 / 하다"
    },
    {
      "b": "공부하다",
      "r": "공부해요",
      "t": "그 외 모음 / 하다"
    },
    {
      "b": "운동하다",
      "r": "운동해요",
      "t": "그 외 모음 / 하다"
    }
  ],
  "bingo": [
    [
      "가다",
      "가요"
    ],
    [
      "보다",
      "봐요"
    ],
    [
      "좋다",
      "좋아요"
    ],
    [
      "살다",
      "살아요"
    ],
    [
      "맛있다",
      "맛있어요"
    ],
    [
      "먹다",
      "먹어요"
    ],
    [
      "공부하다",
      "공부해요"
    ],
    [
      "운동하다",
      "운동해요"
    ],
    [
      "한국 음식",
      "한국 음식이 맛있어요."
    ],
    [
      "매일",
      "매일 한국어를 공부해요."
    ],
    [
      "날씨",
      "오늘 날씨가 좋아요."
    ],
    [
      "점심",
      "점심을 맛있게 먹어요."
    ]
  ],
  "relays": [
    [
      {
        "t": "마이클 씨, 한국 음식이 입에 맞아요?"
      },
      {
        "base": "가다",
        "ans": "가요."
      },
      {
        "base": "맛있다",
        "ans": "맛있어요."
      }
    ],
    [
      {
        "t": "한국 음식이 어때요? 요즘 무엇을 공부해요?"
      },
      {
        "base": "한국 음식 · 맛있다",
        "ans": "한국 음식이 맛있어요."
      },
      {
        "base": "매일 · 공부하다",
        "ans": "매일 한국어를 공부해요."
      }
    ]
  ],
  "make": [
    {
      "k": [
        "한국 음식",
        "맛있다"
      ],
      "a": "한국 음식이 맛있어요.",
      "e": "Korean food is delicious."
    },
    {
      "k": [
        "매일",
        "공부하다"
      ],
      "a": "매일 한국어를 공부해요.",
      "e": "I study Korean every day."
    },
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
        "점심",
        "먹다"
      ],
      "a": "점심을 맛있게 먹어요.",
      "e": "I eat lunch deliciously."
    }
  ],
  "vocab": [
    {
      "tag": "-아/어요",
      "icon": "📖",
      "q": "한국 음식이 어때요? 요즘 무엇을 공부해요?",
      "qen": "How is Korean food? What do you study these days?",
      "pat": "동사/형용사 + -아/어요.",
      "items": [
        {
          "e": "🚶",
          "w": "가다",
          "g": "to go",
          "r": "가요",
          "b": false
        },
        {
          "e": "👀",
          "w": "보다",
          "g": "to watch / see",
          "r": "봐요",
          "b": false
        },
        {
          "e": "👍",
          "w": "좋다",
          "g": "to be good",
          "r": "좋아요",
          "b": false
        },
        {
          "e": "🏠",
          "w": "살다",
          "g": "to live",
          "r": "살아요",
          "b": false
        },
        {
          "e": "😋",
          "w": "맛있다",
          "g": "to be delicious",
          "r": "맛있어요",
          "b": false
        },
        {
          "e": "🍽️",
          "w": "먹다",
          "g": "to eat",
          "r": "먹어요",
          "b": false
        }
      ]
    }
  ],
  "sit": [
    {
      "i": "👋",
      "t": "오늘의 하루 일과",
      "v": "오늘의 하루 일과",
      "q": "오늘 무엇을 [[해요]]? 아침에 무엇을 [[먹어요]]?",
      "qen": "What do you do today? What do you eat in the morning?",
      "m": [
        "아침에 빵을 [[먹어요]].",
        "학교에서 한국어를 [[공부해요]]."
      ],
      "memo": "1. Free talking — 활동판 없이 선생님과 묻고 답한다<br>2. 「보통 뭐 해요?」 → 학생이 자기 하루를 두 문장으로<br>3. 교사가 「주말에는요?」로 때를 바꿔 한 번 더<br>4. 역할 바꾸기"
    },
    {
      "i": "💬",
      "t": "주말에 하는 일",
      "v": "주말에 하는 일",
      "q": "주말에 보통 무엇을 [[해요]]?",
      "qen": "What do you usually do on weekends?",
      "m": [
        "주말에 영화를 [[봐요]].",
        "공원에서 운동[[해요]]."
      ],
      "memo": "1. Free talking — 활동판 없이 선생님과 묻고 답한다<br>2. 「한국 음식이 어때요?」 → 맛 형용사(맛있다 · 맵다 · 달다)로 대답<br>3. 다른 것으로 바꿔 묻기 — 한국어 공부 · 날씨 · 학교<br>4. 역할 바꾸기"
    },
    {
      "i": "🎯",
      "t": "안부와 기분",
      "v": "안부와 기분",
      "q": "오늘 날씨가 [[어때요]]? 기분이 [[어때요]]?",
      "qen": "How is the weather today? How do you feel?",
      "m": [
        "오늘 날씨가 참 [[좋아요]].",
        "기분이 아주 [[좋아요]]."
      ],
      "memo": "1. Free talking — 활동판 없이 선생님과 묻고 답한다<br>2. 「보통 뭐 해요?」 → 학생이 자기 하루를 두 문장으로<br>3. 교사가 「주말에는요?」로 때를 바꿔 한 번 더<br>4. 역할 바꾸기"
    }
  ],
  "wrap": {
    "ex": [
      {
        "ko": [
          "한국 음식이 맛있[[어요]]."
        ],
        "en": [
          "Korean food [[is delicious]]."
        ]
      },
      {
        "ko": [
          "매일 한국어를 공부[[해요]]."
        ],
        "en": [
          "I [[study]] Korean every day."
        ]
      }
    ],
    "tips": [
      "<b>ㅏ, ㅗ 모음</b> → <span class=\"g\">+ -아요</span> / <b>그 외 모음 / 하다</b> → <span class=\"g2\">+ -어요 / 해요</span>",
      "동사나 형용사 어간 뒤에 붙어 현재의 동작이나 상태를 친근하고 정중하게 나타냅니다.",
      "대표 대화: \"한국 음식이 어때요? 요즘 무엇을 공부해요?\" → \"한국 음식이 맛있어요.\""
    ]
  }
});
