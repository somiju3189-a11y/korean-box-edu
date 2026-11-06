import fs from 'fs';
import path from 'path';

// 1. Read authentic UNITS
const unitsCode = fs.readFileSync('public/course/sample/units.js', 'utf8');
const UNITS = eval(unitsCode.replace('const UNITS =', ''));

// 2. Build Educational Curriculum HTML
function buildCurriculumHtml() {
  let cards = '';
  let lessonIdx = 1;

  UNITS.forEach(unit => {
    let list = '';
    unit.items.forEach(item => {
      const curL = lessonIdx++;
      list += `
        <a href="/course/sample/index.html?l=${curL}" class="lesson-card-item" style="display:flex; align-items:center; justify-content:space-between; padding:12px 16px; margin-bottom:8px; background:#ffffff; border:1px solid #e2e8f0; border-radius:10px; text-decoration:none; color:#1e293b; transition:all 0.2s;">
          <div style="display:flex; align-items:center; gap:12px;">
            <span style="display:inline-flex; align-items:center; justify-content:center; width:28px; height:28px; background:#eff6ff; color:#2563eb; font-weight:700; font-size:13px; border-radius:6px;">${curL}</span>
            <span style="font-weight:600; font-size:15px;">${item}</span>
          </div>
          <span style="font-size:13px; color:#2563eb; font-weight:600;">슬라이드 열기 →</span>
        </a>`;
    });

    cards += `
      <div style="background:#f8fafc; border:1px solid #e2e8f0; border-radius:14px; padding:20px; margin-bottom:20px;">
        <h3 style="font-size:18px; font-weight:700; color:#0f172a; margin-bottom:14px; display:flex; align-items:center; gap:8px;">
          <span style="color:#2563eb;">●</span> ${unit.name}
        </h3>
        <div>${list}</div>
      </div>`;
  });

  return `
  <main class="kb-page w-full flex-1" style="background:#ffffff;">
    <div style="max-width:1040px; margin:0 auto; padding:40px 20px;">
      <!-- Title Section -->
      <div style="text-align:center; margin-bottom:36px;">
        <span style="display:inline-block; padding:4px 12px; background:#eff6ff; color:#2563eb; font-weight:700; font-size:13px; border-radius:20px; margin-bottom:12px;">전편 무료 학습 · Level 1 (1~30과)</span>
        <h1 style="font-size:32px; font-weight:800; color:#0f172a; margin-bottom:12px; letter-spacing:-0.5px;">한국어 박스 1급 강의 슬라이드</h1>
        <p style="font-size:16px; color:#64748b; margin-bottom:24px;">국제 통용 한국어 표준 교육과정에 맞춘 1과부터 30과까지의 전체 인터랙티브 수업 슬라이드입니다.</p>
        <div style="display:flex; justify-content:center; gap:12px;">
          <a href="/course/sample/index.html" style="display:inline-flex; align-items:center; gap:6px; background:#2563eb; color:#ffffff; font-weight:700; font-size:15px; padding:12px 24px; border-radius:10px; text-decoration:none;">
            1과부터 전체 슬라이드 시작하기 →
          </a>
        </div>
      </div>

      <!-- Curriculum Grid -->
      <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(320px, 1fr)); gap:20px;">
        ${cards}
      </div>
    </div>
  </main>`;
}

// 3. Update public/course/index.html
const htmlPath = 'public/course/index.html';
const rawHtml = fs.readFileSync(htmlPath, 'utf8');
const mainStart = rawHtml.indexOf('<main');
const mainEnd = rawHtml.indexOf('</main>') + 7;

if (mainStart !== -1 && mainEnd !== -1) {
  const newMain = buildCurriculumHtml();
  const updatedHtml = rawHtml.slice(0, mainStart) + newMain + rawHtml.slice(mainEnd);
  fs.writeFileSync(htmlPath, updatedHtml, 'utf8');
  console.log('Successfully updated public/course/index.html with pure educational curriculum dashboard!');
} else {
  console.error('Could not find <main> tag in public/course/index.html');
}
