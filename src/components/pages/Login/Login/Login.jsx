import "firebase/auth";
// import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import firebase from "firebase/compat/app";
import React, { useContext, useState } from "react";
import { useHistory, useLocation } from "react-router";
import { UserContext } from "../../../../App";
import firebaseConfig from "./firebaseConfig";

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
        // const userInfo = {
        //   isSignedIn: true,
        //   username: user.displayName,
        //   email: user.email,
        // };
        // console.log(userInfo);

        setLoggedInUser(user);
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
      <div className="text-center">
        <h2>Sign in with Google!</h2>
        {/* {user.isSignedIn && (
          <div>
            <h2>Welcome {user.username.toUpperCase()}</h2>
            <br />
            <p>Email: {user.email}</p>
          </div>
        )} */}
        <button className="btn main-button text-white" onClick={handleSignIn}>
          Sign In
        </button>
      </div>
    </main>
  );
};

export default Login;
