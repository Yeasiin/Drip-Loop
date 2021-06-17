import { useEffect } from "react";
import { Route, Switch, Redirect } from "react-router";
import { ToastContainer } from "react-toastify";
import { connect } from "react-redux";
import Authenticate from "./components/Authenticate";
import Homepage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import Header from "./components/Header";
import { setCurrentUser } from "./Redux/user/userAction";
import { Container } from "./styled/Container";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";

import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

function App(props) {
  // const [currentUser, setCurrentUser] = useState(null);

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
            props.currentUser ? <Redirect to="/notFound" /> : <Authenticate />
          }
        />
        <Route path="/shop" component={ShopPage} />
        <Route path="/" component={Homepage} />
      </Switch>
    </Container>
  );
}

const mapStateToProps = ({ user }) => ({ currentUser: user.currentUser });

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
