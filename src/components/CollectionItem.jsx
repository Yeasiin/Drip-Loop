import { connect } from "react-redux";
import { addItem } from "../Redux/cart/cartAction";
import Button from "./common/Button";
import { StyledCollectionItem } from "./../styled/StyledCollection";

function CollectionItem({ item, addItem }) {
  const { id, name, price, imageUrl } = item;
  return (
    <StyledCollectionItem>
      <div
        className="CollectionImage"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="CollectionFooter">
        <span>{name}</span>
        <span>${price}</span>
      </div>
      <Button addItem={() => addItem(item)} inverter value="Add To Cart" />
    </StyledCollectionItem>
  );
}

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
