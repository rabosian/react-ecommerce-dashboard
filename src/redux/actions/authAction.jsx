import { authActions } from '../reducers/authReducer'

function login(email, password) {
  return (dispatch, getState) => {
    // dispatch({ type: "LOGIN_SUCCESS", payload: { email, password } });
    dispatch(authActions.loginSuccess({email, password}))
  };
}

function logout() {
  return (dispatch, getState) => {
    // dispatch({ type: "LOGOUT_SUCCESS" });
    dispatch(authActions.logoutSuccess())
  };
}

export const authAction = { login, logout };
