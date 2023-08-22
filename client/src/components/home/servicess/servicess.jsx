import React from 'react'
import ServicesData from './ServicesData'

function Servicess() {
  return (
    <div>
      <section className='services topMargin'>
        <div className="container">
          <div className="heading">
            <h3>MY SERVICES</h3>
            <h1>Interactive Services Offered By Me</h1>
          </div>

          <div className="container grid topMargin">
            {
              ServicesData.map(value => {
                return(
                  <>
                  <div className="box">
                    <div className="img">
                      <img src={value.cover} alt='service'/>
                    </div>

                    <div className="text">
                      <h2>{value.title}</h2>
                      <p>{value.desc}</p>
                    </div>
                  </div>
                  </>
                )
              })
            }
          </div>
        </div>
      </section>
    </div>
  )
}

export default Servicess
