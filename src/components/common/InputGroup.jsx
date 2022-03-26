import React from "react";
import styled from "styled-components";

function InputGroup({ inputFor, placeHolder, type, handleChange, value }) {
  return (
    <InputGroupWrapper>
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
    </InputGroupWrapper>
  );
}

const InputGroupWrapper = styled.div`
  position: relative;

  & > .input {
    background: none;
    background-color: white;
    color: black;
    font-size: 18px;
    padding: 10px 10px 10px 5px;
    display: block;
    width: 100%;
    border: none;
    border-radius: 0;
    border-bottom: 1px solid gray;
    margin: 25px 0;
  }
  & > .input:focus {
    outline: 0;
  }

  & > .inputLabel {
    color: gray;
    font-size: 18px;
    font-weight: normal;
    position: absolute;
    pointer-events: none;
    left: 5px;
    top: 10px;
    transition: 300ms ease all;
  }

  & > .input:focus ~ .inputLabel {
    top: -14px;
    font-size: 15px;
    color: black;
  }

  & > .inputLabel.shrink {
    top: -14px;
    font-size: 15px;
    color: black;
  }
`;

export default InputGroup;
