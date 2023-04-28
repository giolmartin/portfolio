import React, { ReactNode } from 'react';
import { Background, Square as StyledCanvas, Border } from './canvas.styles';
import Navbar from '../Navbar/navbar.component';
interface CanvasProps {
  children: ReactNode;
}

const Canvas: React.FC<CanvasProps> = ({ children }) => {
  return (
    <Background>
      <StyledCanvas>
        <Navbar />
        <Border />
        {children}
      </StyledCanvas>
    </Background>
  );
};

export default Canvas;
