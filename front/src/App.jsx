import { useEffect } from "react"
import { Outlet } from "react-router-dom"
import { useReducer } from "react"
import carReducer from "./reducers/carReducer"

function App() {

  const [cars, dispatch] = useReducer(carReducer, [])

  useEffect(() => {
    fetch('http://localhost:3000/api/cars')
    .then(res => res.json())
    .then(data => dispatch({ type: 'SET_CARS', payload: data }))
    .catch(err => console.error('Error fetching test API', err))
  }, [])

  return (
    <div>
      <h1>MIHAJLO</h1>
      <Outlet  context={{ cars, dispatch }} />
    </div>
  )
}

export default App