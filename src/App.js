import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
const url = 'https://course-api.com/react-tours-project'

const App = () => {
  const [loading, setLoading] = useState(true)
  const [tours, setTours] = useState([])

  const getTours = async () => {
    const res = await fetch(url)
    const toursData = await res.json()
    console.log(toursData)
    setTours(toursData)
    setLoading(false)
  }

  const removeTour = (id) => {
    let updatedTours = tours.filter((tour) => tour.id !== id)
    setTours(updatedTours)
  }

  useEffect(() => {
    getTours()
  }, [])
  return (
    <>
      <Router>
        <Navbar />
        <main className='container'>
          <Switch>
            <Route exact path='/'>
              {loading ? (
                <Loading />
              ) : (
                <Tours tours={tours} removeTour={removeTour} />
              )}
            </Route>
            <Route path='/about'>
              <About />
            </Route>
            <Route to='*'>
              <Error />
            </Route>
          </Switch>
        </main>
      </Router>
    </>
  )
}

const Navbar = () => {
  return (
    <nav className='nav'>
      <div className='site-title'>
        <p>✈️ World Tours</p>
      </div>
      <section className='nav-links'>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
      </section>
    </nav>
  )
}

const About = () => {
  return (
    <>
      <div className='container-md'>
        <header className='title'>
          <h2>About Us</h2>
          <div className='underline'></div>
        </header>
        <p>
          We've been delivering world class tours around the world for over 50
          years. Whatever quinoa cardigan chia chillwave. Chartreuse cronut
          gochujang godard prism trust fund. Jianbing kitsch subway tile VHS,
          quinoa everyday carry keytar tilde cred semiotics master cleanse chia
          taiyaki edison bulb. Etsy echo park listicle, normcore four loko
          flexitarian pork belly scenester selfies hell of pok pok distillery
          blog paleo. Art party pug craft beer food truck, cornhole listicle
          drinking vinegar normcore roof party coloring book put a bird on it.
        </p>
      </div>
    </>
  )
}

const Error = () => {
  return (
    <>
      <div className='title'>
        <h2>Page not found</h2>
        <div className='underline'></div>
      </div>
      <p style={{ 'text-align': 'center' }}>
        Woops, that wasn't supposed to happen.
      </p>
    </>
  )
}

const Loading = () => {
  return (
    <div className='title'>
      <h2>Loading...</h2>
    </div>
  )
}

const Tours = ({ tours, removeTour }) => {
  return (
    <>
      <header className='title'>
        <h2>Our Tours</h2>
        <div className='underline'></div>
      </header>

      {tours.length ? (
        <section className='tour-list'>
          {tours.map((tour) => (
            <Tour tour={tour} removeTour={removeTour} />
          ))}
        </section>
      ) : (
        <p style={{ 'text-align': 'center' }}>
          That's all our tours for now! We add new ones each week, so come back
          later to see if any others look like a match.
        </p>
      )}
    </>
  )
}

const Tour = ({ tour, removeTour }) => {
  const { id, image, name, info, price } = tour
  return (
    <>
      <article key={id} className='single-tour'>
        <img src={image} alt='' />
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

export default App
