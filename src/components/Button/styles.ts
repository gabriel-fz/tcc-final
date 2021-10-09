import { ButtonHTMLAttributes } from 'react';
import styled, { css } from 'styled-components';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color: 'play';
}

const colorVariations = {
  play: css`
    background: ${({ theme }) => theme.colors.playGradient};
  `,
};

export const Container = styled.button<ButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 60px;
  width: 100%;
  border-radius: 10px;
  font-weight: bold;
  font-size: 24px;
  color: #fff;
  border: none;

  ${({ color }) => colorVariations[color || 'play']}
`;
