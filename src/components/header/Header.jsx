import React from "react";
import "./header.css";
function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">React & Node</span>
        <span className="headerTitleLg">Blog</span>
      </div>
      <img
        className="headerImg"
        src="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8a2VueWF8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
        alt="blog"
      />
    </div>
  );
}

export default Header;
