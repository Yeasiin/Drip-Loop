import { StyledButton } from "./../../styled/StyledButton";

export default function Button(props) {
  const { value, isGoogleSignIn, addItem } = props;
  console.log({ ...props });
  return <StyledButton {...props}>{value}</StyledButton>;
}
