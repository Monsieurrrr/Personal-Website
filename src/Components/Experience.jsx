import React from 'react'
import "../Styles/Experience.css"
import { TbPointFilled } from "react-icons/tb";
import { FaChevronRight } from "react-icons/fa";
import {motion} from 'framer-motion'




export default function Experience() {
  return (
    <div className='exp' id='experience'>
        <motion.div className='title-wrap'
             initial = {{opacity: 0, scale: 0.8, y: -60}}
             whileInView={{opacity: 1, scale: 1, y: 0}}
             transition={{duration: 1.2}}
             viewport={{margin: "-150px"}}
        >
         <p className='sub-title'>Explore My</p>
         <h1 className='title'>Experiences</h1>
         </motion.div>

    <motion.div className='exp-detail-container'
          initial = {{opacity: 0, scale: 0.8}}
          whileInView={{opacity: 1, scale: 1}}
          transition={{duration: 1}}
          viewport={{margin: "-120px"}}
        >
            <div className="exp-wrapper">
            <div className="exp-box">
                <h1 className="sub-head">Work</h1>

                <div className='exp-list'>
                    <div className='point'>
                    <FaChevronRight id= 'chevron'/>
                    <div>
                        <h1>Remote intership as UI/UX Designer at PT. CIN (July 2024 - Oct 2024)</h1>
                        <p>Conducted research and designed a responsive application design that focuses on the veterinary clinic POS system with an easy and user-friendly interface.
                        easy and user-friendly interface, increasing the efficiency of application usage by 60%.</p>

                        <p>Design handover to the developer team by paying attention to things that can make it easier and more efficient for developers, increasing the ease for the developer team to develop the application by 35%.</p>
                    </div>
                    </div>
                </div>

            </div>

            <div className="exp-box">

                <h1 className="sub-head">Organizational & Volunteer</h1>

                <div className='exp-list'>
                    <div className='point'>
                    <FaChevronRight id= 'chevron' />
                        <h1>Freshmen Partner B2027 at Binus University (Sept 2023 - July 2024)</h1>
                    </div>
                </div>

                <div className='exp-list'>
                    <div className='point'>
                    <FaChevronRight id= 'chevron'/>
                        <h1>Social campaign on “TOLERANCE FROM EARLY AGE” at SMK YADIKA 1 (2023)</h1>
                    </div>
                </div>

                <div className='exp-list'>
                    <div className='point'>
                    <FaChevronRight id= 'chevron' />
                        <h1>Social campaign on ACHIEVEMENT WITHOUT DRUGS” at Taman Anggrek Mall, West Jakarta (2022)</h1>
                    </div>
                </div>

                <div className='exp-list'>
                    <div className='point'>
                    <FaChevronRight id= 'chevron' />
                        <h1>Kampanye sosial mengenai “INDONESIA SEHAT TANPA KORUPSI” di Central Park Mall, Jakarta Barat (2022)</h1>
                    </div>
                </div>
                    
                </div>   
            </div>


    </motion.div>
        
    </div>
  )
}
