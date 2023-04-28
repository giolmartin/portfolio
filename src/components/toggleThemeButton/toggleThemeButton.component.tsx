import React from 'react';
import { useTheme } from '../../contexts/theme.context';
import { Button } from './toggleThemeButton.styles';

const ToggleThemeButton = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button onClick={toggleTheme}>
      Switch to {theme.name === 'light' ? 'Dark' : 'Light'} Mode
    </Button>
  );
};

export default ToggleThemeButton;
