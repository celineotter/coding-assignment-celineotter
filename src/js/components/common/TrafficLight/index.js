// @flow

import React, { Component } from 'react';

import './traffic-light.css';

type colorsType = Array<string>;

const DEFAULT_COLORS: colorsType = [ 'red', 'yellow', 'green' ];

let cancelTimeOutId;

type StateProps = {
  colors: ?colorsType,
};

type TrafficLightState = {
  colorIndex: ?number,
};

class TrafficLight extends Component<StateProps, TrafficLightState> {
  constructor(props: StateProps) {
    super(props);

    this.state = {
      colorIndex: 0,
    };
  }

  componentWillUnmount() {
    this.clearTimers();
  }

  componentDidMount() {
    this.handleLightChange();
  }

  clearTimers() {
    clearTimeout(cancelTimeOutId);
  }

  getColors() {
    return this.props.colors || DEFAULT_COLORS;
  }

  handleLightChange = () => {
    const tempIndex = this.state.colorIndex + 1;
    const newIndex = tempIndex > this.getColors().length - 1 ? 0 : tempIndex;

    cancelTimeOutId = setTimeout(() => {
      this.setState({ colorIndex: newIndex }, this.handleLightChange);
    }, 1000);
  }

  render() {
    return (
      <div>
        <div styleName="traffic-light-container">
          <div styleName="square">
            {this.getColors().map((color, index) => {
              const activeLight = index === this.state.colorIndex;
              const style = [ 'circle', `circle${index}`, activeLight ? color : '' ].join(' ');

              return (
                <div testId="light" styleName={style} key={`light${index}`} />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default TrafficLight;
