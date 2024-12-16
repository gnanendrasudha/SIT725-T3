// vaultController.js

const VaultModel = require('./vaultModel');  // Import VaultModel from vaultModel.js

class VaultController {
    constructor() {
        this.model = new VaultModel();  // Now we can use VaultModel
    }

    handleAddEntry(entry) {
        this.model.addEntry(entry);
        console.log('Entry added:', entry);
    }

    handleGetEntries() {
        console.log(this.model.getEntries());
    }
}

module.exports = VaultController;

