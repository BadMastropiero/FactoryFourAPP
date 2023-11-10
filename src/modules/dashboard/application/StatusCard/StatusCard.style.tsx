import styled, { css } from 'styled-components';

export const StyledHistoryList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.layout.vGap};
  list-style: none;
  width: 100%;
  padding: ${(p) => p.theme.layout.vGap} ${(p) => p.theme.layout.hGap};
  max-width: calc(${(p) => p.theme.layout.maxWidth} / 2);
`;

export const StyledHistoryItem = styled.li`
  display: flex;
  align-items: center;
  gap: ${(props) => props.theme.layout.hGap};
  width: 100%;
`;

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

  p {
    text-align: center;
  }
`;

export const StyledHostname = styled.div``;

export const StyledCard = styled.div<{ selected: boolean }>`
  user-select: none;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: calc(${(props) => props.theme.layout.vGap} / 2);
  height: 250px;
  width: 100%;
  max-width: 300px;
  background-color: ${(props) => props.theme.colors.lighter.base};
  padding: ${(props) => [props.theme.layout.vGap, props.theme.layout.hGap].join(' ')};
  transition:
    max-width 0.2s ${(props) => props.theme.easings.base},
    height 0.2s ${(props) => props.theme.easings.base},
    box-shadow 0.1s ${(props) => props.theme.easings.base},
    transform 0.1s ${(props) => props.theme.easings.base};
  border-radius: ${(props) => props.theme.borderRadius.base};
  box-shadow: ${(props) => props.theme.shadows.base};
  /* transition: all 1s ease; */
  &:hover {
    box-shadow: ${(props) => props.theme.shadows.hover};
    ${StyledStatus} {
      width: ${(p) => !p.selected && '100%'};
    }
  }

  ${(p) =>
    p.selected &&
    css`
      position: fixed;
      width: fit-content;
      min-width: 300px;
      margin: auto;
      min-height: 60vh;
      max-height: 80vh;
      overflow-y: scroll;
      height: 100%;
      max-width: ${p.theme.layout.maxWidth};
      top: 50%; /* Center vertically */
      left: 50%; /* Center horizontally */
      transform: translate(-50%, -50%);
      z-index: 10000;
    `}
`;
