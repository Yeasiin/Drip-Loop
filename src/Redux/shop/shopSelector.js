import { createSelector } from "reselect";

const shopSelector = (state) => state.shop;

export const selectShop = createSelector(
  [shopSelector],
  (shop) => shop.collections
);

export const selectCollectionForPreview = createSelector(
  [selectShop],
  (collections) =>
    collections ? Object.keys(collections).map((keys) => collections[keys]) : []
);

export const selectCollection = (collectionUrlParam) =>
  createSelector(
    [selectShop],
    (collections) => collections[collectionUrlParam]
  );

export const selectIsCollectionFetching = createSelector(
  [shopSelector],
  (shop) => shop.isFetching
);

export const selectIsCollectionLoaded = createSelector(
  [shopSelector],
  (shop) => !!shop.collections
);
