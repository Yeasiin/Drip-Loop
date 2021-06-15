import { StyledButton } from "./../../styled/StyledButton";

export default function Button({ value, isGoogleSignIn }) {
  return (
    <StyledButton
      className={isGoogleSignIn ? "btn-google" : ""}
      type="submit"
      onClick={isGoogleSignIn}
    >
      {value}
    </StyledButton>
  );
}
