/* Lesson 4: 아니에요 · 100% Authentic Situation-Matched Data */
LESSONS.push({
  "key": "아니에요",
  "pos": "명사",
  "form": "아니에요",
  "gpic": [
    {
      "e": "📖",
      "c": "아니에요",
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
    "ko": "명사 뒤에 붙어 주어의 신분이나 사물이 그것이 아님을 나타냅니다.",
    "en": "Negative copula meaning 'is/am/are not' (used with subject marker 이/가)."
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
    "q": "학생[[이에요]]? 이거는 커피[[예요]]?",
    "en": "Are you a student? Is this coffee?"
  },
  "en": "Negative Copula · \"~이/가 아니에요\" · 신분과 사물을 부정해요",
  "prior": [],
  "pat": "○○이/가 아니에요. △△이에요/예요.",
  "hero": {
    "pic": [
      {
        "e": "🧑",
        "c": "아니에요",
        "t": "navy"
      },
      {
        "e": "💬",
        "c": "명사",
        "t": "accent"
      }
    ],
    "ko": [
      "학생[[이 아니에요]]. 의사예요.",
      "커피[[가 아니에요]]. 녹차예요."
    ],
    "en": [
      "I [[am not]] a student. I am a doctor.",
      "It [[is not]] coffee. It is green tea."
    ]
  },
  "ex": [
    {
      "label": "예문 ① · 직업 바로잡기",
      "scene": "/course/sample/scenes/ex-4-1.svg",
      "ask": {
        "q": "혹시 학생[[이에요]]?",
        "en": "Are you a student by any chance?"
      },
      "pic": [
        {
          "e": "🙋",
          "c": "아니에요",
          "t": "navy"
        }
      ],
      "a": {
        "who": "A · 사라",
        "ko": [
          "안녕하세요? 혹시 학생[[이에요]]?"
        ],
        "en": [
          "Hello! Are you a student?"
        ]
      },
      "b": {
        "who": "B · 의사",
        "ko": [
          "아니요, 저는 학생[[이 아니에요]].",
          "병원에서 일하는 의사[[예요]]."
        ],
        "en": [
          "No, I [[am not]] a student.",
          "I am a doctor working at a hospital."
        ]
      },
      "morph": [
        "학생 + 이 아니에요 (받침 O)",
        "의사 + 예요 (받침 X)"
      ]
    },
    {
      "label": "예문 ② · 음료 구별하기",
      "scene": "/course/sample/scenes/ex-4-2.svg",
      "ask": {
        "q": "이거는 커피[[예요]]?",
        "en": "Is this coffee?"
      },
      "pic": [
        {
          "e": "🗣️",
          "c": "아니에요",
          "t": "accent"
        }
      ],
      "a": {
        "who": "A · 마이클",
        "ko": [
          "리에 씨, 지금 마시는 거는 커피[[예요]]?"
        ],
        "en": [
          "Rie, is what you're drinking coffee?"
        ]
      },
      "b": {
        "who": "B · 리에",
        "ko": [
          "아니요, 커피[[가 아니에요]].",
          "따뜻한 녹차[[예요]]."
        ],
        "en": [
          "No, it [[is not]] coffee.",
          "It is warm green tea."
        ]
      },
      "morph": [
        "커피 + 가 아니에요 (받침 X)",
        "녹차 + 예요 (받침 X)"
      ]
    }
  ],
  "review": [
    {
      "ko": "학생이 아니에요.",
      "base": "학생",
      "b": true,
      "f": "아니에요"
    },
    {
      "ko": "선생님이 아니에요.",
      "base": "선생님",
      "b": true,
      "f": "아니에요"
    },
    {
      "ko": "책이 아니에요.",
      "base": "책",
      "b": true,
      "f": "아니에요"
    },
    {
      "ko": "가방이 아니에요.",
      "base": "가방",
      "b": true,
      "f": "아니에요"
    },
    {
      "ko": "의사가 아니에요.",
      "base": "의사",
      "b": false,
      "f": "아니에요"
    },
    {
      "ko": "커피가 아니에요.",
      "base": "커피",
      "b": false,
      "f": "아니에요"
    },
    {
      "ko": "가수가 아니에요.",
      "base": "가수",
      "b": false,
      "f": "아니에요"
    },
    {
      "ko": "의자가 아니에요.",
      "base": "의자",
      "b": false,
      "f": "아니에요"
    },
    {
      "ko": "학생이 아니에요. 의사예요.",
      "note": "아니에요 대표 예문"
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
        "f": "+ 이 아니에요",
        "ex": [
          [
            "학생",
            "학생이 아니에요"
          ],
          [
            "선생님",
            "선생님이 아니에요"
          ],
          [
            "책",
            "책이 아니에요"
          ],
          [
            "가방",
            "가방이 아니에요"
          ]
        ]
      },
      {
        "k": "받침 X",
        "f": "+ 가 아니에요",
        "c": "g2",
        "ex": [
          [
            "의사",
            "의사가 아니에요"
          ],
          [
            "커피",
            "커피가 아니에요"
          ],
          [
            "가수",
            "가수가 아니에요"
          ],
          [
            "의자",
            "의자가 아니에요"
          ]
        ]
      }
    ]
  },
  "tips": [
    {
      "c": "",
      "h": "💡 TIP ① · 아니에요 결합 규칙",
      "p": "<b>받침 O</b>일 때는 <span class=\"g\">+ 이 아니에요</span>, <b>받침 X</b>일 때는 <span class=\"g2\">+ 가 아니에요</span> 형태를 씁니다.<br><br><span class=\"yes\">O</span> 학생이 아니에요 / 의사가 아니에요"
    },
    {
      "c": "navy",
      "h": "💡 TIP ② · 핵심 의미와 쓰임",
      "p": "명사 뒤에 붙어 주어의 신분이나 사물이 그것이 아님을 나타냅니다.<br><br>· 학생이 아니에요. 의사예요.<br>· 커피가 아니에요. 녹차예요."
    },
    {
      "c": "teal",
      "h": "💡 TIP ③ · 실전 대화 팁",
      "p": "질문 <b>\"학생이에요? 이거는 커피예요?\"</b>에 대해 <b>○○이/가 아니에요. △△이에요/예요.</b> 패턴으로 자연스럽게 답해 보세요."
    }
  ],
  "tipsEn": [
    {
      "c": "",
      "h": "💡 TIP ① · 아니에요 Conjugation Rule",
      "p": "Use <span class=\"g\">+ 이 아니에요</span> for <b>받침 O</b> and <span class=\"g2\">+ 가 아니에요</span> for <b>받침 X</b>.<br><br><span class=\"yes\">O</span> 학생이 아니에요 / 의사가 아니에요"
    },
    {
      "c": "navy",
      "h": "💡 TIP ② · Core Meaning & Usage",
      "p": "Negative copula meaning 'is/am/are not' (used with subject marker 이/가).<br><br>· I am not a student. I am a doctor.<br>· It is not coffee. It is green tea."
    },
    {
      "c": "teal",
      "h": "💡 TIP ③ · Conversation Practice",
      "p": "Practice answering <b>\"Are you a student? Is this coffee?\"</b> using the pattern <b>○○이/가 아니에요. △△이에요/예요.</b>."
    }
  ],
  "words": [
    {
      "b": "학생",
      "r": "학생이 아니에요",
      "t": "받침 O"
    },
    {
      "b": "선생님",
      "r": "선생님이 아니에요",
      "t": "받침 O"
    },
    {
      "b": "책",
      "r": "책이 아니에요",
      "t": "받침 O"
    },
    {
      "b": "가방",
      "r": "가방이 아니에요",
      "t": "받침 O"
    },
    {
      "b": "의사",
      "r": "의사가 아니에요",
      "t": "받침 X"
    },
    {
      "b": "커피",
      "r": "커피가 아니에요",
      "t": "받침 X"
    },
    {
      "b": "가수",
      "r": "가수가 아니에요",
      "t": "받침 X"
    },
    {
      "b": "의자",
      "r": "의자가 아니에요",
      "t": "받침 X"
    }
  ],
  "bingo": [
    [
      "학생",
      "학생이 아니에요"
    ],
    [
      "선생님",
      "선생님이 아니에요"
    ],
    [
      "책",
      "책이 아니에요"
    ],
    [
      "가방",
      "가방이 아니에요"
    ],
    [
      "의사",
      "의사가 아니에요"
    ],
    [
      "커피",
      "커피가 아니에요"
    ],
    [
      "가수",
      "가수가 아니에요"
    ],
    [
      "의자",
      "의자가 아니에요"
    ],
    [
      "저",
      "저는 학생이 아니에요."
    ],
    [
      "친구",
      "제 친구는 의사가 아니에요."
    ],
    [
      "이거",
      "이거는 커피가 아니에요."
    ],
    [
      "저 사람",
      "저 사람은 선생님이 아니에요."
    ]
  ],
  "relays": [
    [
      {
        "t": "안녕하세요? 혹시 학생이에요?"
      },
      {
        "base": "학생",
        "ans": "학생이 아니에요."
      },
      {
        "base": "의사",
        "ans": "의사가 아니에요."
      }
    ],
    [
      {
        "t": "학생이에요? 이거는 커피예요?"
      },
      {
        "base": "저 · 학생",
        "ans": "저는 학생이 아니에요."
      },
      {
        "base": "친구 · 의사",
        "ans": "제 친구는 의사가 아니에요."
      }
    ]
  ],
  "make": [
    {
      "k": [
        "저",
        "학생"
      ],
      "a": "저는 학생이 아니에요.",
      "e": "I am not a student."
    },
    {
      "k": [
        "친구",
        "의사"
      ],
      "a": "제 친구는 의사가 아니에요.",
      "e": "My friend is not a doctor."
    },
    {
      "k": [
        "이거",
        "커피"
      ],
      "a": "이거는 커피가 아니에요.",
      "e": "This is not coffee."
    },
    {
      "k": [
        "저 사람",
        "선생님"
      ],
      "a": "저 사람은 선생님이 아니에요.",
      "e": "That person is not a teacher."
    }
  ],
  "vocab": [
    {
      "tag": "아니에요",
      "icon": "📖",
      "q": "학생이에요? 이거는 커피예요?",
      "qen": "Are you a student? Is this coffee?",
      "pat": "○○이/가 아니에요. △△이에요/예요.",
      "items": [
        {
          "e": "🎓",
          "w": "학생",
          "g": "student",
          "r": "학생이 아니에요",
          "b": true
        },
        {
          "e": "👩‍🏫",
          "w": "선생님",
          "g": "teacher",
          "r": "선생님이 아니에요",
          "b": true
        },
        {
          "e": "📕",
          "w": "책",
          "g": "book",
          "r": "책이 아니에요",
          "b": true
        },
        {
          "e": "🎒",
          "w": "가방",
          "g": "bag",
          "r": "가방이 아니에요",
          "b": true
        },
        {
          "e": "🩺",
          "w": "의사",
          "g": "doctor",
          "r": "의사가 아니에요",
          "b": false
        },
        {
          "e": "☕",
          "w": "커피",
          "g": "coffee",
          "r": "커피가 아니에요",
          "b": false
        }
      ]
    }
  ],
  "sit": [
    {
      "i": "👋",
      "t": "잘못된 추측 고치기",
      "v": "잘못된 추측 고치기",
      "q": "혹시 일본 사람[[이에요]]? 선생님[[이에요]]?",
      "qen": "Are you Japanese? Are you a teacher?",
      "m": [
        "아니요, 일본 사람[[이 아니에요]].",
        "선생님[[이 아니에요]]. 학생이에요."
      ],
      "memo": "1. Free talking — 활동판 없이 선생님과 묻고 답한다<br>2. 학생과 교사가 각자 직업을 하나 몰래 정한다(가수 · 의사 · 회사원 …)<br>3. 서로 「○○예요/이에요?」로 맞혀 보기 — 틀리면 「아니요, ○○이/가 아니에요. □□이에요/예요」<br>4. 맞힐 때까지 번갈아 묻기"
    },
    {
      "i": "💬",
      "t": "물건 맞히기",
      "v": "물건 맞히기",
      "q": "이거는 누구 가방[[이에요]]? 마이클 씨 가방이에요?",
      "qen": "Whose bag is this? Is it Michael's bag?",
      "m": [
        "제 가방[[이 아니에요]].",
        "유진 씨 가방이에요."
      ],
      "memo": "1. 카드를 하나 짚고 교사가 일부러 틀리게 「이거 커피예요?」<br>2. 학생 「아니요, 커피가 아니에요. 녹차예요」 — 아니에요 뒤에 바른 말까지<br>3. 역할 바꾸기 — 학생이 틀리게 묻고 교사가 고친다"
    },
    {
      "i": "🎯",
      "t": "참 · 거짓 말하기",
      "v": "참 · 거짓 말하기",
      "q": "우리 교실은 도서관[[이에요]]?",
      "qen": "Is our classroom a library?",
      "m": [
        "아니요, 도서관[[이 아니에요]].",
        "한국어 교실이에요."
      ],
      "memo": "1. Free talking — 활동판 없이 선생님과 묻고 답한다<br>2. 학생과 교사가 각자 직업을 하나 몰래 정한다(가수 · 의사 · 회사원 …)<br>3. 서로 「○○예요/이에요?」로 맞혀 보기 — 틀리면 「아니요, ○○이/가 아니에요. □□이에요/예요」<br>4. 맞힐 때까지 번갈아 묻기"
    }
  ],
  "wrap": {
    "ex": [
      {
        "ko": [
          "학생[[이 아니에요]]. 의사예요."
        ],
        "en": [
          "I [[am not]] a student. I am a doctor."
        ]
      },
      {
        "ko": [
          "커피[[가 아니에요]]. 녹차예요."
        ],
        "en": [
          "It [[is not]] coffee. It is green tea."
        ]
      }
    ],
    "tips": [
      "<b>받침 O</b> → <span class=\"g\">+ 이 아니에요</span> / <b>받침 X</b> → <span class=\"g2\">+ 가 아니에요</span>",
      "명사 뒤에 붙어 주어의 신분이나 사물이 그것이 아님을 나타냅니다.",
      "대표 대화: \"학생이에요? 이거는 커피예요?\" → \"학생이 아니에요. 의사예요.\""
    ]
  }
});
