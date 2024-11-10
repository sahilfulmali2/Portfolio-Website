import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <h1>Copyright 2023</h1>
      <p>Desined by SAHIL FULMALI</p>
      <h2>sfulmali2907n@gmail.com</h2>
      <div>
        <a href="https://www.instagram.com/sahil_fulmali7" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-instagram"> Instagram</i>
        </a>
        <a href="https://x.com/Sahil_Fulmali7?t=JYT-h93KNsqETjP3wUQPVw&s=09" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-twitter"> Twitter</i>
        </a>
      </div>
    </div>
  );
};

export default Footer;
