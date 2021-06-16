import React from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import { RegisterWarper } from "./../styled/StyledForm";

export default class Authenticate extends React.Component {
  render() {
    return (
      <RegisterWarper>
        <SignIn />
        <SignUp />
      </RegisterWarper>
    );
  }
}
