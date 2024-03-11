/*
 * Filename: demo.js
 * Project: Exploring Sunny and Easily Accessible Homes: A 3D-Web-GIS Platform for Apartment Seekers in Munich and Helsinki
 * Author: Sevval Durmazbilek (sevvaldurmazbilek@gmail.com)
 * Last Modified: 2024-01-21
 * Description: Helsinki DEMO application to test the scalability of the platform. 
*/

import { viewer, initialCameraPosition } from './cesiumViewer.js';
import {geoJsonDataSource, loadGeoJsonAsset, assetId2} from './addGeoJSON.js';
import {setCurrentLocation, updateTimeElement} from './timeUtils.js';
import { showMunich3DTiles} from './addTiles.js';
import { showMunichGeoJson} from './addGeoJSON.js';
import { createLegend, hideLegend } from './addGeoJSON.js';

const switchInput = document.getElementById("switchInput");
const slider = document.querySelector(".slider");
const showGeoJsonButton = document.getElementById('showGeoJson');
const show3DTilesButton = document.getElementById('show3DTiles');

let currentCity = 'munich'; 
let tileset; 

async function loadHelsinkiTileset() {
    if (!tileset) {
        tileset = await Cesium.Cesium3DTileset.fromIonAssetId(96188);
        viewer.scene.primitives.add(tileset);
    }
    tileset.show = true;
}

const show3DTilesListener = async function() {
    viewer.scene.setTerrain(new Cesium.Terrain(Cesium.CesiumTerrainProvider.fromIonAssetId(1)));
    await loadHelsinkiTileset();
    geoJsonDataSource.show = false;
    hideLegend();
};

const showGeoJsonListener = function() {
    viewer.terrainProvider = new Cesium.EllipsoidTerrainProvider();
    loadGeoJsonAsset(assetId2);
    createLegend(assetId2);
    
    geoJsonDataSource.show = true;
    tileset.show = false;
}

function updateButtonBehavior() {
    if (currentCity === 'munich') {
        showGeoJsonButton.onclick = showMunichGeoJson;
        show3DTilesButton.onclick = showMunich3DTiles;
    } else {
        showGeoJsonButton.onclick = showGeoJsonListener;
        show3DTilesButton.onclick = show3DTilesListener;
    }
}

switchInput.addEventListener("change", function() {
    if (switchInput.checked) {
        slider.classList.add("on");
        currentCity = 'helsinki';
        viewer.camera.flyTo({
            destination: Cesium.Cartesian3.fromDegrees(24.943229, 60.156792, 550),
            orientation: {
                heading: 0.0,
                pitch: -0.4,
                roll: 0.0
            },
            duration: 3.0,
        }); // camera settings for the location
        viewer.scene.globe.depthTestAgainstTerrain = true;
     
        show3DTilesListener().then(() => {
        }); //addition of default 3D tiles in Helsinki
        
        updateButtonBehavior(); // function to adapt data toggle for helsinki
        setCurrentLocation('helsinki');
        updateTimeElement(); // update time element     

    } else {
        slider.classList.remove("on");
        currentCity = 'munich';

        if (tileset) {
            tileset.show = false;
        }
        viewer.camera.flyTo(initialCameraPosition);
        
        showMunich3DTiles();
        updateButtonBehavior();
        setCurrentLocation('munich');
        updateTimeElement();
        
    }
});

updateButtonBehavior();