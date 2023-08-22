import React from 'react'
import "./websites.css"
import data from './websitesData'

export default function Websites() {
  //previewing image on click
  const [previewImg,setPreviewImg] = React.useState(null)
  const previewImgRef = React.useRef(null)

  function setPreview(e){
     setPreviewImg(e.target.src)
     previewImgRef.current.style.display = "block"
    }
    function closePreview(e){
    previewImgRef.current.style.display = "none"
  }

  //resetting cover image
  const [newCoverImg,setNewCoverImg] = React.useState(null)
  const [getIndex,setGetIndex] = React.useState(null)
 
  function getCoverImg(coverImg,index){
    setGetIndex(index)
    setNewCoverImg(coverImg)
  }
  const Website = 
        data.map((value,index) => {
        return(
          <div className='website-wrapper'>
            <div className={`image-and-desc ${Number(index) % 2 != 0 ? "flex-inverse" : "" }`}>
              <div className="leftWebsite">
                <img  src={index == getIndex ? newCoverImg  : value.mainCoverImage} alt={value.title} onClick={(e) => setPreview(e)}/>
              </div>

              <div className="rightWebsite">
                <h2>{value.title}</h2>
                <p>{value.desc}              
                  <a href={value.linkToWeb}> - Visit website in new window</a>
                </p>
                <a className={`github primary-btn ${Number(index) % 2 != 0 ? "github-float-left":""}`} href={value.linkToGithub}>View Code</a>
              </div>
            </div>


            <div className="more-images">
              <img src={value.subImages2} onClick={() => getCoverImg(value.subImages2,index)}alt="more-images"/>
              <img src={value.subImages3} onClick={() => getCoverImg(value.subImages3,index)}alt="more-images"/>
              <img src={value.subImages4} onClick={() => getCoverImg(value.subImages4,index)}alt="more-images"/>
              <img src={value.subImages5} onClick={() => getCoverImg(value.subImages5,index)}alt="more-images"/>
            </div>
          </div>
        )
      })


  return (
    <div className='container websites'>
      <div className="heading"><br />
        <h1>Completed Websites</h1>
      </div>
     <div className='preview-img' ref={previewImgRef} 
          onClick={(e) => closePreview(e)}
     >
        <img src={previewImg ? previewImg: ""} alt={previewImg} />
     </div>
     {Website}      
    </div>
  )
}
