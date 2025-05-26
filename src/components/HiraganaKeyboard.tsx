import React, { useMemo } from 'react';
import { CrosswordWord } from '../types';
import { useLanguage } from '../contexts/LanguageContext';
import './HiraganaKeyboard.css';

// ひらがなをカタカナに変換する関数
const hiraganaToKatakana = (str: string): string => {
  return str.replace(/[\u3040-\u309F]/g, (char) => {
    return String.fromCharCode(char.charCodeAt(0) + 0x60);
  });
};

interface HiraganaKeyboardProps {
  onCharacterSelect: (character: string) => void;
  isVisible: boolean;
  selectedWord: CrosswordWord | null;
  characterType: 'hiragana' | 'katakana' | 'both';
}

const HiraganaKeyboard: React.FC<HiraganaKeyboardProps> = ({ onCharacterSelect, isVisible, selectedWord, characterType }) => {
  const { t } = useLanguage();
  
  // デバッグログ
  console.log('HiraganaKeyboard characterType:', characterType);
  // ひらがな文字一覧
  const hiraganaChars = [
    'あ', 'い', 'う', 'え', 'お',
    'か', 'き', 'く', 'け', 'こ', 'が', 'ぎ', 'ぐ', 'げ', 'ご',
    'さ', 'し', 'す', 'せ', 'そ', 'ざ', 'じ', 'ず', 'ぜ', 'ぞ',
    'た', 'ち', 'つ', 'て', 'と', 'だ', 'ぢ', 'づ', 'で', 'ど',
    'な', 'に', 'ぬ', 'ね', 'の',
    'は', 'ひ', 'ふ', 'へ', 'ほ', 'ば', 'び', 'ぶ', 'べ', 'ぼ', 'ぱ', 'ぴ', 'ぷ', 'ぺ', 'ぽ',
    'ま', 'み', 'む', 'め', 'も',
    'や', 'ゆ', 'よ', 'ゃ', 'ゅ', 'ょ',
    'ら', 'り', 'る', 'れ', 'ろ',
    'わ', 'を', 'ん', 'っ'
  ];

  // カタカナ文字一覧
  const katakanaChars = [
    'ア', 'イ', 'ウ', 'エ', 'オ',
    'カ', 'キ', 'ク', 'ケ', 'コ', 'ガ', 'ギ', 'グ', 'ゲ', 'ゴ',
    'サ', 'シ', 'ス', 'セ', 'ソ', 'ザ', 'ジ', 'ズ', 'ゼ', 'ゾ',
    'タ', 'チ', 'ツ', 'テ', 'ト', 'ダ', 'ヂ', 'ヅ', 'デ', 'ド',
    'ナ', 'ニ', 'ヌ', 'ネ', 'ノ',
    'ハ', 'ヒ', 'フ', 'ヘ', 'ホ', 'バ', 'ビ', 'ブ', 'ベ', 'ボ', 'パ', 'ピ', 'プ', 'ペ', 'ポ',
    'マ', 'ミ', 'ム', 'メ', 'モ',
    'ヤ', 'ユ', 'ヨ', 'ャ', 'ュ', 'ョ',
    'ラ', 'リ', 'ル', 'レ', 'ロ',
    'ワ', 'ヲ', 'ン', 'ッ',
    'ー' // 長音記号
  ];



  // 設定に基づいて使用する文字セットを決定
  const allJapaneseChars = useMemo(() => {
    switch (characterType) {
      case 'hiragana':
        return hiraganaChars;
      case 'katakana':
        return katakanaChars;
      case 'both':
      default:
        return [...hiraganaChars, ...katakanaChars];
    }
  }, [characterType]);

  // 選択された単語に基づいて表示する文字を生成
  const displayChars = useMemo(() => {
    if (!selectedWord) return [];

    // 設定に応じて答えの文字を変換
    let wordText = selectedWord.word.hiragana;
    if (characterType === 'katakana') {
      wordText = hiraganaToKatakana(wordText);
    }
    
    const wordChars = wordText.split('');
    const extraCharsCount = Math.max(6, wordChars.length * 2); // 最低6文字、または単語の2倍
    
    // 答えの文字以外からランダムに選択
    const availableChars = allJapaneseChars.filter((char: string) => !wordChars.includes(char));
    const shuffledExtra = [...availableChars].sort(() => Math.random() - 0.5);
    const extraChars = shuffledExtra.slice(0, extraCharsCount);
    
    // 答えの文字と余分な文字を混ぜてシャッフル
    const allChars = [...wordChars, ...extraChars];
    return allChars.sort(() => Math.random() - 0.5);
  }, [selectedWord, allJapaneseChars, characterType]);

  const handleDragStart = (e: React.DragEvent<HTMLDivElement>, character: string) => {
    e.dataTransfer.setData('text/plain', character);
    e.dataTransfer.effectAllowed = 'copy';
  };

  const handleClick = (character: string) => {
    onCharacterSelect(character);
  };

  // 文字種別を判定する関数
  const getCharacterType = (char: string): 'hiragana' | 'katakana' | 'other' => {
    const hiraganaRange = /[\u3040-\u309F]/;
    const katakanaRange = /[\u30A0-\u30FF]/;
    
    if (hiraganaRange.test(char)) return 'hiragana';
    if (katakanaRange.test(char)) return 'katakana';
    return 'other';
  };

  if (!isVisible || !selectedWord) {
    return (
      <div className="hiragana-keyboard">
        <div className="keyboard-header">
          <h3>{t('keyboard.title')}</h3>
          <p className="keyboard-instruction">
            {t('keyboard.selectWord')}
          </p>
        </div>
      </div>
    );
  }

  return (
          <div className="hiragana-keyboard">
        <div className="keyboard-header">
          <h3>{t('keyboard.title')}</h3>
          <p className="keyboard-instruction with-word">
            {t('keyboard.selectCharacter')} 「{selectedWord.word.english}」
          </p>
          {characterType === 'both' && (
            <div className="character-legend">
              <span className="legend-item hiragana">{t('keyboard.hiragana')}</span>
              <span className="legend-item katakana">{t('keyboard.katakana')}</span>
            </div>
          )}
          {characterType === 'hiragana' && (
            <div className="character-legend">
              <span className="legend-item hiragana">{t('keyboard.hiragana')}</span>
            </div>
          )}
          {characterType === 'katakana' && (
            <div className="character-legend">
              <span className="legend-item katakana">{t('keyboard.katakana')}</span>
            </div>
          )}
        </div>
      <div className="keyboard-grid">
        {displayChars.map((char: string, index: number) => (
          <div
            key={index}
            className={`keyboard-char ${getCharacterType(char)}`}
            draggable
            onDragStart={(e) => handleDragStart(e, char)}
            onClick={() => handleClick(char)}
          >
            {char}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HiraganaKeyboard; 