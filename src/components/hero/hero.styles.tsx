import styled, { keyframes } from 'styled-components';

export const Background = styled.div<{ gradient: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #0c1022;
  z-index: -1;
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
  width: 300px;
  height: 400px;
  background: rgba(0, 0, 0, 0.75);
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  z-index: 1;

  &::after {
    content: '';
    position: absolute;
    width: 500px;
    height: 500px;
    background-image: conic-gradient(
      transparent,
      transparent,
      transparent,
      #d400d4
    );
    animation: ${animate} 4s linear infinite;
    animation-delay: -1s;
  }

  &::before {
    content: '';
    position: absolute;
    width: 500px;
    height: 500px;
    background-image: conic-gradient(
      transparent,
      transparent,
      transparent,
      #00ccff
    );
    animation: ${animate} 4s linear infinite;
  }
`;

export const Border = styled.span`
  position: absolute;
  inset: 5px;
  border-radius: 16px;
  background: #0c1022;
  z-index: 1;
`;
