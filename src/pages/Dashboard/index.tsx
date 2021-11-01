import React from 'react';

import Icon1 from '../../assets/icone-revisao.svg';
import Icon2 from '../../assets/icone-exercicios.svg';
import Icon3 from '../../assets/icone-conquistas.svg';
import Icon4 from '../../assets/icone-tabela-derivadas.svg';

import { Container, Content, ButtonLink } from './styles';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <Content>
        <ButtonLink color="play" to="/revisao-de-derivadas">
          <img src={Icon1} alt="icone revisão de derivadas" />
          <strong>Revisão de derivadas</strong>
        </ButtonLink>

        <ButtonLink color="play" to="/exercicios">
          <img src={Icon2} alt="icone exercícios" />

          <strong>Exercícios</strong>
        </ButtonLink>

        <ButtonLink color="play" to="/minhas-conquistas">
          <img src={Icon3} alt="icone minhas conquistas" />

          <strong>Minhas conquistas</strong>
        </ButtonLink>

        <ButtonLink color="play" to="/tabela-de-derivadas">
          <img src={Icon4} alt="icone tabela de derivadas" />

          <strong>Tabela de derivadas</strong>
        </ButtonLink>
      </Content>
    </Container>
  );
};

export default Dashboard;
