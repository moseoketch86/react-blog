import React from "react";
import "./write.css";

function Write() {
  return (
    <div className="write">
      <img
        className="writeImage"
        src="https://st.depositphotos.com/1006197/3275/i/600/depositphotos_32753043-stock-photo-law-concept.jpg"
        alt=""
      />
      <form className="writeForm">
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className=" writeIcon fas fa-plus-square"></i>
          </label>
          <input type="file" id="fileInput" style={{ display: "none" }} />
          <input
            type="text"
            placeholder="Title"
            className="writeInput"
            autoFo
            cus={true}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            className="writeInput WriteText"
            placeholder="Tell your story"
            type="text"
          ></textarea>
        </div>
        <button className="writeSubmit">PUBLISH</button>
      </form>
    </div>
  );
}

export default Write;
