import fs from 'fs';

const p = 'C:/korean_box_edu/public/course/index.html';
let html = fs.readFileSync(p, 'utf8');

// 결제/신청 관련 문구를 무료 슬라이드 직행으로 변경
html = html.replaceAll('1과 무료 체험 →', '1~30과 전체 슬라이드 열기 →');
html = html.replaceAll('>신청하기 →<', '>슬라이드 바로 열기 →<');
html = html.replaceAll('>가격<', '>전체 슬라이드<');
html = html.replaceAll('/course/price', '/course/sample/index.html');
html = html.replaceAll('/course/apply', '/course/sample/index.html');

fs.writeFileSync(p, html, 'utf8');
console.log('Successfully polished course/index.html for 100% free slide access!');
