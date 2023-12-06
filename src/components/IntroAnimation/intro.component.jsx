import React, { useEffect, useState } from 'react';

import { Name, Phrase } from './intro.style.jsx';

const IntroAnimation = ({ onIntroEnd }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onIntroEnd();
    }, 7000); // Adjust time based on your animation duration

    return () => clearTimeout(timer); // Cleanup the timer
  }, [onIntroEnd]);

  return (
    <div>
      <Name>GIO MARTIN</Name>
      <Phrase>PORTFOLIO</Phrase>
    </div>
  );
};

export default IntroAnimation;
