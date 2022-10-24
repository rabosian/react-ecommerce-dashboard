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

function adminLogin() {
  return (dispatch, getState) => {
    dispatch(authActions.isAdmin())
  };
}

export const authAction = { login, logout, adminLogin };
