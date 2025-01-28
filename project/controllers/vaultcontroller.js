function calculateStrength(weight, repetitions) {
    if (weight <= 0 || repetitions <= 0) {
      throw new Error('Weight and repetitions must be positive numbers');
    }
    return weight * repetitions;
  }
  
  module.exports = { calculateStrength };
  
