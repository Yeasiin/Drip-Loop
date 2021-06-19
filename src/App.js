import { useEffect } from "react";
import { Route, Switch, Redirect } from "react-router";
import { ToastContainer } from "react-toastify";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { setCurrentUser } from "./Redux/user/userAction";
import Homepage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import CheckOut from "./pages/CheckOut";
import Authenticate from "./components/Authenticate";
import Header from "./components/Header";
import { selectCurrentUser } from "./Redux/user/userSelector";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

import { Container } from "./styled/Container";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";

function App(props) {
  useEffect(() => {
    const unSubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapshot) => {
          props.setCurrentUser({ currentId: snapshot.id, ...snapshot.data() });
        });
      } else {
        props.setCurrentUser(userAuth);
      }
    });

    return () => {
      unSubscribeFromAuth();
    };
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
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
