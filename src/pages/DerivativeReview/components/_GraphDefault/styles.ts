import styled from 'styled-components';

export const Container = styled.div`
  padding: 40px 0;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-top: 20px;

    button {
      background: transparent;
      border: 1px solid #000;
      border-radius: 5px;
      padding: 5px;

      &:disabled {
        background: ${({ theme }) => theme.colors.success};
      }
    }
  }
`;
