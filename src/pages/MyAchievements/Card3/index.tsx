import React from 'react';

import ImgEmblem from '../../../assets/emblema.svg';

import { Container, Emblem, TooltipEmblem } from './styles';

type EmblemType = {
  key: number;
  isActive: boolean;
  title: string;
  description: string;
};

const Card3: React.FC = () => {
  const emblems: EmblemType[] = [
    {
      key: 1,
      title: 'Mestre em derivadas',
      description: 'Parabés por concluir a revisão de derivadas!',
      isActive: true,
    },
    {
      key: 2,
      title: 'Mestre em derivadas',
      description: 'Parabés por concluir a revisão de derivadas!',
      isActive: true,
    },
    {
      key: 3,
      title: 'Mestre em derivadas',
      description: 'Parabés por concluir a revisão de derivadas!',
      isActive: true,
    },
    {
      key: 5,
      title: 'Mestre em derivadas',
      description: 'Parabés por concluir a revisão de derivadas!',
      isActive: true,
    },
    {
      key: 6,
      title: 'Mestre em derivadas',
      description: 'Conclua a revissão de derivadas para ganhar esse emblema',
      isActive: false,
    },
    {
      key: 7,
      title: 'Mestre em derivadas',
      description: 'Conclua a revissão de derivadas para ganhar esse emblema',
      isActive: false,
    },
    {
      key: 8,
      title: 'Mestre em derivadas',
      description: 'Conclua a revissão de derivadas para ganhar esse emblema',
      isActive: false,
    },
    {
      key: 9,
      title: 'Mestre em derivadas',
      description: 'Conclua a revissão de derivadas para ganhar esse emblema',
      isActive: false,
    },
  ];

  return (
    <Container>
      <div>
        {emblems.map(emblem => (
          <Emblem isActive={emblem.isActive} key={emblem.key}>
            <img src={ImgEmblem} alt="emblema" />

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
