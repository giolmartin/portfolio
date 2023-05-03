import React, { ReactNode, useRef, useEffect } from 'react';
import {
  Background,
  Square as StyledCanvas,
  Border,
 
} from './canvas.styles';
import { useTheme } from '../../contexts/theme.context';
import Navbar from '../Navbar/navbar.component';
import anime from 'animejs';

interface CanvasProps {
  children: ReactNode;
}

const Canvas: React.FC<CanvasProps> = ({ children }) => {
  const { theme } = useTheme();



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
