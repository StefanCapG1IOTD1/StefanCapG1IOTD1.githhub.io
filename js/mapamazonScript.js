let apMap = L.map('apMap').setView([51.19053157953378, 4.3617230408881245], 17);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    accessToken: 'pk.eyJ1IjoibGVjdG9yd291dGVyIiwiYSI6ImNrM25qZWs1dTB4NHgza240bW0zOG1qZngifQ.1uF5JjJA8l5SpTW3NVQJJQ'
}).addTo(apMap);

// bepaal de rechthoek rondom het gebouw van Amazon
let bounds = [[51.19053157953378, 4.3617230408881245], [51.19053157953378, 4.3617230408881245]];
// kleur de rechthoek in met de blauwe 4CAPS-kleur
L.rectangle(bounds, {color: "#0f78e8", weight: 1}).addTo(apMap);
// plaats een marker met als tekst "Amazon" en eronder "Naftaweg"
let apMarker = L.marker([51.19053157953378, 4.3617230408881245]).addTo(apMap);
apMarker.bindPopup("<span><b>AmazonDepo <br>Blue Gate Antwerp</b></span><br>Naftaweg, 2000 Antwerpen").openPopup();
