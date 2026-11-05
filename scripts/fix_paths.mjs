import fs from 'fs';

let content = fs.readFileSync('C:/korean_box_edu/scraped_site/index.html', 'utf8');
content = content.replaceAll('href="css/', 'href="/css/');
content = content.replaceAll('src="js/', 'src="/js/');
content = content.replaceAll('src="fonts/', 'src="/fonts/');
content = content.replaceAll('href="images/', 'href="/images/');

fs.writeFileSync('C:/korean_box_edu/index.html', content, 'utf8');
console.log('Successfully written index.html with clean UTF-8 and absolute asset paths.');
