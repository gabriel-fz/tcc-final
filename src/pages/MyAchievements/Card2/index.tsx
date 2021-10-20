import React from 'react';

import { Container, Day } from './styles';

const Card2: React.FC = () => {
  return (
    <Container>
      <div>
        <Day filled>
          <strong>S</strong>
        </Day>
        <Day filled>
          <strong>T</strong>
        </Day>
        <Day filled>
          <strong>Q</strong>
        </Day>
        <Day filled>
          <strong>Q</strong>
        </Day>
        <Day filled={false}>
          <strong>S</strong>
        </Day>
        <Day filled={false}>
          <strong>S</strong>
        </Day>
        <Day filled={false}>
          <strong>D</strong>
        </Day>
      </div>

      <p>Veja quais dias da semana você acessou o sistema</p>
    </Container>
  );
};

export default Card2;
