import React, { useState } from "react";
import "./LoginScreen.css";
import SignUpScreen from "./SignUpScreen";

function LoginScreen() {
  const [signIn, setSignIn] = useState(false);

  return (
    <div className="loginScreen">
      <div className="loginScreen__background">
        <img
          className="netflix__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
          alt=""
        />
        <button onClick={() => setSignIn(true)} className="sign__in">
          Sign In
        </button>
        <div className="loginScreen__gradient"></div>

        <div className="welcome__container">
          {signIn ? (
            <SignUpScreen />
          ) : (
            <div className="welcome">
              <h2>Unlimited films, TV programmes and more.</h2>
              <p className="second__line">
                Watch anywhere. Cancel at any time.
              </p>
              <p className="third__line">
                Ready to watch? Enter your email to create or restart your
                membership
              </p>
              <div className="searchBar">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="input"
                />
                <button
                  onClick={() => setSignIn(true)}
                  className="search__button"
                >
                  GET STARTED
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default LoginScreen;
