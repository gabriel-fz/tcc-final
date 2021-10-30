import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 100%;
  height: 500px;

  h1 {
    margin-top: 30px;
    color: ${({ theme }) => theme.colors.gray1};
  }

  p {
    font-size: 16px;
    margin: 20px 0;
    color: ${({ theme }) => theme.colors.gray2};

    b {
      color: ${({ theme }) => theme.colors.primary3};
    }
  }

  div {
    display: flex;
    align-items: center;

    width: 100%;

    button {
      flex: 1;
      margin-top: 15px;

      & + button {
        margin-left: 30px;
      }
    }
  }
`;

const animateLoading = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Loading = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  color: ${({ theme }) => theme.colors.primary3};

  svg {
    animation: ${animateLoading} 0.6s linear infinite;
  }

  h2 {
    margin-top: 30px;
  }
`;
