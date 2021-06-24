import React, { useEffect } from "react";
import { Route, Switch, Redirect } from "react-router";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { ToastContainer } from "react-toastify";

import Homepage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import CheckOut from "./pages/CheckOut";
import Authenticate from "./components/Authenticate";
import Header from "./components/Header";

import { selectCurrentUser } from "./Redux/user/userSelector";
import { checkUserSession } from "./Redux/user/userAction";
import { Container } from "./styled/Container";

import "./App.css";
import "react-toastify/dist/ReactToastify.css";

function App(props) {
  useEffect(() => {
    props.checkUserSession();
  }, []);

  return (
    <Container>
      <ToastContainer />
      <Header />
      <Switch>
        <Route
          exact
          path="/authenticate"
          render={() =>
            props.currentUser ? <Redirect to="/" /> : <Authenticate />
          }
        />
        <Route path="/Checkout" component={CheckOut} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/" component={Homepage} />
      </Switch>
    </Container>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
