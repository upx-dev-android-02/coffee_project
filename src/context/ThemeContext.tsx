"use client";

import React, { createContext, useState, useContext, useEffect, ReactNode, Dispatch, SetStateAction } from 'react';
import LocalStorageHelper from '@/utils/LocalStorageHelper';

// --- DEFINIÇÃO DAS INTERFACES ---

interface ThemeColors {
  // Paleta principal de superfícies (Escuro -> Claro)
  color0: string;  // Transparente
  color1: string;  // A mais escura
  color2: string;
  color3: string;
  color4: string;
  color5: string;  // A mais clara

  // Cores de destaque e utilitárias
  color6: string;  // Primária
  color7: string;  // Variante da primária
  color8: string;  // Secundária (opcional)
  color9: string;  // Variante da secundária (opcional)
  color10: string; // Erro

  // Cores para texto/ícones sobre as cores de superfície
  onColor1: string;
  onColor2: string;
  onColor3: string;
  onColor4: string;
  onColor5: string;

  // Cores para texto/ícones sobre as cores de destaque
  onColor6: string;
  onColor7: string;
  onColor8: string;
  onColor9: string;
  onColor10: string;
}


interface Theme {
  name: 'light' | 'dark';
  colors: ThemeColors;
}

interface Themes {
  light: Theme;
  dark: Theme;
}

interface ThemeContextType {
  currentThemeName: 'light' | 'dark';
  theme: Theme;
  setCurrentThemeName: Dispatch<SetStateAction<'light' | 'dark'>>;
  toggleTheme: () => void;
}

interface ThemeProviderProps {
  children: ReactNode;
}

// Instância do helper
const storage = new LocalStorageHelper();
const LOCAL_STORAGE_KEY = 'app-theme-name';

// --- DEFINIÇÃO DOS OBJETOS DE TEMA ---

const lightTheme: Theme = {
  name: 'light',
  colors: {
    color0: 'transparent',
    color1: '#FFFFFF',
    color2: '#F2F2F7',
    color3: '#E5E5EA',
    color4: '#D1D1D6',
    color5: '#1C1C1E',

    color6: '#D5FF35',
    color7: '#B5E132',
    color8: '',
    color9: '',
    color10: '#FF453A',

    onColor1: '#000000',
    onColor2: '#1C1C1E',
    onColor3: '#000000',
    onColor4: '#000000',
    onColor5: '#FFFFFF',
    onColor6: '#0D0D0D',
    onColor7: '#0D0D0D',
    onColor8: '',
    onColor9: '',
    onColor10: '#FFFFFF',
  },
};

const darkTheme: Theme = {
  name: 'dark',
  colors: {
    // Paleta principal (Escuro -> Claro)
    color0: 'transparent',
    color1: '#000000',      
    color2: '#1C1C1E',      
    color3: '#2C2C2E',       
    color4: '#3A3A3C',       
    color5: '#F2F2F7',      

    // Cores de destaque
    color6: '#D5FF35',       
    color7: '#B5E132',       
    color8: '',              
    color9: '',              
    color10: '#FF453A',      

    // Cores "On" para contraste
    onColor1: '#F2F2F7',     
    onColor2: '#C7C7CC',     
    onColor3: '#FFFFFF',    
    onColor4: '#FFFFFF',     
    onColor5: '#000000',
    onColor6: '#0D0D0D',    
    onColor7: '#0D0D0D',     
    onColor8: '',
    onColor9: '',
    onColor10: '#000000',   
  },
};

const themes: Themes = {
  light: lightTheme,
  dark: darkTheme,
};

// --- CONTEXTO ---

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [currentThemeName, setCurrentThemeName] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined') {
      const storedThemeName = storage.getItem(LOCAL_STORAGE_KEY) as 'light' | 'dark';
      return storedThemeName && themes[storedThemeName] ? storedThemeName : 'light';
    }
    return 'light';
  });

  const theme = themes[currentThemeName] || lightTheme;

  useEffect(() => {
    if (typeof window !== 'undefined') {
      storage.setItem(LOCAL_STORAGE_KEY, currentThemeName);
    }
  }, [currentThemeName]);

  const value: ThemeContextType = {
    currentThemeName,
    theme,
    setCurrentThemeName,
    toggleTheme: () => {
      setCurrentThemeName(prev => (prev === 'light' ? 'dark' : 'light'));
    }
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};