import { useState, useEffect } from "react";
import { Route, Switch } from "react-router";
import { ToastContainer } from "react-toastify";
import Authenticate from "./components/Authenticate";
import Homepage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import Header from "./components/Header";
import { Container } from "./styled/Container";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";

import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unSubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapshot) => {
          setCurrentUser({ currentId: snapshot.id, ...snapshot.data() });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });

    return () => {
      unSubscribeFromAuth();
    };
  }, []);

  return (
    <Container>
      <ToastContainer />
      <Header currentUser={currentUser} />
      <Switch>
        <Route path="/authenticate" component={Authenticate} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/" component={Homepage} />
      </Switch>
    </Container>
  );
}

export default App;
