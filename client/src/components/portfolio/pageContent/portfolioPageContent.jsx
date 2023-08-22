import React from "react"
import { Outlet } from "react-router-dom"
import PortfolioNav from "../nav/portfolioNav"

function PortfolioPageContent(){
    return(
        <div>
            <PortfolioNav />
            <Outlet />
        </div>
    )
}
export default PortfolioPageContent