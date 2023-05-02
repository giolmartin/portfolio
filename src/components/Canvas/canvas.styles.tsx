import styled, { keyframes } from 'styled-components';

export const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-height: 100vh;
  background: ${({ theme }) => theme.background};
  z-index: -1;

  @media (max-width: 768px) {
    min-height: 100vh;
  }
`;

const animate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg)
  }
`;

export const Square = styled.div`
  position: relative;
  width: 100%;
  height: 90vh;
  margin: 3rem;
  background: radial-gradient(
    circle at left bottom,
    ${({ theme }) => theme.background} 0%,
    ${({ theme }) => theme.background} 100%
  );
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  z-index: 1;

  &::after {
    content: '';
    position: absolute;
    width: 200vh;
    height: 200vh;
    background-image: conic-gradient(
      ${({ theme }) => theme.afterTrail},
      transparent,
      transparent,
      ${({ theme }) => theme.after}
    );
    animation: ${animate} 4s linear infinite;
    animation-delay: -2s;
  }

  &::before {
    content: '';
    position: absolute;
    width: 200vw;
    height: 200vh;
    background-image: conic-gradient(
      ${({ theme }) => theme.beforeTrail},
      transparent,
      transparent,
      ${({ theme }) => theme.before}
    );
    animation: ${animate} 4s linear infinite;
  }

  @media (max-width: 768px) {
    margin: 2rem;
  }
`;

export const Border = styled.span`
  position: absolute;
  inset: 3px;
  border-radius: 16px;
  background: ${({ theme }) => theme.background};
  z-index: 1;
`;

export const Grid = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(40px, 1fr));
  grid-template-rows: repeat(auto-fit, minmax(40px, 1fr));
  pointer-events: none;
  z-index: 1;
  color: ${({ theme }) => theme.text};
`;
export const GridItem = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.background};
  opacity: 0;
  transition: opacity 0.2s;
  color: ${({ theme }) => theme.text};
  z-index: 1;
`;
