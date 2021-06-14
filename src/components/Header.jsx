import React from "react";
import { NavLink } from "react-router-dom";
import {
  StyledHeaderContainer,
  StyledHeaderLogo,
  StyledHeaderMenu,
} from "./../styled/StyledHeader";
import { ReactComponent as Logo } from "./../assets/crown.svg";

export default function Header() {
  return (
    <StyledHeaderContainer>
      <StyledHeaderLogo to="/">
        <Logo />
      </StyledHeaderLogo>
      <StyledHeaderMenu>
        <li>
          <NavLink to="/shop">SHOP</NavLink>
        </li>
        <li>
          <NavLink to="/shop">CONTACT</NavLink>
        </li>
      </StyledHeaderMenu>
    </StyledHeaderContainer>
  );
}
