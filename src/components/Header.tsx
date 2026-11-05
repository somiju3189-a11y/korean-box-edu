import React from 'react';
import { BookOpen, CheckCircle2, Sparkles, GraduationCap } from 'lucide-react';
import { KOREAN_LEVELS } from '../data/koreanData';

interface HeaderProps {
  selectedLevel: number;
  onSelectLevel: (level: number) => void;
  activeTab: 'cards' | 'quiz';
  setActiveTab: (tab: 'cards' | 'quiz') => void;
  learnedCount: number;
  totalCount: number;
}

export const Header: React.FC<HeaderProps> = ({
  selectedLevel,
  onSelectLevel,
  activeTab,
  setActiveTab,
  learnedCount,
  totalCount,
}) => {
  const currentLevelInfo = KOREAN_LEVELS.find((l) => l.level === selectedLevel);
  const progressPercent = totalCount > 0 ? Math.round((learnedCount / totalCount) * 100) : 0;

  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-30 shadow-xs">
      <div className="max-w-5xl mx-auto px-4 py-3 sm:py-4">
        {/* 상단 타이틀 영역 */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-xl font-bold text-slate-900 tracking-tight">
                  한국어박스 EDU
                </h1>
                <span className="text-xs bg-blue-100 text-blue-700 font-semibold px-2 py-0.5 rounded-full">
                  수강생 전용
                </span>
              </div>
              <p className="text-xs text-slate-500 hidden sm:block">
                국립국어원 & TOPIK 공인 등급별 필수 한국어 마스터 클래스
              </p>
            </div>
          </div>

          {/* 모드 전환 탭 (카드 학습 vs 실전 퀴즈) */}
          <div className="flex items-center bg-slate-100 p-1 rounded-xl w-full sm:w-auto">
            <button
              onClick={() => setActiveTab('cards')}
              className={`flex-1 sm:flex-initial flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                activeTab === 'cards'
                  ? 'bg-white text-blue-600 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>표현 카드 학습</span>
            </button>
            <button
              onClick={() => setActiveTab('quiz')}
              className={`flex-1 sm:flex-initial flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                activeTab === 'quiz'
                  ? 'bg-white text-blue-600 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Sparkles className="w-4 h-4 text-amber-500" />
              <span>실전 퀴즈 모드</span>
            </button>
          </div>
        </div>

        {/* 1~6급 등급 선택 탭 바 */}
        <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          {KOREAN_LEVELS.map((lvl) => (
            <button
              key={lvl.level}
              onClick={() => onSelectLevel(lvl.level)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                selectedLevel === lvl.level
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {lvl.name}
            </button>
          ))}
        </div>

        {/* 현재 등급 설명 및 학습 진행률 */}
        <div className="mt-3 flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs text-slate-500 gap-2">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-slate-700">현재 목표:</span>
            <span>{currentLevelInfo?.desc}</span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
            <div className="flex items-center gap-1.5 text-slate-700 font-medium">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              <span>학습 완료: {learnedCount} / {totalCount} ({progressPercent}%)</span>
            </div>
            <div className="w-24 bg-slate-100 h-2 rounded-full overflow-hidden">
              <div
                className="bg-emerald-500 h-full transition-all duration-300"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
