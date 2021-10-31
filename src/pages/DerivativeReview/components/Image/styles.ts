import { ImgHTMLAttributes } from 'react';
import styled from 'styled-components';

export interface ContainerProps extends ImgHTMLAttributes<HTMLImageElement> {
  maxWidth: number;
}

export const Container = styled.img<ContainerProps>`
  width: 100%;
  max-width: ${({ maxWidth }) => `${maxWidth}px`};
`;
