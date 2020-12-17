import { CalculatorService } from './calculator.service';
import { LoggerService } from './logger.service';

describe('CalculatorService', () => {

  it('should add two numbers', () => {

    // Setup phase
    const logger = jasmine.createSpyObj('LoggerService', ['log']);
    const calculator = new CalculatorService(logger);

    // Execution Phase
    const result = calculator.add(2, 2);

    // Test Assertions Phase
    expect(result).toBe(4);

    expect(logger.log).toHaveBeenCalledTimes(1);
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
