import React from "react";
import "./login.css";

function Login() {
  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm">
        <label>email</label>
        <input type="text" placeholder="email" />
        <label>password</label>
        <input type="password" placeholder="password" />
        <button className="loginButton">Login</button>
      </form>
      <button className="LoginRegisterButton">Register</button>
    </div>
  );
}

export default Login;
