import types from "../../types";

export function loginUser(user) {
  return {
    type: types.loginUser,
    payload: user,
  };
}
