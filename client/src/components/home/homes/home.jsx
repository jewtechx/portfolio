import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFacebook,faInstagram,faTwitter,faYoutube,faPinterest,faDribbble} from '@fortawesome/free-brands-svg-icons'
import { motion } from 'framer-motion';
import { Tilt } from 'react-tilt';
import {useNavigate} from 'react-router-dom'
function Home() {
  const defaultOptions = {
    reverse:        false,  // reverse the tilt direction
    max:            35,     // max tilt rotation (degrees)
    perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
    scale:          1.0,    // 2 = 200%, 1.5 = 150%, etc..
    speed:          2000,   // Speed of the enter/exit transition
    transition:     true,   // Set a transition on enter/exit.
    axis:           null,   // What axis should be disabled. Can be X or Y.
    reset:          true,    // If the tilt effect has to be reset on exit.
    easing:         "cubic-bezier(.09,1.08,.52,.99)",    // Easing on enter/exit.
  }
  const navigate = useNavigate()

  const staggerVariants = {
    initial: {
      opacity: 0,
      y: -120,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 2.5,
        ease: 'easeInOut',
      },
    },
  };
  return (
    <>
     <section className='home'>
        <div className="container flex">
            <motion.div
            initial={{x:-100}}
            drag
            dragConstraints={{
              x:100,
              y:100
            }}
            animate={{x:0}}
            transition={{
              when:'beforeChildren',
              type:'spring',
              stiffness:90,
              staggerChildren:0.9
            }} 
            className="left">
                <div className="img">
                  <Tilt options={defaultOptions}>
                    <img src={process.env.PUBLIC_URL + '/images/ceo.png'} alt='ceo' />
                  </Tilt>
                </div>
            </motion.div>

            <motion.div
            initial={{
              y:-100,
              opacity:0,
            }}
            animate={{
              y:0,
              opacity:1
            }}
            transition={{
              type:'spring',
              stiffness:90,

            }}
             className="right topMargin">
                <motion.h1 variants={staggerVariants}>I AM A <br/> SOFTWARE ENGINEER</motion.h1>
                <motion.div className="social-icons" variants={staggerVariants}>
                    <a href=''><FontAwesomeIcon icon={faFacebook} className='facebook i' /></a>
                    <a href=''><FontAwesomeIcon icon={faInstagram} className='instagram i' /></a>
                    <a href=''><FontAwesomeIcon icon={faTwitter} className='twitter i' /></a>
                    <a href=''><FontAwesomeIcon icon={faYoutube} className='youtube i' /></a>
                    <a href=''><FontAwesomeIcon icon={faPinterest} className='pinterest i' /></a>
                    <a href=''><FontAwesomeIcon icon={faDribbble} className='dribbble i' /></a>
                    </motion.div>

              <motion.p variants={staggerVariants}>Through the alchemy of code, I breathe life into visionary ideas, crafting immersive digital experiences that leave lasting impressions. As a software engineer, my purpose is to empower, innovate, and transform challenges into opportunities for growth and progress. Let's collaborate and embark on a journey of technological wonder, where dreams become reality through the artistry of programming.</motion.p>
              <motion.button variants={staggerVariants} className='primary-btn' onClick={() => navigate('/contact')}>Contact Me</motion.button>
            </motion.div>
        </div>
     </section>
    </>
  )
}

export default Home
