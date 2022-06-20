import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import React from "react";
// import ReactDOM from "react-dom";
import "./index.css";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />

        {/* <Redirect to="/thankyou" element={ThankYou} /> */}
      </Routes>
    </Router>
  );
}

export default App;
