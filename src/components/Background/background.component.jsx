import React from 'react';

import { useThemeContext } from '../../context/theme.context';
import Navbar from '../Navbar/navbar.component.jsx';
import {
  BackgroundContainer,
  BackgroundImage,
  ClearContainer,
  NavbarContainer,
  NameContainer,
  Name,
  UnderText,
} from './background.style.jsx';
import P5Wrapper from '../P5Wrapper/p5.wrapper.component.jsx';

const Background = () => {
  const { theme } = useThemeContext();

  return (
    <>
      <BackgroundContainer backgroundColor={theme.background} />
      <ClearContainer borderColor={theme.accent}>
        <P5Wrapper theme={theme} />
        <NameContainer>
          <Name color={theme.primary} font={theme.fonts.special}>
            Giovanni Martin
          </Name>
          <UnderText color={theme.primary} font={theme.fonts.text}>
            Full-Stack Developer
          </UnderText>
          <NavbarContainer>
            <Navbar />
          </NavbarContainer>
        </NameContainer>
      </ClearContainer>
    </>
  );
};

export default Background;
