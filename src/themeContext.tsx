// src/ThemeContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './theme';

interface ThemeContextData {
  theme: DefaultTheme;
  isDarkMode: boolean;
  toggleTheme: () => void;
}

interface ThemeContextProviderProps {
  children: ReactNode;
}

const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData);

export const useTheme = () => useContext(ThemeContext);

export const ThemeContextProvider: React.FC<ThemeContextProviderProps> = ({
  children,
}) => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const theme = isDarkMode ? darkTheme : lightTheme;

  const toggleTheme = () => {
    setIsDarkMode((prevState) => !prevState);
  };

  return (
    <ThemeContext.Provider value={{ theme, isDarkMode, toggleTheme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};
