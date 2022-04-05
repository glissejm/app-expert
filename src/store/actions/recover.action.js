import types from "../../types";
import { apiClient } from "../axiosApi";

export function recoverUser(user) {
  return {
    type: types.recoverUser,
    payload: user,
  };
}
