import React from 'react'
import '../Styles/Contact.css'
import { MdEmail } from "react-icons/md";
import { FaLine } from "react-icons/fa";
import { FaPhoneSquare } from "react-icons/fa";
import {motion} from 'framer-motion'




export default function Contact() {
  return (
    <div id='contact'>

      <motion.div className="title-wrap"
        initial = {{opacity: 0, scale: 0.8, y: -60}}
        whileInView={{opacity: 1, scale: 1, y: 0}}
        transition={{duration: 1.2}}
        viewport={{margin: "-150px"}}
      >
        <div className="sub-title">Where To Find</div>
        <div className="title">Contact Me</div>
        </motion.div>

    <div className="contact-wrap">
      <motion.form action="https://formspree.io/f/mbljroly" method="POST" className='form'
        initial = {{opacity: 0, scale: 1, x: -60}}
        whileInView={{opacity: 1, scale: 1, x: 0}}
        transition={{duration: 1}}
        viewport={{margin: "-150px"}}
      >
        <input type="text" name='name' id='form-name' placeholder='Name' />
        <input type="text" name='email' id='form-email' placeholder='Email' />
        <textarea name='message' id='form-desc khusus' placeholder='Message' />
        <button className='send-btn'>Send</button>
      </motion.form>

        <motion.div className="contact-desc"
          initial = {{opacity: 0, scale: 1, x: 60}}
          whileInView={{opacity: 1, scale: 1, x: 0}}
          transition={{duration: 1}}
          viewport={{margin: "-150px"}}
        >
          <div className='contact-container'>
              <div><MdEmail className="icon-con" /></div>

                <div className='con'>
                  <h4 className="contact-point">Email</h4>
                  <p className="contact-isi">ronnorbert29@gmail.com</p>
                </div>
          </div>

          <div className='contact-container'>
              <div><FaLine className="icon-con lineIcon" /></div>

                <div className='con'>
                  <h4 className="contact-point">Line</h4>
                  <p className="contact-isi">ron2911</p>
                </div>
          </div>

          <div className='contact-container'>
              <div><FaPhoneSquare className="icon-con phoneIcon" /></div>

                <div className='con'>
                  <h4 className="contact-point">Phone Number</h4>
                  <p className="contact-isi">+(62) 812-9176-8138</p>
                </div>
          </div>


        </motion.div>

    </div>

    </div>
  )
}
