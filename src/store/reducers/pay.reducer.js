import types from "../../types";

const initialPay = {
  planSelected: {},
  pay_type: null,
  success: null,
  error: {}
};

export default function payReducer(state = initialPay, action) {
  switch (action.type) {
    case types.changePay:
      return { ...state ,...action.payload};
    case types.successPay:
      return { ...state, success: action.payload };
    case types.errorPay:
      return { ...state, error: action.payload };
    default:
      return state;
  }
}
