// Importing required modules
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');  // To handle Cross-Origin Resource Sharing (CORS)
const bodyParser = require('body-parser'); // To parse incoming request bodies

// Import the authentication routes
const authRoutes = require('./backend/authRoutes');  // Assuming you created authRoutes.js

// Initialize the Express app
const app = express();
const port = 3000; // You can choose another port if needed

// Middleware
app.use(cors());  // Enable CORS for all requests
app.use(bodyParser.json());  // Parse incoming JSON requests

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/mydatabase');


// Use authentication routes
app.use('/api/auth', authRoutes); // All authentication routes will be prefixed with /api/auth

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
