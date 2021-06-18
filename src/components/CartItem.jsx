import { StyledCartItem } from "./../styled/StyledCartItem";
export default function CartItem({ cartItem }) {
  return (
    <StyledCartItem>
      <img src={cartItem.imageUrl} alt="Item" />
      <div className="item-details">
        <span className="name">{cartItem.name}</span>
        <span className="price">
          {cartItem.quantity} x ${cartItem.price}
        </span>
      </div>
    </StyledCartItem>
  );
}
