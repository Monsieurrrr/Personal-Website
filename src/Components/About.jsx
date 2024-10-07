import React from 'react'
import '../Styles/About.css';
import photo from '../assets/about_me.jpg'

import html from '../assets/Icon/html.png'
import css from '../assets/Icon/css.png'
import js from '../assets/Icon/js.png'
import react from '../assets/Icon/react.png'
import java from '../assets/Icon/java.png'
import github from '../assets/Icon/github.png'
import mysql from '../assets/Icon/mysql.png'
import vite from '../assets/Icon/vite.png'
import figma from '../assets/Icon/figma.png'
import canva from '../assets/Icon/canva.png'

import {motion} from 'framer-motion'
import IconStack from './IconStack';


export default function About() {
    const data = [
        {
            id: 1,
            icon: html,
            name: "HTML5"
        },{
            id: 2,
            icon: css,
            name: "CSS3"
        },{
            id: 3,
            icon: js,
            name: "JavaScript"
        },{
            id: 4,
            icon: react,
            name: "React"
        },{
            id: 5,
            icon: java,
            name: "Java"
        },{
            id: 6,
            icon: github,
            name: "GitHub"
        },{
            id: 7,
            icon: mysql,
            name: "MySQL"
        },{
            id: 8,
            icon: vite,
            name: "Vite"
        },{
            id: 9,
            icon: "",
            name: "AlibabaCloud"
        },{
            id: 10,
            icon: "",
            name: "ClickUp"
        },{
            id: 11,
            icon: figma,
            name: "Figma"
        },{
            id: 12,
            icon: canva,
            name: "Canva"
        }

    ]

  return (
    <div className='about' id='about'>   

        <motion.div className='title-wrap'
        initial = {{opacity: 0, scale: 0.8, y: -60}}
        whileInView={{opacity: 1, scale: 1, y: 0}}
        transition={{duration: 1.2}}
        viewport={{margin: "-150px"}}
        >
        <p className='sub-title'>Get To Know More</p>
        <h1 className='title'>About Me</h1>
        </motion.div>

        <div className='about-sec'>
            <motion.div className='about-pic'
            initial = {{opacity: 0, scale: 0.8, x: -100, y:-20}}
            whileInView={{opacity: 1, scale: 1, x: 0, y:0}}
            transition={{duration: 0.9}}
            viewport={{margin: "-140px"}}

            >
                <img src={photo} alt="no pic" />
            </motion.div>
        
            <motion.div className='about-text'
            initial = {{opacity: 0, scale: 1}}
            whileInView={{opacity: 1, scale: 1}}
            transition={{duration: 1}}
            viewport={{margin: "-150px"}}

            >
                <p>I am deeply passionate about web developer and UI/UX designer. I thrive alongside technology and design, bringing innovative ideas to life with clean code and intuitive interfaces. The emergence of obstacles makes me even more motivated to dive deeper and solve the problems at hand. I want to be able to contribute to solving real-world problems through thoughtful design and code, providing a seamless user experience that drives results. 
                </p>
        <div className='about-icon'>
            {
            data.map((data)=>{
                 return <IconStack key={data.id} 
                        icon={data.icon} 
                        name={data.name}
                        />
             })}
        </div>

            </motion.div>

        </div>
    </div>
  )
}
