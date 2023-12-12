import React from 'react';

import { useThemeContext } from '../../context/theme.context';

import { AboutContainer, Text } from './about.style';

const AboutPage = () => {
  const { theme } = useThemeContext();
  return (
    <AboutContainer>
      <Text color={theme.accent}>About</Text>
    </AboutContainer>
  );
};

export default AboutPage;
