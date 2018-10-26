import React from 'react';
import { shallow } from 'enzyme';

import Landing from '@screens/Landing';

it('renders landing text', () => {
  const landing = shallow(<Landing />);

  expect(landing).toIncludeText('Ancestry Coding Challenge');
  expect(landing.find({ testid: 'intro' })).toHaveText('My react app!');
  expect(landing).toMatchSnapshot();
});
