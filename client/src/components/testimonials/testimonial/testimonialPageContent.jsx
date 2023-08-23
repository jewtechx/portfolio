import React from 'react'
import './testimonial.css';
import { Tilt } from 'react-tilt';
import {motion, transform} from "framer-motion"

const defaultOptions = {
	reverse:        false,  // reverse the tilt direction
	max:            35,     // max tilt rotation (degrees)
	perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
	scale:          1.1,    // 2 = 200%, 1.5 = 150%, etc..
	speed:          3000,   // Speed of the enter/exit transition
	transition:     true,   // Set a transition on enter/exit.
	axis:           null,   // What axis should be disabled. Can be X or Y.
	reset:          true,    // If the tilt effect has to be reset on exit.
	easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
}

function TestimonialPageContent() {
  const data = [
    {
      title: 'Outstanding Developer',
      image: process.env.PUBLIC_URL + '/images/test2.jpg',
      testimonial:
        "I am amazed by the work this developer did on my website. He turned my vision into reality and delivered beyond my expectations. Highly recommended!",
      author: 'Jeff Thompson',
    },
    {
      title: 'Great Designer',
      image: process.env.PUBLIC_URL + '/images/test1.jpg',
      testimonial:
        "Working with this designer was a pleasure. He has a great eye for design and created a stunning website for my business",
      author: 'Michael Johnson',
    },
    {
      title: 'Professional and Reliable',
      image: process.env.PUBLIC_URL + '/images/test3.jpg',
      testimonial:
        "I hired this developer for a critical project, and he handled it with utmost professionalism and delivered on time. I'm impressed with his skills and dedication.",
      author: 'Emily Adams',
    },
  ];
  

  return (
    <>
      <section className='testimonial'>
        <div className="heading">
            <h2>TESTIMONIALS</h2>
            <h1>What Clients Say About Me</h1>
        </div>
        {
          data.map((val,i) => {
            {
              var animate = {
                initial: (index) => ( {
                  width:0,
                  x:index % 2 == 0 ? -100 : 100,
                  transform:"rotate(360deg)"
                 
              }),
                  animate: (index) => (
                    {
                      width:"90%",
                      x:0,
                      // borderRadius:"unset",
                      transform:"rotate(0)"
                    }
                  )}
            }
            return(
              <>
                <div className="wrapper">
                    <div className="img">
                        <Tilt options={defaultOptions}>
                           <motion.img 
                           variants={animate}
                           initial='initial'
                           whileInView='animate'
                           viewport={{
                             once:true
                           }}
                           custom={i}
                           src={val.image} alt={val.author} />
                        </Tilt>
                    </div>

                    <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.02 * i}} className="text">
                        <span>""</span>
                        <h3>{val.title}</h3>
                        <p>{val.testimonial}</p>
                        <h4>{val.author}</h4>
                    </motion.div>
                </div>
              </>
            )
          })
        }
      </section>
    </>
  )
}

export default TestimonialPageContent
