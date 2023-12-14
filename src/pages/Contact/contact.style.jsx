import styled from 'styled-components';

import { RightSideContainer, FadeInAnimation } from '../../global.styles';

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  margin-right: 4vw;
  background: transparent;
  animation: ${FadeInAnimation} 2s ease-in-out;

  @media (max-width: 768px) {
    margin-right: 0;
    margin-top: 45vh;
    align-items: center;
    justify-content: flex-start;
  }
`;


