import React, { createContext, useContext, ReactNode } from 'react';

interface Translations {
  [key: string]: {
    ja: string;
    en: string;
  };
}

const translations: Translations = {
  // ヘッダー
  'header.title': { ja: '日本語クロスワード', en: 'Japanese Crossword' },
  'header.home': { ja: 'ホーム', en: 'Home' },
  'header.game': { ja: 'ゲーム', en: 'Game' },
  'header.progress': { ja: '進捗', en: 'Progress' },
  'header.settings': { ja: '設定', en: 'Settings' },

  // ホームページ
  'home.title': { ja: '日本語クロスワードパズル', en: 'Japanese Crossword Puzzle' },
  'home.subtitle': { ja: 'JLPT N5レベルの語彙を楽しく学習', en: 'Learn JLPT N5 vocabulary in a fun way' },
  'home.startGame': { ja: 'ゲームを始める', en: 'Start Game' },
  'home.features.title': { ja: '特徴', en: 'Features' },
  'home.features.interactive': { ja: 'インタラクティブ学習', en: 'Interactive Learning' },
  'home.features.interactiveDesc': { ja: 'クロスワードパズルで楽しく日本語を学習', en: 'Learn Japanese through fun crossword puzzles' },
  'home.features.progress': { ja: '進捗管理', en: 'Progress Tracking' },
  'home.features.progressDesc': { ja: '学習の進捗を詳細に追跡', en: 'Track your learning progress in detail' },
  'home.features.adaptive': { ja: '適応学習', en: 'Adaptive Learning' },
  'home.features.adaptiveDesc': { ja: 'あなたのレベルに合わせた問題', en: 'Problems adapted to your level' },
  'home.stats.title': { ja: '学習統計', en: 'Learning Statistics' },
  'home.stats.vocabulary': { ja: '収録語彙数', en: 'Vocabulary Count' },
  'home.stats.categories': { ja: 'カテゴリー', en: 'Categories' },
  'home.stats.levels': { ja: '難易度レベル', en: 'Difficulty Levels' },
  'home.categories.title': { ja: '学習カテゴリー', en: 'Learning Categories' },
  'home.categories.greetings.desc': { ja: '基本的な挨拶表現', en: 'Basic greeting expressions' },
  'home.categories.family.desc': { ja: '家族に関する語彙', en: 'Family-related vocabulary' },
  'home.categories.numbers.desc': { ja: '基本的な数字', en: 'Basic numbers' },
  'home.categories.food.desc': { ja: '食事に関する語彙', en: 'Food-related vocabulary' },
  'home.categories.time.desc': { ja: '時間に関する表現', en: 'Time-related expressions' },
  'home.categories.places.desc': { ja: '場所に関する語彙', en: 'Place-related vocabulary' },
  'home.categories.verbs.desc': { ja: '基本的な動作', en: 'Basic actions' },
  'home.categories.adjectives.desc': { ja: '物の性質を表す語', en: 'Words describing properties' },

  // ゲームページ
  'game.title': { ja: '日本語クロスワード - レベル', en: 'Japanese Crossword - Level' },
  'game.score': { ja: 'スコア', en: 'Score' },
  'game.completed': { ja: '完成', en: 'Completed' },
  'game.newPuzzle': { ja: '新しいパズル', en: 'New Puzzle' },
  'game.loading': { ja: 'パズルを生成中...', en: 'Generating puzzle...' },
  'game.generationFailed': { ja: 'パズルの生成に失敗しました。', en: 'Failed to generate puzzle.' },
  'game.congratulations': { ja: 'おめでとうございます！クロスワードパズルを完成させました！', en: 'Congratulations! You completed the crossword puzzle!' },
  'game.horizontalClues': { ja: '横のカギ', en: 'Across' },
  'game.verticalClues': { ja: '縦のカギ', en: 'Down' },

  // 文字選択パレット
  'keyboard.title': { ja: '文字選択パレット', en: 'Character Selection Palette' },
  'keyboard.selectWord': { ja: '単語を選択してください', en: 'Please select a word' },
  'keyboard.selectCharacter': { ja: 'の文字を選んでください', en: 'Select characters for' },
  'keyboard.hiragana': { ja: 'ひらがな', en: 'Hiragana' },
  'keyboard.katakana': { ja: 'カタカナ', en: 'Katakana' },

  // 進捗ページ
  'progress.title': { ja: '学習進捗', en: 'Learning Progress' },
  'progress.overview': { ja: 'あなたの日本語学習の進み具合を確認しましょう', en: 'Check your Japanese learning progress' },
  'progress.wordsLearned': { ja: '学習済み単語', en: 'Words Learned' },
  'progress.currentLevel': { ja: '現在のレベル', en: 'Current Level' },
  'progress.totalScore': { ja: '総スコア', en: 'Total Score' },
  'progress.accuracy': { ja: '正解率', en: 'Accuracy' },
  'progress.categoryProgress': { ja: 'カテゴリー別進捗', en: 'Progress by Category' },
  'progress.achievements': { ja: '達成バッジ', en: 'Achievements' },
  'progress.beginner': { ja: '初心者', en: 'Beginner' },
  'progress.intermediate': { ja: '中級者', en: 'Intermediate' },
  'progress.advanced': { ja: '上級者', en: 'Advanced' },
  'progress.overall': { ja: '全体の進捗', en: 'Overall Progress' },
  'progress.learned': { ja: '習得済み', en: 'Learned' },
  'progress.totalVocab': { ja: '総語彙数', en: 'Total Vocabulary' },
  'progress.currentLevelLabel': { ja: '現在のレベル', en: 'Current Level' },
  'progress.achievementStatus': { ja: '達成状況', en: 'Achievement Status' },
  'progress.achievement.beginner': { ja: '5つの語彙を習得', en: 'Learn 5 vocabulary words' },
  'progress.achievement.learner': { ja: '15つの語彙を習得', en: 'Learn 15 vocabulary words' },
  'progress.achievement.master': { ja: '30つの語彙を習得', en: 'Learn 30 vocabulary words' },
  'progress.achievement.champion': { ja: '全ての語彙を習得', en: 'Learn all vocabulary words' },
  'progress.achievement.learnerTitle': { ja: '学習者', en: 'Learner' },
  'progress.achievement.masterTitle': { ja: 'マスター', en: 'Master' },
  'progress.achievement.championTitle': { ja: 'チャンピオン', en: 'Champion' },

  // 設定ページ
  'settings.title': { ja: '設定', en: 'Settings' },
  'settings.subtitle': { ja: 'アプリの設定をカスタマイズしましょう', en: 'Customize your app settings' },
  'settings.gameSettings': { ja: 'ゲーム設定', en: 'Game Settings' },
  'settings.showHiragana': { ja: 'ひらがな表示', en: 'Show Hiragana' },
  'settings.showHiraganaDesc': { ja: 'ヒント時にひらがなを表示します', en: 'Display hiragana in hints' },
  'settings.showEnglish': { ja: '英語表示', en: 'Show English' },
  'settings.showEnglishDesc': { ja: '英語の意味を常に表示します', en: 'Always display English meanings' },
  'settings.difficulty': { ja: '難易度', en: 'Difficulty' },
  'settings.difficultyDesc': { ja: 'ゲームの難易度を選択します', en: 'Select game difficulty' },
  'settings.inputMethod': { ja: '入力方式', en: 'Input Method' },
  'settings.inputMethodDesc': { ja: '文字入力の方法を選択します', en: 'Select character input method' },
  'settings.characterType': { ja: '文字種別', en: 'Character Type' },
  'settings.characterTypeDesc': { ja: '表示する文字の種類を選択します', en: 'Select character types to display' },
  'settings.appSettings': { ja: 'アプリ設定', en: 'App Settings' },
  'settings.sound': { ja: '音声', en: 'Sound' },
  'settings.soundDesc': { ja: '効果音を有効にします', en: 'Enable sound effects' },
  'settings.theme': { ja: 'テーマ', en: 'Theme' },
  'settings.themeDesc': { ja: 'アプリの外観を選択します', en: 'Select app appearance' },
  'settings.language': { ja: '言語', en: 'Language' },
  'settings.languageDesc': { ja: 'アプリの表示言語を選択します', en: 'Select app display language' },
  'settings.dataManagement': { ja: 'データ管理', en: 'Data Management' },
  'settings.resetProgress': { ja: '進捗リセット', en: 'Reset Progress' },
  'settings.resetProgressDesc': { ja: '学習進捗をすべてリセットします', en: 'Reset all learning progress' },
  'settings.reset': { ja: 'リセット', en: 'Reset' },
  'settings.about': { ja: 'アプリについて', en: 'About' },
  'settings.version': { ja: 'バージョン', en: 'Version' },
  'settings.description': { ja: 'JLPT N5レベルの日本語語彙学習アプリです。', en: 'A Japanese vocabulary learning app for JLPT N5 level.' },
  'settings.enjoyLearning': { ja: '楽しみながら日本語を学習しましょう！', en: 'Enjoy learning Japanese!' },

  // 選択肢
  'options.easy': { ja: '簡単', en: 'Easy' },
  'options.medium': { ja: '普通', en: 'Medium' },
  'options.hard': { ja: '難しい', en: 'Hard' },
  'options.keyboard': { ja: 'キーボード入力', en: 'Keyboard Input' },
  'options.dragdrop': { ja: 'ドラッグ&ドロップ', en: 'Drag & Drop' },
  'options.both': { ja: '両方', en: 'Both' },
  'options.hiraganaOnly': { ja: 'ひらがなのみ', en: 'Hiragana Only' },
  'options.katakanaOnly': { ja: 'カタカナのみ', en: 'Katakana Only' },
  'options.bothCharacters': { ja: 'ひらがな・カタカナ両方', en: 'Both Hiragana & Katakana' },
  'options.dark': { ja: 'ダーク', en: 'Dark' },
  'options.light': { ja: 'ライト', en: 'Light' },
  'options.japanese': { ja: '日本語', en: 'Japanese' },
  'options.english': { ja: 'English', en: 'English' },

  // メッセージ
  'messages.confirmReset': { ja: '本当に進捗をリセットしますか？この操作は元に戻せません。', en: 'Are you sure you want to reset progress? This action cannot be undone.' },
  'messages.progressReset': { ja: '進捗がリセットされました。', en: 'Progress has been reset.' },

  // カテゴリー
  'categories.greetings': { ja: '挨拶', en: 'Greetings' },
  'categories.family': { ja: '家族', en: 'Family' },
  'categories.numbers': { ja: '数字', en: 'Numbers' },
  'categories.food': { ja: '食べ物', en: 'Food' },
  'categories.time': { ja: '時間', en: 'Time' },
  'categories.places': { ja: '場所', en: 'Places' },
  'categories.verbs': { ja: '動詞', en: 'Verbs' },
  'categories.adjectives': { ja: '形容詞', en: 'Adjectives' }
};

interface LanguageContextType {
  language: 'ja' | 'en';
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
  language: 'ja' | 'en';
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children, language }) => {
  const t = (key: string): string => {
    const translation = translations[key];
    if (!translation) {
      console.warn(`Translation missing for key: ${key}`);
      return key;
    }
    return translation[language] || translation.ja || key;
  };

  return (
    <LanguageContext.Provider value={{ language, t }}>
      {children}
    </LanguageContext.Provider>
  );
}; 