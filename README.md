# 3d-web-gis

This repository houses a 3D-Web-GIS platform designed to assist in the apartment-seeking process by conducting precise and dynamic spatio-temporal sunlight analysis. Utilizing technologies like CesiumJS, ArcGIS, and Mapbox, this platform offers an interactive and informative tool for evaluating potential living spaces.

## Getting Started

To use this platform with your own data, follow the steps outlined below:

### 1. Enter Your Access Keys

The platform relies on several third-party services for its core functionalities:

- **CesiumJS**: For sunlight analysis and user interface.
- **ArcGIS Geocoder**: For address searching.
- **Mapbox**: For basemaps.

Please add your own tokens for Cesium, ArcGIS, and Mapbox to the `cesiumConfig.js` file. **Note:** A Cesium token is mandatory for platform access. ArcGIS and Mapbox are optional; you may use the Cesium Geocoder and OpenStreetMap basemaps for free.

### 2. Specify Your Location

Currently, the platform is pre-configured for Munich and Helsinki. To customize:

- Modify latitude and longitude in the `cesiumViewer.js` and `timeUtils.js` scripts to your desired location.
- Adjust the `timeOffset` in the `timeUtils.js` file accordingly.

### 3. Add Your Data

The platform uses two main types of data:

- **3D Tiles**: For sunlight analysis.
- **GeoJSON Data**: For accessibility maps.

This data is retrieved from Cesium ION using asset IDs. To incorporate your data, input your `assetIDs` into the `addTiles.js` and `addGeoJSON.js` files.

### 4. Save Your Changes

After making your modifications:

1. Bundle the platform by typing `npx webpack` into your terminal.
2. Ensure all changes are saved and correctly reflected.
  
## Example Platform

![image](https://github.com/sevvaldurmazbilek/3d-web-gis/assets/59259659/e46f3e95-7992-4270-9b52-2b5ff9a8f668)

d30oaralujbxg0.cloudfront.net (Use only North America and Europe)  

## Support

For any questions or issues, please open an issue on this GitHub repository. 

By following these steps, you'll be able to customize the 3D-Web-GIS platform for your own apartment-seeking needs, leveraging advanced geospatial analysis tools to find your ideal home.
