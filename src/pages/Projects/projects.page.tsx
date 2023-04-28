import React from 'react';
import Canvas from '../../components/Canvas/canvas.component';
import ToggleThemeButton from '../../components/toggleThemeButton/toggleThemeButton.component';
import { Title } from './projects.styles';
const ProjectsPage: React.FC = () => {
  return (
    <>
      <Canvas>
        <ToggleThemeButton />
        <Title>ProjectsPage</Title>
      </Canvas>
    </>
  );
};

export default ProjectsPage;
