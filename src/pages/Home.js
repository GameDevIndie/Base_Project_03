import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/main_udemy.jpg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> Welcome to Udemy </h1>
        <p>Learn the content from all over the World</p>
        <a href="/courses">
          <button> Courses </button>
        </a>
      </div>
    </div>
  );
}

export default Home;