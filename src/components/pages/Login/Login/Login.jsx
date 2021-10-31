import "firebase/auth";
// import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import firebase from "firebase/compat/app";
import React, { useContext, useState } from "react";
import { useHistory, useLocation } from "react-router";
import { UserContext } from "../../../../App";
import loginBg from "../../../images/Group 140.png";
import firebaseConfig from "./firebaseConfig";
import "./Login.css";

firebase.initializeApp(firebaseConfig);

const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  let history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: "/" } };

  const [user, setUser] = useState({
    isSignedIn: false,
    username: "",
    email: "",
  });

  const handleSignIn = () => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        const userInfo = {
          isSignedIn: true,
          username: user.displayName,
          email: user.email,
        };
        setUser(userInfo);
        setLoggedInUser(result.user);
        history.replace(from);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  return (
    <main>
      <div className="row mt-5 py-5">
        {/* <div className="col-md-5 offset-md-1">
            <form action="">
              <h2 className="text-center mt-5 py-5">Login</h2>
              <input type="text" value={user.username} />
              <br />
              <input type="password" />
              <br />
              <button
                className="btn mt-4 mx-5 px-5 py-2 main-button loginBtn text-white"
                onClick={handleSignIn}
              >
                Sign In
              </button>
            </form>
          </div> */}
        <div className="row align-items-center" style={{ height: "100vh" }}>
          <div className="col-md-6 shadow p-5">
            <div className="form-group">
              <label htmlFor="">User Name</label>
              <input type="text" className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="">Password</label>
              <input type="password" className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="" className="text-danger">
                Forgot your password?
              </label>
            </div>
            <div className="from-group mt-5">
              <button className="btn main-button" onClick={handleSignIn}>
                Google Sign in
              </button>
            </div>
          </div>
          <div className="col-md-6 d-none d-md-block align-self-end">
            <img className="img-fluid" src={loginBg} alt="" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;
