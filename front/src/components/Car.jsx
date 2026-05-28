function Car({ car, deleteCar }) {
    return (
        <article>
            <h2>{car.name}</h2>
            {deleteCar && <button onClick={() => deleteCar(car._id)}>Delete</button>}
        </article>
    )
}

export default Car