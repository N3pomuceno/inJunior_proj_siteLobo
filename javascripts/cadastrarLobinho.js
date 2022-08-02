const url_site = "https://lobinhos.herokuapp.com/wolves" // url do site que pegará os dados

// Adicionar Lobinho
function lobinho_login() {
    let new_name_lobinho = document.querySelector("#name_c").value
    let new_age_lobinho = document.querySelector("#age_c").value
    let new_photo_lobinho = document.querySelector("#link_c").value
    let new_description_lobinho = document.querySelector("#description").value

    // console.log(new_name_lobinho);
    // console.log(new_age_lobinho);
    // console.log(new_photo_lobinho);
    // console.log(new_description_lobinho);

    // vairável que coterá as informasções que serão colocadas no bd
    let fetch_body = {
        name: new_name_lobinho,
        age: new_age_lobinho,
        image_url: new_photo_lobinho,
        description: new_description_lobinho
    }

    let fetch_config = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(fetch_body)
    }

    fetch(url_site, fetch_config)
        .then(resposta => resposta.json()
            .then(resp => { console.log(resp) })
            .catch(error => { console.log(error) }))
        .catch(error => { console.log(error) })

}
let do_lobinho_login = document.querySelector(".button_adotar");
do_lobinho_login.addEventListener("click", lobinho_login);


// HOMEPAGE





// LISTA DE LOBINHOS

// Defining async function
function getapi(url_site) {
    
    // Storing response
    fetch(url_site)
        .then(resposta => resposta.json()
            .then(resp => { console.log(resp)})
            .catch(error => {console.log(error)}))
        .catch(error => {console.log(error)})
    
    // Storing data in form of JSON
    var data = resposta.json();
    show(data);
}
// Calling that async function
getapi(api_url);

// Function to define innerHTML for HTML table
function show(data) {
    let tab = ""
    // Loop to access all rows 
    for (let r of data.list) {
        tab += 
        `<div class='card_lobo_exemplo'>
            <div class='car_lobo_exemplo_info'>
                <h4>${r.name}</h4>
                <h5>Idade: ${r.age} anos</h5>
                <h5>ID: ${r.id} </h5>
                <p>${r.description}</p>
            </div>
            <div>
                <img src= ${r.image_url}>
            </div>
        </div>
        `;
    }
    console.log(tab)
    // Setting innerHTML as tab variable
    document.getElementById("lobos_container2").innerHTML = tab;
}
