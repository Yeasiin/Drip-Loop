import { connect } from "react-redux";
import { ToggleCartHidden } from "./../../Redux/cart/cartAction";
import { selectCartItemsCount } from "./../../Redux/cart/cartSelectors";
import { ReactComponent as CartLogo } from "./../../assets/shopping-bag.svg";
import { StyledShoppingCart } from "./../../styled/StyledShoppingCart";
import { createStructuredSelector } from "reselect";

function CartIcon({ ToggleCartHidden, itemCount }) {
  return (
    <StyledShoppingCart onClick={ToggleCartHidden}>
      <CartLogo className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </StyledShoppingCart>
  );
}

const mapDispatchToProps = (dispatch) => ({
  ToggleCartHidden: () => dispatch(ToggleCartHidden()),
});

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
