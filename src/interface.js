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

  $.get('http://api.openweathermap.org/data/2.5/weather?q=London&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric', function(data) {
    $('#current-temp').text(data.main.temp);
  })

  function UpdateTemperature(){
    $('#temperature').text(thermostat.temp());
    $('#temperature').attr('class', thermostat.energyUsage());
  }

})
