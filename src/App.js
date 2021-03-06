import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// Components
import About from './components/About'
import Navbar from './components/Navbar'
import Error from './components/Error'
import Loading from './components/Loading'
import Tours from './components/Tours'

const url = 'https://course-api.com/react-tours-project'

const App = () => {
  const [loading, setLoading] = useState(true)
  const [tours, setTours] = useState([])

  const getTours = async () => {
    setLoading(true)
    try {
      const res = await fetch(url)
      const toursData = await res.json()
      console.log(toursData)
      setTours(toursData)
      setLoading(false)
    } catch (error) {
      setLoading(false)
      throw error
    }
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

export default App
