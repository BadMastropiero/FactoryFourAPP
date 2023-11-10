import styled from 'styled-components';

export const StyledNavbar = styled.header`
  background-color: ${(props) => props.theme.colors.primary.base};
  color: ${(props) => props.theme.colors.primary.contrast};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledNavbarContent = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: ${(props) => props.theme.layout.maxWidth};
  width: 100%;
  padding: ${(props) => [props.theme.layout.vGap, props.theme.layout.hGap].join(' ')};
`;
