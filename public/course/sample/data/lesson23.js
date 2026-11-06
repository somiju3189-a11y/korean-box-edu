/* Lesson 23: -았/었- · 100% Authentic Situation-Matched Data */
LESSONS.push({
  "key": "-았/었-",
  "pos": "동사 · 형용사",
  "form": "-았/었-",
  "gpic": [
    {
      "e": "📖",
      "c": "-았/었-",
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
    "ko": "동사나 형용사 어간 뒤에 붙어 이미 일어난 과거의 동작이나 상태를 나타냅니다.",
    "en": "Past tense suffix attached to verb or adjective stems ('did / was / were')."
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
    "q": "어제 무엇을 [[했어요]]? 주말에 누구를 [[만났어요]]?",
    "en": "What did you do yesterday? Who did you meet on the weekend?"
  },
  "en": "Past Tense · \"-았/었-\" · 이미 지나간 과거의 일을 말해요",
  "prior": [],
  "pat": "동사/형용사 + -았/었어요.",
  "hero": {
    "pic": [
      {
        "e": "🧑",
        "c": "-았/었-",
        "t": "navy"
      },
      {
        "e": "💬",
        "c": "동사 · 형용사",
        "t": "accent"
      }
    ],
    "ko": [
      "어제 친구를 만[[났어요]].",
      "집에서 재미있는 영화를 [[봤어요]]."
    ],
    "en": [
      "I [[met]] a friend yesterday.",
      "I [[watched]] an interesting movie at home."
    ]
  },
  "ex": [
    {
      "label": "예문 ① · 어제 한 일 이야기",
      "scene": "/course/sample/scenes/ex-23-1.svg",
      "ask": {
        "q": "어제 누구를 만[[났어요]]?",
        "en": "Who did you meet yesterday?"
      },
      "pic": [
        {
          "e": "🙋",
          "c": "-았/었-",
          "t": "navy"
        }
      ],
      "a": {
        "who": "A · 하준",
        "ko": [
          "유진 씨, 어제 주말에 무엇을 [[했어요]]?"
        ],
        "en": [
          "Yujin, what did you do yesterday on the weekend?"
        ]
      },
      "b": {
        "who": "B · 유진",
        "ko": [
          "어제 오랜만에 고향 친구를 만[[났어요]].",
          "같이 맛있는 점심을 먹[[었어요]]."
        ],
        "en": [
          "Yesterday I [[met]] a hometown friend after a long time.",
          "We [[ate]] a delicious lunch together."
        ]
      },
      "morph": [
        "만나 + 았어요 → 만났어요",
        "먹 + 었어요 → 먹었어요"
      ]
    },
    {
      "label": "예문 ② · 지난 저녁 여가",
      "scene": "/course/sample/scenes/ex-23-2.svg",
      "ask": {
        "q": "어제 저녁에 무슨 영화를 [[봤어요]]?",
        "en": "What movie did you watch yesterday evening?"
      },
      "pic": [
        {
          "e": "🗣️",
          "c": "-았/었-",
          "t": "accent"
        }
      ],
      "a": {
        "who": "A · 미나",
        "ko": [
          "리에 씨, 어제 저녁에 집에서 뭐 [[했어요]]?"
        ],
        "en": [
          "Rie, what did you do at home yesterday evening?"
        ]
      },
      "b": {
        "who": "B · 리에",
        "ko": [
          "가족하고 한국 영화를 [[봤어요]].",
          "영화가 정말 재미있[[었어요]]."
        ],
        "en": [
          "I [[watched]] a Korean movie with my family.",
          "The movie [[was]] really interesting."
        ]
      },
      "morph": [
        "보 + 았어요 → 봤어요",
        "재미있 + 었어요"
      ]
    }
  ],
  "review": [
    {
      "ko": "어제 방과 후에 카페에서 고향 친구를 [[만났어요]].",
      "base": "만나다",
      "b": false,
      "f": "만났어요"
    },
    {
      "ko": "주말 저녁에 가족과 함께 한국 영화를 [[봤어요]].",
      "base": "보다",
      "b": false,
      "f": "봤어요"
    },
    {
      "ko": "식당에서 친구들과 불고기를 정말 맛있게 [[먹었어요]].",
      "base": "먹다",
      "b": true,
      "f": "먹었어요"
    },
    {
      "ko": "도서관에서 어제 시험공부를 열심히 [[했어요]].",
      "base": "공부하다",
      "b": false,
      "f": "공부했어요"
    },
    {
      "ko": "지난 주말 여행은 날씨가 참 [[좋았어요]].",
      "note": "과거의 일: ㅏ, ㅗ → -았어요 / 그 외 → -었어요 / 하다 → 했어요"
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
        "k": "ㅏ, ㅗ 모음 어간",
        "f": "+ -았어요",
        "ex": [
          [
            "만나다",
            "만났어요"
          ],
          [
            "보다",
            "봤어요"
          ],
          [
            "가다",
            "갔어요"
          ],
          [
            "좋다",
            "좋았어요"
          ],
          [
            "사다",
            "샀어요"
          ],
          [
            "오다",
            "왔어요"
          ]
        ]
      },
      {
        "k": "그 외 모음 / 하다 어간",
        "f": "+ -었어요 / 했어요",
        "c": "g2",
        "ex": [
          [
            "먹다",
            "먹었어요"
          ],
          [
            "읽다",
            "읽었어요"
          ],
          [
            "마시다",
            "마셨어요"
          ],
          [
            "배우다",
            "배웠어요"
          ],
          [
            "공부하다",
            "공부했어요"
          ],
          [
            "운동하다",
            "운동했어요"
          ]
        ]
      }
    ]
  },
  "tips": [
    {
      "c": "",
      "h": "💡 TIP ① · -았/었- 결합 규칙",
      "p": "<b>ㅏ, ㅗ 모음 어간</b>일 때는 <span class=\"g\">+ -았어요</span>, <b>그 외 모음 / 하다 어간</b>일 때는 <span class=\"g2\">+ -었어요 / 했어요</span> 형태를 씁니다.<br><br><span class=\"yes\">O</span> 만났어요 / 먹었어요"
    },
    {
      "c": "navy",
      "h": "💡 TIP ② · 핵심 의미와 쓰임",
      "p": "동사나 형용사 어간 뒤에 붙어 이미 일어난 과거의 동작이나 상태를 나타냅니다.<br><br>· 어제 친구를 만났어요.<br>· 집에서 재미있는 영화를 봤어요."
    },
    {
      "c": "teal",
      "h": "💡 TIP ③ · 실전 대화 팁",
      "p": "질문 <b>\"어제 무엇을 했어요? 주말에 누구를 만났어요?\"</b>에 대해 <b>동사/형용사 + -았/었어요.</b> 패턴으로 자연스럽게 답해 보세요."
    }
  ],
  "tipsEn": [
    {
      "c": "",
      "h": "💡 TIP ① · -았/었- Conjugation Rule",
      "p": "Use <span class=\"g\">+ -았어요</span> for <b>ㅏ, ㅗ 모음 어간</b> and <span class=\"g2\">+ -었어요 / 했어요</span> for <b>그 외 모음 / 하다 어간</b>.<br><br><span class=\"yes\">O</span> 만났어요 / 먹었어요"
    },
    {
      "c": "navy",
      "h": "💡 TIP ② · Core Meaning & Usage",
      "p": "Past tense suffix attached to verb or adjective stems ('did / was / were').<br><br>· I met a friend yesterday.<br>· I watched an interesting movie at home."
    },
    {
      "c": "teal",
      "h": "💡 TIP ③ · Conversation Practice",
      "p": "Practice answering <b>\"What did you do yesterday? Who did you meet on the weekend?\"</b> using the pattern <b>동사/형용사 + -았/었어요.</b>."
    }
  ],
  "words": [
    {
      "b": "만나다",
      "r": "만났어요",
      "t": "ㅏ, ㅗ 모음 어간"
    },
    {
      "b": "보다",
      "r": "봤어요",
      "t": "ㅏ, ㅗ 모음 어간"
    },
    {
      "b": "가다",
      "r": "갔어요",
      "t": "ㅏ, ㅗ 모음 어간"
    },
    {
      "b": "좋다",
      "r": "좋았어요",
      "t": "ㅏ, ㅗ 모음 어간"
    },
    {
      "b": "사다",
      "r": "샀어요",
      "t": "ㅏ, ㅗ 모음 어간"
    },
    {
      "b": "오다",
      "r": "왔어요",
      "t": "ㅏ, ㅗ 모음 어간"
    },
    {
      "b": "먹다",
      "r": "먹었어요",
      "t": "그 외 모음 / 하다 어간"
    },
    {
      "b": "읽다",
      "r": "읽었어요",
      "t": "그 외 모음 / 하다 어간"
    },
    {
      "b": "마시다",
      "r": "마셨어요",
      "t": "그 외 모음 / 하다 어간"
    },
    {
      "b": "배우다",
      "r": "배웠어요",
      "t": "그 외 모음 / 하다 어간"
    },
    {
      "b": "공부하다",
      "r": "공부했어요",
      "t": "그 외 모음 / 하다 어간"
    },
    {
      "b": "운동하다",
      "r": "운동했어요",
      "t": "그 외 모음 / 하다 어간"
    }
  ],
  "words2": [
    {
      "tag": "🔁 WORD DRILL ② <i>2판 · 지난 주말 여행 및 여가</i>",
      "sub": "실제 생활에서 가장 자주 쓰이는 심화 어휘들입니다. 소리 내어 말해 보세요.",
      "items": [
        {
          "b": "타다",
          "r": "탔어요",
          "t": "ㅏ, ㅗ 모음 (여행/쇼핑)"
        },
        {
          "b": "내리다",
          "r": "내렸어요",
          "t": "ㅏ, ㅗ 모음 (여행/쇼핑)"
        },
        {
          "b": "사다",
          "r": "샀어요",
          "t": "ㅏ, ㅗ 모음 (여행/쇼핑)"
        },
        {
          "b": "받다",
          "r": "받았어요",
          "t": "ㅏ, ㅗ 모음 (여행/쇼핑)"
        },
        {
          "b": "찾다",
          "r": "찾았어요",
          "t": "ㅏ, ㅗ 모음 (여행/쇼핑)"
        },
        {
          "b": "앉다",
          "r": "앉았어요",
          "t": "ㅏ, ㅗ 모음 (여행/쇼핑)"
        },
        {
          "b": "보내다",
          "r": "보냈어요",
          "t": "그 외 모음 / 하다"
        },
        {
          "b": "쉬다",
          "r": "쉬었어요",
          "t": "그 외 모음 / 하다"
        },
        {
          "b": "전화하다",
          "r": "전화했어요",
          "t": "그 외 모음 / 하다"
        },
        {
          "b": "청소하다",
          "r": "청소했어요",
          "t": "그 외 모음 / 하다"
        },
        {
          "b": "요리하다",
          "r": "요리했어요",
          "t": "그 외 모음 / 하다"
        },
        {
          "b": "산책하다",
          "r": "산책했어요",
          "t": "그 외 모음 / 하다"
        }
      ]
    }
  ],
  "bingo": [
    {
      "tag": "1판 · 어제 일과 및 만남",
      "pairs": [
        [
          "만나다",
          "만났어요"
        ],
        [
          "보다",
          "봤어요"
        ],
        [
          "가다",
          "갔어요"
        ],
        [
          "좋다",
          "좋았어요"
        ],
        [
          "사다",
          "샀어요"
        ],
        [
          "오다",
          "왔어요"
        ],
        [
          "먹다",
          "먹었어요"
        ],
        [
          "읽다",
          "읽었어요"
        ],
        [
          "마시다",
          "마셨어요"
        ],
        [
          "배우다",
          "배웠어요"
        ],
        [
          "공부하다",
          "공부했어요"
        ],
        [
          "운동하다",
          "운동했어요"
        ]
      ]
    },
    {
      "tag": "2판 · 지난 주말 여행 및 여가",
      "c": "g2",
      "pairs": [
        [
          "타다",
          "탔어요"
        ],
        [
          "내리다",
          "내렸어요"
        ],
        [
          "사다",
          "샀어요"
        ],
        [
          "받다",
          "받았어요"
        ],
        [
          "찾다",
          "찾았어요"
        ],
        [
          "앉다",
          "앉았어요"
        ],
        [
          "보내다",
          "보냈어요"
        ],
        [
          "쉬다",
          "쉬었어요"
        ],
        [
          "전화하다",
          "전화했어요"
        ],
        [
          "청소하다",
          "청소했어요"
        ],
        [
          "요리하다",
          "요리했어요"
        ],
        [
          "산책하다",
          "산책했어요"
        ]
      ]
    }
  ],
  "relays": [
    [
      {
        "t": "유진 씨, 어제 주말에 무엇을 했어요?"
      },
      {
        "base": "만나다",
        "ans": "만났어요."
      },
      {
        "base": "사다",
        "ans": "샀어요."
      }
    ],
    [
      {
        "t": "어제 무엇을 했어요? 주말에 누구를 만났어요?"
      },
      {
        "base": "보다",
        "ans": "봤어요."
      },
      {
        "base": "읽다",
        "ans": "읽었어요."
      }
    ],
    [
      {
        "t": "리에 씨, 어제 저녁에 집에서 뭐 했어요?"
      },
      {
        "base": "어제 · 친구 · 만나다",
        "ans": "어제 친구를 만났어요."
      },
      {
        "base": "주말 · 영화 · 보다",
        "ans": "주말에 영화를 봤어요."
      }
    ]
  ],
  "make": [
    {
      "k": [
        "어제",
        "친구",
        "만나다"
      ],
      "a": "어제 친구를 만났어요.",
      "e": "I met a friend yesterday."
    },
    {
      "k": [
        "주말",
        "영화",
        "보다"
      ],
      "a": "주말에 영화를 봤어요.",
      "e": "I watched a movie on the weekend."
    },
    {
      "k": [
        "아침",
        "빵",
        "먹다"
      ],
      "a": "오늘 아침에 빵을 먹었어요.",
      "e": "I ate bread this morning."
    },
    {
      "k": [
        "도서관",
        "공부하다"
      ],
      "a": "어제 도서관에서 한국어를 공부했어요.",
      "e": "I studied Korean at the library yesterday."
    },
    {
      "k": [
        "지난주",
        "제주도",
        "가다"
      ],
      "a": "지난주에 제주도에 갔어요.",
      "e": "I went to Jeju Island last week."
    },
    {
      "k": [
        "어제 날씨",
        "좋다"
      ],
      "a": "어제는 날씨가 아주 좋았어요.",
      "e": "The weather was very nice yesterday."
    },
    {
      "k": [
        "카페",
        "커피",
        "마시다"
      ],
      "a": "카페에서 시원한 커피를 마셨어요.",
      "e": "I drank iced coffee at a cafe."
    },
    {
      "k": [
        "어젯밤",
        "푹",
        "자다"
      ],
      "a": "어젯밤에 일찍 푹 잤어요.",
      "e": "I slept deeply and early last night."
    }
  ],
  "vocab": [
    {
      "tag": "-았/었-",
      "icon": "📖",
      "q": "어제 무엇을 했어요? 주말에 누구를 만났어요?",
      "qen": "What did you do yesterday? Who did you meet on the weekend?",
      "pat": "동사/형용사 + -았/었어요.",
      "items": [
        {
          "e": "🤝",
          "w": "만나다",
          "g": "to meet",
          "r": "만났어요",
          "b": false
        },
        {
          "e": "👀",
          "w": "보다",
          "g": "to watch / see",
          "r": "봤어요",
          "b": false
        },
        {
          "e": "🚶",
          "w": "가다",
          "g": "to go",
          "r": "갔어요",
          "b": false
        },
        {
          "e": "👍",
          "w": "좋다",
          "g": "to be good / nice",
          "r": "좋았어요",
          "b": false
        },
        {
          "e": "🛍️",
          "w": "사다",
          "g": "to buy",
          "r": "샀어요",
          "b": false
        },
        {
          "e": "🚶",
          "w": "오다",
          "g": "to come",
          "r": "왔어요",
          "b": false
        }
      ]
    }
  ],
  "sit": [
    {
      "i": "👋",
      "t": "어제 한 일",
      "v": "어제 한 일",
      "q": "어제 어디에 [[갔어요]]? 무엇을 [[먹었어요]]?",
      "qen": "Where did you go yesterday? What did you eat?",
      "m": [
        "어제 도서관에 [[갔어요]].",
        "식당에서 불고기를 [[먹었어요]]."
      ],
      "memo": "1. Free talking — 활동판 없이 선생님과 묻고 답한다<br>2. 「어제 뭐 했어요?」 → 두 문장(장소 · 한 일)<br>3. 주말 · 지난 방학으로 바꿔 묻기<br>4. 역할 바꾸기"
    },
    {
      "i": "💬",
      "t": "지난 주말과 방학",
      "v": "지난 주말과 방학",
      "q": "지난 주말에 누구를 [[만났어요]]? 무엇을 [[했어요]]?",
      "qen": "Who did you meet last weekend? What did you do?",
      "m": [
        "지난 주말에 친구를 [[만났어요]].",
        "같이 영화를 [[봤어요]]."
      ],
      "memo": "1. Free talking — 활동판 없이 선생님과 묻고 답한다<br>2. 「주말에 어땠어요?」 → 한 일 + 기분<br>3. 「왜요?」 대신 「그래서요?」로 이어 묻기<br>4. 역할 바꾸기"
    }
  ],
  "wrap": {
    "ex": [
      {
        "ko": [
          "어제 친구를 만[[났어요]]."
        ],
        "en": [
          "I [[met]] a friend yesterday."
        ]
      },
      {
        "ko": [
          "집에서 재미있는 영화를 [[봤어요]]."
        ],
        "en": [
          "I [[watched]] an interesting movie at home."
        ]
      }
    ],
    "tips": [
      "<b>ㅏ, ㅗ 모음 어간</b> → <span class=\"g\">+ -았어요</span> / <b>그 외 모음 / 하다 어간</b> → <span class=\"g2\">+ -었어요 / 했어요</span>",
      "동사나 형용사 어간 뒤에 붙어 이미 일어난 과거의 동작이나 상태를 나타냅니다.",
      "대표 대화: \"어제 무엇을 했어요? 주말에 누구를 만났어요?\" → \"어제 친구를 만났어요.\""
    ]
  }
});
