import { Link } from "react-router-dom"
import CarList from "../components/CarList"

function Home() {
    return (
        <div>
            <h1>Home Page</h1>
            <Link to="/cars/new">Go to Add Car</Link>
            <h1>All cars:</h1>
            <CarList />
        </div>
    )
}

export default Home