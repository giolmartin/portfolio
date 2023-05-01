import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
const mobile_small = `@media (max-width: 768px)`;

export const NavbarContainer = styled.nav`
  position: absolute;
  margin-top: 1rem;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 70%;
  height: 50px;
  z-index: 1000;
  @{mobile_small} {
    width: 100%;
    
    }
`;

export const NavbarList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  padding: 0;

  ${mobile_small} {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 0;
  }
`;

export const NavbarItem = styled.li`
  font-family: ${({ theme }) => theme.fonts.navbar};
  font-size: 1.2rem;
  font-weight: 200;
  color: ${({ theme }) => theme.text};
  cursor: pointer;
  letter-spacing: 1px;
  padding: 2px 17px;

  ${mobile_small} {
    margin: 5px 0;
    font-size: 1rem;
  }
`;

export const StyledNavLink = styled(NavLink).attrs({
  activeClassName: 'active',
})`
  text-decoration: none;
  color: ${({ theme }) => theme.text};
  text-transform: uppercase;
  font-family: ${({ theme }) => theme.fonts.navbar};
  position: relative;
  &.active {
    color: ${({ theme }) => theme.navbar_active_color};
  }
  &:after {
    content: '';
    width: 0;
    height: 3px;
    left: 0;
    top: 100%;
    border-radius: 2px;
    position: absolute;
    background-color: ${({ theme }) => theme.navbar_underline_color};
    transition: 0.5s;
    box-shadow: 0px 0px 3px ${({ theme }) => theme.text};
  }

  &:hover:after {
    width: 60%;
    transform: translateX(50%);
  }
`;
