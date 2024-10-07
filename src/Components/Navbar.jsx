import React, { useState } from 'react'
import "../Styles/Navbar.css"
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import {motion} from 'framer-motion'


const Navbar = () =>{

    const [Open, setOpen] = useState(false);

    const toggleMenu = () => {
        setOpen(!Open);
      };


    return (
        <motion.div
            initial = {{opacity: 0, scale: 1}}
            whileInView={{opacity: 1, scale: 1}}
            transition={{duration: 1.5}}
            viewport={{once: true}}
        >
            <nav className='navbar'>
                <div><h1>My Portfolio</h1></div>
    
                <div className='nav-right'>
                    <p><a href="#about" className='opt'>About</a></p>
                    <p><a href="#experience" className='opt'>Experiences</a></p>
                    <p><a href="#project" className='opt'>Projects</a></p>
                    <p><a href="#education" className='opt'>Educations</a></p>
                    <p><a href="#contact" className='opt'>Contact</a></p>
                </div>
            </nav>
    
            <nav className='hamburg-nav'>
                 <div><h1>My Portfolio</h1></div>
              <div className='hamburg-menu'>
                <div className={`menu-icon ${Open ? 'hide' : ''}`} onClick={toggleMenu}><RxHamburgerMenu /></div>
                <div className={`icon-close ${Open ? 'show' : ''}`} onClick={toggleMenu}><IoClose /></div>

                <div className={`menu-right ${Open ? 'show' : ''}`}>
                    <p><a href="#about">About</a></p>
                    <p><a href="#experience">Experiences</a></p>
                    <p><a href="#project">Projects</a></p>
                    <p><a href="#education">Educations</a></p>
                    <p><a href="#contract">Contact</a></p>
                </div>
                </div>   
            </nav>


    
        </motion.div>
      )
}

export default Navbar;
