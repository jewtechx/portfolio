import React from "react"
import {Link} from "react-router-dom"
import "./portfolioNav.css"
import {useLocation} from "react-router-dom"

function PortfolioNav(){
    const {pathname} = useLocation()
    return(
        <div className="container portfolio-nav">
           <div className="nav">
              <Link to="." className={pathname == '/portfolio' ? "navActive" : ""}>Websites</Link>
              <Link to="graphics"  className={pathname == '/portfolio/graphics' ? "navActive" : " "}>Graphics</Link>
              <Link to="mobile-apps"  className={pathname == '/portfolio/mobile-apps' ? "navActive" : " "}>Mobile Apps</Link>
              <Link to="smart-contracts"  className={pathname == '/portfolio/smart-contracts' ? "navActive" : " "}>Smart Contracts</Link>
           </div>
        </div>
    )
}

export default PortfolioNav