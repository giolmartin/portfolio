import { createGlobalStyle, keyframes, styled } from 'styled-components';


export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    ${
      '' /* Need to change the nackground color 
            to individual colors for 
            themes and the intro animation */
    }
    background: #121212;

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

export const RightSideContainer = styled.div`
  position: absolute;
  top: 3.7vh;
  right: 3.5vh;
  bottom: 3.7vh;
  left: 50vw;
  background-color: transparent;
  z-index: 1;

  @media (max-width: 768px) {
    ${'' /* left: 50vw;  */}
  }
`;
