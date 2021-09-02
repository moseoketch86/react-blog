import React from "react";
import "./sidebar.css";
function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src="https://images.unsplash.com/photo-1546456073-ea246a7bd25f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YmxhY2slMjBtYW58ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
          alt=""
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit eligendi,
          non optio quas suscipit dolorem debitis aliquid. Voluptatibus soluta
          error non provident distinctio corrupti praesentium eaque nam, eum
          cumque laboriosam!
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">Life</li>
          <li className="sidebarListItem">Law</li>
          <li className="sidebarListItem">Tech</li>
          <li className="sidebarListItem">Relligion</li>
          <li className="sidebarListItem">Sports</li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW ME</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook"></i>
          <i className="sidebarIcon fab fa-twitter"></i>
          <i classNmae=" sidebarIcon fab fa-linkedin"></i>
          <i className=" sidebarIcon fab fa-instagram"></i>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
