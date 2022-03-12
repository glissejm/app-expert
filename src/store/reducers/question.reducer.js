import types from "../../types";
const initialQuestion = { id: "" };

export default function questionReducer(state = initialQuestion, action) {
  switch (action.type) {
    case types.getquestionID:
      return { ...action.payload };
    default:
      return state;
  }
}
