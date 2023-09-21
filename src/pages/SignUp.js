import React, { useState } from "react";
import camera from "../assets/camera.jpg";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
// import Login from "./Login";
import { database } from "../Firebase";

function SignUp() {
  const redirect = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    createUserWithEmailAndPassword(database, email, password).then((data) => {
      console.log(data, "Authdata");
      redirect("/");
    });
  }

  return (
    <div className="login">
      <img src={camera} alt="" />
      <form onSubmit={handleSubmit}>
        <h1>Signup</h1>
        {/* <label htmlFor="name"> Name</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Enter your full name"
          className="box"
        /> */}

        <label htmlFor="username" className="lab"> Username</label>
        <input
          type="email"
          name="email-password"
          id="username"
          placeholder="Enter your username"
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
        </label>
        <button className="button" type="submit">
          Signup
        </button>
        <Link to="/" className="button link">
          Login
        </Link>

        {/* <p className="sign">Not signed up? Sign Up here</p> */}
      </form>
    </div>
  );
}

export default SignUp;
