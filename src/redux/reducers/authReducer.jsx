let initialState = {
  email: "",
  password: "",
  auth: false,
};

function authReducer(state = initialState, action) {
  let { type, payload } = action;
  switch (type) {
    case "LOGIN_SUCCESS":
      return {
        ...state,
        email: payload.email,
        password: payload.password,
        auth: true,
      };

    case "LOGOUT_SUCCESS":
      return {
        ...state,
        email: "",
        password: "",
        auth: false,
      }

    default:
      return { ...state };
  }
}

export default authReducer;
