import React from "react";
import { NavLink, Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CartIcon from "./common/CartIcon";
import CartDropDown from "./CartDropDown";
import { selectCartHidden } from "./../Redux/cart/cartSelectors";
import { selectCurrentUser } from "./../Redux/user/userSelector";
import {
  StyledHeaderContainer,
  StyledHeaderMenu,
} from "./../styled/StyledHeader";
import { ReactComponent as Logo } from "./../assets/crown.svg";
import { auth } from "./../firebase/firebase.utils";

function Header({ currentUser, hidden }) {
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
        <li>
          <CartIcon />
        </li>
      </StyledHeaderMenu>
      {hidden ? null : <CartDropDown />}
    </StyledHeaderContainer>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);
