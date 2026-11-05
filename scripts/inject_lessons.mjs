import fs from 'fs';

const filePath = 'C:/korean_box_edu/public/course/sample/index.html';
let html = fs.readFileSync(filePath, 'utf8');

// 상대경로 또는 절대경로 찾기
const regex = /<script\s+src="[^"]*lesson1\.js[^"]*"><\/script>/;
const match = html.match(regex);

if (match) {
  const replacement = `${match[0]}
<script src="/course/sample/data/lesson2.js"></script>
<script src="/course/sample/data/lesson3.js"></script>
<script src="/course/sample/data/lesson4.js"></script>`;
  html = html.replace(regex, replacement);
  fs.writeFileSync(filePath, html, 'utf8');
  console.log('Successfully injected lesson2, lesson3, lesson4!');
} else {
  console.log('No lesson1 match found');
}
