const express = require('express');
const connectDB = require('./config/database');
const router = require('./routers');
connectDB();

const app = express();

app.use(express.json());

router(app);

app.listen(5000, () => console.log("Server is running on port 5000!!!"));