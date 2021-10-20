import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  height: 100%;
  width: 100%;

  p {
    text-align: center;
  }
`;

export const Level = styled.div`
  display: flex;
  align-items: center;

  height: 100%;
  width: 100%;

  > div {
    width: 100%;
    height: 30px;
    background: ${({ theme }) => theme.colors.gray};
    margin-right: 15px;
    border-radius: 50px;

    > div {
      display: flex;
      align-items: center;

      height: 100%;
      width: 90%;
      background-color: ${({ theme }) => theme.colors.primary3};
      border-radius: 50px;

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

        strong {
          color: ${({ theme }) => theme.colors.primary3};
        }
      }
    }
  }

  > strong {
    color: ${({ theme }) => theme.colors.gray};
  }
`;
