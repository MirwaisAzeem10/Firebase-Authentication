import React, { useEffect } from "react";
import "./signup.css";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();
  // const navigate = useNavigate();
  const [error, setError] = useState(false);

  const currentUser = auth.currentUser;
  useEffect(() => {
    auth.onAuthStateChanged(function (user) {
      if (user) {
        navigate("/");
      }
    });
  }, []);

  const handleSignup = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(
      auth,
      e.target.email.value,
      e.target.password.value
    )
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        alert("Sign Up Complete");
        navigate("/Login");

        // console.log("You Are Login");
      })
      .catch((error) => {
        setError(true);

        // ..
      });
  };
  return (
    <div className="login">
      <form onSubmit={handleSignup}>
        <h1 className="heading">Sign Up</h1>
        <input type="email" name="email" placeholder="email" />
        <input type="password" name="password" placeholder="password" />
        <button
          type="submit"
          style={{
            backgroundColor: "purple",
            color: "white",
            height: "30px",
            fontSize: "larger",
          }}
        >
          Login
        </button>
        <span></span>
      </form>
    </div>
  );
}

export default Signup;
