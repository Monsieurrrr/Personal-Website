import React from 'react'
import '../Styles/CaseStudy.css'
import '../Styles/responsiveCase.css'
import Navbar from '../CompStudy/Navbar'
import HeadSection from '../CompStudy/HeadSection'
import Visual from '../CompStudy/Visual'
import Research from '../CompStudy/Research'
import Contact from '../Components/Contact'

export default function CaseStudy() {
  return (

    <div>
            <Navbar/>
            <HeadSection/>
            <Research/>
            <Visual/>
            <Contact/>

    </div>
  )
}
