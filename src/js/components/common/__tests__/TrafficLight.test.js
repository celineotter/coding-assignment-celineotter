import React from 'react';
import { shallow } from 'enzyme';

import TrafficLight from '@common/TrafficLight';

describe('TrafficLight', () => {
  let wrapper;

  const getWrapper = (options) => {
    return shallow(<TrafficLight {...options} />);
  };

  const checkLightIsActive = (lights, lightIndex, color) => {
    return shallow(lights.get(lightIndex)).props().className.includes(color);
  };

  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.clearAllTimers();
  });

  it('renders the component', () => {
    wrapper = getWrapper();
    expect(wrapper).toMatchSnapshot();
  });

  it('clears the timers on unmount', () => {
    clearTimeout = jest.fn(); // eslint-disable-line
    wrapper = getWrapper();
    wrapper.instance().componentWillUnmount();
    expect(clearTimeout).toHaveBeenCalledTimes(1);
  });

  describe('first render', () => {
    it('displays only the red color as active', () => {
      wrapper = getWrapper();
      const lights = wrapper.find({ testId: 'light' });

      expect(checkLightIsActive(lights, 0, 'red')).toBe(true);
      expect(checkLightIsActive(lights, 1, 'yellow')).toBe(false);
      expect(checkLightIsActive(lights, 2, 'green')).toBe(false);
    });
  });

  describe('following 1 second', () => {
    it('displays only the yellow color as active', () => {
      wrapper = getWrapper();
      jest.advanceTimersByTime(1000);

      wrapper.update();
      const lights = wrapper.find({ testId: 'light' });

      expect(checkLightIsActive(lights, 0, 'red')).toBe(false);
      expect(checkLightIsActive(lights, 1, 'yellow')).toBe(true);
      expect(checkLightIsActive(lights, 2, 'green')).toBe(false);
    });
  });

  describe('following 2 second', () => {
    it('displays only the yellow color as active', () => {
      wrapper = getWrapper();
      jest.advanceTimersByTime(2000);

      wrapper.update();
      const lights = wrapper.find({ testId: 'light' });

      expect(checkLightIsActive(lights, 0, 'red')).toBe(false);
      expect(checkLightIsActive(lights, 1, 'yellow')).toBe(false);
      expect(checkLightIsActive(lights, 2, 'green')).toBe(true);
    });
  });

  describe('following 3 second', () => {
    it('starts the cycle over and displays only the red color as active', () => {
      wrapper = getWrapper();
      jest.advanceTimersByTime(3000);

      wrapper.update();
      const lights = wrapper.find({ testId: 'light' });

      expect(checkLightIsActive(lights, 0, 'red')).toBe(true);
      expect(checkLightIsActive(lights, 1, 'yellow')).toBe(false);
      expect(checkLightIsActive(lights, 2, 'green')).toBe(false);
    });
  });
});
