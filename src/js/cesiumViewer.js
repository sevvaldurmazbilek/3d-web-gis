/*
 * Filename: cesiumViewer.js
 * Project: Exploring Sunny and Easily Accessible Homes: A 3D-Web-GIS Platform for Apartment Seekers in Munich and Helsinki
 * Author: Sevval Durmazbilek (sevvaldurmazbilek@gmail.com)
 * Last Modified: 2024-01-21
 * Description: Generation of Cesium Container by setting,viewer,scene and camera positions with additional basemap and styles. 
*/

import {mapbox} from './cesiumConfig.js';
 
const dayMapbox = new Cesium.MapboxStyleImageryProvider({
	styleId: 'basic-v9',
	accessToken: mapbox
});

const viewer = new Cesium.Viewer('cesiumContainer', {
    terrainProvider : Cesium.CesiumTerrainProvider(),
    imageryProvider: dayMapbox,
    timeline: false,
    animation: false,
    infoBox: true,
    homeButton: false,
    navigationHelpButton: false, 
    sceneModePicker: false,
    baseLayerPicker: false,
    orderIndependentTranslucency: true,
    selectionIndicator: true,
    infoBox: false,
    shadows: true,
    requestRenderMode : true, //*Optimization* Enable requestRenderMode to reduce the overall amount of time Cesium renders a new frame and to decrease Cesium’s overall CPU usage in your application.
    maximumRenderTimeChange : Infinity,
    geocoder : false
});

var scene = viewer.scene;
var camera = scene.camera;
let timeoutId = null; 
let isPanelClicked = false; 


viewer.scene.shadowMap.softShadows = true;
viewer.scene.shadowMap.size = 8192;
viewer.scene.globe.tileCacheSize = 1000;

viewer.scene.setTerrain(
    new Cesium.Terrain(Cesium.CesiumTerrainProvider.fromIonAssetId(1))
);

viewer.scene.globe.imageryLayers.addImageryProvider(dayMapbox);

scene.skyAtmosphere.brightnessShift = 0.2;
scene.globe.enableLighting = true;
scene.requestRender();
scene.globe.depthTestAgainstTerrain = true;

const initialCameraPosition = {
    destination: Cesium.Cartesian3.fromDegrees(11.576124, 48.137154, 650),
    orientation: {
        heading: 0.0, 
        pitch: -0.4, 
        roll: 0.0
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const baseMapToggle = document.getElementById('baseMapToggle');
    const baseMapOptions = document.getElementById('baseMapOptions');

    baseMapToggle.addEventListener('mouseover', () => {
        if (!isPanelClicked) {
            clearTimeout(timeoutId);
            baseMapOptions.style.display = 'block';
        }
    });

    baseMapToggle.addEventListener('mouseout', () => {
        if (!isPanelClicked) {
            timeoutId = setTimeout(() => {
                baseMapOptions.style.display = 'none';
            }, 250);
        }
    });

    baseMapToggle.addEventListener('click', () => {
        isPanelClicked = !isPanelClicked;
        baseMapOptions.style.display = isPanelClicked ? 'block' : 'none';
        clearTimeout(timeoutId); 
    });

    baseMapOptions.addEventListener('mouseover', () => {
        clearTimeout(timeoutId);
    });

    baseMapOptions.addEventListener('mouseout', () => {
        if (!isPanelClicked) {
            timeoutId = setTimeout(() => {
                baseMapOptions.style.display = 'none';
            }, 250);
        }
    });

    document.getElementById('mapboxButton').addEventListener('click', function() {
        changeBaseMap('mapbox');
    });
    document.getElementById('osmButton').addEventListener('click', function() {
        changeBaseMap('openstreetmap');
    });
    document.getElementById('mapboxDarkButton').addEventListener('click', function() {
        changeBaseMap('mapboxDark');
    });

});

function changeBaseMap(option) {
    viewer.imageryLayers.removeAll(); 
    let newProvider;
    switch (option) {
        case 'mapbox':
            newProvider = new Cesium.MapboxStyleImageryProvider({
                styleId: 'basic-v9',
                accessToken: mapbox
            });
            break;
        case 'openstreetmap':
            newProvider = new Cesium.OpenStreetMapImageryProvider();
            break;
        case 'mapboxDark':
            newProvider = new Cesium.MapboxStyleImageryProvider({
                styleId : 'dark-v11',
                accessToken: mapbox
            });
            break;
        default:
            console.error('Unknown base map option:', option);
            return;
    }
    viewer.imageryLayers.addImageryProvider(newProvider);
}

viewer.scene.camera.setView(initialCameraPosition);
export {viewer, scene, camera, dayMapbox, initialCameraPosition}; 
