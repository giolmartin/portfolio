import styled from 'styled-components';

import { colors, FadeInAnimation } from '../../global.styles';

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: transparent;
  height: 100vh;
  width: 100vw;
  animation: ${FadeInAnimation} 2s ease-in-out;
`;

export const Text = styled.h1`
  color: ${colors.primary};
  font-size: 3rem;
  margin-bottom: 2rem;
`;
