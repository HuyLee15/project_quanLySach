const mongoose = require("mongoose");

const connectDB = async() => {
    try {
        const connect = await mongoose.connect('mongodb://localhost:27017');

        console.log("Connect DB success!");
    } catch (err) {
        console.log(err.message);
    }
};

module.exports = connectDB;