import React from 'react'
import { NavLink } from 'react-router-dom'

const Card = ({name, img}) => {
  return (
     <>
      <div className='col-lg-4 gy'>
          <div class="card">
            <img src={img} class="card-img-top" alt={name} />
            <div class="card-body">
              <h5 class="card-title">{name}</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <NavLink to="/" class="btn btn-primary">Go somewhere</NavLink>
            </div>
          </div>
        </div>
    </>
  )
}

export default Card