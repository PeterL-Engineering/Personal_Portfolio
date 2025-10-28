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
      technologies: ["C++", "Python", "ESP32", "LoRa", "WiFi Mesh"],
      highlights: [
        "Designing hybrid communication node using ESP32 microcontrollers with intelligent protocol switching between LoRa and WiFi",
        "Implementing mesh networking algorithms for automatic routing",
        "Developing system to maintain LoRa mesh for text messaging while enabling WiFi ESP-Mesh for image/file transfer when nodes are in proximity"
      ],
      githubLink: null,
      reportLink: null,
      liveLink: null
    },
    {
      title: "Neurosignal Filtration", 
      period: "Sept. 2025 - Present",
      description: "Digital signal processing system for filtering ocular and muscular artefacts from neurosignal data.",
      technologies: ["Python", "Numpy", "SystemVerilog"],
      highlights: [
        "Developed Runge-Kutta solver and noise generator in Python to mimic ocular and muscular artefacts in real-world neurosignal data",
        "Designed and implemented Verilog modules for digital signal processing filters with adaptive threshold and spike detection"
      ],
      githubLink: null,
      reportLink: null,
      liveLink: null
    },
    {
      title: "Image Colourization via CNNs",
      period: "May 2025 - Aug. 2025",
      description: "Automated image colourization system using convolutional neural networks for grayscale images.",
      technologies: ["Python", "PyTorch", "TensorFlow", "Deep Learning"],
      highlights: [
        "Developed and implemented automated image colourization for 256×256 grayscale images using a dataset of 12,600 pairs (people, animals, natural scenery)",
        "Framed the task as supervised learning in the CIELAB colour space",
        "Built CNN models progressing from shallow baseline to deep encoder–decoder architecture capturing semantic and spatial features"
      ],
      githubLink: null,
      reportLink: finalReport,
      liveLink: "https://colorizer-group40.replit.app/"
    }
  ]

  return (
    <section className="projects-section" id="projects">
      <SlideIn direction="down" delay="100">
        <h2 className="projects-heading">Project Experience</h2>
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