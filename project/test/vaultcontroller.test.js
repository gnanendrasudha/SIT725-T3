const VaultController = require('../controllers/vaultController');

describe('VaultController Tests', () => {
    let vaultController;

    beforeEach(() => {
        vaultController = new VaultController();
    });

    test('should add a valid entry', () => {
        const entries = vaultController.addEntry('Test Entry');
        expect(entries).toContain('Test Entry');
    });

    test('should throw an error for invalid entry', () => {
        expect(() => vaultController.addEntry('')).toThrow('Invalid entry: must be a non-empty string');
    });

    test('should return all entries', () => {
        vaultController.addEntry('Entry 1');
        vaultController.addEntry('Entry 2');
        const entries = vaultController.getEntries();
        expect(entries).toEqual(['Entry 1', 'Entry 2']);
    });
});
