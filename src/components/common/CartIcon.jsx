import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import styled from "styled-components";
import { ToggleCartHidden } from "./../../Redux/cart/cartAction";
import { selectCartItemsCount } from "./../../Redux/cart/cartSelectors";
import { ReactComponent as CartLogo } from "./../../assets/shopping-bag.svg";

function CartIcon({ ToggleCartHidden, itemCount }) {
  return (
    <ShoppingCartWrapper onClick={ToggleCartHidden}>
      <CartLogo className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </ShoppingCartWrapper>
  );
}

const ShoppingCartWrapper = styled.div`
  height: 45px;
  width: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  & > .shopping-icon {
    height: 24px;
    width: 24px;
  }
  & > .item-count {
    position: absolute;
    font-size: 10px;
    font-weight: bold;
    bottom: 12px;
    user-select: none;
  }
`;

const mapDispatchToProps = (dispatch) => ({
  ToggleCartHidden: () => dispatch(ToggleCartHidden()),
});

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
