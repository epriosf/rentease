document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let users = JSON.parse(localStorage.getItem('users')) || [];
    let name = document.getElementById('name').value;
    let lastname = document.getElementById('lastname').value;
    let username = document.getElementById('username').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    let exists = users.some(user => user.username === username || user.email === email);

    if (exists) {
        document.getElementById('message').textContent = 'El usuario o correo electrónico ya existen.';
    } else {
        users.push({ name, lastname, username, email, password });
        localStorage.setItem('users', JSON.stringify(users));
        document.getElementById('message').textContent = 'Usuario registrado exitosamente.';
    }
});