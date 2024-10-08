import React from 'react'
import '../Styles/Education.css'
import { useTypewriter } from 'react-simple-typewriter';
import {motion} from 'framer-motion'


export default function Education() {

  const [text1] = useTypewriter({
    words: ['2019 - 2022', 'Social'],
    loop: {},
  });

  const [text2] = useTypewriter({
    words: ['2022 - present', 'Information Systems'],
    loop: {},
});

  return (
    <div id='education'>
        <motion.div className="title-wrap"
          initial = {{opacity: 0, scale: 0.8, y: -60}}
          whileInView={{opacity: 1, scale: 1, y: 0}}
          transition={{duration: 1.2}}
          viewport={{margin: "-150px"}}
        >
        <p className='sub-title'>See My History</p>
        <h1 className='title'>Education</h1>
        </motion.div>

    <div className="edu-grid">

            <div className='educate'>
              <div className="liner">
                <motion.div className="liner-circle"
                  initial = {{opacity: 0, scale: 0}}
                  whileInView={{opacity: 1, scale: 1}}
                  transition={{delay: 1}}
                  // viewport={{margin: "-150px"}}
                ></motion.div>
                <motion.div className="liner-pipe"
                  initial = {{opacity: 0, scale: 0.5, x: 50}}
                  whileInView={{opacity: 1, scale: 1, x: 0}}
                  transition={{duration: 1}}
                  // viewport={{margin: "-150px"}}
                ></motion.div>
                <motion.div className="liner-circle"
                  initial = {{opacity: 0, scale: 0}}
                  whileInView={{opacity: 1, scale: 1}}
                  transition={{duration: 0.6}}
                  // viewport={{margin: "-150px"}}                
                ></motion.div>
                <motion.div className="liner-pipe"
                  initial = {{opacity: 0.5, scale: 0.5, x: -50}}
                  whileInView={{opacity: 1, scale: 1, x: 0}}
                  transition={{duration: 1}}
                  // viewport={{margin: "-120px"}}
                ></motion.div>
                <motion.div className="liner-circle"
                  initial = {{opacity: 0, scale: 0}}
                  whileInView={{opacity: 1, scale: 1}}
                  transition={{delay: 1}}
                  // viewport={{margin: "-150px"}}
                ></motion.div>
              </div>

              

              <motion.div className="edu-text"
                initial = {{opacity: 0, scale: 0.8}}
                whileInView={{opacity: 1, scale: 1}}
                transition={{delay: 1}}
                viewport={{margin: "-120px"}}
              >
                <div className="edu-text-wrap">
                <p className='edu-place'>Trinitas Junior High School</p>
                <p className="edu-desc"></p>
                </div>

                <div className="edu-text-wrap">
                <p className='edu-place'>Dian Harapan Senior High School</p>
                <p className="edu-desc">{text1}</p>
                </div>  

                <div className="edu-text-wrap">
                <p className='edu-place'>Bina Nusantara University</p>
                <p className="edu-desc">{text2}</p>
                </div>    

              </motion.div>

              

            </div>  
    </div>


    </div>
  )
}
