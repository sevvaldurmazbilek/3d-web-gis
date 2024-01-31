/*
 * Filename: geocoder.js
 * Project: Exploring Sunny and Easily Accessible Homes: A 3D-Web-GIS Platform for Apartment Seekers in Munich and Helsinki
 * Author: Sevval Durmazbilek (sevvaldurmazbilek@gmail.com)
 * Last Modified: 2024-01-21
 * Description: ArcGIS Geocoder (source = https://developers.arcgis.com/cesiumjs/geocode-and-search/search-for-an-address/)
*/

import {viewer} from './cesiumViewer.js';
import {authentication} from './cesiumConfig.js';

function findAddress(query) {

    const cameraPos = Cesium.Cartographic.fromCartesian(viewer.camera.position);
    const center = [Cesium.Math.toDegrees(cameraPos.longitude),Cesium.Math.toDegrees(cameraPos.latitude)];

    arcgisRest
    .geocode({
        singleLine: query,
        authentication,
        params: {
            outFields: "*",
            location: center.join(",")
        }
    })

    .then((response) => {
        const result = response.candidates[0];
        if (!result === 0) {
            alert("That query didn't match any geocoding results.");
            return;
        }

        const pinBuilder = new Cesium.PinBuilder()
        const location = Cesium.Cartesian3.fromDegrees(result.location.x,result.location.y);
        const candidate = viewer.entities.add({
            name:'Search result',
            description:`${result.address}`,
            position:location,

            billboard: {
                verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
                heightReference: Cesium.HeightReference.CLAMP_TO_GROUND,
                image: pinBuilder.fromColor(Cesium.Color.fromCssColorString('#5491f5'),48).toDataURL()
            }
        })
        viewer.selectedEntity = candidate;
        viewer.trackedEntity = candidate;
    })

    .catch((error) => {
        alert("There was a problem using the geocoder. See the console for details.");
        console.error(error);
    });
}

function handleAddressSearch() {
    viewer.entities.removeAll();
    const query = document.getElementById("geocode-input").value;
    findAddress(query);
}


document.getElementById("geocode-button").addEventListener("click", handleAddressSearch);
document.getElementById("geocode-input").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        handleAddressSearch();
    }
});

document.getElementById("geocode-close").addEventListener("click", function() {
    document.getElementById("geocode-input").value = '';
    viewer.entities.removeAll();
});