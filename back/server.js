const express = require('express');
const cors = require('cors');
const db = require('./db/config.js');
const Car = require('./models/Car.js');

const app = express();
app.use(cors({
    origin: 'http://localhost:5173',  // mora ovako kada se front i back pokreću na različitim portovima
}));

app.use(express.json());

app.use(express.json());

// app.get('/', (req, res) => {
//     res.send('Hello World!');
// });

app.get('/api/cars', async (req, res) => {
    try {
        const cars = await Car.find();
        res.json(cars);
    } catch (err) {
        console.error('Error fetching cars:', err);
        res.status(500).json({ message: 'Internal server error' });
    }
});

app.post('/api/cars', async (req, res) => {
    const { name } = req.body;
    if (!name) {
        return res.status(400).json({ message: 'Name is required' });
    }
    try {
        const newCar = new Car({ name });
        const savedCar = await newCar.save();
        res.status(201).json(savedCar);
    } catch (err) {
        console.error('Error creating car:', err);
        res.status(500).json({ message: 'Internal server error' });
    }
});

app.delete('/api/cars/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const deletedCar = await Car.findByIdAndDelete(id);
        if (!deletedCar) {
            return res.status(404).json({ message: 'Car not found' });
        }
        res.json({ message: 'Car deleted successfully' });
    } catch (err) {
        console.error('Error deleting car:', err);
        res.status(500).json({ message: 'Internal server error' });
    }
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});