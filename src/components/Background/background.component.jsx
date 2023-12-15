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

const Background = () => {
  const { theme } = useThemeContext();

  return (
    <>
      <BackgroundContainer backgroundColor={theme.background} />
      <ClearContainer borderColor={theme.accent}>
        <BackgroundImage />
        <NameContainer>
          <Name color={theme.hover} font={theme.fonts.special}>
            Giovanni Martin
          </Name>
          <UnderText color={theme.hover} font={theme.fonts.text}>
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
