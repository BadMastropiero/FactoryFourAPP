import styled, { createGlobalStyle } from 'styled-components';

export const StyledContent = styled.main`
  margin: auto;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: ${(props) => props.theme.layout.maxWidth};
  padding: ${(props) => [props.theme.layout.vGap, props.theme.layout.hGap].join(' ')};
`;

export const StyledGlobal = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    background-color: ${(props) => props.theme.colors.lighter.base};
    color: ${(props) => props.theme.colors.lighter.contrast};
  }
`;
