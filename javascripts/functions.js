// Antigo adocaoLobinho.js

// let url_site = "https://lobinhos.herokuapp.com/wolves"


// function adoption_request() {
//     let fetch_config = {
//     method: "PATCH"
// }

// }


// let adotar_button = document.querySelector(".button_adotar")
// adotar_button.addEventListener("click", adoption_request)

// // fetch(url_site, fetch_config)
// //     .then(resposta => resposta.json()
// //         .then(resp => adoption_request())
// //         .catch(resp => { console.log("Ok do Erro") })
// //     )
// //     .catch(resposta => { console.log("Erro") })
// // fetch retorna uma Promise
// // Possíveis retornos: Pendente (.then) | Concluida (.then | Rejeitada (.catch)

const url_site = "https://lobinhos.herokuapp.com/wolves" // url do site que pegará os dados

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
            .then(resp => { console.log(resp)})
            .catch(error => {console.log(error)}))
        .catch(error => {console.log(error)})

}
let do_lobinho_login = document.querySelector(".button_adotar");
do_lobinho_login.addEventListener("click", lobinho_login);


// HOMEPAGE





// LISTA DE LOBINHOS