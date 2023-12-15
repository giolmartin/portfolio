import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import { useNavTabContext } from '../../context/portfolio.context';
import { useThemeContext } from '../../context/theme.context';

import { NavTab, NavbarContainer } from './navbar.style';
import { tabs } from '../../data/navbar.data';

const Navbar = () => {
  const { activeTab, setActiveTab } = useNavTabContext();
  const { theme } = useThemeContext();
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
      {tabs.map((tab) => (
        <NavTab
          key={tab.id}
          active={activeTab === tab.tile}
          onClick={() => handleTabClick(tab.url)}
          color={theme.text}
          hover_color={theme.hover}
          font={theme.fonts.heading}
        >
          {activeTab === tab.url ? '•' : tab.title}
        </NavTab>
      ))}
    </NavbarContainer>
  );
};

export default Navbar;
