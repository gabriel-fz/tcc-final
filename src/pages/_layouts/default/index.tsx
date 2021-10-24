import React from 'react';

import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import Wall from '../../../components/Wall';

import { Container, Content } from './styles';

const Default: React.FC = ({ children }) => {
  return (
    <Container>
      <Header />

      <Content>{children}</Content>

      <Wall />

      <Footer />
    </Container>
  );
};

export default Default;
