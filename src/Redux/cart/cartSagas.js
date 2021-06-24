import { all, takeLatest, call, put } from "redux-saga/effects";
import userActionTypes from "../user/userTypes";
import { clearCart } from "./cartAction";

export function* clearCartOnSingOut() {
  yield put(clearCart());
}

export function* onSignOutSuccess() {
  yield takeLatest(userActionTypes.SIGN_OUT_SUCCESS, clearCartOnSingOut);
}

export function* cartSagas() {
  yield all([call(onSignOutSuccess)]);
}
