/* eslint-disable @typescript-eslint/no-explicit-any */
import { ButtonHTMLAttributes } from 'react';
import styled, { css } from 'styled-components';

type ColorType = 'play' | 'primary';

type ColorVariationsType = {
  [key in ColorType]: any;
};
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color: ColorType;
}

const colorVariations: ColorVariationsType = {
  play: css`
    background: ${({ theme }) => theme.colors.playGradient};
  `,
  primary: css`
    background: ${({ theme }) => theme.colors.primary3};
  `,
};

export const Container = styled.button<ButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 50px;
  width: 100%;
  border-radius: 10px;
  font-weight: bold;
  font-size: 16px;
  color: #fff;
  border: none;

  ${({ color }) => colorVariations[color || 'play']}
`;
