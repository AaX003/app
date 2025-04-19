import React from "react";
import '../css/Contact.css';
import PlayScreen from "./PlayScreen";
import { Link } from "react-router-dom";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { CiCloud } from "react-icons/ci";

function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-dialog-box">
        <h2 className="contact-title">Reach out</h2>
        <Link to="/play" element={<PlayScreen />}>Go Home</Link>
      </div>

      <div className="contact-list">
        <a
          href="mailto:aaxanah.hill@outlook.com"
          className="contact-link email"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaEnvelope className="icon" />
          aaxanah.hill@outlook.com
        </a>

        <a
          href="https://github.com/AaX003"
          className="contact-link github"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="icon" />
          github.com/AaX003
        </a>

        <a
          href="https://www.linkedin.com/in/aaxanah-hill-79991431a/"
          className="contact-link linkedin"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="icon" />
          www.linkedin.com/aaxanah-hill-79991431a
        </a>
        <a 
          href="mailto:bitsybaby03@icloud.com"
          className="contact-link icloud"
          target="_blank"
          rel="noopener noreferrer"
        >
          <CiCloud className="icon"/>
          bitsybaby03@icloud.com
        </a>
      </div>
    </div>
  );
}

export default Contact;
