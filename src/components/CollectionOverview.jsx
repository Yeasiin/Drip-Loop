import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCollectionForPreview } from "./../Redux/shop/shopSelector";
import CollectionPreview from "../components/CollectionPreview";
import { Container } from "../styled/Container";

function CollectionOverview({ collections }) {
  return (
    <Container>
      {collections.map((collection) => (
        <CollectionPreview key={collection.id} {...collection} />
      ))}
    </Container>
  );
}

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionForPreview,
});

export default connect(mapStateToProps)(CollectionOverview);
