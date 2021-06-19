import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectCartItems,
  selectCartTotal,
} from "./../Redux/cart/cartSelectors";
import { StyledCheckOut } from "./../styled/StyledCheckOut";

function CheckOut({ cartItems, hidden }) {
  return (
    <StyledCheckOut>
      <h2>Hello</h2>
    </StyledCheckOut>
  );
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  Total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckOut);
