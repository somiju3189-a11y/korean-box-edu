// scripts/check_refs.mjs
import fs from 'fs';

const refs = new Set();
for (let i = 1; i <= 30; i++) {
  const p = `public/course/sample/data/lesson${i}.js`;
  const c = fs.readFileSync(p, 'utf8');
  const m = c.match(/[a-zA-Z0-9_\-]+\.(?:svg|png|jpg)/g);
  if (m) m.forEach(x => refs.add(x));
  const pMatches = c.match(/"pic"\s*:\s*"([^"]+)"/g);
  if (pMatches) {
    pMatches.forEach(pm => {
      const val = pm.split(':')[1].replace(/["\s]/g, '');
      refs.add(val);
    });
  }
}
console.log('Found refs in lessons:', Array.from(refs));
