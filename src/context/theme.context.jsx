import React, { createContext, useState, useContext } from 'react';

const themes = {
  //TODO: Add colors when I decide on a color scheme for the site and the implementation.
  light: {
    primary: '',
    secondary: '',
    background: '',
    accent: '',
    text: '',
    hover: '',
    secondary_text: '',
  },
  dark: {
    primary: '#0DCAF0',
    secondary: '#6C757D',
    background: '#121212',
    accent: '#FFC107',
    text: '#E1E1E1',
    hover: '#198754',
    secondary_text: '#ADB5BD',
    opaque_primary: 'rgba(13,202,240, 0.2)',
  },
};

const ThemeContext = createContext();

export const useThemeContext = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };
  return (
    <ThemeContext.Provider value={{ theme: themes[theme], toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
