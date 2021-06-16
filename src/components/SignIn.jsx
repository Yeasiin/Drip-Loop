import React, { Component } from "react";
import Button from "./common/Button";
import InputGroup from "./common/InputGroup";
import { FormWarper } from "../styled/StyledForm";
import { ButtonContainer } from "../styled/StyledButton";

import { auth, signInWithGoogle } from "../firebase/firebase.utils";

export default class SignIn extends Component {
  state = { email: "", password: "" };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "" });
    } catch (error) {
      console.log(error.message);
    }
  };

  render() {
    return (
      <FormWarper>
        <h2>I already have an account</h2>
        <span> Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <InputGroup
            inputFor="email"
            handleChange={this.handleChange}
            placeHolder="Email Address"
            type="email"
            value={this.state["email"]}
          />
          <InputGroup
            inputFor="password"
            handleChange={this.handleChange}
            placeHolder="Password"
            type="password"
            value={this.state["password"]}
          />
          <ButtonContainer>
            <Button value="Sign In" />
            <Button
              isGoogleSignIn={signInWithGoogle}
              value="Sign With Google"
            />
          </ButtonContainer>
        </form>
      </FormWarper>
    );
  }
}
