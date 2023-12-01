import React, { useEffect, useState } from 'react';

import IntroAnimation from '../../components/IntroAnimation/intro.component.jsx';
import './home.style.jsx';

const HomePage = () => {
  const [introComplete, setIntroComplete] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIntroComplete(true);
    }, 4000); // Corresponding to the duration of the intro animation
  }, []);

  return (
    <div>
      {!introComplete && (
        <IntroAnimation onIntroEnd={() => setIntroComplete(true)} />
      )}
      {introComplete && <h1>HOME PAGE</h1>}
    </div>
  );
};

export default HomePage;
