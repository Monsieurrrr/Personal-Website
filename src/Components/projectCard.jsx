import React from 'react'
import '../Styles/projectCard.css'

export default function projectCard({photo, nameProject, desc, link}) {
  return (
    <div className='cardProject'>
      <div className='projectCard-wrap'>
        <img src={photo} alt="no pic" />
        <h1>{nameProject}</h1>
        <p>{desc}</p>
        </div>
        
        <div className='wrapp-btn'>
        <a href={link}><button>Project</button></a>
        </div>
    </div>
  )
}
