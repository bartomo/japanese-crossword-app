import { Word } from '../types';
import { expandedVocabulary, combineVocabulary } from './expandedVocabulary';

// 既存の基本語彙データ
const baseVocabulary: Word[] = [
  // 基本的な挨拶
  {
    id: 'w001',
    japanese: 'おはよう',
    hiragana: 'おはよう',
    english: 'good morning',
    descriptionJa: '朝（あさ）の挨拶（あいさつ）',
    descriptionEn: 'A greeting used in the morning',
    category: 'greetings',
    jlptLevel: 'N5',
    difficulty: 1
  },
  {
    id: 'w002',
    japanese: 'こんにちは',
    hiragana: 'こんにちは',
    english: 'hello',
    descriptionJa: '昼間（ひるま）の挨拶（あいさつ）',
    descriptionEn: 'A greeting used during the day',
    category: 'greetings',
    jlptLevel: 'N5',
    difficulty: 1
  },
  {
    id: 'w003',
    japanese: 'こんばんは',
    hiragana: 'こんばんは',
    english: 'good evening',
    descriptionJa: '夜（よる）の挨拶（あいさつ）',
    descriptionEn: 'A greeting used in the evening',
    category: 'greetings',
    jlptLevel: 'N5',
    difficulty: 1
  },
  {
    id: 'w004',
    japanese: 'ありがとう',
    hiragana: 'ありがとう',
    english: 'thank you',
    descriptionJa: '感謝（かんしゃ）の言葉（ことば）',
    descriptionEn: 'Expression of gratitude',
    category: 'greetings',
    jlptLevel: 'N5',
    difficulty: 1
  },
  {
    id: 'w005',
    japanese: 'すみません',
    hiragana: 'すみません',
    english: 'excuse me/sorry',
    descriptionJa: '謝罪（しゃざい）や呼（よ）びかけの言葉（ことば）',
    descriptionEn: 'Used for apology or getting attention',
    category: 'greetings',
    jlptLevel: 'N5',
    difficulty: 1
  },

  // 家族
  {
    id: 'w010',
    japanese: '父',
    hiragana: 'ちち',
    english: 'father',
    descriptionJa: '男性（だんせい）の親（おや）',
    descriptionEn: 'Male parent',
    category: 'family',
    jlptLevel: 'N5',
    difficulty: 1
  },
  {
    id: 'w011',
    japanese: '母',
    hiragana: 'はは',
    english: 'mother',
    descriptionJa: '女性（じょせい）の親（おや）',
    descriptionEn: 'Female parent',
    category: 'family',
    jlptLevel: 'N5',
    difficulty: 1
  },
  {
    id: 'w012',
    japanese: '兄',
    hiragana: 'あに',
    english: 'older brother',
    descriptionJa: '年上（としうえ）の男（おとこ）のきょうだい',
    descriptionEn: 'Older male sibling',
    category: 'family',
    jlptLevel: 'N5',
    difficulty: 1
  },
  {
    id: 'w013',
    japanese: '姉',
    hiragana: 'あね',
    english: 'older sister',
    descriptionJa: '年上（としうえ）の女（おんな）のきょうだい',
    descriptionEn: 'Older female sibling',
    category: 'family',
    jlptLevel: 'N5',
    difficulty: 1
  },
  {
    id: 'w014',
    japanese: '弟',
    hiragana: 'おとうと',
    english: 'younger brother',
    descriptionJa: '年下（としした）の男（おとこ）のきょうだい',
    descriptionEn: 'Younger male sibling',
    category: 'family',
    jlptLevel: 'N5',
    difficulty: 1
  },
  {
    id: 'w015',
    japanese: '妹',
    hiragana: 'いもうと',
    english: 'younger sister',
    descriptionJa: '年下（としした）の女（おんな）のきょうだい',
    descriptionEn: 'Younger female sibling',
    category: 'family',
    jlptLevel: 'N5',
    difficulty: 1
  },

  // 数字
  {
    id: 'w020',
    japanese: '一',
    hiragana: 'いち',
    english: 'one',
    descriptionJa: '数字（すうじ）の1（いち）',
    descriptionEn: 'The number 1',
    category: 'numbers',
    jlptLevel: 'N5',
    difficulty: 1
  },
  {
    id: 'w021',
    japanese: '二',
    hiragana: 'に',
    english: 'two',
    descriptionJa: '数字（すうじ）の2（に）',
    descriptionEn: 'The number 2',
    category: 'numbers',
    jlptLevel: 'N5',
    difficulty: 1
  },
  {
    id: 'w022',
    japanese: '三',
    hiragana: 'さん',
    english: 'three',
    descriptionJa: '数字（すうじ）の3（さん）',
    descriptionEn: 'The number 3',
    category: 'numbers',
    jlptLevel: 'N5',
    difficulty: 1
  },
  {
    id: 'w023',
    japanese: '四',
    hiragana: 'し/よん',
    english: 'four',
    descriptionJa: '数字（すうじ）の4（よん）',
    descriptionEn: 'The number 4',
    category: 'numbers',
    jlptLevel: 'N5',
    difficulty: 1
  },
  {
    id: 'w024',
    japanese: '五',
    hiragana: 'ご',
    english: 'five',
    descriptionJa: '数字（すうじ）の5（ご）',
    descriptionEn: 'The number 5',
    category: 'numbers',
    jlptLevel: 'N5',
    difficulty: 1
  },
  {
    id: 'w025',
    japanese: '六',
    hiragana: 'ろく',
    english: 'six',
    descriptionJa: '数字（すうじ）の6（ろく）',
    descriptionEn: 'The number 6',
    category: 'numbers',
    jlptLevel: 'N5',
    difficulty: 1
  },
  {
    id: 'w026',
    japanese: '七',
    hiragana: 'しち/なな',
    english: 'seven',
    descriptionJa: '数字（すうじ）の7（なな）',
    descriptionEn: 'The number 7',
    category: 'numbers',
    jlptLevel: 'N5',
    difficulty: 1
  },
  {
    id: 'w027',
    japanese: '八',
    hiragana: 'はち',
    english: 'eight',
    descriptionJa: '数字（すうじ）の8（はち）',
    descriptionEn: 'The number 8',
    category: 'numbers',
    jlptLevel: 'N5',
    difficulty: 1
  },
  {
    id: 'w028',
    japanese: '九',
    hiragana: 'きゅう/く',
    english: 'nine',
    descriptionJa: '数字（すうじ）の9（きゅう）',
    descriptionEn: 'The number 9',
    category: 'numbers',
    jlptLevel: 'N5',
    difficulty: 1
  },
  {
    id: 'w029',
    japanese: '十',
    hiragana: 'じゅう',
    english: 'ten',
    descriptionJa: '数字（すうじ）の10（じゅう）',
    descriptionEn: 'The number 10',
    category: 'numbers',
    jlptLevel: 'N5',
    difficulty: 1
  },

  // 食べ物
  {
    id: 'w030',
    japanese: 'ご飯',
    hiragana: 'ごはん',
    english: 'rice/meal',
    descriptionJa: '主食（しゅしょく）や食事（しょくじ）全般（ぜんぱん）',
    descriptionEn: 'Rice or meal in general',
    category: 'food',
    jlptLevel: 'N5',
    difficulty: 1
  },
  {
    id: 'w031',
    japanese: '肉',
    hiragana: 'にく',
    english: 'meat',
    descriptionJa: '動物（どうぶつ）の食用（しょくよう）部分（ぶぶん）',
    descriptionEn: 'Edible part of animals',
    category: 'food',
    jlptLevel: 'N5',
    difficulty: 1
  },
  {
    id: 'w032',
    japanese: '魚',
    hiragana: 'さかな',
    english: 'fish',
    descriptionJa: '水中（すいちゅう）に住（す）む動物（どうぶつ）',
    descriptionEn: 'Animal that lives in water',
    category: 'food',
    jlptLevel: 'N5',
    difficulty: 1
  },
  {
    id: 'w033',
    japanese: '水',
    hiragana: 'みず',
    english: 'water',
    descriptionJa: '生（い）きるのに必要（ひつよう）な液体（えきたい）',
    descriptionEn: 'Liquid necessary for life',
    category: 'food',
    jlptLevel: 'N5',
    difficulty: 1
  },
  {
    id: 'w034',
    japanese: 'お茶',
    hiragana: 'おちゃ',
    english: 'tea',
    descriptionJa: '茶葉（ちゃば）で作（つく）る飲（の）み物（もの）',
    descriptionEn: 'Drink made from tea leaves',
    category: 'food',
    jlptLevel: 'N5',
    difficulty: 1
  },

  // 時間
  {
    id: 'w040',
    japanese: '今',
    hiragana: 'いま',
    english: 'now',
    descriptionJa: '現在（げんざい）の時刻（じこく）',
    descriptionEn: 'Current time',
    category: 'time',
    jlptLevel: 'N5',
    difficulty: 1
  },
  {
    id: 'w041',
    japanese: '今日',
    hiragana: 'きょう',
    english: 'today',
    descriptionJa: '現在（げんざい）の日（ひ）',
    descriptionEn: 'Current day',
    category: 'time',
    jlptLevel: 'N5',
    difficulty: 1
  }
];

