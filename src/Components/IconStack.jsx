import React from 'react'
import '../Styles/iconStack.css'

export default function IconStack({icon, name}) {
  return (
    <div className='stack'>
          <div className='icon-stack'><img src={icon} alt="" /></div>  
            <div className='icon-name'>{name}</div>   
    </div>
  )
}
