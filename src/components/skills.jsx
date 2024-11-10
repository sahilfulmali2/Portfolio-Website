import styles from './skills.module.css';


const Skills = () => {
  return (
    <div className={styles.skills_container}>
      <div className={styles.skills_heading}>
        <h1>Skills</h1>
      </div>

      <div className={styles.skills_box}>
        <div className={styles.skill}>
          <h1>Javascript</h1>
          <h2>React Js</h2>
          <h3>CSS</h3>
        </div>
        <div className={styles.skill}>
          <h1>Express Js</h1>
          <h2>Github</h2>
          <h3>C++</h3>
        </div>
        <div className={styles.skill}>
          <h1>Mongo DB</h1>
          <h2>Java</h2>
          <h3>OOP</h3>
        </div>
      </div>
    </div>
  )
}

export default Skills;