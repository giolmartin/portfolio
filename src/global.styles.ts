import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        font-family: 'Playfair Display', serif;
        background-color: ${({ theme }) => theme.background};
        color: ${({ theme }) => theme.text};
    }
`;


