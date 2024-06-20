// Agrega un evento de envío al formulario con id 'register'
document.getElementById('register').addEventListener('submit', function (event) {
    // Previene la acción por defecto del formulario (envío)
    event.preventDefault();

    // Obtiene los usuarios guardados en el almacenamiento local
    let users = JSON.parse(localStorage.getItem('users')) || [];
    // Obtiene los valores de los campos del formulario
    let name = document.getElementById('name').value;
    let lastname = document.getElementById('lastname').value;
    let username = document.getElementById('username').value;
    let email = document.getElementById('email').value;
    let birthdate = document.getElementById('birthdate').value;
    let password = document.getElementById('password').value;

    // Define las expresiones regulares (regex) para validar el correo electrónico y la contraseña
    let emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    let passwordRegex = /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9]).{6,}$/;

    // Valida que el correo electrónico cumpla con la expresión regular
    if (!emailRegex.test(email)) {
        // Si no cumple, muestra un mensaje de error y termina la ejecución
        document.getElementById('message').textContent = 'El correo electrónico no es válido.';
        return;
    }

    // Valida que el nombre y apellido tengan al menos 2 caracteres
    if (name.length < 2 || lastname.length < 2) {
        // Si no cumplen, muestra un mensaje de error y termina la ejecución
        document.getElementById('message').textContent = 'Los nombres deben tener al menos 2 caracteres.';
        return;
    }

    // Valida que la contraseña cumpla con la expresión regular
    if (!passwordRegex.test(password)) {
        // Si no cumple, muestra un mensaje de error y termina la ejecución
        document.getElementById('message').textContent = 'La contraseña debe tener al menos 6 caracteres, incluyendo letras, números y al menos un caracter que no sea ni letra ni número.';
        return;
    }

    // Verifica si el usuario o correo electrónico ya existen
    let exists = users.some(user => user.username === username || user.email === email);

    // Si existen, muestra un mensaje de error
    if (exists) {
        document.getElementById('message').textContent = 'El usuario o correo electrónico ya existen.';
    }
    // Si no existen, agrega el nuevo usuario y lo guarda en el almacenamiento local
    else {
        users.push({ name, lastname, username, email, birthdate, password });
        localStorage.setItem('users', JSON.stringify(users));
        document.getElementById('message').textContent = 'Usuario registrado exitosamente.';
    }

    // Restablece los campos del formulario
    document.getElementById('name').value = '';
    document.getElementById('lastname').value = '';
    document.getElementById('username').value = '';
    document.getElementById('email').value = '';
    document.getElementById('birthdate').value = '';
    document.getElementById('password').value = '';

});

// Cuando la página se carga, establece las fechas mínima y máxima para el campo de fecha de nacimiento
window.onload = function () {
    // Obtiene la fecha actual
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    // Resta 18 años para la fecha mínima (mayor de edad)
    var minYear = yyyy - 18;
    var minDate = minYear + '-' + mm + '-' + dd;

    // Resta 120 años para la fecha máxima
    var maxYear = yyyy - 120;
    var maxDate = maxYear + '-' + mm + '-' + dd;

    // Establece las fechas mínima y máxima
    document.getElementById('birthdate').setAttribute('max', minDate);
    document.getElementById('birthdate').setAttribute('min', maxDate);
}
//Visor de contraseña
document.getElementById('togglePassword').addEventListener('click', function () {
    let password = document.getElementById('password');
    if (password.type === 'password') {
        password.type = 'text';
    } else {
        password.type = 'password';
    }
});