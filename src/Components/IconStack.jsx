import React from 'react'
import '../Styles/iconStack.css'

export default function IconStack({icon}) {
  return (
    <div className='stack'>
            <img src={icon} alt="" />
    </div>
  )
}
