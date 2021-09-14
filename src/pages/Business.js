import React from "react";
import Businessimg from "../assets/udemybusiness.jpg";
import "../styles/Business.css";
function Business() {
  return (
    <div className="business">
      <div
        className="businessTop"
        style={{ backgroundImage: `url(${Businessimg})` }}
      ></div>
      <div className="businessBottom">
        <h1> Business..</h1>
        <p>
          UdemyBusiness!!!!
        </p>
      </div>
    </div>
  );
}

export default Business;