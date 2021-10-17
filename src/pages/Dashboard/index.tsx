import React from 'react';

import { Container, Content, ButtonLink } from './styles';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <Content>
        <ButtonLink color="play" to="/instrucoes">
          Revisão de derivadas
        </ButtonLink>

        <ButtonLink color="play" to="/instrucoes">
          Exercícios
        </ButtonLink>

        <ButtonLink color="play" to="/instrucoes">
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