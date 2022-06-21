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
import Footer from "./components/Footer";

import { selectCurrentUser } from "./Redux/user/userSelector";
import { checkUserSession } from "./Redux/user/userAction";
// import { Container } from "./styled/Container";

import "./App.css";
import "react-toastify/dist/ReactToastify.css";

import ReactGA from "react-ga4";
ReactGA.initialize("G-R7ZM4V604S");

function App({ checkUserSession, currentUser }) {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  // for google Analytic
  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: window.location.pathname + window.location.search,
    });
  }, []);

  return (
    <>
      <ToastContainer />
      <Header />
      <Switch>
        <Route
          exact
          path="/authenticate"
          render={() => (currentUser ? <Redirect to="/" /> : <Authenticate />)}
        />
        <Route path="/Checkout" component={CheckOut} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/" component={Homepage} />
      </Switch>
      {/* TODO: Add A Footer */}
      <Footer />
    </>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
