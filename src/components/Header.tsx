import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import './Header.css';

const Header: React.FC = () => {
  const location = useLocation();
  const { t } = useLanguage();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          <h1>🧩 {t('header.title')}</h1>
          <span className="subtitle">JLPT N5 {t('home.subtitle')}</span>
        </Link>
        
        <nav className="nav">
          <Link 
            to="/" 
            className={`nav-link ${isActive('/') ? 'active' : ''}`}
          >
            {t('header.home')}
          </Link>
          <Link 
            to="/game" 
            className={`nav-link ${isActive('/game') ? 'active' : ''}`}
          >
            {t('header.game')}
          </Link>
          <Link 
            to="/progress" 
            className={`nav-link ${isActive('/progress') ? 'active' : ''}`}
          >
            {t('header.progress')}
          </Link>
          <Link 
            to="/settings" 
            className={`nav-link ${isActive('/settings') ? 'active' : ''}`}
          >
            {t('header.settings')}
          </Link>
          <Link 
            to="/vocabulary" 
            className={`nav-link ${isActive('/vocabulary') ? 'active' : ''}`}
          >
            語彙管理
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header; 