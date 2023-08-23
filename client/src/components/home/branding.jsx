import React from 'react'
import { motion } from 'framer-motion'
function Branding() {
    const data = [
        {
            id: "01",
            heading: "Digital Branding",
            desc: "Crafting captivating digital brands that resonate with audiences, igniting a spark of recognition and admiration. From creating mesmerizing visual identities to shaping compelling brand stories.",
          },
          {
            id: "02",
            heading: "Team Management",
            desc: "With a proven track record in leading high-performing teams, I thrive in fostering a culture of collaboration and innovation. Guiding talents towards success, I celebrate diversity and empower individuals to unleash their full potential,.",
          },
          {
            id: "03",
            heading: "Creative Mind",
            desc: "My mind is a canvas of boundless imagination, fueled by a thirst for innovation and originality. Blending artistry with technology, I engineer elegant solutions that push the boundaries of creativity.",
          }          
      ]

      const animateDiv = {
        initial : {
            opacity:0,
            y:80,
        },
        animate: (index) => ({
          opacity:1,
          y:0,
          transition:{
            delay:0.05 * index
          }
        })
      }
  return (
    
    <>
     <section className='branding'>
      <div className="container grid">
        {
            data.map((value,i) => {
                return (
                <motion.div 
                key={value.heading}
                variants={animateDiv}
                initial='initial'
                whileInView='animate'
                viewport={{
                  once:true
                }}
                custom={i}
                className="box flex">
                    <div className='text'>
                        <h1>{value.id}</h1>
                    </div>

                    <div className="para">
                        <h2>{value.heading}</h2>
                        <p>{value.desc}</p>
                    </div>
                </motion.div>
                )
            })
        }
        </div>    
    </section> 
    </>
  )
}

export default Branding
