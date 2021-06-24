import { all, call } from "redux-saga/effects";
import { shopSagas } from "./shop/shopSagas";
import { userSages } from "./user/userSagas";
import { cartSagas } from "./cart/cartSagas";

export default function* rootSaga() {
  yield all([call(shopSagas), call(userSages), call(cartSagas)]);
}
