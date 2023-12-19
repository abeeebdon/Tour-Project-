import { useEffect, useState } from 'react'
import Loading from './Loading'
import Tours from './Tours'

const url = 'https://course-api.com/react-tours-project'

const App = () => {
  const [tours, setTours] = useState()
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url)
        const data = await response.json()
        if (!response.ok) throw Error('There is an error')
        setTours(data)
        setIsLoading(false)
      } catch (error) {
        console.log(error)
        setIsError(true)
      }
    }
    fetchData()
  }, [])

  const handleDelete = (id) => {
    const newTour = tours.filter((tour) => tour.id !== id)
    setTours(newTour)
  }
  const handleClick = async () => {
    try {
      const response = await fetch(url)
      const data = await response.json()
      if (!response.ok) throw Error('There is an error')
      setTours(data)
      setIsLoading(false)
    } catch (error) {
      console.log(error)
      setIsError(true)
    }
  }

  return (
    <main>
      {isLoading && <Loading />}
      {!isLoading && !isError && (
        <div>
          <div className="title">
            <h1>Our Tour</h1>
            <p className="title-underline"></p>
          </div>
          <div>
            <Tours
              tours={tours}
              setTours={setTours}
              handleDelete={handleDelete}
              handleClick={handleClick}
            />
          </div>
        </div>
      )}
    </main>
  )
}
export default App
