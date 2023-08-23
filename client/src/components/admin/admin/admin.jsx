import React from 'react'

export default function Admin() {
    const [file,setFile] = React.useState(null)

    const formData = new FormData()
    async function handleUpload(){
      //   await formData.append('file',file)
      //   console.log(formData)
      //  try{
      //   await fetch('http://localhost:2000/v1/websites',{
      //       method:'post',
      //       headers:{
      //           'Content-Type':'application/json'
      //       },
      //       body:JSON.stringify(formData)
      //   })
      //   console.log('uploaded')
      //  }catch(err){
      //      console.log('Encountered this error: ',err)
      //  }
    }
  return (
    <div className='container' style={{padding:"100px"}}>
      <input type='file' onChange={e => setFile(e.target.files[0])} />
      <button onClick={() => handleUpload()} className="primary-btn">Upload</button>
    </div>
  )
}
