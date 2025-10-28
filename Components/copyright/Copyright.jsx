import React from 'react'
import './Copyright.css'

function Copyright() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="copyright-footer">
      <div className="copyright-content">
        <p>&copy; {currentYear} Peter Leong. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Copyright