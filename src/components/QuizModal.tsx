import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { X, CheckCircle, AlertCircle, Sparkles, ArrowRight, RotateCcw } from 'lucide-react';
import type { PhraseItem } from '../data/koreanData';

interface QuizModalProps {
  phrase: PhraseItem;
  onClose: () => void;
  onSuccess: (id: string) => void;
}

export const QuizModal: React.FC<QuizModalProps> = ({ phrase, onClose, onSuccess }) => {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);

  const isCorrect = selectedOption === phrase.quiz.answerIndex;

  const handleSelect = (idx: number) => {
    if (isAnswered) return;
    setSelectedOption(idx);
    setIsAnswered(true);

    if (idx === phrase.quiz.answerIndex) {
      // 정답 시 축하 팡파르 (Confetti)
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 },
      });
      onSuccess(phrase.id);
    }
  };

  const handleRetry = () => {
    setSelectedOption(null);
    setIsAnswered(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
      <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-slate-100 relative animate-in fade-in zoom-in-95 duration-200">
        {/* 닫기 버튼 */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* 상단 뱃지 */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-800 flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            실전 확인 퀴즈
          </span>
          <span className="text-xs text-slate-400">#{phrase.category}</span>
        </div>

        {/* 질문 */}
        <h3 className="text-lg font-bold text-slate-900 leading-snug mb-5">
          Q. {phrase.quiz.question}
        </h3>

        {/* 선택지 목록 */}
        <div className="space-y-2.5">
          {phrase.quiz.options.map((option, idx) => {
            let btnStyle = 'border-slate-200 hover:border-blue-400 hover:bg-blue-50/50 text-slate-800';

            if (isAnswered) {
              if (idx === phrase.quiz.answerIndex) {
                btnStyle = 'border-emerald-500 bg-emerald-50 text-emerald-800 font-semibold';
              } else if (idx === selectedOption) {
                btnStyle = 'border-rose-500 bg-rose-50 text-rose-800';
              } else {
                btnStyle = 'border-slate-200 text-slate-400 opacity-60';
              }
            }

            return (
              <button
                key={idx}
                type="button"
                onClick={() => handleSelect(idx)}
                disabled={isAnswered}
                className={`w-full text-left p-3.5 rounded-xl border-2 transition-all flex items-center justify-between text-sm ${btnStyle}`}
              >
                <span>{idx + 1}. {option}</span>
                {isAnswered && idx === phrase.quiz.answerIndex && (
                  <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0" />
                )}
                {isAnswered && idx === selectedOption && idx !== phrase.quiz.answerIndex && (
                  <AlertCircle className="w-5 h-5 text-rose-500 shrink-0" />
                )}
              </button>
            );
          })}
        </div>

        {/* 해설 및 결과 피드백 */}
        {isAnswered && (
          <div
            className={`mt-5 p-4 rounded-xl border text-xs leading-relaxed ${
              isCorrect
                ? 'bg-emerald-50/70 border-emerald-200 text-emerald-900'
                : 'bg-rose-50/70 border-rose-200 text-rose-900'
            }`}
          >
            <p className="font-bold flex items-center gap-1.5 mb-1 text-sm">
              {isCorrect ? '정답입니다! 완벽해요.' : '아쉽네요! 다시 확인해 보세요.'}
            </p>
            <p>{phrase.quiz.explanation}</p>
          </div>
        )}

        {/* 하단 액션 버튼 */}
        {isAnswered && (
          <div className="mt-5 flex items-center justify-end gap-2">
            {!isCorrect && (
              <button
                type="button"
                onClick={handleRetry}
                className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 bg-slate-100 hover:bg-slate-200 flex items-center gap-1 transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                다시 풀기
              </button>
            )}
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 flex items-center gap-1.5 transition-colors shadow-xs"
            >
              <span>확인 완료</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
