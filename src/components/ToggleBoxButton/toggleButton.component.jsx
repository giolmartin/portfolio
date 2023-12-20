import React from 'react';

import { StyledToggleButton } from './toggleButton.style';

const ToggleButton = ({ isAnim, onClick, theme }) => {
  return <StyledToggleButton isAnim={isAnim} onClick={onClick} theme={theme} />;
};

export default ToggleButton;
