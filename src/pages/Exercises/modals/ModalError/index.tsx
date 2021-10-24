import React from 'react';

import Img from '../../../../assets/ops.svg';

import Button from '../../../../components/Button';

import { Modal as ModalProps } from '../../types/modal';

import { Container } from './styles';

const ModalError: React.FC<ModalProps> = ({ closeModal, nextExercise }) => {
  return (
    <Container>
      <img src={Img} alt="icone de estrelas" />

      <h1>Não foi dessa vez!</h1>

      <h3>
        A resposta que você selecionou estava incorreta, clique no botão Ver
        Resposta abaixo para conferir o que você errou.
      </h3>

      <Button type="button" color="primary" onClick={() => closeModal()}>
        Ver resposta
      </Button>

      <Button type="button" color="primary" onClick={() => nextExercise()}>
        Próximo exercício
      </Button>
    </Container>
  );
};

export default ModalError;
