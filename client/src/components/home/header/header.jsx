import React, { useState } from 'react'
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSearch,faBagShopping,faBox,faClose,faBars} from '@fortawesome/free-solid-svg-icons'
import {useLocation} from 'react-router-dom'

function Header() {
  const [sideBar,setSideBar] = useState(false);

  window.addEventListener('scroll', function(){
    const header = document.querySelector('.header')
    header.classList.toggle('active', window.screenY > 200)
  })

const path = useLocation().pathname
const pathname = path.split("/")[1]
// alert(pathname)

  if(pathname == 'blog'){
    var blogNav = {
        backgroundColor:'#08071c',
        padding:'20px',
    }
    var links = {
      color:'#f3f3f3'
    }
    var blogLink = {
      color:'#f54ea2'
    }
    var sideNav = {
      backgroundColor:'#08071c',
    }
  }
  return (
    <>
      <header className=' header' style={blogNav}>
        <div className="container flex">
            <Link to="/"><img className='logo' src={process.env.PUBLIC_URL + '/images/logo.png'} alt='logo' width={75} height={75} style={{marginTop:'-15px',borderRadius : '100%'}}/></Link> 
 

        <div className="nav">
            <ul style={sideNav} className={sideBar ? 'nav-links-sidebar' : 'nav-links'} onClick={() => setSideBar(false)}>
                <li>
                    <Link style={links} to='/' className={pathname == '' ? 'navActive' : '' }>Home</Link>
                </li>
                <li>
                    <Link style={links} to='/testimonials' className={pathname == 'testimonials' ? 'navActive' : '' }>Testimonials</Link>
                </li>
                <li>
                    <Link style={blogLink} to='/blog' className={pathname == 'blog' ? 'navActive' : '' }>Blog</Link>
                </li>
                <li>
                    <Link style={links} to='/portfolio' className={pathname == 'portfolio' ? 'navActive' : '' }>Portfolio</Link>
                </li>
                <li>
                    <Link style={links} to='/shop' className={pathname == 'shop' ? 'navActive' : '' }>Shop</Link>
                </li>
                <li>
                    <Link style={links} to='/contact' className={pathname == 'contact' ? 'navActive' : '' }>Contact</Link>
                </li>
                <li>
                    <Link style={links} to='/faq' className={pathname == 'faq' ? 'navActive' : '' }>FAQ</Link>
                </li>
                <li className='icon' style={links}>
                    <Link to="/shop"><i><FontAwesomeIcon icon={faSearch} className='HeaderIcon' /></i></Link>
                    <Link to="/shop"><i><FontAwesomeIcon icon={faBagShopping} className='HeaderIcon' /></i></Link>
                    <Link to="/shop"><i><FontAwesomeIcon icon={faBox} className='HeaderIcon' /></i></Link>
                    </li>

            </ul>
        </div>
        <button style={links} className='side-nav-toggler' onClick={() => setSideBar(!sideBar)}>
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
