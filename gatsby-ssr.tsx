// gatsby-browser.js & gatsby-ssr.js
import React from 'react';
import { ThemeContextProvider } from './src/themeContext';

export const wrapRootElement = ({ element }): JSX.Element => (
  <ThemeContextProvider>{element}</ThemeContextProvider>
);
