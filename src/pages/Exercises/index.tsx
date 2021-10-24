import React, { useState, useCallback } from 'react';
import { HiOutlineRefresh } from 'react-icons/hi';

import NavbarVertical from '../../components/NavbarVertical';
import ContainerDefault from '../../components/ContainerDefault';

import Exercise1 from './screens/Exercise1';
import Exercise2 from './screens/Exercise2';

import { Content, NavItem, ButtonReload } from './styles';

type ShowExerciseType = 'exe1' | 'exe2';

type ExercisesDataType = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key in ShowExerciseType]: any;
};

const Exercises: React.FC = () => {
  const [showExercise, setShowExercise] = useState<ShowExerciseType>('exe1');

  const alternateExercises = useCallback(() => {
    setShowExercise(state => (state === 'exe1' ? 'exe2' : 'exe1'));
  }, []);

  const exercisesData: ExercisesDataType = {
    exe1: <Exercise1 nextExercise={() => alternateExercises()} />,
    exe2: <Exercise2 nextExercise={() => alternateExercises()} />,
  };

  return (
    <ContainerDefault>
      <NavbarVertical title="Detalhes do exercício">
        <NavItem>
          <strong>Nível de dificuldade:</strong>
          <span>1</span>
        </NavItem>

        <NavItem>
          <strong>Valor:</strong>
          <span>10 pontos</span>
        </NavItem>

        <hr />

        <ButtonReload type="button" onClick={() => alternateExercises()}>
          <HiOutlineRefresh size={20} />
          <strong>Trocar de exercício</strong>
        </ButtonReload>
      </NavbarVertical>

      <Content>{exercisesData[showExercise]}</Content>
    </ContainerDefault>
  );
};

export default Exercises;
