import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.scss";
import logo from "../assets/instagram-logo.png";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();

    // 🚀 Simulating User Registration (Replace with Backend API)
    console.log("User Signed Up:", { email, username, password });

    // ✅ Redirect to Login Page After Signup
    navigate("/login");
  };

  return (
    <div className="signup-container">
      <img src={logo} alt="Instagram Logo" className="signup-logo" />

      <form onSubmit={handleSignup}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="input-box"
          required
        />
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="input-box"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="input-box"
          required
        />
        <button className="btn" type="submit">
          Sign Up
        </button>
      </form>

      <p className="login-link">
        Already have an account? <span onClick={() => navigate("/")}>Log in</span>
      </p>
    </div>
  );
};

export default Signup;
