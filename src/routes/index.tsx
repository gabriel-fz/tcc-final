import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import Error404 from '../pages/Error404';
import Dashboard from '../pages/Dashboard';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="*" component={Error404} />
  </Switch>
);

export default Routes;
