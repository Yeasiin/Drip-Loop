import CartItem from "./CartItem";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";
import { ToggleCartHidden } from "./../Redux/cart/cartAction";
import { selectCartItems } from "./../Redux/cart/cartSelectors";
import { StyledCartDropDown } from "./../styled/StyledCartDropDown";
import Button from "./common/Button";

function CartDropDown({ cartItems, history, dispatch }) {
  return (
    <StyledCartDropDown>
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))
        ) : (
          <span className="empty-message">Your Cart Is Empty</span>
        )}
      </div>
      <span
        onClick={() => {
          history.push("/Checkout");
          dispatch(ToggleCartHidden());
        }}
      >
        <Button value="GO TO CHECKOUT" />
      </span>
    </StyledCartDropDown>
  );
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropDown));
