import React from 'react'
import {motion} from "framer-motion"

import './comments.css'

function Comments() {
    const data = [
        {
          sender: 'John Doe',
          comment: 'Great work! I love the design and functionality of the website.',
          date: '2023-08-04',
          image: process.env.PUBLIC_URL + '/images/comment1.jpg',
          rating: 5,
        },
        {
          sender: 'Jane Smith',
          comment: 'I am impressed by the attention to detail. Highly recommended!',
          date: '2023-08-05',
          image: process.env.PUBLIC_URL + '/images/comment5.jpg',
          rating: 4.5,
        },
        {
          sender: 'Mike Johnson',
          comment: 'The developer was professional and delivered on time. Thank you!',
          date: '2023-08-06',
          image: process.env.PUBLIC_URL + '/images/comment2.jpg',
          rating: 4,
        },
        {
          sender: 'Emily Adams',
          comment: 'Excellent service. The designer exceeded my expectations!',
          date: '2023-08-07',
          image: process.env.PUBLIC_URL + '/images/comment3.jpg',
          rating: 5,
        },
        {
          sender: 'Mark Wilson',
          comment: 'The team did an amazing job. I\'m happy with the results!',
          date: '2023-08-08',
          image: process.env.PUBLIC_URL + '/images/comment4.jpg',
          rating: 4.8,
        },
      ];
      
      const animateDiv = {
        initial : {
            opacity:0,
            y:80,
        },
        animate: (index) => ({
          opacity:1,
          y:0,
          transition:{
            delay:0.05 * index
          }
        })
      }
  return (
    <div className='comments'>
      <div className="heading">
            <h2>COMMENTS</h2>
            <h1>Explore Some Latest Comments About Me</h1>
        </div>

        {
            data.map((val,i) => {
                return (
                    <>
                     <motion.div 
                     variants={animateDiv}
                     initial='initial'
                     whileInView='animate'
                     viewport={{
                       once:true
                     }}
                     custom={i}
                     className='comment-wrapper'>
                        <div className="img">
                            <img src={val.image} alt={val.sender}/>
                        </div>

                        <div className="comment">
                            <h2>{val.sender}</h2>
                            <p>{val.comment}</p>
                               <div className="date-rating">
                                  <span>Rated: {val.rating} stars</span>
                                  <span>{val.date}</span>
                               </div>
                        </div>
                     </motion.div>
                    </>
                )
            })
        }
    </div>
  )
}

export default Comments
