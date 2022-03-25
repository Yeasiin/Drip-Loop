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
import { Container } from "./../styled/Container";
import { ReactComponent as Logo } from "./../assets/drip-logo.svg";
import { signOutStart } from "./../Redux/user/userAction";

function Header({ currentUser, hidden, signOutStart }) {
  return (
    <Container>
      <StyledHeaderContainer>
        <Link to="/">
          <Logo />
        </Link>
        <StyledHeaderMenu>
          <li>
            <NavLink to="/shop">Shop</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>

          {currentUser ? (
            <li>
              <div className="btn-logout" onClick={signOutStart}>
                Logout
              </div>
            </li>
          ) : (
            <li>
              <NavLink to="/authenticate">Login</NavLink>
            </li>
          )}
          <li>
            <CartIcon />
          </li>
        </StyledHeaderMenu>
        {hidden ? null : <CartDropDown />}
      </StyledHeaderContainer>
    </Container>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

const mapDispatchToProps = (dispatch) => ({
  signOutStart: () => dispatch(signOutStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
