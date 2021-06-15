import styled from "styled-components";

export const StyledHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const StyledHeaderMenu = styled.ul`
  list-style: none;
  display: flex;
  gap: 25px;
  & > li {
    cursor: pointer;
    & > a {
      padding: 10px;
      font-size: 18px;
      color: #4a4a4a;
      display:block;
    }
    & > .btn-logout {
      padding: 10px;
    }
  }
`;
