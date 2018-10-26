import React, { cloneElement } from 'react';
import { shallow } from 'enzyme';

import ConnectedRoot from 'js/utils/ConnectedRoot';
import store, { initializeStore } from 'js/state/store';

// ---------------
// REDUCER GETTERS
// ---------------

export const getStore = () => store;

export const getState = () => getStore().getState();

// ---------------
// REDUCER SETTERS
// ---------------

// e.g: trigger clear store;

// -------------------------------------------------
// TEST REACT COMPONENT AND REDUX STATE MANIPULATORS
// -------------------------------------------------

export const getInitializedConnectedComponent = (element, initialState) => {
  const connectedComponent = cloneElement(element, {
    store: initializeStore(initialState)
  });
  // unwrap: connect(component) -> component's content;
  return shallow(connectedComponent).shallow();
};

// unwrap: connect(component) -> component's content;
export const getWrapperFromProvider = (provider) => provider.shallow().shallow();

export const wrapWithProvider = (element) => (
  <ConnectedRoot>
    {cloneElement(element, { store: getStore() })}
  </ConnectedRoot>
);

export const getShallowProviderAndWrapper = (element) => {
  // unwrap: ConnectedRoot and provider component
  const provider = shallow(wrapWithProvider(element)).shallow();
  const wrapper = getWrapperFromProvider(provider);
  return { provider, wrapper };
};

export const updateWrapperFromProvider = (wrapper, provider) => {
  provider.update();
  wrapper.setProps({ ...provider.shallow().props() });
  wrapper.update();
};
