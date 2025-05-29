import React, { useState, useEffect } from 'react';
import { Word } from '../types';
import { 
  jlptN5Words, 
  getCategoriesList, 
  searchWords, 
  getWordsByCategory,
  getWordsCount,
  getCategoryStats,
  addUserWord,
  updateUserWord,
  deleteUserWord,
  getUserVocabulary,
  getAllVocabulary,
  saveUserVocabularyToStorage
} from '../data/jlptN5Words';
import './VocabularyManager.css';

interface VocabularyManagerProps {}

const VocabularyManager: React.FC<VocabularyManagerProps> = () => {
  const [words, setWords] = useState<Word[]>(getAllVocabulary());
  const [filteredWords, setFilteredWords] = useState<Word[]>(getAllVocabulary());
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingWord, setEditingWord] = useState<Word | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [wordsPerPage] = useState(20);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showUserOnly, setShowUserOnly] = useState(false);

  // 新しい語彙追加用フォーム状態
  const [newWord, setNewWord] = useState<Omit<Word, 'id'>>({
    japanese: '',
    hiragana: '',
    english: '',
    descriptionJa: '',
    descriptionEn: '',
    category: 'verbs',
    jlptLevel: 'N5',
    difficulty: 1
  });

  const categories = getCategoriesList();
  const stats = getCategoryStats();

  // 初期化とデータ同期
  useEffect(() => {
    setWords(getAllVocabulary());
  }, []);

  // フィルター実行
  useEffect(() => {
    let result = showUserOnly ? getUserVocabulary() : getAllVocabulary();
    
    result = searchWords(
      searchQuery,
      selectedCategory,
      undefined,
      selectedDifficulty === 'all' ? undefined : parseInt(selectedDifficulty)
    );

    if (showUserOnly) {
      result = result.filter(word => word.id.startsWith('user_'));
    }

    setFilteredWords(result);
    setCurrentPage(1);
  }, [searchQuery, selectedCategory, selectedDifficulty, showUserOnly, words]);

  // 単語追加
  const handleAddWord = () => {
    if (!newWord.japanese || !newWord.hiragana || !newWord.english) {
      alert('すべてのフィールドを入力してください');
      return;
    }

    const addedWord = addUserWord(newWord);
    setWords(getAllVocabulary());
    saveUserVocabularyToStorage();
    
    setNewWord({
      japanese: '',
      hiragana: '',
      english: '',
      descriptionJa: '',
      descriptionEn: '',
      category: 'verbs',
      jlptLevel: 'N5',
      difficulty: 1
    });
    setShowAddForm(false);
    alert('語彙が追加されました！');
  };

  // 単語編集
  const handleEditWord = (word: Word) => {
    setEditingWord(word);
    setNewWord({
      japanese: word.japanese,
      hiragana: word.hiragana,
      english: word.english,
      descriptionJa: word.descriptionJa,
      descriptionEn: word.descriptionEn,
      category: word.category,
      jlptLevel: word.jlptLevel,
      difficulty: word.difficulty
    });
    setShowAddForm(true);
  };

  // 編集保存
  const handleUpdateWord = () => {
    if (!editingWord) return;

    updateUserWord(editingWord.id, newWord);
    setWords(getAllVocabulary());
    saveUserVocabularyToStorage();
    setEditingWord(null);
    setShowAddForm(false);
    setNewWord({
      japanese: '',
      hiragana: '',
      english: '',
      descriptionJa: '',
      descriptionEn: '',
      category: 'verbs',
      jlptLevel: 'N5',
      difficulty: 1
    });
    alert('語彙が更新されました！');
  };

  // 単語削除
  const handleDeleteWord = (id: string) => {
    if (window.confirm('この語彙を削除しますか？')) {
      deleteUserWord(id);
      setWords(getAllVocabulary());
      saveUserVocabularyToStorage();
      alert('語彙が削除されました');
    }
  };

  // ページネーション
  const indexOfLastWord = currentPage * wordsPerPage;
  const indexOfFirstWord = indexOfLastWord - wordsPerPage;
  const currentWords = filteredWords.slice(indexOfFirstWord, indexOfLastWord);
  const totalPages = Math.ceil(filteredWords.length / wordsPerPage);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const renderWordCard = (word: Word) => (
    <div key={word.id} className={`word-card ${word.id.startsWith('user_') ? 'user-word' : ''}`}>
      <div className="word-main">
        <div className="japanese">{word.japanese}</div>
        <div className="hiragana">{word.hiragana}</div>
        <div className="english">{word.english}</div>
        {word.descriptionJa && <div className="description">{word.descriptionJa}</div>}
        {word.descriptionEn && <div className="description">{word.descriptionEn}</div>}
      </div>
      <div className="word-meta">
        <span className={`category ${word.category}`}>{word.category}</span>
        <span className={`difficulty difficulty-${word.difficulty}`}>
          難易度 {word.difficulty}
        </span>
      </div>
      {word.id.startsWith('user_') && (
        <div className="word-actions">
          <button 
            onClick={() => handleEditWord(word)}
            className="edit-btn"
          >
            編集
          </button>
          <button 
            onClick={() => handleDeleteWord(word.id)}
            className="delete-btn"
          >
            削除
          </button>
        </div>
      )}
    </div>
  );

  const renderWordListItem = (word: Word) => (
    <div key={word.id} className={`word-list-item ${word.id.startsWith('user_') ? 'user-word' : ''}`}>
      <div className="word-content">
        <span className="japanese">{word.japanese}</span>
        <span className="hiragana">{word.hiragana}</span>
        <span className="english">{word.english}</span>
        {word.descriptionJa && <span className="description">{word.descriptionJa}</span>}
        {word.descriptionEn && <span className="description">{word.descriptionEn}</span>}
        <span className={`category ${word.category}`}>{word.category}</span>
        <span className={`difficulty difficulty-${word.difficulty}`}>★{word.difficulty}</span>
      </div>
      {word.id.startsWith('user_') && (
        <div className="word-actions">
          <button onClick={() => handleEditWord(word)} className="edit-btn">編集</button>
          <button onClick={() => handleDeleteWord(word.id)} className="delete-btn">削除</button>
        </div>
      )}
    </div>
  );

  return (
    <div className="vocabulary-manager">
      <div className="page-header">
        <h1>語彙管理</h1>
        <p>現在の語彙数: {getWordsCount() + getUserVocabulary().length}語 
          (デフォルト: {getWordsCount()}語 + ユーザー追加: {getUserVocabulary().length}語)</p>
      </div>

      {/* 統計情報 */}
      <div className="stats-panel">
        <h3>カテゴリ別統計</h3>
        <div className="stats-grid">
          {Object.entries(stats).map(([category, count]) => (
            <div key={category} className="stat-item">
              <div className="stat-category">{category}</div>
              <div className="stat-count">{count}語</div>
            </div>
          ))}
        </div>
      </div>

      {/* コントロールパネル */}
      <div className="controls-panel">
        <div className="search-section">
          <input
            type="text"
            placeholder="語彙を検索..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
        </div>

        <div className="filter-section">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="filter-select"
          >
            <option value="all">すべてのカテゴリ</option>
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>

          <select
            value={selectedDifficulty}
            onChange={(e) => setSelectedDifficulty(e.target.value)}
            className="filter-select"
          >
            <option value="all">すべての難易度</option>
            <option value="1">難易度 1</option>
            <option value="2">難易度 2</option>
            <option value="3">難易度 3</option>
          </select>
        </div>

        <div className="view-controls">
          <button
            className={`view-btn ${viewMode === 'grid' ? 'active' : ''}`}
            onClick={() => setViewMode('grid')}
          >
            グリッド
          </button>
          <button
            className={`view-btn ${viewMode === 'list' ? 'active' : ''}`}
            onClick={() => setViewMode('list')}
          >
            リスト
          </button>
        </div>

        <div className="action-controls">
          <button
            className={`toggle-btn ${showUserOnly ? 'active' : ''}`}
            onClick={() => setShowUserOnly(!showUserOnly)}
          >
            ユーザー語彙のみ
          </button>
          <button
            className="add-btn"
            onClick={() => setShowAddForm(true)}
          >
            語彙追加
          </button>
          <button
            className="sample-btn"
            onClick={() => {
              const sampleWord = addUserWord({
                japanese: 'テスト',
                hiragana: 'テスト',
                english: 'test',
                descriptionJa: 'これはテスト用の語彙です',
                descriptionEn: 'This is a sample word for testing',
                category: 'greetings',
                jlptLevel: 'N5',
                difficulty: 1
              });
              setWords(getAllVocabulary());
              saveUserVocabularyToStorage();
              alert('サンプル語彙を追加しました！');
            }}
          >
            サンプル追加
          </button>
        </div>
      </div>

      {/* 語彙追加・編集フォーム */}
      {showAddForm && (
        <div className="modal-overlay">
          <div className="add-form-modal">
            <h3>{editingWord ? '語彙編集' : '新しい語彙を追加'}</h3>
            <div className="form-group">
              <label>日本語:</label>
              <input
                type="text"
                value={newWord.japanese}
                onChange={(e) => setNewWord({...newWord, japanese: e.target.value})}
                placeholder="例: 食べる"
              />
            </div>
            <div className="form-group">
              <label>ひらがな:</label>
              <input
                type="text"
                value={newWord.hiragana}
                onChange={(e) => setNewWord({...newWord, hiragana: e.target.value})}
                placeholder="例: たべる"
              />
            </div>
            <div className="form-group">
              <label>英語:</label>
              <input
                type="text"
                value={newWord.english}
                onChange={(e) => setNewWord({...newWord, english: e.target.value})}
                placeholder="例: to eat"
              />
            </div>
            <div className="form-group">
              <label>日本語説明:</label>
              <input
                type="text"
                value={newWord.descriptionJa}
                onChange={(e) => setNewWord({...newWord, descriptionJa: e.target.value})}
                placeholder="例: 食べることを表す動詞"
              />
            </div>
            <div className="form-group">
              <label>英語説明:</label>
              <input
                type="text"
                value={newWord.descriptionEn}
                onChange={(e) => setNewWord({...newWord, descriptionEn: e.target.value})}
                placeholder="例: to eat"
              />
            </div>
            <div className="form-group">
              <label>カテゴリ:</label>
              <select
                value={newWord.category}
                onChange={(e) => setNewWord({...newWord, category: e.target.value})}
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label>難易度:</label>
              <select
                value={newWord.difficulty}
                onChange={(e) => setNewWord({...newWord, difficulty: parseInt(e.target.value)})}
              >
                <option value={1}>1 - 簡単</option>
                <option value={2}>2 - 普通</option>
                <option value={3}>3 - 難しい</option>
              </select>
            </div>
            <div className="form-actions">
              <button 
                onClick={editingWord ? handleUpdateWord : handleAddWord}
                className="save-btn"
              >
                {editingWord ? '更新' : '追加'}
              </button>
              <button 
                onClick={() => {
                  setShowAddForm(false);
                  setEditingWord(null);
                  setNewWord({
                    japanese: '',
                    hiragana: '',
                    english: '',
                    descriptionJa: '',
                    descriptionEn: '',
                    category: 'verbs',
                    jlptLevel: 'N5',
                    difficulty: 1
                  });
                }}
                className="cancel-btn"
              >
                キャンセル
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 語彙リスト */}
      <div className="vocabulary-list">
        <div className="list-header">
          <h3>語彙一覧 ({filteredWords.length}語)</h3>
        </div>

        {viewMode === 'grid' ? (
          <div className="words-grid">
            {currentWords.map(renderWordCard)}
          </div>
        ) : (
          <div className="words-list">
            {currentWords.map(renderWordListItem)}
          </div>
        )}

        {/* ページネーション */}
        {totalPages > 1 && (
          <div className="pagination">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i + 1}
                onClick={() => paginate(i + 1)}
                className={`page-btn ${currentPage === i + 1 ? 'active' : ''}`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default VocabularyManager; 