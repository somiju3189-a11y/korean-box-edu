/* Lesson 8: 에 (장소) · 100% Authentic Situation-Matched Data */
LESSONS.push({
  "key": "에 (장소)",
  "pos": "장소",
  "form": "에",
  "gpic": [
    {
      "e": "📖",
      "c": "에 (장소)",
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
    "ko": "가거나 오는 이동의 목적지, 또는 사람이나 사물이 있는 위치를 나타냅니다.",
    "en": "Attached to a place noun to indicate destination (with go/come) or static location."
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
    "q": "지금 어디[[에]] 가요? 책이 어디[[에]] 있어요?",
    "en": "Where are you going now? Where is the book?"
  },
  "en": "Location & Destination · \"~에\" · 목적지와 위치를 말해요",
  "prior": [],
  "pat": "장소 + 에 가요/와요/있어요.",
  "hero": {
    "pic": [
      {
        "e": "🧑",
        "c": "에 (장소)",
        "t": "navy"
      },
      {
        "e": "💬",
        "c": "장소",
        "t": "accent"
      }
    ],
    "ko": [
      "오늘 학교[[에]] 가요.",
      "책이 책상 위[[에]] 있어요."
    ],
    "en": [
      "I go [[to]] school today.",
      "The book is [[on]] the desk."
    ]
  },
  "ex": [
    {
      "label": "예문 ① · 이동 목적지 묻기",
      "scene": "/course/sample/scenes/ex-8-1.svg",
      "ask": {
        "q": "지금 어디[[에]] 가요?",
        "en": "Where are you going now?"
      },
      "pic": [
        {
          "e": "🙋",
          "c": "에 (장소)",
          "t": "navy"
        }
      ],
      "a": {
        "who": "A · 유진",
        "ko": [
          "마이클 씨, 지금 어디[[에]] 가요?"
        ],
        "en": [
          "Michael, where are you going right now?"
        ]
      },
      "b": {
        "who": "B · 학생",
        "ko": [
          "한국어 수업이 있어서 학교[[에]] 가요.",
          "수업 후에 도서관[[에]] 가요."
        ],
        "en": [
          "I have Korean class, so I'm going [[to]] school.",
          "After class, I go [[to]] the library."
        ]
      },
      "morph": [
        "학교 + 에 가요 (목적지)",
        "도서관 + 에 가요 (목적지)"
      ]
    },
    {
      "label": "예문 ② · 물건의 위치 묻기",
      "scene": "/course/sample/scenes/ex-8-2.svg",
      "ask": {
        "q": "한국어 책이 어디[[에]] 있어요?",
        "en": "Where is the Korean book?"
      },
      "pic": [
        {
          "e": "🗣️",
          "c": "에 (장소)",
          "t": "accent"
        }
      ],
      "a": {
        "who": "A · 하준",
        "ko": [
          "미나 씨, 한국어 책이 어디[[에]] 있어요?"
        ],
        "en": [
          "Mina, where is the Korean book?"
        ]
      },
      "b": {
        "who": "B · 미나",
        "ko": [
          "한국어 책이 책상 위[[에]] 있어요.",
          "연필은 가방 안[[에]] 있어요."
        ],
        "en": [
          "The Korean book is [[on]] the desk.",
          "The pencil is [[in]] the bag."
        ]
      },
      "morph": [
        "책상 위 + 에 있어요 (위치)",
        "가방 안 + 에 있어요 (위치)"
      ]
    }
  ],
  "review": [
    {
      "ko": "학교에 가요.",
      "base": "학교",
      "b": false,
      "f": "에 (장소)"
    },
    {
      "ko": "집에 가요.",
      "base": "집",
      "b": true,
      "f": "에 (장소)"
    },
    {
      "ko": "회사에 가요.",
      "base": "회사",
      "b": false,
      "f": "에 (장소)"
    },
    {
      "ko": "한국에 와요.",
      "base": "한국",
      "b": true,
      "f": "에 (장소)"
    },
    {
      "ko": "교실에 있어요.",
      "base": "교실",
      "b": true,
      "f": "에 (장소)"
    },
    {
      "ko": "책상 위에 있어요.",
      "base": "책상 위",
      "b": false,
      "f": "에 (장소)"
    },
    {
      "ko": "가방 안에 있어요.",
      "base": "가방 안",
      "b": true,
      "f": "에 (장소)"
    },
    {
      "ko": "공원에 있어요.",
      "base": "공원",
      "b": true,
      "f": "에 (장소)"
    },
    {
      "ko": "오늘 학교에 가요.",
      "note": "에 (장소) 대표 예문"
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
        "k": "이동 목적지",
        "f": "장소 + 에 가요",
        "ex": [
          [
            "학교",
            "학교에 가요"
          ],
          [
            "집",
            "집에 가요"
          ],
          [
            "회사",
            "회사에 가요"
          ],
          [
            "한국",
            "한국에 와요"
          ]
        ]
      },
      {
        "k": "존재 위치",
        "f": "장소 + 에 있어요",
        "c": "g2",
        "ex": [
          [
            "교실",
            "교실에 있어요"
          ],
          [
            "책상 위",
            "책상 위에 있어요"
          ],
          [
            "가방 안",
            "가방 안에 있어요"
          ],
          [
            "공원",
            "공원에 있어요"
          ]
        ]
      }
    ]
  },
  "tips": [
    {
      "c": "",
      "h": "💡 TIP ① · 에 (장소) 결합 규칙",
      "p": "<b>이동 목적지</b>일 때는 <span class=\"g\">장소 + 에 가요</span>, <b>존재 위치</b>일 때는 <span class=\"g2\">장소 + 에 있어요</span> 형태를 씁니다.<br><br><span class=\"yes\">O</span> 학교에 가요 / 교실에 있어요"
    },
    {
      "c": "navy",
      "h": "💡 TIP ② · 핵심 의미와 쓰임",
      "p": "가거나 오는 이동의 목적지, 또는 사람이나 사물이 있는 위치를 나타냅니다.<br><br>· 오늘 학교에 가요.<br>· 책이 책상 위에 있어요."
    },
    {
      "c": "teal",
      "h": "💡 TIP ③ · 실전 대화 팁",
      "p": "질문 <b>\"지금 어디에 가요? 책이 어디에 있어요?\"</b>에 대해 <b>장소 + 에 가요/와요/있어요.</b> 패턴으로 자연스럽게 답해 보세요."
    }
  ],
  "tipsEn": [
    {
      "c": "",
      "h": "💡 TIP ① · 에 (장소) Conjugation Rule",
      "p": "Use <span class=\"g\">장소 + 에 가요</span> for <b>이동 목적지</b> and <span class=\"g2\">장소 + 에 있어요</span> for <b>존재 위치</b>.<br><br><span class=\"yes\">O</span> 학교에 가요 / 교실에 있어요"
    },
    {
      "c": "navy",
      "h": "💡 TIP ② · Core Meaning & Usage",
      "p": "Attached to a place noun to indicate destination (with go/come) or static location.<br><br>· I go to school today.<br>· The book is on the desk."
    },
    {
      "c": "teal",
      "h": "💡 TIP ③ · Conversation Practice",
      "p": "Practice answering <b>\"Where are you going now? Where is the book?\"</b> using the pattern <b>장소 + 에 가요/와요/있어요.</b>."
    }
  ],
  "words": [
    {
      "b": "학교",
      "r": "학교에 가요",
      "t": "이동 목적지"
    },
    {
      "b": "집",
      "r": "집에 가요",
      "t": "이동 목적지"
    },
    {
      "b": "회사",
      "r": "회사에 가요",
      "t": "이동 목적지"
    },
    {
      "b": "한국",
      "r": "한국에 와요",
      "t": "이동 목적지"
    },
    {
      "b": "교실",
      "r": "교실에 있어요",
      "t": "존재 위치"
    },
    {
      "b": "책상 위",
      "r": "책상 위에 있어요",
      "t": "존재 위치"
    },
    {
      "b": "가방 안",
      "r": "가방 안에 있어요",
      "t": "존재 위치"
    },
    {
      "b": "공원",
      "r": "공원에 있어요",
      "t": "존재 위치"
    }
  ],
  "bingo": [
    [
      "학교",
      "학교에 가요"
    ],
    [
      "집",
      "집에 가요"
    ],
    [
      "회사",
      "회사에 가요"
    ],
    [
      "한국",
      "한국에 와요"
    ],
    [
      "교실",
      "교실에 있어요"
    ],
    [
      "책상 위",
      "책상 위에 있어요"
    ],
    [
      "가방 안",
      "가방 안에 있어요"
    ],
    [
      "공원",
      "공원에 있어요"
    ],
    [
      "학교",
      "오늘 학교에 가요."
    ],
    [
      "책상 위",
      "책이 책상 위에 있어요."
    ],
    [
      "집",
      "오후에 집에 와요."
    ],
    [
      "교실",
      "친구가 교실에 있어요."
    ]
  ],
  "relays": [
    [
      {
        "t": "마이클 씨, 지금 어디에 가요?"
      },
      {
        "base": "학교",
        "ans": "학교에 가요."
      },
      {
        "base": "교실",
        "ans": "교실에 있어요."
      }
    ],
    [
      {
        "t": "지금 어디에 가요? 책이 어디에 있어요?"
      },
      {
        "base": "학교 · 가다",
        "ans": "오늘 학교에 가요."
      },
      {
        "base": "책상 위 · 있다",
        "ans": "책이 책상 위에 있어요."
      }
    ]
  ],
  "make": [
    {
      "k": [
        "학교",
        "가다"
      ],
      "a": "오늘 학교에 가요.",
      "e": "I go to school today."
    },
    {
      "k": [
        "책상 위",
        "있다"
      ],
      "a": "책이 책상 위에 있어요.",
      "e": "The book is on the desk."
    },
    {
      "k": [
        "집",
        "오다"
      ],
      "a": "오후에 집에 와요.",
      "e": "I come home in the afternoon."
    },
    {
      "k": [
        "교실",
        "있다"
      ],
      "a": "친구가 교실에 있어요.",
      "e": "My friend is in the classroom."
    }
  ],
  "vocab": [
    {
      "tag": "에 (장소)",
      "icon": "📖",
      "q": "지금 어디에 가요? 책이 어디에 있어요?",
      "qen": "Where are you going now? Where is the book?",
      "pat": "장소 + 에 가요/와요/있어요.",
      "items": [
        {
          "e": "🏫",
          "w": "학교",
          "g": "school",
          "r": "학교에 가요",
          "b": false
        },
        {
          "e": "🏠",
          "w": "집",
          "g": "home",
          "r": "집에 가요",
          "b": true
        },
        {
          "e": "🏢",
          "w": "회사",
          "g": "company / office",
          "r": "회사에 가요",
          "b": false
        },
        {
          "e": "🇰🇷",
          "w": "한국",
          "g": "Korea",
          "r": "한국에 와요",
          "b": true
        },
        {
          "e": "🏫",
          "w": "교실",
          "g": "classroom",
          "r": "교실에 있어요",
          "b": true
        },
        {
          "e": "桌",
          "w": "책상 위",
          "g": "on the desk",
          "r": "책상 위에 있어요",
          "b": false
        }
      ]
    }
  ],
  "sit": [
    {
      "i": "👋",
      "t": "수업 후 목적지",
      "v": "수업 후 목적지",
      "q": "수업이 끝나고 어디[[에]] 가요?",
      "qen": "Where do you go after class finishes?",
      "m": [
        "수업 후에 집[[에]] 가요.",
        "도서관[[에]] 가요."
      ],
      "memo": "1. Free talking — 활동판 없이 선생님과 묻고 답한다<br>2. 「오늘 어디에 가요?」 → 장소 두 곳<br>3. 「주말에는요?」로 때를 바꾸기<br>4. 역할 바꾸기"
    },
    {
      "i": "💬",
      "t": "지금 있는 곳",
      "v": "지금 있는 곳",
      "q": "지금 가족이나 친구가 어디[[에]] 있어요?",
      "qen": "Where are your family or friends right now?",
      "m": [
        "제 친구는 교실[[에]] 있어요.",
        "부모님은 집[[에]] 계세요."
      ],
      "memo": "1. 교사 「휴대폰이 어디에 있어요?」 → 학생 「휴대폰은 책상 위에 있어요」<br>2. 학생이 묻고 교사가 대답 — 일부러 틀리게 말해 학생이 고치게<br>3. 학생 방 물건으로 넓히기"
    },
    {
      "i": "🎯",
      "t": "가고 싶은 나라",
      "v": "가고 싶은 나라",
      "q": "방학에 어디[[에]] 가고 싶어요?",
      "qen": "Where do you want to go during vacation?",
      "m": [
        "방학에 한국[[에]] 가고 싶어요.",
        "제주도[[에]] 가요."
      ],
      "memo": "1. Free talking — 활동판 없이 선생님과 묻고 답한다<br>2. 「오늘 어디에 가요?」 → 장소 두 곳<br>3. 「주말에는요?」로 때를 바꾸기<br>4. 역할 바꾸기"
    }
  ],
  "wrap": {
    "ex": [
      {
        "ko": [
          "오늘 학교[[에]] 가요."
        ],
        "en": [
          "I go [[to]] school today."
        ]
      },
      {
        "ko": [
          "책이 책상 위[[에]] 있어요."
        ],
        "en": [
          "The book is [[on]] the desk."
        ]
      }
    ],
    "tips": [
      "<b>이동 목적지</b> → <span class=\"g\">장소 + 에 가요</span> / <b>존재 위치</b> → <span class=\"g2\">장소 + 에 있어요</span>",
      "가거나 오는 이동의 목적지, 또는 사람이나 사물이 있는 위치를 나타냅니다.",
      "대표 대화: \"지금 어디에 가요? 책이 어디에 있어요?\" → \"오늘 학교에 가요.\""
    ]
  }
});
