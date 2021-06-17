import { StyledCartDropDown } from "./../styled/StyledCartDropDown";
import Button from "./common/Button";

export default function CartDropDown() {
  return (
    <StyledCartDropDown>
      <div className="cart-items">ok </div>
      <Button value="GO TO CHECKOUT" />
    </StyledCartDropDown>
  );
}
