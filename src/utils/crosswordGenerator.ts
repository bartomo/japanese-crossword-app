import { Word, CrosswordPuzzle, CrosswordWord, CrosswordCell } from '../types';

export interface PlacedWord {
  word: Word;
  startRow: number;
  startCol: number;
  direction: 'horizontal' | 'vertical';
  clueNumber: number;
}

export class CrosswordGenerator {
  private maxGridSize: number;
  private grid: string[][];
  private placedWords: PlacedWord[] = [];
  private clueNumber = 1;
  private actualGridSize = { rows: 0, cols: 0 };
  private hintType: 'english' | 'description' | 'both';
  private hintLanguage: 'ja' | 'en' | 'auto';

  constructor(
    maxGridSize: number = 20, 
    hintType: 'english' | 'description' | 'both' = 'description',
    hintLanguage: 'ja' | 'en' | 'auto' = 'ja'
  ) {
    this.maxGridSize = maxGridSize;
    this.hintType = hintType;
    this.hintLanguage = hintLanguage;
    this.grid = Array(maxGridSize).fill(null).map(() => Array(maxGridSize).fill(''));
  }

  generatePuzzle(words: Word[]): CrosswordPuzzle {
    this.placedWords = [];
    this.clueNumber = 1;
    this.grid = Array(this.maxGridSize).fill(null).map(() => Array(this.maxGridSize).fill(''));

    // 最初の単語を中央に配置
    if (words.length > 0) {
      this.placeFirstWord(words[0]);
    }

    // 残りの単語を配置
    for (let i = 1; i < Math.min(words.length, 8); i++) {
      this.placeWord(words[i]);
    }

    // 実際に使用されているグリッドサイズを計算
    this.calculateActualGridSize();

    return this.createPuzzle();
  }

  private placeFirstWord(word: Word): void {
    const startRow = Math.floor(this.maxGridSize / 2);
    const startCol = Math.floor((this.maxGridSize - word.hiragana.length) / 2);
    
    this.placeWordOnGrid(word, startRow, startCol, 'horizontal');
  }

  private placeWord(word: Word): void {
    const attempts = 100;
    
    for (let attempt = 0; attempt < attempts; attempt++) {
      const direction = Math.random() > 0.5 ? 'horizontal' : 'vertical';
      const position = this.findValidPosition(word, direction);
      
      if (position) {
        this.placeWordOnGrid(word, position.row, position.col, direction);
        break;
      }
    }
  }

  private findValidPosition(word: Word, direction: 'horizontal' | 'vertical'): { row: number; col: number } | null {
    const wordLength = word.hiragana.length;
    
    for (let row = 0; row < this.maxGridSize; row++) {
      for (let col = 0; col < this.maxGridSize; col++) {
        if (this.canPlaceWord(word, row, col, direction)) {
          return { row, col };
        }
      }
    }
    
    return null;
  }

  private canPlaceWord(word: Word, startRow: number, startCol: number, direction: 'horizontal' | 'vertical'): boolean {
    const wordLength = word.hiragana.length;
    
    // 境界チェック
    if (direction === 'horizontal' && startCol + wordLength > this.maxGridSize) return false;
    if (direction === 'vertical' && startRow + wordLength > this.maxGridSize) return false;
    
    let intersectionFound = false;
    
    for (let i = 0; i < wordLength; i++) {
      const row = direction === 'horizontal' ? startRow : startRow + i;
      const col = direction === 'horizontal' ? startCol + i : startCol;
      const letter = word.hiragana[i];
      
      if (this.grid[row][col] !== '') {
        // 既に文字がある場合、同じ文字でなければならない
        if (this.grid[row][col] !== letter) {
          return false;
        }
        intersectionFound = true;
      }
    }
    
    // 最初の単語以外は交差点が必要
    return this.placedWords.length === 0 || intersectionFound;
  }

  private placeWordOnGrid(word: Word, startRow: number, startCol: number, direction: 'horizontal' | 'vertical'): void {
    const wordLength = word.hiragana.length;
    
    for (let i = 0; i < wordLength; i++) {
      const row = direction === 'horizontal' ? startRow : startRow + i;
      const col = direction === 'horizontal' ? startCol + i : startCol;
      this.grid[row][col] = word.hiragana[i];
    }
    
    this.placedWords.push({
      word,
      startRow,
      startCol,
      direction,
      clueNumber: this.clueNumber++
    });
  }

