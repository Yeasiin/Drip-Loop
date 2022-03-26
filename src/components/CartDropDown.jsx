import CartItem from "./CartItem";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import { ToggleCartHidden } from "./../Redux/cart/cartAction";
import { selectCartItems } from "./../Redux/cart/cartSelectors";
import Button from "./common/Button";

function CartDropDown({ cartItems, history, dispatch }) {
  return (
    <Wrapper>
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
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: absolute;
  width: 300px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid #000;
  background-color: #fff;
  top: calc(80px + 50px);
  right: calc(0px + 50px);
  z-index: 5;

  & > .cart-items {
    height: 240px;
    display: flex;
    flex-direction: column;
    overflow-y: scroll;

    & > .empty-message {
      margin: 50px auto;
      font-size: 120%;
    }
  }

  & > button {
    margin-top: auto;
  }
`;

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropDown));
