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
                Hello! I'm Peter Leong, an Engineering Science ECE student at the University of Toronto 
                with a passion for technology, innovation, and music.
              </p>
              <p>
                When I'm not coding or studying engineering principles, you can find me at the organ, 
                where I explore the intersection of technology and music through one of the most 
                complex mechanical instruments ever created.
              </p>
              <p>
                I believe that great engineering, like great music, requires both technical precision 
                and creative expression.
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