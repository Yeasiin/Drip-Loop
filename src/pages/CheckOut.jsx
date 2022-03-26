import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import styled from "styled-components";
import {
  selectCartItems,
  selectCartTotal,
} from "./../Redux/cart/cartSelectors";
import CheckOutItem from "./../components/CheckOutItem";
import StripeCheckoutButton from "./../components/StripeButton";

function CheckOut({ cartItems, Total }) {
  return (
    <Wrapper>
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
    </Wrapper>
  );
}

const Wrapper = styled.div`
  font-size: 20px;
  width: 55%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;

  & > .checkout-header {
    width: 100%;
    padding: 10px 0;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid darkgrey;

    & > .header-block {
      text-transform: capitalize;
      width: 23%;

      &:last-child {
        width: 8%;
      }
    }
  }

  & > .total {
    margin-top: 30px;
    margin-left: auto;
    font-size: 36px;
  }
  & > .test-warring {
    text-align: center;
    color: #868eff;
    font-size: 24px;
    margin-top: 40px;
  }

  & > button {
    margin-left: auto;
    margin-top: 50px;
  }
`;

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  Total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckOut);
