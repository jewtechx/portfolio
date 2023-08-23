import React from 'react'
import Data from './Data'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {fa} from '@fortawesome/free-solid-svg-icons'

function Work() {
  return (
    <section className="work">
        <div className="heading">
            <h3>MY WORKS</h3>
            <h1>Some Of My Completed Projects</h1>
        </div>

        <div className="content">
            {
                Data.map(val => {
                    return(
                        <>
                        <div key={val.title} className="box">
                            <div className="img">
                                <img src={process.env.PUBLIC_URL + `/external/Resource-One-master/${val.cover}`} alt='work'/>
                            </div>

                            <div className="overlay">
                                <div className="text">
                                    <h2>{val.title}</h2>
                                    <p>{val.desc}</p>
                                </div>
                                <div className="icon">
                                    {/* <FontAwesomeIcon icon={faTabletScreenButton} className='.'/> */}
                                </div>
                            </div>
                        </div>
                        </>
                    )
                })
            }
        </div>
    </section>
  )
}

export default Work
