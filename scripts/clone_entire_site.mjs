import fs from 'fs';
import path from 'path';
import axios from 'axios';

const BASE_URL = 'https://www.koreanbox.co.kr';
const PUBLIC_DIR = path.resolve('C:/korean_box_edu/public');

const headers = {
  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
  'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
  'Accept-Language': 'ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7'
};

async function downloadFile(url, savePath) {
  try {
    const dir = path.dirname(savePath);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    
    const res = await axios.get(url, { headers, responseType: 'arraybuffer' });
    fs.writeFileSync(savePath, Buffer.from(res.data));
    console.log(`[OK] ${url} -> ${savePath}`);
    return res.data;
  } catch (e) {
    console.error(`[FAIL] ${url}: ${e.message}`);
    return null;
  }
}

async function run() {
  console.log('=== KoreanBox 전체 사이트 전수 복제 시작 ===');

  // 1. 주요 HTML 페이지 목록
  const pages = [
    { url: `${BASE_URL}/phrase`, path: 'phrase/index.html' },
    { url: `${BASE_URL}/course`, path: 'course/index.html' },
    { url: `${BASE_URL}/board/library`, path: 'board/library/index.html' },
    { url: `${BASE_URL}/grammar`, path: 'grammar/index.html' },
    { url: `${BASE_URL}/word`, path: 'word/index.html' },
    { url: `${BASE_URL}/study/flashcards`, path: 'study/flashcards/index.html' },
    { url: `${BASE_URL}/talk`, path: 'talk/index.html' },
    { url: `${BASE_URL}/level/1`, path: 'level/1/index.html' },
    { url: `${BASE_URL}/board/notice`, path: 'board/notice/index.html' },
    { url: `${BASE_URL}/`, path: 'home.html' }
  ];

  for (const p of pages) {
    const raw = await downloadFile(p.url, path.join(PUBLIC_DIR, p.path));
    if (raw) {
      let html = raw.toString('utf8');
      // 자산 경로 절대경로화
      html = html.replaceAll('href="css/', 'href="/css/');
      html = html.replaceAll('src="js/', 'src="/js/');
      html = html.replaceAll('src="fonts/', 'src="/fonts/');
      html = html.replaceAll('href="images/', 'href="/images/');
      fs.writeFileSync(path.join(PUBLIC_DIR, p.path), html, 'utf8');
    }
  }

  // 2. 가르치기 슬라이드 뷰어 에셋 전수 다운로드
  const slideAssets = [
    'course/sample/index.html',
    'course/sample/style.css',
    'course/sample/sum.css',
    'course/sample/units.js',
    'course/sample/engine.js',
    'course/sample/memo.js',
    'course/sample/data/lesson1.js',
    'course/sample/data/sum.js',
    'course/sample/data/check.js',
    'course/sample/data/sitgo.js',
    'course/sample/data/vocabpic.js'
  ];

  for (const asset of slideAssets) {
    await downloadFile(`${BASE_URL}/${asset}`, path.join(PUBLIC_DIR, asset));
  }

  console.log('=== 전체 복제 다운로드 완료! ===');
}

run();
