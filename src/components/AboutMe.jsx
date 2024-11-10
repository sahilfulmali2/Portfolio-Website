// src/components/AboutMe.jsx
import styles from "./AboutMe.module.css";
import React from "react";
import "./Home.css";

const AboutMe = () => {
  return (
    <section className="about" id="AboutME">
      <div className="about-container">
        <h1>About Me</h1>
        <div className="internal-container">
          <div className="about-me">
            <p>
              Hi, I'm Sahil Fulmali, a final-year Computer Science student at
              GCOEA Amravati.With a strong foundation in computer science
              principles and a passion for creating dynamic and responsive web
              applications. <br />
              <br />
              In addition to my technical skills, I value teamwork, creativity,
              and continuous improvement. I am always eager to collaborate with
              others, learn new things, and take on challenging projects that
              push my boundaries.
            </p>
            
          </div>
          <div className="links">
            <h1>LINKS</h1>
            <a href="https://github.com/sahilfulmali2" target="_blank">
              <img src="/assets/github_5968866.png" alt="GitHub Profile" />
            </a>
            <a
              href="https://www.linkedin.com/in/sahil-fulmali/"
              target="_blank"
            >
              <img src="/assets/social_12942782.png" alt="LinkedIn Profile" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
