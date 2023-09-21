import React, { useState } from "react";
import camera from "../assets/camera.jpg";
import { Link, useNavigate } from "react-router-dom";
import { database } from "../Firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

function Login() {
  const redirect = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    // signInWithEmailAndPassword(database, email, password).then((data) => {
    //   console.log(data, "Authdata");
    //   redirect("/gallery");
    // });
    signInWithEmailAndPassword(database, email, password).then((data) => {
      console.log(data, "Authdata");
      redirect("/gallery");
    }).catch((err) => alert(err));
  }

  return (
    <div className="loginpage">
      <div className="login">
        <img src={camera} alt="" />
        <form onSubmit={handleSubmit}>
          <h1>Login</h1>
          <label htmlFor="username" className="lab">Username</label>
          <input
            type="email"
            name="email-password"
            id="email"
            placeholder="Username"
            className="box"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="password" className="lab">Password</label>
          <input
            type="password"
            name="email-password"
            id="password"
            placeholder="Password"
            className="box"
            onChange={(e) => setPassword(e.target.value)}
          />
          <label htmlFor="accept">
            <input type="checkbox" name="accept" id="accept" />
            Accept Terms & Conditions
            <button type="submit" className="button link">
              Login
            </button>
          </label>

          <p className="sign">Not signed up? Sign Up here</p>

          {/* <button className="button">Signup</button> */}
          <Link to="/sign-up" className="button link">
            Sign Up
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Login;
