import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import { onAuthStateChanged } from "firebase/auth";
import { database } from "../Firebase";
import { Link } from "react-router-dom";
import ImageContainer from "../components/ImageContainer";

function Gallery() {
  const [error, setError] = useState(null);

  const [authUser, setAuthUser] = useState(null);
  useEffect(() => {
    const listen = onAuthStateChanged(database, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
        setError("User Authentication Failed");
      }
    });
  }, []);

  return (
    <div>
      {error ? (
        <>
          <section>
            <h2>{error}</h2>

            <Link to="/" className="button link">
              Login
            </Link>
          </section>
        </>
      ) : (
        <div className="gallery-page">
          <Header />
          <h1 className="title">ImgHaven</h1>
          <h3>
            <em>Drag</em> and <em>drop</em> images to reposition
          </h3>

          <section className="gallery">
            <ImageContainer />
          </section>
        </div>
      )}
    </div>
  );
}

export default Gallery;
