$(document).ready(function() {
  var thermostat = new Thermostat();
  $('#temperature').text(thermostat.temp());

  $('#temperature-up').click(function() {
    thermostat.up();
    UpdateTemperature();
  })

  $('#temperature-down').click(function() {
    thermostat.down();
    UpdateTemperature();
  })

  $('#temperature-reset').click(function() {
    thermostat.reset();
    UpdateTemperature();
  })

  $('#psm-off').click(function() {
    thermostat.powerSavingModeOff();
    $('#status').text('off');
  })

  $('#psm-on').click(function() {
    thermostat.powerSavingModeOn();
    $('#status').text('on');
  })

  function UpdateTemperature(){
    $('#temperature').text(thermostat.temp());
    $('#temperature').attr('class', thermostat.energyUsage());
  }
})
