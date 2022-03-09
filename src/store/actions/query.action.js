import types from "../../types";

export function changeQuery(query) {
  return {
    type: types.changequery,
    payload: query,
  };
}
