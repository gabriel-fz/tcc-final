import React, { useEffect, useState } from 'react';
import functionPlot from 'function-plot';

import { Container, InputArea, Error } from './styles';

const DerivativeTest: React.FC = () => {
  const [curve, setCurve] = useState('x^2');
  const [derivative, setDerivative] = useState('2*x');
  const [error, setError] = useState(false);

  useEffect(() => {
    if (curve && derivative) {
      try {
        setError(state => state && false);

        functionPlot({
          target: '#graph',
          yAxis: { domain: [-10, 10] },
          grid: true,
          data: [
            {
              fn: curve,
              derivative: {
                fn: derivative,
                updateOnMouseMove: true,
              },
            },
          ],
        });
      } catch {
        setError(state => !state && true);
      }
    }
  }, [curve, derivative]);

  return (
    <Container>
      <h1>Teste gráfico</h1>

      <p>
        Insira a fórmula de uma curva e a fórmula de sua derivada para fazer o
        teste gráfico
      </p>

      <div id="graph" />

      <InputArea>
        <div>
          <label>Insira a fórmula da curva aqui</label>
          <input value={curve} onChange={e => setCurve(e.target.value)} />
        </div>

        <div>
          <label>Insira a derivada da curva aqui</label>
          <input
            value={derivative}
            onChange={e => setDerivative(e.target.value)}
          />
        </div>
      </InputArea>

      <Error isVisible={error}>
        As fórmulas da curva ou da derivada estão incorretas
      </Error>
    </Container>
  );
};

export default DerivativeTest;
