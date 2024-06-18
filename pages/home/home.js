let flats = [
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

let flatsContainer = document.getElementById('flats');

flats.forEach(function(flat) {
    let flatElement = document.createElement('div');
    flatElement.className = 'flat';

    flatElement.innerHTML = `
        <div class='container-div'>
        <p class="flat__date">Available from: ${flat.date_available}</p>
        </div>    
        <img src="${flat.image_url}" alt="Image of ${flat.name}">
        <div class='container-div'>
        <h2 class="flat__text">${flat.city}</h2>
        <p class="flat__text">Rent: $${flat.rent_price}</p>
        </div>
        <div class='container-div'>
        <p class="flat__text">${flat.street_name} ${flat.street_number}</p>
        <p class="flat__text">Area: ${flat.area_size} sqm</p>
        </div>
        <div class='container-div'>
        <p class="flat__text">Air Conditioning: ${flat.has_AC ? 'Yes' : 'No'}</p>
        <p class="flat__text">Built in: ${flat.year_built}</p>
        </div> 
    `;

    flatsContainer.appendChild(flatElement);
});