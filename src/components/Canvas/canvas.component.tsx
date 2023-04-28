import React, { ReactNode } from 'react';
import { Background, Square as StyledCanvas, Border } from './canvas.styles';

interface CanvasProps {
  children: ReactNode;
}

const Canvas: React.FC<CanvasProps> = ({ children }) => {
  return (
    <Background>
      <StyledCanvas>
        <Border />
        {children}
      </StyledCanvas>
    </Background>
  );
};

export default Canvas;
