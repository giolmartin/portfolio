import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import { useNavTabContext } from '../../context/portfolio.context';

import { NavTab, NavbarContainer } from './navbar.style';

const Navbar = () => {
  const { activeTab, setActiveTab } = useNavTabContext();
  const navigate = useNavigate();
  const location = useLocation();

  // This useEffect hook is used to set the active tab based on the current path if a reload happens
  useEffect(() => {
    const path =
      location.pathname === '/'
        ? 'Home'
        : location.pathname.substring(1).charAt(0).toUpperCase() +
          location.pathname.slice(2);
    setActiveTab(path);
  }, [location, setActiveTab]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    navigate(tab === 'Home' ? '/' : tab.toLowerCase());
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
