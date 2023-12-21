import styled from 'styled-components';
import { FadeInAnimation } from '../../global.styles';

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: 1px solid ${({ theme }) => theme.primary};
  background-color: ${({ isActive, theme }) =>
    isActive ? theme.text : theme.background};
  color: ${({ theme }) => theme.text};
  padding: 0.4rem;
  animation: ${({ isActive }) => (isActive ? FadeInAnimation : 'none')} 2s
    ease-in-out;

  &:focus {
    outline: none;
  }
`;
