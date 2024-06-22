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

    // Validar que name y lastname tengan al menos 2 caracteres
    if (name.length < 2 || lastname.length < 2) {
        alert('Los campos "Nombre" y "Apellido" deben tener al menos 2 caracteres.');
        return; // Detener la ejecución si hay un error
    }

    // Calcular la edad
    let today = new Date();
    let birthDate = new Date(birthdate);
    let age = today.getFullYear() - birthDate.getFullYear();
    let m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    // Validar la edad
    if (age < 18 || age > 120) {
        alert('La edad debe estar en el rango de 18-120 años.');
        return; // Detener la ejecución si hay un error
    }

    // Validar el password
    if (password.length < 6) {
        alert('El password debe tener al menos 6 caracteres.');
        return; // Detener la ejecución si hay un error
    }
    if (!/[A-Za-z]/.test(password) || !/\d/.test(password) || !/[^A-Za-z\d]/.test(password)) {
        alert('El password debe contener letras, números y al menos un carácter especial.');
        return; // Detener la ejecución si hay un error
    }
    
    // Obtener el usuario actual del localStorage
    let users = JSON.parse(localStorage.getItem('users')) || [];
    let currentUser = null;
    let userIndex = users.findIndex(user => user.username === username);
    if(userIndex != -1){
        currentUser = users[userIndex];
    }

    // Verificar si el usuario existe
    if (currentUser) {
        // Actualizar solo los datos que han cambiado
        currentUser.username = username ? username : currentUser.username;
        currentUser.email = email ? email : currentUser.email;
        currentUser.name = name ? name : currentUser.name;
        currentUser.lastname = lastname ? lastname : currentUser.lastname;
        currentUser.birthdate = birthdate ? birthdate : currentUser.birthdate;
        currentUser.password = password ? password : currentUser.password;

        // Guardar el usuario actualizado en localStorage
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

    // Crear y mostrar un mensaje de éxito sin usar alert
    const successMessage = document.createElement("div");
    successMessage.textContent = "Guardado correctamente";
    successMessage.className = "success-message"; // Usar la clase definida en CSS
    document.body.appendChild(successMessage);

    // Opcionalmente, eliminar el mensaje después de unos segundos
    setTimeout(() => {
    document.body.removeChild(successMessage);
    }, 3000);

        } else {
            // Si el usuario no existe, mostrar un mensaje de error
            alert('Usuario no encontrado');
        }
    });

//Visor de contraseña
    document.getElementById('togglePassword').addEventListener('click', function () {
    let password = document.getElementById('password');
    if (password.type === 'password') {
        password.type = 'text';
    } else {
        password.type = 'password';
    }
});


// Bloquear el campo de correo electrónico para edición
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('email').readOnly = true; // Asegura que el campo de correo esté bloqueado
});