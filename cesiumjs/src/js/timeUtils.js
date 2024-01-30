/*
 * Filename: timeUtils.js
 * Project: Exploring Sunny and Easily Accessible Homes: A 3D-Web-GIS Platform for Apartment Seekers in Munich and Helsinki
 * Author: Sevval Durmazbilek (sevvaldurmazbilek@gmail.com)
 * Last Modified: 2024-01-21
 * Description: Calculation of local time, sunrise and sunsets based on the location. Additional functions for time slider, time reset and date picker. 
*/    

import {viewer} from './cesiumViewer.js';

let locations = {
  munich: { latitude: 48.137154, longitude: 11.576124 },
  helsinki: { latitude: 60.169262, longitude: 24.938570 }
};

let currentLocation = locations.munich;
let dateChangedByInput = false;

let date = Cesium.JulianDate.toDate(Cesium.JulianDate.now());
let timeInput = document.getElementById('time');
let dateInput = document.getElementById('dateInput');

let clock = viewer.clock;
clock.currentTime = Cesium.JulianDate.fromDate(date);

let hourElement = document.getElementById("hour");

let resetTimeButton = document.getElementById('resetTimeButton');


resetTimeButton.addEventListener('click', function () {
  const currentTimeInSeconds = convertTimeToSeconds(new Date());
  timeInput.value = currentTimeInSeconds;

  date = new Date();
  dateInput.valueAsDate = date;

  viewer.clock.currentTime = Cesium.JulianDate.fromDate(date);
  updateTimeElement();
});

viewer.clock.onTick.addEventListener(function (clock) {
  date = Cesium.JulianDate.toDate(clock.currentTime);
  updateTimeElement();
});

updateSunTimes(currentLocation);
let initialTime = convertTimeToSeconds(date);
timeInput.value = initialTime;

dateInput.valueAsDate = date;

timeInput.oninput = () => {
  let time = +timeInput.value;
  date.setUTCHours(Math.floor(time / 3600));
  date.setUTCMinutes(Math.floor(time / 60) % 60);
  date.setUTCSeconds(time % 60);
  viewer.clock.currentTime = Cesium.JulianDate.fromDate(date);
  updateTimeElement();
};


dateInput.oninput = () => {
  dateChangedByInput = true; 
  date = dateInput.valueAsDate;
  updateSunTimes(currentLocation);
  viewer.clock.currentTime = Cesium.JulianDate.fromDate(date);
  updateTimeElement();
};

updateTimeElement();


//FUNCTIONS 

function calculateTimeZoneOffset(location) {
  if (location === locations.munich) {
    return 0;
  } else if (location === locations.helsinki) {
    return 1;
  }
  return 0;
}

function updateSunTimes(location) {
  let sunTimes = calculateSunTimes(date, location.latitude, location.longitude);
  timeInput.min = convertTimeToSeconds(sunTimes.sunrise);
  timeInput.max = convertTimeToSeconds(sunTimes.sunset);
  timeInput.value = convertTimeToSeconds(sunTimes.sunrise);
}

function convertTimeToSeconds(time) {
  return time.getHours() * 3600 + time.getMinutes() * 60 + time.getSeconds();
}


function calculateSunTimes(date, latitude, longitude) {
  const times = SunCalc.getTimes(date, latitude, longitude);

  let sunriseLocal = times.sunrise;
  let sunsetLocal = times.sunset;

  if (currentLocation === locations.munich) {
      const timezoneOffset = date.getTimezoneOffset();
      sunriseLocal = new Date(times.sunrise.getTime() + timezoneOffset * 60000);
      sunsetLocal = new Date(times.sunset.getTime() + timezoneOffset * 60000);
  }

  else if (currentLocation === locations.helsinki) {
    const timezoneOffsetHelsinki = date.getTimezoneOffset();
    sunriseLocal = new Date(times.sunrise.getTime() + timezoneOffsetHelsinki * 60000);
    sunsetLocal = new Date(times.sunset.getTime() + timezoneOffsetHelsinki * 60000);
  }

  return {
      sunrise: sunriseLocal,
      sunset: sunsetLocal,
  };
}

function updateTimeElement() {
  let timezoneOffset = calculateTimeZoneOffset(currentLocation);
  let localDate = new Date(date.getTime() + timezoneOffset * 3600000);

  let options = { hour12: false, hour: '2-digit', minute: '2-digit' };
  let displayedTime = localDate.toLocaleString("en-US", options);
  hourElement.innerHTML = displayedTime;
}

export function setCurrentLocation(locationKey) {
  currentLocation = locations[locationKey];
  updateSunTimes(currentLocation);
  updateTimeElement();
};

export {updateTimeElement};