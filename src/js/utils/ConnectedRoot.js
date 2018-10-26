// @flow

import React, { type Node } from 'react';
import { Provider } from 'react-redux';

import { initializeStore } from 'js/state/store';

type Prop = {
  children: Node,
  initialState?: Object,
};

const ConnectedComponent = ({ children, initialState }: Prop) => {
  return (
    <Provider store={initializeStore(initialState)}>{children}</Provider>
  );
};

export default ConnectedComponent;
