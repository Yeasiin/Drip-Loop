import styled from "styled-components";

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StyledButton = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  background-color: black;
  color: white;
  text-transform: uppercase;
  font-family: "Open Sans Condensed";
  font-weight: lighter;
  cursor: pointer;
  border: 1px solid transparent;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }

  &.inverter {
    border: 1px solid black;
    background-color: white;
    color: black;
    &:hover {
      background-color: black;
      color: white;
    }
  }

  &.btn-google {
    background-color: #4285f4;
    &:hover {
      border: 1px solid transparent;
      background-color: #357ae8;
      color: #fff;
    }
  }
`;
