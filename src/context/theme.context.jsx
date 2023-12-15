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

    fonts: {
      heading: 'Raleway, sans-serif',
      body: 'Roboto, sans-serif',
      special: 'Lora, serif',
    },
  },
  dark: {
    primary: '#A2D2FF', // Baby Blue Eyes
    secondary: '#FFAFCC', // Nadeshiko Pink
    background: '#22223B', // Russian Violet
    accent: '#9D8189', // Old Lavender
    text: '#CDB4DB', // Thistle
    hover: '#BDE0FE', // Beau Blue
    secondary_text: '#FFCDB2', // Unbleached Silk
    highlight: '#FEC89A', // Peach Puff
    warning: '#FFD6A5', // Peach
    success: '#FFB5A7', // Light Coral
    opaque_primary: 'rgba(162, 210, 255, 0.2)',
  
    fonts: {
      heading: 'Raleway',
      body: 'Roboto',
      special: 'Lora',
    },
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
