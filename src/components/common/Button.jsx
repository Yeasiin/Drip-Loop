import { StyledButton } from "./../../styled/StyledButton";

export default function Button(props) {
  const { value, isGoogleSignIn, inverter, addItem } = props;
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
