import '../css/Intro.css';
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';

function IntroScreen() {
  const [showIntroDialog] = useState(true);
  const [isTypingDone, setIsTypingDone] = useState(false);

  const navigate = useNavigate();

  const handleSkip = () => {
    navigate('/play');
  };

  return (
    <div className="intro-screen">
      {showIntroDialog && (
        <div className="dialog-box">
          <TypeAnimation
            sequence={[
              "Hello, please keep in mind that my portfolio is a WIP.",
              2000,
              "",
              "Some elements are used as placeholders for future content.",
              2000,
              "",
              "Thank you and I hope you enjoy the content🔭.",
              () => setIsTypingDone(true)
            ]}
            wrapper="p"
            cursor={true}
            repeat={0}
            speed={50}
            deletionSpeed={70}
            style={{
              fontSize: "1.5rem",
              fontWeight: "bold",
              color: "#ddeeff",
              textAlign: "center",
              padding: "1rem",
              lineHeight: "1.8",
            }}
          />
          <div className="buttons">
            {isTypingDone ? (
              <button onClick={handleSkip} className="next-btn">Next</button>
            ) : (
              <button onClick={handleSkip} className="skip-btn">Skip</button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default IntroScreen;
