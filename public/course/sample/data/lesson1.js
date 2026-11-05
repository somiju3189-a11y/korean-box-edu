/* scripts/build-course-sample.mjs 가 만든 파일입니다. 직접 고치지 마세요. */
LESSONS.push({
  "key": "이에요/예요",
  "pos": "명사",
  "form": "이에요/예요",
  "opening": {
    "name": "1호선 출발",
    "no": 1,
    "line": "Level 1 · Line 1",
    "color": "#0052a4",
    "en": "30 stations in 6 sections.<br>Your Korean trip starts here. All aboard!",
    "board": "Departing · Level 1",
    "next": "Next stop: Lesson 1 · 이에요/예요",
    "stops": [
      "Unit 1",
      "Unit 2",
      "Unit 3",
      "Unit 4",
      "Unit 5",
      "Unit 6"
    ]
  },
  "gpic": [
    {
      "e": "🧑",
      "c": "저",
      "t": "navy"
    },
    {
      "sign": "="
    },
    {
      "e": "🎓",
      "c": "학생",
      "t": "accent"
    }
  ],
  "mean": {
    "ko": "이름·사물·직업이 <b>무엇인지</b> 말합니다.",
    "en": "이에요/예요 says what something or someone is."
  },
  "warn": [
    {
      "ko": "앞말에 <span class=\"g\">받침 O → 이에요</span>, <span class=\"g2\">받침 X → 예요</span>입니다.",
      "en": "After a consonant use 이에요; otherwise 예요."
    },
    {
      "ko": "질문은 <b>끝만 올려서</b> 말합니다.",
      "en": "For a question, <b>just raise your voice</b> at the end."
    },
    {
      "ko": "사람 <b>이름</b>에도 같은 규칙을 씁니다.",
      "en": "<b>People’s names</b> follow the same rule."
    }
  ],
  "ask": {
    "q": "이름이 뭐[[예요]]?",
    "en": "What's your name?"
  },
  "en": "to be · \"~입니다\" · 이름 · 사물 · 직업을 말해요",
  "prior": [],
  "pat": "○○이에요/예요.",
  "hero": {
    "pic": [
      {
        "e": "🙋",
        "c": "저",
        "t": "navy"
      },
      {
        "arw": 1
      },
      {
        "e": "🧑‍🎓",
        "c": "마이클",
        "t": "accent"
      }
    ],
    "ko": [
      "안녕하세요? 마이클[[이에요]]."
    ],
    "en": [
      "Hello. I [[am]] Michael."
    ]
  },
  "ex": [
    {
      "label": "예문 ① · 첫인사",
      "scene": "scenes/ex-1-1.svg",
      "ask": {
        "q": "○○[[이에요]]/[[예요]].",
        "en": "I'm ○○."
      },
      "pic": [
        {
          "e": "🧑",
          "c": "마이클",
          "t": "navy"
        },
        {
          "e": "🗽",
          "c": "미국 사람",
          "t": "accent"
        }
      ],
      "a": {
        "who": "A · 수진",
        "ko": [
          "안녕하세요?"
        ],
        "en": [
          "Hello."
        ]
      },
      "b": {
        "who": "B · 마이클",
        "ko": [
          "안녕하세요?",
          "마이클[[이에요]].",
          "미국 사람[[이에요]]."
        ],
        "en": [
          "Hello.",
          "I [[am]] Michael.",
          "I [[am]] American."
        ]
      },
      "morph": [
        "마이클 + 이에요 (받침 O)",
        "사람 + 이에요 (받침 O)",
        "인사말 어휘"
      ]
    },
    {
      "label": "예문 ② · 이거 뭐예요?",
      "scene": "scenes/ex-1-2.svg",
      "ask": {
        "q": "이거 뭐[[예요]]?",
        "en": "What is this?"
      },
      "pic": [
        {
          "e": "📕",
          "c": "책",
          "t": "teal"
        },
        {
          "e": "🪑",
          "c": "의자",
          "t": "gold"
        }
      ],
      "a": {
        "who": "A · 마이클",
        "ko": [
          "이거 뭐[[예요]]?"
        ],
        "en": [
          "What [[is]] this?"
        ]
      },
      "b": {
        "who": "B · 수진",
        "ko": [
          "책[[이에요]].",
          "저거 의자[[예요]]."
        ],
        "en": [
          "It [[is]] a book.",
          "That [[is]] a chair."
        ]
      },
      "morph": [
        "책 + 이에요 (받침 O)",
        "의자 + 예요 (받침 X)",
        "뭐 + 예요"
      ]
    },
    {
      "label": "예문 ③ · 나라와 직업",
      "scene": "scenes/ex-1-3.svg",
      "ask": {
        "q": "○○ 씨, □□ 사람[[이에요]]?",
        "en": "○○, are you □□?"
      },
      "pic": [
        {
          "e": "👩",
          "c": "리에",
          "t": "accent"
        },
        {
          "e": "🎤",
          "c": "가수",
          "t": "plum"
        }
      ],
      "a": {
        "who": "A · 마이클",
        "ko": [
          "리에 씨, 일본 사람[[이에요]]?"
        ],
        "en": [
          "Rie, [[are]] you Japanese?"
        ]
      },
      "b": {
        "who": "B · 리에",
        "ko": [
          "네, 일본 사람[[이에요]].",
          "가수[[예요]]."
        ],
        "en": [
          "Yes, I [[am]] Japanese.",
          "I [[am]] a singer."
        ]
      },
      "morph": [
        "사람 + 이에요 (받침 O)",
        "가수 + 예요 (받침 X)",
        "질문 ~이에요?"
      ]
    }
  ],
  "review": [
    {
      "ko": "마이클[[이에요]].",
      "base": "마이클",
      "b": true,
      "f": "이에요"
    },
    {
      "ko": "책[[이에요]].",
      "base": "책",
      "b": true,
      "f": "이에요"
    },
    {
      "ko": "의자[[예요]].",
      "base": "의자",
      "b": false,
      "f": "예요"
    },
    {
      "ko": "가수[[예요]].",
      "base": "가수",
      "b": false,
      "f": "예요"
    },
    {
      "ko": "이름이 [[뭐예요]]?",
      "note": "뭐 + 예요 &nbsp;— 끝만 올려서 물어요"
    }
  ],
  "rules": {
    "head": "Rule <i>규칙</i>",
    "th": [
      "앞말의 받침",
      "형태",
      "예"
    ],
    "rows": [
      {
        "k": "받침 O",
        "f": "+ 이에요",
        "ex": [
          [
            "책",
            "책이에요"
          ],
          [
            "사람",
            "사람이에요"
          ]
        ]
      },
      {
        "k": "받침 X",
        "f": "+ 예요",
        "c": "g2",
        "ex": [
          [
            "의자",
            "의자예요"
          ],
          [
            "친구",
            "친구예요"
          ]
        ]
      }
    ],
    "irrHead": "Watch out <i>주의</i>",
    "irr": [
      {
        "k": "What · Who<i>뭐 · 누구</i>",
        "f": "예요",
        "ex": [
          [
            "뭐",
            "뭐예요?"
          ],
          [
            "누구",
            "누구예요?"
          ]
        ]
      },
      {
        "k": "People’s names<i>사람 이름</i>",
        "f": "Same rule",
        "ex": [
          [
            "수진",
            "수진이에요"
          ],
          [
            "리에",
            "리에예요"
          ]
        ]
      }
    ]
  },
  "tips": [
    {
      "c": "",
      "h": "💡 TIP ① · 받침을 보세요",
      "p": "앞 글자에 <span class=\"g\">받침이 있으면 이에요</span>,<br><span class=\"g2\">받침이 없으면 예요</span>입니다.<br><br><span class=\"yes\">O</span> 책<span class=\"g\">이에요</span> / 의자<span class=\"g2\">예요</span><br><span class=\"no\">X</span> 책예요 / 의자이에요"
    },
    {
      "c": "navy",
      "h": "💡 TIP ② · 질문도 같은 모양",
      "p": "글자는 똑같고 <b>끝만 올려서</b> 말합니다.<br><br>학생<span class=\"g\">이에요</span>. ↘<br>학생<span class=\"g\">이에요</span>? ↗<br><br>물음표만 붙이면 질문이 돼요."
    },
    {
      "c": "teal",
      "h": "💡 TIP ③ · 이름에도 그대로",
      "p": "사람 이름도 규칙이 같습니다.<br><br>수진 (받침 O) → 수진<span class=\"g\">이에요</span><br>리에 (받침 X) → 리에<span class=\"g2\">예요</span>"
    }
  ],
  "tipsEn": [
    {
      "c": "",
      "h": "💡 TIP ① · Look at the last letter",
      "p": "If the word ends in a <b>consonant</b>, use <span class=\"g\">이에요</span>.<br>If it ends in a <b>vowel</b>, use <span class=\"g2\">예요</span>."
    },
    {
      "c": "navy",
      "h": "💡 TIP ② · Questions look the same",
      "p": "Nothing changes — you only <b>raise your voice</b> at the end.<br>Just add a question mark in writing."
    },
    {
      "c": "teal",
      "h": "💡 TIP ③ · Names follow the same rule",
      "p": "People’s names work exactly the same way — look at the last letter of the name."
    }
  ],
  "words": [
    {
      "b": "책",
      "r": "책이에요",
      "t": "받침 O"
    },
    {
      "b": "학생",
      "r": "학생이에요",
      "t": "받침 O"
    },
    {
      "b": "사람",
      "r": "사람이에요",
      "t": "받침 O"
    },
    {
      "b": "선생님",
      "r": "선생님이에요",
      "t": "받침 O"
    },
    {
      "b": "회사원",
      "r": "회사원이에요",
      "t": "받침 O"
    },
    {
      "b": "의자",
      "r": "의자예요",
      "t": "받침 X"
    },
    {
      "b": "친구",
      "r": "친구예요",
      "t": "받침 X"
    },
    {
      "b": "가수",
      "r": "가수예요",
      "t": "받침 X"
    },
    {
      "b": "커피",
      "r": "커피예요",
      "t": "받침 X"
    },
    {
      "b": "의사",
      "r": "의사예요",
      "t": "받침 X"
    }
  ],
  "bingo": [
    [
      "책",
      "책이에요"
    ],
    [
      "학생",
      "학생이에요"
    ],
    [
      "사람",
      "사람이에요"
    ],
    [
      "선생님",
      "선생님이에요"
    ],
    [
      "회사원",
      "회사원이에요"
    ],
    [
      "한국",
      "한국이에요"
    ],
    [
      "의자",
      "의자예요"
    ],
    [
      "친구",
      "친구예요"
    ],
    [
      "가수",
      "가수예요"
    ],
    [
      "커피",
      "커피예요"
    ],
    [
      "의사",
      "의사예요"
    ],
    [
      "어머니",
      "어머니예요"
    ]
  ],
  "relays": [
    [
      {
        "t": "안녕하세요."
      },
      {
        "base": "마이클",
        "ans": "마이클이에요"
      },
      {
        "base": "미국 사람",
        "ans": "미국 사람이에요"
      }
    ],
    [
      {
        "t": "이거 뭐예요?"
      },
      {
        "base": "책",
        "ans": "책이에요"
      },
      {
        "t": "저거?"
      },
      {
        "base": "의자",
        "ans": "의자예요"
      }
    ],
    [
      {
        "t": "리에 씨,"
      },
      {
        "base": "일본 사람",
        "ans": "일본 사람이에요?"
      },
      {
        "t": "네,"
      },
      {
        "base": "일본 사람",
        "ans": "일본 사람이에요"
      }
    ]
  ],
  "make": [
    {
      "k": [
        "마이클"
      ],
      "a": "마이클이에요.",
      "e": "I am Michael."
    },
    {
      "k": [
        "이거",
        "책"
      ],
      "a": "이거 책이에요.",
      "e": "This is a book."
    },
    {
      "k": [
        "학생"
      ],
      "a": "학생이에요.",
      "e": "I am a student."
    },
    {
      "k": [
        "저거",
        "의자"
      ],
      "a": "저거 의자예요.",
      "e": "That is a chair."
    },
    {
      "k": [
        "한국 사람"
      ],
      "a": "한국 사람이에요.",
      "e": "I am Korean."
    },
    {
      "k": [
        "가수"
      ],
      "a": "가수예요.",
      "e": "I am a singer."
    },
    {
      "k": [
        "커피"
      ],
      "a": "커피예요.",
      "e": "It's coffee."
    },
    {
      "k": [
        "선생님"
      ],
      "a": "선생님이에요.",
      "e": "I am a teacher."
    }
  ],
  "vocab": [
    {
      "tag": "이름",
      "icon": "🙋",
      "items": [
        {
          "e": "🧑",
          "w": "마이클",
          "g": "Michael",
          "b": true,
          "r": "마이클이에요"
        },
        {
          "e": "👩",
          "w": "유진",
          "g": "Yujin",
          "b": true,
          "r": "유진이에요"
        },
        {
          "e": "🧒",
          "w": "하준",
          "g": "Hajun",
          "b": true,
          "r": "하준이에요"
        },
        {
          "e": "👧",
          "w": "리에",
          "g": "Rie",
          "b": false,
          "r": "리에예요"
        },
        {
          "e": "👩‍🦰",
          "w": "사라",
          "g": "Sara",
          "b": false,
          "r": "사라예요"
        },
        {
          "e": "👩‍🦱",
          "w": "미나",
          "g": "Mina",
          "b": false,
          "r": "미나예요"
        }
      ]
    },
    {
      "tag": "사물",
      "q": "이거 뭐예요?",
      "qen": "What is this?",
      "icon": "📕",
      "pat": "○○이에요/예요",
      "items": [
        {
          "e": "📕",
          "w": "책",
          "g": "book",
          "b": true,
          "r": "책이에요"
        },
        {
          "e": "🎒",
          "w": "가방",
          "g": "bag",
          "b": true,
          "r": "가방이에요"
        },
        {
          "e": "✏️",
          "w": "연필",
          "g": "pencil",
          "b": true,
          "r": "연필이에요"
        },
        {
          "e": "🪑",
          "w": "의자",
          "g": "chair",
          "b": false,
          "r": "의자예요"
        },
        {
          "e": "🕐",
          "w": "시계",
          "g": "clock",
          "b": false,
          "r": "시계예요"
        },
        {
          "e": "☕",
          "w": "커피",
          "g": "coffee",
          "b": false,
          "r": "커피예요"
        }
      ]
    },
    {
      "tag": "직업",
      "icon": "💼",
      "pat": "○○이에요/예요",
      "items": [
        {
          "e": "🎓",
          "w": "학생",
          "g": "student",
          "b": true,
          "r": "학생이에요"
        },
        {
          "e": "👩‍🏫",
          "w": "선생님",
          "g": "teacher",
          "b": true,
          "r": "선생님이에요"
        },
        {
          "e": "👔",
          "w": "회사원",
          "g": "office worker",
          "b": true,
          "r": "회사원이에요"
        },
        {
          "e": "🩺",
          "w": "의사",
          "g": "doctor",
          "b": false,
          "r": "의사예요"
        },
        {
          "e": "🎤",
          "w": "가수",
          "g": "singer",
          "b": false,
          "r": "가수예요"
        },
        {
          "e": "👨‍🍳",
          "w": "요리사",
          "g": "cook",
          "b": false,
          "r": "요리사예요"
        }
      ]
    },
    {
      "tag": "나라",
      "icon": "🌏",
      "q": "어느 나라 사람이에요?",
      "qen": "Where are you from?",
      "items": [
        {
          "e": "🇰🇷",
          "w": "한국",
          "g": "Korea",
          "b": true,
          "r": "한국 사람이에요"
        },
        {
          "e": "🇯🇵",
          "w": "일본",
          "g": "Japan",
          "b": true,
          "r": "일본 사람이에요"
        },
        {
          "e": "🇺🇸",
          "w": "미국",
          "g": "the USA",
          "b": true,
          "r": "미국 사람이에요"
        },
        {
          "e": "🇨🇦",
          "w": "캐나다",
          "g": "Canada",
          "b": false,
          "r": "캐나다 사람이에요"
        },
        {
          "e": "🇦🇺",
          "w": "호주",
          "g": "Australia",
          "b": false,
          "r": "호주 사람이에요"
        },
        {
          "e": "🇫🇷",
          "w": "프랑스",
          "g": "France",
          "b": false,
          "r": "프랑스 사람이에요"
        }
      ]
    },
    {
      "hide": true,
      "tag": "이름 · 나라",
      "icon": "🪪",
      "q": "이름이 뭐예요? 어느 나라 사람이에요?",
      "qen": "What is your name? Where are you from?",
      "pat": "○○이에요/예요. □□ 사람이에요.",
      "items": [
        {
          "e": "🇰🇷",
          "w": "김수진 · 한국",
          "g": "Kim Sujin · Korea",
          "t": "이름 받침 O",
          "r": "김수진이에요. 한국 사람이에요."
        },
        {
          "e": "🇯🇵",
          "w": "리에 · 일본",
          "g": "Rie · Japan",
          "t": "이름 받침 X",
          "r": "리에예요. 일본 사람이에요."
        },
        {
          "e": "🇺🇸",
          "w": "마이클 · 미국",
          "g": "Michael · the USA",
          "t": "이름 받침 O",
          "r": "마이클이에요. 미국 사람이에요."
        },
        {
          "e": "🇨🇦",
          "w": "에밀리 · 캐나다",
          "g": "Emily · Canada",
          "t": "이름 받침 X",
          "r": "에밀리예요. 캐나다 사람이에요."
        },
        {
          "e": "🇦🇺",
          "w": "잭 · 호주",
          "g": "Jack · Australia",
          "t": "이름 받침 O",
          "r": "잭이에요. 호주 사람이에요."
        },
        {
          "e": "🇫🇷",
          "w": "아르노 · 프랑스",
          "g": "Arnaud · France",
          "t": "이름 받침 X",
          "r": "아르노예요. 프랑스 사람이에요."
        }
      ]
    }
  ],
  "sit": [
    {
      "i": "👋",
      "t": "인사",
      "v": "이름",
      "q": "안녕하세요? 이름이 뭐예요?",
      "qen": "Hello. What is your name?",
      "m": [
        "저는 마이클[[이에요]].",
        "김수진[[이에요]]."
      ]
    },
    {
      "i": "📕",
      "t": "사물",
      "q": "이거 뭐예요?",
      "qen": "What is this?",
      "m": [
        "책[[이에요]].",
        "저거 의자[[예요]]."
      ],
      "memo": "① <b>장 확인</b> — 그림을 보며 「이거 뭐예요?」 「책이에요.」 「저거 의자예요.」를 함께 읽습니다. <b>이거</b> = 가까운 것, <b>저거</b> = 먼 것.<br>② <b>교사 → 학생</b> — 교사가 자기 물건(책 · 가방 · 연필 · 시계)을 들어 보이며 「이거 뭐예요?」 하고 묻고, 학생이 「○○이에요/예요.」로 대답합니다.<br>③ <b>학생 → 교사</b> — 이번에는 학생이 자기 물건을 보여 주며 묻고 교사가 대답합니다.<br>④ 받침 있는 물건(책 · 가방)과 없는 물건(의자 · 시계)을 섞어 <b>이에요 · 예요</b>를 둘 다 쓰게 합니다. 1:1 · 온라인은 화면 앞에 물건을 들어 보이며 번갈아 합니다."
    },
    {
      "i": "💼",
      "t": "직업",
      "v": "직업",
      "q": "학생이에요? 선생님이에요?",
      "qen": "Are you a student or a teacher?",
      "mL": "학생",
      "m": [
        "저는 학생[[이에요]]."
      ],
      "m2L": "선생님",
      "m2": [
        "저는 선생님[[이에요]]."
      ]
    },
    {
      "i": "🌏",
      "t": "나라",
      "v": "나라",
      "p": "저는 ○○이에요/예요. □□ 사람이에요.",
      "q": "이름이 뭐예요? 어느 나라 사람이에요?",
      "qen": "What is your name? Where are you from?",
      "m": [
        "저는 아르노[[예요]]. 프랑스 사람[[이에요]].",
        "김수진[[이에요]]. 한국 사람[[이에요]]."
      ]
    }
  ],
  "wrap": {
    "ex": [
      {
        "ko": [
          "마이클[[이에요]]."
        ],
        "en": [
          "I [[am]] Michael."
        ]
      },
      {
        "ko": [
          "의자[[예요]]."
        ],
        "en": [
          "It [[is]] a chair."
        ]
      }
    ],
    "tips": [
      "앞말에 <span class=\"g\">받침 O → 이에요</span>, <span class=\"g2\">받침 X → 예요</span>입니다.",
      "질문은 <b>끝만 올려서</b> 말합니다.",
      "사람 <b>이름</b>에도 같은 규칙을 씁니다."
    ]
  }
});
