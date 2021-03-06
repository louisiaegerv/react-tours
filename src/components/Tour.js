import React from 'react'
import { Link } from 'react-router-dom'

const Tour = ({ tour, removeTour }) => {
  const { id, image, name, info, price } = tour
  return (
    <>
      <article key={id} className='single-tour'>
        <Link to={`/tours/${id}`}>
          <img src={image} alt='' />
        </Link>
        <footer>
          <div className='tour-info'>
            <h4>{name}</h4>
            <h4 className='tour-price'>${price}</h4>
          </div>
          {/* <p>{info}</p> */}
          <button className='btn delete-btn' onClick={() => removeTour(id)}>
            Not Interested
          </button>
        </footer>
      </article>
    </>
  )
}

export default Tour