// 全語彙データ（基本 + 拡張）
export const jlptN5Words: Word[] = combineVocabulary(baseVocabulary);

// 語彙検索・管理機能
export const searchWords = (
  query: string, 
  category?: string, 
  jlptLevel?: string,
  difficulty?: number
): Word[] => {
  return jlptN5Words.filter(word => {
    const matchesQuery = !query || 
      word.japanese.includes(query) ||
      word.hiragana.includes(query) ||
      word.english.toLowerCase().includes(query.toLowerCase());
    
    const matchesCategory = !category || category === 'all' || word.category === category;
    const matchesJlptLevel = !jlptLevel || jlptLevel === 'all' || word.jlptLevel === jlptLevel;
    const matchesDifficulty = difficulty === undefined || word.difficulty === difficulty;
    
    return matchesQuery && matchesCategory && matchesJlptLevel && matchesDifficulty;
  });
};

export const getWordsByCategory = (category: string): Word[] => {
  if (category === 'all') return jlptN5Words;
  return jlptN5Words.filter(word => word.category === category);
};

export const getCategoriesList = (): string[] => {
  const categories = new Set(jlptN5Words.map(word => word.category));
  return Array.from(categories).sort();
};

export const getWordsCount = (): number => {
  return jlptN5Words.length;
};

