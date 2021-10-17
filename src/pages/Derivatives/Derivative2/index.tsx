import React, { useEffect } from 'react';
import functionPlot from 'function-plot';

import Img1 from '../../../assets/derivada3.png';
import Img2 from '../../../assets/exemplo-derivada3.png';

import Card from '../../../components/Card';

import { Container, ContentCard } from './styles';

const Derivative2: React.FC = () => {
  useEffect(() => {
    functionPlot({
      target: '#graph',
      yAxis: { domain: [-5, 5] },
      grid: true,
      data: [
        {
          fn: 'sin(2 * x)',
          derivative: {
            fn: '2 * cos(2 * x)',
            updateOnMouseMove: true,
          },
        },
      ],
    });
  }, []);

  return (
    <Container>
      <Card grid="card1" title="Fórmula">
        <ContentCard>
          <img src={Img1} alt="formula de derivada" />
        </ContentCard>
      </Card>

      <Card grid="card2" title="Exemplo">
        <ContentCard>
          <img src={Img2} alt="exemplo de resolução de derivada" />
        </ContentCard>
      </Card>

      <Card grid="card3" title="Exemplo gráfico">
        <ContentCard>
          <div id="graph" />
        </ContentCard>
      </Card>
    </Container>
  );
};

export default Derivative2;
