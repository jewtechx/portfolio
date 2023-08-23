import React from 'react'
import {useNavigate} from 'react-router-dom'

function Wrapper() {
  const navigate = useNavigate();
    const data = [
        {
          title: "LOOKING FOR EXCLUSIVE SERVICES?",
          heading: "Unlock Your Business Potential",
          desc: "I am dedicated to providing you with the best for your business. Embrace seamless digital experiences, crafted with a perfect blend of technology and artistry, ensuring that your brand stands out in the digital landscape.",
        },
      ];
      
  return (
    <>
     <section className="branding wrapper">
        <div className="container">
            {data.map((val) => {
                return(
                    <>
                    <div key={val.title} className="box">
                        <h1>{val.title}</h1>
                        <h3>{val.heading}</h3>
                        <p>{val.desc}</p>
                    </div>
                    <button className='primary-btn-green' onClick={() => navigate('/contact')}>Contact Me</button>
                    </>
                )
            })}
        </div>
    </section> 
    </>
  )
}

export default Wrapper
