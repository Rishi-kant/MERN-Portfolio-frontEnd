import React from 'react'

import Layout from './components/layout/Layout'
import About from './pages/about/About'
import TechStack from './pages/teckStack/TechStack'
import Projects from './pages/projects/Projects'
import Education from './pages/education/Education'
import WorkExperience from './pages/workExperience/WorkExperience'
function App() {
  return (
    <div>
      <Layout/>
      <div className="container">
      <About/>
      <Education/>
      <TechStack/>
      <Projects/>
      <WorkExperience/>
      </div>
      
    </div>
  )
}

export default App