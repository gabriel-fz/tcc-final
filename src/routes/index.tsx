import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import Error404 from '../pages/Error404';
import Dashboard from '../pages/Dashboard';
import TableOfDerivatives from '../pages/TableOfDerivatives';
import MyAchievements from '../pages/MyAchievements';
import Exercises from '../pages/Exercises';
import DerivativeReview from '../pages/DerivativeReview';
import Derivative1 from '../pages/Derivatives/Derivative1';
import Derivative2 from '../pages/Derivatives/Derivative2';
import Derivative3 from '../pages/Derivatives/Derivative3';
import Derivative4 from '../pages/Derivatives/Derivative4';
import DerivativeTest from '../pages/Derivatives/DerivativeTest';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact layoutType="default" component={Dashboard} />
    <Route
      path="/tabela-de-derivadas"
      exact
      layoutType="default"
      component={TableOfDerivatives}
    />
    <Route
      path="/minhas-conquistas"
      exact
      layoutType="default"
      component={MyAchievements}
    />
    <Route
      path="/exercicios"
      exact
      layoutType="default"
      component={Exercises}
    />
    <Route
      path="/revisao-de-derivadas"
      exact
      layoutType="default"
      component={DerivativeReview}
    />
    <Route
      path="/derivada-1"
      exact
      layoutType="default"
      component={Derivative1}
    />
    <Route
      path="/derivada-2"
      exact
      layoutType="default"
      component={Derivative2}
    />
    <Route
      path="/derivada-3"
      exact
      layoutType="default"
      component={Derivative3}
    />
    <Route
      path="/derivada-4"
      exact
      layoutType="default"
      component={Derivative4}
    />
    <Route
      path="/derivada-teste"
      exact
      layoutType="default"
      component={DerivativeTest}
    />
    <Route path="*" layoutType="none" component={Error404} />
  </Switch>
);

export default Routes;
