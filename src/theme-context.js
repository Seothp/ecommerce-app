import { createContext } from 'react';

export const themes = {
  light: {
    name: 'light',
    primary: '#DB3022',
    error: '#F01F0E',
    success: '#2AA952',
    sale: '#DB3022',
    background: '#F9F9F9',
    gray: '#9B9B9B',
    main: '#FFFFFF',
    invert: '#222222',
    light: '#F9F9F9',
  },
  dark: {
    name: 'dark',
    primary: '#EF3651',
    error: '#FF2424',
    success: '#55D85A',
    sale: '#FF3E3E',
    background: '#1E1F28',
    gray: '#ABB4BD',
    main: '#2A2C36',
    invert: '#F7F7F7',
    light: '#F7F7F7',
  },
};
export const ThemeContext = createContext(themes.light);
