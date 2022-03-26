import React from "react";
import styled from "styled-components";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

function Authenticate() {
  return (
    <RegisterWarper>
      <SignIn />
      <SignUp />
    </RegisterWarper>
  );
}

const RegisterWarper = styled.div`
  display: flex;
  margin: 20px 100px;
  gap: 200px;
  overflow: hidden;
  justify-content: space-between;
`;
export default Authenticate;
