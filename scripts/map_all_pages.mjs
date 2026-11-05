import fs from 'fs';
import path from 'path';

const PUBLIC_DIR = 'C:/korean_box_edu/public';
const cssFiles = fs.readdirSync(path.join(PUBLIC_DIR, 'css'));
const jsFiles = fs.readdirSync(path.join(PUBLIC_DIR, 'js'));

const pages = [
  'index.html',
  'phrase/index.html',
  'course/index.html',
  'board/library/index.html',
  'grammar/index.html',
  'word/index.html',
  'study/flashcards/index.html',
  'talk/index.html',
  'level/1/index.html',
  'board/notice/index.html'
];

for (const p of pages) {
  const fullPath = path.join(PUBLIC_DIR, p);
  if (!fs.existsSync(fullPath)) continue;

  let content = fs.readFileSync(fullPath, 'utf8');

  // 1. CSS 파일 교체
  for (const css of cssFiles) {
    const baseName = css.replace('.css', '');
    const regex = new RegExp(`href="[^"]*${baseName}[^"]*\\.css[^"]*"`, 'g');
    content = content.replace(regex, `href="/css/${css}"`);
  }

  // 2. JS 파일 교체
  for (const js of jsFiles) {
    const baseName = js.replace('.js', '');
    const regex = new RegExp(`src="[^"]*${baseName}[^"]*\\.js[^"]*"`, 'g');
    content = content.replace(regex, `src="/js/${js}"`);
  }

  // 3. /_next/static/media/ 폰트 링크 로컬 폰트 폴더로 연결
  content = content.replaceAll('/_next/static/media/', '/fonts/');
  content = content.replaceAll('/box-mark.svg', '/box-mark.svg');
  content = content.replaceAll('/globe.svg', '/globe.svg');

  // 4. 가르치기 페이지에서 결제창/코드입력 대신 '100% 무료 슬라이드 바로 학습하기' 버튼 눈에 띄게 추가
  if (p === 'course/index.html') {
    // 상단 '코드 입력' 버튼을 '슬라이드 전체 학습'으로 변경
    content = content.replaceAll('코드 입력', '슬라이드 학습');
    content = content.replaceAll('>코드<', '>슬라이드<');
    content = content.replaceAll('href="/course/price"', 'href="/course/sample/index.html"');
    content = content.replaceAll('href="/course/apply"', 'href="/course/sample/index.html"');
  }

  fs.writeFileSync(fullPath, content, 'utf8');
  console.log(`[UPDATED] ${p}`);
}

console.log('All pages mapped with local assets successfully!');
