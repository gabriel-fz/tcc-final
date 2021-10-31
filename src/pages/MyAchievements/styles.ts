import styled from 'styled-components';

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 300px 100%;
  grid-template-areas:
    'card1 card2'
    'card3 card3';

  gap: 20px;

  width: 100%;
`;
