import React from "react";
import { StyledInputGroup } from "./../../styled/StyledInputGroup";

export default function InputGroup({
  inputFor,
  placeHolder,
  type,
  handleChange,
  value,
}) {
  return (
    <StyledInputGroup>
      <input
        className="input"
        onChange={handleChange}
        type={type ? `${type}` : "text"}
        name={inputFor}
        id={inputFor}
        value={value}
      />
      <label
        className={`inputLabel${value ? " shrink" : ""}`}
        htmlFor={inputFor}
      >
        {placeHolder}
      </label>
    </StyledInputGroup>
  );
}
