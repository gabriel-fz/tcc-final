import React, { useState, useEffect } from 'react';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

import Button from '../../../../components/Button';

import { Modal as ModalProps } from '../../types/modal';

import { Container, Loading } from './styles';

const Default: React.FC<ModalProps> = ({
  closeModal,
  nextExercise,
  children,
}) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <Container>
      {isLoading ? (
        <Loading>
          <AiOutlineLoading3Quarters size={60} />

          <h2>Carregando...</h2>
        </Loading>
      ) : (
        <>
          {children}

          <div>
            <Button type="button" color="primary" onClick={() => closeModal()}>
              Ver resposta
            </Button>

            <Button
              type="button"
              color="primary"
              onClick={() => nextExercise()}
            >
              Próximo exercício
            </Button>
          </div>
        </>
      )}
    </Container>
  );
};

export default Default;
