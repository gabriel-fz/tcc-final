import styled, { keyframes } from 'styled-components';

const animateImage = keyframes`
  from {
    opacity: 0;
    transform: translateY(-50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);

  }
`;

export const Image = styled.img`
  animation: ${animateImage} 1s linear normal;
`;
