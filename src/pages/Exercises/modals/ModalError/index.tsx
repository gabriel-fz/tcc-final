import React from 'react';

import Img from '../../../../assets/ops.svg';

import { Modal as ModalProps } from '../../types/modal';

import Default from '../_Default';

const ModalError: React.FC<ModalProps> = ({ ...rest }) => {
  return (
    <Default {...rest}>
      <img src={Img} alt="icone de estrelas" />

      <h1>Não foi dessa vez!</h1>

      <p>
        A resposta que você selecionou estava incorreta, clique no botão{' '}
        <b>Ver Resposta</b> abaixo para conferir o que você errou.
      </p>
    </Default>
  );
};

export default ModalError;
