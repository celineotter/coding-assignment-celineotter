import authReducer from 'js/state/reducers/auth';
import { setUserType, resetState } from 'js/state/actions/auth';

describe('auth reducer', () => {
  let initialState;
  let state;

  it('return an empty userType on default', () => {
    state = authReducer(initialState, {});

    expect(state.userType).toBeNull();
  });

  it('sets a userType when action SET_USER_TYPE is dispatched', () => {
    const user1 = 'prod';
    const user2 = 'demo';

    state = authReducer(initialState, setUserType(user1));
    expect(state.userType).toEqual(user1);

    state = authReducer(initialState, setUserType(user2));
    expect(state.userType).toEqual(user2);
  });

  it('returns the default when action CLEAR_USER_TYPE is dispatched', () => {
    initialState = { userType: 'my user type' };
    state = authReducer(initialState, resetState());
    expect(state.userType).toEqual(null);
  });

  it('handles unknown actions dispatched', () => {
    initialState = { userType: 'my user type' };

    state = authReducer(initialState, {});
    expect(state).toEqual(initialState);

    state = authReducer(initialState, { type: 'ABC' });
    expect(state).toEqual(initialState);
  });
});
