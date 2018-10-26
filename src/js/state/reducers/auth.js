import { actionTypes } from 'js/state/actions/auth';

const defaultState = {
  userType: null,
};

export default function (state = defaultState, action) {
  switch (action.type) {
    case actionTypes.SET_USER_TYPE:
      return { ...state, userType: action.payload.userType };
    case actionTypes.CLEAR_USER_TYPE:
      return { ...state, userType: defaultState.userType };
    default:
      return state;
  }
}
