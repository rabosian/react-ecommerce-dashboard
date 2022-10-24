import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  email: "",
  password: "",
  role: "",
  auth: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess(state, action) {
      state.email = action.payload.email
      state.password = action.payload.password
      state.auth = true
    },
    logoutSuccess(state, action) {
      state.email = ""
      state.password = ""
      state.auth = false
    },
    isAdmin(state, action) {
      state.role = "admin"
    }
  }
})

export const authActions = authSlice.actions
export default authSlice.reducer

// function authReducer(state = initialState, action) {
//   let { type, payload } = action;
//   switch (type) {
//     case "LOGIN_SUCCESS":
//       return {
//         ...state,
//         email: payload.email,
//         password: payload.password,
//         auth: true,
//       };

//     case "LOGOUT_SUCCESS":
//       return {
//         ...state,
//         email: "",
//         password: "",
//         auth: false,
//       };

//     default:
//       return { ...state };
//   }
// }

// export default authReducer;
