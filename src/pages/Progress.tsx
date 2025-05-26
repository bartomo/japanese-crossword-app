import React from 'react';
import { jlptN5Words } from '../data/jlptN5Words';
import { useLanguage } from '../contexts/LanguageContext';
import './Progress.css';

interface ProgressProps {
  completedWords: string[];
  currentLevel: number;
}

const Progress: React.FC<ProgressProps> = ({ completedWords, currentLevel }) => {
  const { t } = useLanguage();
  const totalWords = jlptN5Words.length;
  const completionPercentage = (completedWords.length / totalWords) * 100;

  const categories = ['greetings', 'family', 'numbers', 'food', 'time', 'places', 'verbs', 'adjectives'];
  const getCategoryName = (category: string) => t(`categories.${category}`);

  const getCategoryProgress = (category: string) => {
    const categoryWords = jlptN5Words.filter(word => word.category === category);
    const completedInCategory = categoryWords.filter(word => completedWords.includes(word.id));
    return {
      completed: completedInCategory.length,
      total: categoryWords.length,
      percentage: (completedInCategory.length / categoryWords.length) * 100
    };
  };

  return (
    <div className="progress-page">
      <div className="progress-header">
        <h1>{t('progress.title')}</h1>
        <p>{t('progress.overview')}</p>
      </div>

      <div className="overall-progress">
        <div className="progress-card">
          <h2>{t('progress.overall')}</h2>
          <div className="progress-circle">
            <div className="circle-progress" style={{ '--progress': `${completionPercentage}%` } as React.CSSProperties}>
              <span className="percentage">{Math.round(completionPercentage)}%</span>
            </div>
          </div>
          <div className="progress-stats">
            <div className="stat">
              <span className="number">{completedWords.length}</span>
              <span className="label">{t('progress.learned')}</span>
            </div>
            <div className="stat">
              <span className="number">{totalWords}</span>
              <span className="label">{t('progress.totalVocab')}</span>
            </div>
            <div className="stat">
              <span className="number">{currentLevel}</span>
              <span className="label">{t('progress.currentLevelLabel')}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="category-progress">
        <h2>{t('progress.categoryProgress')}</h2>
        <div className="categories-grid">
          {categories.map(category => {
            const progress = getCategoryProgress(category);
            return (
              <div key={category} className="category-card">
                <h3>{getCategoryName(category)}</h3>
                <div className="category-bar">
                  <div 
                    className="category-fill" 
                    style={{ width: `${progress.percentage}%` }}
                  ></div>
                </div>
                <div className="category-stats">
                  <span>{progress.completed} / {progress.total}</span>
                  <span>{Math.round(progress.percentage)}%</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="achievements">
        <h2>{t('progress.achievementStatus')}</h2>
        <div className="achievements-grid">
          <div className={`achievement ${completedWords.length >= 5 ? 'unlocked' : 'locked'}`}>
            <div className="achievement-icon">🌟</div>
            <h4>{t('progress.beginner')}</h4>
            <p>{t('progress.achievement.beginner')}</p>
          </div>
          <div className={`achievement ${completedWords.length >= 15 ? 'unlocked' : 'locked'}`}>
            <div className="achievement-icon">🎯</div>
            <h4>{t('progress.achievement.learnerTitle')}</h4>
            <p>{t('progress.achievement.learner')}</p>
          </div>
          <div className={`achievement ${completedWords.length >= 30 ? 'unlocked' : 'locked'}`}>
            <div className="achievement-icon">🏆</div>
            <h4>{t('progress.achievement.masterTitle')}</h4>
            <p>{t('progress.achievement.master')}</p>
          </div>
          <div className={`achievement ${completedWords.length >= 40 ? 'unlocked' : 'locked'}`}>
            <div className="achievement-icon">👑</div>
            <h4>{t('progress.achievement.championTitle')}</h4>
            <p>{t('progress.achievement.champion')}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Progress; 