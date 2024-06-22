const flats = [
    {
        "id": 1,
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
        "image_url": "./../../images/department1.png"
        
    },
    {
        "id": 2,
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
        "image_url": "./../../images/department2.png"
    },
    {
        "id": 3,
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
        "image_url": "./../../images/department3.png"
    },
    {
        "id": 4,
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
        "image_url": "./../../images/department4.png"
    },
    {
        "id": 5,
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
        "image_url": "./../../images/department5.png"
    },
    {
        "id": 6,
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
        "image_url": "./../../images/department6.png"
    },
    {
        "id": 7,
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
        "image_url": "./../../images/department7.png"
    },
    {
        "id": 8,
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
        "image_url": "./../../images/department8.png"
    },
    {
        "id": 9,
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
        "image_url": "./../../images/department9.png"
    },
    {
        "id": 10,
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
        "image_url": "./../../images/department10.png"
    }
];

const initialUsers = [
    {
        email: 'paulrios@outlook.es',
        password: '1234A.',
        name: 'paul',
        lastname: 'rios',
        birthdate: '1994-04-16',
        username: 'prios',
        isLoggedIn: false,
        expiryTyme: new Date()
    },
    {
        email: 'diana@gmail.com',
        password: '1234A.',
        name: 'diana',
        lastname: 'samaniego',
        birthdate: '1994-04-16',
        username: 'dsamaniego',
        isLoggedIn: false,
        expiryTyme: new Date()
    }
];
if (!localStorage.getItem('users')) {
    localStorage.setItem('users', JSON.stringify(initialUsers));
}
const form = document.querySelector('.form-login');
form.addEventListener('submit', (event) => {
    event.preventDefault();

    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    if (!emailRegex.test(email) || !passwordRegex.test(password)) {
        Toast.fire({
            icon: "error",
            title: "Invalid email or password",
            text: "Please enter valid data"
        });
        return;
    }

    const users = JSON.parse(localStorage.getItem('users'));
    const validUser = users.find(user => user.email === email && user.password === password)
    if (validUser) {
         // Si el usuario es válido, guarda su email, nombre, apellido, fecha de nacimiento y contraseña en localStorage
         localStorage.setItem('email', validUser.email);
         localStorage.setItem('name', validUser.name);
         localStorage.setItem('lastname', validUser.lastname);
         localStorage.setItem('birthdate', validUser.birthdate);
         localStorage.setItem('password', validUser.password);
         localStorage.setItem('username', validUser.username);
         localStorage.setItem('isLoggedIn', 'true');

        addListToLocalStorage('flats', JSON.stringify(flats));
        validUser.expiryTime = new Date(new Date().getTime() + 60 * 60*1000).toISOString();
        validUser.isLoggedIn = true;
        addItemToLocalStorage('userLogged', JSON.stringify(validUser));
        Toast.fire({
            icon: "success",
            title: "Valid log",
            text: "Welcome to Rentease"
        });
        setTimeout(() => {
            window.location.href = './../home/home.html';
          }, "3000");
       

    } else {
        Toast.fire({
            icon: "error",
            title: "User not found",
            text: "Please try it later"
        });
    }
});
const Toast = Swal.mixin({
    toast: true,
    position: 'top',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
    }
});