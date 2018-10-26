// @flow

import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Landing from '@screens/Landing';

// const routes = {
//   FEATURE: '/feature',
// };

const Routes = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Landing} />
      </Switch>
    </div>
  );
};

export default Routes;
