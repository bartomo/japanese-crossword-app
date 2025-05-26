import React, { createContext, useContext, useState, ReactNode } from 'react';
import { GameSettings } from '../types';

interface SettingsContextType {
  settings: GameSettings;
  updateSettings: (newSettings: Partial<GameSettings>) => void;
}

const SettingsContext = createContext<SettingsContextType | undefined>(undefined);

export const useSettings = () => {
  const context = useContext(SettingsContext);
  if (context === undefined) {
    throw new Error('useSettings must be used within a SettingsProvider');
  }
  return context;
};

interface SettingsProviderProps {
  children: ReactNode;
}

export const SettingsProvider: React.FC<SettingsProviderProps> = ({ children }) => {
  const [settings, setSettings] = useState<GameSettings>({
    showHiragana: true,
    showEnglish: true,
    difficulty: 'medium',
    soundEnabled: true,
    theme: 'dark',
    language: 'ja',
    inputMethod: 'both',
    characterType: 'both'
  });

  const updateSettings = (newSettings: Partial<GameSettings>) => {
    console.log('Settings updated:', newSettings);
    setSettings(prev => {
      const updated = {
        ...prev,
        ...newSettings
      };
      console.log('New settings state:', updated);
      return updated;
    });
  };

  return (
    <SettingsContext.Provider value={{ settings, updateSettings }}>
      {children}
    </SettingsContext.Provider>
  );
}; 