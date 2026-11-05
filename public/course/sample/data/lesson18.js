/* Lesson 18: (이)나 · 100% Authentic Situation-Matched Data */
LESSONS.push({
  "key": "(이)나",
  "pos": "명사",
  "form": "나",
  "gpic": [
    {
      "e": "📖",
      "c": "(이)나",
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
    "ko": "두 개 이상의 명사 가운데 어느 하나를 선택함('~또는, ~혹은')을 나타냅니다.",
    "en": "Attached to a noun to express choice between options ('or')."
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
    "q": "카페에서 무엇을 마셔요? 주말 언제 만나요?",
    "en": "What do you drink at the cafe? When do we meet on the weekend?"
  },
  "en": "Choice Marker · \"~(이)나\" · 둘 중 하나를 선택해요",
  "prior": [],
  "pat": "명사1 + (이)나 + 명사2",
  "hero": {
    "pic": [
      {
        "e": "🧑",
        "c": "(이)나",
        "t": "navy"
      },
      {
        "e": "💬",
        "c": "명사",
        "t": "accent"
      }
    ],
    "ko": [
      "커피[[나]] 주스를 마셔요.",
      "토요일[[이나]] 일요일에 만나요."
    ],
    "en": [
      "I drink coffee [[or]] juice.",
      "Let's meet on Saturday [[or]] Sunday."
    ]
  },
  "ex": [
    {
      "label": "예문 ① · 음료 선택하기",
      "scene": "/course/sample/scenes/ex-18-1.svg",
      "ask": {
        "q": "카페에서 무엇[[이나]] 무엇을 마셔요?",
        "en": "What do you drink at the cafe?"
      },
      "pic": [
        {
          "e": "🙋",
          "c": "(이)나",
          "t": "navy"
        }
      ],
      "a": {
        "who": "A · 미나",
        "ko": [
          "유진 씨, 카페에서 무엇을 마실까요?"
        ],
        "en": [
          "Yujin, what shall we drink at the cafe?"
        ]
      },
      "b": {
        "who": "B · 유진",
        "ko": [
          "시원한 커피[[나]] 오렌지 주스를 마셔요.",
          "그리고 빵[[이나]] 케이크를 먹어요."
        ],
        "en": [
          "Let's drink iced coffee [[or]] orange juice.",
          "And let's eat bread [[or]] cake."
        ]
      },
      "morph": [
        "커피 + 나 (받침 X)",
        "빵 + 이나 (받침 O)"
      ]
    },
    {
      "label": "예문 ② · 약속 요일 정하기",
      "scene": "/course/sample/scenes/ex-18-2.svg",
      "ask": {
        "q": "무슨 요일[[이나]] 무슨 요일에 만나요?",
        "en": "On which day or which day do we meet?"
      },
      "pic": [
        {
          "e": "🗣️",
          "c": "(이)나",
          "t": "accent"
        }
      ],
      "a": {
        "who": "A · 하준",
        "ko": [
          "사라 씨, 우리 이번 주에 언제 만날까요?"
        ],
        "en": [
          "Sara, when shall we meet this week?"
        ]
      },
      "b": {
        "who": "B · 사라",
        "ko": [
          "평일에는 바빠요.",
          "토요일[[이나]] 일요일에 공원에서 만나요!"
        ],
        "en": [
          "I'm busy on weekdays.",
          "Let's meet at the park on Saturday [[or]] Sunday!"
        ]
      },
      "morph": [
        "토요일 + 이나 (받침 O)"
      ]
    }
  ],
  "review": [
    {
      "ko": "빵이나 밥.",
      "base": "빵",
      "b": true,
      "f": "(이)나"
    },
    {
      "ko": "책이나 신문.",
      "base": "책",
      "b": true,
      "f": "(이)나"
    },
    {
      "ko": "토요일이나 일요일.",
      "base": "토요일",
      "b": true,
      "f": "(이)나"
    },
    {
      "ko": "지하철이나 버스.",
      "base": "지하철",
      "b": true,
      "f": "(이)나"
    },
    {
      "ko": "커피나 주스.",
      "base": "커피",
      "b": false,
      "f": "(이)나"
    },
    {
      "ko": "영화나 드라마.",
      "base": "영화",
      "b": false,
      "f": "(이)나"
    },
    {
      "ko": "버스나 택시.",
      "base": "버스",
      "b": false,
      "f": "(이)나"
    },
    {
      "ko": "노래나 춤.",
      "base": "노래",
      "b": false,
      "f": "(이)나"
    },
    {
      "ko": "커피나 주스를 마셔요.",
      "note": "(이)나 대표 예문"
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
        "f": "+ 이나",
        "ex": [
          [
            "빵",
            "빵이나 밥"
          ],
          [
            "책",
            "책이나 신문"
          ],
          [
            "토요일",
            "토요일이나 일요일"
          ],
          [
            "지하철",
            "지하철이나 버스"
          ]
        ]
      },
      {
        "k": "받침 X",
        "f": "+ 나",
        "c": "g2",
        "ex": [
          [
            "커피",
            "커피나 주스"
          ],
          [
            "영화",
            "영화나 드라마"
          ],
          [
            "버스",
            "버스나 택시"
          ],
          [
            "노래",
            "노래나 춤"
          ]
        ]
      }
    ]
  },
  "tips": [
    {
      "c": "",
      "h": "💡 TIP ① · (이)나 결합 규칙",
      "p": "<b>받침 O</b>일 때는 <span class=\"g\">+ 이나</span>, <b>받침 X</b>일 때는 <span class=\"g2\">+ 나</span> 형태를 씁니다.<br><br><span class=\"yes\">O</span> 빵이나 밥 / 커피나 주스"
    },
    {
      "c": "navy",
      "h": "💡 TIP ② · 핵심 의미와 쓰임",
      "p": "두 개 이상의 명사 가운데 어느 하나를 선택함('~또는, ~혹은')을 나타냅니다.<br><br>· 커피나 주스를 마셔요.<br>· 토요일이나 일요일에 만나요."
    },
    {
      "c": "teal",
      "h": "💡 TIP ③ · 실전 대화 팁",
      "p": "질문 <b>\"카페에서 무엇을 마셔요? 주말 언제 만나요?\"</b>에 대해 <b>명사1 + (이)나 + 명사2</b> 패턴으로 자연스럽게 답해 보세요."
    }
  ],
  "tipsEn": [
    {
      "c": "",
      "h": "💡 TIP ① · (이)나 Conjugation Rule",
      "p": "Use <span class=\"g\">+ 이나</span> for <b>받침 O</b> and <span class=\"g2\">+ 나</span> for <b>받침 X</b>.<br><br><span class=\"yes\">O</span> 빵이나 밥 / 커피나 주스"
    },
    {
      "c": "navy",
      "h": "💡 TIP ② · Core Meaning & Usage",
      "p": "Attached to a noun to express choice between options ('or').<br><br>· I drink coffee or juice.<br>· Let's meet on Saturday or Sunday."
    },
    {
      "c": "teal",
      "h": "💡 TIP ③ · Conversation Practice",
      "p": "Practice answering <b>\"What do you drink at the cafe? When do we meet on the weekend?\"</b> using the pattern <b>명사1 + (이)나 + 명사2</b>."
    }
  ],
  "words": [
    {
      "b": "빵",
      "r": "빵이나 밥",
      "t": "받침 O"
    },
    {
      "b": "책",
      "r": "책이나 신문",
      "t": "받침 O"
    },
    {
      "b": "토요일",
      "r": "토요일이나 일요일",
      "t": "받침 O"
    },
    {
      "b": "지하철",
      "r": "지하철이나 버스",
      "t": "받침 O"
    },
    {
      "b": "커피",
      "r": "커피나 주스",
      "t": "받침 X"
    },
    {
      "b": "영화",
      "r": "영화나 드라마",
      "t": "받침 X"
    },
    {
      "b": "버스",
      "r": "버스나 택시",
      "t": "받침 X"
    },
    {
      "b": "노래",
      "r": "노래나 춤",
      "t": "받침 X"
    }
  ],
  "bingo": [
    [
      "빵",
      "빵이나 밥"
    ],
    [
      "책",
      "책이나 신문"
    ],
    [
      "토요일",
      "토요일이나 일요일"
    ],
    [
      "지하철",
      "지하철이나 버스"
    ],
    [
      "커피",
      "커피나 주스"
    ],
    [
      "영화",
      "영화나 드라마"
    ],
    [
      "버스",
      "버스나 택시"
    ],
    [
      "노래",
      "노래나 춤"
    ],
    [
      "커피",
      "커피나 주스를 마셔요."
    ],
    [
      "토요일",
      "토요일이나 일요일에 만나요."
    ],
    [
      "지하철",
      "지하철이나 버스로 학교에 가요."
    ],
    [
      "빵",
      "아침에 빵이나 김밥을 먹어요."
    ]
  ],
  "relays": [
    [
      {
        "t": "유진 씨, 카페에서 무엇을 마실까요?"
      },
      {
        "base": "빵",
        "ans": "빵이나 밥."
      },
      {
        "base": "커피",
        "ans": "커피나 주스."
      }
    ],
    [
      {
        "t": "카페에서 무엇을 마셔요? 주말 언제 만나요?"
      },
      {
        "base": "커피 · 주스 · 마시다",
        "ans": "커피나 주스를 마셔요."
      },
      {
        "base": "토요일 · 일요일 · 만나다",
        "ans": "토요일이나 일요일에 만나요."
      }
    ]
  ],
  "make": [
    {
      "k": [
        "커피",
        "주스",
        "마시다"
      ],
      "a": "커피나 주스를 마셔요.",
      "e": "I drink coffee or juice."
    },
    {
      "k": [
        "토요일",
        "일요일",
        "만나다"
      ],
      "a": "토요일이나 일요일에 만나요.",
      "e": "We meet on Saturday or Sunday."
    },
    {
      "k": [
        "지하철",
        "버스",
        "타다"
      ],
      "a": "지하철이나 버스로 학교에 가요.",
      "e": "I go to school by subway or bus."
    },
    {
      "k": [
        "빵",
        "김밥",
        "먹다"
      ],
      "a": "아침에 빵이나 김밥을 먹어요.",
      "e": "I eat bread or gimbap in the morning."
    }
  ],
  "vocab": [
    {
      "tag": "(이)나",
      "icon": "📖",
      "q": "카페에서 무엇을 마셔요? 주말 언제 만나요?",
      "qen": "What do you drink at the cafe? When do we meet on the weekend?",
      "pat": "명사1 + (이)나 + 명사2",
      "items": [
        {
          "e": "🥐",
          "w": "빵",
          "g": "bread",
          "r": "빵이나 밥",
          "b": true
        },
        {
          "e": "📕",
          "w": "책",
          "g": "book",
          "r": "책이나 신문",
          "b": true
        },
        {
          "e": "📅",
          "w": "토요일",
          "g": "Saturday",
          "r": "토요일이나 일요일",
          "b": true
        },
        {
          "e": "🚇",
          "w": "지하철",
          "g": "subway",
          "r": "지하철이나 버스",
          "b": true
        },
        {
          "e": "☕",
          "w": "커피",
          "g": "coffee",
          "r": "커피나 주스",
          "b": false
        },
        {
          "e": "🎬",
          "w": "영화",
          "g": "movie",
          "r": "영화나 드라마",
          "b": false
        }
      ]
    }
  ],
  "sit": [
    {
      "i": "👋",
      "t": "아침 식사 메뉴",
      "v": "아침 식사 메뉴",
      "q": "아침에 보통 무엇[[이나]] 무엇을 먹어요?",
      "qen": "What or what do you usually eat in the morning?",
      "m": [
        "아침에 빵[[이나]] 과일을 먹어요.",
        "우유[[나]] 주스를 마셔요."
      ],
      "memo": "1. 교사 「뭐 마셔요?」 → 학생이 둘을 골라 「○○(이)나 □□을/를 마셔요」<br>2. 「그럼 뭐 먹어요?」로 음식까지<br>3. 역할 바꾸기"
    },
    {
      "i": "💬",
      "t": "주말 여가 선택",
      "v": "주말 여가 선택",
      "q": "시간이 있을 때 무엇[[이나]] 무엇을 해요?",
      "qen": "When you have free time, what or what do you do?",
      "m": [
        "집에서 영화[[나]] 드라마를 봐요.",
        "토요일[[이나]] 일요일에 운동해요."
      ],
      "memo": "1. 「우리 언제 만나요?」를 함께 읽기<br>2. 다음 장 활동판에서 진짜 다음 수업 날을 정한다 — 「우리 언제 공부해요? 월요일이나 수요일 어때요?」<br>3. 안 되는 칸은 ✕, 정해진 칸은 한 번 더 눌러 「수업」 표시"
    }
  ],
  "wrap": {
    "ex": [
      {
        "ko": [
          "커피[[나]] 주스를 마셔요."
        ],
        "en": [
          "I drink coffee [[or]] juice."
        ]
      },
      {
        "ko": [
          "토요일[[이나]] 일요일에 만나요."
        ],
        "en": [
          "Let's meet on Saturday [[or]] Sunday."
        ]
      }
    ],
    "tips": [
      "<b>받침 O</b> → <span class=\"g\">+ 이나</span> / <b>받침 X</b> → <span class=\"g2\">+ 나</span>",
      "두 개 이상의 명사 가운데 어느 하나를 선택함('~또는, ~혹은')을 나타냅니다.",
      "대표 대화: \"카페에서 무엇을 마셔요? 주말 언제 만나요?\" → \"커피나 주스를 마셔요.\""
    ]
  }
});
