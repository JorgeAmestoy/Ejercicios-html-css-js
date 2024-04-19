document.getElementById('miFormulario').addEventListener('submit', function(event) {

    event.preventDefault();
    console.log('Datos del formulario:');
    const formData = new FormData(event.target);
    for (let [key, value] of formData.entries()) {
        console.log(`${key}: ${value}`);
    }


    const formObject = Object.fromEntries(formData.entries());
    console.log('Objeto con pares clave-valor:', formObject);


    const usuariosKey = 'usuarios';
    let usuarios = JSON.parse(localStorage.getItem(usuariosKey)) || [];
    const lastId = usuarios.length > 0 ? Math.max(...usuarios.map(u => u.id)) : 0;
    const newUser = { id: lastId + 1, ...formObject };
    delete newUser.foto_perfil;
    delete newUser.cv;
    usuarios.push(newUser);
    localStorage.setItem(usuariosKey, JSON.stringify(usuarios));

    console.log('Usuario añadido a localStorage:', newUser);

    
});
