import { Link } from "react-router-dom"

function AddPage() {
    return (
        <article>
            <h1>Add Car Page:</h1>
            <Link to="/">Go back to Home</Link>
            <form>
                <label>
                    Name
                    <input type="text" name="name" />
                </label>
                <button type="submit">Add Car</button>
            </form>
        </article>
    )
}

export default AddPage