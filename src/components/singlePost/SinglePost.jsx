import React from "react";
import "./singlePost.css";

function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGF3fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
          alt=""
        />
        <h1 className="singlePostTitle">
          post title
          <div className="singlePostEdit">
            <i className=" singlePostIcon fas fa-edit"></i>
            <i className=" singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">OKETCH</span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDescription">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
          sapiente deserunt modi tempore, nihil quas. Impedit est corporis
          veniam numquam tenetur consequuntur non rerum quis sint vitae
          laudantium, molestiae accusantium? Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Praesentium provident, atque accusantium
          suscipit laudantium nam ipsam ullam commodi quia pariatur assumenda
          explicabo alias velit labore repellendus optio at totam id! Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Culpa sapiente
          deserunt modi tempore, nihil quas. Impedit est corporis veniam numquam
          tenetur consequuntur non rerum quis sint vitae laudantium, molestiae
          accusantium? Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Praesentium provident, atque accusantium suscipit laudantium nam ipsam
          ullam commodi quia pariatur assumenda explicabo alias velit labore
          repellendus optio at totam id! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Culpa sapiente deserunt modi tempore, nihil quas.
          Impedit est corporis veniam numquam tenetur consequuntur non rerum
          quis sint vitae laudantium, molestiae accusantium? Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Praesentium provident, atque
          accusantium suscipit laudantium nam ipsam ullam commodi quia pariatur
          assumenda explicabo alias velit labore repellendus optio at totam id!
        </p>
      </div>
    </div>
  );
}

export default SinglePost;
