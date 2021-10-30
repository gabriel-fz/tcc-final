import React, { useEffect } from 'react';
import functionPlot from 'function-plot';

import Card from '../../../components/Card';

import { Container, ContentCard } from './styles';

interface DefaultDerivativesProps {
  formulaImage: string;
  exampleImage: string;
  formulaCurve: string;
  formulaDerivative: string;
  domain: [number, number];
}

const DefaultDerivatives: React.FC<DefaultDerivativesProps> = ({
  exampleImage,
  formulaImage,
  formulaCurve,
  formulaDerivative,
  domain,
}) => {
  useEffect(() => {
    functionPlot({
      target: '#graph',
      yAxis: { domain },
      grid: true,
      data: [
        {
          fn: formulaCurve,
          derivative: {
            fn: formulaDerivative,
            updateOnMouseMove: true,
          },
        },
      ],
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <Card grid="card1" title="Fórmula">
        <ContentCard>
          <img src={formulaImage} alt="formula de derivada" />
        </ContentCard>
      </Card>

      <Card grid="card2" title="Exemplo">
        <ContentCard>
          <img src={exampleImage} alt="exemplo de resolução de derivada" />
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

export default DefaultDerivatives;
