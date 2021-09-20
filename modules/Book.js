const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    bookName: {
        type: String,
        required: [true, 'Book name is invalid.']
    },
    author: {
        type: String,
        required: [true, 'Author is invalid.']
    },
    price: {
        type: String,
        required: [true, 'Price is invalid.']
    },
    nxb: {
        type: String,
        required: [true, 'NXB is invalid.']
    }
});

module.exports = mongoose.model('book', bookSchema);