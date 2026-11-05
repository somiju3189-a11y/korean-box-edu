import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Volume2, RotateCcw, Check, Sparkles, BookOpenCheck } from 'lucide-react';
import type { PhraseItem } from '../data/koreanData';
import { playKoreanSpeech } from '../utils/speech';

interface FlashCardProps {
  phrase: PhraseItem;
  isLearned: boolean;
  onToggleLearned: (id: string) => void;
  onOpenQuiz: (phrase: PhraseItem) => void;
}

export const FlashCard: React.FC<FlashCardProps> = ({
  phrase,
  isLearned,
  onToggleLearned,
  onOpenQuiz,
}) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  const handlePlaySpeech = async (e: React.MouseEvent, rate: number = 0.9) => {
    e.stopPropagation();
    setIsPlayingAudio(true);
    await playKoreanSpeech(phrase.korean, rate);
    setIsPlayingAudio(false);
  };

  return (
    <div className="relative w-full h-[360px] select-none perspective-[1200px]">
      <motion.div
        className="w-full h-full relative cursor-pointer"
        style={{ transformStyle: 'preserve-3d' }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        onClick={() => setIsFlipped(!isFlipped)}
      >
        {/* ================= CARD FRONT (앞면) ================= */}
        <div
          className="absolute inset-0 w-full h-full bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow p-6 flex flex-col justify-between"
          style={{ backfaceVisibility: 'hidden' }}
        >
          {/* 상단: 카테고리 태그 및 학습 완료 토글 */}
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-100">
              #{phrase.category}
            </span>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onToggleLearned(phrase.id);
                }}
                className={`p-1.5 rounded-full border text-xs flex items-center gap-1 transition-all ${
                  isLearned
                    ? 'bg-emerald-500 border-emerald-500 text-white'
                    : 'border-slate-300 text-slate-400 hover:border-slate-400'
                }`}
                title={isLearned ? '학습 완료됨' : '학습 완료로 표시'}
              >
                <Check className="w-3.5 h-3.5 stroke-[3]" />
              </button>
            </div>
          </div>

          {/* 중앙: 한글 표현 및 발음 기호 */}
          <div className="text-center my-auto py-2">
            <p className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-snug tracking-tight break-keep">
              {phrase.korean}
            </p>
            <p className="text-xs sm:text-sm text-slate-400 font-mono mt-3">
              [{phrase.pronunciation}]
            </p>

            {/* 음성 발음 재생 컨트롤러 */}
            <div className="flex items-center justify-center gap-2 mt-5">
              <button
                type="button"
                onClick={(e) => handlePlaySpeech(e, 0.9)}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold shadow-xs transition-all ${
                  isPlayingAudio
                    ? 'bg-blue-600 text-white animate-pulse'
                    : 'bg-blue-50 text-blue-700 hover:bg-blue-100 border border-blue-200'
                }`}
              >
                <Volume2 className="w-4 h-4" />
                <span>표준 발음</span>
              </button>
              <button
                type="button"
                onClick={(e) => handlePlaySpeech(e, 0.7)}
                className="px-2.5 py-1.5 rounded-full text-xs font-medium text-slate-600 bg-slate-100 hover:bg-slate-200 transition-colors"
                title="느린 속도로 듣기"
              >
                0.7x 느리게
              </button>
            </div>
          </div>

          {/* 하단: 뒤집기 유도 가이드 */}
          <div className="flex items-center justify-between text-xs text-slate-400 border-t border-slate-100 pt-3">
            <span className="flex items-center gap-1">
              <RotateCcw className="w-3.5 h-3.5" />
              카드를 누르면 뜻과 예문이 나옵니다
            </span>
            <span className="text-blue-500 font-medium">탭하여 뒤집기 →</span>
          </div>
        </div>

        {/* ================= CARD BACK (뒷면) ================= */}
        <div
          className="absolute inset-0 w-full h-full bg-slate-900 text-white rounded-2xl shadow-md p-6 flex flex-col justify-between"
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
          }}
        >
          {/* 상단: 문법 포인트 배지 및 되돌리기 아이콘 */}
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-800 text-amber-300 border border-slate-700">
              문법: {phrase.grammarPoint}
            </span>
            <RotateCcw className="w-4 h-4 text-slate-400" />
          </div>

          {/* 중앙: 영어 뜻 및 실생활 예문 */}
          <div className="my-auto space-y-4 py-2">
            <div>
              <p className="text-xs uppercase tracking-wider text-slate-400 font-semibold">
                English Meaning
              </p>
              <p className="text-lg sm:text-xl font-bold text-white mt-1">
                {phrase.english}
              </p>
            </div>

            <div className="bg-slate-800/80 rounded-xl p-3 border border-slate-700/60 text-left space-y-2">
              <p className="text-xs text-slate-400 font-semibold flex items-center gap-1">
                <BookOpenCheck className="w-3.5 h-3.5 text-blue-400" />
                실생활 회화 예문
              </p>
              {phrase.examples.map((ex, idx) => (
                <div key={idx} className="text-xs space-y-0.5">
                  <p className="text-slate-200 font-medium">{ex.korean}</p>
                  <p className="text-slate-400">{ex.english}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 하단: 즉석 퀴즈 풀기 버튼 */}
          <div className="pt-2 border-t border-slate-800 flex items-center justify-between">
            <span className="text-xs text-slate-400">다시 누르면 앞면으로</span>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onOpenQuiz(phrase);
              }}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold bg-amber-500 hover:bg-amber-400 text-slate-950 transition-colors shadow-xs"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>이 표현 퀴즈 풀기</span>
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
