import React from "react";
import { NavLink, Link } from "react-router-dom";
import {
  StyledHeaderContainer,
  StyledHeaderMenu,
} from "./../styled/StyledHeader";
import { ReactComponent as Logo } from "./../assets/crown.svg";

export default function Header() {
  return (
    <StyledHeaderContainer>
      <Link to="/">
        <Logo />
      </Link>
      <StyledHeaderMenu>
        <li>
          <NavLink to="/shop">SHOP</NavLink>
        </li>
        <li>
          <NavLink to="/contact">CONTACT</NavLink>
        </li>
        <li>
          <NavLink to="/authenticate">LOG IN</NavLink>
        </li>
      </StyledHeaderMenu>
    </StyledHeaderContainer>
  );
}
