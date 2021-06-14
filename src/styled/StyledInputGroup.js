import styled from "styled-components";

export const StyledInputGroup = styled.div`
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
