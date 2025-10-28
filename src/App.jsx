import React from 'react'
import Navigation from '../components/navigation/Navigation'
import Homepage from '../components/homepage/Homepage'
import About from '../components/about/About'
import Experience from '../components/experience/Experience'
import Projects from '../components/projects/Projects'
// import Contact from '../components/contact/Contact'
import Copyright from '../components/copyright/Copyright'
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
          <Experience />
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