  private calculateActualGridSize(): void {
    let minRow = this.maxGridSize, maxRow = -1;
    let minCol = this.maxGridSize, maxCol = -1;

    // 使用されているセルの範囲を計算
    for (let row = 0; row < this.maxGridSize; row++) {
      for (let col = 0; col < this.maxGridSize; col++) {
        if (this.grid[row][col] !== '') {
          minRow = Math.min(minRow, row);
          maxRow = Math.max(maxRow, row);
          minCol = Math.min(minCol, col);
          maxCol = Math.max(maxCol, col);
        }
      }
    }

    // 余白を追加（最低1セル）
    const padding = 1;
    this.actualGridSize = {
      rows: Math.max(5, maxRow - minRow + 1 + padding * 2),
      cols: Math.max(5, maxCol - minCol + 1 + padding * 2)
    };

    // グリッドを実際のサイズに調整
    const newGrid: string[][] = [];
    for (let row = 0; row < this.actualGridSize.rows; row++) {
      newGrid[row] = [];
      for (let col = 0; col < this.actualGridSize.cols; col++) {
        const originalRow = minRow - padding + row;
        const originalCol = minCol - padding + col;
        newGrid[row][col] = (originalRow >= 0 && originalRow < this.maxGridSize && 
                            originalCol >= 0 && originalCol < this.maxGridSize) 
                            ? this.grid[originalRow][originalCol] : '';
      }
    }

    // 配置された単語の座標を調整
    this.placedWords.forEach(placedWord => {
      placedWord.startRow = placedWord.startRow - minRow + padding;
      placedWord.startCol = placedWord.startCol - minCol + padding;
    });

    this.grid = newGrid;
  }

  private createPuzzle(): CrosswordPuzzle {
    const cells: CrosswordCell[][] = [];
    const crosswordWords: CrosswordWord[] = [];
    
    // セルの作成
    for (let row = 0; row < this.actualGridSize.rows; row++) {
      cells[row] = [];
      for (let col = 0; col < this.actualGridSize.cols; col++) {
        cells[row][col] = {
          id: `cell-${row}-${col}`,
          row,
          col,
          letter: this.grid[row][col],
          isBlocked: this.grid[row][col] === '',
          isSelected: false,
          isFilled: false,
          wordIds: []
        };
      }
    }
    
    // クロスワード単語の作成
    this.placedWords.forEach(placedWord => {
      const wordCells: CrosswordCell[] = [];
      const wordLength = placedWord.word.hiragana.length;
      
      for (let i = 0; i < wordLength; i++) {
        const row = placedWord.direction === 'horizontal' ? placedWord.startRow : placedWord.startRow + i;
        const col = placedWord.direction === 'horizontal' ? placedWord.startCol + i : placedWord.startCol;
        wordCells.push(cells[row][col]);
        cells[row][col].wordIds.push(placedWord.word.id);
      }
      
      crosswordWords.push({
        id: placedWord.word.id,
        word: placedWord.word,
        startRow: placedWord.startRow,
        startCol: placedWord.startCol,
        direction: placedWord.direction,
        clue: this.generateClue(placedWord.word, placedWord.clueNumber),
        isCompleted: false,
        cells: wordCells
      });
    });
    
    return {
      id: `puzzle-${Date.now()}`,
      title: 'JLPT N5 クロスワード',
      difficulty: 1,
      gridSize: { rows: this.actualGridSize.rows, cols: this.actualGridSize.cols },
      words: crosswordWords,
      cells
    };
  }

  private generateClue(word: Word, clueNumber: number): string {
    const numberPrefix = `${clueNumber}. `;
    
    // 説明文の言語を決定
    const getDescription = (): string => {
      switch (this.hintLanguage) {
        case 'ja':
          return word.descriptionJa || word.descriptionEn || word.english;
        case 'en':
          return word.descriptionEn || word.descriptionJa || word.english;
        case 'auto':
          // 自動選択：日本語優先、なければ英語
          return word.descriptionJa || word.descriptionEn || word.english;
        default:
          return word.descriptionJa || word.descriptionEn || word.english;
      }
    };
    
    switch (this.hintType) {
      case 'english':
        return `${numberPrefix}${word.english}`;
      case 'description':
        return `${numberPrefix}${getDescription()}`;
      case 'both':
        const description = getDescription();
        return `${numberPrefix}${description} (${word.english})`;
      default:
        return `${numberPrefix}${word.english}`;
    }
  }
}

export const generateCrosswordPuzzle = (words: Word[]): CrosswordPuzzle => {
  const generator = new CrosswordGenerator();
  return generator.generatePuzzle(words);
}; 