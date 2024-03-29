import React from 'react';

import { ProjectContainer, Title, ProjectLink } from './project.style';
import { projects } from '../../data/projects.data';
import { useThemeContext } from '../../context/theme.context';

const ProjectsPage = () => {
  const { theme } = useThemeContext();

  return (
    <>
      <ProjectContainer>
        <Title color={theme.primary}>PROJECTS</Title>
        {projects.map((project) => {
          return (
            <ProjectLink
              key={project.id}
              to={`${project.url}`}
              color={theme.primary}
              hover_color={theme.hover}
            >
              {project.title}
            </ProjectLink>
          );
        })}
      </ProjectContainer>
    </>
  );
};

export default ProjectsPage;
