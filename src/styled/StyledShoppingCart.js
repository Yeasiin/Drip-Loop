import styled from "styled-components";

export const StyledShoppingCart = styled.div`
  height: 45px;
  width: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  & > .shopping-icon {
    height: 24px;
    width: 24px;
  }
  & > .item-count {
    position: absolute;
    font-size: 10px;
    font-weight: bold;
    bottom: 12px;
    user-select: none;
  }
`;
