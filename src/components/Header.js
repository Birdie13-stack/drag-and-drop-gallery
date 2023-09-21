import React from "react";
import { database } from "../Firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Header() {
  const redirect = useNavigate();

  function logOut() {
    signOut(database).then((data) => {
      console.log(data, "Logging Out");
      redirect("/");
    });
  }
  return (
    <>
      <nav>
        <button onClick={logOut} className="logout">Logout</button>
      </nav>
    </>
  );
}

export default Header;
