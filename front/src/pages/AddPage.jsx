import { useState } from "react"
import { Link, useOutletContext } from "react-router-dom"
import { useNavigate } from "react-router-dom"

function AddPage() {

    const [name, setName] = useState("")
    const {cars, dispatch} = useOutletContext()
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const res = await fetch("http://localhost:3000/api/cars", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name })
        })
        if (res.ok) {
            const newCar = await res.json()
            dispatch({ type: "ADD_CAR", payload: newCar }) // update ide u reducer-u a ne ovde
            navigate("/")
        }else {
            console.error("Failed to add car", await res.text())
        }
        
    }

    return (
        <article>
            <h1>Add Car Page:</h1>
            <Link to="/">Go back to Home</Link>
            <form onSubmit={handleSubmit}>
                <label>
                    Name
                    <input value={name} onChange={(e) => setName(e.target.value)} type="text" name="name" />
                </label>
                <button type="submit">Add Car</button>
            </form>
        </article>
    )
}

export default AddPage