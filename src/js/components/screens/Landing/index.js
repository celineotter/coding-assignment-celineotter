// @flow

import React from 'react';

import TrafficLight from '@common/TrafficLight';
import './styles.css';

const Landing = () => {
  return (
    <div styleName="wrapper">
      <header styleName="header">
        <h1 styleName="title">Ancestry Coding Challenge</h1>
      </header>
      <p styleName="intro" testid="intro">
        My react app!
      </p>

      <TrafficLight />
    </div>
  );
};

export default Landing;
