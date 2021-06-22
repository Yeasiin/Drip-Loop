import React from "react";
import { withRouter } from "react-router-dom";
import {
  StyledCollectionPreview,
  StyledCollectionTitle,
} from "../styled/StyledCollection";
import CollectionItem from "../components/CollectionItem";

function CollectionPreview({ title, items, routeName, history, match }) {
  return (
    <div>
      <StyledCollectionTitle
        onClick={() => history.push(match.url + "/" + routeName)}
      >
        {title.toUpperCase()}
      </StyledCollectionTitle>
      <StyledCollectionPreview>
        {items
          .filter((item, idx) => idx < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </StyledCollectionPreview>
    </div>
  );
}

export default withRouter(CollectionPreview);
