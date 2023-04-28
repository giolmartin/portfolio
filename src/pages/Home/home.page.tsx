import React from 'react';
import ToggleThemeButton from '../../components/toggleThemeButton/toggleThemeButton.component';
import Canvas from '../../components/Canvas/canvas.component';
import { Title } from './home.styles';
const HomePage: React.FC = () => {
  return (
    <>
      <Canvas>
        <ToggleThemeButton />
        <Title>HomePage</Title>
      </Canvas>
    </>
  );
};

export default HomePage;
