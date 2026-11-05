import scrape from 'website-scraper';
import path from 'path';
import fs from 'fs';

const outputDir = path.resolve('C:/korean_box_edu/scraped_site');

if (fs.existsSync(outputDir)) {
  fs.rmSync(outputDir, { recursive: true, force: true });
}

const options = {
  urls: ['https://www.koreanbox.co.kr/phrase'],
  directory: outputDir,
  sources: [
    { selector: 'img', attr: 'src' },
    { selector: 'link[rel="stylesheet"]', attr: 'href' },
    { selector: 'script', attr: 'src' },
    { selector: 'link[rel*="icon"]', attr: 'href' },
    { selector: 'svg use', attr: 'href' }
  ],
  request: {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
      'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
      'Accept-Language': 'ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7'
    }
  }
};

console.log('Starting website-scraper for https://www.koreanbox.co.kr/phrase ...');
scrape(options).then((result) => {
  console.log('Scraping completed! Saved files count:', result.length);
  const files = fs.readdirSync(outputDir);
  console.log('Files in output dir:', files);
}).catch((err) => {
  console.error('Scraping error:', err);
});
