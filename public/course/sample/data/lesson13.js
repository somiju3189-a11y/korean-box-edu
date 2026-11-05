/* Lesson 13: 부터 ~ 까지 · 100% Authentic Situation-Matched Data */
LESSONS.push({
  "key": "부터 ~ 까지",
  "pos": "시간",
  "posT": "시간",
  "form": "부터 ~ 까지",
  "formT": "부터 <span class=\"pos\">시간</span> + 까지",
  "gpic": [
    {
      "e": "📖",
      "c": "부터 ~ 까지",
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
    "ko": "시간, 요일, 날짜의 시작점(~부터)과 끝점(~까지)을 나타냅니다.",
    "en": "Indicates the starting time ('from') and ending time ('until/to')."
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
    "q": "몇 시[[부터]] 몇 시[[까지]] 일해요?",
    "en": "From what time to what time do you work?"
  },
  "en": "Time Range · \"~부터 ~까지\" · 시작 시간과 끝 시간을 말해요",
  "prior": [],
  "pat": "시간1 + 부터 + 시간2 + 까지",
  "hero": {
    "pic": [
      {
        "e": "🧑",
        "c": "부터 ~ 까지",
        "t": "navy"
      },
      {
        "e": "💬",
        "c": "시간",
        "t": "accent"
      }
    ],
    "ko": [
      "아침 9시[[부터]] 저녁 6시[[까지]] 일해요.",
      "월요일[[부터]] 금요일[[까지]] 학교에 가요."
    ],
    "en": [
      "I work [[from]] 9 AM [[to]] 6 PM.",
      "I go to school [[from]] Monday [[to]] Friday."
    ]
  },
  "ex": [
    {
      "label": "예문 ① · 근무 시간 말하기",
      "scene": "/course/sample/scenes/ex-13-1.svg",
      "ask": {
        "q": "몇 시[[부터]] 몇 시[[까지]] 일해요?",
        "en": "From what time to what time do you work?"
      },
      "pic": [
        {
          "e": "🙋",
          "c": "부터 ~ 까지",
          "t": "navy"
        }
      ],
      "a": {
        "who": "A · 미나",
        "ko": [
          "하준 씨, 회사에서 몇 시[[부터]] 몇 시[[까지]] 일해요?"
        ],
        "en": [
          "Hajun, from what time to what time do you work at the company?"
        ]
      },
      "b": {
        "who": "B · 회사원",
        "ko": [
          "아침 9시[[부터]] 저녁 6시[[까지]] 일해요.",
          "낮 12시[[부터]] 1시[[까지]] 점심시간이에요."
        ],
        "en": [
          "I work [[from]] 9 AM [[to]] 6 PM.",
          "Lunchtime is [[from]] 12 PM [[to]] 1 PM."
        ]
      },
      "morph": [
        "9시 + 부터 (시작 시각)",
        "6시 + 까지 (끝 시각)"
      ]
    },
    {
      "label": "예문 ② · 주간 수업 일정",
      "scene": "/course/sample/scenes/ex-13-2.svg",
      "ask": {
        "q": "한국어 수업이 무슨 요일[[부터]] 무슨 요일[[까지]] 있어요?",
        "en": "From what day to what day is the Korean class?"
      },
      "pic": [
        {
          "e": "🗣️",
          "c": "부터 ~ 까지",
          "t": "accent"
        }
      ],
      "a": {
        "who": "A · 학생",
        "ko": [
          "선생님, 한국어 수업이 언제 있어요?"
        ],
        "en": [
          "Teacher, when is the Korean class?"
        ]
      },
      "b": {
        "who": "B · 선생님",
        "ko": [
          "월요일[[부터]] 금요일[[까지]] 매일 수업이 있어요.",
          "오전 10시[[부터]] 12시[[까지]] 공부해요."
        ],
        "en": [
          "There is class every day [[from]] Monday [[to]] Friday.",
          "We study [[from]] 10 AM [[to]] 12 PM."
        ]
      },
      "morph": [
        "월요일 + 부터",
        "금요일 + 까지"
      ]
    }
  ],
  "review": [
    {
      "ko": "9시부터.",
      "base": "9시",
      "b": false,
      "f": "부터 ~ 까지"
    },
    {
      "ko": "월요일부터.",
      "base": "월요일",
      "b": true,
      "f": "부터 ~ 까지"
    },
    {
      "ko": "아침부터.",
      "base": "아침",
      "b": true,
      "f": "부터 ~ 까지"
    },
    {
      "ko": "1월부터.",
      "base": "1월",
      "b": true,
      "f": "부터 ~ 까지"
    },
    {
      "ko": "6시까지.",
      "base": "6시",
      "b": false,
      "f": "부터 ~ 까지"
    },
    {
      "ko": "금요일까지.",
      "base": "금요일",
      "b": true,
      "f": "부터 ~ 까지"
    },
    {
      "ko": "저녁까지.",
      "base": "저녁",
      "b": true,
      "f": "부터 ~ 까지"
    },
    {
      "ko": "3월까지.",
      "base": "3월",
      "b": true,
      "f": "부터 ~ 까지"
    },
    {
      "ko": "아침 9시부터 저녁 6시까지 일해요.",
      "note": "부터 ~ 까지 대표 예문"
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
        "k": "시작 시각·요일",
        "f": "시간1 + 부터",
        "ex": [
          [
            "9시",
            "9시부터"
          ],
          [
            "월요일",
            "월요일부터"
          ],
          [
            "아침",
            "아침부터"
          ],
          [
            "1월",
            "1월부터"
          ]
        ]
      },
      {
        "k": "종료 시각·요일",
        "f": "시간2 + 까지",
        "c": "g2",
        "ex": [
          [
            "6시",
            "6시까지"
          ],
          [
            "금요일",
            "금요일까지"
          ],
          [
            "저녁",
            "저녁까지"
          ],
          [
            "3월",
            "3월까지"
          ]
        ]
      }
    ]
  },
  "tips": [
    {
      "c": "",
      "h": "💡 TIP ① · 부터 ~ 까지 결합 규칙",
      "p": "<b>시작 시각·요일</b>일 때는 <span class=\"g\">시간1 + 부터</span>, <b>종료 시각·요일</b>일 때는 <span class=\"g2\">시간2 + 까지</span> 형태를 씁니다.<br><br><span class=\"yes\">O</span> 9시부터 / 6시까지"
    },
    {
      "c": "navy",
      "h": "💡 TIP ② · 핵심 의미와 쓰임",
      "p": "시간, 요일, 날짜의 시작점(~부터)과 끝점(~까지)을 나타냅니다.<br><br>· 아침 9시부터 저녁 6시까지 일해요.<br>· 월요일부터 금요일까지 학교에 가요."
    },
    {
      "c": "teal",
      "h": "💡 TIP ③ · 실전 대화 팁",
      "p": "질문 <b>\"몇 시부터 몇 시까지 일해요?\"</b>에 대해 <b>시간1 + 부터 + 시간2 + 까지</b> 패턴으로 자연스럽게 답해 보세요."
    }
  ],
  "tipsEn": [
    {
      "c": "",
      "h": "💡 TIP ① · 부터 ~ 까지 Conjugation Rule",
      "p": "Use <span class=\"g\">시간1 + 부터</span> for <b>시작 시각·요일</b> and <span class=\"g2\">시간2 + 까지</span> for <b>종료 시각·요일</b>.<br><br><span class=\"yes\">O</span> 9시부터 / 6시까지"
    },
    {
      "c": "navy",
      "h": "💡 TIP ② · Core Meaning & Usage",
      "p": "Indicates the starting time ('from') and ending time ('until/to').<br><br>· I work from 9 AM to 6 PM.<br>· I go to school from Monday to Friday."
    },
    {
      "c": "teal",
      "h": "💡 TIP ③ · Conversation Practice",
      "p": "Practice answering <b>\"From what time to what time do you work?\"</b> using the pattern <b>시간1 + 부터 + 시간2 + 까지</b>."
    }
  ],
  "words": [
    {
      "b": "9시",
      "r": "9시부터",
      "t": "시작 시각·요일"
    },
    {
      "b": "월요일",
      "r": "월요일부터",
      "t": "시작 시각·요일"
    },
    {
      "b": "아침",
      "r": "아침부터",
      "t": "시작 시각·요일"
    },
    {
      "b": "1월",
      "r": "1월부터",
      "t": "시작 시각·요일"
    },
    {
      "b": "6시",
      "r": "6시까지",
      "t": "종료 시각·요일"
    },
    {
      "b": "금요일",
      "r": "금요일까지",
      "t": "종료 시각·요일"
    },
    {
      "b": "저녁",
      "r": "저녁까지",
      "t": "종료 시각·요일"
    },
    {
      "b": "3월",
      "r": "3월까지",
      "t": "종료 시각·요일"
    }
  ],
  "bingo": [
    [
      "9시",
      "9시부터"
    ],
    [
      "월요일",
      "월요일부터"
    ],
    [
      "아침",
      "아침부터"
    ],
    [
      "1월",
      "1월부터"
    ],
    [
      "6시",
      "6시까지"
    ],
    [
      "금요일",
      "금요일까지"
    ],
    [
      "저녁",
      "저녁까지"
    ],
    [
      "3월",
      "3월까지"
    ],
    [
      "9시",
      "아침 9시부터 저녁 6시까지 일해요."
    ],
    [
      "월요일",
      "월요일부터 금요일까지 한국어를 공부해요."
    ],
    [
      "12시",
      "12시부터 1시까지 점심을 먹어요."
    ],
    [
      "아침",
      "오늘은 아침부터 저녁까지 바빠요."
    ]
  ],
  "relays": [
    [
      {
        "t": "하준 씨, 회사에서 몇 시부터 몇 시까지 일해요?"
      },
      {
        "base": "9시",
        "ans": "9시부터."
      },
      {
        "base": "6시",
        "ans": "6시까지."
      }
    ],
    [
      {
        "t": "몇 시부터 몇 시까지 일해요?"
      },
      {
        "base": "9시 · 6시 · 일하다",
        "ans": "아침 9시부터 저녁 6시까지 일해요."
      },
      {
        "base": "월요일 · 금요일 · 공부하다",
        "ans": "월요일부터 금요일까지 한국어를 공부해요."
      }
    ]
  ],
  "make": [
    {
      "k": [
        "9시",
        "6시",
        "일하다"
      ],
      "a": "아침 9시부터 저녁 6시까지 일해요.",
      "e": "I work from 9 AM to 6 PM."
    },
    {
      "k": [
        "월요일",
        "금요일",
        "공부하다"
      ],
      "a": "월요일부터 금요일까지 한국어를 공부해요.",
      "e": "I study Korean from Monday to Friday."
    },
    {
      "k": [
        "12시",
        "1시",
        "점심"
      ],
      "a": "12시부터 1시까지 점심을 먹어요.",
      "e": "I eat lunch from 12 to 1."
    },
    {
      "k": [
        "아침",
        "저녁",
        "바쁘다"
      ],
      "a": "오늘은 아침부터 저녁까지 바빠요.",
      "e": "Today I am busy from morning till evening."
    }
  ],
  "vocab": [
    {
      "tag": "부터 ~ 까지",
      "icon": "📖",
      "q": "몇 시부터 몇 시까지 일해요?",
      "qen": "From what time to what time do you work?",
      "pat": "시간1 + 부터 + 시간2 + 까지",
      "items": [
        {
          "e": "🕘",
          "w": "9시",
          "g": "9 o'clock",
          "r": "9시부터",
          "b": false
        },
        {
          "e": "📅",
          "w": "월요일",
          "g": "Monday",
          "r": "월요일부터",
          "b": true
        },
        {
          "e": "🌅",
          "w": "아침",
          "g": "morning",
          "r": "아침부터",
          "b": true
        },
        {
          "e": "🗓️",
          "w": "1월",
          "g": "January",
          "r": "1월부터",
          "b": true
        },
        {
          "e": "🕕",
          "w": "6시",
          "g": "6 o'clock",
          "r": "6시까지",
          "b": false
        },
        {
          "e": "📅",
          "w": "금요일",
          "g": "Friday",
          "r": "금요일까지",
          "b": true
        }
      ]
    }
  ],
  "sit": [
    {
      "i": "👋",
      "t": "수업과 공부 시간",
      "v": "수업과 공부 시간",
      "q": "오늘 몇 시[[부터]] 몇 시[[까지]] 한국어를 공부해요?",
      "qen": "From what time to what time do you study Korean today?",
      "m": [
        "오전 10시[[부터]] 12시[[까지]] 공부해요.",
        "오후 2시[[부터]] 4시[[까지]] 도서관에 있어요."
      ],
      "memo": "1. Free talking — 활동판 없이 선생님과 묻고 답한다<br>2. 「몇 시부터 몇 시까지 일해요/공부해요?」<br>3. 쉬는 날 · 수업 시간으로 바꿔 묻기<br>4. 역할 바꾸기"
    },
    {
      "i": "💬",
      "t": "하루 일과와 수면",
      "v": "하루 일과와 수면",
      "q": "밤 몇 시[[부터]] 아침 몇 시[[까지]] 자요?",
      "qen": "From what time at night to what time in the morning do you sleep?",
      "m": [
        "밤 11시[[부터]] 아침 7시[[까지]] 자요.",
        "월요일[[부터]] 금요일[[까지]] 일찍 일어나요."
      ],
      "memo": "1. Free talking — 활동판 없이 선생님과 묻고 답한다<br>2. 「수업이 언제부터 언제까지 있어요?」 — 학생의 실제 시간표로<br>3. 방학 · 시험 기간으로 넓히기<br>4. 역할 바꾸기"
    }
  ],
  "wrap": {
    "ex": [
      {
        "ko": [
          "아침 9시[[부터]] 저녁 6시[[까지]] 일해요."
        ],
        "en": [
          "I work [[from]] 9 AM [[to]] 6 PM."
        ]
      },
      {
        "ko": [
          "월요일[[부터]] 금요일[[까지]] 학교에 가요."
        ],
        "en": [
          "I go to school [[from]] Monday [[to]] Friday."
        ]
      }
    ],
    "tips": [
      "<b>시작 시각·요일</b> → <span class=\"g\">시간1 + 부터</span> / <b>종료 시각·요일</b> → <span class=\"g2\">시간2 + 까지</span>",
      "시간, 요일, 날짜의 시작점(~부터)과 끝점(~까지)을 나타냅니다.",
      "대표 대화: \"몇 시부터 몇 시까지 일해요?\" → \"아침 9시부터 저녁 6시까지 일해요.\""
    ]
  }
});
