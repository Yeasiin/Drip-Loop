import React from "react";
import { NavLink, Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  StyledHeaderContainer,
  StyledHeaderMenu,
} from "./../styled/StyledHeader";
import { ReactComponent as Logo } from "./../assets/crown.svg";
import { auth } from "./../firebase/firebase.utils";

function Header({ currentUser }) {
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

        {currentUser ? (
          <li>
            <div className="btn-logout" onClick={() => auth.signOut()}>
              LOG OUT
            </div>
          </li>
        ) : (
          <li>
            <NavLink to="/authenticate">LOG IN</NavLink>
          </li>
        )}

        {/* <li>
          <NavLink to="/authenticate">
            {currentUser ? "LOG OUT" : "LOG IN"}
          </NavLink>
        </li> */}
      </StyledHeaderMenu>
    </StyledHeaderContainer>
  );
}

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(Header);
