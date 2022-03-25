import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { selectCollection } from "../Redux/shop/shopSelector";
import CollectionItem from "../components/CollectionItem";
import { Container } from "../styled/Container";

function CollectionPage({ collections }) {
  console.log(collections);
  return (
    <Container>
      <StyledCollection>
        <h2 className="collection-title">{collections.title}</h2>
        <div className="collection-preview">
          {collections.items.map((collection) => (
            <CollectionItem key={collection.id} item={collection} />
          ))}
        </div>
      </StyledCollection>
    </Container>
  );
}

const StyledCollection = styled.div`
  text-align: center;
  & > .collection-title {
    text-transform: capitalize;
    font-size: 30px;
  }

  & > .collection-preview {
    display: grid;
    grid-template-columns: repeat(4, minmax(10px, 1fr));
    gap: 20px;
  }
`;

const mapStateToProps = (state, ownProps) => ({
  collections: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
