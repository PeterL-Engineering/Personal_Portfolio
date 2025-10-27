import React from 'react'
import Homepage from '../components/homepage/Homepage.jsx'
import Experience from '../components/experience/Experience.jsx'
import './App.css'

function App() {
  return (
    <div className="App">
      <h1>My Portfolio</h1>
      <Homepage />
      <Experience />
    </div>
  )
}

export default App