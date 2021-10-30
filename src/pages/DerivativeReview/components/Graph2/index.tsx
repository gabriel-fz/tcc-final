import React, { useState } from 'react';

import opcao4 from '../../assets/opcao4.svg';
import opcao5 from '../../assets/opcao5.svg';
import opcao6 from '../../assets/opcao6.svg';

import grafico1 from '../../assets/grafico7.1.svg';
import grafico2 from '../../assets/grafico7.2.svg';
import grafico3 from '../../assets/grafico7.3.svg';

import { Container } from './styles';

type ImagesType = 'image1' | 'image2' | 'image3';

type ImagesData = {
  [key in ImagesType]: string;
};

type OptionsType = {
  key: ImagesType;
  image: string;
};

const Graph2: React.FC = () => {
  const [selected, setSelected] = useState<ImagesType>('image1');

  const imagesData: ImagesData = {
    image1: grafico1,
    image2: grafico2,
    image3: grafico3,
  };

  const options: OptionsType[] = [
    {
      key: 'image1',
      image: opcao4,
    },
    {
      key: 'image2',
      image: opcao5,
    },
    {
      key: 'image3',
      image: opcao6,
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

export default Graph2;
