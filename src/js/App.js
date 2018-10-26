// @flow

import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from 'js/Routes';

class App extends Component<{}> {
  // renderHeader() {}

  // renderFooter() {}

  render() {
    return (
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    );
  }
}

export default App;
