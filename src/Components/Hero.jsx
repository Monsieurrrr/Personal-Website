import React from 'react'
import pp from '../assets/Hero/pp.png'
import '../Styles/Hero.css'
import cv from '../assets/CV/CV.pdf'
import portfo from '../assets/CV/Portfolio.pdf'

import github from '../assets/Icon/github.png'
import linkedin from '../assets/Icon/linkedin.png'
import instagram from '../assets/Icon/instagram.png'

import {useTypewriter} from 'react-simple-typewriter'
import {motion} from 'framer-motion'


export default function Hero() {

    const [text] = useTypewriter({
        words: ['Web Developer', 'UI/UX Designer'],
        loop: {},
    });

    function openCV() {
        window.open(cv, '_blank');
    }

    function openPortfo() {
        window.open(portfo, '_blank');
    }

    function openLinked() {
        location.href = "https://www.linkedin.com/in/ron-norbert-wijaya-a8962b307/";
    }

    function openGit() {
        location.href = "https://github.com/Monsieurrrr";
    }

    function openIG() {
        location.href = "https://www.instagram.com/ron.norbert/";
    }

  return (
    <div 
    className='hero-sec' id='hero'>
        <motion.div className="hero-pic"
                initial = {{opacity: 0, scale: 0.5, x: 120}}
                whileInView={{opacity: 1, scale: 1, x: 0}}
                transition={{duration: 1}}
                viewport={{margin: "-70px"}}
        >
            <img src={pp} alt="No pic" />
        </motion.div>

        <motion.div className='hero-text'
                initial = {{opacity: 0, scale: 0.5, x: -200}}
                whileInView={{opacity: 1, scale: 1, x: 0}}
                transition={{duration: 1}}
                viewport={{margin: "-30px"}}
        >
            <p className='p1'>Hello, I'm</p>
            <h1>Ron Norbert Wijaya</h1>

                <p className='p2'>{text} <span>Enthusiast</span></p>


            <div className='hero-btn'>
                <button className='btn cv' onClick={openCV}>Download CV</button>
                <button className='btn portfo' onClick={openPortfo} >Download Portfolio</button>
            </div>

            <div className='hero-social'>
                <img src={linkedin} alt="" onClick={openLinked} className='hero-icon'/>
                <img src={github} alt="" onClick={openGit} className='hero-icon'/>
                <img src={instagram} alt="" onClick={openIG} className='hero-icon'/>
            </div>

        </motion.div>
        

    </div>
  )
}
