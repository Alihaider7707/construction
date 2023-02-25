
import Header from "./pages/Header";
import Home from "./pages/Home";

import { Switch, Redirect, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />

        <Redirect to="/" />
      </Switch>
    </>
  );
}

export default App;
