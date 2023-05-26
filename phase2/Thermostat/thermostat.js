class Thermostat {
  constructor() {
    this.temperature = 20;
    this.psm = true;
  }
  getTemperature() {
    return this.temperature;
  }
  up() {
    let i = this.temperature
    if (i < 25 && this.psm === true) {
      return this.temperature += 1;
    } else if (i < 32 && this.psm === false ) {
      return this.temperature += 1;
    } else {
    return this.temperature
    }
  } 
  down() {
    if (this.temperature > 10) {
      return this.temperature -= 1;
    } else {
      return this.temperature;
    }
  }
  energyUsage(){
    if (this.temperature < 18) {
      return 'low-usage';
    } else if (this.temperature <= 25) {
      return 'medium-usage';
    } else {
      return 'high-usage';
    }
  }
  setPowerSavingMode(boolean) {
    this.psm = boolean;
  }
  
}

module.exports = Thermostat;