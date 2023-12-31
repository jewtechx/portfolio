import React from 'react'
import {motion} from "framer-motion"

import './contact.css'

export default function ContactUs(){
    return (
        <div className="container contact flex flex-col sm:flex-row">
          <motion.div 
          initial={{opacity:0}}
          animate={{opacity:1}}
          className="left">
                <div className="heading">
                    <h2>Contact Us</h2>
                    <h1>Get In Touch With Me Now</h1>
                    <p>Reach out to me – your feedback and inquiries matter!</p>
                </div>
          </motion.div>

          <motion.div 
          initial={{x:100}}
          animate={{x:0}}
          className="right">
            <form className="w-1/2 h-60 rounded-md shadow-md px-4 py-8">
                <div className="field">
                    <label classname="label" htmlFor="name">Fullname</label>
                    <input type="text" name="name" className="input"/>
                </div>
                <div className="field">
                    <label classname="" htmlFor="email">Email</label>
                    <input type="text" name="email" className="input"/>
                </div>

                <div className="field">
                    <label htmlFor="message" className="input">Message</label>
                    <textarea className="textarea" name="message"/>
                </div>

                <div className="button-holder">
                 <button className="primary-btn">Submit</button>
                </div>
            </form>
          </motion.div>
        </div>
    )
}