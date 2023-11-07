import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

const FadeIn = keyframes`
  0% {
    opacity: 0;
    transform:translateY(-100px) scale(0.5);
    
  }
  100% {
    opacity: 1;
    transform:translateY(0) scale(1); 
  }
`;

const Bounce = keyframes`
  0% {transform: scale(1.0);}
  20% {transform: scaleX(1.25) scaleY(0.75);}
  40% {transform: scaleX(0.75) scaleY(1.25);}
  60% {transform: scaleX(1.15) scaleY(0.85);}
  100% {transform: scale(1.0);}
`;

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
  margin-bottom: 3rem;
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
  .left-four {
    animation: ${FadeIn} 1s 1s forwards;
    transform-box: fill-box;
    transform-origin: center;
    opacity: 0;
  }
  .right-four {
    animation: ${FadeIn} 1s 1.5s forwards;

    transform-box: fill-box;
    transform-origin: center;
    opacity: 0;
  }

  .one,
  .two,
  .three,
  .four,
  .five {
    animation: ${Bounce} 2s infinite;
    transform-box: fill-box;
    transform-origin: center;
  }
  .two {
    animation-delay: 0.3s;
  }
  .three {
    animation-delay: 0.6s;
  }
  .four {
    animation-delay: 0.9s;
  }
  .five {
    animation-delay: 1.2s;
  }
`;
