import React, { useState, useEffect } from 'react';
import { Header } from './Header';
import { FlashCard } from './FlashCard';
import { QuizModal } from './QuizModal';
import { KOREAN_PHRASES } from '../data/koreanData';
import type { PhraseItem } from '../data/koreanData';
import { Search, Filter, CheckCircle2 } from 'lucide-react';

const STORAGE_KEY = 'korean_box_learned_ids_v1';

export const KoreanEduApp: React.FC = () => {
  const [selectedLevel, setSelectedLevel] = useState<number>(1);
  const [activeTab, setActiveTab] = useState<'cards' | 'quiz'>('cards');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('전체');
  const [activeQuizPhrase, setActiveQuizPhrase] = useState<PhraseItem | null>(null);

  // 로컬 스토리지 연동 학습 완료 ID 목록
  const [learnedIds, setLearnedIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(learnedIds));
    } catch (e) {
      console.warn('LocalStorage save failed:', e);
    }
  }, [learnedIds]);

  // 학습 완료 토글
  const handleToggleLearned = (id: string) => {
    setLearnedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // 퀴즈 정답 시 자동 완료 처리
  const handleQuizSuccess = (id: string) => {
    if (!learnedIds.includes(id)) {
      setLearnedIds((prev) => [...prev, id]);
    }
  };

  // 현재 레벨에 해당하는 카드 목록
  const levelPhrases = KOREAN_PHRASES.filter((item) => item.level === selectedLevel);

  // 카테고리 목록 추출
  const categories = ['전체', ...Array.from(new Set(levelPhrases.map((p) => p.category)))];

  // 필터링 적용된 목록 (카테고리 및 검색어)
  const filteredPhrases = levelPhrases.filter((p) => {
    const matchCat = selectedCategory === '전체' || p.category === selectedCategory;
    const matchSearch =
      searchQuery.trim() === '' ||
      p.korean.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.english.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.pronunciation.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });

  const learnedCountInLevel = levelPhrases.filter((p) => learnedIds.includes(p.id)).length;

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      {/* 상단 헤더 및 등급 선택 네비게이션 */}
      <Header
        selectedLevel={selectedLevel}
        onSelectLevel={(lvl) => {
          setSelectedLevel(lvl);
          setSelectedCategory('전체');
        }}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        learnedCount={learnedCountInLevel}
        totalCount={levelPhrases.length}
      />

      {/* 메인 콘텐츠 영역 */}
      <main className="max-w-5xl mx-auto px-4 py-6 flex-1 w-full">
        {/* 검색 및 카테고리 필터 바 */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mb-6">
          {/* 검색창 */}
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="표현, 영어 뜻, 발음 검색..."
              className="w-full pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all shadow-2xs"
            />
          </div>

          {/* 상황별(카테고리) 뱃지 필터 */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-1 scrollbar-none">
            <span className="text-xs text-slate-400 flex items-center gap-1 shrink-0 mr-1">
              <Filter className="w-3.5 h-3.5" />
              상황:
            </span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? 'bg-slate-900 text-white shadow-2xs'
                    : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* ================= TAB 1: 카드 학습 모드 ================= */}
        {activeTab === 'cards' && (
          <div>
            {filteredPhrases.length === 0 ? (
              <div className="text-center py-16 bg-white rounded-2xl border border-slate-200/80 p-8 shadow-2xs">
                <Search className="w-10 h-10 text-slate-300 mx-auto mb-3" />
                <p className="text-slate-700 font-bold">조건에 맞는 한국어 표현이 없습니다.</p>
                <p className="text-xs text-slate-400 mt-1">다른 검색어나 카테고리를 선택해 보세요.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {filteredPhrases.map((phrase) => (
                  <FlashCard
                    key={phrase.id}
                    phrase={phrase}
                    isLearned={learnedIds.includes(phrase.id)}
                    onToggleLearned={handleToggleLearned}
                    onOpenQuiz={(p) => setActiveQuizPhrase(p)}
                  />
                ))}
              </div>
            )}
          </div>
        )}

        {/* ================= TAB 2: 실전 퀴즈 모드 ================= */}
        {activeTab === 'quiz' && (
          <div className="space-y-4">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-6 text-white shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-white/20 text-white backdrop-blur-xs">
                  {selectedLevel}급 마스터 챌린지
                </span>
                <h2 className="text-xl font-bold mt-2">오늘 배운 표현을 테스트해 보세요</h2>
                <p className="text-xs text-blue-100 mt-1">
                  모든 퀴즈를 통과하면 자동으로 학습 완료 배지가 부여됩니다.
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-black">{learnedCountInLevel} / {levelPhrases.length}</span>
                <span className="text-xs text-blue-100">완료</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {levelPhrases.map((phrase, idx) => {
                const isDone = learnedIds.includes(phrase.id);
                return (
                  <div
                    key={phrase.id}
                    onClick={() => setActiveQuizPhrase(phrase)}
                    className="bg-white p-5 rounded-2xl border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all cursor-pointer flex items-center justify-between gap-3"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-slate-400">#{idx + 1}</span>
                        <span className="text-xs font-semibold px-2 py-0.5 rounded-md bg-slate-100 text-slate-600">
                          {phrase.category}
                        </span>
                      </div>
                      <p className="text-base font-bold text-slate-900">{phrase.korean}</p>
                      <p className="text-xs text-slate-500">{phrase.english}</p>
                    </div>

                    <div className="shrink-0">
                      {isDone ? (
                        <div className="w-9 h-9 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs" title="통과함">
                          <CheckCircle2 className="w-5 h-5" />
                        </div>
                      ) : (
                        <div className="px-3 py-1.5 rounded-xl bg-blue-50 text-blue-600 font-semibold text-xs border border-blue-100 hover:bg-blue-600 hover:text-white transition-colors">
                          도전
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </main>

      {/* 퀴즈 모달 */}
      {activeQuizPhrase && (
        <QuizModal
          phrase={activeQuizPhrase}
          onClose={() => setActiveQuizPhrase(null)}
          onSuccess={handleQuizSuccess}
        />
      )}

      {/* 하단 푸터 */}
      <footer className="border-t border-slate-200 bg-white py-6 mt-12 text-center text-xs text-slate-400">
        <p className="font-semibold text-slate-600">한국어박스 EDU - 수강생 맞춤형 인터랙티브 학습 시스템</p>
        <p className="mt-1">국립국어원 국제 통용 한국어 표준 교육과정 및 TOPIK 데이터 연계</p>
      </footer>
    </div>
  );
};
