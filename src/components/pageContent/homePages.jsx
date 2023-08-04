import React from 'react'
import Home from '../home/homes/home'
import Branding from '../home/branding'
import About from '../home/about/about'
import Servicess from '../home/servicess/servicess'
import Wrapper from '../home/wrapper'
import Skills from '../home/skills'
import WrapperOne from '../home/wrapperOne'
import Work from '../home/work/work'
import Blog from '../home/blog/blog'
import Footer from '../home/footer/footer'

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
      <Footer />
    </>
  )
}

export default HomePages
