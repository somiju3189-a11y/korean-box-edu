/* Lesson 10: 에 (시간) · 100% Authentic Situation-Matched Data */
LESSONS.push({
  "key": "에 (시간)",
  "pos": "시간",
  "form": "에",
  "gpic": [
    {
      "e": "📖",
      "c": "에 (시간)",
      "t": "navy"
    },
    {
      "sign": "="
    },
    {
      "e": "✨",
      "c": "시간",
      "t": "accent"
    }
  ],
  "mean": {
    "ko": "시각, 요일, 날짜 뒤에 붙어 동작이 일어나는 때를 나타냅니다. (오늘·내일·어제·지금 뒤에는 쓰지 않습니다)",
    "en": "Attached to time nouns to indicate when an action happens (not used with today/tomorrow/yesterday/now)."
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
    "q": "아침 몇 시[[에]] 일어나요? 토요일 몇 시[[에]] 만나요?",
    "en": "What time do you wake up in the morning? What time do we meet on Saturday?"
  },
  "en": "Time Marker · \"~에\" · 동작이 일어나는 시간을 말해요",
  "prior": [],
  "pat": "시간/요일 + 에",
  "hero": {
    "pic": [
      {
        "e": "🧑",
        "c": "에 (시간)",
        "t": "navy"
      },
      {
        "e": "💬",
        "c": "시간",
        "t": "accent"
      }
    ],
    "ko": [
      "아침 7시[[에]] 일어나요.",
      "토요일 오후 4시[[에]] 만나요."
    ],
    "en": [
      "I wake up [[at]] 7 AM.",
      "Let's meet [[at]] 4 PM on Saturday."
    ]
  },
  "ex": [
    {
      "label": "예문 ① · 하루 일과 시간",
      "scene": "/course/sample/scenes/ex-10-1.svg",
      "ask": {
        "q": "보통 아침 몇 시[[에]] 일어나요?",
        "en": "What time do you usually wake up in the morning?"
      },
      "pic": [
        {
          "e": "🙋",
          "c": "에 (시간)",
          "t": "navy"
        }
      ],
      "a": {
        "who": "A · 미나",
        "ko": [
          "하준 씨, 매일 아침 몇 시[[에]] 일어나요?"
        ],
        "en": [
          "Hajun, what time do you wake up every morning?"
        ]
      },
      "b": {
        "who": "B · 하준",
        "ko": [
          "저는 아침 7시[[에]] 일어나요.",
          "그리고 9시[[에]] 학교에 가요."
        ],
        "en": [
          "I wake up [[at]] 7 AM.",
          "And I go to school [[at]] 9 o'clock."
        ]
      },
      "morph": [
        "7시 + 에 일어나요",
        "9시 + 에 가요"
      ]
    },
    {
      "label": "예문 ② · 주말 약속 정하기",
      "scene": "/course/sample/scenes/ex-10-2.svg",
      "ask": {
        "q": "토요일 몇 시[[에]] 만날까요?",
        "en": "What time shall we meet on Saturday?"
      },
      "pic": [
        {
          "e": "🗣️",
          "c": "에 (시간)",
          "t": "accent"
        }
      ],
      "a": {
        "who": "A · 유진",
        "ko": [
          "사라 씨, 우리 이번 주말[[에]] 언제 만나요?"
        ],
        "en": [
          "Sara, when do we meet this weekend?"
        ]
      },
      "b": {
        "who": "B · 사라",
        "ko": [
          "토요일 오후 4시[[에]] 만나요.",
          "오늘 저녁에는 집에서 쉬어요."
        ],
        "en": [
          "Let's meet [[at]] 4 PM on Saturday.",
          "This evening (오늘), I rest at home."
        ]
      },
      "morph": [
        "토요일 오후 4시 + 에",
        "오늘 (에 X)"
      ]
    }
  ],
  "review": [
    {
      "ko": "7시에 일어나요.",
      "base": "7시",
      "b": false,
      "f": "에 (시간)"
    },
    {
      "ko": "4시에 만나요.",
      "base": "4시",
      "b": false,
      "f": "에 (시간)"
    },
    {
      "ko": "토요일에 가요.",
      "base": "토요일",
      "b": true,
      "f": "에 (시간)"
    },
    {
      "ko": "주말에 쉬어요.",
      "base": "주말",
      "b": true,
      "f": "에 (시간)"
    },
    {
      "ko": "오늘 만나요.",
      "base": "오늘",
      "b": true,
      "f": "에 (시간)"
    },
    {
      "ko": "내일 가요.",
      "base": "내일",
      "b": true,
      "f": "에 (시간)"
    },
    {
      "ko": "어제 봤어요.",
      "base": "어제",
      "b": false,
      "f": "에 (시간)"
    },
    {
      "ko": "지금 공부해요.",
      "base": "지금",
      "b": true,
      "f": "에 (시간)"
    },
    {
      "ko": "아침 7시에 일어나요.",
      "note": "에 (시간) 대표 예문"
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
        "k": "시각 · 요일",
        "f": "+ 에",
        "ex": [
          [
            "7시",
            "7시에 일어나요"
          ],
          [
            "4시",
            "4시에 만나요"
          ],
          [
            "토요일",
            "토요일에 가요"
          ],
          [
            "주말",
            "주말에 쉬어요"
          ]
        ]
      },
      {
        "k": "'에' 결합 불가",
        "f": "에 X (단독 사용)",
        "c": "g2",
        "ex": [
          [
            "오늘",
            "오늘 만나요"
          ],
          [
            "내일",
            "내일 가요"
          ],
          [
            "어제",
            "어제 봤어요"
          ],
          [
            "지금",
            "지금 공부해요"
          ]
        ]
      }
    ]
  },
  "tips": [
    {
      "c": "",
      "h": "💡 TIP ① · 에 (시간) 결합 규칙",
      "p": "<b>시각 · 요일</b>일 때는 <span class=\"g\">+ 에</span>, <b>'에' 결합 불가</b>일 때는 <span class=\"g2\">에 X (단독 사용)</span> 형태를 씁니다.<br><br><span class=\"yes\">O</span> 7시에 일어나요 / 오늘 만나요"
    },
    {
      "c": "navy",
      "h": "💡 TIP ② · 핵심 의미와 쓰임",
      "p": "시각, 요일, 날짜 뒤에 붙어 동작이 일어나는 때를 나타냅니다. (오늘·내일·어제·지금 뒤에는 쓰지 않습니다)<br><br>· 아침 7시에 일어나요.<br>· 토요일 오후 4시에 만나요."
    },
    {
      "c": "teal",
      "h": "💡 TIP ③ · 실전 대화 팁",
      "p": "질문 <b>\"아침 몇 시에 일어나요? 토요일 몇 시에 만나요?\"</b>에 대해 <b>시간/요일 + 에</b> 패턴으로 자연스럽게 답해 보세요."
    }
  ],
  "tipsEn": [
    {
      "c": "",
      "h": "💡 TIP ① · 에 (시간) Conjugation Rule",
      "p": "Use <span class=\"g\">+ 에</span> for <b>시각 · 요일</b> and <span class=\"g2\">에 X (단독 사용)</span> for <b>'에' 결합 불가</b>.<br><br><span class=\"yes\">O</span> 7시에 일어나요 / 오늘 만나요"
    },
    {
      "c": "navy",
      "h": "💡 TIP ② · Core Meaning & Usage",
      "p": "Attached to time nouns to indicate when an action happens (not used with today/tomorrow/yesterday/now).<br><br>· I wake up at 7 AM.<br>· Let's meet at 4 PM on Saturday."
    },
    {
      "c": "teal",
      "h": "💡 TIP ③ · Conversation Practice",
      "p": "Practice answering <b>\"What time do you wake up in the morning? What time do we meet on Saturday?\"</b> using the pattern <b>시간/요일 + 에</b>."
    }
  ],
  "words": [
    {
      "b": "7시",
      "r": "7시에 일어나요",
      "t": "시각 · 요일"
    },
    {
      "b": "4시",
      "r": "4시에 만나요",
      "t": "시각 · 요일"
    },
    {
      "b": "토요일",
      "r": "토요일에 가요",
      "t": "시각 · 요일"
    },
    {
      "b": "주말",
      "r": "주말에 쉬어요",
      "t": "시각 · 요일"
    },
    {
      "b": "오늘",
      "r": "오늘 만나요",
      "t": "'에' 결합 불가"
    },
    {
      "b": "내일",
      "r": "내일 가요",
      "t": "'에' 결합 불가"
    },
    {
      "b": "어제",
      "r": "어제 봤어요",
      "t": "'에' 결합 불가"
    },
    {
      "b": "지금",
      "r": "지금 공부해요",
      "t": "'에' 결합 불가"
    }
  ],
  "bingo": [
    [
      "7시",
      "7시에 일어나요"
    ],
    [
      "4시",
      "4시에 만나요"
    ],
    [
      "토요일",
      "토요일에 가요"
    ],
    [
      "주말",
      "주말에 쉬어요"
    ],
    [
      "오늘",
      "오늘 만나요"
    ],
    [
      "내일",
      "내일 가요"
    ],
    [
      "어제",
      "어제 봤어요"
    ],
    [
      "지금",
      "지금 공부해요"
    ],
    [
      "7시",
      "아침 7시에 일어나요."
    ],
    [
      "4시",
      "토요일 오후 4시에 만나요."
    ],
    [
      "주말",
      "주말에 집에서 쉬어요."
    ],
    [
      "오늘",
      "오늘 한국어를 공부해요."
    ]
  ],
  "relays": [
    [
      {
        "t": "하준 씨, 매일 아침 몇 시에 일어나요?"
      },
      {
        "base": "7시",
        "ans": "7시에 일어나요."
      },
      {
        "base": "오늘",
        "ans": "오늘 만나요."
      }
    ],
    [
      {
        "t": "아침 몇 시에 일어나요? 토요일 몇 시에 만나요?"
      },
      {
        "base": "7시 · 일어나다",
        "ans": "아침 7시에 일어나요."
      },
      {
        "base": "4시 · 만나다",
        "ans": "토요일 오후 4시에 만나요."
      }
    ]
  ],
  "make": [
    {
      "k": [
        "7시",
        "일어나다"
      ],
      "a": "아침 7시에 일어나요.",
      "e": "I wake up at 7 AM."
    },
    {
      "k": [
        "4시",
        "만나다"
      ],
      "a": "토요일 오후 4시에 만나요.",
      "e": "We meet at 4 PM on Saturday."
    },
    {
      "k": [
        "주말",
        "쉬다"
      ],
      "a": "주말에 집에서 쉬어요.",
      "e": "I rest at home on the weekend."
    },
    {
      "k": [
        "오늘",
        "공부하다"
      ],
      "a": "오늘 한국어를 공부해요.",
      "e": "I study Korean today."
    }
  ],
  "vocab": [
    {
      "tag": "에 (시간)",
      "icon": "📖",
      "q": "아침 몇 시에 일어나요? 토요일 몇 시에 만나요?",
      "qen": "What time do you wake up in the morning? What time do we meet on Saturday?",
      "pat": "시간/요일 + 에",
      "items": [
        {
          "e": "🕖",
          "w": "7시",
          "g": "7 o'clock",
          "r": "7시에 일어나요",
          "b": false
        },
        {
          "e": "🕓",
          "w": "4시",
          "g": "4 o'clock",
          "r": "4시에 만나요",
          "b": false
        },
        {
          "e": "📅",
          "w": "토요일",
          "g": "Saturday",
          "r": "토요일에 가요",
          "b": true
        },
        {
          "e": "🗓️",
          "w": "주말",
          "g": "weekend",
          "r": "주말에 쉬어요",
          "b": true
        },
        {
          "e": "☀️",
          "w": "오늘",
          "g": "today",
          "r": "오늘 만나요",
          "b": true
        },
        {
          "e": "🌅",
          "w": "내일",
          "g": "tomorrow",
          "r": "내일 가요",
          "b": true
        }
      ]
    }
  ],
  "sit": [
    {
      "i": "👋",
      "t": "나의 하루 시각",
      "v": "나의 하루 시각",
      "q": "매일 몇 시[[에]] 일어나요? 몇 시[[에]] 자요?",
      "qen": "What time do you wake up every day? What time do you sleep?",
      "m": [
        "아침 7시[[에]] 일어나요.",
        "밤 11시[[에]] 자요."
      ],
      "memo": "1. 장 그림으로 「몇 시에 일어나요?」를 함께 읽기<br>2. 다음 장 활동판 — 카드의 일마다 서로 「몇 시에 △△아요/어요?」<br>3. 대답한 시각을 카드 아래 칸(선생님 · 학생)에 적고, 다 적으면 같은지 다른지 견주기"
    },
    {
      "i": "💬",
      "t": "생일과 기념일",
      "v": "생일과 기념일",
      "q": "생일이 몇 월 며칠[[에]] 있어요?",
      "qen": "Which month and day is your birthday?",
      "m": [
        "제 생일은 5월[[에]] 있어요.",
        "토요일[[에]] 파티를 해요."
      ],
      "memo": "1. 학생은 자기 표, 교사는 자기 표만 보고 「토요일 네 시에 만나요?」<br>2. 안 되면 「저는 그때 △△아요/어요」 → 다른 때를 묻는다<br>3. 겹치는 빈칸을 찾으면 「○○요일 □□ 시에 만나요」로 마무리"
    },
    {
      "i": "🎯",
      "t": "오늘과 내일 일정",
      "v": "오늘과 내일 일정",
      "q": "오늘 몇 시[[에]] 수업이 있어요? 내일 뭐 해요?",
      "qen": "What time do you have class today? What do you do tomorrow?",
      "m": [
        "오늘 오전 10시[[에]] 수업이 있어요.",
        "내일 친구를 만나요."
      ],
      "memo": "1. 장 그림으로 「몇 시에 일어나요?」를 함께 읽기<br>2. 다음 장 활동판 — 카드의 일마다 서로 「몇 시에 △△아요/어요?」<br>3. 대답한 시각을 카드 아래 칸(선생님 · 학생)에 적고, 다 적으면 같은지 다른지 견주기"
    }
  ],
  "wrap": {
    "ex": [
      {
        "ko": [
          "아침 7시[[에]] 일어나요."
        ],
        "en": [
          "I wake up [[at]] 7 AM."
        ]
      },
      {
        "ko": [
          "토요일 오후 4시[[에]] 만나요."
        ],
        "en": [
          "Let's meet [[at]] 4 PM on Saturday."
        ]
      }
    ],
    "tips": [
      "<b>시각 · 요일</b> → <span class=\"g\">+ 에</span> / <b>'에' 결합 불가</b> → <span class=\"g2\">에 X (단독 사용)</span>",
      "시각, 요일, 날짜 뒤에 붙어 동작이 일어나는 때를 나타냅니다. (오늘·내일·어제·지금 뒤에는 쓰지 않습니다)",
      "대표 대화: \"아침 몇 시에 일어나요? 토요일 몇 시에 만나요?\" → \"아침 7시에 일어나요.\""
    ]
  }
});
