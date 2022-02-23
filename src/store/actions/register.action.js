import types from "../../types";
export function registerUser(user) {
  return {
    type: types.registerUser,
    payload: user,
  };
}
