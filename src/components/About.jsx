import React from "react";
import '../css/About.css';
import PlayScreen from "./PlayScreen";
import { Link } from "react-router-dom";

function About() {
  
  return (
  <div className="about-container">
    <div className="about-dialog-box">
      <h1>About Me</h1>
      <Link to="/" element={<PlayScreen />}>Go Home</Link>
    </div>
    <div className="about-content">
      <div className="origin">
        <h3>Origin:</h3>
          <p>- AaXanah</p>
          <p>- Virginia</p>
          <p>- African American</p>
          <p>- Female</p>
      </div>
      <div className="goals">
        <h3>Goals:</h3>
          <p>- Develop practical and enjoyable apps</p>
          <p>- Teach others</p>
          <p>- Continue strengthening my skills</p>
      </div>
      <div className="passions">
        <h3>Passions:</h3>
          <p>- Art</p>
          <p>- Coding</p>
          <p>- Game Development</p>
          <p>- Web Development</p>
          <p></p>
      </div>
  </div>
</div>
  );
};

export default About;