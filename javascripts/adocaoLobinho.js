const url_site = "https://lobinhos.herokuapp.com/wolves" // url do site que pegará os dados


function adopt_lobinho(){
    let adoptor_name = document.querySelector("#name").value
    let adoptor_age = document.querySelector("#age").value
    let adoptor_mail = document.querySelector("#email").value

    console.log(adoptor_name);
    console.log(adoptor_age);
    console.log(adoptor_mail);

}

let do_adopt_lobinho = document.querySelector("#button_adotar");
do_adopt_lobinho.addEventListener("click", adopt_lobinho);