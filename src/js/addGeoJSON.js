/*
 * Filename: addGeoJSON.js
 * Project: Exploring Sunny and Easily Accessible Homes: A 3D-Web-GIS Platform for Apartment Seekers in Munich and Helsinki
 * Author: Sevval Durmazbilek (sevvaldurmazbilek@gmail.com)
 * Last Modified: 2024-01-31
 * Description: Addition of GeoJSON data source in CesiumJS for accessibility maps with coloring data, popup information and handlers. 
*/

import {viewer} from './cesiumViewer.js';
import { tileset1, tileset2, tileset3 } from './addTiles.js';

const assetId1 = 2441945;
const assetId2 = 2441944;
let currentPopup = null;

var currentAssetId = null;
var geoJsonDataSource = new Cesium.GeoJsonDataSource();
var handler = new Cesium.ScreenSpaceEventHandler(viewer.scene.canvas);

geoJsonDataSource.show = false;

const colorMappings = {
    2441945: [
        { threshold: 38, color: Cesium.Color.fromCssColorString('rgba(173, 216, 230, 0.6)') },
        { threshold: 44, color: Cesium.Color.fromCssColorString('rgba(135, 206, 250, 0.6)') },
        { threshold: 51, color: Cesium.Color.fromCssColorString('rgba(70, 130, 180, 0.6)') },
        { threshold: Infinity, color: Cesium.Color.fromCssColorString('rgba(0, 0, 139, 0.6)') }
    ],
    2441944: [
        { threshold: 27, color: Cesium.Color.fromCssColorString('rgba(173, 216, 230, 0.6)') },
        { threshold: 33, color: Cesium.Color.fromCssColorString('rgba(135, 206, 250, 0.6)') },
        { threshold: 39, color: Cesium.Color.fromCssColorString('rgba(70, 130, 180, 0.6)') },
        { threshold: Infinity, color: Cesium.Color.fromCssColorString('rgba(0, 0, 139, 0.6)') }
    ]
};

function loadGeoJsonAsset(assetId) {
    if (currentAssetId === assetId) {
        return;
    }
    Cesium.IonResource.fromAssetId(assetId)
        .then(function (resource) {
            return geoJsonDataSource.load(resource, {
                clampToGround: false,
                stroke: Cesium.Color.BLACK,
                fill: Cesium.Color.PINK.withAlpha(0.5),
                strokeWidth: 3
            });
        })
        .then(function (dataSource) {
            viewer.dataSources.add(dataSource);
            currentAssetId = assetId;

            var entities = dataSource.entities.values;
            for (var i = 0; i < entities.length; i++) {
                var entity = entities[i];
                var travelTime = entity.properties.travel_time.getValue(); 
                entity.polygon.material = getColorByTravelTime(travelTime, assetId);
            }
        });
}

function getColorByTravelTime(travelTime, assetId) {
    const mappings = colorMappings[assetId] || [];
    for (let i = 0; i < mappings.length; i++) {
        if (travelTime <= mappings[i].threshold) {
            return mappings[i].color;
        }
    }
    return Cesium.Color.WHITE;
}

handler.setInputAction(function (clickEvent) {
    const earthPosition = viewer.scene.pickPosition(clickEvent.position);

    if (!Cesium.defined(earthPosition)) {
        return;
    }

    const pickedObject = viewer.scene.pick(clickEvent.position);
    if (Cesium.defined(pickedObject) && pickedObject.id) {
        var entity = pickedObject.id;
        var travelTime = entity.properties.travel_time;

        if (travelTime !== undefined) {
            var screenPosition = Cesium.SceneTransforms.wgs84ToWindowCoordinates(viewer.scene, earthPosition);
            if (screenPosition) {
                showPopup(screenPosition, `Travel Time: ${travelTime} minutes`);
            }
        }
    }
}, Cesium.ScreenSpaceEventType.LEFT_CLICK);


function showPopup(screenPosition, message) {
    removePopup();

    var popupDiv = document.createElement('div');
    popupDiv.className = 'cesium-popup';
    popupDiv.innerHTML = message;

    popupDiv.style.left = screenPosition.x + 'px';
    popupDiv.style.top = screenPosition.y + 'px';

    document.body.appendChild(popupDiv);
    currentPopup = popupDiv;

    setTimeout(function() {
        if (currentPopup === popupDiv) {
            document.body.removeChild(popupDiv);
            currentPopup = null;
        }
    }, 3000);
}

function removePopup() {
    if (currentPopup) {
        document.body.removeChild(currentPopup);
        currentPopup = null;
    }
}

function showMunichGeoJson () {
    viewer.terrainProvider = new Cesium.EllipsoidTerrainProvider();
    loadGeoJsonAsset(assetId1);
    createLegend(assetId1);
    
    geoJsonDataSource.show = true;
    tileset1.show = false;
    tileset2.show = false;
    tileset3.show = false;
}


function hideMunichGeoJson () {
    geoJsonDataSource.show = false;
    hideLegend();
}

document.getElementById('showGeoJson').addEventListener('click', function() {
    viewer.terrainProvider = new Cesium.EllipsoidTerrainProvider();
    loadGeoJsonAsset(assetId1);
    
    geoJsonDataSource.show = true;
    tileset1.show = false;
    tileset2.show = false;
    tileset3.show = false;
   
});

function createLegend(assetId) {
    const legendContainer = document.getElementById('legend') || document.createElement('div');
    legendContainer.id = 'legend';
    legendContainer.innerHTML = ''; // Clear existing content
    legendContainer.style.display = 'block'; // Show the legend

    const title = document.createElement('h3');
    title.textContent = 'Travel Time (minutes)';
    legendContainer.appendChild(title);

    const mappings = colorMappings[assetId];
    mappings.forEach(mapping => {
        const colorBox = document.createElement('div');
        colorBox.style.width = '20px';
        colorBox.style.height = '20px';
        colorBox.style.backgroundColor = mapping.color.toCssColorString();
        colorBox.style.display = 'inline-block';

        const label = document.createElement('span');
        label.textContent = ` <= ${mapping.threshold}`;
        label.style.marginLeft = '5px';

        const entry = document.createElement('div');
        entry.appendChild(colorBox);
        entry.appendChild(label);
        legendContainer.appendChild(entry);
    });

    document.body.appendChild(legendContainer);
}

function hideLegend() {
    const legendContainer = document.getElementById('legend');
    if (legendContainer) {
        legendContainer.style.display = 'none';
    }
}

hideLegend();

export {geoJsonDataSource, loadGeoJsonAsset, assetId1, assetId2};
export {showMunichGeoJson, hideMunichGeoJson};
export {createLegend, hideLegend};
