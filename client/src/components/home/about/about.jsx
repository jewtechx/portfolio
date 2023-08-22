import React from 'react'
import {motion} from 'framer-motion'

function About() {
    const data = [
        {
            title: "Who I Am And What I Do",
            desc1: "I am a passionate software engineer with a relentless vision to innovate and create cutting-edge solutions that push the boundaries of what's possible. Through my unwavering dedication and technical expertise, I bring ideas to life, breathing functionality and beauty into every project.",
            desc2: "My craft lies in crafting immersive digital experiences that captivate and inspire. From intuitive user interfaces to seamless interactions, I design with a focus on user delight, ensuring that each interaction leaves a lasting positive impression.",
            desc3: "Driven by a tireless pursuit of excellence, I approach every line of code with meticulous attention to detail. The thrill of solving complex challenges and optimizing performance fuels my determination to deliver top-notch results.",
            cover: process.env.PUBLIC_URL + '/images/jew.png',
          }
          
      ]
      const staggerAnimation = {
        initial:{
            y:-30,
        },
        animate:{
            y:0,
            transition:{
                duration:1
            }
        }
      }
  return (
    <>
      <section className='about topMargin'>
        <div className="container flex">
            {
                data.map((value) => {
                    return(
                        <div className='flex'>
                        <div className="left mtop">
                            <motion.div
                            variants={staggerAnimation}
                            initial='initial'
                            animate='animate'
                            whileInView='animate'
                            viewport={{
                                once:true
                            }}
                            className="heading">
                                <h3>About Me</h3>
                                <h1>{value.title}</h1>
                            </motion.div>

                            <motion.p
                            variants={staggerAnimation}
                            initial='initial'
                            animate='animate'
                            transition={{
                                delay:1
                            }}
                            whileInView='animate'
                            viewport={{
                                once:true
                            }}
                            >{value.desc1}</motion.p>
                            <motion.p
                            variants={staggerAnimation}
                            initial='initial'
                            animate='animate'
                            transition={{
                                delay:2
                            }}
                            whileInView='animate'
                            viewport={{
                                once:true
                            }}
                            >{value.desc2}</motion.p>
                            <motion.p
                            variants={staggerAnimation}
                            initial='initial'
                            animate='animate'
                            transition={{
                                delay:3
                            }}
                            whileInView='animate'
                            viewport={{
                                once:true
                            }}
                            >{value.desc3}</motion.p>
                            <button className='primary-btn-green'>Download CV</button>
                        </div>

                            <div className="right">
                                <motion.div 
                                initial={{x:200}}
                                animate={{x:0}}
                                transition={{
                                    type:'spring',
                                    stiffness:100
                                }}
                                whileInView='animate'
                                viewport={{
                                    once:true
                                }}
                                className="img">
                                    <img src={value.cover} alt='Jew'/>
                                </motion.div>
                            </div>
                    </div>
                    )
                })
            }
        </div>
      </section>
    </>
  )
}

export default About
