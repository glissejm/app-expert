import types from "../../types";
export function logoutUser() {
  return {
    type: types.logoutUser,
    payload: false,
  };
}
