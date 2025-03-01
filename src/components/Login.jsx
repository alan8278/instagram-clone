import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import logo from "../assets/instagram-logo.png"
import "./Login.scss";
import fblogo from "../assets/fb-icon.png"

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    // Dummy authentication check (Replace this with actual backend authentication)
    if (email === "test@example.com" && password === "password") {
      alert("Login Successful!");
      navigate("/home"); // ✅ Redirect to Home Page
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-container">
      <img src={logo} alt="" className="login-logo" />
      <form onSubmit={handleLogin}>
        <input type="email" placeholder="Phone number,email,or username" value={email} onChange={(e) => setEmail(e.target.value)} className="input-box"/>
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="input-box"/>
        <button className="btn" type="submit">Log in</button >
      </form>
      <h4 className="orsection">OR</h4>
      <div className="fbsection">
        <img src={fblogo} alt="" className="fb_logo" />
        <p className="fb">Log in with facebook</p>
      </div>
      <p className="forget">Forget password?</p>
      </div>
      <div className="signup">
        <p className="account">Don't have an account?</p>
        <p className="signup1">signup</p>
      </div>
      </div>
    
  );
};

export default Login;
