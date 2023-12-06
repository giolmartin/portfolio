import { createGlobalStyle, keyframes, styled } from 'styled-components';

export const colors = {
  primary: '#7ba2cc',
  secondary: '#55868C',
  background: '#36454f',
  accent: '#A28497',
  text: '#36454f',
  hover: '#ffd700',
  secondary_text: '#2e8b57',
};

export const colors_animation = {
  primary: '#A28497',
  secondary: '#ffd700',
};

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    background: ${colors.background};
  }
`;

export const FadeInAnimation = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;
