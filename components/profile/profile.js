window.onload = function() {
    let usuario = localStorage.getItem('usuario');
    if (!usuario) {
        // Si el usuario no está conectado, deshabilitamos el formulario
        document.getElementById('userDetailsForm').disabled = true;
    } else {
        // Si el usuario está conectado, cargamos sus datos en el formulario
        document.getElementById('name').value = usuario;
    }

    document.getElementById('userDetailsForm').addEventListener('submit', function(e) {
        e.preventDefault();
        // Si todos los inputs son válidos
        if (document.getElementById('name').value) {
            // Guardar los datos aquí
            localStorage.setItem('usuario', document.getElementById('name').value);
            // Redirigir al usuario a home.html
            window.location.href = 'home.html';
        }
    });
}
