import React from 'react';

import { Container } from './styles';

const Footer: React.FC = () => {
  return (
    <Container>
      <div>
        <p>
          Ambiente gamificado desenvolvido por <b>Gabriel Fiorese Zancanela</b>{' '}
          como parte do TCC para a{' '}
          <b>Universidade Estadual do Norte Fluminense</b>
        </p>
      </div>
    </Container>
  );
};

export default Footer;
