import React, { ReactNode, useRef, useEffect } from 'react';
import {
  Background,
  Square as StyledCanvas,
  Border,
  Grid,
  GridItem,
} from './canvas.styles';
import { useTheme } from '../../contexts/theme.context';
import Navbar from '../Navbar/navbar.component';
import anime from 'animejs';

interface CanvasProps {
  children: ReactNode;
}

const Canvas: React.FC<CanvasProps> = ({ children }) => {
  const { theme } = useTheme();

  useEffect(() => {
    const gridItems = document.querySelectorAll('.grid-item');

    gridItems.forEach((item, index) => {
      anime({
        targets: item,
        opacity: [
          { value: 1, duration: 0, delay: index * 15 },
          { value: 0, duration: 10, delay: 10 + index * 15 },
        ],
        easing: 'linear',
      });
    });
  }, [theme]);

  const gridItems = [];

  for (let i = 0; i < 2000; i++) {
    gridItems.push(<GridItem key={i} className='grid-item' />);
  }

  return (
    <Background>
      <StyledCanvas>
        <Navbar />
        <Border />
        {children}
        <Grid>{gridItems}</Grid>
      </StyledCanvas>
    </Background>
  );
};

export default Canvas;
