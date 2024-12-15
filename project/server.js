const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const strengthController = require('./controllers/strengthController');

const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost/vaultstrength', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.log('Failed to connect to MongoDB', err));

// Set view engine
app.set('view engine', 'ejs');

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.get('/', strengthController.getStrengths);
app.post('/create', strengthController.createStrength);

// Static files (CSS, images, etc.)
app.use('/public', express.static('public'));

// Start server
const PORT = process.env.PORT || 8900;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
