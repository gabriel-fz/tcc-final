import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import Error404 from '../pages/Error404';
import Dashboard from '../pages/Dashboard';
import TableOfDerivatives from '../pages/TableOfDerivatives';
import MyAchievements from '../pages/MyAchievements';
import Exercises from '../pages/Exercises';
import Derivative1 from '../pages/Derivatives/Derivative1';
import Derivative2 from '../pages/Derivatives/Derivative2';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/tabela-de-derivadas" exact component={TableOfDerivatives} />
    <Route path="/minhas-conquistas" exact component={MyAchievements} />
    <Route path="/exercicios" exact component={Exercises} />
    <Route path="/derivada-1" exact component={Derivative1} />
    <Route path="/derivada-2" exact component={Derivative2} />
    <Route path="*" component={Error404} />
  </Switch>
);

export default Routes;
