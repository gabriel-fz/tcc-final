import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  max-width: 300px;
  padding: 0 20px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  background: ${({ theme }) => theme.colors.primary3};
  border-radius: 10px;
  padding: 20px;

  h3 {
    color: #fff;
    text-align: center;
  }

  hr {
    color: #fff;
    margin: 10px 0 20px;
  }
`;

export const ButtonBack = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 50px;
  width: 100%;
  background: ${({ theme }) => theme.colors.primary3};
  border-radius: 10px;
  border: none;
  margin-top: 20px;
  color: #fff;

  span {
    font-weight: bold;
    margin-left: 10px;
  }
`;
