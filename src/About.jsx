import React from 'react'
import Common from './Common'
import web from './images/img1.png'

const About = () => {
  return (
    <>
      <Common heading='Welcome to About Page' content='In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.' button='About Shop Now' imgSrc={web} />
    </>
  )
}

export default About