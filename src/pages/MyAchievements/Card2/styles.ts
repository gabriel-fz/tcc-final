import styled, { css } from 'styled-components';

interface DayProps {
  filled: boolean;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  height: 100%;
  width: 100%;

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    height: 100%;
  }
`;

export const Day = styled.div<DayProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 30px;
  border-radius: 50px;

  ${({ filled }) =>
    filled
      ? css`
          background: ${({ theme }) => theme.colors.primary3};
          color: #fff;
        `
      : css`
          background: ${({ theme }) => theme.colors.gray};
          color: #000;
        `};

  & + div {
    margin-left: 10px;
  }
`;
