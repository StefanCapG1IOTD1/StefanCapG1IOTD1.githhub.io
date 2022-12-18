/*Haal 9 pseudo-gebruikers op met behulp van de fetch-methode.
Gebruik hiervoor de https://randomuser.me/ API.
Geef bij elke user foto (large), volledige naam en locatie weer.
*/

// array met merken van koffiebonen
const review = ["klantvriendelijkheid", "snel werk", "goede prijs/kwaliteit", "services", "goede producten", "stiptheid", "vlotte communicatie", "verstaanbare uitleg", "geduld", "afwerking", "opvolging", "netheid en orderlijkheid", "vriendelijke mensen", "betrouwbaarheid", "flexibiliteit"];
// array met merken van koffiebonen
function random_item(review) {
    return review[Math.floor(Math.random() * review.length)];
}

// array met steden
const woonplaats = ["Antwerpen", "Limburg", "West-Vlaanderen", "Oost-Vlaanderen", "Vlaams-Brabant", "Brussel", "Waals-Brabant", "Namen", "Henegouwen", "Luik", "Luxemburg"];
// array met steden
function random_item(woonplaats) {
    return woonplaats[Math.floor(Math.random() * woonplaats.length)];
}

// array met namen van users
const voornaam = ["Kim", "Kris", "Sam", "Robin", "René", "Max", "Jamie", "Jessie", "Senna", "Alex", "Boo", "Stef", "Ozaru"];
// array met merken van koffiebonen
function random_item(voornaam) {
    return voornaam[Math.floor(Math.random() * voornaam.length)];
}

// array met achternamen van users
const achternaam = ["Peetermans", "Blommaert", "Peeters", "Ozumaki", "Hoogstadt", "Van Den Bossche", "De Bleser", "Cap", "Maris", "De Bruyne", "De Westelinck", "Dierckx", "Boeykens"];
// array met merken van koffiebonen
function random_item(achternaam) {
    return achternaam[Math.floor(Math.random() * achternaam.length)];
}



// maak connectie met random user generator API en haal 9 users op
fetch('https://randomuser.me/api/?results=9')
    .then(function (response) {
        // nakijken of de API-call een antwoord terugstuurt
        if (response.ok) {
            // als de status "ok" (=200) is, dan wordt het antwoord omgezet in JSON
            return response.json();
        } else {
            // als de status niet "ok" is, geef dan de status terug en annuleer het uitvoeren
            return Promise.reject(response.status);
        }
    })


    .then(function (response) {
        // leest het volledige antwoord uit in de console
        console.log(response);
        // plaats een section met grid
        let html = '<section class="row">';
        // plaats van de gebruikers met afbeelding, naam,...in HTML
        for (let i = 0; i < response.results.length; i++) {
            const user = response.results[i];
            html += `<div class="card col-12 col-sm-6 col-md-4 mb-3">

			<img src="${user.picture.large}" class="card-img-top" alt="foto van ${random_item(voornaam)} ${random_item(achternaam)}">

			<div class="card-body">
			    <p class="card-title blauw text-uppercase fs-6 fw-bolder pt-3">${random_item(voornaam)} ${random_item(achternaam)}</p>
			    <p class="card-text text-dark h6 small mt-2">Ik ben afkomstig uit ${random_item(woonplaats)} en vind het IOT bedrijf 4<q><q>CAPS</q></q> super voor hun ${random_item(review)}!</p>
                <p class="socials">
                    <i class="bi bi-star-fill text-warning fs-3"></i>
                    <i class="bi bi-star-fill text-warning fs-3"></i>
                    <i class="bi bi-star-fill text-warning fs-3"></i>
                    <i class="bi bi-star-fill text-warning fs-3"></i>
                    <i class="bi bi-star-fill text-warning fs-3"></i>
                </p>
            </div>
        </div>`;
        }
        html += '</section>';
        /*document.body.insertAdjacentHTML('beforeend', html);*/
        document.getElementById("clients").innerHTML = html;
    })

    .catch(function (error) {
        // indien er een fout is, toon in de console dan wat er misloopt
        console.error("Error with message: " + error)
    });