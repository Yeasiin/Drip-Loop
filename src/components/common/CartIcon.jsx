import { connect } from "react-redux";
import { ToggleCartHidden } from "./../../Redux/cart/cartAction";
import { ReactComponent as CartLogo } from "./../../assets/shopping-bag.svg";
import { StyledShoppingCart } from "./../../styled/StyledShoppingCart";

function CartIcon({ ToggleCartHidden }) {
  return (
    <StyledShoppingCart onClick={ToggleCartHidden}>
      <CartLogo className="shopping-icon" />
      <span className="item-count">0</span>
    </StyledShoppingCart>
  );
}

const mapDispatchToProps = (dispatch) => ({
  ToggleCartHidden: () => dispatch(ToggleCartHidden()),
});

export default connect(null, mapDispatchToProps)(CartIcon);
