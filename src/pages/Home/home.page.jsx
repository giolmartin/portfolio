import React from 'react';
import { useThemeContext } from '../../context/theme.context';
import { RightSideContainer } from '../../global.styles.jsx';
import { HomeContainer, Text } from './home.style.jsx';
const HomePage = () => {
  const { theme } = useThemeContext();
  return (
    <RightSideContainer>
      <HomeContainer>
        <Text color={theme.text} font={theme.fonts.body}>
          “Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
          consectetur, adipisci velit, sed quia non numquam eius modi tempora
          incidunt ut labore et dolore magnam aliquam quaerat voluptatem.”
        </Text>
      </HomeContainer>
    </RightSideContainer>
  );
};

export default HomePage;
