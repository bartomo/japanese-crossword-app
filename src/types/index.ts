export interface Word {
  id: string;
  japanese: string;
  hiragana: string;
  english: string;
  descriptionJa?: string; // 日本語説明（漢字にふりがな付き）
  descriptionEn?: string; // 英語説明
  category: string;
  jlptLevel: 'N5' | 'N4' | 'N3' | 'N2' | 'N1';
  difficulty: number; // 1-5
}

export interface CrosswordCell {
  id: string;
  row: number;
  col: number;
  letter: string;
  isBlocked: boolean;
  isSelected: boolean;
  isFilled: boolean;
  wordIds: string[]; // Words that pass through this cell
}

export interface CrosswordWord {
  id: string;
  word: Word;
  startRow: number;
  startCol: number;
  direction: 'horizontal' | 'vertical';
  clue: string;
  isCompleted: boolean;
  cells: CrosswordCell[];
}

export interface CrosswordPuzzle {
  id: string;
  title: string;
  difficulty: number;
  gridSize: { rows: number; cols: number };
  words: CrosswordWord[];
  cells: CrosswordCell[][];
}

export interface UserProgress {
  completedWords: string[];
  currentLevel: number;
  totalScore: number;
  streakDays: number;
  lastPlayedDate: string;
  wordsLearned: Word[];
  mistakeCount: number;
  averageCompletionTime: number;
}

export interface GameSettings {
  showHiragana: boolean;
  showEnglish: boolean;
  difficulty: 'easy' | 'medium' | 'hard';
  soundEnabled: boolean;
  theme: 'light' | 'dark';
  language: 'en' | 'ja';
  inputMethod: 'keyboard' | 'dragdrop' | 'both';
  characterType: 'hiragana' | 'katakana' | 'both';
  hintType: 'english' | 'description' | 'both'; // ヒント表示方法
  hintLanguage: 'ja' | 'en' | 'auto'; // ヒント言語設定
} 