import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 300px auto;
  grid-template-areas:
    'card1 card2'
    'card3 card3';

  gap: 10px;
`;

export const ContentCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100%;
  width: 100%;

  img {
    width: 100%;
  }
`;
