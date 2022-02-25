import types from "../../types";

const initialState = { name: "", email: "", logged: false };
export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case types.registerUser:
      return { ...action.payload, logged: true };
    case types.loginUser:
      return { ...action.payload, logged: true };
    case types.logoutUser:
      return initialState;
    default:
      return state;
  }
}
