import React, { useState } from 'react';
import { NavTab, NavbarContainer } from './navbar.style';

const Navbar = ({ activeTab, onClickHandler }) => {
  return (
    <NavbarContainer>
      {['Home', 'Projects', 'About', 'Contact'].map((tab) => (
        <NavTab
          key={tab}
          active={activeTab === tab}
          onClick={() => onClickHandler(tab)}
        >
          {activeTab === tab ? "•" : tab }
        </NavTab>
      ))}
    </NavbarContainer>
  );
};

export default Navbar;
