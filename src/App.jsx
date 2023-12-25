import React from 'react'

import Layout from './components/layout/Layout'
import About from './pages/about/About'
import TechStack from './pages/teckStack/TechStack'
function App() {
  return (
    <div>
      <Layout/>
      <div className="container">
      <About/>
      </div>
      <TechStack/>
      
    </div>
  )
}

export default App