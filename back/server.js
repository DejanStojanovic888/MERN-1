const express = require('express');
const cors = require('cors');
const db = require('./db/config.js');
const Car = require('./models/Car.js');

const app = express();
app.use(cors({
    origin: 'http://localhost:5173',  // mora ovako kada se front i back pokreću na različitim portovima
}));

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
        res.status(500).json({ message: err.message });
    }
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});