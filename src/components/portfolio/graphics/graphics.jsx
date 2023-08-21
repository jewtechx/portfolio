import React from 'react'
import "./graphics.css"
import data from './graphicsData'

export default function Graphics() {
  const image = data.map((img,index) => {
    return(
      <div className='main-img'>
        <img onClick={(e) => setImagePreview(img.image,img.name)} className='image' src={img.image} alt={img.name} />
      </div>
    )
   })

   const [ImageForPreview,setImageForPreview] = React.useState(null)
   const [alt,setAlt] = React.useState(null)
   const preViewRef = React.useRef(null)

   function setImagePreview(image,alt){
    setAlt(alt)
    setImageForPreview(image)
    preViewRef.current.style.display= "block"
  }
  function closePreview(){
    preViewRef.current.style.display= "none"
   }


   return (
    <div className="container graphics">
       <div className="heading">
          <h1>Completed Graphic Designs</h1>
          
          <div className="image">
             {image}
          </div>

          <div className="preview" ref={preViewRef} onClick={() => closePreview()}>
             <img src={ImageForPreview} alt={alt} />
          </div>
       </div>
    </div>
  )
}
