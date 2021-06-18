import CartItem from "./CartItem";
import { connect } from "react-redux";
import { selectCartItems } from "./../Redux/cart/cartSelectors";
import { StyledCartDropDown } from "./../styled/StyledCartDropDown";
import Button from "./common/Button";

function CartDropDown({ cartItems }) {
  return (
    <StyledCartDropDown>
      <div className="cart-items">
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} cartItem={cartItem} />
        ))}
      </div>
      <Button value="GO TO CHECKOUT" />
    </StyledCartDropDown>
  );
}

const mapStateToProps = (state) => ({ cartItems: selectCartItems(state) });

export default connect(mapStateToProps)(CartDropDown);
