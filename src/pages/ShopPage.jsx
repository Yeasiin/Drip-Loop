import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import CollectionPage from "./CollectionPage";
import WithSpinner from "../components/common/WithSpinner";
import CollectionOverview from "../components/CollectionOverview";
import { updateCollections } from "../Redux/shop/shopAction";
import {
  fireStore,
  convertCollectionsSnapshotToMap,
} from "./../firebase/firebase.utils";

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

function ShopPage({ match, updateCollections }) {
  const [loading, isLoading] = useState(true);

  useEffect(() => {
    const collectionRef = fireStore.collection("collections");
    collectionRef.onSnapshot(async (SnapShot) => {
      const collectionsMap = convertCollectionsSnapshotToMap(SnapShot);
      updateCollections(collectionsMap);
      isLoading(false);
    });
  }, []);

  console.log(match);
  return (
    <Switch>
      <Route
        exact
        path={match.path}
        render={(props) => (
          <CollectionOverviewWithSpinner isLoading={loading} {...props} />
        )}
      />
      <Route
        path={`${match.path}/:collectionId`}
        render={(props) => (
          <CollectionPageWithSpinner isLoading={loading} {...props} />
        )}
      />
    </Switch>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateCollections: (collectionMap) =>
      dispatch(updateCollections(collectionMap)),
  };
};

export default connect(null, mapDispatchToProps)(ShopPage);
