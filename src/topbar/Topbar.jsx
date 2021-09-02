import React from "react";
import "./topbar.css";
function Topbar() {
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fab fa-facebook"></i>
        <i className="topIcon fab fa-twitter"></i>
        <i classNmae="topIcon fab fa-linkedin"></i>
        <i className=" topIcon fab fa-instagram"></i>
      </div>
      <div className="topCenter">
        <ul className="toplist">
          <li className="listItems">HOME</li>
          <li className="listItems">ABOUT</li>
          <li className="listItems">CONTACT</li>
          <li className="listItems">WRITE</li>
          <li className="listItems">LOGOUT</li>
        </ul>
      </div>
      <div className="topRight">
        <i className=" topImage fas fa-user-alt"></i>
        <i className=" topSearch fas fa-search"></i>
      </div>
    </div>
  );
}

export default Topbar;
