const fizzBuzz = require('./fizzbuzz');

describe('fizzBuzz', () => {
  it('returns Fizz for 3', () => {
    expect(fizzBuzz(3)).toBe("Fizz");
  });

  it ('returns Buzz for 5', () => {
    expect(fizzBuzz(5)).toBe("Buzz");
  });

  it ('returns 8 for 8', () => {
    expect(fizzBuzz(8)).toBe(8);
  });

  it('returns FizzBuzz for 15', () => {
    expect(fizzBuzz(15)).toBe("FizzBuzz");
  });

  it ('returns Fizz for 18', () => {
    expect(fizzBuzz(18)).toBe("Fizz");
  });

  it ('returns Buzz for 20', () => {
    expect(fizzBuzz(20)).toBe("Buzz");
  });
});