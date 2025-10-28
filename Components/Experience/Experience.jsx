import React from 'react'
import './Experience.css'

function Experience() {
  const experiences = [
    {
      title: "Software Engineering Intern",
      company: "Tech Company Inc.",
      period: "Summer 2024",
      description: "Developed and maintained web applications using React and Node.js. Collaborated with cross-functional teams to deliver features on schedule. Optimized application performance resulting in 30% faster load times.",
      technologies: ["React", "Node.js", "TypeScript", "MongoDB"],
      achievements: ["Reduced load times by 30%", "Implemented 5 new features", "Mentored 2 junior interns"]
    },
    {
      title: "Research Assistant", 
      company: "University of Toronto",
      period: "2023-2024",
      description: "Conducted research on machine learning applications in signal processing. Published findings in academic journal and presented at international conference.",
      technologies: ["Python", "TensorFlow", "PyTorch", "MATLAB"],
      achievements: ["Published research paper", "Conference presentation", "Developed novel ML model"]
    },
    {
      title: "ECE Teaching Assistant",
      company: "University of Toronto",
      period: "2022-2023", 
      description: "Assisted professors in teaching core electrical and computer engineering courses. Held office hours, graded assignments, and provided one-on-one student support.",
      technologies: ["C++", "Verilog", "Circuit Analysis", "Digital Systems"],
      achievements: ["Supported 100+ students", "Improved course materials", "98% student satisfaction"]
    }
  ]

  return (
    <section className="experience-section" id="experience">
      <h2 className="experience-heading">My Experience</h2>
      <div className="experiences-container">
        {experiences.map((experience, index) => (
          <div key={index} className="experience-card">
            <div className="experience-header">
              <h3 className="experience-title">{experience.title}</h3>
              <div className="experience-meta">
                <span className="experience-company">{experience.company}</span>
                <span className="experience-period">{experience.period}</span>
              </div>
            </div>
            
            <p className="experience-description">{experience.description}</p>
            
            <div className="experience-technologies">
              <h4>Technologies:</h4>
              <div className="tech-tags">
                {experience.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
            
            <div className="experience-achievements">
              <h4>Key Achievements:</h4>
              <ul className="achievements-list">
                {experience.achievements.map((achievement, achievementIndex) => (
                  <li key={achievementIndex} className="achievement-item">
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience