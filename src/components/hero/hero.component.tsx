import React, { useState, useCallback } from 'react';
import { Background, Square, Border } from './hero.styles';
import Navbar from '../Navbar/navbar.component';

const Hero: React.FC = () => {
  const [gradient, setGradient] = useState(
    'linear-gradient(45deg, #00f, #f00, #fff)'
  );

  const updateGradient = useCallback((e: React.MouseEvent) => {
    const x = e.clientX;
    const y = e.clientY;
    const screenW = window.innerWidth;
    const screenH = window.innerHeight;

    const hue = (x / screenW) * 360;
    const saturation = (y / screenH) * 1100;
    setGradient(
      `linear-gradient(45deg, hsl(${hue}, ${saturation}%, 50%), hsl(${
        hue + 180
      }, ${saturation}%, 50%))`
    );
  }, []);

  return (
    <>
      
      <Background gradient={gradient} onMouseMove={updateGradient}>
        <Square>
          <Border></Border>
        </Square>
      </Background>
    </>
  );
};

export default Hero;
