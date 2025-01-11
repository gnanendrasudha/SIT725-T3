class VaultController {
    constructor() {
        this.entries = [];
    }

    addEntry(entry) {
        if (!entry || typeof entry !== 'string') {
            throw new Error('Invalid entry: must be a non-empty string');
        }
        this.entries.push(entry);
        return this.entries;
    }

    getEntries() {
        return this.entries;
    }
}

module.exports = VaultController;
