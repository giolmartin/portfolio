import React from 'react';

import { StyledButton } from './styledButton.style';

const ToggleButton = ({ isAnim, onClick, theme }) => {
  return (
    <div>
      <StyledButton isActive={!isAnim} onClick={onClick} theme={theme} />
    </div>
  );
};

export default ToggleButton;
