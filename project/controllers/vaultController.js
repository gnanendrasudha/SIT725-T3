// vaultController.js
class VaultController {
    constructor() {
        this.entries = [];
    }

    handleAddEntry() {
        const input = document.getElementById('entryInput');
        const entry = input.value;
        if (entry) {
            this.entries.push(entry);
            console.log('Entry added:', entry);
            this.updateEntriesView();
            input.value = '';  // Clear the input after adding
        } else {
            alert('Please enter a value.');
        }
    }

    updateEntriesView() {
        const entriesContainer = document.getElementById('entriesContainer');
        entriesContainer.innerHTML = '';
        this.entries.forEach(entry => {
            const entryDiv = document.createElement('div');
            entryDiv.textContent = entry;
            entriesContainer.appendChild(entryDiv);
        });
    }
}

// Export the VaultController to be used in app.js
module.exports = VaultController;

// controllers/vaultController.js

function calculateStrength(value1, value2) {
    if (value1 < 0 || value2 < 0) {
        throw new Error('Invalid input: Values must be non-negative');
    }
    return value1 + value2;
}

// Export the function
module.exports = {
    calculateStrength
};







