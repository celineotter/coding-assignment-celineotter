// @flow

import { actionTypes } from 'js/state/actions/auth';

const defaultState = {
  userType: null,
};

export type State = {
  userType: ?string,
};

export default function (state: State = defaultState, action: Action<*>) {
  switch (action.type) {
    case actionTypes.SET_USER_TYPE:
      console.log('reducer', action.payload.userType);
      return { ...state, userType: action.payload.userType };
    case actionTypes.CLEAR_USER_TYPE:
      return { ...state, userType: defaultState.userType };
    default:
      return state;
  }
}
