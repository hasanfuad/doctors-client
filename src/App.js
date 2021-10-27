import React from "react";
import {
  BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import Appointment from "./components/pages/Appointment/Appointment/Appointment";
import Home from "./components/pages/Home/Home/Home";
function App() {
  return (
    <Router>
      <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/appointment">
            <Appointment/>
          </Route>
        </Switch>

    </Router>
  );
}

export default App;
