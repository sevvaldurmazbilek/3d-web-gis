/*
 * Filename: cesiumConfig.js
 * Project: Exploring Sunny and Easily Accessible Homes: A 3D-Web-GIS Platform for Apartment Seekers in Munich and Helsinki
 * Author: Sevval Durmazbilek (sevvaldurmazbilek@gmail.com)
 * Last Modified: 2024-01-21
 * Description: Addition of access tokens for the application. Add here your own key for CesiumJS. Optionally, you can add basemap provider key and geocoder key.
*/

// CesiumJS Access Token
Cesium.Ion.defaultAccessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI1ZjMxZDlmMi02OWJhLTRmNDktOGYzMS1jOGI2ZjMyNTdjZWIiLCJpZCI6MTU1MzY4LCJpYXQiOjE2ODk4NjI5NDh9.YNMT-peUxrLscF3gaV6D0zvZtym2LiHWTG1hirDmye4";

// API Key for ArcGIS Service. In this application, it is used for ArcGIS Geocoder. 
const apiKey = "AAPKbf16cbf5f8ee42d5a5b263bd6d99dbd4FaqKLEgIkliUtWsu6rjQVH74O4ZeEA71wnKMmAyvbtjm6D-XDNwBAleaO-jVtTmH";
Cesium.ArcGisMapService.defaultAccessToken = apiKey;
const authentication = arcgisRest.ApiKeyManager.fromKey(apiKey);

// Mapbox Access Token for basemaps 
const mapbox = "pk.eyJ1IjoiZHVybWF6YmlsZWsiLCJhIjoiY2xyajhkbmsyMDB1MjJqbnd6bTN2MThhdiJ9.KbEp3Swka-jg7zKhR0NABg";

export {mapbox, authentication}; 

