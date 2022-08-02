const url_site = "https://lobinhos.herokuapp.com/wolves" // url do site que pegará os dados
// HOMEPAGE

// LISTA DE LOBINHOS

// Defining async function
function getapi(url_site) {
    // Storing response
    fetch(url_site)
        .then(resposta => resposta.json()
            .then(resp => {
                resp.forEach(lobo => show(lobo))})
            .catch(error => {console.log(error)}))
        .catch(error => {console.log(error)})
}

// Function to define innerHTML for HTML table
function show(lobin) {
    console.log(lobin)
    let tab =
    `<div class='card_lobo_exemplo'>
        <div class='car_lobo_exemplo_info'>
            <h4>${lobin.name}</h4>
            <h5>Idade: ${lobin.age} anos</h5>
            <h5>ID: ${lobin.id} </h5>
            <p>${lobin.description}</p>
        </div>
        <div>
            <img src= ${lobin.image_url}>
        </div>
    </div>
    `;
    console.log(tab)
    // Setting innerHTML as tab variable
    document.getElementById("lobos_container2").innerHTML += tab
}

// Calling that async function
getapi(url_site);