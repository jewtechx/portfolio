import React from 'react'
import Wrapper from '../wrapper/wrapper'
import BlogBody from '../body/body'
import '../wrapper/wrapper.css'

function BlogPageContent() {
  return (
    <div className='blog'>
      <Wrapper/>
      <BlogBody />
    </div>
  )
}

export default BlogPageContent
