import React from "react";
import { StyledInputGroup } from "./../../styled/StyledInputGroup";

export default function InputGroup({
  inputFor,
  placeHolder,
  type,
  handleChange,
}) {
  return (
    <StyledInputGroup>
      <input
        className="input"
        onChange={handleChange}
        type={type ? { type } : "text"}
        name={inputFor}
        id={inputFor}
      />
      <label className="inputLabel" htmlFor={inputFor}>
        {placeHolder}
      </label>
    </StyledInputGroup>
  );
}
