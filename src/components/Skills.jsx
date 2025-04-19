import React from "react";
import '../css/Skills.css';
import PlayScreen from "./PlayScreen";
import { Link } from "react-router-dom";
import { FaPython, FaReact, FaAngular, FaHtml5, FaCss3Alt, FaJsSquare, FaGithub, FaNodeJs } from 'react-icons/fa';

function Skills() {
  return (
    <div className="skills-container">
        <div className="skills-dialog-box">
            <h2 className="skills-title">Welcome to my Skills Page</h2>
            <Link to="/play" element={<PlayScreen />}>Go Home</Link>
        </div>
          <div className="skills-list">
            <div className="skill-item"><FaPython /> <span>Python</span></div>
            <div className="skill-item"><FaAngular /> <span>Angular</span></div>
            <div className="skill-item"><FaReact /> <span>React</span></div>
            <div className="skill-item"><FaHtml5 /> <span>HTML</span></div>
            <div className="skill-item"><FaCss3Alt /> <span>CSS</span></div>
            <div className="skill-item"><FaJsSquare /> <span>JavaScript</span></div>
            <div className="skill-item"><FaGithub /> <span>GitHub</span></div>
            <div className="skill-item"><FaNodeJs /> <span>Node.js</span></div>
        </div>
      </div>
  );
}

export default Skills;