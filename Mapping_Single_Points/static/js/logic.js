// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
let map = L.map('mapid').setView([40.7, -94.5], 2);

// Add a marker to the map for Los Angeles, California.
let marker = L.circleMarker([34.0522, -118.2437],{
    radius: 300,
    color: "black",
    fillcolor: "ffffa1"
}).addTo(map);

// We create the tile layer that will be the background of our map.
var streetmap = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
    tileSize: 512,
    maxZoom: 18,
    zoomOffset: -1,
    id: "mapbox/streets-v11",
    accessToken: API_KEY
  });

// Then we add our 'graymap' tile layer to the map.
streetmap.addTo(map);