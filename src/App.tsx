import { useState, Fragment } from 'react'
import './App.css'

// Components
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Qualifications from './components/Qualifications'
import ProjectShowcase from './components/ProjectShowcase';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Fragment>
        <Navbar />
        <div className="overflow-x-hidden">
          <HeroSection />
          <Qualifications />
          <ProjectShowcase />
          <Contact />
        </div>
      </Fragment>
    </>
  )
}

export default App
