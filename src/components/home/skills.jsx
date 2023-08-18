import React from 'react'

function Skills() {
    const Progress = ({done, title}) => {
        return (
            <div className='wrapper'>
            <div className="progress">
                <div className="progress-done" style={{opacity:1,width:`${done}%`}}>
                    <h4>{title}</h4>
                    <h4>{done}%</h4>
                </div>
            </div>
            </div>
        )
    }

    const data = [
        {
            title:'Beyond Code, Into Possibility',
            desc1:'My skills as a software engineer transcend lines of code, extending into a realm of limitless possibilities. As your technical partner, I bridge the gap between vision and reality, building digital experiences that resonate with users and drive business success.',
            desc2:'Innovation is my compass, adaptation is my forte, and excellence is my destination. As your software engineer, I thrive in embracing cutting-edge technologies and industry trends, ensuring that your projects are at the forefront of digital advancement'
        }
    ]
  return (
    <>
     <div className="skill">
        <div className="container">
            <div className="heading">
                <h3>WHY CHOOSE ME</h3>
                <h1>Some Of My Skills</h1>
            </div>

            <div className="content flex">
                <div className="left topMargin">
                    <Progress done='80' title='HTML'/>
                    <Progress done='80' title='CSS'/>
                    <Progress done='70' title='JAVASCRIPT'/>
                    <Progress done='80' title='REACT'/>
                    <Progress done='85' title='NEXT JS'/>
                    <Progress done='90' title='NODE JS'/>
                    <Progress done='75' title='POSTGRESQL'/>
                    <Progress done='50' title='SOLIDITY'/>
                </div>

                <div className="right topMargin">
                    {data.map((value) => {
                        return(
                            <>
                             <h1>{value.title}</h1>
                             <p>{value.desc1}</p>
                             <p>{value.desc2}</p>
                            </>
                        )
                    })}
                </div>
            </div>
        </div>
    </div> 
    </>
  )
}

export default Skills
