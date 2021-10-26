import React, { useState } from 'react';

import opcao1 from '../../assets/opcao1.svg';
import opcao2 from '../../assets/opcao2.svg';
import opcao3 from '../../assets/opcao3.svg';

import grafico1 from '../../assets/grafico4.1.svg';
import grafico2 from '../../assets/grafico4.2.svg';
import grafico3 from '../../assets/grafico4.3.svg';

import { Container } from './styles';

type ImagesType = 'image1' | 'image2' | 'image3';

type ImagesData = {
  [key in ImagesType]: string;
};

type OptionsType = {
  key: ImagesType;
  image: string;
};

const Graph1: React.FC = () => {
  const [selected, setSelected] = useState<ImagesType>('image1');

  const imagesData: ImagesData = {
    image1: grafico1,
    image2: grafico2,
    image3: grafico3,
  };

  const options: OptionsType[] = [
    {
      key: 'image1',
      image: opcao1,
    },
    {
      key: 'image2',
      image: opcao2,
    },
    {
      key: 'image3',
      image: opcao3,
    },
  ];

  return (
    <Container>
      <img src={imagesData[selected]} alt="grafico" />

      <div>
        {options.map(option => (
          <button
            type="button"
            key={option.key}
            disabled={option.key === selected}
            onClick={() => setSelected(option.key)}
          >
            <img src={option.image} alt="opção" />
          </button>
        ))}
      </div>
    </Container>
  );
};

export default Graph1;
