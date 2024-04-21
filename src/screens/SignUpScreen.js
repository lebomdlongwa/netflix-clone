import React, { useRef } from "react";
import "./SignUpScreen.css";
import { auth } from "../firebase";
import { useHistory } from "react-router-dom";

function SignInScreen() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  let history = useHistory();

  const register = (event) => {
    event.preventDefault();

    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const signIn = (event) => {
    event.preventDefault();

    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
        history.push("/");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="signUpScreen">
      <form>
        <h1>Sign In</h1>
        <input ref={emailRef} type="email" placeholder="Email Address" />
        <input ref={passwordRef} type="password" placeholder="Password" />
        <button onClick={signIn} type="submit">
          Sign In
        </button>
        <p>
          New to Netfix?
          <span onClick={register} className="signUp">
            Sign Up now
          </span>
        </p>
      </form>
    </div>
  );
}

export default SignInScreen;
