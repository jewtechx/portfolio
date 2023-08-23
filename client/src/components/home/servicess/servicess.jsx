import React from 'react'
import {motion} from 'framer-motion'
import ServicesData from './ServicesData'

function Servicess() {

  const animateDiv = {
    initial : (index) => (
        {
          opacity:0,
          y:index % 2 != 0 ? 80 : -80,
      }
    ),
    animate: (index) => ({
      opacity:1,
      y:0,
      transition:{
        delay:0.02 * index
      }
    })
  }

  return (
    <div>
      <section className='services topMargin'>
        <div className="container">
          <motion.div initial={{y:80}} animate={{y:0}} className="heading">
            <h3>MY SERVICES</h3>
            <h1>Interactive Services Offered By Me</h1>
          </motion.div>

          <div className="container grid topMargin">
            {
              ServicesData.map((value,i) => {
                return(
                  <>
                  <motion.div 
                  variants={animateDiv}
                  initial='initial'
                  whileInView='animate'
                  viewport={{
                    once:true
                  }}
                  custom={i}
                   key={value.title} className="box">
                    <div className="img">
                      <img src={value.cover} alt='service'/>
                    </div>

                    <div className="text">
                      <h2>{value.title}</h2>
                      <p>{value.desc}</p>
                    </div>
                  </motion.div>
                  </>
                )
              })
            }
          </div>
        </div>
      </section>
    </div>
  )
}

export default Servicess
