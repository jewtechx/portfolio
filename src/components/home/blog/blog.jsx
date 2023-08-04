import React from 'react'
import BlogData from './Blogdata'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowRight} from '@fortawesome/free-solid-svg-icons'

function Blog() {
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
                    BlogData.map(val => {
                        return(
                            <>
                              <div className="box">
                                <div className="img">
                                    <img src={process.env.PUBLIC_URL + '/external/Resource-One-master' + val.cover} alt='blog' />
                                </div>

                                <div className="text">
                                    <span style={{color:'#cc1', fontSize:'13px'}}>{val.date}</span>
                                    <h6>{val.title}</h6>
                                    <a style={{textDecoration:'none',color:'#999999',alignItems:'center'}} href='/'>Read more <FontAwesomeIcon icon={faArrowRight}/> </a>
                                </div>
                              </div>
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
