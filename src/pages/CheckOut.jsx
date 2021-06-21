import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectCartItems,
  selectCartTotal,
} from "./../Redux/cart/cartSelectors";
import { StyledCheckOut } from "./../styled/StyledCheckOut";
import CheckOutItem from "./../components/CheckOutItem";
import StripeCheckoutButton from "./../components/StripeButton";

function CheckOut({ cartItems, Total }) {
  return (
    <StyledCheckOut>
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckOutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className="total">Total ${Total} </div>
      <div className="test-warring">
        *Please Use the Following test credit Card for Payments*
        <br />
        4242 4242 4242 4242 - Exp: 01/22 - CVV: 123
      </div>
      <StripeCheckoutButton price={Total} />
    </StyledCheckOut>
  );
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  Total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckOut);
