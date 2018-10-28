// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';

import TrafficLight from '@common/TrafficLight';
import { setUserType, type setUserTypeAction } from 'js/state/actions/auth';

import './styles.css';
import config from '../../../config.json';

type StateProps = {
  userType: string,
};

type DispatchProps = {
  dispatchUserType: setUserTypeAction,
};

type ComposedComponentType = $Supertype<DispatchProps & StateProps>;

class Landing extends Component<ComposedComponentType, {}> {
  componentDidMount() {
    const { userType } = this.props;
    if (!userType) {
      this.handleSetUserType();
    }
  }

  handleSetUserType() {
    const coinFlip = Math.floor(Math.random() * 2);
    const userType = coinFlip === 0 ? 'production' : 'pilot';
    this.props.dispatchUserType(userType);
  }

  renderTrafficLights() {
    const { userType } = this.props;
    if (!userType) return null;

    return (
      <div styleName="traffic-light-row">
        <div styleName="alpha-beta-wrapper">
          <TrafficLight colors={config.users.pilot.trafficColors} />
        </div>
        <div styleName="alpha-beta-wrapper featured">
          <TrafficLight colors={config.users[userType].trafficColors} />
        </div>
        <div styleName="alpha-beta-wrapper">
          <TrafficLight colors={config.users.production.trafficColors} />
        </div>
      </div>
    );
  }

  render() {
    return (
      <div styleName="wrapper">
        <header styleName="header">
          <h1 styleName="title">Ancestry Coding Challenge</h1>
        </header>
        <p styleName="intro" testid="intro">
          Traffic Light Exercise!
        </p>
        {this.renderTrafficLights()}
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { userType: auth.userType };
}

export default connect(mapStateToProps, { dispatchUserType: setUserType })(Landing);
