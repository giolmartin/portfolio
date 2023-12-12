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

//Choose three fonts and then transfer to the theme context.
export const fonts = {
  header: 'Roboto Slab',
  accent: 'Montserrat',
  text: 'Open Sans',
  speacial: 'Pacifico',
};

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    ${
      '' /* Need to change the nackground color 
            to individual colors for 
            themes and the intro animation */
    }
    background: ${colors.background};

  }
`;

export const FadeInAnimation = keyframes`
from {
    opacity: 0;
  }
  to{
    opacity: 1;
  }
`;
