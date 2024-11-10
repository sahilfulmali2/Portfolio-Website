import styles from "./Projects.module.css";
import Project1 from "../Projects/Project1";
import Project2 from "../Projects/Project2";
import Project3 from "../Projects/Project3";

const Project = () => {
  return (
    <div className={styles.Project}>
      <h1>Projects</h1>
      <div className={styles.Projectlist}>
        <Project1 />
        <Project2 />
        <Project3 />
      </div>
    </div>
  );
};

export default Project;
