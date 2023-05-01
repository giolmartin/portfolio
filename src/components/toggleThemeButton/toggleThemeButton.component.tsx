import React from 'react';
import { useTheme } from '../../contexts/theme.context';
import { ButtonContainer, ThemeButton } from './toggleThemeButton.styles';

const ToggleThemeButton = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <ButtonContainer>
      <ThemeButton onClick={toggleTheme}>
        {theme.name === 'light' ? 'Dark' : 'Light'} Mode
      </ThemeButton>
    </ButtonContainer>
  );
};

export default ToggleThemeButton;
