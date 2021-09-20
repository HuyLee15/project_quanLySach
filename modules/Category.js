const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Category name is invalid.']
    },
    desscription: {
        type: String,
        required: [true, 'Category description is invalid.']
    }
});

module.exports = mongoose.model('category', categorySchema);