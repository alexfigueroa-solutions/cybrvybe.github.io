// src/wrapRootElement.js
import React from 'react';
import { ThemeContextProvider } from './themeContext';

export const wrapRootElement = ({ element }) => {
  return <ThemeContextProvider>{element}</ThemeContextProvider>;
};
