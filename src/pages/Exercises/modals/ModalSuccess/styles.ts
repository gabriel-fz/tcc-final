import styled, { keyframes } from 'styled-components';

const animateLevel = keyframes`
  from {
    width: 60%;
  }
  to {
    width: 80%;
  }
`;

export const Level = styled.div`
  display: flex;
  align-items: center;

  width: 80%;
  margin: 20px 0;

  > div {
    display: flex;
    justify-content: space-between;

    width: 100%;
    height: 30px;
    background: ${({ theme }) => theme.colors.gray};
    margin-right: 15px;
    border-radius: 50px;

    > div {
      display: flex;
      align-items: center;

      height: 100%;
      width: 80%;
      background-color: ${({ theme }) => theme.colors.primary3};
      border-radius: 50px;
      animation: ${animateLevel} 1s linear normal;

      div {
        display: flex;
        justify-content: center;
        align-items: center;

        position: absolute;
        height: 55px;
        width: 55px;
        border-radius: 100%;
        background: #fff;
        border: 5px solid ${({ theme }) => theme.colors.primary3};

        > strong {
          color: ${({ theme }) => theme.colors.primary3};
        }
      }

      > strong {
        color: #fff;
        margin: 0 10px 0 auto;
      }
    }
  }

  > strong {
    width: min-content;
    color: ${({ theme }) => theme.colors.gray};
  }
`;
