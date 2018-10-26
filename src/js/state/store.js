// @flow

import { createStore, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';
import reduxThunk from 'redux-thunk';

import reducers from 'js/state/reducers';

let store;
const initialState = {
  // auth: {
  // },
};

export const initializeStore = (state?: Object = initialState) => {
  store = createStore(
    reducers,
    state,
    applyMiddleware(reduxPromise, reduxThunk)
  );
  return store;
};

export default store || initializeStore();
