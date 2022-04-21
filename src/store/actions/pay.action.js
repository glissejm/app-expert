import types from "../../types";

export function changePay(payload) {
  return {
    type: types.changePay,
    payload,
  };
}

export function successPay(payload) {
  return {
    type: types.successPay,
    payload,
  };
}