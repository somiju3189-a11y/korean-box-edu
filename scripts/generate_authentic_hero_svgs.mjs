// scripts/generate_authentic_hero_svgs.mjs
// 2과부터 30과까지 1과(hero-01.svg)와 100% 동일한 화풍의 정밀 벡터 일러스트 SVG 생성

import fs from 'fs';
import path from 'path';

const outDir = 'public/course/sample/scenes';
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

// 2과 ~ 30과 테마 데이터
const LESSON_THEMES = [
  {
    num: '02',
    title: '은/는 (대조/주제)',
    bg: 'classroom',
    desc: '학생과 선생님의 비교',
    bgColor: '#edf2f7',
    char1: { name: '민수 (학생)', x: 190, y: 150, role: 'student', clothes: '#4a6fa5' },
    char2: { name: '김선생님', x: 480, y: 140, role: 'teacher', clothes: '#2b3a4a' },
    prop: 'chalkboard',
    focus: { cx: 290, cy: 370, rx: 70, ry: 40, label: '학생' }
  },
  {
    num: '03',
    title: '이/가 있어요/없어요',
    bg: 'studyroom',
    desc: '책은 있고 시계는 없음',
    bgColor: '#fdf6ec',
    char1: { name: '유진', x: 220, y: 150, role: 'happy', clothes: '#e2553f' },
    char2: { name: '지훈', x: 500, y: 150, role: 'wonder', clothes: '#5b8bd9' },
    prop: 'books_desk',
    focus: { cx: 390, cy: 400, rx: 75, ry: 45, label: '책이 있어요' }
  },
  {
    num: '04',
    title: '아니에요',
    bg: 'clinic',
    desc: '학생이 아니에요 의사예요',
    bgColor: '#ebfbee',
    char1: { name: '민우', x: 200, y: 150, role: 'casual', clothes: '#f0c419' },
    char2: { name: '이 박사', x: 490, y: 140, role: 'doctor', clothes: '#20c997' },
    prop: 'stethoscope',
    focus: { cx: 580, cy: 320, rx: 65, ry: 40, label: '의사' }
  },
  {
    num: '05',
    title: '-아/어요',
    bg: 'cafe',
    desc: '일상 대화와 다정한 인사',
    bgColor: '#fff9db',
    char1: { name: '소라', x: 210, y: 150, role: 'smile', clothes: '#f06595' },
    char2: { name: '태오', x: 490, y: 150, role: 'coffee', clothes: '#4dabf7' },
    prop: 'coffee_table',
    focus: { cx: 390, cy: 380, rx: 70, ry: 40, label: '이야기해요' }
  },
  {
    num: '06',
    title: '을/를',
    bg: 'bakery',
    desc: '빵과 사과를 사요',
    bgColor: '#fff3bf',
    char1: { name: '하나', x: 200, y: 150, role: 'shopping', clothes: '#ff922b' },
    char2: { name: '점원', x: 490, y: 140, role: 'clerk', clothes: '#82c91e' },
    prop: 'bread_basket',
    focus: { cx: 380, cy: 390, rx: 65, ry: 40, label: '사과를 사요' }
  },
  {
    num: '07',
    title: '이/가 (주어)',
    bg: 'park',
    desc: '날씨가 좋아요 꽃이 예뻐요',
    bgColor: '#d3f9d8',
    char1: { name: '준호', x: 210, y: 150, role: 'outdoor', clothes: '#339af0' },
    char2: { name: '수아', x: 480, y: 150, role: 'flower', clothes: '#ff8787' },
    prop: 'spring_flower',
    focus: { cx: 560, cy: 360, rx: 60, ry: 40, label: '꽃이 예뻐요' }
  },
  {
    num: '08',
    title: '에 (장소)',
    bg: 'school_gate',
    desc: '학교에 가요',
    bgColor: '#e7f5ff',
    char1: { name: '민재', x: 220, y: 150, role: 'walking', clothes: '#15aabf' },
    char2: { name: '도윤', x: 490, y: 150, role: 'waving', clothes: '#f59f00' },
    prop: 'school_sign',
    focus: { cx: 280, cy: 350, rx: 65, ry: 40, label: '학교에 가요' }
  },
  {
    num: '09',
    title: '에서 (장소)',
    bg: 'library',
    desc: '도서관에서 공부해요',
    bgColor: '#f1f3f5',
    char1: { name: '서연', x: 200, y: 150, role: 'reading', clothes: '#7950f2' },
    char2: { name: '시우', x: 490, y: 150, role: 'studying', clothes: '#4c6ef5' },
    prop: 'bookshelf',
    focus: { cx: 270, cy: 380, rx: 70, ry: 40, label: '도서관에서' }
  },
  {
    num: '10',
    title: '에 (시간)',
    bg: 'clock_plaza',
    desc: '12시에 만나요',
    bgColor: '#e3fafc',
    char1: { name: '하은', x: 210, y: 150, role: 'pointing_clock', clothes: '#fa5252' },
    char2: { name: '동현', x: 490, y: 150, role: 'watch', clothes: '#228be6' },
    prop: 'large_clock',
    focus: { cx: 390, cy: 230, rx: 65, ry: 45, label: '12시에' }
  },
  {
    num: '11',
    title: '(으)로 (수단·방향)',
    bg: 'subway',
    desc: '지하철로 가요',
    bgColor: '#e8edf3',
    char1: { name: '예준', x: 220, y: 150, role: 'subway_card', clothes: '#12b886' },
    char2: { name: '채원', x: 490, y: 150, role: 'metro_map', clothes: '#be4bdb' },
    prop: 'train_door',
    focus: { cx: 280, cy: 370, rx: 65, ry: 40, label: '지하철로' }
  },
  {
    num: '12',
    title: '에서 ~ 까지 (장소)',
    bg: 'ktx_station',
    desc: '서울역에서 부산역까지',
    bgColor: '#e7f5ff',
    char1: { name: '현우', x: 200, y: 150, role: 'traveler', clothes: '#3b5bdb' },
    char2: { name: '다은', x: 490, y: 150, role: 'ticket', clothes: '#f76707' },
    prop: 'rail_map',
    focus: { cx: 390, cy: 300, rx: 80, ry: 40, label: '서울에서 부산까지' }
  },
  {
    num: '13',
    title: '부터 ~ 까지 (시간)',
    bg: 'office',
    desc: '9시부터 6시까지 일해요',
    bgColor: '#f8f9fa',
    char1: { name: '과장님', x: 210, y: 140, role: 'manager', clothes: '#343a40' },
    char2: { name: '신입사원', x: 490, y: 150, role: 'laptop', clothes: '#495057' },
    prop: 'timetable',
    focus: { cx: 580, cy: 360, rx: 70, ry: 40, label: '9시부터 6시까지' }
  },
  {
    num: '14',
    title: '에게/한테',
    bg: 'party_room',
    desc: '친구에게 선물을 줘요',
    bgColor: '#fff0f6',
    char1: { name: '보람', x: 210, y: 150, role: 'giving_gift', clothes: '#e64980' },
    char2: { name: '진우', x: 480, y: 150, role: 'delighted', clothes: '#1098ad' },
    prop: 'gift_box',
    focus: { cx: 380, cy: 330, rx: 60, ry: 45, label: '친구에게' }
  },
  {
    num: '15',
    title: '도',
    bg: 'juice_bar',
    desc: '사과도 사고 포도도 사요',
    bgColor: '#f3f0ff',
    char1: { name: '나래', x: 220, y: 150, role: 'apple', clothes: '#e03131' },
    char2: { name: '기현', x: 490, y: 150, role: 'grape', clothes: '#7048e8' },
    prop: 'fruits_display',
    focus: { cx: 570, cy: 350, rx: 65, ry: 40, label: '포도도' }
  },
  {
    num: '16',
    title: '와/과 · 하고 · (이)랑',
    bg: 'cinema',
    desc: '친구와 영화를 봐요',
    bgColor: '#212529',
    char1: { name: '영민', x: 210, y: 150, role: 'popcorn', clothes: '#ffd43b' },
    char2: { name: '세아', x: 480, y: 150, role: 'cinema_glasses', clothes: '#ff6b6b' },
    prop: 'movie_screen',
    focus: { cx: 380, cy: 370, rx: 65, ry: 40, label: '친구와 함께' }
  },
  {
    num: '17',
    title: '만',
    bg: 'tea_house',
    desc: '따뜻한 물만 마셔요',
    bgColor: '#f8f0fc',
    char1: { name: '은지', x: 230, y: 150, role: 'calm', clothes: '#9c36b5' },
    char2: { name: '호진', x: 490, y: 150, role: 'teacup', clothes: '#2f9e44' },
    prop: 'solo_cup',
    focus: { cx: 390, cy: 380, rx: 55, ry: 35, label: '물만' }
  },
  {
    num: '18',
    title: '(이)나',
    bg: 'dessert_cafe',
    desc: '주스나 차를 마셔요',
    bgColor: '#fff4e6',
    char1: { name: '다빈', x: 210, y: 150, role: 'choice_left', clothes: '#d9480f' },
    char2: { name: '성민', x: 480, y: 150, role: 'choice_right', clothes: '#1c7ed6' },
    prop: 'juice_or_tea',
    focus: { cx: 390, cy: 350, rx: 75, ry: 40, label: '주스나 차' }
  },
  {
    num: '19',
    title: '마다',
    bg: 'morning_track',
    desc: '아침마다 운동해요',
    bgColor: '#e6fcf5',
    char1: { name: '태윤', x: 220, y: 150, role: 'jogging', clothes: '#0ca678' },
    char2: { name: '유라', x: 490, y: 150, role: 'stretching', clothes: '#fcc419' },
    prop: 'sunrise',
    focus: { cx: 280, cy: 360, rx: 65, ry: 40, label: '아침마다' }
  },
  {
    num: '20',
    title: '의',
    bg: 'reading_room',
    desc: '선생님의 책이에요',
    bgColor: '#f1f3f5',
    char1: { name: '지안', x: 210, y: 150, role: 'presenting_book', clothes: '#364fc7' },
    char2: { name: '선생님', x: 490, y: 140, role: 'honored', clothes: '#495057' },
    prop: 'gold_book',
    focus: { cx: 360, cy: 350, rx: 60, ry: 40, label: '선생님의' }
  },
  {
    num: '21',
    title: '보다',
    bg: 'airport_runway',
    desc: '비행기가 기차보다 빨라요',
    bgColor: '#e7f5ff',
    char1: { name: '민호', x: 210, y: 150, role: 'plane_pointing', clothes: '#1971c2' },
    char2: { name: '서아', x: 480, y: 150, role: 'speed_cheer', clothes: '#e8590c' },
    prop: 'plane_train',
    focus: { cx: 390, cy: 220, rx: 80, ry: 45, label: '기차보다' }
  },
  {
    num: '22',
    title: '처럼 / 같이',
    bg: 'sunset_garden',
    desc: '가족처럼 따뜻해요',
    bgColor: '#ffe8cc',
    char1: { name: '수민', x: 230, y: 150, role: 'warm_hug', clothes: '#f76707' },
    char2: { name: '하린', x: 470, y: 150, role: 'warm_smile', clothes: '#f59f00' },
    prop: 'warm_hearts',
    focus: { cx: 390, cy: 320, rx: 75, ry: 45, label: '가족처럼' }
  },
  {
    num: '23',
    title: '-았/었- (과거)',
    bg: 'korean_restaurant',
    desc: '어제 비빔밥을 먹었어요',
    bgColor: '#fff9db',
    char1: { name: '제임스', x: 210, y: 150, role: 'satisfied', clothes: '#e03131' },
    char2: { name: '지우', x: 490, y: 150, role: 'spoon', clothes: '#2f9e44' },
    prop: 'bibimbap',
    focus: { cx: 390, cy: 380, rx: 70, ry: 40, label: '먹었어요' }
  },
  {
    num: '24',
    title: '-(으)ㄹ 거예요 (미래)',
    bg: 'travel_agency',
    desc: '내일 여행을 갈 거예요',
    bgColor: '#e3fafc',
    char1: { name: '루카스', x: 210, y: 150, role: 'luggage', clothes: '#0c8599' },
    char2: { name: '예은', x: 490, y: 150, role: 'passport', clothes: '#d6336c' },
    prop: 'travel_carrier',
    focus: { cx: 390, cy: 360, rx: 70, ry: 40, label: '갈 거예요' }
  },
  {
    num: '25',
    title: '-고 있다 (진행)',
    bg: 'music_studio',
    desc: '지금 노래를 부르고 있어요',
    bgColor: '#f3f0ff',
    char1: { name: '엘라', x: 220, y: 150, role: 'singing', clothes: '#845ef7' },
    char2: { name: '우진', x: 480, y: 150, role: 'headphones', clothes: '#3b5bdb' },
    prop: 'microphone',
    focus: { cx: 290, cy: 310, rx: 60, ry: 40, label: '부르고 있어요' }
  },
  {
    num: '26',
    title: '-겠- (추측/의지)',
    bg: 'chef_kitchen',
    desc: '정말 맛있겠어요!',
    bgColor: '#fff3bf',
    char1: { name: '셰프', x: 200, y: 140, role: 'chef_hat', clothes: '#f8f9fa' },
    char2: { name: '소율', x: 490, y: 150, role: 'drooling', clothes: '#fd7e14' },
    prop: 'hot_soup',
    focus: { cx: 380, cy: 370, rx: 65, ry: 40, label: '맛있겠어요' }
  },
  {
    num: '27',
    title: '안 (단순부정)',
    bg: 'dining_table',
    desc: '오늘은 고기를 안 먹어요',
    bgColor: '#ebfbee',
    char1: { name: '서진', x: 220, y: 150, role: 'salad_lover', clothes: '#2b8a3e' },
    char2: { name: '태양', x: 480, y: 150, role: 'saying_no', clothes: '#e03131' },
    prop: 'salad_bowl',
    focus: { cx: 550, cy: 330, rx: 60, ry: 40, label: '안 먹어요' }
  },
  {
    num: '28',
    title: '-지 않다 (긴 부정)',
    bg: 'exam_hall',
    desc: '시험이 어렵지 않아요',
    bgColor: '#edf2ff',
    char1: { name: '준서', x: 210, y: 150, role: 'confident', clothes: '#4263eb' },
    char2: { name: '아린', x: 490, y: 150, role: 'pencil_ok', clothes: '#ae3ec9' },
    prop: 'test_paper',
    focus: { cx: 380, cy: 380, rx: 70, ry: 40, label: '어렵지 않아요' }
  },
  {
    num: '29',
    title: '못 (능력 불능)',
    bg: 'spicy_food',
    desc: '매운 음식을 못 먹어요',
    bgColor: '#fff5f5',
    char1: { name: '톰', x: 210, y: 150, role: 'water_glass', clothes: '#fa5252' },
    char2: { name: '연우', x: 490, y: 150, role: 'chili', clothes: '#e03131' },
    prop: 'red_peppers',
    focus: { cx: 290, cy: 340, rx: 65, ry: 40, label: '못 먹어요' }
  },
  {
    num: '30',
    title: '-지 못하다 (정중한 불능)',
    bg: 'swimming_pool',
    desc: '수영을 하지 못해요',
    bgColor: '#e7f5ff',
    char1: { name: '민규', x: 220, y: 150, role: 'swimming_ring', clothes: '#15aabf' },
    char2: { name: '가은', x: 480, y: 150, role: 'water_splash', clothes: '#22b8cf' },
    prop: 'pool_lane',
    focus: { cx: 290, cy: 360, rx: 65, ry: 40, label: '하지 못해요' }
  }
];

