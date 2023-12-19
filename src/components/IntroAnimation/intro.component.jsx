import React, { useEffect } from 'react';
import { useThemeContext } from '../../context/theme.context';

import { IntroContainer ,Name, Phrase } from './intro.style.jsx';

const IntroAnimation = ({ onIntroEnd }) => {
  const { theme } = useThemeContext();

  useEffect(() => {
    const timer = setTimeout(() => {
      onIntroEnd();
    }, 7000); // Adjust time based on your animation duration

    return () => clearTimeout(timer); // Cleanup the timer
  }, [onIntroEnd]);

  return (
    <IntroContainer backgroundColor={theme.background}>
      <Name color={theme.primary} font={theme.fonts.special}>
        GIO MARTIN
      </Name>
      <Phrase color={theme.primary} font={theme.fonts.special}>
        PORTFOLIO
      </Phrase>
    </IntroContainer>
  );
    
};

export default IntroAnimation;
