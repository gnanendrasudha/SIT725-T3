const { calculateStrength } = require('../controllers/vaultController');

describe('VaultController Tests', () => {
  test('calculates strength correctly for valid inputs', () => {
    expect(calculateStrength(100, 50)).toBe(5000);
  });

  test('throws an error for negative input values', () => {
    expect(() => calculateStrength(-100, 50)).toThrow('Weight and repetitions must be positive numbers');
  });

  test('throws an error for zero inputs', () => {
    expect(() => calculateStrength(0, 50)).toThrow('Weight and repetitions must be positive numbers');
  });
});

