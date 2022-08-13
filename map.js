var map = L.map('map').setView([38.867255, -104.760749], 12);

L.tileLayer('http://a.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: 'Map data &copy; OpenStreetMap contributors',
  maxZoom: 18
}).addTo(map);

var parks = [
  [38.867769, -104.891088],
  [38.882216, -104.777753],
  [38.853056, -104.83],
  [38.833039, -104.7976],
  [38.837351, -104.822464]
];

var parkIcon = L.icon({
    iconUrl: 'img/park-24.png',
    iconRetinaUrl: 'img/park-24@2x.png',
    iconSize: [24,24],
    iconAnchor: [12,22],
    popupAnchor: [0,-24]
});

var markersArray = [];

for (var i=0; i<parks.length; i++) {
  markersArray[i] = new L.marker(parks[i], {icon: parkIcon}).addTo(map);
}

var popup = L.popup({
    minWidth: 250
}).setContent('<img src="img/gotg.jpg"><h3><a href="https://en.wikipedia.org/wiki/Garden_of_the_Gods">Garden of the Gods</a></h3><p>The rock formations here are incredible!</p>');

markersArray[0].bindPopup(popup);
