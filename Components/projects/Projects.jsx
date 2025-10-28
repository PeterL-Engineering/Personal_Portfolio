import React from 'react'
import './Projects.css'

function Projects() {
  const projects = [
    {
      title: "Project One",
      description: "A brief description of your first project. What technologies you used and what problem it solves.",
      technologies: ["React", "Node.js", "MongoDB"],
      githubLink: "#",
      liveLink: "#"
    },
    {
      title: "Project Two", 
      description: "Description of your second project. Highlight key features and your role in the development.",
      technologies: ["Python", "Django", "PostgreSQL"],
      githubLink: "#",
      liveLink: "#"
    },
    {
      title: "Project Three",
      description: "Another project description. Focus on the impact and what you learned from building it.",
      technologies: ["JavaScript", "Express", "MySQL"],
      githubLink: "#",
      liveLink: "#"
    }
  ]

  return (
    <section className="projects-section" id="projects">
      <h2 className="projects-heading">My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <div className="project-technologies">
              {project.technologies.map((tech, techIndex) => (
                <span key={techIndex} className="tech-tag">{tech}</span>
              ))}
            </div>
            <div className="project-links">
              <a href={project.githubLink} className="project-link">GitHub</a>
              <a href={project.liveLink} className="project-link">Live Demo</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects