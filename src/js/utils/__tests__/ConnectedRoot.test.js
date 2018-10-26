import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';

import ConnectedRoot from 'js/utils/ConnectedRoot';

describe('ConnectedRoot', () => {
  let wrapper;

  const getWrapper = (element) => {
    return shallow(<ConnectedRoot>{element}</ConnectedRoot>);
  };

  it('renders child component wrapped in provider', () => {
    const targetElement = <span>my text</span>;
    // const targetElement = 'Connected Component';
    wrapper = getWrapper(targetElement);

    expect(wrapper.find(Provider)).toExist();
    expect(wrapper.contains(targetElement)).toBe(true);
  });
});
