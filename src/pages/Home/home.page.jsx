import React from 'react';
import { RightSideContainer } from '../../global.styles.jsx';
import { HomeContainer, TextContainer, Text } from './home.style.jsx';
const HomePage = () => {
  return (
    <RightSideContainer>
      <HomeContainer>
        {/* <TextContainer> */}
        <Text>
          “Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
          consectetur, adipisci velit, sed quia non numquam eius modi tempora
          incidunt ut labore et dolore magnam aliquam quaerat voluptatem.”
        </Text>
        {/* </TextContainer> */}
      </HomeContainer>
    </RightSideContainer>
  );
};

export default HomePage;
