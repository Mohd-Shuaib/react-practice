import React from 'react'
import { NavLink } from 'react-router-dom'

const Common = (props) => {
  return (
    <>
    <div className='container'>
      <div className='row'>
        <div className='col-lg-6'>
          <h1>{props.heading}</h1>
          <p>{props.content}</p>
          <NavLink type='button'>{props.button}</NavLink>
        </div>
        <div className='col-lg-6'>
            <img src={props.imgSrc} style={{ width:'100%'}} />
        </div>
      </div>
    </div>
  </>
  )
}

export default Common