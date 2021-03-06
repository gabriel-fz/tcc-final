import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const Content = styled.div`
  height: 100%;
  overflow-y: auto;
  padding: 30px 20px;

  > div {
    height: 100%;
    width: 100%;
    max-width: ${({ theme }) => theme.breakpoints.largeWidth};
    margin: 0 auto;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mediumWidth}) {
    padding: 30px 20px 30px 0;
  }
`;
