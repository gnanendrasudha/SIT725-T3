// test/vaultController.test.js
const { calculateStrength } = require('../project/controllers/vaultController');
describe('VaultController Tests', () => {
    test('calculates strength correctly for valid inputs', () => {
        expect(calculateStrength(100, 50)).toBe(150);
    });

    test('throws an error for negative input values', () => {
        expect(() => calculateStrength(-100, 50)).toThrow('Invalid input: Values must be non-negative');
    });

    test('throws an error when one of the inputs is not a number', () => {
        expect(() => calculateStrength("100", 50)).toThrow('Invalid input: Values must be numbers');
    });

    test('returns the correct strength when inputs are zero', () => {
        expect(calculateStrength(0, 0)).toBe(0);
    });
});
