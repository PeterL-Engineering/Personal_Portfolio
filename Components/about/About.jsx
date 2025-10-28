import React from 'react'
import './About.css'

function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <div className="about-content">
          <div className="about-left">
            <div className="headshot-container">
              <img 
                src="/src/figs/peter_leong_headshot.png" 
                alt="Headshot" 
                className="headshot"
              />
            </div>
            <div className="about-text">
              <h2 className="about-heading">About Me</h2>
              <p>
                Hello! I'm Peter Leong, an Engineering Science student at the University of Toronto
                specializing in Electrical and Computer Engineering. I'm particularly interested in
                digital systems design, and computer architecture.
              </p>
              <p>
                From my roles as a Tech Team Associate with the University of Toronto IEEE Student Branch, 
                I have obtained practical experience with CAD tools and PCB design.
              </p>
              <p>
                Beyond engineering, I enjoy spending my time with music. I possess an ARCT in Piano and Organ Performance
                and have been awarded the National Gold Medal twice. 
              </p>
            </div>
          </div>
          
          <div className="about-right">
            <div className="organ-image-container">
              <img 
                src="/src/figs/peter_st_basil_organ.jpg" 
                alt="Playing organ" 
                className="organ-image"
              />
              <div className="image-caption">
                St. Basil's Organ Recital, Toronto 2024
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About