import styled from 'styled-components';

export const Button = styled.button`
  position: fixed;
  top: 1rem;
  right: 1rem;
  z-index: 10;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  border: none;
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  cursor: pointer;
  transition: background-color 0.5s ease-in-out;
`;
