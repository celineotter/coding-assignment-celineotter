// @flow

import { combineReducers } from 'redux';

import authReducer from 'js/state/reducers/auth';

const reducers = combineReducers({
  auth: authReducer,
});

export default reducers;
