import React from 'react';

import {
  Container,
  Content,
  Header,
  CardProps as CardPropsDefault,
} from './styles';

interface CardProps extends CardPropsDefault {
  title: string;
}

const Card: React.FC<CardProps> = ({ children, grid, title }) => {
  return (
    <Container grid={grid}>
      <Header>
        <strong>{title}</strong>
      </Header>

      <hr />

      <Content>{children}</Content>
    </Container>
  );
};

export default Card;
