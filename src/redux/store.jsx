import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import { configureStore } from "@reduxjs/toolkit";
import productReducer from './reducers/productReducer'
import authReducer from './reducers/authReducer'
// Redux.createStore:
// Must use combineReducers, applyMiddleware(thunk), composeWithDevTools()
// let store = createStore(
//   rootReducer,
//   composeWithDevTools(applyMiddleware(thunk))
// );

const store = configureStore({
  reducer: {
    // == combineReducers
    auth: authReducer,
    product: productReducer
  }
})

export default store;
