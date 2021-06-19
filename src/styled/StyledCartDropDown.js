import styled from "styled-components";

export const StyledCartDropDown = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid #000;
  background-color: #fff;
  top: calc(80px + 50px);
  right: calc(0px + 50px);
  z-index: 5;

  & > .cart-items {
    height: 240px;
    display: flex;
    flex-direction: column;
    overflow-y: scroll;

    & > .empty-message {
      margin: 50px auto;
      font-size: 120%;
    }
  }

  & > button {
    margin-top: auto;
  }
`;
