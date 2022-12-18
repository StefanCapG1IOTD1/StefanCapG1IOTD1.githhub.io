let apMap = L.map('apMap').setView([51.23009, 4.41616], 17);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    accessToken: 'pk.eyJ1IjoibGVjdG9yd291dGVyIiwiYSI6ImNrM25qZWs1dTB4NHgza240bW0zOG1qZngifQ.1uF5JjJA8l5SpTW3NVQJJQ'
}).addTo(apMap);

// bepaal de rechthoek rondom het gebouw van AP
let bounds = [[51.23041, 4.4155], [51.22991, 4.41675]];
// kleur de rechthoek in met de blauwe 4CAPS-kleur
L.rectangle(bounds, {color: "#0f78e8", weight: 1}).addTo(apMap);
// plaats een marker met als tekst "IOT bedrijf 4CAPS" en eronder "Ellermanstraat 33"
let apMarker = L.marker([51.23009, 4.41616]).addTo(apMap);
apMarker.bindPopup("<span><b>AP Hogeschool Antwerpen</b></span><br>Ellermanstraat 33").openPopup();
