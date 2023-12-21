import React, { useState } from 'react';

import { useThemeContext } from '../../context/theme.context';
import Navbar from '../Navbar/navbar.component.jsx';
import ToggleButton from '../StyledButtons/toggleButton.component.jsx';
import ThemeToggleButton from '../StyledButtons/themeToggleButton.component.jsx';
import {
  BackgroundContainer,
  BackgroundImage,
  ClearContainer,
  NavbarContainer,
  NameContainer,
  Name,
  UnderText,
  ButtonContainer,
  ThemeButtonsContainer,
  ToggleButtonContainer,
  ButtonText,
} from './background.style.jsx';
import P5Wrapper from '../P5Wrapper/p5.wrapper.component.jsx';

const Background = () => {
  const { theme, toggleTheme } = useThemeContext();
  const [isAnim, setIsAnim] = useState(true);

  //Check for theme, theme has now property name with name of the theme.
  const isDarkTheme = theme.name === 'dark';

  const toggleAnim = () => {
    setIsAnim(!isAnim);
  };

  //TODO: Fix the ToggleButton to work with the new props
  return (
    <>
      <BackgroundContainer backgroundColor={theme.background} />
      <ButtonContainer>
        <ToggleButtonContainer>
          <ToggleButton isAnim={isAnim} onClick={toggleAnim} theme={theme} />
          <ButtonText font={theme.fonts.special} color={theme.text}>
            {isAnim ? 'Stop' : 'Start'}
          </ButtonText>
        </ToggleButtonContainer>
        <ThemeButtonsContainer>
          <ButtonText font={theme.fonts.special} color={theme.text}>
            Light
          </ButtonText>
          <ThemeToggleButton
            isActive={!isDarkTheme}
            onClick={() => toggleTheme('light')}
            theme={theme}
          ></ThemeToggleButton>
          <ButtonText font={theme.fonts.special} color={theme.text}>
            Dark
          </ButtonText>
          <ThemeToggleButton
            isActive={isDarkTheme}
            onClick={() => toggleTheme('dark')}
            theme={theme}
          ></ThemeToggleButton>
        </ThemeButtonsContainer>
      </ButtonContainer>
      <ClearContainer key={theme.name} borderColor={theme.accent}>
        <P5Wrapper theme={theme} isAnim={isAnim} />
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
