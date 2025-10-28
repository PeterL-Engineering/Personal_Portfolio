import React from 'react'
import './Contact.css'

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <h2 className="contact-heading">Get In Touch</h2>
      <div className="contact-content">
        <div className="contact-info">
          <h3>Contact Information</h3>
          <div className="contact-item">
            <strong>Email:</strong> peter.leong@mail.utoronto.ca
          </div>
          <div className="contact-item">
            <strong>LinkedIn:</strong> linkedin.com/in/peter-leong-toronto
          </div>
          <div className="contact-item">
            <strong>GitHub:</strong> github.com/PeterL-Engineering
          </div>
        </div>
        
        <form className="contact-form">
          <h3>Send me a message</h3>
          <div className="form-group">
            <input type="text" placeholder="Your Name" className="form-input" />
          </div>
          <div className="form-group">
            <input type="email" placeholder="Your Email" className="form-input" />
          </div>
          <div className="form-group">
            <textarea placeholder="Your Message" rows="5" className="form-textarea"></textarea>
          </div>
          <button type="submit" className="submit-btn">Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact