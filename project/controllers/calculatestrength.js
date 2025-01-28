function calculateStrength(weight, repetitions) {
    // Check if inputs are numbers
    if (typeof weight !== 'number' || typeof repetitions !== 'number') {
      throw new Error('Invalid input: Values must be numbers');
    }
  
    // Check if inputs are positive
    if (weight <= 0 || repetitions <= 0) {
      throw new Error('Weight and repetitions must be positive numbers');
    }
  
    // Return the product of weight and repetitions
    return weight * repetitions;
  }
  
  module.exports = { calculateStrength };
  