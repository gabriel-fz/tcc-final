import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    max-width: 260px;
  }

  h1 {
    font-weight: bold;
    font-size: 48px;
    color: #fff;
    margin-top: 30px;
    text-align: center;
  }

  a {
    max-width: 300px;
    margin-top: 30px;
  }
`;
