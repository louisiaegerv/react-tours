import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

const TourDetail = ({ tours }) => {
  const { id } = useParams()
  const [tour, setTour] = useState({
    id: '',
    image: '',
    name: '',
    price: '',
    info: '',
  })
  const [foundTour, setFoundTour] = useState(false)

  useEffect(() => {
    const thisTour = tours.find((tour) => tour.id === id)
    setTour(thisTour)
  }, [id])

  return (
    <>
      {tour ? (
        <>
          <h3>{tour.name}</h3>
          <p>${tour.price}</p>
          <p>{tour.info}</p>
          <img src={tour.image} alt='' />
        </>
      ) : (
        <section style={{ textAlign: 'center' }}>
          <h2>Tour '{id}' not found.</h2>
          <div style={{ marginBottom: '50px' }} className='underline'></div>
          <p>Visit our homepage to see our current list of tours. </p>
          <Link to='/'>
            <button className='btn'>Back to Home</button>
          </Link>
        </section>
      )}
    </>
  )
}

export default TourDetail
