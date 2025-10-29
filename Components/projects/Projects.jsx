import React from 'react'
import './Projects.css'
import SlideIn from './SlideIn'
import finalReport from './files/aps360_final_report.pdf'

function Projects() {
  const projects = [
    {
      title: "LoRa-WiFi Bridge System",
      period: "Oct. 2025 - Present",
      description: "Hybrid communication node using ESP32 microcontrollers with intelligent protocol switching between LoRa and WiFi.",
      technologies: ["C++", "Python", "ESP32", "LoRa", "CAD Tools"],
      highlights: [
        "Designing hybrid communication node using ESP32 microcontrollers with intelligent protocol switching between LoRa and WiFi based on power requirements and data throughput needs",
        "Developing low-power system utilizing LoRa for energy-efficient text messaging, activating WiFi only for high-speed transfers to minimize overall power consumption"
      ],
      githubLink: null,
      reportLink: null,
      liveLink: null
    },
    {
      title: "Neurosignal Filtration", 
      period: "Sept. 2025 - Present",
      description: "Digital signal processing system for filtering artifacts from neurosignal data.",
      technologies: ["Python", "SystemVerilog", "CAD Tools"],
      highlights: [
        "Implemented Runge-Kutta solver and noise generator in Python to simulate artifacts in neurosignal data",
        "Designed and implemented SystemVerilog modules for digital signal processing filters with adaptive threshold and spike detection",
        "Developed interface protocols to connect with analog front-end circuitry using CAD Tools"
      ],
      githubLink: null,
      reportLink: null,
      liveLink: null
    },
    {
      title: "Image Colourization via CNNs",
      period: "May 2025 - Aug. 2025",
      description: "Automated image colourization system using convolutional neural networks for grayscale images.",
      technologies: ["Python", "PyTorch", "TensorFlow"],
      highlights: [
        "Implemented automated colourization of 256×256 grayscale images using Python and CNN architectures",
        "Built encoder-decoder models in PyTorch and TensorFlow, achieving accurate colour reconstruction in CIELAB space"
      ],
      githubLink: null,
      reportLink: finalReport,
      liveLink: "https://colorizer-group40.replit.app/"
    }
  ]

  return (
    <section className="projects-section" id="projects">
      <SlideIn direction="down" delay="100">
        <h2 className="projects-heading">Projects</h2>
      </SlideIn>
      
      <div className="projects-container">
        {projects.map((project, index) => (
          <SlideIn 
            key={index} 
            direction="up" 
            delay={200 + (index * 100)}
          >
            <div className="project-card">
              <div className="project-header">
                <h3 className="project-title">{project.title}</h3>
                <span className="project-period">{project.period}</span>
              </div>
              
              <div className="project-technologies">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">{tech}</span>
                ))}
              </div>
              
              <p className="project-description">{project.description}</p>
              
              <div className="project-highlights">
                <h4 className="highlights-heading">Key Contributions:</h4>
                <ul className="highlights-list">
                  {project.highlights.map((highlight, highlightIndex) => (
                    <li key={highlightIndex} className="highlight-item">
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="project-links">
                {project.githubLink && (
                  <a href={project.githubLink} className="project-link" target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                )}
                {project.reportLink && (
                  <a href={project.reportLink} className="project-link" target="_blank" rel="noopener noreferrer">
                    Final Report
                  </a>
                )}
                {project.liveLink && (
                  <a href={project.liveLink} className="project-link" target="_blank" rel="noopener noreferrer">
                    Live Demo
                  </a>
                )}
                {/* Show message if no links available */}
                {!project.githubLink && !project.reportLink && !project.liveLink && (
                  <span className="no-links-message">Links coming soon</span>
                )}
              </div>
            </div>
          </SlideIn>
        ))}
      </div>
    </section>
  )
}

export default Projects