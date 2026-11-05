/**
 * Korean Box - Student & Teacher Universal UI Enhancement Script (B-Side)
 * 100% Free Learning Mode & Interactive Accessibility Engine
 */
(function() {
  'use strict';

  // 1. Web Speech API - Korean TTS Pronunciation Engine
  function speakKorean(text) {
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    const cleanText = text.replace(/\[\[|\]\]/g, '').replace(/[·~/]/g, ' ').trim();
    if (!cleanText) return;

    const utter = new SpeechSynthesisUtterance(cleanText);
    utter.lang = 'ko-KR';
    utter.rate = 0.9; // natural teaching speed
    utter.pitch = 1.0;

    // Pick best Korean voice if available
    const voices = window.speechSynthesis.getVoices();
    const koVoice = voices.find(v => v.lang.startsWith('ko') || v.lang.includes('KR'));
    if (koVoice) utter.voice = koVoice;

    window.speechSynthesis.speak(utter);
  }

  // Pre-load voices
  if ('speechSynthesis' in window) {
    window.speechSynthesis.onvoiceschanged = () => { window.speechSynthesis.getVoices(); };
  }

  // 2. Attach TTS to phrase items & interactive elements
  function attachTTSListeners() {
    // Select phrase items, words, and cards
    const clickableSelectors = [
      '[data-phrase]',
      '.expr-item',
      '.phrase-card',
      '.word-item',
      '.vword',
      '.wcard',
      'button[aria-label*="듣기"]',
      'button[aria-label*="발음"]'
    ];

    document.querySelectorAll(clickableSelectors.join(', ')).forEach(el => {
      if (el._ttsAttached) return;
      el._ttsAttached = true;
      el.style.cursor = 'pointer';
      el.addEventListener('click', (e) => {
        const text = el.querySelector('.ko, .text, b, strong')?.textContent || el.textContent;
        speakKorean(text);
      });
    });

    // Also delegate click for any Korean speech icon or text with mark
    document.addEventListener('click', (e) => {
      const spkBtn = e.target.closest('button[data-speak], .speak-btn, svg[data-speak]');
      if (spkBtn) {
        e.preventDefault();
        const targetText = spkBtn.dataset.speak || spkBtn.closest('.card, .row, .item')?.textContent || '';
        speakKorean(targetText);
      }
    });
  }

  // 3. Category / Tab Switching for /phrase
  function setupCategoryTabs() {
    const tabButtons = document.querySelectorAll('button[class*="expr-module"]');
    if (!tabButtons.length) return;

    tabButtons.forEach(btn => {
      if (btn._tabAttached) return;
      btn._tabAttached = true;
      btn.addEventListener('click', () => {
        tabButtons.forEach(b => {
          b.classList.remove('expr-module__t6MR6W__on');
          b.removeAttribute('aria-current');
        });
        btn.classList.add('expr-module__t6MR6W__on');
        btn.setAttribute('aria-current', 'true');

        const catName = btn.childNodes[0]?.textContent?.trim();
        if (catName) {
          // Filter or scroll to section
          const sections = document.querySelectorAll('section, .category-group');
          sections.forEach(sec => {
            const heading = sec.querySelector('h2, h3, .cat-title');
            if (heading && heading.textContent.includes(catName)) {
              sec.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
          });
        }
      });
    });
  }

  // 4. Code input modal auto-unlock
  function setupCodeModalUnlock() {
    document.querySelectorAll('button').forEach(btn => {
      if (btn.textContent.includes('코드') || btn.textContent.includes('코드 입력')) {
        btn.addEventListener('click', (e) => {
          // If modal opens, auto-fill or display free unlocked message
          setTimeout(() => {
            const dialog = document.querySelector('[role="dialog"]');
            if (dialog) {
              const input = dialog.querySelector('input');
              if (input) {
                input.value = 'FREE-EDU-100';
                input.placeholder = '전체 무료 학습 모드 활성화됨';
              }
              const submitBtn = dialog.querySelector('button[type="submit"], button.primary');
              if (submitBtn) {
                submitBtn.textContent = '100% 무료 입장하기';
              }
            }
          }, 100);
        });
      }
    });
  }

  // 5. Floating Quick Slide Navigation Pill
  function setupQuickNavPill() {
    if (location.pathname.startsWith('/course/sample')) return; // already in slides
    if (document.getElementById('kb-quick-slide-pill')) return;

    const pill = document.createElement('a');
    pill.id = 'kb-quick-slide-pill';
    pill.href = '/course/sample/index.html';
    pill.innerHTML = '<span>⚡ 1~30과 슬라이드 열기</span>';
    pill.style.cssText = `
      position: fixed;
      bottom: 24px;
      right: 24px;
      z-index: 99999;
      background: #c8102e;
      color: #fff;
      font-weight: 700;
      font-size: 14px;
      padding: 12px 20px;
      border-radius: 9999px;
      text-decoration: none;
      box-shadow: 0 4px 18px rgba(200, 16, 46, 0.4);
      display: flex;
      align-items: center;
      gap: 6px;
      transition: transform 0.2s, box-shadow 0.2s;
    `;
    pill.onmouseover = () => { pill.style.transform = 'translateY(-2px) scale(1.03)'; };
    pill.onmouseout = () => { pill.style.transform = 'none'; };
    document.body.appendChild(pill);
  }

  // Initialize on load
  function init() {
    attachTTSListeners();
    setupCategoryTabs();
    setupCodeModalUnlock();
    setupQuickNavPill();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Periodic check for dynamically loaded elements
  setInterval(() => {
    attachTTSListeners();
    setupCategoryTabs();
  }, 2000);

})();
