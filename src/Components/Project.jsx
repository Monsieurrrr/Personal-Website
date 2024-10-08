import React from 'react'
import '../Styles/Project.css'
import ProjectCard from './projectCard'
import dewataIsland from '../assets/MockUp/dewataIsland.png'
import personal from '../assets/MockUp/personal.png'
import wheelhub from '../assets/MockUp/wheelhub.png'
import thriftit from '../assets/MockUp/thriftit.png'
import clminton from '../assets/MockUp/clminton.png'
import skintastic from '../assets/MockUp/skintastic.png'

import {motion} from 'framer-motion'


export default function Project() {
  const data = [
      {
        id: 1,
        photo: personal,
        name: "Personal Website",
        desc: "React.js",
        link: "https://github.com/Monsieurrrr/Personal-Website"
      },{
        id: 2,
        photo: dewataIsland,
        name: "Dewata Island",
        desc: "HTML - CSS - JS",
        link: "https://dewata-island.vercel.app/"
      },{
        id: 3,
        photo: wheelhub,
        name: "WheelHub",
        desc: "HTML - CSS - JS",
        link: "https://wheel-hub-beta.vercel.app/"
      },{
        id: 4,
        photo: clminton,
        name: "CLminton",
        desc: "JAVA - SQL",
        link: "https://github.com/Monsieurrrr/CLminton-javaFX"
      },{
        id: 5,
        photo: thriftit,
        name: "ThriftIt",
        desc: "Figma",
        link: "https://www.figma.com/proto/8mFwQipX5hGTYOPZlUeBIo/ThriftIt?node-id=1-5&node-type=canvas&t=Wp5Srjm8waOaxHYz-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A3"
      },{
        id: 6,
        photo: skintastic,
        name: "Skintastic",
        desc: "Figma",
        link: "https://www.figma.com/proto/tuRrInWVNnz9n5DIIkStku/Skintastic?node-id=37-618&node-type=canvas&t=YmSpqUqySVpJFcND-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A5&show-proto-sidebar=1"
      }
  ]

  return (
    <div id='project'>
      <motion.div className="title-wrap"
      initial = {{opacity: 0, scale: 0.8, y: -60}}
      whileInView={{opacity: 1, scale: 1, y: 0}}
      transition={{duration: 1.2}}
      viewport={{margin: "-150px"}}
      
      >
         <p className='sub-title'>Visit My Latest</p>
         <h1 className='title'>Projects</h1>
         </motion.div>
    
       
        <motion.div className='all-projectCard'
          initial = {{opacity: 0, scale: 0.9, y: 60}}
          whileInView={{opacity: 1, scale: 1, y: 0}}
          transition={{duration: 1}}
          viewport={{margin: "-50px"}}
        >
        
        {
            data.map((data)=>{
                 return <ProjectCard 
                          key = {data.id}
                          photo = {data.photo}
                          nameProject = {data.name}
                          desc = {data.desc}
                          link = {data.link}
                        />
             })}




                                  
        </motion.div>                        
                                  
                                  
    
    
    </div>
  )
}
