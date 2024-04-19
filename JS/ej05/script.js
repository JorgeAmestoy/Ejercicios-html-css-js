let temporizador = null;
let tiempoRestante = 0;
let tiempoTranscurrido = 0;

function iniciar() {
    const inputTime = document.getElementById('timeInput').value; 
    tiempoRestante = parseInt(inputTime);
    if (isNaN(tiempoRestante)) {
        alert('Por favor, ingresa un número válido de segundos.');
        return;
    }
    if (temporizador) {
        clearInterval(temporizador);
    }
    temporizador = setInterval(() => {
        tiempoTranscurrido += 1;
        tiempoRestante -= 1;
        document.getElementById('contador').textContent = tiempoRestante;
        if (tiempoRestante <= 0) {
            clearInterval(temporizador);
            document.getElementById('mensaje').style.display = 'block';
        }
    }, 1000);
}


function parar() {
    clearInterval(temporizador);
}

function continuar() {
    if (tiempoRestante > 0) {
        temporizador = setInterval(() => {
            tiempoTranscurrido += 1;
            tiempoRestante -= 1;
            document.getElementById('contador').textContent = tiempoRestante;
            if (tiempoRestante <= 0) {
                clearInterval(temporizador);
                document.getElementById('mensaje').style.display = 'block';
            }
        }, 1000);
    }
}

function reiniciar() {
    clearInterval(temporizador);
    tiempoRestante = 0;
    tiempoTranscurrido = 0;    
    document.getElementById('contador').textContent = ''; 
}
