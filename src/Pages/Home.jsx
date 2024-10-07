import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import '../Styles/Home.css'
import About from '../Components/About'
import Experience from '../Components/Experience'
import Project from '../Components/Project'
import Education from '../Components/Education'
import Contact from '../Components/Contact'
import Footer from '../Components/Footer'
import '../Styles/Responsive.css'

export default function Home() {
  return (
    <div className='body'>
        <Navbar/>
        <Hero/>
        <About/>
        <Experience/>
        <Project />
        <Education/>
        <Contact/>
        <Footer />
    </div>
  )
}
