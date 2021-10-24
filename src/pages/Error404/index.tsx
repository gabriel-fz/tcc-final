import React from 'react';

import imgError from '../../assets/404.svg';

import ButtonLink from '../../components/ButtonLink';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import { Container, Content } from './styles';

const Error404: React.FC = () => {
  return (
    <Container>
      <Header />

      <Content>
        <img src={imgError} alt="imagem de erro" />

        <h1>Página não encontrada</h1>

        <ButtonLink to="/" color="play">
          Voltar para o início
        </ButtonLink>
      </Content>

      <Footer />
    </Container>
  );
};

export default Error404;
