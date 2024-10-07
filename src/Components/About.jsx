import React from 'react'
import '../Styles/About.css';
import photo from '../assets/about_me.jpg'
import { FaFigma } from "react-icons/fa6";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaJsSquare } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { SiVite } from "react-icons/si";
import { RiAlibabaCloudLine } from "react-icons/ri";
import { SiClickup } from "react-icons/si";
import { SiCanva } from "react-icons/si";
import { FaGithub } from "react-icons/fa";

import {motion} from 'framer-motion'
import IconStack from './IconStack';


export default function About() {
    const data = [
        {
            id: 1,
            icon: <FaHtml5 />,
            name: "HTML5"
        },{
            id: 2,
            icon: <FaCss3Alt />,
            name: "CSS3"
        },{
            id: 3,
            icon: <FaJsSquare />,
            name: "JavaScript"
        },{
            id: 4,
            icon: <FaReact />,
            name: "React"
        },{
            id: 5,
            icon: <FaJava />,
            name: "Java"
        },{
            id: 6,
            icon: <FaGithub />,
            name: "GitHub"
        },{
            id: 7,
            icon: <SiMysql />,
            name: "MySQL"
        },{
            id: 8,
            icon: <SiVite />,
            name: "Vite"
        },{
            id: 9,
            icon: <RiAlibabaCloudLine />,
            name: "AlibabaCloud"
        },{
            id: 10,
            icon: <SiClickup />,
            name: "ClickUp"
        },{
            id: 11,
            icon: <FaFigma />,
            name: "Figma"
        },{
            id: 12,
            icon: <SiCanva />,
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
            initial = {{opacity: 0, scale: 1, x: 100}}
            whileInView={{opacity: 1, scale: 1, x: 0}}
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
