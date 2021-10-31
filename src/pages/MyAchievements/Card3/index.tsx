import React from 'react';

import ImgEmblem2 from '../../../assets/emblema2.svg';
import ImgEmblem3 from '../../../assets/emblema3.svg';
import ImgEmblem4 from '../../../assets/emblema4.svg';

import { Container, Emblem, TooltipEmblem } from './styles';

type EmblemType = {
  key: number;
  isActive: boolean;
  title: string;
  description: string;
  image: string;
};

const Card3: React.FC = () => {
  const emblems: EmblemType[] = [
    {
      key: 1,
      title: 'Mestre em derivadas',
      description: 'Parabés por concluir a revisão de derivadas!',
      isActive: true,
      image: ImgEmblem2,
    },
    {
      key: 2,
      title: 'Mandou bem!',
      description: 'Parabés por acertar 3 exercícios seguidos!',
      isActive: true,
      image: ImgEmblem4,
    },
    {
      key: 3,
      title: 'Mandou bem!',
      description: 'Parabés por acertar 5 exercícios seguidos!',
      isActive: true,
      image: ImgEmblem3,
    },
    {
      key: 5,
      title: 'Mandou muito bem!',
      description: 'Parabés por acertar 10 exercícios seguidos!',
      isActive: true,
      image: ImgEmblem2,
    },
    //----
    {
      key: 6,
      title: 'Mestre em derivadas',
      description: 'Conclua a revisão de derivadas para conseguir esse emblema',
      isActive: false,
      image: ImgEmblem2,
    },
    {
      key: 7,
      title: 'Mandou bem!',
      description: 'Acerte 3 exercícios seguidos para conseguir esse emblema',
      isActive: false,
      image: ImgEmblem4,
    },
    {
      key: 8,
      title: 'Mandou bem!',
      description: 'Acerte 5 exercícios seguidos para conseguir esse emblema',
      isActive: false,
      image: ImgEmblem3,
    },
    {
      key: 9,
      title: 'Mandou muito bem!',
      description: 'Acerte 10 exercícios seguidos para conseguir esse emblema',
      isActive: false,
      image: ImgEmblem2,
    },
  ];

  return (
    <Container>
      <div>
        {emblems.map(emblem => (
          <Emblem isActive={emblem.isActive} key={emblem.key}>
            <img src={emblem.image} alt="emblema" />

            <TooltipEmblem>
              <strong>{emblem.title}</strong>
              <span>{emblem.description}</span>
            </TooltipEmblem>
          </Emblem>
        ))}
      </div>

      <p>
        Desenvolva suas habilidades com derivadas e seja recompensado com
        emblemas
      </p>
    </Container>
  );
};

export default Card3;
