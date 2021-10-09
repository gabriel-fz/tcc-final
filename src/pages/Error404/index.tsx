import React from 'react';

import imgError from '../../assets/404.svg';
import ButtonLink from '../../components/ButtonLink';

import { Container } from './styles';

const Error404: React.FC = () => {
  return (
    <Container>
      <img src={imgError} alt="imagem de erro" />

      <h1>Página não encontrada</h1>

      <ButtonLink to="/" color="play">
        Voltar para o início
      </ButtonLink>
    </Container>
  );
};

export default Error404;
