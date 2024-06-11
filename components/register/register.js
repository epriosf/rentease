document.getElementById('register').addEventListener('submit', function(event) {
    event.preventDefault();

    let users = JSON.parse(localStorage.getItem('users')) || [];
    let name = document.getElementById('name').value;
    let lastname = document.getElementById('lastname').value;
    let username = document.getElementById('username').value;
    let email = document.getElementById('email').value;
    let birthdate = document.getElementById('birthdate').value;
    console.log(birthdate);
    let password = document.getElementById('password').value;
    console.log(password);

    let exists = users.some(user => user.username === username || user.email === email);

    if (exists) {
        document.getElementById('message').textContent = 'El usuario o correo electrónico ya existen.';
    } else {
        users.push({ name, lastname, username, email, password });
        localStorage.setItem('users', JSON.stringify(users));
        document.getElementById('message').textContent = 'Usuario registrado exitosamente.';
    }

    // Restablecer los campos del formulario
    document.getElementById('name').value = '';
    document.getElementById('lastname').value = '';
    document.getElementById('username').value = '';
    document.getElementById('email').value = '';
    document.getElementById('birthdate').value = '';
    document.getElementById('password').value = '';
    
});

window.onload = function(){
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    // Resta 18 años para la fecha mínima (mayor de edad)
    var minYear = yyyy - 18;
    var minDate = minYear + '-' + mm + '-' + dd;

    // Resta 70 años para la fecha máxima
    var maxYear = yyyy - 70;
    var maxDate = maxYear + '-' + mm + '-' + dd;

    // Establece las fechas mínima y máxima
    document.getElementById('birthdate').setAttribute('max', minDate);
    document.getElementById('birthdate').setAttribute('min', maxDate);
}