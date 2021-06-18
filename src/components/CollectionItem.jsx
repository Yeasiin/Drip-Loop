import { connect } from "react-redux";
import { addItem } from "../Redux/cart/cartAction";
import Button from "./common/Button";
import { StyledCollection } from "./../styled/StyledCollection";

function CollectionItem({ item, addItem }) {
  const { id, name, price, imageUrl } = item;
  return (
    <StyledCollection>
      <div
        className="CollectionImage"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="CollectionFooter">
        <span>{name}</span>
        <span>${price}</span>
      </div>
      <Button addItem={() => addItem(item)} inverter value="Add To Cart" />
    </StyledCollection>
  );
}

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
