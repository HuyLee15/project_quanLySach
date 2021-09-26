const ErrorRespone = require('../utils/ErrorRespone');

const errorHandler = (err, req, res, next) => {
    let error = {...err };

    console.log(err.stack.red);
    console.log(err.name);

    if (err.name === "CastError") {
        const message = `Resource not found with id of ${err.value}`;
        error = new ErrorRespone(404, message);
    }
    if (err.code === 11000) {
        const message = "Duplicate field value entered";
        error = new ErrorRespone(400, message);
    }
    if (err.name === "ValidatorError") {
        const message = Object.values(err.error).map(val => val.message);
        error = new ErrorRespone(400, message);
    }

    res.status(err.statusCode || 500).json({
        success: false,
        error: error.message || "Server error"
    });

};

module.exports = errorHandler;