export const getCategoryStats = (): { [key: string]: number } => {
  const stats: { [key: string]: number } = {};
  jlptN5Words.forEach(word => {
    stats[word.category] = (stats[word.category] || 0) + 1;
  });
  return stats;
};

export const getDifficultyStats = (): { [key: number]: number } => {
  const stats: { [key: number]: number } = {};
  jlptN5Words.forEach(word => {
    stats[word.difficulty] = (stats[word.difficulty] || 0) + 1;
  });
  return stats;
};

// ユーザー追加語彙管理
let userVocabulary: Word[] = [];

export const addUserWord = (word: Omit<Word, 'id'>): Word => {
  const newWord: Word = {
    ...word,
    id: `user_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
  };
  userVocabulary.push(newWord);
  return newWord;
};

export const updateUserWord = (id: string, updatedWord: Partial<Word>): Word | null => {
  const index = userVocabulary.findIndex(word => word.id === id);
  if (index !== -1) {
    userVocabulary[index] = { ...userVocabulary[index], ...updatedWord };
    return userVocabulary[index];
  }
  return null;
};

export const deleteUserWord = (id: string): boolean => {
  const index = userVocabulary.findIndex(word => word.id === id);
  if (index !== -1) {
    userVocabulary.splice(index, 1);
    return true;
  }
  return false;
};

export const getUserVocabulary = (): Word[] => {
  return userVocabulary;
};

export const getAllVocabulary = (): Word[] => {
  return [...jlptN5Words, ...userVocabulary];
};

// ローカルストレージ連携
export const saveUserVocabularyToStorage = (): void => {
  try {
    localStorage.setItem('userVocabulary', JSON.stringify(userVocabulary));
  } catch (error) {
    console.error('Failed to save user vocabulary to localStorage:', error);
  }
};

export const loadUserVocabularyFromStorage = (): void => {
  try {
    const stored = localStorage.getItem('userVocabulary');
    if (stored) {
      userVocabulary = JSON.parse(stored);
    }
  } catch (error) {
    console.error('Failed to load user vocabulary from localStorage:', error);
    userVocabulary = [];
  }
};

// 初期化時にローカルストレージから読み込み
loadUserVocabularyFromStorage(); 