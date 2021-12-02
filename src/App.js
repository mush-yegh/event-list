import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./components/Home";
import Event from "./components/Event";

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/event">
        <Event />
      </Route>
      <Redirect to="/" />
    </Switch>
  );
}

export default App;
