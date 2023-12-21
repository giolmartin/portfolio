import styled from 'styled-components';

export const StyledToggleButton = styled.button`
  width: 1.5rem;
  height: 1.5rem;
  background-color: ${({ isAnim, theme }) =>
    isAnim ? 'transparent' : theme.opaque_primary};
  border: 2px solid ${({ theme }) => theme.primary};
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  ${
    '' /* &:after {
    content: '';
    display: ${({ isAnim }) => (isAnim ? 'none' : 'block')};
    width: 1.5rem;
    height: 1.5rem;
    margin: 4px;
    background-color: ${({ theme }) => theme.primary};
    border-radius: 3px;
  }

  &:focus {
    outline: none;
  } */
  }
`;
