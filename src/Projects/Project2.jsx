// src/components/Projects.jsx
import React from 'react';
import styles from "../components/Projects.module.css";
const Project2 = () => {
  return (
    <section className={styles.projectItem} id="Projects">
      <h2>Bloging Platform</h2>
      <div className={styles.projectInfo}>
        
        <p>This project is a fully functional blogging platform that was constructed with the MERN stack (Node.js, MongoDB, Express, and React). In order to create, amend, and remove blog entries, users must first register, log in, and authenticate securely. 
          
          <br /> <br />A secure and customised experience is guaranteed by strong authentication procedures that safeguard each user's data. My ability to create engaging, user-focused apps with safe login and authentication capabilities is demonstrated by this platform.</p>
        <span>
          <a href="#" className="project-link">
            {" "}
            View Project{" "}
          </a>
        </span>
      </div>
    </section>
  );
};

export default Project2;
