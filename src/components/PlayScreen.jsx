import React from "react";
import { Link } from "react-router-dom";
import Projects from "./Projects";

import '../css/Play.css';
function PlayScreen() {
    return (
        <div className="play-screen">
            <span className="ufo">🛸</span>
            <div className="dialog-box">
            <h1 className="title">Welcome to my portfolio!</h1>
                <Link to="/projects" element={<Projects />}>Go to Projects</Link>
                <Link to="/about">Go to About</Link>
                <Link to="/skills">Go to Skills</Link>
                <Link to="/contact">Go to Contact</Link>
            </div>
        </div>
    );
};
export default PlayScreen;