import React from 'react'
import './Education-Experience.css'
import SlideIn from './SlideIn'

function Experience() {
  const experiences = [
    {
      title: "Tech Team Associate",
      company: "IEEE University of Toronto Student Branch",
      period: "Jun. 2025 – Present",
      technologies: ["Git", "CAD", "Workshop Leadership", "Event Management"],
      achievements: [
        "Led workshops on Git, algorithms, and CAD while managing hardware inventory for events including NewHacks and MakeUofT"
      ]
    },
    {
      title: "Electrical Systems Member", 
      company: "University of Toronto Human Powered Vehicles Design Team",
      period: "Jan. 2025 – Aug. 2025",
      technologies: ["C", "PID Control", "Embedded Systems", "Orientation Tracking"],
      achievements: [
        "Developed a PID controller in C as part of HPVDT's control systems division",
        "Contributed to orientation tracking by working on pitch roll and yaw measurement for the watercraft"
      ]
    },
    {
      title: "Frosh Week Head Leader",
      company: "University of Toronto Engineering",
      period: "July 2025 - Sept. 2025",
      technologies: ["Team Leadership", "Event Planning", "Student Mentorship"],
      achievements: [
        "Led a team of ~20 orientation leaders to welcome and guide 50+ incoming engineering students through Frosh Week activities",
        "Introduced students to engineering traditions and student resources"
      ]
    }
  ]

  const education = {
    title: "Bachelor of Applied Science in Engineering Science",
    company: "University of Toronto",
    period: "Sept. 2024 - June 2029",
    description: "Electrical & Computer Engineering Major",
    technologies: ["Electrical Engineering", "Computer Engineering", "Artificial Intelligence", "Machine Learning"],
    achievements: [
      "Current cGPA: 3.64/4.0 | Dean's List First Year",
      "Working toward Minor in Artificial Intelligence",
      "Specializing in digital systems design and computer architecture"
    ]
  }

  return (
    <section className="experience-section" id="experience">
      <SlideIn direction="down" delay="100">
        <h2 className="experience-heading">Education & Experience</h2>
      </SlideIn>
      
      {/* Education Section */}
      <SlideIn direction="right" delay="150">
        <div className="education-card">
          <div className="experience-header">
            <h3 className="experience-title">{education.title}</h3>
            <div className="experience-meta">
              <span className="experience-company">{education.company}</span>
              <span className="experience-period">{education.period}</span>
            </div>
          </div>
          
          <p className="experience-description">{education.description}</p>
          
          <div className="experience-technologies">
            <h4>Areas of Focus:</h4>
            <div className="tech-tags">
              {education.technologies.map((tech, techIndex) => (
                <span key={techIndex} className="tech-tag">{tech}</span>
              ))}
            </div>
          </div>
          
          <div className="experience-achievements">
            <h4>Academic Achievements:</h4>
            <ul className="achievements-list">
              {education.achievements.map((achievement, achievementIndex) => (
                <li key={achievementIndex} className="achievement-item">
                  {achievement}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </SlideIn>
      
      {/* Experience Section */}
      <div className="experiences-container">
        {experiences.map((experience, index) => (
          <SlideIn 
            key={index} 
            direction="left" 
            delay={300 + (index * 150)}
          >
            <div className="experience-card">
              <div className="experience-header">
                <h3 className="experience-title">{experience.title}</h3>
                <div className="experience-meta">
                  <span className="experience-company">{experience.company}</span>
                  <span className="experience-period">{experience.period}</span>
                </div>
              </div>
              
              <div className="experience-technologies">
                <h4>Skills & Technologies:</h4>
                <div className="tech-tags">
                  {experience.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
              
              <div className="experience-achievements">
                <h4>Key Contributions:</h4>
                <ul className="achievements-list">
                  {experience.achievements.map((achievement, achievementIndex) => (
                    <li key={achievementIndex} className="achievement-item">
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </SlideIn>
        ))}
      </div>
    </section>
  )
}

export default Experience