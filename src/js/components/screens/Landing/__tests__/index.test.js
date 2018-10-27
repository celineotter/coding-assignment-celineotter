import React from 'react';
import { getShallowProviderAndWrapper, getInitializedConnectedComponent } from 'js/utils/stateHelpers';

import Landing from '@screens/Landing';

describe('Landing screen', () => {
  describe('when user type is not set in the redux store', () => {
    it('renders landing text with no traffic light, ', () => {
      const landing = getShallowProviderAndWrapper(<Landing />).wrapper;

      expect(landing).toIncludeText('Ancestry Coding Challenge');
      expect(landing.find({ testid: 'intro' })).toHaveText('Traffic Light Exercise!');

      expect(landing.find('TrafficLight').exists()).toEqual(false);
      expect(landing).toMatchSnapshot();
    });
  });

  describe('when user is of type "production" in the redux store', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = getInitializedConnectedComponent(<Landing />, { auth: { userType: 'production' } });
    });

    it('renders traffic light without set color props ', () => {
      const colorProps = wrapper.find('TrafficLight').props().colors;
      expect(colorProps).toBe(null);
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('when user is of type "pilot" in the redux store', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = getInitializedConnectedComponent(<Landing />, { auth: { userType: 'pilot' } });
    });

    it('renders traffic light with set color props ', () => {
      const colorProps = wrapper.find('TrafficLight').props().colors;
      expect(colorProps).toEqual([ 'blue', 'orange', 'purple' ]);
      expect(wrapper).toMatchSnapshot();
    });
  });
});
