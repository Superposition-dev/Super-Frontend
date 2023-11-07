import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

const SkeletonAni = keyframes`
  0% {
    background-position: -200px 0;
  }
  50%,
  100% {
    background-position: calc(200px + 100%) 0;
  }
`;

export const SkeletonItem = styled.div<{ size: string }>`
  width: calc(20% - 1.6rem);
  height: ${(props) => (props.size === 'shorts' ? '18rem' : props.size === 'middle' ? '24rem' : '30rem')};
  background-color: rgba(255, 255, 255, 0.1);
  background-image: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.1),
    rgba(255, 255, 255, 0.3),
    rgba(255, 255, 255, 0.1)
  );
  background-size: 200px 100%;
  background-repeat: no-repeat;
  border-radius: 0.5rem;
  animation: ${SkeletonAni} 1.2s ease-in-out infinite;
  @media (max-width: 428px) {
    width: calc(50% - 1.6rem);
  }
`;
