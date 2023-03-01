// Import required packages
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

// Initialize the express app and set the port number
const app = express();
const PORT = process.env.PORT || 5000;

// Set up middleware
app.use(express.json());
app.use(cors());

// Set up routes
const bookRoutes = require('./routes/book-routes');
app.use('/books', bookRoutes);

// Connect to the MongoDB database
mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log('Connected to MongoDB!');
        app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });