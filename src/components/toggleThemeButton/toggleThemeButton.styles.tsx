import styled from 'styled-components';

interface ThemeButtonProps {
  filled: boolean;
}
export const ButtonContainer = styled.div`
  position: fixed;
  bottom: 1rem;
  left: 1rem;
  width: 20rem;
  z-index: 10;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const ThemeButton = styled.button<ThemeButtonProps>`
  top: 1rem;
  right: 1rem;
  z-index: 10;
  background-color: ${({ theme, filled }) =>
    filled ? theme.background : 'transparent'};
  color: ${({ theme }) => theme.text};
  border: 2px solid ${({ theme }) => theme.text};
  border-radius: 4px;
  width: 6rem;
  height: 3rem;
  cursor: pointer;
  transition: background-color 0.5s ease-in-out;
  margin: 0 0.5rem;

  &:hover {
    background-color: ${({ theme }) => theme.text};
    color: ${({ theme }) => theme.background};
  }
`;
