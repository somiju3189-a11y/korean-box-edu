import fs from 'fs';
import path from 'path';

const ARTICLES = [
  { id: 21, num: "공지", lv: "급 무관", title: "[새 소식] 수업 TV 오픈 · 활동지 추가 · 2급 얼리버드 예약 (11/18까지)", date: "2026.11.01", views: 184, isFree: true, desc: "한국어 박스 수업 화면에 새로운 기능과 활동지가 추가되었습니다. 1급 30개 과 전체 슬라이드와 대면 수업용 활동지를 100% 무료로 이용하실 수 있습니다." },
  { id: 20, num: 13, lv: "1급", title: "[1급 2과] 대면 수업용 활동지 (-은/는) 무료판", date: "2026.11.01", views: 247, isFree: true, desc: "1급 2과 '은/는' 대면 수업용 활동지입니다. 학생들과 짝활동 및 자기소개 연습에 바로 인쇄하여 활용하실 수 있는 워크시트입니다.", files: ["1급_2과_활동지_은는_교사용.pdf", "1급_2과_활동지_은는_학생용.pdf"] },
  { id: 19, num: 12, lv: "1급", title: "[1급 1과] 대면 수업용 활동지 (-이에요/예요)", date: "2026.11.01", views: 320, isFree: true, desc: "1급 1과 '이에요/예요' 첫인사 및 사물 이름 말하기 대면 활동지입니다.", files: ["1급_1과_활동지_이에요예요.pdf"] },
  { id: 18, num: 11, lv: "1급", title: "[1급 2과] 대면 수업용 활동지 (-은/는)", date: "2026.11.01", views: 195, isFree: true, desc: "1급 2과 '은/는' 전체 문항 연습 활동지입니다.", files: ["1급_2과_활동지_종합.pdf"] },
  { id: 17, num: 10, lv: "1급", title: "[1급 3과] 대면 수업용 활동지 (-이/가 있어요/없어요)", date: "2026.11.01", views: 180, isFree: true, desc: "1급 3과 소유와 존재 표현 '이/가 있어요/없어요' 활동지입니다.", files: ["1급_3과_활동지_있어요없어요.pdf"] },
  { id: 16, num: 9, lv: "1급", title: "[1급 4과] 대면 수업용 활동지 (-이/가 아니에요)", date: "2026.11.01", views: 165, isFree: true, desc: "1급 4과 부정 표현 '이/가 아니에요' 활동지입니다.", files: ["1급_4과_활동지_아니에요.pdf"] },
  { id: 15, num: 8, lv: "1급", title: "[1급 5과] 대면 수업용 활동지 (-아/어요)", date: "2026.11.01", views: 210, isFree: true, desc: "1급 5과 현재 시제 기본 어미 '-아/어요' 규칙 연습 활동지입니다.", files: ["1급_5과_활동지_아요어요.pdf"] },
  { id: 14, num: 7, lv: "1급", title: "[1급 6과] 대면 수업용 활동지 (-을/를)", date: "2026.11.01", views: 172, isFree: true, desc: "1급 6과 목적격 조사 '을/를' 문장 만들기 활동지입니다.", files: ["1급_6과_활동지_을를.pdf"] },
  { id: 13, num: 6, lv: "1급", title: "[1급 7과] 대면 수업용 활동지 (-이/가)", date: "2026.11.01", views: 154, isFree: true, desc: "1급 7과 주격 조사 '이/가' 활동지입니다.", files: ["1급_7과_활동지_이가.pdf"] },
  { id: 12, num: 5, lv: "1급", title: "[1급 8과] 대면 수업용 활동지 (-에 (장소))", date: "2026.11.01", views: 140, isFree: true, desc: "1급 8과 장소 조사 '에' 활동지입니다.", files: ["1급_8과_활동지_에장소.pdf"] },
  { id: 11, num: 4, lv: "1급", title: "[1급 9과] 대면 수업용 활동지 (-에서)", date: "2026.11.01", views: 138, isFree: true, desc: "1급 9과 동작 장소 조사 '에서' 활동지입니다.", files: ["1급_9과_활동지_에서.pdf"] },
  { id: 10, num: 3, lv: "1급", title: "[1급 10과] 대면 수업용 활동지 (-에 (시간))", date: "2026.11.01", views: 160, isFree: true, desc: "1급 10과 시간 조사 '에' 활동지입니다.", files: ["1급_10과_활동지_에시간.pdf"] },
  { id: 3, num: 2, lv: "한글", title: "[한글 수업 자료] 오려 쓰는 한글 카드 128장", date: "2026.10.22", views: 489, isFree: true, desc: "한글 자모음 및 음절 결합 학습을 위한 오려 쓰는 한글 카드 128장 인쇄용 세트입니다.", files: ["한글_카드_128장_인쇄용.pdf"] },
  { id: 2, num: 1, lv: "1급", title: "[대면수업 활동지] 인사 활동지", date: "2026.10.21", views: 290, isFree: true, desc: "1급 첫 수업에서 바로 사용하는 인사 및 자기소개 활동지입니다.", files: ["1급_첫수업_인사활동지.pdf"] }
];

