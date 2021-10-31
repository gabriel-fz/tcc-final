import React from 'react';

import Img5 from '../../assets/grafico5.svg';
import Img6 from '../../assets/grafico6.svg';

import Graph2 from '../../components/Graph2';
import Image from '../../components/Image';

import Container from '../../components/Container';

const AverageRate: React.FC = () => {
  return (
    <Container>
      <h1>Taxa Variacional</h1>

      <p>
        Dada uma função f: R🡪R, a fração da variação da função f em relação ao
        intervalo da variável independente ∆x representa a taxa de variação
        média r. Geometricamente r é tangente no vértice (x, f(x)) definido pelo
        triângulo retângulo com hipotenusa da secante que passa pelos pontos
        f(x) e f(x+Δx), como mostra a Figura 1.
      </p>

      <Image src={Img5} alt="gráfico" maxWidth={450} />
      <strong>Figura 1</strong>

      <p>
        Quando o intervalo ∆x vai diminuindo (∆x→0), essa relação fica mais
        precisa e convergindo à taxa de variação instantânea. Essa variação
        instantânea é conhecida como derivada de f(x) no ponto x, cuja
        interpretação geométrica é o coeficiente angular da reta tangente nesse
        ponto (x, f(x)), tal como ilustrada pela Figura 2.
      </p>

      <Image src={Img6} alt="gráfico" maxWidth={500} />
      <strong>Figura 2</strong>

      <p>
        No gráfico interativo a seguir podemos observar melhor a influência do
        valor de ∆x ao{' '}
        <b>clicar nos botões que representam as variações de ∆x.</b>
      </p>

      <Graph2 />
    </Container>
  );
};

export default AverageRate;
