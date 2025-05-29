import React from 'react';
import { useSettings } from '../contexts/SettingsContext';
import { useLanguage } from '../contexts/LanguageContext';
import './Settings.css';

const Settings: React.FC = () => {
  const { settings, updateSettings } = useSettings();
  const { t } = useLanguage();

  const handleSettingChange = (key: string, value: any) => {
    updateSettings({ [key]: value });
  };

  const resetProgress = () => {
    if (window.confirm(t('messages.confirmReset'))) {
      localStorage.clear();
      alert(t('messages.progressReset'));
    }
  };

  return (
    <div className="settings-page">
      <div className="settings-header">
        <h1>{t('settings.title')}</h1>
        <p>{t('settings.subtitle')}</p>
      </div>

      <div className="settings-content">
        <div className="settings-section">
          <h2>{t('settings.gameSettings')}</h2>
          
          <div className="setting-item">
            <div className="setting-info">
              <h3>{t('settings.showHiragana')}</h3>
              <p>{t('settings.showHiraganaDesc')}</p>
            </div>
            <label className="toggle">
              <input
                type="checkbox"
                checked={settings.showHiragana}
                onChange={(e) => handleSettingChange('showHiragana', e.target.checked)}
              />
              <span className="slider"></span>
            </label>
          </div>

          <div className="setting-item">
            <div className="setting-info">
              <h3>{t('settings.showEnglish')}</h3>
              <p>{t('settings.showEnglishDesc')}</p>
            </div>
            <label className="toggle">
              <input
                type="checkbox"
                checked={settings.showEnglish}
                onChange={(e) => handleSettingChange('showEnglish', e.target.checked)}
              />
              <span className="slider"></span>
            </label>
          </div>

          <div className="setting-item">
            <div className="setting-info">
              <h3>{t('settings.difficulty')}</h3>
              <p>{t('settings.difficultyDesc')}</p>
            </div>
            <select
              value={settings.difficulty}
              onChange={(e) => handleSettingChange('difficulty', e.target.value)}
              className="setting-select"
            >
              <option value="easy">{t('options.easy')}</option>
              <option value="medium">{t('options.medium')}</option>
              <option value="hard">{t('options.hard')}</option>
            </select>
          </div>

          <div className="setting-item">
            <div className="setting-info">
              <h3>{t('settings.inputMethod')}</h3>
              <p>{t('settings.inputMethodDesc')}</p>
            </div>
            <select
              value={settings.inputMethod}
              onChange={(e) => handleSettingChange('inputMethod', e.target.value)}
              className="setting-select"
            >
              <option value="keyboard">{t('options.keyboard')}</option>
              <option value="dragdrop">{t('options.dragdrop')}</option>
              <option value="both">{t('options.both')}</option>
            </select>
          </div>

          <div className="setting-item">
            <div className="setting-info">
              <h3>{t('settings.characterType')}</h3>
              <p>{t('settings.characterTypeDesc')}</p>
            </div>
            <select
              value={settings.characterType}
              onChange={(e) => handleSettingChange('characterType', e.target.value)}
              className="setting-select"
            >
              <option value="hiragana">{t('options.hiraganaOnly')}</option>
              <option value="katakana">{t('options.katakanaOnly')}</option>
              <option value="both">{t('options.bothCharacters')}</option>
            </select>
          </div>

          <div className="setting-item">
            <div className="setting-info">
              <h3>ヒント表示方法</h3>
              <p>クロスワードのヒントを英語単語か日本語説明のどちらで表示するかを選択します</p>
            </div>
            <select
              value={settings.hintType}
              onChange={(e) => handleSettingChange('hintType', e.target.value)}
              className="setting-select"
            >
              <option value="english">英語単語</option>
              <option value="description">日本語説明</option>
              <option value="both">両方表示</option>
            </select>
          </div>

          <div className="setting-item">
            <div className="setting-info">
              <h3>ヒント言語</h3>
              <p>説明文を日本語と英語のどちらで表示するかを選択します</p>
            </div>
            <select
              value={settings.hintLanguage}
              onChange={(e) => handleSettingChange('hintLanguage', e.target.value)}
              className="setting-select"
            >
              <option value="ja">日本語（ふりがな付き）</option>
              <option value="en">英語</option>
              <option value="auto">自動選択</option>
            </select>
          </div>
        </div>

        <div className="settings-section">
          <h2>{t('settings.appSettings')}</h2>
          
          <div className="setting-item">
            <div className="setting-info">
              <h3>{t('settings.sound')}</h3>
              <p>{t('settings.soundDesc')}</p>
            </div>
            <label className="toggle">
              <input
                type="checkbox"
                checked={settings.soundEnabled}
                onChange={(e) => handleSettingChange('soundEnabled', e.target.checked)}
              />
              <span className="slider"></span>
            </label>
          </div>

          <div className="setting-item">
            <div className="setting-info">
              <h3>{t('settings.theme')}</h3>
              <p>{t('settings.themeDesc')}</p>
            </div>
            <select
              value={settings.theme}
              onChange={(e) => handleSettingChange('theme', e.target.value)}
              className="setting-select"
            >
              <option value="dark">{t('options.dark')}</option>
              <option value="light">{t('options.light')}</option>
            </select>
          </div>

          <div className="setting-item">
            <div className="setting-info">
              <h3>{t('settings.language')}</h3>
              <p>{t('settings.languageDesc')}</p>
            </div>
            <select
              value={settings.language}
              onChange={(e) => handleSettingChange('language', e.target.value)}
              className="setting-select"
            >
              <option value="ja">{t('options.japanese')}</option>
              <option value="en">{t('options.english')}</option>
            </select>
          </div>
        </div>

        <div className="settings-section">
          <h2>{t('settings.dataManagement')}</h2>
          
          <div className="setting-item">
            <div className="setting-info">
              <h3>{t('settings.resetProgress')}</h3>
              <p>{t('settings.resetProgressDesc')}</p>
            </div>
            <button 
              onClick={resetProgress}
              className="danger-btn"
            >
              {t('settings.resetButton')}
            </button>
          </div>
        </div>

        <div className="settings-section">
          <h2>{t('settings.about')}</h2>
          
          <div className="about-info">
            <h3>{t('header.title')}</h3>
            <p>{t('settings.version')}: 1.0.0</p>
            <p>{t('settings.description')}</p>
            <p>{t('settings.enjoyLearning')}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings; 