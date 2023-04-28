import React, { createContext, useContext, useState, ReactNode } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, Theme } from './theme.interface';

const ThemeContext = createContext<{
  theme: Theme;
  toggleTheme: () => void;
}>({
  theme: lightTheme,
  toggleTheme: () => {},
});

export const useTheme = () => useContext(ThemeContext);

interface CustomThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<CustomThemeProviderProps> = ({
  children,
}) => {
  const [theme, setTheme] = useState(lightTheme);

  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme.name === 'light' ? darkTheme : lightTheme
    );
  };

  return (
    <ThemeContext.Provider value={{ theme: theme, toggleTheme }}>
      <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  );
};
