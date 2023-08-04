import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope,faPhone,faLocation, } from '@fortawesome/free-solid-svg-icons';
import {faInstagram,faTwitter,faYoutube,faPinterest,faDribbble} from '@fortawesome/free-brands-svg-icons'


import React from 'react'
import {Link} from 'react-router-dom';

function Footer() {
  return (
    <>
     <footer>
           <div className="container grid1">
             <div className="box">
               <img src={process.env.PUBLIC_URL + '/images/logo.png'} alt="logo" />
               <p>My skills as a software engineer transcend lines of code, extending into a realm of limitless possibilities.</p>
               <div className="social-icons">
                    {/* <a href=''><FontAwesomeIcon icon={faFacebook} className='facebook i' /></a> */}
                    <a href=''><FontAwesomeIcon icon={faInstagram} className='instagram i' /></a>
                    <a href=''><FontAwesomeIcon icon={faTwitter} className='twitter i' /></a>
                    <a href=''><FontAwesomeIcon icon={faYoutube} className='youtube i' /></a>
                    <a href=''><FontAwesomeIcon icon={faPinterest} className='pinterest i' /></a>
                    <a href=''><FontAwesomeIcon icon={faDribbble} className='dribbble i' /></a>
                </div>
             </div>
             <div className="box">
                <h2>Quick Links</h2>
                <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/pages'>Pages</Link>
                </li>
                <li>
                    <Link to='/blog'>Blog</Link>
                </li>
                <li>
                    <Link to='/portfolio'>Portfolio</Link>
                </li>
                <li>
                    <Link to='/contact'>Contact</Link>
                </li>
                <li>
                    <Link to='/faq'>FAQ</Link>
                </li>
                </ul>
             </div>

             <div className="box">
                <h2>Recent Posts</h2>
                <div className="text">
                   <Link to=''>
                   <p>
                    3 WooCommerce Plugins to boost sales
                   </p>
                   <span>28 FEB, 2022</span>
                   </Link>

                   <Link to=''>
                   <p>
                    3 WooCommerce Plugins to boost sales
                   </p>
                   <span>28 FEB, 2022</span>
                   </Link>

                   <Link to=''>
                   <p>
                    3 WooCommerce Plugins to boost sales
                   </p>
                   <span>28 FEB, 2022</span>
                   </Link>
                </div>
             </div>

             <div className="box">
                <h2>Get in Touch</h2>
                <p>My skills as a software engineer transcend lines of code, extending into a realm of limitless possibilities</p>
                 
                 <div class='icon'>
                    <i><FontAwesomeIcon icon={faLocation}/></i>
                    <label htmlFor=''>Location:Accra USA</label>
                  </div>

                  <div className="icon">
                  <i><FontAwesomeIcon icon={faPhone}/></i>
                  <label htmlFor=''>+233265865717</label>
                  </div>

                  <div className="icon">
                  <i><FontAwesomeIcon icon={faEnvelope}/></i>
                  <label htmlFor=''>jwlarbi15@gmail.com</label>
                  </div>
             </div>
           </div>

           <div className="legal container">
                <p>Copyright @2023 . All Rights Reserved</p>
                <label htmlFor="">
                    Designed & developed by <span>JewTech</span>
                </label>
           </div>
    </footer> 
    </>
  )
}

export default Footer
