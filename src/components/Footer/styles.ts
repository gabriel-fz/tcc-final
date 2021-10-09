import styled from 'styled-components';

export const Container = styled.footer`
  width: 100%;
  height: 80px;
  border-top: 1px solid ${({ theme }) => theme.colors.primary3};
  background: ${({ theme }) => theme.colors.primary3};

  div {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 100%;
    margin: 0 auto;
    padding: 0 20px;
    max-width: ${({ theme }) => theme.breakpoints.largeWidth};

    p {
      text-align: center;
      color: #fff;
    }
  }

  @media (max-width: ${({ theme }) =>
      theme.breakpoints.smallWidth}) and (max-height: ${({ theme }) =>
      theme.breakpoints.smallHeight}) {
    height: 60px;

    div {
      p {
        font-size: 12px;
      }
    }
  }
`;
