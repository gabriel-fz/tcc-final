import styled from 'styled-components';

export const Container = styled.header`
  background: ${({ theme }) => theme.colors.primary3};
  width: 100%;
  height: 80px;

  div {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 100%;
    max-width: ${({ theme }) => theme.breakpoints.largeWidth};
    margin: 0 auto;
    padding: 0 20px;
  }

  @media (max-width: ${({ theme }) =>
      theme.breakpoints.smallWidth}) and (max-height: ${({ theme }) =>
      theme.breakpoints.smallHeight}) {
    height: 60px;

    div {
      a {
        img {
          height: 30px;
        }
      }
    }
  }
`;
