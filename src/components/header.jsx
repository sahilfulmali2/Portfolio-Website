import styles from "./header.module.css";
import React from 'react'; 


const header =() =>{
  return (
    <header >
      <nav className={styles.navbar} id="navbar2">
        <div className={styles.navbar_contain}>
        <div className={styles.lists}>
          <ul >
            <li className="active"><a href="#Home">Home</a></li>
            <li><a href="#AboutME">About Me</a></li>
            <li><a href="#Projects">Projects</a></li>
            <li><a href="#contact">Contact Me</a></li>
          </ul>
        </div>
        </div>
        
      </nav>
    </header>
  )
}

export default header;
