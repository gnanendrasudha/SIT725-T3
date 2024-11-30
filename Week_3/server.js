// Import express
const express = require('express');

// Create an instance of express
const app = express();

// Set up a basic route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Define the port the server will listen on
const PORT = 3300;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
