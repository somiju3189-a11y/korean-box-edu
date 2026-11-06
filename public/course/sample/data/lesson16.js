/* Lesson 16: 와/과 · 하고 · (이)랑 · 100% Authentic Situation-Matched Data */
LESSONS.push({
  "key": "와/과 · 하고 · (이)랑",
  "pos": "명사",
  "form": "와/과 · 하고 ·랑",
  "gpic": [
    {
      "e": "📖",
      "c": "와/과 · 하고 · (이)랑",
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
    "ko": "두 개 이상의 명사를 대등하게 연결하거나('~와/과, ~하고, ~(이)랑'), 누군가와 함께 행동함을 나타냅니다.",
    "en": "Connects nouns ('and') or indicates doing an action together ('with')."
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
    "q": "아침에 무엇[[하고]] 무엇을 먹어요? 누구[[랑]] 영화를 봐요?",
    "en": "What and what do you eat in the morning? Who do you watch a movie with?"
  },
  "en": "Conjunction & Accompaniment · \"~와/과 · ~하고 · ~(이)랑\" · 나열과 동반을 말해요",
  "prior": [],
  "pat": "명사1 + 와/과(하고, (이)랑) + 명사2",
  "hero": {
    "pic": [
      {
        "e": "🧑",
        "c": "와/과 · 하고 · (이)랑",
        "t": "navy"
      },
      {
        "e": "💬",
        "c": "명사",
        "t": "accent"
      }
    ],
    "ko": [
      "빵[[하고]] 우유를 먹어요.",
      "친구[[랑]] 같이 영화를 봐요."
    ],
    "en": [
      "I eat bread [[and]] milk.",
      "I watch a movie [[with]] my friend."
    ]
  },
  "ex": [
    {
      "label": "예문 ① · 음식 나열하기",
      "scene": "/course/sample/scenes/ex-16-1.svg",
      "ask": {
        "q": "아침에 무엇[[하고]] 무엇을 먹어요?",
        "en": "What do you eat for breakfast?"
      },
      "pic": [
        {
          "e": "🙋",
          "c": "와/과 · 하고 · (이)랑",
          "t": "navy"
        }
      ],
      "a": {
        "who": "A · 요리사",
        "ko": [
          "사라 씨, 아침에 보통 무엇을 먹어요?"
        ],
        "en": [
          "Sara, what do you usually eat in the morning?"
        ]
      },
      "b": {
        "who": "B · 사라",
        "ko": [
          "저는 빵[[하고]] 우유를 먹어요.",
          "가끔 사과[[와]] 바나나도 먹어요."
        ],
        "en": [
          "I eat bread [[and]] milk.",
          "Sometimes I also eat apples [[and]] bananas."
        ]
      },
      "morph": [
        "빵 + 하고 (받침 무관)",
        "사과 + 와 (받침 X)"
      ]
    },
    {
      "label": "예문 ② · 함께하는 사람 말하기",
      "scene": "/course/sample/scenes/ex-16-2.svg",
      "ask": {
        "q": "주말에 누구[[랑]] 영화를 봐요?",
        "en": "Who do you watch a movie with on the weekend?"
      },
      "pic": [
        {
          "e": "🗣️",
          "c": "와/과 · 하고 · (이)랑",
          "t": "accent"
        }
      ],
      "a": {
        "who": "A · 하준",
        "ko": [
          "미나 씨, 이번 주말에 누구[[랑]] 영화를 봐요?"
        ],
        "en": [
          "Mina, who are you watching a movie with this weekend?"
        ]
      },
      "b": {
        "who": "B · 미나",
        "ko": [
          "제 친구[[랑]] 같이 영화를 봐요.",
          "그리고 동생[[이랑]] 쇼핑도 해요."
        ],
        "en": [
          "I watch a movie [[with]] my friend.",
          "And I also go shopping [[with]] my younger sibling."
        ]
      },
      "morph": [
        "친구 + 랑 (받침 X)",
        "동생 + 이랑 (받침 O)"
      ]
    }
  ],
  "review": [
    {
      "ko": "아침 식사로 따뜻한 빵[[과]] 우유를 먹어요.",
      "base": "빵",
      "b": true,
      "f": "과"
    },
    {
      "ko": "주말 오후에 친한 친구[[와]] 영화관에 가요.",
      "base": "친구",
      "b": false,
      "f": "와"
    },
    {
      "ko": "식탁 위에 맛있는 사과[[하고]] 바나나가 놓여 있어요.",
      "base": "사과",
      "b": false,
      "f": "하고"
    },
    {
      "ko": "휴일에 귀여운 동생[[이랑]] 같이 쇼핑을 해요.",
      "base": "동생",
      "b": true,
      "f": "이랑"
    },
    {
      "ko": "가방 안에 한국어 책[[과]] 공책, 필통이 있어요.",
      "note": "받침 O: 과/이랑 | 받침 X: 와/랑 | 무관: 하고"
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
        "k": "받침 O (+ 과 / 이랑 / 하고)",
        "f": "+ 과",
        "ex": [
          [
            "책",
            "책과"
          ],
          [
            "빵",
            "빵과"
          ],
          [
            "동생",
            "동생과"
          ],
          [
            "선생님",
            "선생님과"
          ],
          [
            "신문",
            "신문과"
          ],
          [
            "라면",
            "라면과"
          ]
        ]
      },
      {
        "k": "받침 X (+ 와 / 랑 / 하고)",
        "f": "+ 와",
        "c": "g2",
        "ex": [
          [
            "커피",
            "커피와"
          ],
          [
            "우유",
            "우유와"
          ],
          [
            "친구",
            "친구와"
          ],
          [
            "누나",
            "누나와"
          ],
          [
            "사과",
            "사과와"
          ],
          [
            "의자",
            "의자와"
          ]
        ]
      }
    ]
  },
  "tips": [
    {
      "c": "",
      "h": "💡 TIP ① · 와/과 · 하고 · (이)랑 결합 규칙",
      "p": "<b>받침 O (+ 과 / 이랑 / 하고)</b>일 때는 <span class=\"g\">+ 과</span>, <b>받침 X (+ 와 / 랑 / 하고)</b>일 때는 <span class=\"g2\">+ 와</span> 형태를 씁니다.<br><br><span class=\"yes\">O</span> 책과 / 커피와"
    },
    {
      "c": "navy",
      "h": "💡 TIP ② · 핵심 의미와 쓰임",
      "p": "두 개 이상의 명사를 대등하게 연결하거나('~와/과, ~하고, ~(이)랑'), 누군가와 함께 행동함을 나타냅니다.<br><br>· 빵하고 우유를 먹어요.<br>· 친구랑 같이 영화를 봐요."
    },
    {
      "c": "teal",
      "h": "💡 TIP ③ · 실전 대화 팁",
      "p": "질문 <b>\"아침에 무엇하고 무엇을 먹어요? 누구랑 영화를 봐요?\"</b>에 대해 <b>명사1 + 와/과(하고, (이)랑) + 명사2</b> 패턴으로 자연스럽게 답해 보세요."
    }
  ],
  "tipsEn": [
    {
      "c": "",
      "h": "💡 TIP ① · 와/과 · 하고 · (이)랑 Conjugation Rule",
      "p": "Use <span class=\"g\">+ 과</span> for <b>받침 O (+ 과 / 이랑 / 하고)</b> and <span class=\"g2\">+ 와</span> for <b>받침 X (+ 와 / 랑 / 하고)</b>.<br><br><span class=\"yes\">O</span> 책과 / 커피와"
    },
    {
      "c": "navy",
      "h": "💡 TIP ② · Core Meaning & Usage",
      "p": "Connects nouns ('and') or indicates doing an action together ('with').<br><br>· I eat bread and milk.<br>· I watch a movie with my friend."
    },
    {
      "c": "teal",
      "h": "💡 TIP ③ · Conversation Practice",
      "p": "Practice answering <b>\"What and what do you eat in the morning? Who do you watch a movie with?\"</b> using the pattern <b>명사1 + 와/과(하고, (이)랑) + 명사2</b>."
    }
  ],
  "words": [
    {
      "b": "책",
      "r": "책과",
      "t": "받침 O (+ 과 / 이랑 / 하고)"
    },
    {
      "b": "빵",
      "r": "빵과",
      "t": "받침 O (+ 과 / 이랑 / 하고)"
    },
    {
      "b": "동생",
      "r": "동생과",
      "t": "받침 O (+ 과 / 이랑 / 하고)"
    },
    {
      "b": "선생님",
      "r": "선생님과",
      "t": "받침 O (+ 과 / 이랑 / 하고)"
    },
    {
      "b": "신문",
      "r": "신문과",
      "t": "받침 O (+ 과 / 이랑 / 하고)"
    },
    {
      "b": "라면",
      "r": "라면과",
      "t": "받침 O (+ 과 / 이랑 / 하고)"
    },
    {
      "b": "커피",
      "r": "커피와",
      "t": "받침 X (+ 와 / 랑 / 하고)"
    },
    {
      "b": "우유",
      "r": "우유와",
      "t": "받침 X (+ 와 / 랑 / 하고)"
    },
    {
      "b": "친구",
      "r": "친구와",
      "t": "받침 X (+ 와 / 랑 / 하고)"
    },
    {
      "b": "누나",
      "r": "누나와",
      "t": "받침 X (+ 와 / 랑 / 하고)"
    },
    {
      "b": "사과",
      "r": "사과와",
      "t": "받침 X (+ 와 / 랑 / 하고)"
    },
    {
      "b": "의자",
      "r": "의자와",
      "t": "받침 X (+ 와 / 랑 / 하고)"
    }
  ],
  "words2": [
    {
      "tag": "🔁 WORD DRILL ② <i>2판 · 간식 메뉴 및 장바구니</i>",
      "sub": "실제 생활에서 가장 자주 쓰이는 심화 어휘들입니다. 소리 내어 말해 보세요.",
      "items": [
        {
          "b": "신문",
          "r": "신문과",
          "t": "받침 O (+ 과 / 이랑)"
        },
        {
          "b": "딸기",
          "r": "딸기와",
          "t": "받침 O (+ 과 / 이랑)"
        },
        {
          "b": "라면",
          "r": "라면과",
          "t": "받침 O (+ 과 / 이랑)"
        },
        {
          "b": "김밥",
          "r": "김밥과",
          "t": "받침 O (+ 과 / 이랑)"
        },
        {
          "b": "수박",
          "r": "수박과",
          "t": "받침 O (+ 과 / 이랑)"
        },
        {
          "b": "포도",
          "r": "포도와",
          "t": "받침 O (+ 과 / 이랑)"
        },
        {
          "b": "피자",
          "r": "피자와",
          "t": "받침 X (+ 와 / 랑)"
        },
        {
          "b": "콜라",
          "r": "콜라와",
          "t": "받침 X (+ 와 / 랑)"
        },
        {
          "b": "사이다",
          "r": "사이다와",
          "t": "받침 X (+ 와 / 랑)"
        },
        {
          "b": "과자",
          "r": "과자와",
          "t": "받침 X (+ 와 / 랑)"
        },
        {
          "b": "케이크",
          "r": "케이크와",
          "t": "받침 X (+ 와 / 랑)"
        },
        {
          "b": "커피",
          "r": "커피와",
          "t": "받침 X (+ 와 / 랑)"
        }
      ]
    }
  ],
  "bingo": [
    {
      "tag": "1판 · 기본 식음료 및 동반자",
      "pairs": [
        [
          "책",
          "책과"
        ],
        [
          "빵",
          "빵과"
        ],
        [
          "동생",
          "동생과"
        ],
        [
          "선생님",
          "선생님과"
        ],
        [
          "신문",
          "신문과"
        ],
        [
          "라면",
          "라면과"
        ],
        [
          "커피",
          "커피와"
        ],
        [
          "우유",
          "우유와"
        ],
        [
          "친구",
          "친구와"
        ],
        [
          "누나",
          "누나와"
        ],
        [
          "사과",
          "사과와"
        ],
        [
          "의자",
          "의자와"
        ]
      ]
    },
    {
      "tag": "2판 · 간식 메뉴 및 장바구니",
      "c": "g2",
      "pairs": [
        [
          "신문",
          "신문과"
        ],
        [
          "딸기",
          "딸기와"
        ],
        [
          "라면",
          "라면과"
        ],
        [
          "김밥",
          "김밥과"
        ],
        [
          "수박",
          "수박과"
        ],
        [
          "포도",
          "포도와"
        ],
        [
          "피자",
          "피자와"
        ],
        [
          "콜라",
          "콜라와"
        ],
        [
          "사이다",
          "사이다와"
        ],
        [
          "과자",
          "과자와"
        ],
        [
          "케이크",
          "케이크와"
        ],
        [
          "커피",
          "커피와"
        ]
      ]
    }
  ],
  "relays": [
    [
      {
        "t": "사라 씨, 아침에 보통 무엇을 먹어요?"
      },
      {
        "base": "책",
        "ans": "책과."
      },
      {
        "base": "신문",
        "ans": "신문과."
      }
    ],
    [
      {
        "t": "아침에 무엇하고 무엇을 먹어요? 누구랑 영화를 봐요?"
      },
      {
        "base": "빵",
        "ans": "빵과."
      },
      {
        "base": "우유",
        "ans": "우유와."
      }
    ],
    [
      {
        "t": "미나 씨, 이번 주말에 누구랑 영화를 봐요?"
      },
      {
        "base": "빵 · 우유 · 먹다",
        "ans": "아침에 빵하고 우유를 먹어요."
      },
      {
        "base": "친구 · 영화 · 보다",
        "ans": "주말에 친구랑 영화를 봐요."
      }
    ]
  ],
  "make": [
    {
      "k": [
        "빵",
        "우유",
        "먹다"
      ],
      "a": "아침에 빵하고 우유를 먹어요.",
      "e": "I eat bread and milk in the morning."
    },
    {
      "k": [
        "친구",
        "영화",
        "보다"
      ],
      "a": "주말에 친구랑 영화를 봐요.",
      "e": "I watch a movie with my friend on the weekend."
    },
    {
      "k": [
        "책",
        "연필",
        "사다"
      ],
      "a": "문구점에서 책과 연필을 사요.",
      "e": "I buy a book and a pencil at the stationery store."
    },
    {
      "k": [
        "동생",
        "공원",
        "가다"
      ],
      "a": "동생이랑 같이 공원에 가요.",
      "e": "I go to the park together with my younger sibling."
    },
    {
      "k": [
        "사과",
        "바나나",
        "사다"
      ],
      "a": "시장에서 사과와 바나나를 사요.",
      "e": "I buy apples and bananas at the market."
    },
    {
      "k": [
        "선생님",
        "이야기하다"
      ],
      "a": "방과 후에 선생님과 이야기해요.",
      "e": "I talk with the teacher after class."
    },
    {
      "k": [
        "커피",
        "케이크",
        "주문하다"
      ],
      "a": "카페에서 커피하고 케이크를 주문해요.",
      "e": "I order coffee and cake at the cafe."
    },
    {
      "k": [
        "형",
        "운동하다"
      ],
      "a": "주말마다 형이랑 운동해요.",
      "e": "I exercise with my older brother every weekend."
    }
  ],
  "vocab": [
    {
      "tag": "와/과 · 하고 · (이)랑",
      "icon": "📖",
      "q": "아침에 무엇하고 무엇을 먹어요? 누구랑 영화를 봐요?",
      "qen": "What and what do you eat in the morning? Who do you watch a movie with?",
      "pat": "명사1 + 와/과(하고, (이)랑) + 명사2",
      "items": [
        {
          "e": "📕",
          "w": "책",
          "g": "book",
          "r": "책과",
          "b": true
        },
        {
          "e": "🥐",
          "w": "빵",
          "g": "bread",
          "r": "빵과",
          "b": true
        },
        {
          "e": "👦",
          "w": "동생",
          "g": "younger sibling",
          "r": "동생과",
          "b": true
        },
        {
          "e": "👩‍🏫",
          "w": "선생님",
          "g": "teacher",
          "r": "선생님과",
          "b": true
        },
        {
          "e": "📰",
          "w": "신문",
          "g": "newspaper",
          "r": "신문과",
          "b": true
        },
        {
          "e": "🍜",
          "w": "라면",
          "g": "ramen",
          "r": "라면과",
          "b": true
        }
      ]
    }
  ],
  "sit": [
    {
      "i": "👋",
      "t": "가방 속 물건 두 가지",
      "v": "가방 속 물건 두 가지",
      "q": "지금 가방 안에 무엇[[하고]] 무엇이 있어요?",
      "qen": "What two things are in your bag right now?",
      "m": [
        "가방 안에 책[[하고]] 연필이 있어요.",
        "지갑[[과]] 휴대폰이 있어요."
      ],
      "memo": "1. 교사 「마트에서 뭐 사요?」 → 학생이 둘을 골라 「○○하고 □□을/를 사요」<br>2. 하고 · (이)랑 · 와/과를 바꿔 가며<br>3. 역할 바꾸기 — 교사도 둘을 골라 말한다"
    },
    {
      "i": "💬",
      "t": "함께 활동하는 사람",
      "v": "함께 활동하는 사람",
      "q": "주말에 누구[[랑]] 같이 시간을 보내요?",
      "qen": "Who do you spend time with on the weekend?",
      "m": [
        "주말에 친구[[랑]] 같이 카페에 가요.",
        "가족[[하고]] 저녁을 먹어요."
      ],
      "memo": "1. Free talking — 활동판 없이 선생님과 묻고 답한다<br>2. 「주말에 누구하고 △△아요/어요?」<br>3. 영화 · 밥 · 운동으로 바꿔 묻기<br>4. 역할 바꾸기"
    }
  ],
  "wrap": {
    "ex": [
      {
        "ko": [
          "빵[[하고]] 우유를 먹어요."
        ],
        "en": [
          "I eat bread [[and]] milk."
        ]
      },
      {
        "ko": [
          "친구[[랑]] 같이 영화를 봐요."
        ],
        "en": [
          "I watch a movie [[with]] my friend."
        ]
      }
    ],
    "tips": [
      "<b>받침 O (+ 과 / 이랑 / 하고)</b> → <span class=\"g\">+ 과</span> / <b>받침 X (+ 와 / 랑 / 하고)</b> → <span class=\"g2\">+ 와</span>",
      "두 개 이상의 명사를 대등하게 연결하거나('~와/과, ~하고, ~(이)랑'), 누군가와 함께 행동함을 나타냅니다.",
      "대표 대화: \"아침에 무엇하고 무엇을 먹어요? 누구랑 영화를 봐요?\" → \"빵하고 우유를 먹어요.\""
    ]
  }
});
