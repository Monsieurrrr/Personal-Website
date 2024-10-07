import React from 'react'
import '../Styles/iconStack.css'

export default function IconStack({icon, name}) {
  return (
    <div className='stack'>
          <div className='icon-stack'>{icon}</div>  
            <div className='icon-name'>{name}</div>   
    </div>
  )
}
