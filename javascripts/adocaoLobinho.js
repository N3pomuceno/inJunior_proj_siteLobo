const url_site = "https://lobinhos.herokuapp.com/wolves/282" // url do site que pegará os dados


function adopt_lobinho(){
    let adoptor_name = document.querySelector("#name").value
    let adoptor_age = document.querySelector("#age").value
    let adoptor_mail = document.querySelector("#email").value

    // console.log(adoptor_name);
    // console.log(adoptor_age);
    // console.log(adoptor_mail);

    let fetch_body = {
        adopter_name: adoptor_name,
        adopter_email: adoptor_mail,
        adopter_age: adoptor_age,
        adopted: true
    }

    let fetch_config = {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(fetch_body)
    }

    fetch(url_site, fetch_config)
        .then(resposta => resposta.json()
            .then(resp => { console.log(resp) })
            .catch(error => { console.log(error) }))
        .catch(error => { console.log(error) })



}

let do_adopt_lobinho = document.querySelector("#button_adotar");
do_adopt_lobinho.addEventListener("click", adopt_lobinho);