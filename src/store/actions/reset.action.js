import types from "../../types";
import { apiClient } from "../axiosApi";


export function resetUser(user) {
  return {
    type: types.resetUser,
    payload: user,
  };
}
