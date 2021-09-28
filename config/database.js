const mongoose = require("mongoose");

const connectDB = async() => {
    try {
        const connect = await mongoose.connect(process.env.MONGO_URL);

        console.log("Connect DB success!");
    } catch (err) {
        console.log(err.message);
    }
};

module.exports = connectDB;