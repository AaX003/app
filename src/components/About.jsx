import React from "react";
import '../css/About.css';
import PlayScreen from "./PlayScreen";
import { Link } from "react-router-dom";

function About() {
  
  return (
  <div className="about-container">
    <div className="about-dialog-box">
      <h1>About Me👽</h1>
      <Link to="/play" element={<PlayScreen />}>Go Home</Link>
    </div>
    <div className="terminal-frame">
      <div className="terminal-header">
        <span className="dot pink"></span>
        <span className="dot yellow"></span>
        <span className="dot green"></span>
        <span className="terminal-title">~/aaxanah_portfolio.jsx</span>
      </div>
      <div className="terminal-body">
        <p>import &#123; AaXanah Hill &#125; from "Virginia";</p>
        <br />
        <p>const aboutMe = () =&gt; &#123;</p>
        <p> &nbsp;&nbsp;return (</p>
        <p> &nbsp;&nbsp;&nbsp;&nbsp;<span className="emoji">💖</span> "Hi! I'm AaXanah!" &#47;&#47; Name</p>
        <p> &nbsp;&nbsp;&nbsp;&nbsp;<span className="emoji">💻</span> "Full-Stack Developer" &#47;&#47; Title</p>
        <p> &nbsp;&nbsp;&nbsp;&nbsp;<span className="emoji">🎮</span> "Web + Game Dev" &#47;&#47; Interests</p>
        <p> &nbsp;&nbsp;&nbsp;&nbsp;<span className="emoji">✨</span> "React + Python + Angular" &#47;&#47; Skills</p>
        <p> &nbsp;&nbsp;);</p>
        <p>&#125;;</p>
      </div>
    </div>
</div>
  );
};

export default About;