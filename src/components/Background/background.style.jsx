import styled from 'styled-components';

import { FadeInAnimation } from '../../global.styles';

export const BackgroundContainer = styled.div`
  position: fixed;
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
