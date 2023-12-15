import styled from 'styled-components';

import {  FadeInAnimation } from '../../global.styles';

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: flex-end;
  justify-content: flex-start;
  background: transparent;
  height: 100%;
  width: 50%;
  overflow: hidden;
  ${'' /*  */}
  margin-left: auto;
  padding: 0 2rem;
  z-index: 1;
  animation: ${FadeInAnimation} 2s ease-in-out;

  @media (max-width: 768px) {
    width: 100%;
    font-size: 0.5rem;
    padding: 0;
    margin-left: 0;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  background: transparent;
  height: 100%;
  width: 50%;
  padding: 0 2rem;
  @media (max-width: 768px) {
    width: 100%;
    padding: 0 1rem;
  }
`;

export const Text = styled.h3`
  font-family: ${(props) => props.font};
  color: ${(props) => props.color};
  font-size: 2rem;
  margin-bottom: 2rem;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;
