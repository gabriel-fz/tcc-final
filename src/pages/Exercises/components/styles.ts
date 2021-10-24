/* eslint-disable @typescript-eslint/no-explicit-any */
import styled, { css } from 'styled-components';

import Button from '../../../components/Button';

type ActionType = 'active' | 'correct' | 'incorrect';

interface ButtonAnswerProps {
  action?: ActionType;
}

interface ContainerProps {
  alignCenter?: boolean;
}

type ButtonAnswerVariationsType = {
  [key in ActionType]: any;
};

const ButtonAnswerVariations: ButtonAnswerVariationsType = {
  active: css`
    border: 2px solid ${({ theme }) => theme.colors.primary3};
    color: ${({ theme }) => theme.colors.primary3};
  `,
  correct: css`
    border: 2px solid ${({ theme }) => theme.colors.success};
    color: ${({ theme }) => theme.colors.success};
  `,
  incorrect: css`
    border: 2px solid ${({ theme }) => theme.colors.danger};
    color: ${({ theme }) => theme.colors.danger};
  `,
};

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 30px 0;

  ${({ alignCenter }) =>
    alignCenter &&
    css`
      justify-content: center;
    `};

  width: 100%;

  p {
    width: 100%;
    text-align: center;
  }

  hr {
    width: 100%;
    margin: 40px 0 30px;
  }

  > h2 {
    color: ${({ theme }) => theme.colors.primary3};
  }

  > img {
    margin-top: 20px;
    height: 100px;
  }
`;

export const Answers = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  margin-top: 30px;
`;

export const ButtonAnswer = styled.button<ButtonAnswerProps>`
  height: 40px;
  width: 150px;

  background: none;
  color: ${({ theme }) => theme.colors.primary4};
  border: 2px solid ${({ theme }) => theme.colors.primary4};
  border-radius: 5px;

  ${({ action }) => action && ButtonAnswerVariations[action]};
`;

export const ButtonConfirm = styled(Button)`
  max-width: 300px;
  margin-top: 50px;
`;
