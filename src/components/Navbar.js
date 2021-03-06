import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='nav'>
      <div className='site-title'>
        <p>
          <Link to='/'>✈️ React World Tours</Link>
        </p>
      </div>
      <section className='nav-links'>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
      </section>
    </nav>
  )
}

export default Navbar
