import React, { useState } from "react";
import { connect } from "react-redux";
import Button from "./common/Button";
import InputGroup from "./common/InputGroup";
import { FormWarper } from "../styled/StyledForm";
import { ButtonContainer } from "../styled/StyledButton";
import {
  googleSignInStart,
  emailSignInStart,
} from "./../Redux/user/userAction";

function SignIn({ emailSignInStart, googleSignInStart }) {
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
  });

  const { email, password } = userCredentials;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    emailSignInStart(email, password);
  };

  return (
    <FormWarper>
      <h2>I already have an account</h2>
      <span> Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <InputGroup
          inputFor="email"
          handleChange={handleChange}
          placeHolder="Email Address"
          type="email"
          value={email}
        />
        <InputGroup
          inputFor="password"
          handleChange={handleChange}
          placeHolder="Password"
          type="password"
          value={password}
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

const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password })),
});

export default connect(null, mapDispatchToProps)(SignIn);
