'use strict';

class Thermostat {
    constructor(temperature = 20) {
      this.temperature = temperature;
      this.psm = true;
      this.MAXIMUM_TEMP = 25;
      this.MINIMUM_TEMP = 10;
    }

    up(number) {
      if((this.temperature + number) > this.MAXIMUM_TEMP) {
        throw new Error(`Save the planet, max temp of ${this.MAXIMUM_TEMP}`);

      }
      this.temperature += number;
    }

    down(number) {
      if((this.temperature - number) < this.MINIMUM_TEMP) {
        throw new Error('This is too low bro!')

      }
      this.temperature -= number;
    }

    powerSavingMode() {
      return this.psm;
    }

    powerSavingModeOn() {
      this.psm = true;
      this.MAXIMUM_TEMP = 25;
    }

    powerSavingModeOff() {
      this.psm = false;
      this.MAXIMUM_TEMP = 32;
    }
}
