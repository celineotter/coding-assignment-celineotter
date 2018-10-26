export const actionTypes = { SET_USER_TYPE: 'SET_USER_TYPE', CLEAR_USER_TYPE: 'CLEAR_USER_TYPE' };

export const setUserType = (userType) => {

  sessionStorage.setItem('userType', userType);
  return {
    type: actionTypes.SET_USER_TYPE,
    payload: { userType }
  };
};

export const clearUserType = () => {
  localStorage.removeItem('userType');
  return {
    type: actionTypes.CLEAR_USER_TYPE,
    payload: { token: null }
  };
};
