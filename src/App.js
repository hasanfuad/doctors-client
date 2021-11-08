import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Appointment from "./components/pages/Appointment/Appointment/Appointment";
import Dashboard from "./components/pages/Dashboard/Dashboard/Dashboard";
import AddDoctor from "./components/pages/Dashboard/Sidebar/AddDoctor/AddDoctor";
import DisplayPatient from "./components/pages/Dashboard/Sidebar/DisplayPatient/DisplayPatient";
import Home from "./components/pages/Home/Home/Home";
import Login from "./components/pages/Login/Login/Login";
import PrivateRoute from "./components/pages/Login/Login/PrivateRoute/PrivateRoute";

export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState([]);
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      {/* <p>Email: {loggedInUser.email}</p> */}
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <PrivateRoute path="/appointment">
            <Appointment />
          </PrivateRoute>
          <Route path="/dashboard/appointment">
            <Dashboard/>
          </Route>
          <Route path="/doctor/appointment">
            <DisplayPatient/>
          </Route>
          <Route path="/doctor/addDoctor">
            <AddDoctor/>
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
