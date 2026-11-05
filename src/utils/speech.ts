/**
 * Web Speech API 기반 무과금(0원) 고품질 한국어 음성 발음 재생 유틸리티
 */
export function playKoreanSpeech(text: string, rate: number = 0.9): Promise<void> {
  return new Promise((resolve) => {
    if (!('speechSynthesis' in window)) {
      alert('죄송합니다. 현재 브라우저가 음성 재생을 지원하지 않습니다.');
      return resolve();
    }

    // 기존 재생 중인 음성 즉시 중지
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'ko-KR';
    utterance.rate = rate; // 0.8~1.0 배속 추천
    utterance.pitch = 1.0;

    // 한국어 지원 음성 탐색
    const voices = window.speechSynthesis.getVoices();
    const koreanVoice = voices.find(
      (voice) => voice.lang.includes('ko') || voice.lang.includes('KO')
    );
    if (koreanVoice) {
      utterance.voice = koreanVoice;
    }

    utterance.onend = () => resolve();
    utterance.onerror = (e) => {
      console.warn('Speech synthesis error:', e);
      resolve(); // 오류 시에도 앱 중단 방지
    };

    window.speechSynthesis.speak(utterance);
  });
}
