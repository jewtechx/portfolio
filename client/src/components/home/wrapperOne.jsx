import React from 'react'
import {motion} from 'framer-motion'

function WrapperOne() {
    const data = [
        {
          num: "520%",
          text: "AWARDS WINNING",
        },
        {
          num: "99%",
          text: "SATISFIED CLIENTS",
        },
        {
          num: "3325",
          text: "CREATIVE PROJECTS",
        },
        {
          num: "54380",
          text: "LINES OF CODE ",
        },
      ]

      const animateDiv = {
        initial : (index) => ({
            opacity:0,
            x:index % 2 !== 0 ? 80 : -80,
        }),
        animate: (index) => ({
          opacity:1,
          x:0,
          transition:{
            delay:0.05 * index
          }
        })
      }
  return (
    <>
      <section className="branding wrapperOne">
        <div className="container grid1">
            {
                data.map((val,i) => {
                    return (
                        <>
                        <motion.div
                        variants={animateDiv}
                        initial='initial'
                        whileInView='animate'
                        viewport={{
                          once:true
                        }}
                        custom={i}
                         key={val.text} className="box">
                            <h1>{val.num}</h1>
                             <p>{val.text}</p>
                        </motion.div>
                        </>
                    )
                })
            }
        </div>
      </section>
    </>
  )
}

export default WrapperOne
