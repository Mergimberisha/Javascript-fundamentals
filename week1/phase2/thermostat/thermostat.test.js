const Thermostat = require("./thermostat")

describe('functions of Thermostat class', () => {
  it('returns the default temp of Thermostat', () => {
  const thermostat = new Thermostat;
  expect(thermostat.getTemperature()).toBe(20);
  });
  it('returns the temp after using the up method', () => {
  const thermostat = new Thermostat;
  thermostat.up(); 
  expect(thermostat.getTemperature()).toBe(21);
  });
  test('thermostat maxs out at 25 degrees when PSM is on', () => {
  const thermostat = new Thermostat;
  for (let i = 0 ; i < 10 ; i++) {
  thermostat.up();
  }
  expect(thermostat.getTemperature()).toBe(25);
  });
  test('thermostat maxs out at 32 degrees when PSM is off', () => {
  const thermostat = new Thermostat;
  thermostat.setPowerSavingMode(false)
  for (let i = 0 ; i < 20 ; i++) {
  thermostat.up();
  }
  expect(thermostat.getTemperature()).toBe(32);
  });
  it('returns the temp after using the down method', () => {
    const thermostat = new Thermostat;
    thermostat.down(); 
    expect(thermostat.getTemperature()).toBe(19);
    });
  test('thermostat minimum of 10 degrees', () => {
    const thermostat = new Thermostat;
    thermostat.setPowerSavingMode(false)
    for (let i = 0 ; i < 20 ; i++) {
      thermostat.down();
    }
    expect(thermostat.getTemperature()).toBe(10);
  });   
  test('returns energyUsage result when less than 18', () => {
    const thermostat = new Thermostat;
    for (let i = 0 ; i < 20 ; i++) {
      thermostat.down();
    }
    expect(thermostat.energyUsage()).toBe('low-usage');
  });   
  test('returns energyUsage result when between 18 and 25', () => {
    const thermostat = new Thermostat;
    expect(thermostat.energyUsage()).toBe('medium-usage');
  });  
  test('returns energyUsage result when greater than 25', () => {
    const thermostat = new Thermostat;
    thermostat.setPowerSavingMode(false)
    for (let i = 0 ; i < 20 ; i++) {
      thermostat.up();
    }
    expect(thermostat.energyUsage()).toBe('high-usage');
  });    
}); 