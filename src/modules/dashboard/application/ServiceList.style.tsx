import styled from 'styled-components';

export const StyledServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  column-gap: ${(props) => props.theme.layout.hGap};
  row-gap: ${(props) => props.theme.layout.vGap};
  width: 100%;
`;
