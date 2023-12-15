import { Link } from 'react-router-dom';
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

export const LinkTo = styled(Link)`
  color: red;
  font-size: 1.5rem;
  margin-bottom: 5vh;
  margin-top: 20vh;
  margin-right: 2rem;
  text-decoration: none;
  background-color: red;

  &:hover {
    color: blue;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-right: 1rem;
  }
  z-index: 1000;
`;
