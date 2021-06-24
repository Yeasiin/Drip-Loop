import React, { useState } from "react";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import Button from "./common/Button";
import InputGroup from "./common/InputGroup";
import { FormWarper } from "./../styled/StyledForm";
import { ButtonContainer } from "./../styled/StyledButton";
import { signUpStart } from "./../Redux/user/userAction";

function SignUp({ signUpStart }) {
  const [signUpCredential, setSignUpCredential] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const { displayName, email, password, confirmPassword } = signUpCredential;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignUpCredential({ ...signUpCredential, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error("Password Didn't Match");
      return;
    }
    signUpStart({ displayName, email, password });
  };

  return (
    <FormWarper>
      <h2>I Do Not Have An Account</h2>
      <span> Sign Up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <InputGroup
          inputFor="displayName"
          handleChange={handleChange}
          placeHolder="Full Name"
          value={displayName}
        />
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
        <InputGroup
          inputFor="confirmPassword"
          handleChange={handleChange}
          placeHolder="Confirm Password"
          type="password"
          value={confirmPassword}
        />
        <ButtonContainer>
          <Button value="SIGN UP" />
        </ButtonContainer>
      </form>
    </FormWarper>
  );
}

const mapDispatchToProps = (dispatch) => ({
  signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials)),
});

export default connect(null, mapDispatchToProps)(SignUp);
