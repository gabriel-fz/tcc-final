import React from 'react';

import { Container, Content } from './styles';

interface ModalProps {
  maxWidth: number;
}

const Modal: React.FC<ModalProps> = ({ maxWidth, children }) => {
  return (
    <Container>
      <Content maxWidth={maxWidth}>{children}</Content>
    </Container>
  );
};

export default Modal;
