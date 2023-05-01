import styled from 'styled-components';

export const ButtonContainer = styled.div`
  position: fixed;
  bottom: 1rem;
  left: 1rem;
  width: 20rem;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ThemeButton = styled.button`
  top: 1rem;
  right: 1rem;
  z-index: 10;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  border: none;
  border-radius: 50%;
  width: 8rem;
  height: 3rem;
  cursor: pointer;
  transition: background-color 0.5s ease-in-out;
`;


