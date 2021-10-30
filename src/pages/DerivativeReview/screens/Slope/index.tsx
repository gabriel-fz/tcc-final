import React from 'react';

import Img1 from '../../assets/grafico1.svg';
import Img2 from '../../assets/grafico2.svg';
import Img3 from '../../assets/grafico3.svg';

import Graph1 from '../../components/Graph1';

import Container from '../../components/Container';

const Slope: React.FC = () => {
  return (
    <Container>
      <h1>Coeficiente angular</h1>

      <p>
        O coeficiente angular de uma reta descreve o grau de inclinação da reta
        em relação aos seus eixos de dimensão, neste caso eixo x e eixo y. No
        plano, dois pontos distintos P1=(X1, Y1) e P2 = (X2, Y2) da reta L
        definem um único coeficiente m, como a variação da reta em relação aos
        pontos de seu domínio. A Figura 1 a seguir ilustra essa variação.
      </p>

      <img src={Img1} alt="gráfico" />
      <strong>Figura 1</strong>

      <p>
        A diferença vetorial desses dois pontos, dP = P1 – P2, contêm os
        elementos desse coeficiente angular. Se P1 = (X1, Y1) e P2 = (X2, Y2),
        então dP = (X1-X2, Y1-Y2). Portanto, o coeficiente angular dessa reta é
        dado por a = (Y1-Y2)/(X1-X2), tal como ilustra a Figura 2 abaixo,
        equivalente à tang(m) para o ângulo a no vértice P2 do triângulo
        retângulo com hipotenusa segmento de reta P1P2 .
      </p>

      <img src={Img2} alt="gráfico" />
      <strong>Figura 2</strong>

      <p>
        Uma reta L pode ser definida por um ponto P por onde passa e um
        coeficiente angular m da forma: L: (P, m), como ilustra a Figura 3.
      </p>

      <img src={Img3} alt="gráfico" />
      <strong>Figura 3</strong>

      <p>
        Se m for variável, seriam geradas infinitas retas passando pelo ponto P,
        tal como mostra o gráfico interativo abaixo.{' '}
        <b>
          Ao clicar nos botões que representam a variação do coeficiente angular
        </b>{' '}
        podemos observar o seu comportamento e sua ligação com a inclinação de
        uma reta, de modo que quanto maior for o coeficiente angular, maior será
        a inclinação de uma reta.
      </p>

      <Graph1 />
    </Container>
  );
};

export default Slope;
