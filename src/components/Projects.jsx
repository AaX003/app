import React from "react";
import '../css/Projects.css';
import PlayScreen from "./PlayScreen";
import { Link } from "react-router-dom";

function Projects() {
  return (
    <div className="project-container">
        <div className="project-dialog-box">
            <h2 className="project-title">Welcome to my Projects Page</h2>
              <Link to="/" element={<PlayScreen />}>Go Home</Link>
        </div>
        <div className="projects-list">
          <div className="project-card">
            <h3>Card Game</h3>
            <p>React</p>
            <a href="https://high-low-delta.vercel.app/">Go</a>
          </div>
          <div className="project-card">
            <h3>Habit Tracker</h3>
            <p>React</p>
            <a href="https://aax003-habit-tracker.netlify.app">Go</a>
          </div>
          <div className="project-card">
            <h3>Task Manager</h3>
            <p>AngularJS</p>
            <a href="https://task-m9ffz0mkg-aaxanahs-projects.vercel.app/">Go</a>
          </div>
          <div className="project-card">
            <h3>Memory Game</h3>
            <p>React</p>
            <a href="https://aax-memory-game.netlify.app/">Go</a>
          </div>
          <div className="project-card">
            <h3>RPS</h3>
            <p>React</p>
            <a href="https://aax-rps-game.netlify.app/">Go</a>
          </div>
        </div>
      </div>
  );
}

export default Projects;
