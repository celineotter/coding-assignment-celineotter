// @flow

import React from 'react';
import ReactDOM from 'react-dom';

import ConnectedRoot from 'js/utils/ConnectedRoot';
import App from 'js/App';

import 'normalize.css';
import 'styles/root.css';

const root = document.getElementById('root'); // or can use: document.querySelector('#root');

if (root !== null) {
  ReactDOM.render((
    <ConnectedRoot>
      <App />
    </ConnectedRoot>),
  root);
}
