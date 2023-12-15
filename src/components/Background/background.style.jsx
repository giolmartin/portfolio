import styled from 'styled-components';

import { FadeInAnimation } from '../../global.styles';

export const BackgroundContainer = styled.div`
  position: fixed;
  background-color: ${(props) => props.backgroundColor};
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  z-index: -1;
  animation: ${FadeInAnimation} 2s ease-in-out;
`;

export const BackgroundImage = styled.div`
  background-image: url('/moon.png');
  background-size: cover;
  background-position: center;
  height: 100vh;
  width: 100vw;
  opacity: 0.5;
`;

export const ClearContainer = styled.div`
  ${'' /*  */}
  position: absolute;
  top: 3.5vh;
  left: 3.5vh;
  right: 3.5vh;
  bottom: 3.5vh;
  background-color: transparent;
  border: 2px solid ${(props) => props.borderColor};
  overflow: hidden;
  animation: ${FadeInAnimation} 2s ease-in-out;
  z-index: 1;
  ${'' /*  */}
`;

export const NameContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  text-align: left;
  margin: 3vh;
  width: 45vw;
  background-color: transparent;
  ${'' /* background-color: ${(props) => props.bgColor}; */}
  padding: 0;
  overflow: hidden;
  z-index: 1;

  @media (max-width: 768px) {
    width: 75vw;
  }
`;

export const Name = styled.h1`
  color: ${(props) => props.textColor};
  font-size: 3rem;
  margin: 0;
  background-color: transparent;
  @media (max-width: 1278px) {
    font-size: 2rem;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const UnderText = styled.h3`
  color: ${(props) => props.textColor};
  font-size: 1rem;
  padding: 0;
  margin: 0;
  @media (max-width: 1278px) {
    ${'' /* font-size: 2rem; */}
  }

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

// This is only the nav container for rendering,
// for functionality , spacing and such,
// see navbar.component and linked navbar.style
export const NavbarContainer = styled.div`
  width: 25%;
  background-color: transparent;
  margin-top: 2rem;
`;
