import { StyledButton } from "./../../styled/StyledButton";

export default function Button({ value, isGoogleSignIn, inverter, addItem }) {
  return (
    <StyledButton
      className={`${inverter ? "inverter" : ""} ${
        isGoogleSignIn ? "btn-google" : ""
      }`}
      type="submit"
      onClick={isGoogleSignIn ? isGoogleSignIn : addItem}
    >
      {value}
    </StyledButton>
  );
}
