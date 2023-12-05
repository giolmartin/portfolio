import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar/navbar.component.jsx';
import IntroAnimation from '../../components/IntroAnimation/intro.component.jsx';
import './home.style.jsx';

const HomePage = () => {
  const [introComplete, setIntroComplete] = useState(false);
  const [activeTab, setActiveTab] = useState('Home');

  const handleTab = (tab) => {
    setActiveTab(tab);
    console.log(tab);
  };

  useEffect(() => {
    setTimeout(() => {
      setIntroComplete(true);
    }, 4000); // Corresponding to the duration of the intro animation
  }, []);

  return (
    <div>
      <Navbar activeTab={activeTab} onClickHandler={handleTab} />

      {!introComplete && (
        <IntroAnimation onIntroEnd={() => setIntroComplete(true)} />
      )}
      {introComplete && <h1>HOME PAGE</h1>}
    </div>
  );
};

export default HomePage;
