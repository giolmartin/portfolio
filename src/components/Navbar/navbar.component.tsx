import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

import {
  NavbarContainer,
  NavbarList,
  NavbarItem,
  StyledNavLink,
} from './navbar.styles';

const Navbar: React.FC = () => {
  return (
    <NavbarContainer>
      <NavbarList>
        <NavbarItem>
          <StyledNavLink to='/'>Home</StyledNavLink>
        </NavbarItem>
        <NavbarItem>
          <StyledNavLink to='/projects'>Projects</StyledNavLink>
        </NavbarItem>
        <NavbarItem>
          <StyledNavLink to='/contact'>Contact</StyledNavLink>
        </NavbarItem>
      </NavbarList>
    </NavbarContainer>
  );
};

export default Navbar;
