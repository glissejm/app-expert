import types from "../../types";

const initialQuery = "";

export default function queryReducer(state = initialQuery, action) {
  switch (action.type) {
    case types.changequery:
      return { ...action.payload };
    default:
      return state;
  }
}
