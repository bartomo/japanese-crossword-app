import React, { useState, useEffect } from 'react';
import { CrosswordPuzzle } from '../types';
import { CrosswordGenerator } from '../utils/crosswordGenerator';
import CrosswordGrid from '../components/CrosswordGrid';
import { useLanguage } from '../contexts/LanguageContext';
import { getRandomWords } from '../data/jlptN5Words';
import './CrosswordGame.css';

interface CrosswordGameProps {
  level: number;
  onWordComplete: (word: string) => void;
  inputMethod?: 'keyboard' | 'dragdrop' | 'both';
  characterType?: 'hiragana' | 'katakana' | 'both';
}

const CrosswordGame: React.FC<CrosswordGameProps> = ({ 
  level, 
  onWordComplete, 
  inputMethod = 'both',
  characterType = 'both'
}) => {
  const { t } = useLanguage();
  const [puzzle, setPuzzle] = useState<CrosswordPuzzle | null>(null);
  const [score, setScore] = useState(0);
  const [completedWords, setCompletedWords] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [showCongratulations, setShowCongratulations] = useState(false);
  const [puzzleKey, setPuzzleKey] = useState(0);

  const generateNewPuzzle = () => {
    setIsLoading(true);
    setShowCongratulations(false);
    
    setTimeout(() => {
      const generator = new CrosswordGenerator();
      const selectedWords = getRandomWords(6); // レベルに応じて6語を選択
      const newPuzzle = generator.generatePuzzle(selectedWords);
      setPuzzle(newPuzzle);
      setScore(0);
      setCompletedWords(0);
      setIsLoading(false);
      setPuzzleKey(prev => prev + 1);
    }, 500);
  };

  useEffect(() => {
    generateNewPuzzle();
  }, [level]);

  const handleWordComplete = (wordId: string) => {
    setScore(prev => prev + 10);
    setCompletedWords(prev => prev + 1);
    onWordComplete(wordId);
  };

  const handlePuzzleComplete = () => {
    setShowCongratulations(true);
    setScore(prev => prev + 50); // ボーナス点
  };

  if (isLoading) {
    return (
      <div className="crossword-game loading">
        <div className="loading-message">
          <div className="spinner"></div>
          <p>{t('game.loading')}</p>
        </div>
      </div>
    );
  }

  if (!puzzle) {
    return (
      <div className="crossword-game error">
        <p>{t('game.generationFailed')}</p>
        <button onClick={generateNewPuzzle} className="new-puzzle-btn">
          {t('game.newPuzzle')}
        </button>
      </div>
    );
  }

  return (
    <div className="crossword-game">
      {showCongratulations && (
        <div className="congratulations-overlay">
          <div className="congratulations-modal">
            <h2>🎉 {t('game.congratulations')}</h2>
            <button onClick={generateNewPuzzle} className="new-puzzle-btn">
              {t('game.newPuzzle')}
            </button>
          </div>
        </div>
      )}
      
      <div className="game-header">
        <h1>{t('game.title')} {level}</h1>
        <div className="game-stats">
          <div className="stat">
            <span className="stat-label">{t('game.score')}:</span>
            <span className="stat-value">{score}</span>
          </div>
          <div className="stat">
            <span className="stat-label">{t('game.completed')}:</span>
            <span className="stat-value">{completedWords} / {puzzle.words.length}</span>
          </div>
        </div>
        <button onClick={generateNewPuzzle} className="new-puzzle-btn">
          {t('game.newPuzzle')}
        </button>
      </div>

      <CrosswordGrid
        key={puzzleKey}
        puzzle={puzzle}
        onWordComplete={handleWordComplete}
        onPuzzleComplete={handlePuzzleComplete}
        inputMethod={inputMethod}
        characterType={characterType}
      />
    </div>
  );
};

export default CrosswordGame; 