import { faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './wrapper.css'

function Wrapper() {
  return (
    <>
      <section className="banner">
        <div className="head">
            <h1>Discover New Articles Here</h1>

            <div className="social-icons">
                  <a href='https://twitter.com/JewLarbi'><FontAwesomeIcon icon={faTwitter}  /></a>
                  <a href='https://www.youtube.com/@CodeSageJ-ll5fq'><FontAwesomeIcon icon={faYoutube} /></a>
            </div>
        </div>

        <div className="body">
            <p>All the articles and contents here have been <span>updated today</span> and you can find your <span>articles and contents</span> without any faustration</p>
        </div>

        <div className="end">
            <div className="search">
            <i><FontAwesomeIcon icon={faSearch}/></i>
            <input type='text' placeholder='search'/>
            </div>

            <div className="tags">
                <button>All</button>
                <button>Manufacturing</button>
                <button>Technology</button>
                <button>Sport</button>
                <button>Dating</button>
                <button>Design</button>
                <button>Programming</button>
            </div>
        </div>
      </section>
    </>
  )
}

export default Wrapper
