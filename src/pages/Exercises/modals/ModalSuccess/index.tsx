import React from 'react';

import Img from '../../../../assets/estrelas.svg';

import Button from '../../../../components/Button';

import { Modal as ModalProps } from '../../types/modal';

import { Container } from './styles';

const ModalSuccess: React.FC<ModalProps> = ({ closeModal, nextExercise }) => {
  return (
    <Container>
      <img src={Img} alt="icone de estrelas" />

      <h1>Parabéns!</h1>

      <h3>Você acertou a questão e conquistou mais 10 pontos!</h3>

      <Button type="button" color="primary" onClick={() => closeModal()}>
        Ver resposta
      </Button>

      <Button type="button" color="primary" onClick={() => nextExercise()}>
        Próximo exercício
      </Button>
    </Container>
  );
};

export default ModalSuccess;
