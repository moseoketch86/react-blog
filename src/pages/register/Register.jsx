import React from "react";
import "./register.css";
//register page
function Register() {
  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm">
        <label>Username</label>
        <input
          type="text"
          className="registerInput"
          placeholder="Enter your username"
        />
        <label>email</label>
        <input type="text" placeholder="email" />
        <label>password</label>
        <input type="password" placeholder="password" />
        <button className="loginButton">Login</button>
      </form>
      <button className="LoginRegisterButton">Login</button>
    </div>
  );
}

export default Register;
