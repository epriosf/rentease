window.onload = function() {
    let isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn === 'true') {
        let username = localStorage.getItem('username');
        let email = localStorage.getItem('email');
        let name = localStorage.getItem('name');
        let lastname = localStorage.getItem('lastname');
        let birthdate = localStorage.getItem('birthdate');
        let password = localStorage.getItem('password');
        // Si el usuario está conectado, cargamos sus datos en el formulario
        document.getElementById('username').value = username;
        document.getElementById('email').value = email;
        document.getElementById('name').value = name;
        document.getElementById('lastname').value = lastname;
        document.getElementById('birthdate').value = birthdate;
        document.getElementById('password').value = password;
    }
    else {
        // Si el usuario no está conectado, deshabilitamos el formulario
        alert('You need to be logged in to access this page');
        window.location.href = './../login/login.html';
    }
}

//MODIFICAR DATOS
document.getElementById('userDetailsForm').addEventListener('click', function(e) {
    e.preventDefault(); // Prevenir la recarga de la página

    // Obtener los valores del formulario
    let username = document.getElementById('username').value;
    let email = document.getElementById('email').value;
    let name = document.getElementById('name').value;
    let lastname = document.getElementById('lastname').value;
    let birthdate = document.getElementById('birthdate').value;
    let password = document.getElementById('password').value;

    // Obtener el usuario actual del localStorage
    let users = JSON.parse(localStorage.getItem('users')) || [];
    let currentUser = null;
    let userIndex = users.findIndex(user => user.username === username);
    if(userIndex != -1){
        currentUser = users[userIndex];
    }

    // Verificar si el usuario existe
    if (currentUser) {
        // Actualizar solo los datos que han cambiad
        currentUser.username = username ? username : currentUser.username;
        currentUser.email = email ? email : currentUser.email;
        currentUser.name = name ? name : currentUser.name;
        currentUser.lastname = lastname ? lastname : currentUser.lastname;
        currentUser.birthdate = birthdate ? birthdate : currentUser.birthdate;
        currentUser.password = password ? password : currentUser.password;

        localStorage.setItem('email', currentUser.email);
        localStorage.setItem('name', currentUser.name);
        localStorage.setItem('lastname', currentUser.lastname);
        localStorage.setItem('birthdate', currentUser.birthdate);
        localStorage.setItem('password', currentUser.password);
        localStorage.setItem('username', currentUser.username);
        localStorage.setItem('isLoggedIn', 'true');

        // Actualizar el usuario en el array de usuarios
        users[userIndex] = currentUser;

        // Guardar los datos actualizados en el localStorage
        localStorage.setItem('users', JSON.stringify(users));

        // Redirigir al usuario a home.html
        window.location.href = "./../home/home.html";
    } else {
        // Si el usuario no existe, mostrar un mensaje de error
        alert('Usuario no encontrado');
    }
})