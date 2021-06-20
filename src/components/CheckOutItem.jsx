import React from "react";
import { connect } from "react-redux";
import { StyledCheckOutItem } from "./../styled/StyledCheckOutItem";

function CheckOutItem({ cartItem, addItem }) {
  const { name, price, quantity, imageUrl } = cartItem;
  return (
    <StyledCheckOutItem>
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity" onClick={() => dispatch(addItem(cartItem))}>
        {quantity}
      </span>
      <span className="price">${price}</span>
      <div className="remove-button">&#10005;</div>
    </StyledCheckOutItem>
  );
}

// const mapDispatchToProps = ()=>{
//     addItem: ()=>
// }

export default connect()(CheckOutItem);
// (item) => dispatch(addItem(item)),
