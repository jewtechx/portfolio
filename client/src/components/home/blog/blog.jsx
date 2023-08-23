import React from 'react'
import {motion} from 'framer-motion'
import BlogData from './Blogdata'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowRight} from '@fortawesome/free-solid-svg-icons'

function Blog() {
  const animateDiv = {
    initial : (index) => ({
        opacity:0,
        x:index == 0 ? -80 : index == 2 ? 80 : 0,
        y:index == 1 ? 80 : 0
    }),
    animate: (index) => ({
      opacity:1,
      x:0,
      y:0,
      transition:{
        delay:0.01 * index
      }
    })
  }
  return (
    <>
      <div className="blog services">
        <div className="container topMargin">
            <div className="heading">
                <h3>LATEST BLOG</h3>
                <h1>Read Inspirational Story Every Weeek</h1>
            </div>

            <div className="container grid topMargin">
                {
                    BlogData.map((val,i) => {
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
                               key={val.title} className="box">
                                <div className="img">
                                    <img src={process.env.PUBLIC_URL + '/external/Resource-One-master' + val.cover} alt='blog' />
                                </div>

                                <div className="text">
                                    <span style={{color:'#cc1', fontSize:'13px'}}>{val.date}</span>
                                    <h6 style={{color:'#000', padding:'8px 0',fontSize:'15px'}}>{val.title}</h6>
                                    <a style={{textDecoration:'none',color:'#999999',alignItems:'center'}} href='/blog'>Read more <FontAwesomeIcon icon={faArrowRight}/> </a>
                                </div>
                              </motion.div>
                            </>
                        )
                    })
                }
            </div>
        </div>
      </div>
    </>
  )
}

export default Blog