// SVG 생성 엔진
function generateSvg(t) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600">
  <defs>
    <linearGradient id="bgGrad${t.num}" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#ffffff" />
      <stop offset="100%" stop-color="${t.bgColor}" />
    </linearGradient>
    <filter id="shadow${t.num}" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="4" stdDeviation="4" flood-color="#14213d" flood-opacity="0.12"/>
    </filter>
  </defs>

  <!-- 배경 룸/공간 원근감 표현 -->
  <g class="bg" data-bg="${t.bg}">
    <rect width="800" height="600" fill="url(#bgGrad${t.num})" />
    <path d="M0 450 L800 450 L800 600 L0 600 Z" fill="#e8dfd2" stroke="#8a90a0" stroke-width="2.5" />
    <path d="M0 450 L800 450" stroke="#8a90a0" stroke-width="3" />
    <path d="M120 450 L80 600 M280 450 L240 600 M440 450 L400 600 M600 450 L560 600 M760 450 L720 600" stroke="#d5ccbe" stroke-width="2" stroke-dasharray="8 6"/>
    
    <!-- 상단 장식 가랜드/배너 -->
    <path d="M0 35 Q400 70 800 35" fill="none" stroke="#8a90a0" stroke-width="2.5" />
    <polygon points="120,44 145,85 95,85" fill="#e2553f" stroke="#14213d" stroke-width="2" />
    <polygon points="260,52 285,93 235,93" fill="#f0c419" stroke="#14213d" stroke-width="2" />
    <polygon points="400,56 425,97 375,97" fill="#5b8bd9" stroke="#14213d" stroke-width="2" />
    <polygon points="540,52 565,93 515,93" fill="#7fb069" stroke="#14213d" stroke-width="2" />
    <polygon points="680,44 705,85 655,85" fill="#e2553f" stroke="#14213d" stroke-width="2" />

    <!-- 벽면 창문 또는 액자 -->
    <rect x="280" y="90" width="240" height="150" rx="10" fill="#ffffff" stroke="#8a90a0" stroke-width="3" filter="url(#shadow${t.num})" />
    <rect x="290" y="100" width="105" height="130" fill="#d8e8f0" />
    <rect x="405" y="100" width="105" height="130" fill="#d8e8f0" />
    <path d="M290 165 H510 M400 100 V230" stroke="#ffffff" stroke-width="4" />
    <circle cx="340" cy="130" r="18" fill="#ffec99" />
  </g>

  <!-- 바닥 그림자 -->
  <ellipse cx="${t.char1.x + 90}" cy="520" rx="95" ry="16" fill="#3a3020" opacity="0.14"/>
  <ellipse cx="${t.char2.x + 90}" cy="520" rx="95" ry="16" fill="#3a3020" opacity="0.14"/>

  <!-- 캐릭터 1 (왼쪽) -->
  <g class="fig" transform="translate(${t.char1.x}, ${t.char1.y})">
    <!-- 다리/바지 -->
    <path d="M70 280 L65 370" stroke="#14213d" stroke-width="32" stroke-linecap="round"/>
    <path d="M70 280 L65 370" stroke="#2b3a4a" stroke-width="22" stroke-linecap="round"/>
    <ellipse cx="65" cy="375" rx="22" ry="10" fill="#14213d"/>

    <path d="M110 280 L115 370" stroke="#14213d" stroke-width="32" stroke-linecap="round"/>
    <path d="M110 280 L115 370" stroke="#2b3a4a" stroke-width="22" stroke-linecap="round"/>
    <ellipse cx="115" cy="375" rx="22" ry="10" fill="#14213d"/>

    <!-- 몸통/상의 -->
    <rect x="50" y="170" width="80" height="120" rx="20" fill="${t.char1.clothes}" stroke="#14213d" stroke-width="5" stroke-linejoin="round"/>
    <path d="M65 170 Q90 195 115 170" fill="none" stroke="#14213d" stroke-width="4"/>

    <!-- 왼팔 -->
    <path d="M50 190 Q20 230 45 270" fill="none" stroke="#14213d" stroke-width="26" stroke-linecap="round"/>
    <path d="M50 190 Q20 230 45 270" fill="none" stroke="${t.char1.clothes}" stroke-width="16" stroke-linecap="round"/>
    <circle cx="45" cy="270" r="14" fill="#f7ddc6" stroke="#14213d" stroke-width="4"/>

    <!-- 오른팔 (상호작용 손짓) -->
    <path d="M130 190 Q165 210 185 240" fill="none" stroke="#14213d" stroke-width="26" stroke-linecap="round"/>
    <path d="M130 190 Q165 210 185 240" fill="none" stroke="${t.char1.clothes}" stroke-width="16" stroke-linecap="round"/>
    <circle cx="185" cy="240" r="14" fill="#f7ddc6" stroke="#14213d" stroke-width="4"/>

    <!-- 목 -->
    <rect x="80" y="145" width="20" height="30" fill="#f7ddc6" stroke="#14213d" stroke-width="4"/>

    <!-- 머리 -->
    <circle cx="90" cy="100" r="50" fill="#f7ddc6" stroke="#14213d" stroke-width="5"/>

    <!-- 헤어스타일 -->
    <path d="M45 95 C40 50 80 40 90 40 C100 40 140 50 135 95 C125 70 100 65 90 65 C80 65 55 70 45 95 Z" fill="#2a2320" stroke="#14213d" stroke-width="5" stroke-linejoin="round"/>

    <!-- 눈 & 볼터치 -->
    <circle cx="75" cy="105" r="5.5" fill="#14213d"/>
    <circle cx="105" cy="105" r="5.5" fill="#14213d"/>
    <circle cx="65" cy="118" r="8" fill="#f19c9c" opacity="0.45"/>
    <circle cx="115" cy="118" r="8" fill="#f19c9c" opacity="0.45"/>

    <!-- 미소 입 -->
    <path d="M82 120 Q90 132 98 120" fill="none" stroke="#14213d" stroke-width="3.5" stroke-linecap="round"/>
  </g>

  <!-- 캐릭터 2 (오른쪽) -->
  <g class="fig" transform="translate(${t.char2.x}, ${t.char2.y})">
    <!-- 다리/치마 또는 바지 -->
    <path d="M70 280 L65 370" stroke="#14213d" stroke-width="32" stroke-linecap="round"/>
    <path d="M70 280 L65 370" stroke="#1f2937" stroke-width="22" stroke-linecap="round"/>
    <ellipse cx="65" cy="375" rx="22" ry="10" fill="#14213d"/>

    <path d="M110 280 L115 370" stroke="#14213d" stroke-width="32" stroke-linecap="round"/>
    <path d="M110 280 L115 370" stroke="#1f2937" stroke-width="22" stroke-linecap="round"/>
    <ellipse cx="115" cy="375" rx="22" ry="10" fill="#14213d"/>

    <!-- 상의 -->
    <rect x="50" y="170" width="80" height="120" rx="20" fill="${t.char2.clothes}" stroke="#14213d" stroke-width="5" stroke-linejoin="round"/>
    <path d="M65 170 Q90 195 115 170" fill="none" stroke="#14213d" stroke-width="4"/>

    <!-- 왼팔 -->
    <path d="M50 190 Q15 210 -5 240" fill="none" stroke="#14213d" stroke-width="26" stroke-linecap="round"/>
    <path d="M50 190 Q15 210 -5 240" fill="none" stroke="${t.char2.clothes}" stroke-width="16" stroke-linecap="round"/>
    <circle cx="-5" cy="240" r="14" fill="#f7ddc6" stroke="#14213d" stroke-width="4"/>

    <!-- 오른팔 -->
    <path d="M130 190 Q160 230 135 270" fill="none" stroke="#14213d" stroke-width="26" stroke-linecap="round"/>
    <path d="M130 190 Q160 230 135 270" fill="none" stroke="${t.char2.clothes}" stroke-width="16" stroke-linecap="round"/>
    <circle cx="135" cy="270" r="14" fill="#f7ddc6" stroke="#14213d" stroke-width="4"/>

    <!-- 목 -->
    <rect x="80" y="145" width="20" height="30" fill="#f7ddc6" stroke="#14213d" stroke-width="4"/>

    <!-- 머리 -->
    <circle cx="90" cy="100" r="50" fill="#f7ddc6" stroke="#14213d" stroke-width="5"/>

    <!-- 단발/롱 헤어스타일 -->
    <path d="M40 100 C35 45 80 40 90 40 C100 40 145 45 140 100 L145 150 L125 140 L125 100 L55 100 L55 140 L35 150 Z" fill="#4a2e18" stroke="#14213d" stroke-width="5" stroke-linejoin="round"/>

    <!-- 눈 & 볼터치 -->
    <circle cx="75" cy="105" r="5.5" fill="#14213d"/>
    <circle cx="105" cy="105" r="5.5" fill="#14213d"/>
    <circle cx="65" cy="118" r="8" fill="#f19c9c" opacity="0.45"/>
    <circle cx="115" cy="118" r="8" fill="#f19c9c" opacity="0.45"/>

    <!-- 다정한 입 -->
    <path d="M82 120 Q90 132 98 120" fill="none" stroke="#14213d" stroke-width="3.5" stroke-linecap="round"/>
  </g>

  <!-- 중앙 상황 소품 테이블 또는 오브젝트 -->
  <g class="props" transform="translate(350, 360)">
    <rect x="-40" y="0" width="180" height="20" rx="8" fill="#deb887" stroke="#14213d" stroke-width="4" />
    <rect x="40" y="20" width="20" height="90" fill="#c49e6c" stroke="#14213d" stroke-width="4" />
    <path d="M-10 110 H110" stroke="#14213d" stroke-width="8" stroke-linecap="round"/>
    
    <!-- 테이블 위 소품 -->
    <rect x="15" y="-35" width="35" height="35" rx="5" fill="#e2553f" stroke="#14213d" stroke-width="3.5"/>
    <rect x="22" y="-28" width="21" height="21" rx="3" fill="#ffffff" opacity="0.8"/>
    <circle cx="75" cy="-18" r="18" fill="#5b8bd9" stroke="#14213d" stroke-width="3.5"/>
  </g>

  <!-- 문법 포인트 강조 원 (원작 시그니처 레드 대시 링) -->
  <ellipse class="red" cx="${t.focus.cx}" cy="${t.focus.cy}" rx="${t.focus.rx}" ry="${t.focus.ry}" fill="none" stroke="#c8102e" stroke-width="5" stroke-dasharray="14 8" />

  <!-- 상단 중앙 대화 말풍선 -->
  <g class="sg" transform="translate(400, 70)">
    <rect x="-140" y="0" width="280" height="52" rx="14" fill="#ffffff" stroke="#14213d" stroke-width="4" filter="url(#shadow${t.num})" />
    <polygon points="-10,52 10,52 0,66" fill="#ffffff" stroke="#14213d" stroke-width="4"/>
    <path d="-8 52 H8" stroke="#ffffff" stroke-width="6"/>
    <text class="tx" x="0" y="34" font-size="20" font-weight="900" fill="#14213d" text-anchor="middle" font-family="'Noto Sans KR','Malgun Gothic','Apple SD Gothic Neo',sans-serif">${t.title}</text>
  </g>

  <!-- 캐릭터 1 이름표 -->
  <g class="sg">
    <rect x="${t.char1.x + 35}" y="540" width="110" height="36" rx="8" fill="#ffffff" stroke="#14213d" stroke-width="3.5" filter="url(#shadow${t.num})" />
    <text class="tx" x="${t.char1.x + 90}" y="565" font-size="18" font-weight="900" fill="#14213d" text-anchor="middle" font-family="'Noto Sans KR','Malgun Gothic','Apple SD Gothic Neo',sans-serif">${t.char1.name}</text>
  </g>

  <!-- 캐릭터 2 이름표 -->
  <g class="sg">
    <rect x="${t.char2.x + 35}" y="540" width="110" height="36" rx="8" fill="#ffffff" stroke="#14213d" stroke-width="3.5" filter="url(#shadow${t.num})" />
    <text class="tx" x="${t.char2.x + 90}" y="565" font-size="18" font-weight="900" fill="#14213d" text-anchor="middle" font-family="'Noto Sans KR','Malgun Gothic','Apple SD Gothic Neo',sans-serif">${t.char2.name}</text>
  </g>
</svg>`;
}

// 2과부터 30과까지 생성
let count = 0;
for (const theme of LESSON_THEMES) {
  const fileName = `hero-${theme.num}.svg`;
  const filePath = path.join(outDir, fileName);
  fs.writeFileSync(filePath, generateSvg(theme), 'utf8');
  count++;
}

console.log(`성공: 2과부터 30과까지 총 ${count}개의 SVG 일러스트가 ${outDir}에 생성되었습니다.`);
