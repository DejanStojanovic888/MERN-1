import { Link } from "react-router-dom"
import CarList from "../components/CarList"
import { useOutletContext } from "react-router-dom"
import { useNavigate } from "react-router-dom"

// ovde stavljamo f-ju deleteCar
function DeletePage() {
    const { cars, dispatch } = useOutletContext()
    const navigate = useNavigate()

    const deleteCar = async (id) => {
        const res = await fetch(`http://localhost:3000/api/cars/${id}`, {
            method: "DELETE"
        })
        if (res.ok) {
            dispatch({ type: "DELETE_CAR", payload: id });
            navigate("/") 
        }else {
            console.error("Failed to delete car", await res.text())
        }
    }

    return (
        <div>
            <h1>Delete Car Page:</h1>
            <Link to="/">Go back to Home</Link>
            {/* ovaj deleteCar se prosledjuje kao prop u CarList i onda dalje u Car komponentu gde se koristi u onClick eventu dugmeta Delete */}
            <CarList deleteCar={deleteCar} />
        </div>
    )
}

export default DeletePage