import { setUserType, resetAuthState } from '../auth';

describe('setUserType action', () => {
  it('sets an session token', () => {
    expect(window.sessionStorage.getItem('userType')).toBe(null);

    const userType = 'user type abc';
    setUserType(userType);
    expect(window.sessionStorage.getItem('userType')).toBe(userType);
  });
});

describe('setUserType action', () => {
  it('sets an session token', () => {
    const userType = 'user type abc';
    window.sessionStorage.setItem('userType', userType);

    expect(window.sessionStorage.getItem('userType')).toBe(userType);
    resetAuthState(userType);

    expect(window.sessionStorage.getItem('userType')).toBe(null);
  });
});
