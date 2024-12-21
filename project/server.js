const express = require('express');
const app = express();
const VaultController = require('./controllers/vaultController');

const vaultController = new VaultController();

app.use(express.json());
app.use(express.static('public'));

app.post('/add-entry', (req, res) => {
    try {
        const { entry } = req.body;
        const entries = vaultController.addEntry(entry);
        res.status(200).json({ success: true, entries });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
});

app.get('/entries', (req, res) => {
    res.json(vaultController.getEntries());
});

app.listen(4000, () => {
    console.log('Server is running on http://localhost:7000');
});
