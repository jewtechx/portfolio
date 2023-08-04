import React, { useState } from 'react'
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSearch,faBagShopping,faBox,faClose,faBars} from '@fortawesome/free-solid-svg-icons'

function Header() {
  const [sideBar,setSideBar] = useState(false);

  window.addEventListener('scroll', function(){
    const header = document.querySelector('.header')
    header.classList.toggle('active', window.screenY > 200)
  })
  return (
    <>
      <header className='header'>
        <div className="container flex">
            <img src={process.env.PUBLIC_URL + '/images/logo.png'} alt='logo' width={80} height={80} style={{marginTop:'-20px'}}/>
 

        <div className="nav">
            <ul className={sideBar ? 'nav-links-sidebar' : 'nav-links'} onClick={() => setSideBar(false)}>
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
                    <Link to='/shop'>Shop</Link>
                </li>
                <li>
                    <Link to='/contact'>Contact</Link>
                </li>
                <li className='icon'>
                    <i><FontAwesomeIcon icon={faSearch} className='HeaderIcon' /></i>
                    <i><FontAwesomeIcon icon={faBagShopping} className='HeaderIcon' /></i>
                    <i><FontAwesomeIcon icon={faBox} className='HeaderIcon' /></i>
                    </li>

            </ul>
        </div>
        <button className='side-nav-toggler' onClick={() => setSideBar(!sideBar)}>
            {
            sideBar ?
             <i><FontAwesomeIcon icon={faClose} className='HeaderIcon'/></i> :
            <i><FontAwesomeIcon icon={faBars} className='HeaderIcon'/></i>
            }
        </button>

        </div>
      </header>
    </>
  )
}

export default Header
