// In Jasmine, tests are known as "Specifications" => "*.spec.ts"

// Test Suite: group of specifications => "describe"
// A test (or specification) is described by the word 'it'
/*
 Each test should have 3 phases:
 1 - Setup phase: prepare components and services that we want to test
 2 - Execution Phase: trigger the operation that we want to test
 3 - Test Assertions Phase: write assertions that are going to fail or be successful
 */

// Helpful Jasmine methods:
// pending(); // Not yet ready to be run
// fail(); // Force fail


import { CalculatorService } from './calculator.service';
import { LoggerService } from './logger.service';

describe('CalculatorService', () => {

  it('should add two numbers', () => {

    // Setup phase
    const calculator = new CalculatorService(new LoggerService());

    // Execution Phase
    const result = calculator.add(2, 2);

    // Test Assertions Phase
    expect(result).toBe(4);
  });

  it('should subtract two numbers', () => {
    // Setup phase
    const calculator = new CalculatorService(new LoggerService());

    // Execution Phase
    const result = calculator.subtract(2, 2);

    // Test Assertions Phase
    expect(result).toBe(0, 'unexpected substract result');
  });

});
