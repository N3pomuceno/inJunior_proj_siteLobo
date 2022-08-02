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
    `<div class="_lobo" >
    <div class="imgbox">
        <img  src="${lobin.image_url}">
    </div>
    <div class="coluna">
        <div class="topo_descricao">
            <div class="descricao">
                <h3>${lobin.name}</h3>
                <p>Idade: ${lobin.age} anos</p>
                
            </div>
            <button class="button_search">Adotar</button>
        </div>
        <p>${lobin.description}</p>
    </div>
</div>
    `;
    console.log(tab)
    // Setting innerHTML as tab variable
    document.getElementById("todos_os_lobos").innerHTML += tab
}

// Calling that async function
getapi(url_site);