import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFacebook,faInstagram,faTwitter,faYoutube,faPinterest,faDribbble} from '@fortawesome/free-brands-svg-icons'

function Home() {
  return (
    <>
     <section className='home'>
        <div className="container flex">
            <div className="left">
                <div className="img">
                    <img src={process.env.PUBLIC_URL + '/images/ceo.png'} alt='ceo' />
                </div>
            </div>

            <div className="right topMargin">
                <h1>I AM A <br/> SOFTWARE ENGINEER</h1>
                <div className="social-icons">
                    <a href=''><FontAwesomeIcon icon={faFacebook} className='facebook i' /></a>
                    <a href=''><FontAwesomeIcon icon={faInstagram} className='instagram i' /></a>
                    <a href=''><FontAwesomeIcon icon={faTwitter} className='twitter i' /></a>
                    <a href=''><FontAwesomeIcon icon={faYoutube} className='youtube i' /></a>
                    <a href=''><FontAwesomeIcon icon={faPinterest} className='pinterest i' /></a>
                    <a href=''><FontAwesomeIcon icon={faDribbble} className='dribbble i' /></a>
                    </div>

              <p>Through the alchemy of code, I breathe life into visionary ideas, crafting immersive digital experiences that leave lasting impressions. As a software engineer, my purpose is to empower, innovate, and transform challenges into opportunities for growth and progress. Let's collaborate and embark on a journey of technological wonder, where dreams become reality through the artistry of programming.</p>
              <button className='primary-btn'>Contact Me</button>
            </div>
        </div>
     </section>
    </>
  )
}

export default Home
