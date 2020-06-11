import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/">
      <Dashboard />
    </Route>
  </Switch>
);

export default Routes;
