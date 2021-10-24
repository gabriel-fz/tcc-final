import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: ${({ theme }) => theme.colors.primary1};
  z-index: 10;
  padding: 0 20px;
  color: #fff;

  h1 {
    margin-top: 30px;
  }

  p {
    margin-top: 20px;
    text-align: center;
  }

  @media (min-width: 1000px) {
    display: none;
  }
`;
