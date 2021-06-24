import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import CollectionsOverViewContainer from "./../components/CollectionOverViewContainer";
import CollectionPageContainer from "./../components/CollectionPageContainer";
import { fetchCollectionsStart } from "../Redux/shop/shopAction";

function ShopPage(props) {
  const { match, fetchCollectionsStart } = props;

  useEffect(() => {
    fetchCollectionsStart();
  }, []);

  return (
    <Switch>
      <Route exact path={match.path} component={CollectionsOverViewContainer} />
      <Route
        path={`${match.path}/:collectionId`}
        component={CollectionPageContainer}
      />
    </Switch>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
  };
};

export default connect(null, mapDispatchToProps)(ShopPage);
