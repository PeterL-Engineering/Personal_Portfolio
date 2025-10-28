import React from 'react'
import './Navigation.css'

function Navigation() {
  const smoothScroll = (targetId) => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const offsetTop = targetElement.getBoundingClientRect().top + window.pageYOffset - 70; // Adjust for navbar height
      
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    smoothScroll(targetId);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <a href="#home" onClick={(e) => handleNavClick(e, 'home')}>Peter Leong</a>
        </div>
        <ul className="nav-menu">
          <li className="nav-item">
            <a href="#home" className="nav-link" onClick={(e) => handleNavClick(e, 'home')}>Home</a>
          </li>
          <li className="nav-item">
            <a href="#about" className="nav-link" onClick={(e) => handleNavClick(e, 'about')}>About</a>
          </li>
          <li className="nav-item">
            <a href="#projects" className="nav-link" onClick={(e) => handleNavClick(e, 'projects')}>Projects</a>
          </li>
          <li className="nav-item">
            <a href="#experience" className="nav-link" onClick={(e) => handleNavClick(e, 'experience')}>Experience</a>
          </li>
          <li className="nav-item">
            <a href="#contact" className="nav-link" onClick={(e) => handleNavClick(e, 'contact')}>Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navigation