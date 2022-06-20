import React, { useEffect } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useState } from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";

function Login() {
  const [error, setError] = useState(false);
  const currentUser = auth.currentUser;
  const navigate = useNavigate();

  useEffect(() => {
    auth.onAuthStateChanged(function (user) {
      if (user) {
        navigate("/");
      }
    });
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(
      auth,
      e.target.email.value,
      e.target.password.value
    )
      .then((userCredential) => {
        const user = userCredential.user;
        alert("Login Complete");
        navigate("/");
      })
      .catch((error) => {
        setError(true);
        console.log("Error", error);
        // ..
      });
  };
  return (
    <div>
      <div className="login">
        <form onSubmit={handleLogin}>
          <h1 className="heading">Login</h1>
          <input type="email" name="email" placeholder="email" />
          <input type="password" name="password" placeholder="password" />
          <button
            // onChange={(onSubmit = { handleLogin })}
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
    </div>
  );
}

export default Login;
