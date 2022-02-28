import types from "../../types";
import { apiClient } from "../axiosApi";

export const startLoginUser = (user) => {
  return async (dispatch) => {
    try {
      const response = await apiClient("/signin", user, "POST");
      const data = response.data;
      //store the user
      //with the action
      dispatch(loginUser(data));
    } catch (e) {
      console.log(e);
    }
  };
};

export function loginUser(user) {
  return {
    type: types.loginUser,
    payload: user,
  };
}
