const mongoose = require("mongoose");

const CarSchema = new mongoose.Schema({
    name: String,
});

const Car = mongoose.model("Car", CarSchema);
module.exports = Car;