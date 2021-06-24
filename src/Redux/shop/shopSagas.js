import { takeLatest, call, put, all } from "redux-saga/effects";
import { fetchCollectionsSuccess, fetchCollectionsFailure } from "./shopAction";
import {
  fireStore,
  convertCollectionsSnapshotToMap,
} from "./../../firebase/firebase.utils";

import shopActionTypes from "./shopTypes";

export function* fetchCollectionsStartAsync() {
  try {
    const collectionRef = fireStore.collection("collections");
    const snapshot = yield collectionRef.get();
    const collectionsMap = yield call(
      convertCollectionsSnapshotToMap,
      snapshot
    );
    yield put(fetchCollectionsSuccess(collectionsMap));
  } catch (err) {
    yield put(fetchCollectionsFailure(err.message));
  }
}

export function* fetchCollectionsStart() {
  yield takeLatest(
    shopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsStartAsync
  );
}

export function* shopSagas() {
  yield all([call(fetchCollectionsStart)]);
}
