import React from "react";
import {
  BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import Home from "./components/pages/Home/Home/Home";
function App() {
  return (
    <Router>
      <Switch>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>

    </Router>
  );
}

export default App;
