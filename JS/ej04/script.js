let div = document.getElementsByClassName('now');

function hora_actual(){

    let ahora = new Date();    
    let hora = ahora.getHours().toString().padStart(2, '0');
    let minuto = ahora.getMinutes().toString().padStart(2, '0');
    let segundo = ahora.getSeconds().toString().padStart(2, '0');
    

    for(let i=0; i<div.length;i++){
        div[i].innerHTML = hora + ":" + minuto + ":" + segundo;

    }
    
}

setInterval(hora_actual,1000);