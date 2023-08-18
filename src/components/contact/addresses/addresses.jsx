import React from 'react'
import "./addresses.css"

export default function Addresses(){
    return (
        <div className="addresses flex">
          <div className="left">
            <div className="heading">
                <h1>Visit Me</h1>
                <p>Come see us in person and experience my world of innovation and creativity. Schedule a visit today!</p>
            </div>
          </div>

          <div className="right">
             <div className="timetable-wrapper">
                 <span className="timetable-header primary-btn">Days - Hours</span>

                 <div className="timetable">
                    <div className="day-hours">
                        <h4>Monday - Friday</h4>
                        <p>8:30am - 5:30pm</p>
                    </div>
                    <div className="day-hours">
                        <h4>Saturday</h4>
                        <p>9:30am - 2:30pm</p>
                    </div>
                    <div className="day-hours">
                        <h4>Sundays</h4>
                        <p>1:30pm - 5:30pm</p>
                    </div>
                 </div>
             </div>
          </div>
        </div>
    )
}