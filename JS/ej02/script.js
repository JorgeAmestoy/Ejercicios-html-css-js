const div = document.getElementById('contenido');
const colores = ['blue', 'yellow','green', 'red', 'orange'];
let i = 0;

function cambiar_color() { 
    
    div.style.backgroundColor = colores[i];
    
    i++;
    if(i >= colores.length){
        i=0;
    }    
    
}

setInterval(cambiar_color, 1000);