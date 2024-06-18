const flats = [
    {
        "id": 'flat_1717721353888_232',
        "name": "Flat 1",
        "city": "New York",
        "street_name": "3rd Blvd",
        "street_number": 470,
        "area_size": 1586,
        "has_AC": true,
        "year_built": 1955,
        "rent_price": 2600,
        "date_available": "2024-07-24",
        "is_favourite": true,
        "image_url": "https://ibb.co/zfMcTG4"
    },
    {
        "id": '2',
        "name": "Flat 2",
        "city": "Houston",
        "street_name": "Broadway",
        "street_number": 515,
        "area_size": 861,
        "has_AC": false,
        "year_built": 1990,
        "rent_price": 1929,
        "date_available": "2025-01-19",
        "is_favourite": true,
        "image_url": "https://ibb.co/DwnbTyy"
    },
    {
        "id": '3',
        "name": "Flat 3",
        "city": "Phoenix",
        "street_name": "Broadway",
        "street_number": 824,
        "area_size": 687,
        "has_AC": false,
        "year_built": 1990,
        "rent_price": 2188,
        "date_available": "2025-01-19",
        "is_favourite": true,
        "image_url": "https://ibb.co/HrbwdPv"
    },
    {
        "id": '4',
        "name": "Flat 4",
        "city": "Houston",
        "street_name": "2nd Ave",
        "street_number": 866,
        "area_size": 1136,
        "has_AC": false,
        "year_built": 1961,
        "rent_price": 1651,
        "date_available": "2024-05-27",
        "is_favourite": true,
        "image_url": "https://ibb.co/BVHzYnm"
    },
    {
        "id": '5',
        "name": "Flat 5",
        "city": "New York",
        "street_name": "Main St",
        "street_number": 876,
        "area_size": 1884,
        "has_AC": false,
        "year_built": 1976,
        "rent_price": 4026,
        "date_available": "2025-04-13",
        "is_favourite": true,
        "image_url": "https://ibb.co/j3d7tG8"
    },
    {
        "id": '6',
        "name": "Flat 6",
        "city": "Houston",
        "street_name": "Market St",
        "street_number": 313,
        "area_size": 1386,
        "has_AC": true,
        "year_built": 2006,
        "rent_price": 1172,
        "date_available": "2024-06-15",
        "is_favourite": true,
        "image_url": "https://ibb.co/yfj3rJS"
    },
    {
        "id": '7',
        "name": "Flat 7",
        "city": "New York",
        "street_name": "2nd Ave",
        "street_number": 857,
        "area_size": 1677,
        "has_AC": false,
        "year_built": 1972,
        "rent_price": 3403,
        "date_available": "2024-12-05",
        "is_favourite": false,
        "image_url": "https://ibb.co/TkTGBV0"
    },
    {
        "id": '8',
        "name": "Flat 8",
        "city": "Los Angeles",
        "street_name": "2nd Ave",
        "street_number": 812,
        "area_size": 972,
        "has_AC": true,
        "year_built": 2023,
        "rent_price": 3568,
        "date_available": "2024-08-10",
        "is_favourite": false,
        "image_url": "https://ibb.co/HHzRGd9"
    },
    {
        "id": '9',
        "name": "Flat 9",
        "city": "New York",
        "street_name": "Broadway",
        "street_number": 691,
        "area_size": 1793,
        "has_AC": false,
        "year_built": 2015,
        "rent_price": 2779,
        "date_available": "2024-11-19",
        "is_favourite": false,
        "image_url": "https://ibb.co/7jcYLpX"
    },
    {
        "id": '10',
        "name": "Flat 10",
        "city": "Los Angeles",
        "street_name": "Main St",
        "street_number": 643,
        "area_size": 1540,
        "has_AC": false,
        "year_built": 1972,
        "rent_price": 3408,
        "date_available": "2024-09-05",
        "is_favourite": false,
        "image_url": "https://ibb.co/tZYsQpC"
    }
];

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
        addListToLocalStorage('flats',JSON.stringify(flats));
        window.location.href = './../home/home.html';
     
    } else {
        alert('User not found');
    }
});

//anadido
form.addEventListener('submit', (event) => {
    event.preventDefault();

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    const users = JSON.parse(localStorage.getItem('users'));
    const validUser = users.find(user => user.username === username && user.password === password)

    if (validUser) {
        // Si el usuario es válido, guarda su email, nombre, apellido, fecha de nacimiento y contraseña en localStorage
        localStorage.setItem('email', validUser.email);
        localStorage.setItem('name', validUser.name);
        localStorage.setItem('lastname', validUser.lastname);
        localStorage.setItem('birthdate', validUser.birthdate);
        localStorage.setItem('password', validUser.password);
        localStorage.setItem('username', username);
        localStorage.setItem('isLoggedIn', 'true');
        window.location.href = './../home/home.html';
    } else {
        alert('User not found');
    }
});
