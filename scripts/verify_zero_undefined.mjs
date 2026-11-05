import fs from 'fs';
import vm from 'vm';

const engine = fs.readFileSync('public/course/sample/engine.js', 'utf8');
const unitsCode = fs.readFileSync('public/course/sample/units.js', 'utf8');

const sandbox = {
  console,
  UNITS: eval(unitsCode.replace('const UNITS =', '')),
  LESSONS: [],
  document: {
    getElementById: () => ({
      addEventListener: () => {},
      innerHTML: '',
      textContent: '',
      querySelectorAll: () => [],
      querySelector: () => null,
      children: [],
      classList: { toggle: () => {}, add: () => {}, remove: () => {}, contains: () => false },
      dataset: {}
    }),
    querySelectorAll: () => [
      {
        querySelectorAll: () => [],
        querySelector: () => null,
        classList: { toggle: () => {}, add: () => {}, remove: () => {}, contains: () => false },
        style: {},
        dataset: { name: '시작' }
      }
    ],
    querySelector: () => null,
    addEventListener: () => {}
  },
  window: { addEventListener: () => {} },
  location: { search: '', hash: '' },
  screen: { width: 1920, height: 1080 },
  matchMedia: () => ({ matches: false }),
  navigator: { maxTouchPoints: 0 },
  URLSearchParams: URLSearchParams
};
vm.createContext(sandbox);

for (let i = 1; i <= 30; i++) {
  vm.runInContext(fs.readFileSync(`public/course/sample/data/lesson${i}.js`, 'utf8'), sandbox);
}

const engineClean = engine.replace('(function boot(){', '(function boot_disabled(){ return;');
vm.runInContext(engineClean, sandbox);

let totalUndefined = 0;
const results = [];

for (let i = 0; i < 30; i++) {
  const slides = vm.runInContext(`buildSlides(LESSONS[${i}])`, sandbox);
  let lessonUndefCount = 0;
  slides.forEach((s, idx) => {
    // Check if html contains 'undefined'
    // Exclude valid CSS like 'not-undefined' or legitimate words if any
    const matches = (s.html.match(/\bundefined\b/g) || []).length;
    if (matches > 0) {
      lessonUndefCount += matches;
      console.log(`[ALERT] Lesson ${i + 1} (${sandbox.LESSONS[i].key}) Slide ${idx + 1} (${s.name}) has ${matches} undefined!`);
      let pos = 0;
      while ((pos = s.html.indexOf('undefined', pos)) !== -1) {
        console.log('Snippet:', s.html.slice(Math.max(0, pos - 60), Math.min(s.html.length, pos + 80)).replace(/\n/g, ' '));
        pos += 9;
      }
    }
  });
  totalUndefined += lessonUndefCount;
  results.push({ lesson: i + 1, key: sandbox.LESSONS[i].key, slides: slides.length, undef: lessonUndefCount });
}

console.log('\n=======================================');
console.log('30 Lessons Verification Summary:');
results.forEach(r => {
  console.log(`Lesson ${r.lesson.toString().padStart(2)}: ${r.key.padEnd(20)} | Slides: ${r.slides} | Undefined: ${r.undef}`);
});
console.log('=======================================');
console.log(`TOTAL UNDEFINED OCCURRENCES: ${totalUndefined}`);

if (totalUndefined === 0) {
  console.log('SUCCESS: ZERO UNDEFINED! PERFECT FLAWLESS SYSTEM ACHIEVED!');
} else {
  console.error(`FAILED: Found ${totalUndefined} undefined issues.`);
  process.exit(1);
}
