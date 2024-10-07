import React from 'react'
import '../Styles/Footer.css'
import {motion} from 'framer-motion'

export default function Footer() {
  return (
    <motion.div id='footer'
      initial = {{opacity: 0.2, scale: 0.9}}
      whileInView={{opacity: 1, scale: 1}}
      transition={{duration:1.2}}
      viewport={{margin: "-100px"}}
      >
        <div className='nav-bottom'>
                    <p><a href="#about" className='opt'>About</a></p>
                    <p><a href="#experience" className='opt'>Experiences</a></p>
                    <p><a href="#project" className='opt'>Projects</a></p>
                    <p><a href="#education" className='opt'>Educations</a></p>
                    <p><a href="#contact" className='opt'>Contact</a></p>
        </div>

        <div className='copyright'>
            <p>Copyright &copy; 2024 Ron Norbert Wijaya. All Right Reserved.</p>
        </div>

    </motion.div>
        
  )
}
