import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import CrosswordGame from './pages/CrosswordGame'
import Progress from './pages/Progress'
import Settings from './pages/Settings'
import VocabularyManager from './pages/VocabularyManager'
import { SettingsProvider, useSettings } from './contexts/SettingsContext'
import { LanguageProvider } from './contexts/LanguageContext'
import './App.css'

const AppContent: React.FC = () => {
  const [currentLevel, setCurrentLevel] = useState(1)
  const [completedWords, setCompletedWords] = useState<string[]>([])
  const { settings } = useSettings()
  
  // デバッグログ
  console.log('App settings:', settings);

  return (
    <LanguageProvider language={settings.language}>
      <Router>
        <div className="App">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route 
                path="/game" 
                element={
                  <CrosswordGame 
                    level={currentLevel}
                    onWordComplete={(word: string) => setCompletedWords([...completedWords, word])}
                    inputMethod={settings.inputMethod}
                    characterType={settings.characterType}
                  />
                } 
              />
              <Route 
                path="/progress" 
                element={
                  <Progress 
                    completedWords={completedWords}
                    currentLevel={currentLevel}
                  />
                } 
              />
              <Route path="/settings" element={<Settings />} />
              <Route path="/vocabulary" element={<VocabularyManager />} />
            </Routes>
          </main>
        </div>
      </Router>
    </LanguageProvider>
  )
}

function App() {
  return (
    <SettingsProvider>
      <AppContent />
    </SettingsProvider>
  )
}

export default App 