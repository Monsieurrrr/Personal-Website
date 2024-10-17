import React from 'react'
import '../Styles/About.css';
import photo from '../assets/about_me.jpg'



import IconStack from './IconStack';
import {motion} from 'framer-motion'


export default function About() {
    const data = [
        {
            id: 1,
            icon: "https://img.shields.io/badge/html5-%23E34F26.svg?style=flat&logo=html5&logoColor=white",
            name: "HTML5"
        },{
            id: 2,
            icon: "https://img.shields.io/badge/css3-%231572B6.svg?style=flat&logo=css3&logoColor=white",
            name: "CSS3"
        },{
            id: 3,
            icon: "https://img.shields.io/badge/javascript-%23323330.svg?style=flat&logo=javascript&logoColor=%23F7DF1E",
            name: "JavaScript"
        },{
            id: 4,
            icon: "https://img.shields.io/badge/react-%2320232a.svg?style=flat&logo=react&logoColor=%2361DAFB",
            name: "React"
        },{
            id: 5,
            icon: "https://img.shields.io/badge/java-%23ED8B00.svg?style=flat&logo=openjdk&logoColor=white",
            name: "Java"
        },{
            id: 6,
            icon: "https://img.shields.io/badge/mysql-4479A1.svg?style=flat&logo=mysql&logoColor=white",
            name: "Sql"
        },{
            id: 7,
            icon: "https://img.shields.io/badge/github-%23121011.svg?style=flat&logo=github&logoColor=white",
            name: "GitHub"
        },{
            id: 8,
            icon: "https://img.shields.io/badge/vite-%23646CFF.svg?style=flat&logo=vite&logoColor=white",
            name: "Vite"
        },{
            id: 9,
            icon: "https://img.shields.io/badge/AlibabaCloud-%23FF6701.svg?style=flat&logo=alibabacloud&logoColor=white",
            name: "AlibabaCloud"
        },{
            id: 10,
            icon: "https://img.shields.io/badge/node.js-6DA55F?style=flat&logo=node.js&logoColor=white",
            name: "node.js"
        },{
            id: 12,
            icon: "https://img.shields.io/badge/NPM-%23CB3837.svg?style=flat&logo=npm&logoColor=white",
            name: "npm"
        },{
            id: 13,
            icon: "https://img.shields.io/badge/vercel-%23000000.svg?style=flat&logo=vercel&logoColor=white",
            name: "vercel"
        },{
            id: 14,
            icon: "https://img.shields.io/badge/figma-%23F24E1E.svg?style=flat&logo=figma&logoColor=white",
            name: "Figma"
        },{
            id: 15,
            icon: "https://img.shields.io/badge/Canva-%2300C4CC.svg?style=flat&logo=Canva&logoColor=white",
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
            initial = {{opacity: 0, scale: 0.8, y:10}}
            whileInView={{opacity: 1, scale: 1, y:0}}
            transition={{duration: 0.9}}
            viewport={{margin: "-140px"}}

            >
                <img src={photo} alt="no pic" />
            </motion.div>
        
            <motion.div className='about-text'
            initial = {{opacity: 0, scale: 0.8, y:10}}
            whileInView={{opacity: 1, scale: 1, y:0}}
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
