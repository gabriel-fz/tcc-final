import styled, { css } from 'styled-components';

export interface CardProps {
  grid?: string;
}

export const Container = styled.div<CardProps>`
  display: flex;
  flex-direction: column;

  background: #fff;
  border-radius: 10px;

  ${({ grid }) =>
    grid &&
    css`
      grid-area: ${grid};
    `}
`;

export const Header = styled.div`
  padding: 20px 20px 10px;

  strong {
    color: #000;
  }
`;

export const Content = styled.div`
  height: 100%;
  padding: 10px 20px 20px;
`;
