import React from 'react';
import { useNavigate } from 'react-router-dom';

import { useNavTabContext } from '../../context/portfolio.context';

import { NavTab, NavbarContainer } from './navbar.style';

const Navbar = () => {
  const { activeTab, setActiveTab } = useNavTabContext();
  const navigate = useNavigate();

  const handleTabClick = (tab) => {
    if (tab === 'Home') {
      setActiveTab(tab);
      navigate('/');
      return;
    } else {
      setActiveTab(tab);
      navigate(tab.toLowerCase());
      return;
    }
  };

  return (
    <NavbarContainer>
      {['Home', 'Projects', 'About', 'Contact'].map((tab) => (
        <NavTab
          key={tab}
          active={activeTab === tab}
          onClick={() => handleTabClick(tab)}
        >
          {activeTab === tab ? '•' : tab}
        </NavTab>
      ))}
    </NavbarContainer>
  );
};

export default Navbar;
