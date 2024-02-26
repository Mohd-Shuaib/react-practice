import React from 'react'
import Common from './Common'
import web from './images/img2.jpg'


const Home = () => {
  return (
    <Common  heading='Welcome to Home Page' content='In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.' button='Shop Now' imgSrc={web}  />
      
  )
}

export default Home