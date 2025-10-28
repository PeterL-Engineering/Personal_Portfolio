import React from 'react'
import './Homepage.css'
import BackgroundImage from '/src/figs/rainbow_abstract.jpg'

function Homepage() {
  const socialLinks = {
    email: 'mailto:peter.leong@mail.utoronto.ca',
    linkedin: 'https://linkedin.com/in/peter-leong-toronto',
    github: 'https://github.com/PeterL-Engineering'
  }

  return (
    <div 
      className="homepage-container" 
      id="home"
      style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${BackgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="homepage-content">
        <h1 className="homepage-title animate-slide-down">
          Peter Leong
        </h1>
        
        <h2 className="homepage-subtitle animate-slide-left">
          University of Toronto &bull; Engineering Science ECE
        </h2>
        
        <div className="social-buttons">
          <a 
            href={socialLinks.email} 
            className="social-btn email-btn"
            aria-label="Email"
            target="_blank"
            rel="noopener noreferrer"
          ></a>
          
          <a 
            href={socialLinks.linkedin} 
            className="social-btn linkedin-btn"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          ></a>
          
          <a 
            href={socialLinks.github} 
            className="social-btn github-btn"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          ></a>
        </div>
      </div>
    </div>
  )
}

export default Homepage