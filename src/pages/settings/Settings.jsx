import React from "react";
import "./settings.css";
import Sidebar from "../../components/sidebar/Sidebar";

function Settings() {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update your account</span>
          <span className="settingsDeleteTitle">Detete your account</span>
        </div>
        <form className="settingsForm">
          <label>Profile picture</label>
          <div className="settingsProfilePic">
            <img
              src="https://images.unsplash.com/photo-1546456073-ea246a7bd25f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YmxhY2slMjBtYW58ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
              alt=""
            />
            <label htmlFor="fileInput">
              <i className=" settingsPPIcon far fa-user"></i>
            </label>
            <input type="file" id="fileInput" style={{ display: "none" }} />
          </div>
          <label>Username</label>
          <input type="text" placeholder="moses" />
          <label>Email</label>
          <input type="email" placeholder="email" />
          <label> Password</label>
          <input type="password" />
          <button className="settingsSubmit">Update</button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
}

export default Settings;
