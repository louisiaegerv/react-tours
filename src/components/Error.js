import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Error = () => {
  const { pathname } = useLocation()
  return (
    <>
      <section style={{ textAlign: 'center' }}>
        <div className='title'>
          <h2>Page '{pathname}' not found</h2>
          <div className='underline'></div>
        </div>
        <p style={{ textAlign: 'center' }}>
          Woops, that wasn't supposed to happen.
        </p>
        <button className='btn'>
          <Link to='/'>Back to Home</Link>
        </button>
      </section>
    </>
  )
}

export default Error
