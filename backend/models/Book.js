// Import required packages
const mongoose = require('mongoose');

// Define the book schema
const bookSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    available: {
        type: Boolean,
    },
});

// Export the book model
module.exports = mongoose.model('Book', bookSchema);
