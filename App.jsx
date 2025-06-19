import './App.css';
import Tabs from './components/Intro';
import About from './components/About';
import Skills from './components/Skills';
import Academics from './components/Academics';
import Certifications from './components/Certifications';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Navbars from './components/Navbar';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // 'once' ensures animation runs once per scroll
  }, []);

  return (
    <>
      {/* Sticky Navbar */}
      <div className="navbar" style={{ position: 'sticky', top: 0, zIndex: 1000 }}>
        <Navbars />
      </div>

      {/* Hero/Intro */}
      <div id="home" className="intro">
        <Tabs />
      </div>

      <hr />

      {/* About Section */}
      <div id="about" className="about">
        <About />
      </div>

      <hr />

      {/* Skills Section (Timeline-based) */}
      <div id="skills" className="skills">
        <Skills />
      </div>

      <hr />

      {/* Academics */}
      <div id="academics" className="academics">
        <Academics />
      </div>
      <br /><br /><br />
      <hr />

      {/* Certifications */}
      <div id="certifications" className="certifications">
        <Certifications />
      </div>
      <br /><br />
      <hr />

      {/* Projects */}
      <div id="projects" className="projects">
        <Projects />
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;

