import types from "../../types";
import { apiClient } from "../axiosApi";

export const startRegisterUser = (user) => {
  return async (dispatch) => {
    try {
      const response = await apiClient("/signup", user, "POST");
      const data = response.data;
      //store the user
      //with the action
      dispatch(registerUser(data));
    } catch (e) {
      console.log(e);
    }
  };
};

export function registerUser(user) {
  return {
    type: types.registerUser,
    payload: user,
  };
}
