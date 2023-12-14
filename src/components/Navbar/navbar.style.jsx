import styled from 'styled-components';
import { FadeInAnimation } from '../../global.styles';

export const NavbarContainer = styled.nav`
  margin: 0;
  padding: 0;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  ${'' /* animation: ${FadeInAnimation} 2s ease-in-out; */}
  z-index: 1000;
`;

export const NavTab = styled.div`
  padding: 0px;
  color: ${(props) => props.color};
  cursor: pointer;
  position: relative;
  font-size: ${(props) => (props.active ? '2em' : '1em')};
  ${'' /* Check spacing of nav items */}
  margin: 15px 0px;

  &:hover {
    color: ${(props) => props.hover_color};
  }
`;
