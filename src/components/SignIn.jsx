import React, { Component } from "react";
import { connect } from "react-redux";
import Button from "./common/Button";
import InputGroup from "./common/InputGroup";
import { FormWarper } from "../styled/StyledForm";
import { ButtonContainer } from "../styled/StyledButton";

import { auth, signInWithGoogle } from "../firebase/firebase.utils";
import {
  googleSignInStart,
  emailSignInStart,
} from "./../Redux/user/userAction";

class SignIn extends Component {
  state = { email: "", password: "" };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const { emailSignInStart } = this.props;
    const { email, password } = this.state;

    emailSignInStart(email, password);
  };

  render() {
    const { googleSignInStart } = this.props;
    console.log("testing", googleSignInStart);
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
            <Button type="submit" value="Sign In" />
            <Button
              onClick={googleSignInStart}
              type="button"
              className="google"
              value="Sign With Google"
            />
          </ButtonContainer>
        </form>
      </FormWarper>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password })),
});

export default connect(null, mapDispatchToProps)(SignIn);
