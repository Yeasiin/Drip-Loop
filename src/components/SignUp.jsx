import React, { Component } from "react";
import { toast } from "react-toastify";
import Button from "./common/Button";
import InputGroup from "./common/InputGroup";
import { FormWarper } from "./../styled/StyledForm";
import { ButtonContainer } from "./../styled/StyledButton";

import { auth, createUserProfileDocument } from "./../firebase/firebase.utils";

export default class SignUp extends Component {
  state = { displayName: "", email: "", password: "", confirmPassword: "" };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      toast.error("Password Didn't Match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDocument(user, { displayName });
      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      alert(error.message);
    }
  };

  render() {
    return (
      <FormWarper>
        <h2>I Do Not Have An Account</h2>
        <span> Sign Up with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <InputGroup
            inputFor="displayName"
            handleChange={this.handleChange}
            placeHolder="Full Name"
            value={this.state["displayName"]}
          />
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
          <InputGroup
            inputFor="confirmPassword"
            handleChange={this.handleChange}
            placeHolder="Confirm Password"
            type="password"
            value={this.state["confirmPassword"]}
          />
          <ButtonContainer>
            <Button value="SIGN UP" />
          </ButtonContainer>
        </form>
      </FormWarper>
    );
  }
}
