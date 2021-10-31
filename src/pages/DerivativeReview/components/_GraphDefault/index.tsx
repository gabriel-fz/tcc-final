import React, { useState } from 'react';

import Image from '../Image';

import { Container } from './styles';

type ImagesType = 'image1' | 'image2' | 'image3';

type ImagesData = {
  [key in ImagesType]: string;
};

type OptionsType = {
  key: ImagesType;
  image: string;
};

interface GraphDefaultProps {
  images: [string, string, string];
  options: [string, string, string];
}

const GraphDefault: React.FC<GraphDefaultProps> = ({ images, options }) => {
  const [selected, setSelected] = useState<ImagesType>('image1');

  const imagesData: ImagesData = {
    image1: images[0],
    image2: images[1],
    image3: images[2],
  };

  const optionsData: OptionsType[] = [
    {
      key: 'image1',
      image: options[0],
    },
    {
      key: 'image2',
      image: options[1],
    },
    {
      key: 'image3',
      image: options[2],
    },
  ];

  return (
    <Container>
      <Image src={imagesData[selected]} alt="grafico" maxWidth={400} />

      <div>
        {optionsData.map(option => (
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

export default GraphDefault;
