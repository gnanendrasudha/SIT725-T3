// app.js
const VaultController = require('./controllers/vaultController');
const vaultController = new VaultController();

// Example of binding an event listener to add an entry
document.getElementById('addButton').addEventListener('click', () => {
    vaultController.handleAddEntry();
});
