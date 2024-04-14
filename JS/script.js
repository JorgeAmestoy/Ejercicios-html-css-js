let boton = document.querySelector("#b1")

function hola_mundo(){
    let contenido = document.getElementById("contenido");
    contenido.innerHTML = "Hola mundo!";
}

boton.addEventListener("click", hola_mundo);