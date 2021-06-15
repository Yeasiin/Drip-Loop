import { useState, useEffect } from "react";
import { Route, Switch } from "react-router";
import Authenticate from "./components/Authenticate";
import Homepage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import Header from "./components/Header";
import { Container } from "./styled/Container";
import "./App.css";

import { auth } from "./firebase/firebase.utils";

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unSubscribeFromAuth = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      console.log(currentUser);
    });
    return () => {
      unSubscribeFromAuth();
    };
  }, [currentUser]);

  return (
    <Container>
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
