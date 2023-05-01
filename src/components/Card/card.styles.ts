import styled from 'styled-components';

export const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  width: 90%;
  height: 80%;
  background-color: ${({ theme }) => theme.background};
  border-radius: 10px;
  cursor: pointer;
  overflow: hidden;
  gap: 8px;

  z-index: 1000;

  &:hover > .card::after {
    opacity: 1;
  }
`;

export const Card = styled.div`
  background-color: ${({ theme }) => theme.background};
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  height: 60%;
  flex-direction: column;
  position: relative;
  min-width: 350px;

  &:hover::before {
    opacity: 1;
  }

  &:before,
  &:after {
    border-radius: inherit;
    content: '';
    height: 100%;
    left: 0px;
    opacity: 0;
    position: absolute;
    top: 0px;
    transition: opacity 500ms;
    width: 100%;
  }

  &:before {
    background: radial-gradient(
      800px circle at var(--mouse-x) var(--mouse-y),
      ${({ theme }) => theme.card_outside_hover},
      transparent 40%
    );
    z-index: 1003;
  }

  &:after {
    background: radial-gradient(
      800px circle at var(--mouse-x) var(--mouse-y),
      ${({ theme }) => theme.card_center_hover},
      transparent 40%
    );
    z-index: 1001;
  }
`;

export const CardContent = styled.div`
  background-color: ${({ theme }) => theme.card_bg};
  border-radius: inherit;
  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;
  flex-grow: 1;
  inset: 1.5px;
  padding: 10px;
  position: absolute;
  z-index: 1002;
`;

export const Text = styled.h2`
  font-family: ${({ theme }) => theme.fonts.text};
  font-size: 1.2rem;
  font-weight: 200;
  color: white;
  text-align: center;
`;
