import styled from 'styled-components';
import { Link } from 'react-router-dom';

import {
  RightSideContainer,
  colors,
  FadeInAnimation,
} from '../../global.styles';

export const ProjectContainer = styled(RightSideContainer)`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  animation: ${FadeInAnimation} 2s ease-in-out;
  background-color: transparent;
  overflow-y: scroll ;
  overflow-x: hidden;
  z-index: 1;

  &::-webkit-scrollbar {
    width: 1px; /* Adjust the width of the scrollbar */
  }

  &::-webkit-scrollbar-track {
    background: transparent; /* Color of the track */
  }

  &::-webkit-scrollbar-thumb {
    background: transparent; /* Color of the scrollbar thumb */
    border-radius: 5px; /* Rounded corners on the scrollbar thumb */
  }
`;

export const Title = styled.h1`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  color: ${colors.primary};
  font-size: 1.5rem;
  margin-bottom: 5vh;
  margin-top: 20vh;
  margin-right: 2rem;
  @media (max-width: 768px) {
    font-size: 1rem;
    margin-right: 1rem;
  }
`;

export const ProjectLink = styled(Link)`
  color: ${colors.primary};
  font-size: 3rem;
  margin-bottom: 2rem;
  margin-top: 1vh;
  margin-right: 2rem;
  text-decoration: none;

  &:hover {
    color: ${(props) => props.hover_color};
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-right: 1rem;
  }
`;
