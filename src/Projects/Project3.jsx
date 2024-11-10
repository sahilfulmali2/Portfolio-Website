// src/components/Projects.jsx
import React from "react";
import styles from "../components/Projects.module.css";
const Project3 = () => {
  return (
    <section className={styles.projectItem} id="Projects">
      <h2>Alumni Meet Website</h2>
      <div className={styles.projectInfo}>
        <p>
          For my college's yearly alumni gathering, I'm creating a feature-rich
          platform for alumni reunions. Alumni can register for the event, view
          event schedules, and keep up with reunion events on this interactive
          website. It makes processing donations and ticket purchases easier
          with an integrated payment gateway and a safe user registration
          process.
          <br />
          <br />
          This project demonstrates my capacity to develop engaging and
          interactive platforms that simplify event planning and facilitate
          meaningful contact between former students and their alma mater.
        </p>
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

export default Project3;
