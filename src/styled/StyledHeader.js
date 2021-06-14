import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const StyledHeaderLogo = styled(Link)``;
export const StyledHeaderMenu = styled.ul`
  list-style: none;
  display: flex;
  gap: 30px;
  & > li {
    & > a {
        font-size: 18px;
        color:#4a4a4a;
        
    }
  }
`;
