import styled, { css } from 'styled-components';

export const StyledTitle = styled.div`
  font-size: ${(props) => props.theme.fontSizes.l};
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;
`;

export const StyledStatus = styled.div<{ success: boolean }>`
  font-size: ${(props) => props.theme.fontSizes.s};
  color: ${(props) =>
    props.success
      ? props.theme.colors.success.contrast
      : props.theme.colors.error.contrast};
  background-color: ${(props) =>
    props.success ? props.theme.colors.success.base : props.theme.colors.error.base};
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;
  border-radius: ${(props) => props.theme.borderRadius.base};
  width: 100px;
  transition: width 0.2s ${(props) => props.theme.easings.wiggle};
  padding: calc(${(p) => p.theme.layout.vGap} / 2) calc(${(p) => p.theme.layout.hGap} / 1);
`;

export const StyledTime = styled.time``;

export const StyledErrorMessage = styled.div`
  font-size: ${(props) => props.theme.fontSizes.s};
  color: ${(props) => props.theme.colors.error.base};
  text-transform: uppercase;
  font-weight: 700;
`;

export const StyledHostname = styled.div``;

export const StyledCard = styled.div<{ selected: boolean }>`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: calc(${(props) => props.theme.layout.vGap} / 2);
  height: 250px;
  background-color: ${(props) => props.theme.colors.lighter.base};
  padding: ${(props) => [props.theme.layout.vGap, props.theme.layout.hGap].join(' ')};
  transition:
    width 0.2s ${(props) => props.theme.easings.wiggle},
    box-shadow 0.1s ${(props) => props.theme.easings.base},
    transform 0.1s ${(props) => props.theme.easings.base};
  /* border: 1px solid ${(props) => props.theme.colors.primary.base}; */
  border-radius: ${(props) => props.theme.borderRadius.base};
  box-shadow: ${(props) => props.theme.shadows.base};

  &:hover {
    box-shadow: ${(props) => props.theme.shadows.hover};
    ${StyledStatus} {
      /* transform: scale(1.05); */
      width: ${(p) => !p.selected && '100%'};
    }
  }

  ${(p) =>
    p.selected &&
    css`
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      width: 100%;
      margin: auto;
      min-height: 80vh;
      max-width: ${p.theme.layout.maxWidth};
    `}
`;
