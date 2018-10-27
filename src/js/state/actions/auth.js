// @flow

export const actionTypes = { SET_USER_TYPE: 'SET_USER_TYPE', CLEAR_USER_TYPE: 'CLEAR_USER_TYPE' };

export type setUserTypeAction = (x: string) => { type: string, payload: { userType: string } };

export const setUserType: setUserTypeAction = (userType) => {
  sessionStorage.setItem('userType', userType);

  return {
    type: actionTypes.SET_USER_TYPE,
    payload: { userType }
  };
};

export const resetState = () => {
  localStorage.removeItem('userType');

  return {
    type: actionTypes.CLEAR_USER_TYPE,
    payload: { token: null }
  };
};
