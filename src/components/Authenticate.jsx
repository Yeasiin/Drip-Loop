import React from "react";
import Login from "./Login";
import { RegisterWarper } from "./../styled/StyledForm";

export default class Authenticate extends React.Component {
  render() {
    return (
      <RegisterWarper>
        <Login />
        <Login />
      </RegisterWarper>
    );
  }
}
