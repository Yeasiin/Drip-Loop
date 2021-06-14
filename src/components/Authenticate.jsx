import React from "react";
import InputGroup from "./common/InputGroup";

export default function Authenticate() {
  return (
    <div>
      <form style={{ width: "300px" }}>
        <InputGroup inputFor="email" placeHolder="Email Address" type="email" />
        <InputGroup inputFor="password" placeHolder="Password" />
      </form>
    </div>
  );
}
