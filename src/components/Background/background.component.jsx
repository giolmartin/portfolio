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
        <NameContainer bgColor={theme.primary}>
          <Name textColor={theme.hover}> My Name</Name>
          <UnderText textColor={theme.hover}> Full-Stack Developer </UnderText>
          <NavbarContainer>
            <Navbar />
          </NavbarContainer>
        </NameContainer>
      </ClearContainer>
    </>
  );
};

export default Background;
