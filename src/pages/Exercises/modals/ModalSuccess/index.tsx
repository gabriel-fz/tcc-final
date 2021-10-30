import React from 'react';

import Img from '../../../../assets/estrelas.svg';

import { Modal as ModalProps } from '../../types/modal';

import Default from '../_Default';
import { Level } from './styles';

const ModalSuccess: React.FC<ModalProps> = ({ ...rest }) => {
  return (
    <Default {...rest}>
      <img src={Img} alt="icone de estrelas" />

      <h1>Parabéns!</h1>

      <Level>
        <div>
          <div>
            <div>
              <strong>3</strong>
            </div>

            <strong>+10</strong>
          </div>
        </div>
        <strong>70/100</strong>
      </Level>

      <p>
        Você acertou a questão e conquistou mais <b>10 pontos!</b>
      </p>
    </Default>
  );
};

export default ModalSuccess;
