/* Lesson 9: 에서 (장소) · 100% Authentic Situation-Matched Data */
LESSONS.push({
  "key": "에서 (장소)",
  "pos": "장소",
  "form": "에서",
  "gpic": [
    {
      "e": "📖",
      "c": "에서 (장소)",
      "t": "navy"
    },
    {
      "sign": "="
    },
    {
      "e": "✨",
      "c": "장소",
      "t": "accent"
    }
  ],
  "mean": {
    "ko": "장소 명사 뒤에 붙어 구체적인 동작이나 활동이 이루어지는 공간을 나타냅니다.",
    "en": "Attached to a place noun to indicate where an action or activity takes place."
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
    "q": "어디[[에서]] 한국어를 공부해요? 어디[[에서]] 운동해요?",
    "en": "Where do you study Korean? Where do you exercise?"
  },
  "en": "Location of Action · \"~에서\" · 행동하는 장소를 말해요",
  "prior": [],
  "pat": "장소 + 에서 + 동작동사",
  "hero": {
    "pic": [
      {
        "e": "🧑",
        "c": "에서 (장소)",
        "t": "navy"
      },
      {
        "e": "💬",
        "c": "장소",
        "t": "accent"
      }
    ],
    "ko": [
      "도서관[[에서]] 한국어를 공부해요.",
      "공원[[에서]] 친구와 운동해요."
    ],
    "en": [
      "I study Korean [[at]] the library.",
      "I exercise with my friend [[at]] the park."
    ]
  },
  "ex": [
    {
      "label": "예문 ① · 공부하는 장소",
      "scene": "/course/sample/scenes/ex-9-1.svg",
      "ask": {
        "q": "어디[[에서]] 한국어를 공부해요?",
        "en": "Where do you study Korean?"
      },
      "pic": [
        {
          "e": "🙋",
          "c": "에서 (장소)",
          "t": "navy"
        }
      ],
      "a": {
        "who": "A · 선생님",
        "ko": [
          "여러분, 보통 어디[[에서]] 한국어를 공부해요?"
        ],
        "en": [
          "Everyone, where do you usually study Korean?"
        ]
      },
      "b": {
        "who": "B · 학생",
        "ko": [
          "저는 조용한 도서관[[에서]] 공부해요.",
          "가끔 카페[[에서]] 숙제를 해요."
        ],
        "en": [
          "I study [[at]] a quiet library.",
          "Sometimes I do homework [[at]] a cafe."
        ]
      },
      "morph": [
        "도서관 + 에서 공부해요",
        "카페 + 에서 숙제를 해요"
      ]
    },
    {
      "label": "예문 ② · 주말 활동 장소",
      "scene": "/course/sample/scenes/ex-9-2.svg",
      "ask": {
        "q": "주말에 어디[[에서]] 운동해요?",
        "en": "Where do you exercise on the weekend?"
      },
      "pic": [
        {
          "e": "🗣️",
          "c": "에서 (장소)",
          "t": "accent"
        }
      ],
      "a": {
        "who": "A · 마이클",
        "ko": [
          "하준 씨, 주말에 어디[[에서]] 운동해요?"
        ],
        "en": [
          "Hajun, where do you exercise on weekends?"
        ]
      },
      "b": {
        "who": "B · 하준",
        "ko": [
          "집 앞 공원[[에서]] 농구를 해요.",
          "그리고 식당[[에서]] 점심을 먹어요."
        ],
        "en": [
          "I play basketball [[at]] the park in front of my house.",
          "And I eat lunch [[at]] a restaurant."
        ]
      },
      "morph": [
        "공원 + 에서 운동해요",
        "식당 + 에서 먹어요"
      ]
    }
  ],
  "review": [
    {
      "ko": "도서관에서 공부해요.",
      "base": "도서관",
      "b": true,
      "f": "에서 (장소)"
    },
    {
      "ko": "카페에서 마셔요.",
      "base": "카페",
      "b": false,
      "f": "에서 (장소)"
    },
    {
      "ko": "식당에서 먹어요.",
      "base": "식당",
      "b": true,
      "f": "에서 (장소)"
    },
    {
      "ko": "집에서 쉬어요.",
      "base": "집",
      "b": true,
      "f": "에서 (장소)"
    },
    {
      "ko": "공원에서 운동해요.",
      "base": "공원",
      "b": true,
      "f": "에서 (장소)"
    },
    {
      "ko": "운동장에서 축구해요.",
      "base": "운동장",
      "b": true,
      "f": "에서 (장소)"
    },
    {
      "ko": "백화점에서 쇼핑해요.",
      "base": "백화점",
      "b": true,
      "f": "에서 (장소)"
    },
    {
      "ko": "학교에서 배워요.",
      "base": "학교",
      "b": false,
      "f": "에서 (장소)"
    },
    {
      "ko": "도서관에서 한국어를 공부해요.",
      "note": "에서 (장소) 대표 예문"
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
        "k": "실내 활동",
        "f": "장소 + 에서",
        "ex": [
          [
            "도서관",
            "도서관에서 공부해요"
          ],
          [
            "카페",
            "카페에서 마셔요"
          ],
          [
            "식당",
            "식당에서 먹어요"
          ],
          [
            "집",
            "집에서 쉬어요"
          ]
        ]
      },
      {
        "k": "야외·기타 활동",
        "f": "장소 + 에서",
        "c": "g2",
        "ex": [
          [
            "공원",
            "공원에서 운동해요"
          ],
          [
            "운동장",
            "운동장에서 축구해요"
          ],
          [
            "백화점",
            "백화점에서 쇼핑해요"
          ],
          [
            "학교",
            "학교에서 배워요"
          ]
        ]
      }
    ]
  },
  "tips": [
    {
      "c": "",
      "h": "💡 TIP ① · 에서 (장소) 결합 규칙",
      "p": "<b>실내 활동</b>일 때는 <span class=\"g\">장소 + 에서</span>, <b>야외·기타 활동</b>일 때는 <span class=\"g2\">장소 + 에서</span> 형태를 씁니다.<br><br><span class=\"yes\">O</span> 도서관에서 공부해요 / 공원에서 운동해요"
    },
    {
      "c": "navy",
      "h": "💡 TIP ② · 핵심 의미와 쓰임",
      "p": "장소 명사 뒤에 붙어 구체적인 동작이나 활동이 이루어지는 공간을 나타냅니다.<br><br>· 도서관에서 한국어를 공부해요.<br>· 공원에서 친구와 운동해요."
    },
    {
      "c": "teal",
      "h": "💡 TIP ③ · 실전 대화 팁",
      "p": "질문 <b>\"어디에서 한국어를 공부해요? 어디에서 운동해요?\"</b>에 대해 <b>장소 + 에서 + 동작동사</b> 패턴으로 자연스럽게 답해 보세요."
    }
  ],
  "tipsEn": [
    {
      "c": "",
      "h": "💡 TIP ① · 에서 (장소) Conjugation Rule",
      "p": "Use <span class=\"g\">장소 + 에서</span> for <b>실내 활동</b> and <span class=\"g2\">장소 + 에서</span> for <b>야외·기타 활동</b>.<br><br><span class=\"yes\">O</span> 도서관에서 공부해요 / 공원에서 운동해요"
    },
    {
      "c": "navy",
      "h": "💡 TIP ② · Core Meaning & Usage",
      "p": "Attached to a place noun to indicate where an action or activity takes place.<br><br>· I study Korean at the library.<br>· I exercise with my friend at the park."
    },
    {
      "c": "teal",
      "h": "💡 TIP ③ · Conversation Practice",
      "p": "Practice answering <b>\"Where do you study Korean? Where do you exercise?\"</b> using the pattern <b>장소 + 에서 + 동작동사</b>."
    }
  ],
  "words": [
    {
      "b": "도서관",
      "r": "도서관에서 공부해요",
      "t": "실내 활동"
    },
    {
      "b": "카페",
      "r": "카페에서 마셔요",
      "t": "실내 활동"
    },
    {
      "b": "식당",
      "r": "식당에서 먹어요",
      "t": "실내 활동"
    },
    {
      "b": "집",
      "r": "집에서 쉬어요",
      "t": "실내 활동"
    },
    {
      "b": "공원",
      "r": "공원에서 운동해요",
      "t": "야외·기타 활동"
    },
    {
      "b": "운동장",
      "r": "운동장에서 축구해요",
      "t": "야외·기타 활동"
    },
    {
      "b": "백화점",
      "r": "백화점에서 쇼핑해요",
      "t": "야외·기타 활동"
    },
    {
      "b": "학교",
      "r": "학교에서 배워요",
      "t": "야외·기타 활동"
    }
  ],
  "bingo": [
    [
      "도서관",
      "도서관에서 공부해요"
    ],
    [
      "카페",
      "카페에서 마셔요"
    ],
    [
      "식당",
      "식당에서 먹어요"
    ],
    [
      "집",
      "집에서 쉬어요"
    ],
    [
      "공원",
      "공원에서 운동해요"
    ],
    [
      "운동장",
      "운동장에서 축구해요"
    ],
    [
      "백화점",
      "백화점에서 쇼핑해요"
    ],
    [
      "학교",
      "학교에서 배워요"
    ],
    [
      "도서관",
      "도서관에서 한국어를 공부해요."
    ],
    [
      "공원",
      "공원에서 아침에 운동해요."
    ],
    [
      "카페",
      "카페에서 커피를 마셔요."
    ],
    [
      "식당",
      "식당에서 점심을 먹어요."
    ]
  ],
  "relays": [
    [
      {
        "t": "여러분, 보통 어디에서 한국어를 공부해요?"
      },
      {
        "base": "도서관",
        "ans": "도서관에서 공부해요."
      },
      {
        "base": "공원",
        "ans": "공원에서 운동해요."
      }
    ],
    [
      {
        "t": "어디에서 한국어를 공부해요? 어디에서 운동해요?"
      },
      {
        "base": "도서관 · 공부하다",
        "ans": "도서관에서 한국어를 공부해요."
      },
      {
        "base": "공원 · 운동하다",
        "ans": "공원에서 아침에 운동해요."
      }
    ]
  ],
  "make": [
    {
      "k": [
        "도서관",
        "공부하다"
      ],
      "a": "도서관에서 한국어를 공부해요.",
      "e": "I study Korean at the library."
    },
    {
      "k": [
        "공원",
        "운동하다"
      ],
      "a": "공원에서 아침에 운동해요.",
      "e": "I exercise at the park in the morning."
    },
    {
      "k": [
        "카페",
        "마시다"
      ],
      "a": "카페에서 커피를 마셔요.",
      "e": "I drink coffee at a cafe."
    },
    {
      "k": [
        "식당",
        "먹다"
      ],
      "a": "식당에서 점심을 먹어요.",
      "e": "I eat lunch at a restaurant."
    }
  ],
  "vocab": [
    {
      "tag": "에서 (장소)",
      "icon": "📖",
      "q": "어디에서 한국어를 공부해요? 어디에서 운동해요?",
      "qen": "Where do you study Korean? Where do you exercise?",
      "pat": "장소 + 에서 + 동작동사",
      "items": [
        {
          "e": "📚",
          "w": "도서관",
          "g": "library",
          "r": "도서관에서 공부해요",
          "b": true
        },
        {
          "e": "☕",
          "w": "카페",
          "g": "cafe",
          "r": "카페에서 마셔요",
          "b": false
        },
        {
          "e": "🍴",
          "w": "식당",
          "g": "restaurant",
          "r": "식당에서 먹어요",
          "b": true
        },
        {
          "e": "🏠",
          "w": "집",
          "g": "home",
          "r": "집에서 쉬어요",
          "b": true
        },
        {
          "e": "🌳",
          "w": "공원",
          "g": "park",
          "r": "공원에서 운동해요",
          "b": true
        },
        {
          "e": "⚽",
          "w": "운동장",
          "g": "playground",
          "r": "운동장에서 축구해요",
          "b": true
        }
      ]
    }
  ],
  "sit": [
    {
      "i": "👋",
      "t": "공부하는 곳",
      "v": "공부하는 곳",
      "q": "보통 어디[[에서]] 한국어를 공부해요?",
      "qen": "Where do you usually study Korean?",
      "m": [
        "도서관[[에서]] 한국어를 공부해요.",
        "집[[에서]] 책을 읽어요."
      ],
      "memo": "1. Free talking — 활동판 없이 선생님과 묻고 답한다<br>2. 「어디에서 밥을 먹어요?」 → 「○○에서 먹어요」<br>3. 공부 · 운동 · 쉬기로 바꿔 묻기<br>4. 역할 바꾸기"
    },
    {
      "i": "💬",
      "t": "식사와 여가",
      "v": "식사와 여가",
      "q": "점심을 어디[[에서]] 먹어요? 어디[[에서]] 쉬어요?",
      "qen": "Where do you eat lunch? Where do you rest?",
      "m": [
        "학교 식당[[에서]] 밥을 먹어요.",
        "카페[[에서]] 커피를 마셔요."
      ],
      "memo": "1. 장 그림으로 「주말에 공원에서 운동해요?」 대답을 함께 읽기<br>2. 다음 장 활동판으로 — 교사가 장소 하나 + 활동 하나를 묶어 묻는다(「공원에서 운동해요? · 집에서 운동해요?」)<br>3. 학생은 네 · 아니요 + 「저는 ○○에서 △△아요/어요」, 역할 바꾸기"
    },
    {
      "i": "🎯",
      "t": "에 vs 에서 구분",
      "v": "에 vs 에서 구분",
      "q": "어디[[에]] 가요? 거기[[에서]] 무엇을 해요?",
      "qen": "Where are you going? What do you do there?",
      "m": [
        "공원[[에]] 가요.",
        "공원[[에서]] 친구와 운동해요."
      ],
      "memo": "1. Free talking — 활동판 없이 선생님과 묻고 답한다<br>2. 「어디에서 밥을 먹어요?」 → 「○○에서 먹어요」<br>3. 공부 · 운동 · 쉬기로 바꿔 묻기<br>4. 역할 바꾸기"
    }
  ],
  "wrap": {
    "ex": [
      {
        "ko": [
          "도서관[[에서]] 한국어를 공부해요."
        ],
        "en": [
          "I study Korean [[at]] the library."
        ]
      },
      {
        "ko": [
          "공원[[에서]] 친구와 운동해요."
        ],
        "en": [
          "I exercise with my friend [[at]] the park."
        ]
      }
    ],
    "tips": [
      "<b>실내 활동</b> → <span class=\"g\">장소 + 에서</span> / <b>야외·기타 활동</b> → <span class=\"g2\">장소 + 에서</span>",
      "장소 명사 뒤에 붙어 구체적인 동작이나 활동이 이루어지는 공간을 나타냅니다.",
      "대표 대화: \"어디에서 한국어를 공부해요? 어디에서 운동해요?\" → \"도서관에서 한국어를 공부해요.\""
    ]
  }
});
