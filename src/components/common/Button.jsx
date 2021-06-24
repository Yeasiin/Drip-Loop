import { StyledButton } from "./../../styled/StyledButton";

export default function Button(props) {
  return <StyledButton {...props}>{props.value}</StyledButton>;
}
