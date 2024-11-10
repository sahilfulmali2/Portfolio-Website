import Header from "./components/header";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Project from "./components/Projects";
import Skills from "./components/skills";
import ContactForm from "./components/ContactForm";
import ImageSlider from "./components/ImageSlider";
import Footer from "./components/Footer";
import '@fortawesome/fontawesome-free/css/all.min.css';

import "./App.css";

function App() {
  return (
    <>
      <Header/>
      <Home />
      <AboutMe />
      <Project/>
      <Skills/>
      <ContactForm/>
      {/* <ImageSlider /> */}
      <Footer/>

    </>
  );
}

export default App;
