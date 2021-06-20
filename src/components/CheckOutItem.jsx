import React from "react";
import { connect } from "react-redux";
import { clearItemFromCart, addItem } from "./../Redux/cart/cartAction";
import { StyledCheckOutItem } from "./../styled/StyledCheckOutItem";

function CheckOutItem({ cartItem, addItem, clearItemFromCart }) {
  const { name, price, quantity, imageUrl } = cartItem;
  return (
    <StyledCheckOutItem>
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity" onClick={() => addItem(cartItem)}>
        {quantity}
      </span>
      <span className="price">${price}</span>
      <div
        className="remove-button"
        onClick={() => clearItemFromCart(cartItem)}
      >
        &#10005;
      </div>
    </StyledCheckOutItem>
  );
}

const mapDispatchToProps = (dispatch) => ({
  addItem: (cartItem) => dispatch(addItem(cartItem)),
  clearItemFromCart: (cartItem) => dispatch(clearItemFromCart(cartItem)),
});

export default connect(null, mapDispatchToProps)(CheckOutItem);
