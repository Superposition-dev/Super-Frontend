import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

const Stroke = keyframes`
  0% {
    stroke-dashoffset: 1000;
  }
  50% {
    stroke-dashoffset: 0;
  }
  100% {
    stroke-dashoffset: -1000;
  }
`;

export const Svg = styled.div`
  .ring {
    animation: ${Stroke} 2s ease-in infinite;
    transform-box: fill-box;
    transform-origin: center;
    stroke-dasharray: 1000;
    stroke-dashoffset: 0;
    fill: none;
    stroke: rgba(255, 255, 255, 0.4);
    stroke-width: 1;
  }
`;
