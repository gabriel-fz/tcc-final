import React from 'react';

import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

import { Container } from './styles';

const Default: React.FC = ({ children }) => {
  return (
    <Container>
      <Header />
      {children}
      <Footer />
    </Container>
  );
};

export default Default;
