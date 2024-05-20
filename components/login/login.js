const initialUsers = [
    { username: 'paul', password: '1234' },
    { username: 'diana', password: '12345' }
];
if (!localStorage.getItem('users')){
    localStorage.setItem('users', JSON.stringify(initialUsers));
}
const form = document.querySelector('.form-login');
form.addEventListener('submit', (event) => {
    event.preventDefault();

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    const users = JSON.parse(localStorage.getItem('users'));
    const validUser = users.find(user=> user.username === username && user.password === password)
    if (validUser) {
        window.location.href = './../home/home.html';
    } else {
        alert('User not found');
    }
});
