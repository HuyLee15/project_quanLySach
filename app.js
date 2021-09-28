const express = require('express');
const jwt = require('jsonwebtoken');
const connectDB = require('./config/database');
const router = require('./routers');
const path = require('path');
const dotenv = require('dotenv').config({ path: './config/config.env' });
connectDB();

const app = express();

app.use(express.json());

router(app);

const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}!!!`));