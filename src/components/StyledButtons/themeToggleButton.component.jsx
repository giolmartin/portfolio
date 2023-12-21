import React from 'react';

import { StyledButton } from './styledButton.style';

const ThemeToggleButton = ({ isActive, onClick, theme, style, children }) => {
  return (
    <StyledButton
      isActive={isActive}
      onClick={onClick}
      theme={theme}
      style={style}
    >
      {children}
    </StyledButton>
  );
};

export default ThemeToggleButton;
