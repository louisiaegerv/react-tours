import React from 'react'
import Tour from './Tour'

const Tours = ({ tours, removeTour, getTours }) => {
  return (
    <>
      <header className='title'>
        <h2>Our Tours</h2>
        <div className='underline'></div>
      </header>

      {tours.length ? (
        <section className='tour-list'>
          {tours.map((tour) => (
            <Tour key={tour.id} tour={tour} removeTour={removeTour} />
          ))}
        </section>
      ) : (
        <div className='center'>
          <p>
            That's all our tours for now! We add new ones each week, so come
            back later to see if any others look like a match.
          </p>
          <button className='btn' onClick={getTours}>
            Restore all Tours
          </button>
        </div>
      )}
    </>
  )
}

export default Tours
