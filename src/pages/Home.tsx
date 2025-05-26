import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import './Home.css';

const Home: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <div className="home">
      <div className="hero-section">
        <h1 className="hero-title">{t('home.title')}</h1>
        <p className="hero-subtitle">
          {t('home.subtitle')}
        </p>
        
        <div className="features">
          <div className="feature-card">
            <div className="feature-icon">📚</div>
            <h3>{t('home.features.interactive')}</h3>
            <p>{t('home.features.interactiveDesc')}</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">🎯</div>
            <h3>{t('home.features.progress')}</h3>
            <p>{t('home.features.progressDesc')}</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">🎮</div>
            <h3>{t('home.features.adaptive')}</h3>
            <p>{t('home.features.adaptiveDesc')}</p>
          </div>
        </div>
        
        <div className="cta-buttons">
          <Link to="/game" className="cta-button primary">
            {t('home.startGame')}
          </Link>
          <Link to="/progress" className="cta-button secondary">
            {t('progress.title')}
          </Link>
        </div>
      </div>
      
      <div className="stats-section">
        <h2>{t('home.stats.title')}</h2>
        <div className="stats-grid">
          <div className="stat-item">
            <div className="stat-number">40</div>
            <div className="stat-label">{t('home.stats.vocabulary')}</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">8</div>
            <div className="stat-label">{t('home.stats.categories')}</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">3</div>
            <div className="stat-label">{t('home.stats.levels')}</div>
          </div>
        </div>
      </div>
      
      <div className="categories-section">
        <h2>{t('home.categories.title')}</h2>
        <div className="categories-grid">
          <div className="category-card">
            <span className="category-emoji">👋</span>
            <h4>{t('categories.greetings')}</h4>
            <p>{t('home.categories.greetings.desc')}</p>
          </div>
          <div className="category-card">
            <span className="category-emoji">👨‍👩‍👧‍👦</span>
            <h4>{t('categories.family')}</h4>
            <p>{t('home.categories.family.desc')}</p>
          </div>
          <div className="category-card">
            <span className="category-emoji">🔢</span>
            <h4>{t('categories.numbers')}</h4>
            <p>{t('home.categories.numbers.desc')}</p>
          </div>
          <div className="category-card">
            <span className="category-emoji">🍽️</span>
            <h4>{t('categories.food')}</h4>
            <p>{t('home.categories.food.desc')}</p>
          </div>
          <div className="category-card">
            <span className="category-emoji">⏰</span>
            <h4>{t('categories.time')}</h4>
            <p>{t('home.categories.time.desc')}</p>
          </div>
          <div className="category-card">
            <span className="category-emoji">🏢</span>
            <h4>{t('categories.places')}</h4>
            <p>{t('home.categories.places.desc')}</p>
          </div>
          <div className="category-card">
            <span className="category-emoji">🏃</span>
            <h4>{t('categories.verbs')}</h4>
            <p>{t('home.categories.verbs.desc')}</p>
          </div>
          <div className="category-card">
            <span className="category-emoji">📏</span>
            <h4>{t('categories.adjectives')}</h4>
            <p>{t('home.categories.adjectives.desc')}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home; 