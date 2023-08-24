import styled from 'styled-components';

export const SVGSC = styled.svg`
  text-align: center;
  min-height: ${props => props.height}px;
  min-width: ${props => props.width}px;
  height: ${props => props.height}px;
  width: ${props => props.width}px;
`;