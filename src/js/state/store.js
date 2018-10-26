// @flow

import { createStore } from 'redux';

import reducers from 'js/state/reducers';

let store;

const existingUserType = sessionStorage.getItem('userType');

const initialState = existingUserType ? {
  auth: {
    userType: existingUserType,
  },
} : {};

export const initializeStore = (state?: Object = initialState) => {
  store = createStore(
    reducers,
    state,
  );
  return store;
};

export default store || initializeStore();
