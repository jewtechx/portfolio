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

      //download cv

      const DownloadCV = () => {
        const link = document.createElement('a')
        const filePath = './cv.pdf'
        link.href = filePath
        link.download = 'jew-cv.pdf'
        link.click()
        alert('Dowloading...')
      }
  return (
    <>

      <section className='about topMargin'>
        <div className="container flex">
            {
                data.map((value,i) => {
                    return(
                        <div key={value.title} className='flex'>
                        <div className="left mtop">
                            <motion.div
                            variants={animateDiv}
                            initial='initial'
                            whileInView='animate'
                            viewport={{
                              once:true
                            }}
                            custom={i}
                            className="heading">
                                <h3>About Me</h3>
                                <h1>{value.title}</h1>
                            </motion.div>

                            <motion.p
                            variants={animateDiv}
                            initial='initial'
                            whileInView='animate'
                            viewport={{
                              once:true
                            }}
                            custom={i}
                            >{value.desc1}</motion.p>
                            <motion.p
                            variants={animateDiv}
                            initial='initial'
                            whileInView='animate'
                            viewport={{
                              once:true
                            }}
                            custom={i}
                            >{value.desc2}</motion.p>
                            <motion.p
                            variants={animateDiv}
                            initial='initial'
                            whileInView='animate'
                            viewport={{
                              once:true
                            }}
                            custom={i}
                            >{value.desc3}</motion.p>
                            <button onClick={() => DownloadCV()} className='primary-btn-green'>Download CV</button>
                        </div>

                            <div className="right">
                                <motion.div 
                               variants={animateDiv}
                               initial='initial'
                               whileInView='animate'
                               viewport={{
                                 once:true
                               }}
                               custom={i}
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
