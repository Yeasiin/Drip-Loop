import shopActionTypes from "./shopTypes";

export const updateCollections = (collectionMap) => {
  return { type: shopActionTypes.UPDATE_COLLECTIONS, payload: collectionMap };
};
