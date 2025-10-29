import React from 'react'
import Navigation from '../components/navigation/Navigation.jsx'
import Homepage from '../components/homepage/Homepage.jsx'
import About from '../components/about/About.jsx'
import Education_Experience from '../components/education-experience/Education-Experience.jsx'
import Projects from '../components/projects/Projects.jsx'
// import Contact from '../components/contact/Contact.jsx'
import Copyright from '../components/copyright/Copyright.jsx'
import './App.css'

function App() {
  return (
    <div className="App">
      <Navigation />
      <main className="main-content">
        <section id="home">
          <Homepage />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="experience">
          <Education_Experience />
        </section>
        {/* <section id="contact">
          <Contact />
        </section> */}
        <section id="copyright">
          <Copyright />
        </section>
      </main>
    </div>
  )
}

export default App