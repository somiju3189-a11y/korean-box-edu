/* 1~30과 전체 CHECKB · 외국인 학습자 주의점 및 정오(✓/✕) 비교 데이터 */
const CHECKB = {
  "이에요/예요": {
    "pt": [
      {
        "k": "fix",
        "p": [
          ["지민예요", "지민이에요"],
          ["의자이에요", "의자예요"]
        ],
        "en": "People’s names and nouns follow the same 받침 rule (받침 O + 이에요 / 받침 X + 예요)"
      },
      {
        "k": "to",
        "p": [
          ["학생이에요.", "학생이에요?"]
        ],
        "en": "A question — keep the same word order and raise your voice at the end"
      }
    ]
  },
  "은/는": {
    "pt": [
      {
        "k": "fix",
        "p": [
          ["저은 학생이에요", "저는 학생이에요"],
          ["선생님는 한국 사람이에요", "선생님은 한국 사람이에요"]
        ],
        "en": "Check the final consonant (받침 O + 은 / 받침 X + 는)"
      },
      {
        "k": "to",
        "p": [
          ["형은 회사원이에요.", "동생은 대학생이에요."]
        ],
        "en": "Use 은/는 to introduce a topic or contrast two subjects"
      }
    ]
  },
  "이/가 있어요/없어요": {
    "pt": [
      {
        "k": "fix",
        "p": [
          ["책를 있어요", "책이 있어요"],
          ["시계를 없어요", "시계가 없어요"]
        ],
        "en": "있어요/없어요 takes the subject particle 이/가, never 을/를"
      }
    ]
  },
  "이/가 아니에요": {
    "pt": [
      {
        "k": "fix",
        "p": [
          ["학생 아니에요 (구어 생략)", "학생이 아니에요"],
          ["커피이 아니에요", "커피가 아니에요"]
        ],
        "en": "Attach 이 (after consonant) or 가 (after vowel) before 아니에요"
      }
    ]
  },
  "-아/어요": {
    "pt": [
      {
        "k": "fix",
        "p": [
          ["가아요", "가요"],
          ["공부하어요", "공부해요"]
        ],
        "en": "Contract identical vowels (가+아요 → 가요) and change 하다 to 해요"
      }
    ]
  },
  "을/를": {
    "pt": [
      {
        "k": "fix",
        "p": [
          ["비빔밥를 먹어요", "비빔밥을 먹어요"],
          ["커피을 마셔요", "커피를 마셔요"]
        ],
        "en": "Attach 을 after a final consonant (받침 O) and 를 after a vowel (받침 X)"
      }
    ]
  },
  "이/가": {
    "pt": [
      {
        "k": "fix",
        "p": [
          ["날씨를 좋아요", "날씨가 좋아요"],
          ["꽃을 예뻐요", "꽃이 예뻐요"]
        ],
        "en": "Descriptive adjectives (좋다, 예쁘다, 맛있다) take the subject marker 이/가"
      },
      {
        "k": "to",
        "p": [
          ["저 + 가 → 제가", "나 + 가 → 내가"]
        ],
        "en": "Pronouns change form before 가 (제가, 내가, 누가)"
      }
    ]
  },
  "에 (장소)": {
    "pt": [
      {
        "k": "fix",
        "p": [
          ["학교에서 가요", "학교에 가요"],
          ["책상 위에서 있어요", "책상 위에 있어요"]
        ],
        "en": "Use 에 (not 에서) with movement verbs (가다/오다) and existence (있다/없다)"
      }
    ]
  },
  "에서": {
    "pt": [
      {
        "k": "fix",
        "p": [
          ["도서관에 공부해요", "도서관에서 공부해요"],
          ["식당에 밥을 먹어요", "식당에서 밥을 먹어요"]
        ],
        "en": "Use 에서 (not 에) for the place where an action or activity happens"
      }
    ]
  },
  "에 (시간)": {
    "pt": [
      {
        "k": "fix",
        "p": [
          ["오늘에 만나요", "오늘 만나요"],
          ["내일에 가요", "내일 가요"]
        ],
        "en": "Never attach 에 to 오늘 (today), 내일 (tomorrow), 어제 (yesterday), or 지금 (now)"
      }
    ]
  },
  "(으)로 (수단·방향)": {
    "pt": [
      {
        "k": "fix",
        "p": [
          ["지하철으로 가요", "지하철로 가요"],
          ["연필으로 써요", "연필로 써요"]
        ],
        "en": "Nouns ending in ㄹ 받침 (지하철, 연필, 한글) take 로, not 으로"
      }
    ]
  },
  "에서 ~까지": {
    "pt": [
      {
        "k": "fix",
        "p": [
          ["서울부터 부산까지 (장소)", "서울에서 부산까지"]
        ],
        "en": "Use 에서 ~까지 for starting and ending places ('from Place A to Place B')"
      }
    ]
  },
  "부터 ~까지": {
    "pt": [
      {
        "k": "fix",
        "p": [
          ["9시에서 6시까지 일해요", "9시부터 6시까지 일해요"]
        ],
        "en": "Use 부터 ~까지 for starting and ending times ('from Time A until Time B')"
      }
    ]
  },
  "에게/한테": {
    "pt": [
      {
        "k": "fix",
        "p": [
          ["선생님한테 드려요", "선생님께 드려요"],
          ["학교한테 가요", "학교에 가요"]
        ],
        "en": "Use 께 for elders/teachers (honorific), and use 에 for inanimate places"
      }
    ]
  },
  "도": {
    "pt": [
      {
        "k": "fix",
        "p": [
          ["저은도 학생이에요", "저도 학생이에요"],
          ["커피를도 마셔요", "커피도 마셔요"]
        ],
        "en": "도 replaces 은/는, 이/가, and 을/를 directly — do not stack them"
      }
    ]
  },
  "와/과 · 하고 · (이)랑": {
    "pt": [
      {
        "k": "fix",
        "p": [
          ["빵와 우유", "빵과 우유"],
          ["친구이랑 가요", "친구랑 가요"]
        ],
        "en": "받침 O takes 과/이랑; 받침 X takes 와/랑; 하고 works after any noun"
      }
    ]
  },
  "만": {
    "pt": [
      {
        "k": "fix",
        "p": [
          ["커피를만 마셔요", "커피만 마셔요"],
          ["집만에 있어요", "집에만 있어요"]
        ],
        "en": "만 replaces 이/가 and 을/를, but comes AFTER location/recipient markers (에만, 한테만)"
      }
    ]
  },
  "(이)나": {
    "pt": [
      {
        "k": "fix",
        "p": [
          ["빵나 밥을 먹어요", "빵이나 밥을 먹어요"],
          ["커피이나 주스를 마셔요", "커피나 주스를 마셔요"]
        ],
        "en": "Attach 이나 after a final consonant (받침 O) and 나 after a vowel (받침 X)"
      }
    ]
  },
  "마다": {
    "pt": [
      {
        "k": "fix",
        "p": [
          ["아침에마다 운동해요", "아침마다 운동해요"]
        ],
        "en": "Attach 마다 directly to the time noun without 에"
      }
    ]
  },
  "의": {
    "pt": [
      {
        "k": "fix",
        "p": [
          ["저의 가방 (구어)", "제 가방"],
          ["나의 이름 (구어)", "내 이름"]
        ],
        "en": "In conversation, 저의 contracts to 제 ('my') and 나의 contracts to 내"
      }
    ]
  },
  "보다": {
    "pt": [
      {
        "k": "fix",
        "p": [
          ["기차보다 비행기가 빨라요", "비행기가 기차보다 더 빨라요"]
        ],
        "en": "Attach 보다 directly to the standard of comparison ('than Noun')"
      }
    ]
  },
  "처럼 · 같이": {
    "pt": [
      {
        "k": "fix",
        "p": [
          ["가수처럼으로 노래해요", "가수처럼 노래해요"]
        ],
        "en": "Attach 처럼 or 같이 directly to a noun regardless of 받침"
      }
    ]
  },
  "-았/었-": {
    "pt": [
      {
        "k": "fix",
        "p": [
          ["만나았어요", "만났어요"],
          ["먹았어요", "먹었어요"]
        ],
        "en": "Use -았어요 after ㅏ/ㅗ stems, -었어요 after other stems, and 했어요 for 하다"
      }
    ]
  },
  "-(으)ㄹ 거예요": {
    "pt": [
      {
        "k": "fix",
        "p": [
          ["살을 거예요", "살 거예요"],
          ["먹ㄹ 거예요", "먹을 거예요"]
        ],
        "en": "Use -을 거예요 after consonants (except ㄹ) and -ㄹ 거예요 after vowels or ㄹ stems"
      }
    ]
  },
  "-고 있다": {
    "pt": [
      {
        "k": "fix",
        "p": [
          ["먹어고 있어요", "먹고 있어요"],
          ["예쁘고 있어요 (형용사)", "예뻐요"]
        ],
        "en": "Attach -고 있어요 directly to action verb stems (regardless of 받침)"
      }
    ]
  },
  "-겠-": {
    "pt": [
      {
        "k": "fix",
        "p": [
          ["어제 힘들겠어요", "어제 힘들었겠어요"]
        ],
        "en": "Use -겠어요 for present/future conjecture and -았/었겠어요 for past conjecture"
      }
    ]
  },
  "안": {
    "pt": [
      {
        "k": "fix",
        "p": [
          ["안 공부해요", "공부를 안 해요"],
          ["안 운동해요", "운동을 안 해요"]
        ],
        "en": "For 'Noun + 하다' verbs, place 안 right before 해요 (명사 + 안 해요)"
      }
    ]
  },
  "-지 않다": {
    "pt": [
      {
        "k": "fix",
        "p": [
          ["어렵지 안아요", "어렵지 않아요"],
          ["공부지 않아요", "공부하지 않아요"]
        ],
        "en": "Spell the auxiliary verb 않아요 with ㄶ (not 안아요) and attach -지 않아요 to the full stem"
      }
    ]
  },
  "못": {
    "pt": [
      {
        "k": "fix",
        "p": [
          ["못 수영해요", "수영을 못 해요"],
          ["못 비싸요 (형용사)", "안 비싸요"]
        ],
        "en": "Place 못 right before 해요 in 'Noun + 하다' verbs, and never use 못 with adjectives"
      }
    ]
  },
  "-지 못하다": {
    "pt": [
      {
        "k": "fix",
        "p": [
          ["학교에 못했어요", "학교에 가지 못했어요"]
        ],
        "en": "Attach -지 못해요 (present) or -지 못했어요 (past) directly to the action verb stem"
      }
    ]
  }
};
const TIPKEEP = {"이에요/예요":[2]};
const TIPCAP = {};
const SITPIC = {"이에요/예요":["sp-01-1","sp-01-2","sp-01-3","sp-01-4"]};
const TIPLINES = {"이에요/예요":{"2":["Nothing changes — you only ==raise your voice== at the end.","In writing, just add a ==question mark==."]}};
const TIPNOKO = [];
