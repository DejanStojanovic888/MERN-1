import { useOutletContext } from "react-router-dom"
import Car from "./Car"

function CarList() {
    const { cars } = useOutletContext()
    return (
        <div>
            <h1>Car List Page</h1>
            {cars.length === 0 && <p>No cars found</p>}
            {cars.map(car => (
                <div key={car._id}>
                    <Car car={car} />
                </div>
            ))}
        </div>
    )
}

export default CarList