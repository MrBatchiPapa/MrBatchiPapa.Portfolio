

// import NavBar from './Components/NavBar';

import './App.css'
import Hero from './Components/Hero';
import About from './Components/About';
import Projects from './Components/Projects';
import Contact from './Components/Contact';


import { MyComponent } from "./Components/Birds/birds.js";

import { useRef } from "react";
function App() {
  const about = useRef(null);
  const projects = useRef(null);
  const contact = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: 'smooth'
    })
  }


  return (
    <div>
      {/* <NavBar/> */}

      <section className='NavBody'>
        <div className='head'>Kevin <span class="head2">Jin</span></div>
        <ul id="item">
          <li onClick={() => scrollToSection(about)} className="link">About Me</li>
          <li onClick={() => scrollToSection(projects)} className="link">Projects</li>
          <li onClick={() => scrollToSection(contact)} className="link">Contact</li>
        </ul>
      </section>

      <MyComponent />
      <Hero />

      <div ref={about} className="about">
        <About />
      </div>

      <div ref={projects} className="projects">
        <Projects />
      </div>



      <div ref={contact} className="projects">
        <Contact />
      </div>
    </div>
  );
}

export default App;
