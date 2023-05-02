import React from 'react';

import { useTheme } from '../../contexts/theme.context';
import { ButtonContainer, ThemeButton } from './toggleThemeButton.styles';

const ToggleThemeButton = () => {
  const { theme, toggleTheme } = useTheme();

  const handleToggleTheme = (currentTheme: string): void => {
    if (theme.name !== currentTheme) {
      toggleTheme();
    }
  };

  return (
    <ButtonContainer>
      <ThemeButton
        filled={theme.name === 'dark'}
        onClick={() => handleToggleTheme('dark')}
      >
        Dark
      </ThemeButton>
      <ThemeButton
        filled={theme.name === 'light'}
        onClick={() => handleToggleTheme('light')}
      >
        Light
      </ThemeButton>
    </ButtonContainer>
  );
};

export default ToggleThemeButton;
