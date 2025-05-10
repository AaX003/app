import React from "react";
import { FaPaperclip } from "react-icons/fa";
import { Link } from "react-router-dom";
import Projects from "./Projects";

import '../css/Play.css';
function PlayScreen() {
    return (
        <div className="play-screen">
           
            <div className="dialog-box">
            <h1 className="title">Welcome to my portfolio!</h1>
                <Link to="/projects" element={<Projects />}>Go to Projects</Link>
                <Link to="/about">Go to About</Link>
                <Link to="/skills">Go to Skills</Link>
                <Link to="/contact">Go to Contact</Link>
                <a 
                    href="https://docs.google.com/document/d/11ghT86W3mIteNJzsjxKl76xjtuHRVCU4/edit?usp=drive_link&ouid=109467221566104939463&rtpof=true&sd=true"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="resume-button"
                >
                    <FaPaperclip/> Download Resume
                </a>

            </div>

        </div>
    );
};
export default PlayScreen;