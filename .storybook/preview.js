import React from 'react';
import { ThemeContext, themes } from '../src/theme-context';

const withThemeProvider = (Story, context) => {
  const theme = themes[context.globals.theme];
  return (
    <ThemeContext.Provider value={theme}>
      <Story {...context} />
    </ThemeContext.Provider>
  )
}

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: 'light',
    toolbar: {
      icon: 'circlehollow',
      // array of plain string values or MenuItem shape (see below)
      items: ['light', 'dark'],
    },
  },
};

export const decorators = [withThemeProvider];
