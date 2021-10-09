import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;

  > div {
    height: 100%;
    width: 100%;
    max-width: ${({ theme }) => theme.breakpoints.largeWidth};
    margin: 0 auto;
    padding: 0 20px;
    overflow-y: hidden;
  }
`;
