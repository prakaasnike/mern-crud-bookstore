// Import required packages
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config(); // load environment variables from .env file

// Initialize the express app and set the port number
const app = express();
const PORT = process.env.PORT; // set the port number to listen on

// Set up middleware
app.use(express.json()); // parse incoming requests with JSON payloads
app.use(cors()); // enable Cross-Origin Resource Sharing (CORS)

// Set up routes
const bookRoutes = require('./routes/book-routes'); // import book routes from the book-routes module
app.use('/books', bookRoutes); // mount book routes at the /books endpoint

// Connect to the MongoDB database
mongoose.connect(process.env.MONGODB_URL, { // connect to the MongoDB database using the MONGODB_URL environment variable
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => { // if the connection is successful
        console.log('Connected to MongoDB!');
        app.listen(PORT, () => console.log(`Server listening on port ${PORT}`)); // start the server
    })
    .catch((error) => { // if the connection fails
        console.error('Error connecting to MongoDB:', error);
    });
