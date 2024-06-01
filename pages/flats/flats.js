const flats =[
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
        "image_url": "https://images.unsplash.com/photo-1570129477492-45c003edd2be"
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
        "image_url": "https://unsplash.com/photos/living-room-L7EwHkq1B2s"
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
        "image_url": "https://images.unsplash.com/photo-1595421514286-1acb50ef089a"
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
        "image_url": "https://images.unsplash.com/photo-1613977257361-cf82f3e3c42d"
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
        "image_url": "https://images.unsplash.com/photo-1618227828570-70701799058e"
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
        "image_url": "https://images.unsplash.com/photo-1572072393749-3ca9c8ea0831"
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
        "image_url": "https://images.unsplash.com/photo-1600585154340-be6161c2d199"
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
        "image_url": "https://images.unsplash.com/photo-1560448079-8b1c584b9b58"
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
        "image_url": "https://images.unsplash.com/photo-1580587771525-78b9dba3b914"
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
        "image_url": "https://images.unsplash.com/photo-1600047503073-31f05bbad4d2"
    }
];

document.addEventListener('DOMContentLoaded', ()=>{
    displayFlats(flats);
});

const displayFlats = (flats)=>{
    const flatsContainer = document.getElementById('flats-container');
    flatsContainer.innerHTML = '';
    flats.forEach(flat=>{
        flatsContainer.appendChild(createFlatRow(flat));
    })
}
const createFlatRow = (flat)=>{
    
    const flatItem = document.createElement('tr');
    flatItem.className = 'flat';
    flatItem.innerHTML = `
      <td>${flat.id}</td>
      <td>${flat.name}</td>
      <td>${flat.city}</td>
      <td>${flat.street_name}</td>
      <td>${flat.street_number}</td>
      <td>${flat.area_size}</td>
      <td>
      ${createRadioButtonGroup(`hasAc-${flat.id}`, flat.has_AC)}
      </td>
      <td>${flat.year_built}</td>
      <td>${flat.rent_price}</td>
      <td>${flat.date_available}</td>
      <td>
       ${createRadioButtonGroup(`favourite-${flat.id}`, flat.is_favourite)}
      </td>
      <td>
      <img src="${flat.image_url}" alt="${flat.id}">
      </td>
      <td>
      <div class="button-container">
      <button class="button-edit" onClick="handleEdit(${flat.id})">Edit</button>
      <button class="button-delete" onClick="handleDelete(${flat.id})">Delete</button>
      </div>
      </td>
      `;
      return flatItem;
}
const createRadioButtonGroup =(name, isChecked) =>{
    return `
    <input type="radio" id="${name}-yes" name="${name}" value="yes" ${isChecked ? 'checked':''} disabled/>
    <label for="favourite-${name}-yes">Yes</label>
    <input type="radio" id="${name}-no" name="${name}" value="no" ${!isChecked ? 'checked': ''} disabled/>
    <label for="notFavourite-${name}">No</label>
    `;
}
const handleDelete =(flat_id)=>{
    const response = confirm(`Are you sure to delete the flat: ${flat_id}?`);
    let newFlats = flats;
    if (response) {
        newFlats= flats.filter(flat=>flat.id != flat_id)
        displayFlats(newFlats);
        
    }
}