import React from 'react';
import {
  getShallowProviderAndWrapper,
  getInitializedConnectedComponent,
  updateWrapperFromProvider
} from 'js/utils/stateHelpers';

import Landing from '@screens/Landing';

describe('Landing screen', () => {
  describe('when user type is not available to the component', () => {
    it('renders landing text with no traffic light, ', () => {
      const landing = getShallowProviderAndWrapper(<Landing />).wrapper;

      expect(landing).toIncludeText('Ancestry Coding Challenge');
      expect(landing.find({ testid: 'intro' })).toHaveText('Traffic Light Exercise!');

      expect(landing.find('TrafficLight').exists()).toEqual(false);
      expect(landing).toMatchSnapshot();
    });

    it('sets user type of "production" when Math.random returns under 50%', () => {
      let wrapper;
      let provider;

      ({ wrapper, provider } = getShallowProviderAndWrapper(<Landing />));

      Math.random = jest.fn().mockReturnValue(0.0);
      wrapper.instance().handleSetUserType();

      updateWrapperFromProvider(wrapper, provider);
      expect(wrapper.instance().props.userType).toBe('production');

      Math.random = jest.fn().mockReturnValue(0.49);
      wrapper.instance().handleSetUserType();

      updateWrapperFromProvider(wrapper, provider);
      expect(wrapper.instance().props.userType).toBe('production');
    });

    it('sets user type of "pilot" when Math.random returns over 50%', () => {
      let wrapper;
      let provider;

      ({ wrapper, provider } = getShallowProviderAndWrapper(<Landing />));

      Math.random = jest.fn().mockReturnValue(0.5);
      wrapper.instance().handleSetUserType();

      updateWrapperFromProvider(wrapper, provider);
      expect(wrapper.instance().props.userType).toBe('pilot');

      Math.random = jest.fn().mockReturnValue(1);
      wrapper.instance().handleSetUserType();

      updateWrapperFromProvider(wrapper, provider);
      expect(wrapper.instance().props.userType).toBe('pilot');
    });
  });

  describe('when user is of type "production"', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = getInitializedConnectedComponent(<Landing />, { auth: { userType: 'production' } });
    });

    it('renders traffic light without set color props ', () => {
      const colorProps = wrapper.find('TrafficLight').at(1).props().colors;
      expect(colorProps).toBe(null);
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('when user is of type "pilot"', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = getInitializedConnectedComponent(<Landing />, { auth: { userType: 'pilot' } });
    });

    it('renders traffic light with set color props ', () => {
      const colorProps = wrapper.find('TrafficLight').at(1).props().colors;
      expect(colorProps).toEqual([ 'blue', 'orange', 'purple' ]);
      expect(wrapper).toMatchSnapshot();
    });
  });
});
