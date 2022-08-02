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

//___________________________________________________

// Adoção de Lobinhos
