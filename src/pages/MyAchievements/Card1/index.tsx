import React from 'react';

import { Container, Level } from './styles';

const Card1: React.FC = () => {
  return (
    <Container>
      <Level>
        <div>
          <div>
            <div>
              <strong>10</strong>
            </div>
          </div>
        </div>
        <strong>90/100</strong>
      </Level>

      <p>
        Junte a quantidade de pontos necessária para avançar para o próximo
        nível
      </p>
    </Container>
  );
};

export default Card1;
