import React from 'react';

import Canvas from '../../components/Canvas/canvas.component';
import ToggleThemeButton from '../../components/toggleThemeButton/toggleThemeButton.component';
import Cards from '../../components/Card/card.component';

import { Title } from './projects.styles';

const ProjectsPage: React.FC = () => {
  return (
    <>
      <Canvas>
        <ToggleThemeButton />
        <Cards />
      </Canvas>
    </>
  );
};

export default ProjectsPage;
