import React, { useEffect } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

function Home() {
  const currentUser = auth.currentUser;
  const navigate = useNavigate();

  useEffect(() => {
    auth.onAuthStateChanged(function (user) {
      if (!user) {
        navigate("/Login");
      }
    });
  }, []);

  return (
    <div>
      <h1>This Is Home Page</h1>
      <button onClick={() => signOut(auth)}>Logout</button>
    </div>
  );
}

export default Home;
