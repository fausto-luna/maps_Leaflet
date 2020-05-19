
var mymap = L.map('map').setView([41.3869685, 2.1699427], 16);
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiZmF1c3RvbHVuYSIsImEiOiJja2FjcGNobmUxZTdhMnhzOWU2em53b2c5In0.6nsFKDTjlmHEWnekXUjGjQ'
}).addTo(mymap);
mymap.on('click', onClick);
let marker = {};
function onClick(e) {
    if (marker != undefined){
        mymap.removeLayer(marker);
    }
    marker = L.marker([e.latlng.lat, e.latlng.lng]).addTo(mymap);
    marker.bindPopup(`Mis coordenadas son:<br> LAT: ${marker.getLatLng().lat} LNG: ${marker.getLatLng().lng}`).openPopup();
    mymap.setView([marker.getLatLng().lat, marker.getLatLng().lng], mymap.getMaxZoom());
}
