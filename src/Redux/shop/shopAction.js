import shopActionTypes from "./shopTypes";
import {
  fireStore,
  convertCollectionsSnapshotToMap,
} from "./../../firebase/firebase.utils";

export const fetchCollectionsStart = () => {
  return { type: shopActionTypes.FETCH_COLLECTIONS_START };
};

export const fetchCollectionsSuccess = (collectionsMap) => {
  return {
    type: shopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collectionsMap,
  };
};

export const fetchCollectionsFailure = (errorMessage) => {
  return {
    type: shopActionTypes.FETCH_COLLECTIONS_FAILURE,
    payload: errorMessage,
  };
};

export const fetchCollectionsStartAsync = () => {
  return (dispatch) => {
    const collectionRef = fireStore.collection("collections");
    dispatch(fetchCollectionsStart());
    collectionRef
      .get()
      .then((SnapShot) => {
        const collectionsMap = convertCollectionsSnapshotToMap(SnapShot);
        dispatch(fetchCollectionsSuccess(collectionsMap));
      })
      .catch((error) => dispatch(fetchCollectionsFailure(error.message)));
  };
};
