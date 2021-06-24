import React, { Component } from "react";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import Button from "./common/Button";
import InputGroup from "./common/InputGroup";
import { FormWarper } from "./../styled/StyledForm";
import { ButtonContainer } from "./../styled/StyledButton";
import { signUpStart } from "./../Redux/user/userAction";

class SignUp extends Component {
  state = { displayName: "", email: "", password: "", confirmPassword: "" };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;
    const { signUpStart } = this.props;

    if (password !== confirmPassword) {
      toast.error("Password Didn't Match");
      return;
    }

    signUpStart({ displayName, email, password });
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

const mapDispatchToProps = (dispatch) => ({
  signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials)),
});

export default connect(null, mapDispatchToProps)(SignUp);
