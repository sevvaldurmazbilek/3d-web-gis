/*
 * Filename: cesiumConfig.js
 * Project: Exploring Sunny and Easily Accessible Homes: A 3D-Web-GIS Platform for Apartment Seekers in Munich and Helsinki
 * Author: Sevval Durmazbilek (sevvaldurmazbilek@gmail.com)
 * Last Modified: 2024-01-21
 * Description: Addition of access tokens for the application. Add here your own key for CesiumJS. Optionally, you can add basemap provider key and geocoder key.
*/

// CesiumJS Access Token
Cesium.Ion.defaultAccessToken = ""; //add your Cesium access token here. 

// API Key for ArcGIS Service. In this application, it is used for ArcGIS Geocoder. 
const apiKey = ""; //add your ArcGIS access token here. 
Cesium.ArcGisMapService.defaultAccessToken = apiKey;
const authentication = arcgisRest.ApiKeyManager.fromKey(apiKey);

// Mapbox Access Token for basemaps 
const mapbox = ""; //add your Mapbox access token here. 

export {mapbox, authentication}; 

