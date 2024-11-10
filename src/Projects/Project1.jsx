// src/components/Projects.jsx
import React from "react";
import styles from "../components/Projects.module.css";

const Project1 = () => {
  return (
    <section className={styles.projectItem} id="Projects">
      <h2>Crime Rate Analyzer</h2>
      <div className={styles.projectInfo}>
        
        <p>For this research, I created a machine learning model that uses socioeconomic data to forecast crime rates in different areas. Considering important metrics like population, average income, and unemployment rates, I collected crime statistics from hundreds of cities and regions.<br></br> <br></br>The underlying premise of this model is that greater crime rates are more likely to occur in areas with higher unemployment and lower average salaries. In order to develop a tool that can offer insights into crime trends and assist decision-makers in concentrating on preventive measures in areas that are susceptible to crime, I trained the model on these indications. </p>
        <span>
          <a href="www.amazon.in" className="project-link">
            {" "}
            View Project{" "}
          </a>
        </span>
      </div>
    </section>
  );
};

export default Project1;
