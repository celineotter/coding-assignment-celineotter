import React, { Component } from 'react';

import './traffic-light.css';

const DEFAULT_COLORS = [ 'red', 'yellow', 'green' ];
let cancelTimeOut;

class TrafficLight extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: this.props.colors ? this.props.colors : DEFAULT_COLORS,
      colorIndex: 0,
    };
  }

  componentWillUnmount() {
    cancelTimeOut();
  }

  componentDidMount() {
    this.handleLightChange();
  }

  handleLightChange = () => {
    const tempIndex = this.state.colorIndex + 1;
    const newIndex = tempIndex > this.state.colors.length - 1 ? 0 : tempIndex;
    cancelTimeOut = setTimeout(() => {
      this.setState({ colorIndex: newIndex }, this.handleLightChange);
    }, 1000);
  }

  render() {
    return (
      <div>
        <div styleName="traffic-light-container">
          <div styleName="square">
            {this.state.colors.map((color, index) => {
              const activeLight = index === this.state.colorIndex;
              const colorStyle = activeLight ? color : '';
              const style = `circle circle${index} ${colorStyle}`;

              return (
                <div styleName={style} key={`light${index}`} />
              );
            })}
          </div>
        </div>
      </div>

    );
  }
}

export default TrafficLight;
