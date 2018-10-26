// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';

import TrafficLight from '@common/TrafficLight';
import { setUserType } from 'js/state/actions/auth';

import './styles.css';
import config from '../../../config.json';

type StateProps = {
  userType: string,
};

type DispatchProps = {
  dispatchUserType: setUserType,
};

type ComposedComponentType = $Supertype<DispatchProps & StateProps>;

class Landing extends Component<ComposedComponentType> {
  componentDidMount() {
    const { userType } = this.props;
    if (!userType) {
      this.handleSetUserType();
    }
  }

  handleSetUserType() {
    const coin = Math.floor(Math.random() * 2);
    this.props.dispatchUserType(coin === 0 ? 'production' : 'pilot');
  }

  renderTrafficLights() {
    const { userType } = this.props;
    if (!userType) return null;

    return (
      <div styleName="traffic-light-row">
        <TrafficLight colors={config.users[userType].trafficColors} />
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
