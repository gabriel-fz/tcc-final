/* eslint-disable @typescript-eslint/no-explicit-any */
import styled, { css } from 'styled-components';
import { Link, LinkProps } from 'react-router-dom';

type ColorType = 'primary' | 'play';

type ColorVariationsType = {
  [key in ColorType]: any;
};

export interface ButtonLinkProps extends LinkProps {
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

export const Container = styled(Link)<ButtonLinkProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 60px;
  width: 100%;
  border-radius: 10px;
  font-weight: bold;
  font-size: 24px;
  color: #fff;
  text-decoration: none;

  ${({ color }) => colorVariations[color || 'play']}
`;
