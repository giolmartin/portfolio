import styled from 'styled-components';

import { colors, FadeInAnimation } from '../../global.styles';

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: transparent;
  height: 100vh;
  width: 100vw;
  animation: ${FadeInAnimation} 2s ease-in-out;
`;

export const Text = styled.h1`
  color: ${(props) => props.color};
  font-size: 3rem;
  margin-bottom: 2rem;
`;
