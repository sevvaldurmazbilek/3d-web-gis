/*
 * Filename: addTiles.js
 * Project: Exploring Sunny and Easily Accessible Homes: A 3D-Web-GIS Platform for Apartment Seekers in Munich and Helsinki
 * Author: Sevval Durmazbilek (sevvaldurmazbilek@gmail.com)
 * Last Modified: 2024-01-21
 * Description: Import the Cesium 3D Tiles as 3 tilesets. 
*/

import {viewer} from './cesiumViewer.js';
import {geoJsonDataSource} from './addGeoJSON.js';
import { createLegend, hideLegend } from './addGeoJSON.js';

let tileset1 = await Cesium.Cesium3DTileset.fromIonAssetId(2354108);
let tileset2 = await Cesium.Cesium3DTileset.fromIonAssetId(2355120);
let tileset3 = await Cesium.Cesium3DTileset.fromIonAssetId(2355413);
var readyTilesetsCount = 0;

Promise.all([
    Cesium.Cesium3DTileset.fromIonAssetId(2354108),
    Cesium.Cesium3DTileset.fromIonAssetId(2355120),
    Cesium.Cesium3DTileset.fromIonAssetId(2355413)
]).then(([ts1, ts2, ts3]) => {
    tileset1 = ts1;
    tileset2 = ts2;
    tileset3 = ts3;

    setBuildingStyle(tileset1, 'lightgray');
    setBuildingStyle(tileset2, 'lightgray');
    setBuildingStyle(tileset3, 'lightgray');

    viewer.scene.primitives.add(tileset1);
    viewer.scene.primitives.add(tileset2);
    viewer.scene.primitives.add(tileset3);

    checkAllTilesets();
});


setBuildingStyle(tileset1, 'lightgray');
setBuildingStyle(tileset2, 'lightgray');
setBuildingStyle(tileset3, 'lightgray');

/* 

FUNCTIONS

*/

function setBuildingStyle(tileset, color) {
    tileset.style = new Cesium.Cesium3DTileStyle({
        color: `color("${color}")`,
        show: true
    });
}

function checkAllTilesets() {
    readyTilesetsCount++;

    if (readyTilesetsCount === 3) {
        var boundingSphere1 = tileset1.boundingSphere;
        var boundingSphere2 = tileset2.boundingSphere;
        var boundingSphere3 = tileset3.boundingSphere;
        var commonBoundingSphere = Cesium.BoundingSphere.union(boundingSphere1, boundingSphere2, boundingSphere3);
        var range = Math.max(100.0 - commonBoundingSphere.radius, 0.0);
        viewer.camera.viewBoundingSphere(commonBoundingSphere, new Cesium.HeadingPitchRange(0, -2.0, range));
        viewer.camera.lookAtTransform(Cesium.Matrix4.IDENTITY);
    }
}

function showMunich3DTiles() {
    viewer.scene.setTerrain(new Cesium.Terrain(Cesium.CesiumTerrainProvider.fromIonAssetId(1)));
    geoJsonDataSource.show = false;
    hideLegend();
    tileset1.show = true;
    tileset2.show = true;
    tileset3.show = true;
}

function hideMunich3DTiles() {
    tileset1.show = false;
    tileset2.show = false;
    tileset3.show = false;
}

export {tileset1, tileset2, tileset3} ; 
export {showMunich3DTiles, hideMunich3DTiles};
