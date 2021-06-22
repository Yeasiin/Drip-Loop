import React from "react";
import { connect } from "react-redux";
import { selectCollection } from "../Redux/shop/shopSelector";
import {
  StyledCollection,
  StyledCollectionPreview,
} from "./../styled/StyledCollection";
import CollectionItem from "../components/CollectionItem";

function CollectionPage({ collections }) {
  console.log(collections);
  return (
    <StyledCollection>
      <h2 className="Collection-Title">{collections.title}</h2>
      <StyledCollectionPreview>
        {collections.items.map((collection) => (
          <CollectionItem key={collection.id} item={collection} />
        ))}
      </StyledCollectionPreview>
    </StyledCollection>
  );
}
const mapStateToProps = (state, ownProps) => ({
  collections: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
