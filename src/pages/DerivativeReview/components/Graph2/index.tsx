import React from 'react';

import opcao1 from '../../assets/opcao4.svg';
import opcao2 from '../../assets/opcao5.svg';
import opcao3 from '../../assets/opcao6.svg';

import grafico1 from '../../assets/grafico7.1.svg';
import grafico2 from '../../assets/grafico7.2.svg';
import grafico3 from '../../assets/grafico7.3.svg';

import GraphDefault from '../_GraphDefault';

const Graph2: React.FC = () => {
  return (
    <GraphDefault
      images={[grafico1, grafico2, grafico3]}
      options={[opcao1, opcao2, opcao3]}
    />
  );
};

export default Graph2;
