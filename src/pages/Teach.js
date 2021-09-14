import React from "react";
import Teachimg from "../assets/teach.jpg";
import "../styles/Teach.css";
function Teach() {
  return (
    <div className="teach">
      <div
        className="teachTop"
        style={{ backgroundImage: `url(${Teachimg})` }}
      ></div>
      <div className="teachBottom">
        <h1> Teach</h1>
        <p>
          Teach on Udemy
        </p>
      </div>
    </div>
  );
}

export default Teach;