const div = document.getElementById('contenido');

function hora_actual() {

    let ahora = new Date();
    let hora = ahora.getHours().toString().padStart(2, '0');
    let minuto = ahora.getMinutes().toString().padStart(2, '0');
    let segundo = ahora.getSeconds().toString().padStart(2, '0');

    div.innerHTML = hora + ":" + minuto + ":" + segundo;
}


setInterval(hora_actual, 1000);