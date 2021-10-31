import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: #fff;
  border-radius: 10px;
  padding: 20px;
  color: ${({ theme }) => theme.colors.gray1};

  p {
    margin-top: 20px;
  }

  > div {
    margin-top: 30px;
  }
`;

export const InputArea = styled.div`
  display: flex;
  align-items: center;

  div {
    display: flex;
    flex-direction: column;
    flex: 1;

    max-width: 300px;

    input {
      flex: 1;

      padding: 15px;
      border-radius: 5px;
      border: 2px solid ${({ theme }) => theme.colors.gray};
      margin-top: 5px;

      &:focus {
        outline: none !important;
        border: 2px solid ${({ theme }) => theme.colors.primary3};
      }
    }

    & + div {
      margin-left: 15px;
    }
  }
`;

export const Error = styled.strong<{ isVisible: boolean }>`
  margin-top: 30px;
  color: ${({ theme }) => theme.colors.danger};
  visibility: ${({ isVisible }) => (isVisible ? 'visible' : 'hidden')};
`;
