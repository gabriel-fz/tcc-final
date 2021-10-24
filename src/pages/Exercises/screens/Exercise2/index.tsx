/* eslint-disable no-nested-ternary */
import React, { useState } from 'react';

import ImgAnswer from '../../../../assets/resposta-exe2.svg';

import Modal from '../../../../components/Modal';

import ModalSuccess from '../../modals/ModalSuccess';
import ModalError from '../../modals/ModalError';

import { Exercise as ExerciseProps } from '../../types/exercise';
import {
  Container,
  Answers,
  ButtonAnswer,
  ButtonConfirm,
} from '../../components/styles';

type OptionsType = {
  id: number;
  answer: string;
  action?: 'active' | 'correct' | 'incorrect';
  isCorrect: boolean;
};

type ModalType = 'success' | 'error';

type ModalComponentsType = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key in ModalType]: any;
};

const Exercise2: React.FC<ExerciseProps> = ({ nextExercise }) => {
  const [showAnswer, setShowAnswer] = useState(false);
  const [showModal, setShowModal] = useState<ModalType>();
  const [showBtnConfirm, setShowBtnConfirm] = useState(false);
  const [options, setOptions] = useState<OptionsType[]>([
    {
      id: 1,
      answer: 'a(t) = 18t - 10',
      isCorrect: true,
    },
    {
      id: 2,
      answer: 'a(t) = 18t - 10t',
      isCorrect: false,
    },
    {
      id: 3,
      answer: 'a(t) = 18t² - 10',
      isCorrect: false,
    },
    {
      id: 4,
      answer: 'a(t) = 18t - 10 + 1',
      isCorrect: false,
    },
  ]);

  const modals: ModalComponentsType = {
    success: (
      <ModalSuccess
        closeModal={() => setShowModal(undefined)}
        nextExercise={() => nextExercise()}
      />
    ),
    error: (
      <ModalError
        closeModal={() => setShowModal(undefined)}
        nextExercise={() => nextExercise()}
      />
    ),
  };

  function handleSelectAnswer(id: number): void {
    setOptions(state =>
      state.map(option => ({
        ...option,
        action: option.id === id ? 'active' : undefined,
      })),
    );

    setShowBtnConfirm(true);
  }

  function handleConfirm(): void {
    setOptions(state =>
      state.map(option => ({
        ...option,
        action: option.isCorrect
          ? 'correct'
          : option.action === 'active'
          ? 'incorrect'
          : undefined,
      })),
    );

    setShowAnswer(true);

    const answer = options.find(option => option.isCorrect);

    if (answer) {
      setShowModal(
        answer.isCorrect && answer.action === 'active' ? 'success' : 'error',
      );
    }
  }

  return (
    <Container>
      <p>
        Dada a equação de velocidade de uma partícula v(t) = 9t² - 10t + 1, qual
        seria a equação de aceleração dessa mesma partícula?
      </p>

      <Answers>
        {options.map(option => (
          <ButtonAnswer
            key={option.id}
            type="button"
            action={option.action}
            onClick={() => handleSelectAnswer(option.id)}
            disabled={showAnswer}
          >
            {option.answer}
          </ButtonAnswer>
        ))}
      </Answers>

      {!showAnswer && showBtnConfirm && (
        <ButtonConfirm
          type="button"
          color="primary"
          onClick={() => handleConfirm()}
        >
          Confirmar
        </ButtonConfirm>
      )}

      {showAnswer && (
        <>
          <hr />

          <h2>Resposta:</h2>

          <img src={ImgAnswer} alt="resposta da questão" />
        </>
      )}

      {showModal && <Modal maxWidth={600}>{modals[showModal]}</Modal>}
    </Container>
  );
};

export default Exercise2;
