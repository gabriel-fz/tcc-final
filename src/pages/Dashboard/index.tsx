import React from 'react';

import { Container, Content, ButtonLink } from './styles';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <Content>
        <ButtonLink color="play" to="/revisao-de-derivadas">
          Revisão de derivadas
        </ButtonLink>

        <ButtonLink color="play" to="/exercicios">
          Exercícios
        </ButtonLink>

        <ButtonLink color="play" to="/minhas-conquistas">
          Minhas conquistas
        </ButtonLink>

        <ButtonLink color="play" to="/tabela-de-derivadas">
          Tabela de derivadas
        </ButtonLink>
      </Content>
    </Container>
  );
};

export default Dashboard;
