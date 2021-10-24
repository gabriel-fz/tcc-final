import React from 'react';

import Img from '../../assets/dispositivos-bloqueados.svg';

import { Container } from './styles';

const Wall: React.FC = () => {
  return (
    <Container>
      <img src={Img} alt="dispositivos bloqueados" />

      <h1>Erro</h1>

      <p>
        Este site ainda não contém um layout compatível com o seu dispositivo,
        recomendamos que acesse novamente utilizando um dispositivo com uma
        resolução maior
      </p>
    </Container>
  );
};

export default Wall;
