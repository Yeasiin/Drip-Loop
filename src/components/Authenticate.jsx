import React from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import { RegisterWarper } from "./../styled/StyledForm";

export default function Authenticate() {
  return (
    <RegisterWarper>
      <SignIn />
      <SignUp />
    </RegisterWarper>
  );
}