function generateArticlePage(art) {
  const filesHtml = (art.files || ["수업용_활동지_전체.pdf"]).map(f => `
    <div style="display:flex; align-items:center; justify-content:space-between; padding:14px 18px; background:#f8fafc; border:1px solid #e2e8f0; border-radius:10px; margin-bottom:10px;">
      <div style="display:flex; align-items:center; gap:10px;">
        <span style="font-size:20px;">📄</span>
        <div>
          <div style="font-weight:700; color:#1e293b; font-size:15px;">${f}</div>
          <div style="font-size:12px; color:#64748b;">PDF 문서 · 인쇄 및 양면 출력 지원 · 100% 무료</div>
        </div>
      </div>
      <button type="button" onclick="window.print()" style="padding:8px 16px; background:#14213d; color:#fff; border-radius:8px; border:none; font-weight:700; cursor:pointer; font-size:13px;">인쇄 / PDF 저장</button>
    </div>
  `).join('');

  return `<!doctype html>
<html lang="ko">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${art.title} · 한국어 박스 자료실</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Do+Hyeon&family=Noto+Sans+KR:wght@400;500;700;900&display=swap" rel="stylesheet">
<link rel="stylesheet" href="/css/3ss24yf4htu5w.css">
<link rel="stylesheet" href="/css/1turcnrvwu0nf.css">
<style>
  body { font-family: 'Noto Sans KR', sans-serif; background: #fff6e5; margin: 0; color: #14213d; }
  .top-header { background: #fff; border-bottom: 1px solid #e5e7eb; padding: 14px 20px; display: flex; align-items: center; justify-content: space-between; }
  .logo-link { font-size: 20px; font-weight: 800; color: #14213d; text-decoration: none; display: flex; align-items: center; gap: 8px; }
  .logo-link b { color: #c8102e; }
  .nav-back { color: #4b5563; text-decoration: none; font-size: 14px; font-weight: 600; }
  .content-box { max-width: 860px; margin: 40px auto; background: #fff; border-radius: 16px; padding: 36px; box-shadow: 0 4px 20px rgba(0,0,0,0.06); }
  .art-tag { display: inline-block; padding: 4px 10px; background: #e0f2fe; color: #0369a1; border-radius: 6px; font-size: 13px; font-weight: 700; margin-bottom: 12px; }
  .art-title { font-size: 26px; font-weight: 800; margin: 0 0 16px 0; line-height: 1.4; color: #0f172a; }
  .art-meta { display: flex; gap: 16px; font-size: 13px; color: #64748b; border-bottom: 1px solid #f1f5f9; padding-bottom: 20px; margin-bottom: 24px; }
  .art-body { font-size: 16px; line-height: 1.8; color: #334155; margin-bottom: 36px; }
  .action-bar { display: flex; gap: 12px; margin-top: 30px; border-top: 1px solid #f1f5f9; padding-top: 24px; justify-content: space-between; align-items: center; }
  .btn-primary { background: #c8102e; color: #fff; padding: 12px 24px; border-radius: 10px; text-decoration: none; font-weight: 700; font-size: 15px; border: none; cursor: pointer; }
  .btn-secondary { background: #e2e8f0; color: #334155; padding: 12px 20px; border-radius: 10px; text-decoration: none; font-weight: 600; font-size: 14px; }
</style>
</head>
<body>

<header class="top-header">
  <a class="logo-link" href="/">
    <img src="/box-mark.svg" alt="" width="26" height="26">
    <span>한국어 <b>박스</b></span>
  </a>
  <div style="display:flex; gap:16px; align-items:center;">
    <a class="nav-back" href="/board/library">← 자료실 목록으로</a>
    <a class="nav-back" href="/course/sample/index.html" style="color:#c8102e; font-weight:700;">1~30과 슬라이드 열기 →</a>
  </div>
</header>

<main>
  <div class="content-box">
    <span class="art-tag">${art.lv} · 100% 무료 자료</span>
    <h1 class="art-title">${art.title}</h1>
    <div class="art-meta">
      <span>작성자: 운영자</span>
      <span>등록일: ${art.date}</span>
      <span>조회수: ${art.views}</span>
      <span style="color:#16a34a; font-weight:700;">전체 무료 열람 및 다운로드 가능</span>
    </div>

    <div class="art-body">
      <p style="font-size:17px; font-weight:500; color:#1e293b;">${art.desc}</p>
      
      <div style="background:#f1f5f9; padding:20px; border-radius:12px; margin:24px 0;">
        <h3 style="margin-top:0; font-size:16px; color:#0f172a;">📌 수업 활용 지침</h3>
        <ul style="margin:0; padding-left:20px; color:#475569; font-size:14px; line-height:1.7;">
          <li>본 자료는 한국어 수업에서 학생들과 함께 인쇄하여 직접 풀거나 과제로 배포할 수 있는 무료 학습지입니다.</li>
          <li>1급 30개 과 강의안 슬라이드와 병행하여 사용하시면 수업의 집중도와 학습 효과가 극대화됩니다.</li>
          <li>교사용/학생용 파일이 모두 포함되어 있으며 아래 버튼을 눌러 바로 인쇄하거나 PDF로 저장할 수 있습니다.</li>
        </ul>
      </div>

      <h3 style="font-size:17px; margin-bottom:12px; color:#0f172a;">첨부 파일 (총 ${(art.files || ["수업용_활동지_전체.pdf"]).length}개)</h3>
      ${filesHtml}
    </div>

    <div class="action-bar">
      <a class="btn-secondary" href="/board/library">목록으로</a>
      <div style="display:flex; gap:10px;">
        <button type="button" class="btn-primary" onclick="window.print()">전체 인쇄 / 다운로드</button>
        <a class="btn-primary" href="/course/sample/index.html" style="background:#14213d;">해당 단원 슬라이드 바로가기 →</a>
      </div>
    </div>
  </div>
</main>

</body>
</html>`;
}

ARTICLES.forEach(art => {
  const artDir = path.resolve(`public/board/library/${art.id}`);
  fs.mkdirSync(artDir, { recursive: true });
  fs.writeFileSync(path.join(artDir, 'index.html'), generateArticlePage(art), 'utf8');
});

console.log(`Generated all ${ARTICLES.length} library article pages!`);
