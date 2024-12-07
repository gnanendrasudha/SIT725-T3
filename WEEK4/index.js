const express = require('express');
const connectToDatabase = require('./database'); // Import the database connection
 
// Initialize the Express app
const app = express();
 
// Define the port for the server
const PORT = process.env.PORT || 6800;
 
// Middleware to parse JSON requests
app.use(express.json());
 
// Define the root route
app.get('/', (req, res) => {
    res.send('Welcome');
});
 
// Start the server and listen on the specified port
app.listen(PORT, () => {
    console.log(`Backend server is live at http://localhost:${PORT}`);
});