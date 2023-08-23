import React from 'react'
import {motion} from 'framer-motion'

import "./addresses.css"

export default function Addresses(){
    var animateDiv = {
        initial: {
            x:100
        },
        animate:{
            x:0
        }
    }
    return (
        <div className="addresses flex">
          <motion.div 
          variants={animateDiv}
          initial="initial"
          whileInView="animate"
          viewport={{once:true}}
          className="left">
            <div className="heading">
                <h1>Visit Me</h1>
                <p>Come see us in person and experience my world of innovation and creativity. Schedule a visit today!</p>
            </div>
          </motion.div>

          <div className="right">
             <motion.div
             variants={animateDiv}
             initial="initial"
             whileInView="animate"
             viewport={{once:true}}
              className="timetable-wrapper">
                 <span className="timetable-header primary-btn">Days - Hours</span>

                 <div className="timetable">
                    <div className="day-hours">
                        <h4>Monday - Friday</h4>
                        <p>8:30am - 5:30pm</p>
                    </div>
                    <div className="day-hours">
                        <h4>Saturday</h4>
                        <p>9:30am - 2:30pm</p>
                    </div>
                    <div className="day-hours">
                        <h4>Sundays</h4>
                        <p>1:30pm - 5:30pm</p>
                    </div>
                 </div>
             </motion.div>
          </div>
        </div>
    )
}