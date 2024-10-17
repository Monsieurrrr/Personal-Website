import React from 'react'
import '../Styles/projectCard.css'
import { Link } from 'react-router-dom'

export default function projectCard({photo, nameProject, desc, link, button}) {
  return (
    <div className='cardProject'>
      <div className='projectCard-wrap'>
        <img src={photo} alt="no pic" />
        <h1>{nameProject}</h1>
        <p>{desc}</p>
        </div>
        
        <div className='wrapp-btn'>
        <Link to={link}><button>{button}</button></Link>
        </div>
    </div>
  )
}
