import React from "react";
import { Route, Switch } from "react-router-dom";
import CollectionPage from "./CollectionPage";
import CollectionOverview from "../components/CollectionOverview";

function ShopPage({ match }) {
  console.log(match);
  return (
    <Switch>
      <Route exact path={match.path} component={CollectionOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </Switch>
  );
}

export default ShopPage;
