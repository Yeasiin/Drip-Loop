import { StyledButton } from "./../../styled/StyledButton";

export default function Button(props) {
  const { value, isGoogleSignIn, addItem } = props;
  return (
    <StyledButton
      {...props}
      type="submit"
      onClick={isGoogleSignIn ? isGoogleSignIn : addItem}
    >
      {value}
    </StyledButton>
  );
}
