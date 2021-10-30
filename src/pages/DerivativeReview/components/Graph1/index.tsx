import React from 'react';

import opcao1 from '../../assets/opcao1.svg';
import opcao2 from '../../assets/opcao2.svg';
import opcao3 from '../../assets/opcao3.svg';

import grafico1 from '../../assets/grafico4.1.svg';
import grafico2 from '../../assets/grafico4.2.svg';
import grafico3 from '../../assets/grafico4.3.svg';

import GraphDefault from '../_GraphDefault';

const Graph1: React.FC = () => {
  return (
    <GraphDefault
      images={[grafico1, grafico2, grafico3]}
      options={[opcao1, opcao2, opcao3]}
    />
  );
};

export default Graph1;
