import styled, { keyframes } from 'styled-components';

const media = {
  large_desktop: '@media(min-width: 1200px)',
  desktop: '@media(min-width: 992px)',
  mobile: '@media(max-width: 768px)',
};

//TODO: Add responsive animation for mobile and smaller screens
//Animation of the name
export const fadeOut = keyframes`
  0% {
    opacity: 1;
    transform: translate(-50%, -50%);
  }
  100% {
    opacity: 0;
    transform: translate(-20%, -50%);
  }
`;

//Animation of the phrase
export const fadeOut2 = keyframes`
  0% {
    opacity: 1;
    transform: translate(-20%, -50%);
  }
  100% {
    opacity: 0.3;
    transform: translate(-90%, -50%);
  }
`;

export const IntroContainer = styled.div`
  background-color: transparent;
  z-index: 1;
`;

export const Name = styled.div`
  font-family: ${(props) => props.font};
  color: ${(props) => props.color};
  font-size: 3vw;
  position: absolute;
  top: 50%;
  left: 40%;
  transform: translateY(-50%);
  white-space: nowrap;
  animation: ${fadeOut} 4s forwards;
  animation-delay: 0s;

  @media (max-width: 768px) {
    font-size: 5vw;
  }
`;

export const Phrase = styled.div`
  font-family: ${(props) => props.font};
  color: ${(props) => props.color};
  font-size: 5vw;
  position: absolute;
  top: 50%;
  left: 60%;
  transform: translateY(-50%);
  white-space: nowrap;
  animation: ${fadeOut2} 6s forwards;
  animation-delay: 0s;

  @media (max-width: 768px) {
    font-size: 7vw;
  }
`;
