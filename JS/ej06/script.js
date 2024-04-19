document.addEventListener('DOMContentLoaded', function() {
    const botonAnadir = document.getElementById('botonAnadir');
    const botonEliminar = document.getElementById('botonEliminar');
    const inputNumero = document.getElementById('inputNumero');
    const container = document.getElementById('container');
    let imagenes = [];

    const enlaces = [
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJHVAMmJiGB7Qurj_064b3xQfxVl2QY2lnFQ&s',
        'https://www.tiburoneswiki.com/Imagenes/tiburon-aleta-negra.jpg',
        'https://www.tiburoneswiki.com/Imagenes/tiburones-de-puntas-negras.jpg',
        'https://inaturalist-open-data.s3.amazonaws.com/photos/234385461/original.jpg',
        'https://www.tiburoneswiki.com/Imagenes/tiburones-aleta-negra.jpg'
    ];

    function anadirImagen() {
        if (imagenes.length < 5) {
            const imagen = document.createElement('img');
            imagen.src = enlaces[imagenes.length];
            container.appendChild(imagen);
            imagenes.push(imagen);
            actualizarMaximo();
        } else {
            alert('No se pueden añadir más imágenes.');
        }
    }

    function eliminarImagen() {
        const numero = parseInt(inputNumero.value, 10);
        if (numero > 0 && numero <= imagenes.length) {
            container.removeChild(imagenes[numero - 1]);
            imagenes.splice(numero - 1, 1);
            actualizarMaximo();
        } else {
            alert('Número fuera de rango.');
        }
    }

    function actualizarMaximo() {
        inputNumero.max = imagenes.length;
    }

    botonAnadir.addEventListener('click', anadirImagen);
    botonEliminar.addEventListener('click', eliminarImagen);
});
