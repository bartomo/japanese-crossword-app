import React, { useState, useEffect } from 'react';
import { CrosswordPuzzle, CrosswordCell, CrosswordWord } from '../types';
import { useLanguage } from '../contexts/LanguageContext';
import HiraganaKeyboard from './HiraganaKeyboard';
import './CrosswordGrid.css';

// ひらがなをカタカナに変換する関数
const hiraganaToKatakana = (str: string): string => {
  return str.replace(/[\u3040-\u309F]/g, (char) => {
    return String.fromCharCode(char.charCodeAt(0) + 0x60);
  });
};

// カタカナをひらがなに変換する関数
const katakanaToHiragana = (str: string): string => {
  return str.replace(/[\u30A0-\u30FF]/g, (char) => {
    return String.fromCharCode(char.charCodeAt(0) - 0x60);
  });
};

interface CrosswordGridProps {
  puzzle: CrosswordPuzzle;
  onWordComplete: (wordId: string) => void;
  onPuzzleComplete: () => void;
  inputMethod?: 'keyboard' | 'dragdrop' | 'both';
  characterType?: 'hiragana' | 'katakana' | 'both';
}

const CrosswordGrid: React.FC<CrosswordGridProps> = ({ puzzle, onWordComplete, onPuzzleComplete, inputMethod = 'both', characterType = 'both' }) => {
  const { t } = useLanguage();
  
  // デバッグログ
  console.log('CrosswordGrid characterType:', characterType);
  
  const [selectedCell, setSelectedCell] = useState<{ row: number; col: number } | null>(null);
  const [selectedWord, setSelectedWord] = useState<CrosswordWord | null>(null);
  const [userInputs, setUserInputs] = useState<{ [key: string]: string }>({});
  const [completedWordIds, setCompletedWordIds] = useState<Set<string>>(new Set());
  const [dragOverCell, setDragOverCell] = useState<string | null>(null);



  useEffect(() => {
    // パズルが変更されたときに入力をリセット
    setUserInputs({});
    setSelectedCell(null);
    setSelectedWord(null);
    setCompletedWordIds(new Set());
  }, [puzzle.id]);

  const handleCellClick = (row: number, col: number) => {
    const cell = puzzle.cells[row][col];
    if (cell.isBlocked) return;

    setSelectedCell({ row, col });

    // このセルを含む単語を見つける
    const wordsAtCell = puzzle.words.filter(word => 
      word.cells.some(c => c.row === row && c.col === col)
    );

    if (wordsAtCell.length > 0) {
      // 現在選択されている単語と異なる場合は切り替え
      const nextWord = wordsAtCell.find(w => w.id !== selectedWord?.id) || wordsAtCell[0];
      setSelectedWord(nextWord);
    }
  };

  const handleInputChange = (cellId: string, value: string) => {
    if (value.length > 1) return; // 1文字のみ許可

    const newInputs = {
      ...userInputs,
      [cellId]: value
    };

    setUserInputs(newInputs);

    // すべての単語の完成状態をチェック
    puzzle.words.forEach(word => {
      if (!completedWordIds.has(word.id)) {
        checkWordCompletion(word, newInputs);
      }
    });
  };

  const checkWordCompletion = (word: CrosswordWord, inputs: { [key: string]: string }) => {
    const isComplete = word.cells.every(cell => {
      const userInput = inputs[cell.id] || '';
      let expectedLetter = cell.letter;
      
      // 設定に応じて期待される文字を変換
      if (characterType === 'katakana') {
        expectedLetter = hiraganaToKatakana(expectedLetter);
      }
      
      // デバッグ用ログ
      console.log(`Checking cell ${cell.id}: input="${userInput}", expected="${expectedLetter}", characterType="${characterType}"`);
      
      // 文字の比較（ひらがな・カタカナの相互変換も考慮）
      const isMatch = userInput === expectedLetter || 
                     userInput === hiraganaToKatakana(expectedLetter) ||
                     userInput === katakanaToHiragana(expectedLetter) ||
                     userInput.toLowerCase() === expectedLetter.toLowerCase();
      
      return isMatch;
    });

    console.log(`Word ${word.word.hiragana} completion check: ${isComplete}`);

    if (isComplete && !completedWordIds.has(word.id)) {
      setCompletedWordIds(prev => new Set([...prev, word.id]));
      onWordComplete(word.id);

      // 全ての単語が完成したかチェック
      const newCompletedIds = new Set([...completedWordIds, word.id]);
      const allComplete = puzzle.words.every(w => newCompletedIds.has(w.id));
      if (allComplete) {
        onPuzzleComplete();
      }
    }
  };

  const getCellValue = (cell: CrosswordCell): string => {
    return userInputs[cell.id] || '';
  };

  const isCellSelected = (row: number, col: number): boolean => {
    return selectedCell?.row === row && selectedCell?.col === col;
  };

  const isCellInSelectedWord = (row: number, col: number): boolean => {
    if (!selectedWord) return false;
    return selectedWord.cells.some(cell => cell.row === row && cell.col === col);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>, cellId: string) => {
    e.preventDefault();
    const character = e.dataTransfer.getData('text/plain');
    if (character) {
      handleInputChange(cellId, character);
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>, cellId: string) => {
    e.preventDefault();
    setDragOverCell(cellId);
  };

  const handleDragLeave = () => {
    setDragOverCell(null);
  };

  const handleCharacterSelect = (character: string) => {
    if (selectedCell) {
      const cellId = `cell-${selectedCell.row}-${selectedCell.col}`;
      handleInputChange(cellId, character);
    }
  };

  const getClueNumber = (row: number, col: number): number | null => {
    const word = puzzle.words.find(w => w.startRow === row && w.startCol === col);
    return word ? parseInt(word.clue.split('.')[0]) : null;
  };

  return (
    <div className="crossword-container">
      {(inputMethod === 'dragdrop' || inputMethod === 'both') && (
        <HiraganaKeyboard
          onCharacterSelect={handleCharacterSelect}
          isVisible={true}
          selectedWord={selectedWord}
          characterType={characterType}
        />
      )}
      <div className="crossword-main">
        <div className="crossword-grid-container">
        <div 
          className="crossword-grid"
          style={{
            gridTemplateColumns: `repeat(${puzzle.gridSize.cols}, 1fr)`,
            gridTemplateRows: `repeat(${puzzle.gridSize.rows}, 1fr)`
          }}
        >
          {puzzle.cells.map((row, rowIndex) =>
            row.map((cell, colIndex) => {
              const clueNumber = getClueNumber(rowIndex, colIndex);
              return (
                <div
                  key={cell.id}
                  className={`
                    crossword-cell
                    ${cell.isBlocked ? 'blocked' : 'active'}
                    ${isCellSelected(rowIndex, colIndex) ? 'selected' : ''}
                    ${isCellInSelectedWord(rowIndex, colIndex) ? 'highlighted' : ''}
                    ${dragOverCell === cell.id ? 'drag-over' : ''}
                  `}
                  onClick={() => handleCellClick(rowIndex, colIndex)}
                  onDrop={(e) => handleDrop(e, cell.id)}
                  onDragOver={(e) => handleDragOver(e, cell.id)}
                  onDragLeave={handleDragLeave}
                >
                  {clueNumber && (
                    <span className="clue-number">{clueNumber}</span>
                  )}
                  {!cell.isBlocked && (
                    <input
                      type="text"
                      value={getCellValue(cell)}
                      onChange={(e) => handleInputChange(cell.id, e.target.value)}
                      className="cell-input"
                      maxLength={1}
                      readOnly={inputMethod === 'dragdrop'}
                      style={{ cursor: inputMethod === 'dragdrop' ? 'pointer' : 'text' }}
                    />
                  )}
                </div>
              );
            })
          )}
        </div>
      </div>

      <div className="clues-container">
        <div className="clues-section">
          <h3>{t('game.horizontalClues')}</h3>
          <div className="clues-list">
            {puzzle.words
              .filter(word => word.direction === 'horizontal')
              .map(word => (
                <div
                  key={word.id}
                  className={`clue-item ${completedWordIds.has(word.id) ? 'completed' : ''} ${selectedWord?.id === word.id ? 'selected' : ''}`}
                  onClick={() => setSelectedWord(word)}
                >
                  {word.clue}
                </div>
              ))}
          </div>
        </div>

        <div className="clues-section">
          <h3>{t('game.verticalClues')}</h3>
          <div className="clues-list">
            {puzzle.words
              .filter(word => word.direction === 'vertical')
              .map(word => (
                <div
                  key={word.id}
                  className={`clue-item ${completedWordIds.has(word.id) ? 'completed' : ''} ${selectedWord?.id === word.id ? 'selected' : ''}`}
                  onClick={() => setSelectedWord(word)}
                >
                  {word.clue}
                </div>
              ))}
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default CrosswordGrid; 