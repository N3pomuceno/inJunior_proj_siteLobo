const url_site = "https://lobinhos.herokuapp.com/wolves/282" // url do site que pegará os dados


function passa() {
    location.replace("../adocaoLobinho.html")
  }

let do_passa = document.querySelector("#button_adotar");
do_passa.addEventListener("click", passa);

function del_lobinho(){
    let fetch_config = {
        method: "DELETE",
    }

    fetch(url_site, fetch_config)
        .then(resposta => resposta.json()
            .then(resp => { console.log(resp) })
            .catch(error => { console.log(error) }))
        .catch(error => { console.log(error) })

}
let id_lobo = 282

let do_delete_lobo = document.querySelector("#excluir_adotar");
do_delete_lobo.addEventListener("click", del_lobinho);

export { id_lobo }
