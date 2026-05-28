import { useOutletContext } from "react-router-dom"
import Car from "./Car"


// treba da bude dinamicna ova CarList 
function CarList({deleteCar}) {
    const { cars } = useOutletContext()
    return (
        <div>
            <h1>Car List Page:</h1>
            {cars.length === 0 && <p>No cars found</p>}
            {cars.map(car => ( 
                <Car key={car._id} car={car} deleteCar={deleteCar} />
            ))}
        </div>
    )
}

export default CarList