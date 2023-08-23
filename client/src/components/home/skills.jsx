import React from 'react'
import {motion} from 'framer-motion'

function Skills() {
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

    const Progress = ({done, title,id}) => {
        return (
            <motion.div 
            variants={animateDiv}
                initial='initial'
                whileInView='animate'
                viewport={{
                  once:true
                }}
                custom={id}
                className='wrapper'>
            <div className="progress">
                <div className="progress-done" style={{opacity:1,width:`${done}%`}}>
                    <h4>{title}</h4>
                    <h4>{done}%</h4>
                </div>
            </div>
            </motion.div>
        )
    }

    const data = [
        {
            title:'Beyond Code, Into Possibility',
            desc1:'My skills as a software engineer transcend lines of code, extending into a realm of limitless possibilities. As your technical partner, I bridge the gap between vision and reality, building digital experiences that resonate with users and drive business success.',
            desc2:'Innovation is my compass, adaptation is my forte, and excellence is my destination. As your software engineer, I thrive in embracing cutting-edge technologies and industry trends, ensuring that your projects are at the forefront of digital advancement'
        }
    ]
  return (
    <>
     <div className="skill">
        <div className="container">
            <div className="heading">
                <h3>WHY CHOOSE ME</h3>
                <h1>Some Of My Skills</h1>
            </div>

            <div className="content flex">
                <div className="left topMargin">
                    <Progress done='80' title='HTML' id="1"/>
                    <Progress done='80' title='CSS' id="2"/>
                    <Progress done='70' title='JAVASCRIPT' id="3"/>
                    <Progress done='80' title='REACT' id="4"/>
                    <Progress done='85' title='NEXT JS' id="5"/>
                    <Progress done='90' title='EXPRESS JS' id="6"/>
                    <Progress done='75' title='POSTGRESQL' id="7"/>
                    <Progress done='50' title='SOLIDITY' id="8"/>
                    <Progress done='50' title='PYTHON' id="9"/>
                </div>

                <div className="right topMargin">
                    {data.map((value,i) => {
                        
                        return(
                            <motion.div
                            variants={animateDiv}
                            initial={{opacity:0}}
                            animate={{opacity:1}}
                            whileInView='animate'
                            viewport={{once:true}}
                            >
                             <h1>{value.title}</h1>
                             <p>{value.desc1}</p>
                             <p>{value.desc2}</p>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </div>
    </div> 
    </>
  )
}

export default Skills
