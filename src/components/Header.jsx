import React from "react";
import { NavLink, Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import styled from "styled-components";

import CartIcon from "./common/CartIcon";
import CartDropDown from "./CartDropDown";

import { selectCartHidden } from "./../Redux/cart/cartSelectors";
import { selectCurrentUser } from "./../Redux/user/userSelector";
import { signOutStart } from "./../Redux/user/userAction";

import { Container } from "./../styled/Container";
import { ReactComponent as Logo } from "./../assets/drip-logo.svg";

function Header({ currentUser, hidden, signOutStart }) {
  return (
    <Container>
      <HeaderContainerWrapper>
        <Link to="/">
          <Logo />
        </Link>
        <ul className="header-menu">
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
        </ul>
        {hidden ? null : <CartDropDown />}
      </HeaderContainerWrapper>
    </Container>
  );
}

const HeaderContainerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 15px 0 10px;

  & > .header-menu {
    list-style: none;
    display: flex;
    gap: 25px;
    align-items: center;
    & > li {
      cursor: pointer;
      & > a {
        padding: 10px;
        font-size: 18px;
        color: #4a4a4a;
        display: block;
      }
      & > .btn-logout {
        padding: 10px;
      }
    }
  }
`;

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

const mapDispatchToProps = (dispatch) => ({
  signOutStart: () => dispatch(signOutStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
