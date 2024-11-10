// src/components/Home.jsx
import "./Home.css";
import React from 'react';


const Home = () => {
  return (
    <section className="home" id="Home">
      <div className="homecontent">
        <h1>Hi, I'm Sahil</h1>
        <h3>Web Developer</h3>
        
        <div className="btn-box">
          <a href="#" className="download-button">Download Resume</a>
          <a href="#contact">Contact Me</a>
        </div>
      </div>
      <div className="profile-image">
        <img src="/assets/Home_Page_2_Photo.png" alt="Image" />
      </div>
    </section>
  );
};

export default Home;
