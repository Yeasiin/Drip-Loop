import { Route, Switch } from "react-router";
import Homepage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import Header from "./components/Header";
import { Container } from "./styled/Container";
import "./App.css";

function App() {
  return (
    <Container>
      <Header />
      <Switch>
        <Route path="/shop" component={ShopPage} />
        <Route path="/" component={Homepage} />
      </Switch>
    </Container>
  );
}

export default App;
