import React from 'react'
import Home from '../homes/home'
import Branding from '../branding'
import About from '../about/about'
import Servicess from '../servicess/servicess'
import Wrapper from '../wrapper'
import Skills from '../skills'
import WrapperOne from '../wrapperOne'
import Work from '../work/work'
import Blog from '../blog/blog'

function HomePages() {
  return (
    <>
      <Home />
      <Branding />
      <About/>
      <Servicess />
      <Wrapper />
      <Skills />
      <WrapperOne />
      <Work />
      <Blog />
    </>
  )
}

export default HomePages
