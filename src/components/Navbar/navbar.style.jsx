import styled from 'styled-components';
import { colors, FadeInAnimation } from '../../global.styles';

export const NavbarContainer = styled.nav`
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  width: 80px;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  animation: ${FadeInAnimation} 2s ease-in-out;
  z-index: 1000;
`;

export const NavTab = styled.div`
  padding: 20px;
  color: yellow;
  cursor: pointer;
  position: relative;
  margin: 20px;
  font-size: ${(props) => (props.active ? '2em' : '1em')};
`;
